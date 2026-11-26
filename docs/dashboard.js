"use strict";

const byId = (name) => document.getElementById(name);
const make = (tag, text, className) => {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (className) node.className = className;
  return node;
};
const integer = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
const currency = new Intl.NumberFormat("en-US", {style:"currency", currency:"USD", maximumFractionDigits:0});
const compactCurrency = new Intl.NumberFormat("en-US", {style:"currency", currency:"USD", notation:"compact", maximumFractionDigits:2});
const pct = new Intl.NumberFormat("en-US",{style:"percent",maximumFractionDigits:1,minimumFractionDigits:1});

function format(value, unit, short = false) {
  if (value === null || value === undefined) return "—";
  switch (unit) {
    case "money": return (short ? compactCurrency : currency).format(value);
    case "pct": return pct.format(value);
    case "pp": return (value > 0 ? "+" : "") + (value * 100).toFixed(2) + " pp";
    case "decimal": return Number(value).toFixed(1);
    case "count": return integer.format(value);
    default: return String(value);
  }
}

const lookup = window.PORTFOLIO || {};
const requested = new URLSearchParams(location.search).get("case");
const slug = Object.hasOwn(lookup, requested) ? requested : "federal-contracting";
const report = lookup[slug];
let sort = {index: null, sign: 1};
let current;
let observers = [];

function displayTable(columns, data, sortable = false) {
  const element = make("table");
  const header = element.createTHead().insertRow();
  const body = element.createTBody();
  columns.forEach(([title, unit], index) => {
    const cell = make("th", undefined, unit === "text" ? "" : "num");
    cell.scope = "col";
    if (sortable) {
      const button = make("button", title);
      const indicator = make("span", sort.index === index ? (sort.sign === 1 ? "↑" : "↓") : "↕", "sort-indicator");
      indicator.setAttribute("aria-hidden", "true");
      button.append(indicator);
      button.type = "button";
      cell.setAttribute("aria-sort", sort.index === index ? (sort.sign === 1 ? "ascending" : "descending") : "none");
      button.addEventListener("click", () => {
        sort = {index, sign: sort.index === index && sort.sign === 1 ? -1 : 1};
        renderRanking();
        byId("ranking").querySelectorAll("thead button")[index].focus();
      });
      cell.append(button);
    } else {
      cell.textContent = title;
    }
    header.append(cell);
  });
  for (const row of data) {
    const entry = body.insertRow();
    row.forEach((value, index) => {
      const cell = entry.insertCell();
      const unit = columns[index][1];
      cell.className = unit === "text" ? "" : "num";
      if (value === "PASS" || value === "HOLD") {
        cell.append(make("span", value, "state " + value.toLowerCase()));
      } else {
        cell.textContent = format(value, unit);
      }
    });
  }
  if (!data.length) {
    const cell = body.insertRow().insertCell();
    cell.colSpan = columns.length;
    cell.textContent = "No rows meet the criteria for this selection.";
  }
  return element;
}

function sortedRows() {
  const result = [...current.table.rows];
  if (sort.index === null) return result;
  return result.sort((a, b) => {
    const x = a[sort.index], y = b[sort.index];
    if (x === y) return 0;
    if (x == null) return 1;
    if (y == null) return -1;
    return sort.sign * (typeof x === "number" ? x - y : String(x).localeCompare(String(y)));
  });
}

function renderRanking() {
  byId("rank-heading").textContent = current.table.title;
  byId("rank-summary").textContent = current.table.subtitle;
  byId("ranking").replaceChildren(displayTable(current.table.columns, sortedRows(), true));
}

function downloadCSV() {
  const escape = (cell) => {
    let value = cell == null ? "" : String(cell);
    if (typeof cell === "string" && /^[=+@\-\t\r]/.test(value)) value = "'" + value;
    return '"' + value.replace(/"/g, '""') + '"';
  };
  const source = [current.table.columns.map(([name]) => name), ...sortedRows()];
  const csv = source.map((row) => row.map(escape).join(",")).join("\r\n") + "\r\n";
  const url = URL.createObjectURL(new Blob([csv], {type:"text/csv;charset=utf-8"}));
  const button = make("a");
  button.href = url;
  button.download = slug + "-" + byId("scope").value.toLowerCase().replace(/[^a-z0-9]+/g, "-") + ".csv";
  document.body.append(button);
  button.click();
  button.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 2000);
}

function paintCanvas(shell, spec, colors) {
  const canvas = make("canvas");
  canvas.setAttribute("role","img");
  canvas.setAttribute("aria-label", spec.title + ". The chart data table is available below.");
  const tooltip = make("div", undefined, "hover-tip");
  tooltip.hidden = true;
  shell.append(canvas, tooltip);
  let targets = [];

  const draw = () => {
    const {width, height} = canvas.getBoundingClientRect();
    if (!width || !height) return;
    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    const ctx = canvas.getContext("2d");
    ctx.scale(ratio, ratio);
    const values = spec.series.flatMap(({values}) => values.filter((x) => x != null));
    const max = Math.max(0, ...values), min = Math.min(0, ...values);
    const upper = spec.unit === "pct" ? 1 : (max || 1);
    const lower = spec.unit === "pct" ? 0 : min;
    const space = upper - lower;
    const left = spec.unit === "money" ? 54 : 41;
    const right = width - 12;
    const top = 15, bottom = height - 29;
    const y = (value) => bottom - ((value - lower) / space) * (bottom - top);
    const center = (index) => left + (right-left) * ((index + 0.5) / spec.labels.length);
    const labelStride = Math.ceil(spec.labels.length / Math.max(3, Math.floor((right-left)/41)));
    ctx.font = '11px "Segoe UI", system-ui, sans-serif';
    for (let tick = 0; tick <= 4; tick++) {
      const value = lower + (space * tick / 4);
      const yPos = y(value);
      ctx.strokeStyle = "#c7d6ef";
      ctx.beginPath(); ctx.moveTo(left, yPos); ctx.lineTo(right,yPos); ctx.stroke();
      ctx.fillStyle = "#435572";
      ctx.textAlign = "right";
      ctx.fillText(format(value, spec.unit, true),left-5,yPos+4);
    }
    if (lower < 0) {
      ctx.strokeStyle = "#8495a8";
      ctx.beginPath(); ctx.moveTo(left,y(0)); ctx.lineTo(right,y(0)); ctx.stroke();
    }
    ctx.textAlign = "center";
    spec.labels.forEach((label,index) => {
      if (index % labelStride !== 0) return;
      ctx.fillStyle = "#435572";
      ctx.fillText(label,center(index),bottom+18);
    });
    const isLine = spec.kind === "line";
    const cell = (right-left) / spec.labels.length;
    const barWidth = Math.min(28, 0.79 * cell / spec.series.length);
    targets = [];
    spec.series.forEach((item, part) => {
      const color = colors[part];
      ctx.strokeStyle = color;
      if (isLine) {
        ctx.beginPath();
        ctx.lineWidth = 2.5;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        let active = false;
        item.values.forEach((value,index) => {
          if (value == null) { active = false; return; }
          const x = center(index);
          if (active) ctx.lineTo(x,y(value)); else ctx.moveTo(x,y(value));
          active = true;
        });
        ctx.stroke();
      }
      item.values.forEach((value,index) => {
        if (value == null) return;
        const x = isLine ? center(index) : center(index) + (part-(spec.series.length-1)/2)*barWidth;
        if (isLine) {
          ctx.beginPath();
          ctx.arc(x, y(value), 3.25, 0, 2 * Math.PI);
          ctx.fillStyle = "#f7fbff";
          ctx.fill();
          ctx.lineWidth = 2;
          ctx.stroke();
        } else {
          const barTop = Math.min(y(0), y(value));
          const barHeight = Math.max(1, Math.abs(y(value) - y(0)));
          const barSize = Math.max(1, barWidth - 2);
          const gradient = ctx.createLinearGradient(0, y(value), 0, y(0));
          gradient.addColorStop(0, color);
          gradient.addColorStop(1, color + "a8");
          ctx.fillStyle = gradient;
          if (typeof ctx.roundRect === "function") {
            const corner = Math.min(3, barSize / 2, barHeight / 2);
            ctx.beginPath();
            ctx.roundRect(x - barSize / 2, barTop, barSize, barHeight, value >= 0
              ? [corner, corner, 0, 0]
              : [0, 0, corner, corner]);
            ctx.fill();
          } else {
            ctx.fillRect(x - barSize / 2, barTop, barSize, barHeight);
          }
        }
        targets.push({x,y:y(value),baseline:y(0),key:index,label:item.label,value});
      });
    });
  };
  canvas.addEventListener("pointermove",(event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX-rect.left, y = event.clientY-rect.top;
    const distance = (pt) => {
      if (spec.kind === "line") return Math.hypot(pt.x-x,pt.y-y);
      const clippedY = Math.max(Math.min(y,Math.max(pt.y,pt.baseline)),Math.min(pt.y,pt.baseline));
      return Math.hypot(pt.x-x,clippedY-y);
    };
    const point = targets.reduce((best, next) => !best || distance(next) < distance(best) ? next : best, null);
    if (!point || distance(point) > 22) { tooltip.hidden=true; return; }
    tooltip.textContent = spec.labels[point.key] + " · " + point.label + " · " + format(point.value,spec.unit);
    tooltip.hidden=false;
    tooltip.style.left = Math.max(0,Math.min(rect.width-tooltip.offsetWidth,x+9))+"px";
    tooltip.style.top = Math.max(0,y-32)+"px";
  });
  canvas.addEventListener("pointerleave", () => { tooltip.hidden = true; });
  const observer = new ResizeObserver(draw);
  observer.observe(canvas);
  observers.push(observer);
  requestAnimationFrame(draw);
}

function renderChart(spec) {
  const section = make("section", undefined, "panel chart-panel");
  const header = make("div", undefined, "panel-head");
  header.append(make("h2",spec.title),make("p",spec.subtitle));
  section.append(header);
  const properties = getComputedStyle(document.body);
  const colors = [1,2,3].map((n) => properties.getPropertyValue("--series"+n).trim());
  if (spec.kind === "bars") {
    const bars = make("div",undefined,"bars");
    const values = spec.series[0].values;
    const max = Math.max(1,...values);
    spec.labels.forEach((label,index) => {
      const line = make("div");
      const text = make("div",undefined,"bar-label");
      text.append(make("span",label),make("strong",format(values[index],spec.unit,true)));
      const track = make("div",undefined,"track");
      const fill = make("span");
      fill.style.width = (100*values[index]/max) + "%";
      track.append(fill);
      line.append(text,track);
      line.title = label + " · " + format(values[index],spec.unit);
      bars.append(line);
    });
    if (!spec.labels.length) bars.append(make("p","No qualifying segments for the selected scope."));
    section.append(bars);
  } else {
    const legend = make("div",undefined,"legend");
    spec.series.forEach((item,index) => {
      const itemElement = make("span");
      const key = make("i", undefined, "swatch");
      key.style.setProperty("--color",colors[index]);
      key.setAttribute("aria-hidden","true");
      itemElement.append(key,document.createTextNode(item.label));
      legend.append(itemElement);
    });
    const frame = make("div",undefined,"canvas-shell");
    section.append(legend,frame);
    paintCanvas(frame,spec,colors);
  }
  const details = make("details",undefined,"chart-data");
  const data = spec.labels.map((label,index) => [label,...spec.series.map((item) => item.values[index])]);
  details.append(make("summary","View chart data"),displayTable([["Group","text"],...spec.series.map((item)=>[item.label,spec.unit])],data));
  section.append(details);
  return section;
}

function render() {
  const selection = byId("scope").value;
  current = report.views[selection];
  sort = {index:null,sign:1};
  byId("metrics").replaceChildren(...current.metrics.map((item) => {
    const kpi = make("section",undefined,"kpi");
    kpi.append(make("h2", item.label),make("strong", format(item.value,item.unit,true)),make("p",item.note));
    return kpi;
  }));
  observers.forEach((observer) => observer.disconnect());
  observers = [];
  byId("charts").replaceChildren(...current.charts.map(renderChart));
  renderRanking();
  byId("action").textContent = current.action;
  byId("view-status").textContent = "Showing " + selection;
}

if (report) {
  document.title = report.title + " | Weston Zloty";
  document.body.dataset.accent = report.accent;
  byId("title").textContent = report.title;
  byId("description").textContent = report.description;
  byId("provenance").textContent = report.source + "  /  " + report.period;
  byId("filter-label").textContent = report.filter;
  byId("method").textContent = report.method;
  for (const [key,item] of Object.entries(lookup)) {
    const link=make("a",item.short);
    link.href="./dashboard.html?case="+encodeURIComponent(key);
    if (key===slug) link.setAttribute("aria-current","page");
    byId("project-nav").append(link);
  }
  for (const label of Object.keys(report.views)) byId("scope").append(new Option(label,label));
  byId("scope").addEventListener("change",render);
  byId("filters").addEventListener("submit",(event)=>event.preventDefault());
  byId("reset").addEventListener("click",()=>{byId("scope").selectedIndex=0;render();});
  byId("download").addEventListener("click",downloadCSV);
  byId("check-count").textContent = report.controls.length + " passed";
  byId("checks").append(...report.controls.map((item)=>make("li",item.status+" · "+item.control)));
  render();
} else {
  byId("description").textContent = "The portfolio data bundle is missing. Rebuild the dashboard data and reopen this page.";
}
