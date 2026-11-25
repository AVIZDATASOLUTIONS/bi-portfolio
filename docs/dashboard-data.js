window.PORTFOLIO = {
  "federal-contracting": {
    "title": "Federal contracting intelligence",
    "short": "Federal contracting",
    "source": "Public USAspending data",
    "period": "FY 2023–2025",
    "filter": "Awarding agency",
    "views": {
      "All agencies": {
        "metrics": [
          {
            "label": "Net obligations",
            "value": 40308558112.98,
            "unit": "money",
            "note": "Signed federal actions"
          },
          {
            "label": "Funded awards",
            "value": 4844,
            "unit": "count",
            "note": "At least one positive action"
          },
          {
            "label": "Deobligations",
            "value": -2084005578.2,
            "unit": "money",
            "note": "Negative actions"
          },
          {
            "label": "Qualifying segments",
            "value": 32,
            "unit": "count",
            "note": "Three years of activity and data checks"
          }
        ],
        "charts": [
          {
            "title": "Obligations by fiscal month",
            "subtitle": "Net obligations include negative adjustments. Fiscal year starts in October.",
            "labels": [
              "Oct",
              "Nov",
              "Dec",
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep"
            ],
            "series": [
              {
                "label": "FY2023",
                "values": [
                  202618505.83,
                  526298147.49,
                  656507281.58,
                  900708315.19,
                  980065995.62,
                  1299173424.32,
                  820867465.88,
                  1239588888.6,
                  1456463092.16,
                  1208460657.25,
                  1384707661.82,
                  2942853943.41
                ]
              },
              {
                "label": "FY2024",
                "values": [
                  305360700.26,
                  727004929.23,
                  789438422.5,
                  880572944.12,
                  831472683.95,
                  1121002981.48,
                  1072431743.84,
                  1380769585.86,
                  1588718296.3,
                  1326076089.69,
                  1476470583.58,
                  2682770749.15
                ]
              },
              {
                "label": "FY2025",
                "values": [
                  278706240.73,
                  855329042.62,
                  665623243.26,
                  1241576591.25,
                  851950829.08,
                  1266864496.03,
                  828274709.6,
                  1003816510.98,
                  1121325126.82,
                  959223006.27,
                  1115273985.84,
                  2320191241.39
                ]
              }
            ],
            "unit": "money",
            "kind": "columns"
          },
          {
            "title": "Largest qualifying segments",
            "subtitle": "Net obligations by awarding subagency and NAICS, across three fiscal years.",
            "labels": [
              "Federal Acquisition Service · 541512",
              "Centers for Medicare and Medicaid Services · 541512",
              "Internal Revenue Service · 541512",
              "National Institutes of Health · 541512",
              "Centers for Medicare and Medicaid Services · 541511",
              "Federal Acquisition Service · 541511"
            ],
            "series": [
              {
                "label": "Net obligations",
                "values": [
                  17244104923.09,
                  5084490505.36,
                  3935841108.89,
                  2674789155.27,
                  2354195482.27,
                  2187664243.84
                ]
              }
            ],
            "unit": "money",
            "kind": "bars"
          }
        ],
        "table": {
          "title": "Buyer research shortlist",
          "subtitle": "Score combines spend, award activity and supplier diversity. Rankings use the full study scope.",
          "columns": [
            [
              "Awarding organization",
              "text"
            ],
            [
              "NAICS",
              "text"
            ],
            [
              "Net obligations",
              "money"
            ],
            [
              "Funded awards",
              "count"
            ],
            [
              "Top supplier",
              "pct"
            ],
            [
              "Priority score",
              "decimal"
            ]
          ],
          "rows": [
            [
              "National Institutes of Health",
              "541512",
              2674789155.27,
              544,
              0.15144700214597126,
              94.7
            ],
            [
              "National Institutes of Health",
              "541511",
              899110108.37,
              747,
              0.10349829296462158,
              90.5
            ],
            [
              "Federal Acquisition Service",
              "541512",
              17244104923.09,
              386,
              0.2187453668178426,
              88.3
            ],
            [
              "Federal Acquisition Service",
              "541511",
              2187664243.84,
              323,
              0.128733296149462,
              87.3
            ],
            [
              "Centers for Medicare and Medicaid Services",
              "541512",
              5084490505.36,
              190,
              0.13713765497352856,
              86.4
            ],
            [
              "Internal Revenue Service",
              "541511",
              841590709.75,
              247,
              0.10861406967535536,
              85.8
            ],
            [
              "Internal Revenue Service",
              "541512",
              3935841108.89,
              396,
              0.2427599236117199,
              85.3
            ],
            [
              "Centers for Disease Control and Prevention",
              "541512",
              1130648901.04,
              215,
              0.18697015250541105,
              80.2
            ],
            [
              "Centers for Medicare and Medicaid Services",
              "541511",
              2354195482.27,
              141,
              0.21826290509508142,
              74.2
            ],
            [
              "Food and Drug Administration",
              "541511",
              672199002.55,
              238,
              0.21908485394672264,
              69.5
            ],
            [
              "Office of the Assistant Secretary for Administration",
              "541512",
              350096170.51,
              103,
              0.19687230242870205,
              69.1
            ],
            [
              "Food and Drug Administration",
              "541512",
              650410341.12,
              184,
              0.2896881244207851,
              63.3
            ],
            [
              "Office of the Assistant Secretary for Administration",
              "541511",
              185638581.57,
              86,
              0.20032002829154014,
              61.7
            ],
            [
              "Centers for Disease Control and Prevention",
              "541511",
              179304236.17,
              110,
              0.2816676537240204,
              56.3
            ],
            [
              "Bureau of the Fiscal Service",
              "541512",
              176612045.48,
              71,
              0.2103605245526776,
              55.3
            ],
            [
              "Bureau of the Fiscal Service",
              "541511",
              184858584.43,
              154,
              0.46865074546641844,
              50.2
            ],
            [
              "Health Resources and Services Administration",
              "541511",
              259517690.54,
              76,
              0.6804784337195631,
              42.2
            ],
            [
              "Bureau of Engraving and Printing",
              "541512",
              176128392.39,
              51,
              0.40106435951287034,
              40.8
            ],
            [
              "Health Resources and Services Administration",
              "541512",
              119449942.36,
              35,
              0.18694760259441187,
              40.6
            ],
            [
              "Office of Administrative Services",
              "541511",
              122277385.11,
              45,
              0.28725413185015325,
              40.2
            ],
            [
              "Office of Administrative Services",
              "541512",
              245686394.44,
              32,
              0.3099859398332973,
              39.8
            ],
            [
              "Indian Health Service",
              "541512",
              24937655.78,
              63,
              0.3492858815440082,
              35.0
            ],
            [
              "Office of the Comptroller of the Currency",
              "541511",
              127092669.06,
              37,
              0.3297902927107981,
              34.5
            ],
            [
              "Administration for Children and Families",
              "541511",
              44420479.15,
              15,
              0.20261269096324028,
              30.9
            ],
            [
              "Office of Assistant Secretary for Preparedness and Response",
              "541512",
              38357667.6,
              48,
              0.4097941272400369,
              29.2
            ],
            [
              "Office of the Comptroller of the Currency",
              "541512",
              43210236.45,
              29,
              0.35195904693585883,
              27.5
            ],
            [
              "Indian Health Service",
              "541511",
              16051067.15,
              97,
              0.7455623524634923,
              23.8
            ],
            [
              "Agency for Healthcare Research and Quality",
              "541511",
              53986721.68,
              16,
              0.3808845632531859,
              21.9
            ],
            [
              "Bureau of Engraving and Printing",
              "541511",
              21379604.85,
              18,
              0.43957646492912766,
              16.6
            ],
            [
              "United States Mint",
              "541511",
              16249107.92,
              31,
              0.9970802661628655,
              11.9
            ],
            [
              "Office of Assistant Secretary for Preparedness and Response",
              "541511",
              17482715.6,
              14,
              0.39900751522737304,
              10.3
            ],
            [
              "Public Buildings Service",
              "541512",
              11283236.61,
              10,
              0.4324338033613297,
              6.9
            ]
          ]
        },
        "action": "Research National Institutes of Health / NAICS 541512 first. Check current notices, acquisition forecasts and contract vehicles before assigning capture resources.",
        "evidence": {
          "totals": {
            "actions": 23996,
            "net": 40308558112.98,
            "reductions": -2084005578.2,
            "funded": 4844
          },
          "top_segments": [
            {
              "agency": "Department of Health and Human Services",
              "bureau": "National Institutes of Health",
              "naics": "541512",
              "net": 2674789155.27,
              "funded_awards": 544,
              "top_supplier_share": 0.15144700214597126,
              "score": 94.7
            },
            {
              "agency": "Department of Health and Human Services",
              "bureau": "National Institutes of Health",
              "naics": "541511",
              "net": 899110108.37,
              "funded_awards": 747,
              "top_supplier_share": 0.10349829296462158,
              "score": 90.5
            },
            {
              "agency": "General Services Administration",
              "bureau": "Federal Acquisition Service",
              "naics": "541512",
              "net": 17244104923.09,
              "funded_awards": 386,
              "top_supplier_share": 0.2187453668178426,
              "score": 88.3
            },
            {
              "agency": "General Services Administration",
              "bureau": "Federal Acquisition Service",
              "naics": "541511",
              "net": 2187664243.84,
              "funded_awards": 323,
              "top_supplier_share": 0.128733296149462,
              "score": 87.3
            },
            {
              "agency": "Department of Health and Human Services",
              "bureau": "Centers for Medicare and Medicaid Services",
              "naics": "541512",
              "net": 5084490505.36,
              "funded_awards": 190,
              "top_supplier_share": 0.13713765497352856,
              "score": 86.4
            }
          ]
        }
      },
      "HHS": {
        "metrics": [
          {
            "label": "Net obligations",
            "value": 14953837333.69,
            "unit": "money",
            "note": "Signed federal actions"
          },
          {
            "label": "Funded awards",
            "value": 2983,
            "unit": "count",
            "note": "At least one positive action"
          },
          {
            "label": "Deobligations",
            "value": -745337564.65,
            "unit": "money",
            "note": "Negative actions"
          },
          {
            "label": "Qualifying segments",
            "value": 18,
            "unit": "count",
            "note": "Three years of activity and data checks"
          }
        ],
        "charts": [
          {
            "title": "Obligations by fiscal month",
            "subtitle": "Net obligations include negative adjustments. Fiscal year starts in October.",
            "labels": [
              "Oct",
              "Nov",
              "Dec",
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep"
            ],
            "series": [
              {
                "label": "FY2023",
                "values": [
                  46883906.14,
                  225907377.27,
                  150951109.84,
                  337383951.04,
                  453961214.22,
                  489287359.72,
                  253250051.4,
                  458883439.99,
                  605203783.78,
                  399254802.52,
                  687699350.29,
                  966371924.03
                ]
              },
              {
                "label": "FY2024",
                "values": [
                  85825576.58,
                  216920032.79,
                  191563364.41,
                  387422030.95,
                  278348346.71,
                  423843808.51,
                  293763116.07,
                  360926767.53,
                  831704904.54,
                  536740354.7,
                  605640885.68,
                  966650041.73
                ]
              },
              {
                "label": "FY2025",
                "values": [
                  124886487.89,
                  304082345.31,
                  153151739.51,
                  419493982.32,
                  353785466.2,
                  281446583.17,
                  274583175.13,
                  366637916.27,
                  693535799.06,
                  435205938.99,
                  442402500.19,
                  850237899.21
                ]
              }
            ],
            "unit": "money",
            "kind": "columns"
          },
          {
            "title": "Largest qualifying segments",
            "subtitle": "Net obligations by awarding subagency and NAICS, across three fiscal years.",
            "labels": [
              "Centers for Medicare and Medicaid Services · 541512",
              "National Institutes of Health · 541512",
              "Centers for Medicare and Medicaid Services · 541511",
              "Centers for Disease Control and Prevention · 541512",
              "National Institutes of Health · 541511",
              "Food and Drug Administration · 541511"
            ],
            "series": [
              {
                "label": "Net obligations",
                "values": [
                  5084490505.36,
                  2674789155.27,
                  2354195482.27,
                  1130648901.04,
                  899110108.37,
                  672199002.55
                ]
              }
            ],
            "unit": "money",
            "kind": "bars"
          }
        ],
        "table": {
          "title": "Buyer research shortlist",
          "subtitle": "Score combines spend, award activity and supplier diversity. Rankings use the full study scope.",
          "columns": [
            [
              "Awarding organization",
              "text"
            ],
            [
              "NAICS",
              "text"
            ],
            [
              "Net obligations",
              "money"
            ],
            [
              "Funded awards",
              "count"
            ],
            [
              "Top supplier",
              "pct"
            ],
            [
              "Priority score",
              "decimal"
            ]
          ],
          "rows": [
            [
              "National Institutes of Health",
              "541512",
              2674789155.27,
              544,
              0.15144700214597126,
              94.7
            ],
            [
              "National Institutes of Health",
              "541511",
              899110108.37,
              747,
              0.10349829296462158,
              90.5
            ],
            [
              "Centers for Medicare and Medicaid Services",
              "541512",
              5084490505.36,
              190,
              0.13713765497352856,
              86.4
            ],
            [
              "Centers for Disease Control and Prevention",
              "541512",
              1130648901.04,
              215,
              0.18697015250541105,
              80.2
            ],
            [
              "Centers for Medicare and Medicaid Services",
              "541511",
              2354195482.27,
              141,
              0.21826290509508142,
              74.2
            ],
            [
              "Food and Drug Administration",
              "541511",
              672199002.55,
              238,
              0.21908485394672264,
              69.5
            ],
            [
              "Office of the Assistant Secretary for Administration",
              "541512",
              350096170.51,
              103,
              0.19687230242870205,
              69.1
            ],
            [
              "Food and Drug Administration",
              "541512",
              650410341.12,
              184,
              0.2896881244207851,
              63.3
            ],
            [
              "Office of the Assistant Secretary for Administration",
              "541511",
              185638581.57,
              86,
              0.20032002829154014,
              61.7
            ],
            [
              "Centers for Disease Control and Prevention",
              "541511",
              179304236.17,
              110,
              0.2816676537240204,
              56.3
            ],
            [
              "Health Resources and Services Administration",
              "541511",
              259517690.54,
              76,
              0.6804784337195631,
              42.2
            ],
            [
              "Health Resources and Services Administration",
              "541512",
              119449942.36,
              35,
              0.18694760259441187,
              40.6
            ],
            [
              "Indian Health Service",
              "541512",
              24937655.78,
              63,
              0.3492858815440082,
              35.0
            ],
            [
              "Administration for Children and Families",
              "541511",
              44420479.15,
              15,
              0.20261269096324028,
              30.9
            ],
            [
              "Office of Assistant Secretary for Preparedness and Response",
              "541512",
              38357667.6,
              48,
              0.4097941272400369,
              29.2
            ],
            [
              "Indian Health Service",
              "541511",
              16051067.15,
              97,
              0.7455623524634923,
              23.8
            ],
            [
              "Agency for Healthcare Research and Quality",
              "541511",
              53986721.68,
              16,
              0.3808845632531859,
              21.9
            ],
            [
              "Office of Assistant Secretary for Preparedness and Response",
              "541511",
              17482715.6,
              14,
              0.39900751522737304,
              10.3
            ]
          ]
        },
        "action": "Research National Institutes of Health / NAICS 541512 first. Check current notices, acquisition forecasts and contract vehicles before assigning capture resources.",
        "evidence": {
          "totals": {
            "actions": 11005,
            "net": 14953837333.69,
            "reductions": -745337564.65,
            "funded": 2983
          },
          "top_segments": [
            {
              "agency": "Department of Health and Human Services",
              "bureau": "National Institutes of Health",
              "naics": "541512",
              "net": 2674789155.27,
              "funded_awards": 544,
              "top_supplier_share": 0.15144700214597126,
              "score": 94.7
            },
            {
              "agency": "Department of Health and Human Services",
              "bureau": "National Institutes of Health",
              "naics": "541511",
              "net": 899110108.37,
              "funded_awards": 747,
              "top_supplier_share": 0.10349829296462158,
              "score": 90.5
            },
            {
              "agency": "Department of Health and Human Services",
              "bureau": "Centers for Medicare and Medicaid Services",
              "naics": "541512",
              "net": 5084490505.36,
              "funded_awards": 190,
              "top_supplier_share": 0.13713765497352856,
              "score": 86.4
            },
            {
              "agency": "Department of Health and Human Services",
              "bureau": "Centers for Disease Control and Prevention",
              "naics": "541512",
              "net": 1130648901.04,
              "funded_awards": 215,
              "top_supplier_share": 0.18697015250541105,
              "score": 80.2
            },
            {
              "agency": "Department of Health and Human Services",
              "bureau": "Centers for Medicare and Medicaid Services",
              "naics": "541511",
              "net": 2354195482.27,
              "funded_awards": 141,
              "top_supplier_share": 0.21826290509508142,
              "score": 74.2
            }
          ]
        }
      },
      "Treasury": {
        "metrics": [
          {
            "label": "Net obligations",
            "value": 5539130750.64,
            "unit": "money",
            "note": "Signed federal actions"
          },
          {
            "label": "Funded awards",
            "value": 1052,
            "unit": "count",
            "note": "At least one positive action"
          },
          {
            "label": "Deobligations",
            "value": -311463544.71,
            "unit": "money",
            "note": "Negative actions"
          },
          {
            "label": "Qualifying segments",
            "value": 9,
            "unit": "count",
            "note": "Three years of activity and data checks"
          }
        ],
        "charts": [
          {
            "title": "Obligations by fiscal month",
            "subtitle": "Net obligations include negative adjustments. Fiscal year starts in October.",
            "labels": [
              "Oct",
              "Nov",
              "Dec",
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep"
            ],
            "series": [
              {
                "label": "FY2023",
                "values": [
                  48092271.64,
                  72204495.3,
                  50899091.04,
                  165368279.74,
                  179745168.53,
                  212152166.52,
                  116092401.85,
                  173753023.9,
                  83215729.81,
                  248756034.78,
                  163538376.5,
                  312816697.22
                ]
              },
              {
                "label": "FY2024",
                "values": [
                  42397808.23,
                  181120260.46,
                  80243049.9,
                  68180617.15,
                  58201522.74,
                  269753723.92,
                  218657940.31,
                  211711603.53,
                  216856880.87,
                  102609975.12,
                  234744730.48,
                  298593454.69
                ]
              },
              {
                "label": "FY2025",
                "values": [
                  60933383.82,
                  63684911.79,
                  108586016.35,
                  330355296.8,
                  104626788.79,
                  247573548.36,
                  99835684.38,
                  105013487.42,
                  144802883.72,
                  108851945.46,
                  58194491.6,
                  296967007.92
                ]
              }
            ],
            "unit": "money",
            "kind": "columns"
          },
          {
            "title": "Largest qualifying segments",
            "subtitle": "Net obligations by awarding subagency and NAICS, across three fiscal years.",
            "labels": [
              "Internal Revenue Service · 541512",
              "Internal Revenue Service · 541511",
              "Bureau of the Fiscal Service · 541511",
              "Bureau of the Fiscal Service · 541512",
              "Bureau of Engraving and Printing · 541512",
              "Office of the Comptroller of the Currency · 541511"
            ],
            "series": [
              {
                "label": "Net obligations",
                "values": [
                  3935841108.89,
                  841590709.75,
                  184858584.43,
                  176612045.48,
                  176128392.39,
                  127092669.06
                ]
              }
            ],
            "unit": "money",
            "kind": "bars"
          }
        ],
        "table": {
          "title": "Buyer research shortlist",
          "subtitle": "Score combines spend, award activity and supplier diversity. Rankings use the full study scope.",
          "columns": [
            [
              "Awarding organization",
              "text"
            ],
            [
              "NAICS",
              "text"
            ],
            [
              "Net obligations",
              "money"
            ],
            [
              "Funded awards",
              "count"
            ],
            [
              "Top supplier",
              "pct"
            ],
            [
              "Priority score",
              "decimal"
            ]
          ],
          "rows": [
            [
              "Internal Revenue Service",
              "541511",
              841590709.75,
              247,
              0.10861406967535536,
              85.8
            ],
            [
              "Internal Revenue Service",
              "541512",
              3935841108.89,
              396,
              0.2427599236117199,
              85.3
            ],
            [
              "Bureau of the Fiscal Service",
              "541512",
              176612045.48,
              71,
              0.2103605245526776,
              55.3
            ],
            [
              "Bureau of the Fiscal Service",
              "541511",
              184858584.43,
              154,
              0.46865074546641844,
              50.2
            ],
            [
              "Bureau of Engraving and Printing",
              "541512",
              176128392.39,
              51,
              0.40106435951287034,
              40.8
            ],
            [
              "Office of the Comptroller of the Currency",
              "541511",
              127092669.06,
              37,
              0.3297902927107981,
              34.5
            ],
            [
              "Office of the Comptroller of the Currency",
              "541512",
              43210236.45,
              29,
              0.35195904693585883,
              27.5
            ],
            [
              "Bureau of Engraving and Printing",
              "541511",
              21379604.85,
              18,
              0.43957646492912766,
              16.6
            ],
            [
              "United States Mint",
              "541511",
              16249107.92,
              31,
              0.9970802661628655,
              11.9
            ]
          ]
        },
        "action": "Research Internal Revenue Service / NAICS 541511 first. Check current notices, acquisition forecasts and contract vehicles before assigning capture resources.",
        "evidence": {
          "totals": {
            "actions": 5272,
            "net": 5539130750.64,
            "reductions": -311463544.71,
            "funded": 1052
          },
          "top_segments": [
            {
              "agency": "Department of the Treasury",
              "bureau": "Internal Revenue Service",
              "naics": "541511",
              "net": 841590709.75,
              "funded_awards": 247,
              "top_supplier_share": 0.10861406967535536,
              "score": 85.8
            },
            {
              "agency": "Department of the Treasury",
              "bureau": "Internal Revenue Service",
              "naics": "541512",
              "net": 3935841108.89,
              "funded_awards": 396,
              "top_supplier_share": 0.2427599236117199,
              "score": 85.3
            },
            {
              "agency": "Department of the Treasury",
              "bureau": "Bureau of the Fiscal Service",
              "naics": "541512",
              "net": 176612045.48,
              "funded_awards": 71,
              "top_supplier_share": 0.2103605245526776,
              "score": 55.3
            },
            {
              "agency": "Department of the Treasury",
              "bureau": "Bureau of the Fiscal Service",
              "naics": "541511",
              "net": 184858584.43,
              "funded_awards": 154,
              "top_supplier_share": 0.46865074546641844,
              "score": 50.2
            },
            {
              "agency": "Department of the Treasury",
              "bureau": "Bureau of Engraving and Printing",
              "naics": "541512",
              "net": 176128392.39,
              "funded_awards": 51,
              "top_supplier_share": 0.40106435951287034,
              "score": 40.8
            }
          ]
        }
      },
      "GSA": {
        "metrics": [
          {
            "label": "Net obligations",
            "value": 19815590028.65,
            "unit": "money",
            "note": "Signed federal actions"
          },
          {
            "label": "Funded awards",
            "value": 809,
            "unit": "count",
            "note": "At least one positive action"
          },
          {
            "label": "Deobligations",
            "value": -1027204468.84,
            "unit": "money",
            "note": "Negative actions"
          },
          {
            "label": "Qualifying segments",
            "value": 5,
            "unit": "count",
            "note": "Three years of activity and data checks"
          }
        ],
        "charts": [
          {
            "title": "Obligations by fiscal month",
            "subtitle": "Net obligations include negative adjustments. Fiscal year starts in October.",
            "labels": [
              "Oct",
              "Nov",
              "Dec",
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep"
            ],
            "series": [
              {
                "label": "FY2023",
                "values": [
                  107642328.05,
                  228186274.92,
                  454657080.7,
                  397956084.41,
                  346359612.87,
                  597733898.08,
                  451525012.63,
                  606952424.71,
                  768043578.57,
                  560449819.95,
                  533469935.03,
                  1663665322.16
                ]
              },
              {
                "label": "FY2024",
                "values": [
                  177137315.45,
                  328964635.98,
                  517632008.19,
                  424970296.02,
                  494922814.5,
                  427405449.05,
                  560010687.46,
                  808131214.8,
                  540156510.89,
                  686725759.87,
                  636084967.42,
                  1417527252.73
                ]
              },
              {
                "label": "FY2025",
                "values": [
                  92886369.02,
                  487561785.52,
                  403885487.4,
                  491727312.13,
                  393538574.09,
                  737844364.5,
                  453855850.09,
                  532165107.29,
                  282986444.04,
                  415165121.82,
                  614676994.05,
                  1172986334.26
                ]
              }
            ],
            "unit": "money",
            "kind": "columns"
          },
          {
            "title": "Largest qualifying segments",
            "subtitle": "Net obligations by awarding subagency and NAICS, across three fiscal years.",
            "labels": [
              "Federal Acquisition Service · 541512",
              "Federal Acquisition Service · 541511",
              "Office of Administrative Services · 541512",
              "Office of Administrative Services · 541511",
              "Public Buildings Service · 541512"
            ],
            "series": [
              {
                "label": "Net obligations",
                "values": [
                  17244104923.09,
                  2187664243.84,
                  245686394.44,
                  122277385.11,
                  11283236.61
                ]
              }
            ],
            "unit": "money",
            "kind": "bars"
          }
        ],
        "table": {
          "title": "Buyer research shortlist",
          "subtitle": "Score combines spend, award activity and supplier diversity. Rankings use the full study scope.",
          "columns": [
            [
              "Awarding organization",
              "text"
            ],
            [
              "NAICS",
              "text"
            ],
            [
              "Net obligations",
              "money"
            ],
            [
              "Funded awards",
              "count"
            ],
            [
              "Top supplier",
              "pct"
            ],
            [
              "Priority score",
              "decimal"
            ]
          ],
          "rows": [
            [
              "Federal Acquisition Service",
              "541512",
              17244104923.09,
              386,
              0.2187453668178426,
              88.3
            ],
            [
              "Federal Acquisition Service",
              "541511",
              2187664243.84,
              323,
              0.128733296149462,
              87.3
            ],
            [
              "Office of Administrative Services",
              "541511",
              122277385.11,
              45,
              0.28725413185015325,
              40.2
            ],
            [
              "Office of Administrative Services",
              "541512",
              245686394.44,
              32,
              0.3099859398332973,
              39.8
            ],
            [
              "Public Buildings Service",
              "541512",
              11283236.61,
              10,
              0.4324338033613297,
              6.9
            ]
          ]
        },
        "action": "Research Federal Acquisition Service / NAICS 541512 first. Check current notices, acquisition forecasts and contract vehicles before assigning capture resources.",
        "evidence": {
          "totals": {
            "actions": 7719,
            "net": 19815590028.65,
            "reductions": -1027204468.84,
            "funded": 809
          },
          "top_segments": [
            {
              "agency": "General Services Administration",
              "bureau": "Federal Acquisition Service",
              "naics": "541512",
              "net": 17244104923.09,
              "funded_awards": 386,
              "top_supplier_share": 0.2187453668178426,
              "score": 88.3
            },
            {
              "agency": "General Services Administration",
              "bureau": "Federal Acquisition Service",
              "naics": "541511",
              "net": 2187664243.84,
              "funded_awards": 323,
              "top_supplier_share": 0.128733296149462,
              "score": 87.3
            },
            {
              "agency": "General Services Administration",
              "bureau": "Office of Administrative Services",
              "naics": "541511",
              "net": 122277385.11,
              "funded_awards": 45,
              "top_supplier_share": 0.28725413185015325,
              "score": 40.2
            },
            {
              "agency": "General Services Administration",
              "bureau": "Office of Administrative Services",
              "naics": "541512",
              "net": 245686394.44,
              "funded_awards": 32,
              "top_supplier_share": 0.3099859398332973,
              "score": 39.8
            },
            {
              "agency": "General Services Administration",
              "bureau": "Public Buildings Service",
              "naics": "541512",
              "net": 11283236.61,
              "funded_awards": 10,
              "top_supplier_share": 0.4324338033613297,
              "score": 6.9
            }
          ]
        }
      }
    },
    "description": "Where should a small IT services capture team begin buyer research across three federal agencies?",
    "method": "Uses past prime award obligations in two NAICS codes. The screen supports market research and requires current notice and vehicle verification.",
    "accent": "ocean",
    "controls": [
      {
        "control": "Every source row reaches the action-grain fact",
        "exceptions": 0,
        "status": "PASS"
      },
      {
        "control": "Action IDs are present and unique",
        "exceptions": 0,
        "status": "PASS"
      },
      {
        "control": "Every action has its award key and signed amount",
        "exceptions": 0,
        "status": "PASS"
      },
      {
        "control": "Action fiscal year, agency and industry are within scope",
        "exceptions": 0,
        "status": "PASS"
      },
      {
        "control": "Net equals positive actions plus deobligations at each segment",
        "exceptions": 0,
        "status": "PASS"
      },
      {
        "control": "HHI, supplier share and coverage stay between zero and one",
        "exceptions": 0,
        "status": "PASS"
      }
    ]
  },
  "school-reporting": {
    "title": "School reporting migration audit",
    "short": "School reporting",
    "source": "Synthetic data · simulated migration",
    "period": "60 instructional days",
    "filter": "Campus",
    "views": {
      "All campuses": {
        "metrics": [
          {
            "label": "Legacy student-days",
            "value": 72000,
            "unit": "count",
            "note": "Source denominator"
          },
          {
            "label": "Exact match",
            "value": 0.9924166666666666,
            "unit": "pct",
            "note": "99.5% minimum per campus"
          },
          {
            "label": "Attendance-rate change",
            "value": 0.0046276849044565305,
            "unit": "pp",
            "note": "Converted minus baseline"
          },
          {
            "label": "Release gate",
            "value": "HOLD",
            "unit": "text",
            "note": "Campus checks and unassigned identity exceptions"
          }
        ],
        "charts": [
          {
            "title": "Reconciliation exceptions by week",
            "subtitle": "Reason counts reflect the latest converted record for each student-day.",
            "labels": [
              "Aug 18",
              "Aug 25",
              "Sep 01",
              "Sep 08",
              "Sep 15",
              "Sep 22",
              "Sep 29",
              "Oct 06",
              "Oct 13",
              "Oct 20",
              "Oct 27",
              "Nov 03",
              "Nov 10"
            ],
            "series": [
              {
                "label": "Missing record",
                "values": [
                  17,
                  21,
                  21,
                  14,
                  14,
                  13,
                  13,
                  20,
                  14,
                  13,
                  16,
                  15,
                  6
                ]
              },
              {
                "label": "Unknown code",
                "values": [
                  0,
                  0,
                  0,
                  0,
                  21,
                  34,
                  29,
                  35,
                  24,
                  21,
                  34,
                  22,
                  10
                ]
              },
              {
                "label": "Status mismatch",
                "values": [
                  16,
                  9,
                  6,
                  6,
                  12,
                  7,
                  12,
                  14,
                  11,
                  9,
                  10,
                  5,
                  2
                ]
              }
            ],
            "unit": "count",
            "kind": "columns"
          },
          {
            "title": "Exceptions for remediation",
            "subtitle": "Unmapped students remain in district-level quarantine.",
            "labels": [
              "Missing record",
              "Unknown code",
              "Status mismatch",
              "Unmapped student"
            ],
            "series": [
              {
                "label": "Records",
                "values": [
                  197,
                  230,
                  119,
                  8
                ]
              }
            ],
            "unit": "count",
            "kind": "bars"
          }
        ],
        "table": {
          "title": "Campus release checks",
          "subtitle": "Exact match ≥99.5%, zero unknown codes or unexpected records, and drift ≤0.50 pp.",
          "columns": [
            [
              "Campus",
              "text"
            ],
            [
              "Baseline rows",
              "count"
            ],
            [
              "Exact match",
              "pct"
            ],
            [
              "Unknown codes",
              "count"
            ],
            [
              "Missing rows",
              "count"
            ],
            [
              "Attendance drift",
              "pp"
            ],
            [
              "Campus gate",
              "text"
            ]
          ],
          "rows": [
            [
              "Cedar",
              18000,
              1.0,
              0,
              0,
              0.0,
              "PASS"
            ],
            [
              "Harbor",
              18000,
              0.9872222222222222,
              230,
              0,
              0.011881823297692717,
              "HOLD"
            ],
            [
              "Lakeside",
              18000,
              0.9933888888888889,
              0,
              0,
              0.006611111111111123,
              "HOLD"
            ],
            [
              "River",
              18000,
              0.9890555555555556,
              0,
              197,
              8.502000287091693e-05,
              "HOLD"
            ]
          ]
        },
        "action": "Hold publication for this scope. Fix the code crosswalk and ID exceptions where present, recover missing rows, then rerun the campus-level release gates.",
        "evidence": {
          "totals": {
            "baseline": 72000,
            "matches": 71454,
            "unknown": 230,
            "missing": 197,
            "mismatched": 119,
            "conflicting": 199,
            "baseline_rate": 0.9185416666666667,
            "converted_rate": 0.9231693515711232
          },
          "campuses": [
            {
              "campus": "Cedar",
              "baseline": 18000,
              "matches": 18000,
              "unknown_codes": 0,
              "missing_records": 0,
              "status_mismatches": 0,
              "unexpected_records": 0,
              "conflicting_edits": 52,
              "baseline_rate": 0.9171111111111111,
              "converted_rate": 0.9171111111111111,
              "match_rate": 1.0,
              "attendance_delta": 0.0,
              "campus_pass": true
            },
            {
              "campus": "Harbor",
              "baseline": 18000,
              "matches": 17770,
              "unknown_codes": 230,
              "missing_records": 0,
              "status_mismatches": 0,
              "unexpected_records": 0,
              "conflicting_edits": 47,
              "baseline_rate": 0.918,
              "converted_rate": 0.9298818232976928,
              "match_rate": 0.9872222222222222,
              "attendance_delta": 0.011881823297692717,
              "campus_pass": false
            },
            {
              "campus": "Lakeside",
              "baseline": 18000,
              "matches": 17881,
              "unknown_codes": 0,
              "missing_records": 0,
              "status_mismatches": 119,
              "unexpected_records": 0,
              "conflicting_edits": 57,
              "baseline_rate": 0.9176666666666666,
              "converted_rate": 0.9242777777777778,
              "match_rate": 0.9933888888888889,
              "attendance_delta": 0.006611111111111123,
              "campus_pass": false
            },
            {
              "campus": "River",
              "baseline": 18000,
              "matches": 17803,
              "unknown_codes": 0,
              "missing_records": 197,
              "status_mismatches": 0,
              "unexpected_records": 0,
              "conflicting_edits": 43,
              "baseline_rate": 0.9213888888888889,
              "converted_rate": 0.9214739088917598,
              "match_rate": 0.9890555555555556,
              "attendance_delta": 8.502000287091693e-05,
              "campus_pass": false
            }
          ],
          "district_orphan_events": 8,
          "may_release": false
        }
      },
      "Cedar": {
        "metrics": [
          {
            "label": "Legacy student-days",
            "value": 18000,
            "unit": "count",
            "note": "Source denominator"
          },
          {
            "label": "Exact match",
            "value": 1.0,
            "unit": "pct",
            "note": "99.5% minimum per campus"
          },
          {
            "label": "Attendance-rate change",
            "value": 0.0,
            "unit": "pp",
            "note": "Converted minus baseline"
          },
          {
            "label": "Release gate",
            "value": "PASS",
            "unit": "text",
            "note": "Campus checks and unassigned identity exceptions"
          }
        ],
        "charts": [
          {
            "title": "Reconciliation exceptions by week",
            "subtitle": "Reason counts reflect the latest converted record for each student-day.",
            "labels": [
              "Aug 18",
              "Aug 25",
              "Sep 01",
              "Sep 08",
              "Sep 15",
              "Sep 22",
              "Sep 29",
              "Oct 06",
              "Oct 13",
              "Oct 20",
              "Oct 27",
              "Nov 03",
              "Nov 10"
            ],
            "series": [
              {
                "label": "Missing record",
                "values": [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              },
              {
                "label": "Unknown code",
                "values": [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              },
              {
                "label": "Status mismatch",
                "values": [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              }
            ],
            "unit": "count",
            "kind": "columns"
          },
          {
            "title": "Exceptions for remediation",
            "subtitle": "Unmapped students remain in district-level quarantine.",
            "labels": [
              "Missing record",
              "Unknown code",
              "Status mismatch"
            ],
            "series": [
              {
                "label": "Records",
                "values": [
                  0,
                  0,
                  0
                ]
              }
            ],
            "unit": "count",
            "kind": "bars"
          }
        ],
        "table": {
          "title": "Campus release checks",
          "subtitle": "Exact match ≥99.5%, zero unknown codes or unexpected records, and drift ≤0.50 pp.",
          "columns": [
            [
              "Campus",
              "text"
            ],
            [
              "Baseline rows",
              "count"
            ],
            [
              "Exact match",
              "pct"
            ],
            [
              "Unknown codes",
              "count"
            ],
            [
              "Missing rows",
              "count"
            ],
            [
              "Attendance drift",
              "pp"
            ],
            [
              "Campus gate",
              "text"
            ]
          ],
          "rows": [
            [
              "Cedar",
              18000,
              1.0,
              0,
              0,
              0.0,
              "PASS"
            ]
          ]
        },
        "action": "Retain this campus in the approved release group. Run the same checks after the final cutover extract.",
        "evidence": {
          "totals": {
            "baseline": 18000,
            "matches": 18000,
            "unknown": 0,
            "missing": 0,
            "mismatched": 0,
            "conflicting": 52,
            "baseline_rate": 0.9171111111111111,
            "converted_rate": 0.9171111111111111
          },
          "campuses": [
            {
              "campus": "Cedar",
              "baseline": 18000,
              "matches": 18000,
              "unknown_codes": 0,
              "missing_records": 0,
              "status_mismatches": 0,
              "unexpected_records": 0,
              "conflicting_edits": 52,
              "baseline_rate": 0.9171111111111111,
              "converted_rate": 0.9171111111111111,
              "match_rate": 1.0,
              "attendance_delta": 0.0,
              "campus_pass": true
            }
          ],
          "district_orphan_events": null,
          "may_release": true
        }
      },
      "Harbor": {
        "metrics": [
          {
            "label": "Legacy student-days",
            "value": 18000,
            "unit": "count",
            "note": "Source denominator"
          },
          {
            "label": "Exact match",
            "value": 0.9872222222222222,
            "unit": "pct",
            "note": "99.5% minimum per campus"
          },
          {
            "label": "Attendance-rate change",
            "value": 0.011881823297692717,
            "unit": "pp",
            "note": "Converted minus baseline"
          },
          {
            "label": "Release gate",
            "value": "HOLD",
            "unit": "text",
            "note": "Campus checks and unassigned identity exceptions"
          }
        ],
        "charts": [
          {
            "title": "Reconciliation exceptions by week",
            "subtitle": "Reason counts reflect the latest converted record for each student-day.",
            "labels": [
              "Aug 18",
              "Aug 25",
              "Sep 01",
              "Sep 08",
              "Sep 15",
              "Sep 22",
              "Sep 29",
              "Oct 06",
              "Oct 13",
              "Oct 20",
              "Oct 27",
              "Nov 03",
              "Nov 10"
            ],
            "series": [
              {
                "label": "Missing record",
                "values": [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              },
              {
                "label": "Unknown code",
                "values": [
                  0,
                  0,
                  0,
                  0,
                  21,
                  34,
                  29,
                  35,
                  24,
                  21,
                  34,
                  22,
                  10
                ]
              },
              {
                "label": "Status mismatch",
                "values": [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              }
            ],
            "unit": "count",
            "kind": "columns"
          },
          {
            "title": "Exceptions for remediation",
            "subtitle": "Unmapped students remain in district-level quarantine.",
            "labels": [
              "Missing record",
              "Unknown code",
              "Status mismatch"
            ],
            "series": [
              {
                "label": "Records",
                "values": [
                  0,
                  230,
                  0
                ]
              }
            ],
            "unit": "count",
            "kind": "bars"
          }
        ],
        "table": {
          "title": "Campus release checks",
          "subtitle": "Exact match ≥99.5%, zero unknown codes or unexpected records, and drift ≤0.50 pp.",
          "columns": [
            [
              "Campus",
              "text"
            ],
            [
              "Baseline rows",
              "count"
            ],
            [
              "Exact match",
              "pct"
            ],
            [
              "Unknown codes",
              "count"
            ],
            [
              "Missing rows",
              "count"
            ],
            [
              "Attendance drift",
              "pp"
            ],
            [
              "Campus gate",
              "text"
            ]
          ],
          "rows": [
            [
              "Harbor",
              18000,
              0.9872222222222222,
              230,
              0,
              0.011881823297692717,
              "HOLD"
            ]
          ]
        },
        "action": "Hold publication for this scope. Fix the code crosswalk and ID exceptions where present, recover missing rows, then rerun the campus-level release gates.",
        "evidence": {
          "totals": {
            "baseline": 18000,
            "matches": 17770,
            "unknown": 230,
            "missing": 0,
            "mismatched": 0,
            "conflicting": 47,
            "baseline_rate": 0.918,
            "converted_rate": 0.9298818232976928
          },
          "campuses": [
            {
              "campus": "Harbor",
              "baseline": 18000,
              "matches": 17770,
              "unknown_codes": 230,
              "missing_records": 0,
              "status_mismatches": 0,
              "unexpected_records": 0,
              "conflicting_edits": 47,
              "baseline_rate": 0.918,
              "converted_rate": 0.9298818232976928,
              "match_rate": 0.9872222222222222,
              "attendance_delta": 0.011881823297692717,
              "campus_pass": false
            }
          ],
          "district_orphan_events": null,
          "may_release": false
        }
      },
      "Lakeside": {
        "metrics": [
          {
            "label": "Legacy student-days",
            "value": 18000,
            "unit": "count",
            "note": "Source denominator"
          },
          {
            "label": "Exact match",
            "value": 0.9933888888888889,
            "unit": "pct",
            "note": "99.5% minimum per campus"
          },
          {
            "label": "Attendance-rate change",
            "value": 0.006611111111111123,
            "unit": "pp",
            "note": "Converted minus baseline"
          },
          {
            "label": "Release gate",
            "value": "HOLD",
            "unit": "text",
            "note": "Campus checks and unassigned identity exceptions"
          }
        ],
        "charts": [
          {
            "title": "Reconciliation exceptions by week",
            "subtitle": "Reason counts reflect the latest converted record for each student-day.",
            "labels": [
              "Aug 18",
              "Aug 25",
              "Sep 01",
              "Sep 08",
              "Sep 15",
              "Sep 22",
              "Sep 29",
              "Oct 06",
              "Oct 13",
              "Oct 20",
              "Oct 27",
              "Nov 03",
              "Nov 10"
            ],
            "series": [
              {
                "label": "Missing record",
                "values": [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              },
              {
                "label": "Unknown code",
                "values": [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              },
              {
                "label": "Status mismatch",
                "values": [
                  16,
                  9,
                  6,
                  6,
                  12,
                  7,
                  12,
                  14,
                  11,
                  9,
                  10,
                  5,
                  2
                ]
              }
            ],
            "unit": "count",
            "kind": "columns"
          },
          {
            "title": "Exceptions for remediation",
            "subtitle": "Unmapped students remain in district-level quarantine.",
            "labels": [
              "Missing record",
              "Unknown code",
              "Status mismatch"
            ],
            "series": [
              {
                "label": "Records",
                "values": [
                  0,
                  0,
                  119
                ]
              }
            ],
            "unit": "count",
            "kind": "bars"
          }
        ],
        "table": {
          "title": "Campus release checks",
          "subtitle": "Exact match ≥99.5%, zero unknown codes or unexpected records, and drift ≤0.50 pp.",
          "columns": [
            [
              "Campus",
              "text"
            ],
            [
              "Baseline rows",
              "count"
            ],
            [
              "Exact match",
              "pct"
            ],
            [
              "Unknown codes",
              "count"
            ],
            [
              "Missing rows",
              "count"
            ],
            [
              "Attendance drift",
              "pp"
            ],
            [
              "Campus gate",
              "text"
            ]
          ],
          "rows": [
            [
              "Lakeside",
              18000,
              0.9933888888888889,
              0,
              0,
              0.006611111111111123,
              "HOLD"
            ]
          ]
        },
        "action": "Hold publication for this scope. Fix the code crosswalk and ID exceptions where present, recover missing rows, then rerun the campus-level release gates.",
        "evidence": {
          "totals": {
            "baseline": 18000,
            "matches": 17881,
            "unknown": 0,
            "missing": 0,
            "mismatched": 119,
            "conflicting": 57,
            "baseline_rate": 0.9176666666666666,
            "converted_rate": 0.9242777777777778
          },
          "campuses": [
            {
              "campus": "Lakeside",
              "baseline": 18000,
              "matches": 17881,
              "unknown_codes": 0,
              "missing_records": 0,
              "status_mismatches": 119,
              "unexpected_records": 0,
              "conflicting_edits": 57,
              "baseline_rate": 0.9176666666666666,
              "converted_rate": 0.9242777777777778,
              "match_rate": 0.9933888888888889,
              "attendance_delta": 0.006611111111111123,
              "campus_pass": false
            }
          ],
          "district_orphan_events": null,
          "may_release": false
        }
      },
      "River": {
        "metrics": [
          {
            "label": "Legacy student-days",
            "value": 18000,
            "unit": "count",
            "note": "Source denominator"
          },
          {
            "label": "Exact match",
            "value": 0.9890555555555556,
            "unit": "pct",
            "note": "99.5% minimum per campus"
          },
          {
            "label": "Attendance-rate change",
            "value": 8.502000287091693e-05,
            "unit": "pp",
            "note": "Converted minus baseline"
          },
          {
            "label": "Release gate",
            "value": "HOLD",
            "unit": "text",
            "note": "Campus checks and unassigned identity exceptions"
          }
        ],
        "charts": [
          {
            "title": "Reconciliation exceptions by week",
            "subtitle": "Reason counts reflect the latest converted record for each student-day.",
            "labels": [
              "Aug 18",
              "Aug 25",
              "Sep 01",
              "Sep 08",
              "Sep 15",
              "Sep 22",
              "Sep 29",
              "Oct 06",
              "Oct 13",
              "Oct 20",
              "Oct 27",
              "Nov 03",
              "Nov 10"
            ],
            "series": [
              {
                "label": "Missing record",
                "values": [
                  17,
                  21,
                  21,
                  14,
                  14,
                  13,
                  13,
                  20,
                  14,
                  13,
                  16,
                  15,
                  6
                ]
              },
              {
                "label": "Unknown code",
                "values": [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              },
              {
                "label": "Status mismatch",
                "values": [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              }
            ],
            "unit": "count",
            "kind": "columns"
          },
          {
            "title": "Exceptions for remediation",
            "subtitle": "Unmapped students remain in district-level quarantine.",
            "labels": [
              "Missing record",
              "Unknown code",
              "Status mismatch"
            ],
            "series": [
              {
                "label": "Records",
                "values": [
                  197,
                  0,
                  0
                ]
              }
            ],
            "unit": "count",
            "kind": "bars"
          }
        ],
        "table": {
          "title": "Campus release checks",
          "subtitle": "Exact match ≥99.5%, zero unknown codes or unexpected records, and drift ≤0.50 pp.",
          "columns": [
            [
              "Campus",
              "text"
            ],
            [
              "Baseline rows",
              "count"
            ],
            [
              "Exact match",
              "pct"
            ],
            [
              "Unknown codes",
              "count"
            ],
            [
              "Missing rows",
              "count"
            ],
            [
              "Attendance drift",
              "pp"
            ],
            [
              "Campus gate",
              "text"
            ]
          ],
          "rows": [
            [
              "River",
              18000,
              0.9890555555555556,
              0,
              197,
              8.502000287091693e-05,
              "HOLD"
            ]
          ]
        },
        "action": "Hold publication for this scope. Fix the code crosswalk and ID exceptions where present, recover missing rows, then rerun the campus-level release gates.",
        "evidence": {
          "totals": {
            "baseline": 18000,
            "matches": 17803,
            "unknown": 0,
            "missing": 197,
            "mismatched": 0,
            "conflicting": 43,
            "baseline_rate": 0.9213888888888889,
            "converted_rate": 0.9214739088917598
          },
          "campuses": [
            {
              "campus": "River",
              "baseline": 18000,
              "matches": 17803,
              "unknown_codes": 0,
              "missing_records": 197,
              "status_mismatches": 0,
              "unexpected_records": 0,
              "conflicting_edits": 43,
              "baseline_rate": 0.9213888888888889,
              "converted_rate": 0.9214739088917598,
              "match_rate": 0.9890555555555556,
              "attendance_delta": 8.502000287091693e-05,
              "campus_pass": false
            }
          ],
          "district_orphan_events": null,
          "may_release": false
        }
      }
    },
    "accent": "copper",
    "controls": [
      {
        "control": "The legacy extract has exactly one row per student and scheduled day",
        "exceptions": 0,
        "status": "PASS"
      },
      {
        "control": "Student identifiers map one-to-one",
        "exceptions": 0,
        "status": "PASS"
      },
      {
        "control": "Source event IDs are unique",
        "exceptions": 0,
        "status": "PASS"
      },
      {
        "control": "Known rows plus unmapped or out-of-calendar rows exhaust the new source",
        "exceptions": 0,
        "status": "PASS"
      },
      {
        "control": "A student-day appears once in the reconciled fact",
        "exceptions": 0,
        "status": "PASS"
      },
      {
        "control": "Baseline exactly equals matched plus mismatched, missing and unknown rows",
        "exceptions": 0,
        "status": "PASS"
      },
      {
        "control": "The fixture exercises all three material discrepancy cases",
        "exceptions": 0,
        "status": "PASS"
      }
    ],
    "description": "Can school leadership release its attendance scorecard after a student information system migration?",
    "method": "Seeded fictional student IDs and exports. This independent case study reflects a migration workflow, with deliberately injected data problems."
  },
  "wholesale-fulfillment": {
    "title": "Wholesale fulfillment performance",
    "short": "Fulfillment",
    "source": "Synthetic data · simulated distributor",
    "period": "Aug–Dec 2025",
    "filter": "Warehouse",
    "views": {
      "All warehouses": {
        "metrics": [
          {
            "label": "Line OTIF",
            "value": 0.8394544482082368,
            "unit": "pct",
            "note": "Delivered complete by promised date"
          },
          {
            "label": "On-time unit fill",
            "value": 0.8307374678116457,
            "unit": "pct",
            "note": "On-time units ÷ ordered units"
          },
          {
            "label": "Missed promise units",
            "value": 14921,
            "unit": "count",
            "note": "Matured order lines"
          },
          {
            "label": "Ending inventory at cost",
            "value": 486809.92,
            "unit": "money",
            "note": "Single cutoff-date stock balance"
          }
        ],
        "charts": [
          {
            "title": "Delivery performance by promise week",
            "subtitle": "Percent of matured lines and units delivered on time.",
            "labels": [
              "Aug 25",
              "Sep 01",
              "Sep 08",
              "Sep 15",
              "Sep 22",
              "Sep 29",
              "Oct 06",
              "Oct 13",
              "Oct 20",
              "Oct 27",
              "Nov 03",
              "Nov 10",
              "Nov 17",
              "Nov 24",
              "Dec 01",
              "Dec 08",
              "Dec 15",
              "Dec 22"
            ],
            "series": [
              {
                "label": "Line OTIF",
                "values": [
                  0.8511530398322851,
                  0.8612903225806452,
                  0.8388625592417062,
                  0.84,
                  0.8622366288492707,
                  0.8400597907324364,
                  0.7981220657276995,
                  0.8364485981308412,
                  0.8280542986425339,
                  0.8316151202749141,
                  0.836038961038961,
                  0.823240589198036,
                  0.8325123152709359,
                  0.8194662480376766,
                  0.8663366336633663,
                  0.8647416413373861,
                  0.8287037037037037,
                  0.8549141965678627
                ]
              },
              {
                "label": "Unit fill",
                "values": [
                  0.880998613037448,
                  0.8770147935526607,
                  0.8643362463587183,
                  0.869067443796836,
                  0.8945003209929382,
                  0.8540992961765266,
                  0.7837051406401552,
                  0.7877543401157364,
                  0.784981684981685,
                  0.7979970168335819,
                  0.8106345127495552,
                  0.7915118325836104,
                  0.7598001537279017,
                  0.7733990147783252,
                  0.8594617684750107,
                  0.887517993008431,
                  0.8552551331571457,
                  0.8652044293015332
                ]
              }
            ],
            "unit": "pct",
            "kind": "line"
          },
          {
            "title": "Largest service gaps",
            "subtitle": "Missed promise units by site and product category.",
            "labels": [
              "West · Fasteners",
              "West · Safety supplies",
              "West · Tooling",
              "West · Shop supplies",
              "Central · Fasteners",
              "Southeast · Tooling"
            ],
            "series": [
              {
                "label": "Missed units",
                "values": [
                  6782,
                  964,
                  758,
                  749,
                  570,
                  562
                ]
              }
            ],
            "unit": "count",
            "kind": "bars"
          }
        ],
        "table": {
          "title": "SKU replenishment review",
          "subtitle": "Top 15 SKU and warehouse pairs by missed units. Ending stock is shown for the cutoff date.",
          "columns": [
            [
              "Warehouse",
              "text"
            ],
            [
              "SKU",
              "text"
            ],
            [
              "Category",
              "text"
            ],
            [
              "Missed units",
              "count"
            ],
            [
              "Line OTIF",
              "pct"
            ],
            [
              "Ending stock",
              "count"
            ]
          ],
          "rows": [
            [
              "West",
              "SKU-011",
              "Fasteners",
              886,
              0.10465116279069768,
              0
            ],
            [
              "West",
              "SKU-006",
              "Fasteners",
              718,
              0.19402985074626866,
              0
            ],
            [
              "West",
              "SKU-001",
              "Fasteners",
              709,
              0.25757575757575757,
              0
            ],
            [
              "West",
              "SKU-016",
              "Fasteners",
              708,
              0.2835820895522388,
              7
            ],
            [
              "West",
              "SKU-005",
              "Fasteners",
              511,
              0.2962962962962963,
              0
            ],
            [
              "West",
              "SKU-004",
              "Fasteners",
              476,
              0.21428571428571427,
              0
            ],
            [
              "West",
              "SKU-007",
              "Fasteners",
              410,
              0.4090909090909091,
              23
            ],
            [
              "West",
              "SKU-008",
              "Fasteners",
              360,
              0.40540540540540543,
              0
            ],
            [
              "West",
              "SKU-002",
              "Fasteners",
              359,
              0.23684210526315788,
              14
            ],
            [
              "West",
              "SKU-010",
              "Fasteners",
              350,
              0.2647058823529412,
              16
            ],
            [
              "West",
              "SKU-013",
              "Fasteners",
              307,
              0.2777777777777778,
              23
            ],
            [
              "West",
              "SKU-003",
              "Fasteners",
              284,
              0.2702702702702703,
              0
            ],
            [
              "West",
              "SKU-014",
              "Fasteners",
              239,
              0.5428571428571428,
              26
            ],
            [
              "West",
              "SKU-026",
              "Safety supplies",
              237,
              0.5813953488372093,
              7
            ],
            [
              "West",
              "SKU-009",
              "Fasteners",
              173,
              0.6363636363636364,
              8
            ]
          ]
        },
        "action": "Review SKU-011 at the West warehouse first. Compare stockout days and carrier transit before changing reorder points. Test revised lead-time assumptions on the affected category.",
        "evidence": {
          "totals": {
            "matured_lines": 11218,
            "otif": 0.8394544482082368,
            "unit_fill": 0.8307374678116457,
            "missed_units": 14921,
            "ending_value": 486809.92,
            "open_lines": 143
          },
          "top_skus": [
            {
              "site": "West",
              "sku": "SKU-011",
              "matured_lines": 86,
              "ordered_units": 995,
              "on_time_units": 109,
              "missed_units": 886,
              "otif": 0.10465116279069768,
              "category": "Fasteners",
              "ending_stock": 0,
              "unit_cost": 94.5,
              "missed_order_cost_basis": 83727.0
            },
            {
              "site": "West",
              "sku": "SKU-006",
              "matured_lines": 67,
              "ordered_units": 951,
              "on_time_units": 233,
              "missed_units": 718,
              "otif": 0.19402985074626866,
              "category": "Fasteners",
              "ending_stock": 0,
              "unit_cost": 127.1,
              "missed_order_cost_basis": 91257.8
            },
            {
              "site": "West",
              "sku": "SKU-001",
              "matured_lines": 66,
              "ordered_units": 904,
              "on_time_units": 195,
              "missed_units": 709,
              "otif": 0.25757575757575757,
              "category": "Fasteners",
              "ending_stock": 0,
              "unit_cost": 55.23,
              "missed_order_cost_basis": 39158.07
            },
            {
              "site": "West",
              "sku": "SKU-016",
              "matured_lines": 67,
              "ordered_units": 925,
              "on_time_units": 217,
              "missed_units": 708,
              "otif": 0.2835820895522388,
              "category": "Fasteners",
              "ending_stock": 7,
              "unit_cost": 116.44,
              "missed_order_cost_basis": 82439.52
            },
            {
              "site": "West",
              "sku": "SKU-005",
              "matured_lines": 54,
              "ordered_units": 729,
              "on_time_units": 218,
              "missed_units": 511,
              "otif": 0.2962962962962963,
              "category": "Fasteners",
              "ending_stock": 0,
              "unit_cost": 22.53,
              "missed_order_cost_basis": 11512.83
            }
          ],
          "site_category": [
            {
              "site": "West",
              "category": "Fasteners",
              "missed_units": 6782
            },
            {
              "site": "West",
              "category": "Safety supplies",
              "missed_units": 964
            },
            {
              "site": "West",
              "category": "Tooling",
              "missed_units": 758
            },
            {
              "site": "West",
              "category": "Shop supplies",
              "missed_units": 749
            },
            {
              "site": "Central",
              "category": "Fasteners",
              "missed_units": 570
            },
            {
              "site": "Southeast",
              "category": "Tooling",
              "missed_units": 562
            }
          ],
          "site_service": [
            {
              "site": "West",
              "matured_lines": 2754,
              "complete_on_time": 1887,
              "otif": 0.6851851851851852,
              "ordered_units": 24879,
              "on_time_units": 15626,
              "missed_units": 9253
            },
            {
              "site": "Southeast",
              "matured_lines": 2785,
              "complete_on_time": 2449,
              "otif": 0.8793536804308797,
              "ordered_units": 21042,
              "on_time_units": 19009,
              "missed_units": 2033
            },
            {
              "site": "Central",
              "matured_lines": 2826,
              "complete_on_time": 2516,
              "otif": 0.8903043170559094,
              "ordered_units": 20955,
              "on_time_units": 19072,
              "missed_units": 1883
            },
            {
              "site": "Northeast",
              "matured_lines": 2853,
              "complete_on_time": 2565,
              "otif": 0.8990536277602523,
              "ordered_units": 21277,
              "on_time_units": 19525,
              "missed_units": 1752
            }
          ]
        }
      },
      "Central": {
        "metrics": [
          {
            "label": "Line OTIF",
            "value": 0.8903043170559094,
            "unit": "pct",
            "note": "Delivered complete by promised date"
          },
          {
            "label": "On-time unit fill",
            "value": 0.9101407778573133,
            "unit": "pct",
            "note": "On-time units ÷ ordered units"
          },
          {
            "label": "Missed promise units",
            "value": 1883,
            "unit": "count",
            "note": "Matured order lines"
          },
          {
            "label": "Ending inventory at cost",
            "value": 116243.17,
            "unit": "money",
            "note": "Single cutoff-date stock balance"
          }
        ],
        "charts": [
          {
            "title": "Delivery performance by promise week",
            "subtitle": "Percent of matured lines and units delivered on time.",
            "labels": [
              "Aug 25",
              "Sep 01",
              "Sep 08",
              "Sep 15",
              "Sep 22",
              "Sep 29",
              "Oct 06",
              "Oct 13",
              "Oct 20",
              "Oct 27",
              "Nov 03",
              "Nov 10",
              "Nov 17",
              "Nov 24",
              "Dec 01",
              "Dec 08",
              "Dec 15",
              "Dec 22"
            ],
            "series": [
              {
                "label": "Line OTIF",
                "values": [
                  0.8629032258064516,
                  0.8733333333333333,
                  0.879746835443038,
                  0.9084967320261438,
                  0.88,
                  0.9030303030303031,
                  0.8562874251497006,
                  0.8830409356725146,
                  0.8806818181818182,
                  0.8544303797468354,
                  0.8571428571428571,
                  0.9363057324840764,
                  0.9459459459459459,
                  0.834319526627219,
                  0.9436619718309859,
                  0.896551724137931,
                  0.8647058823529412,
                  0.968944099378882
                ]
              },
              {
                "label": "Unit fill",
                "values": [
                  0.9013015184381779,
                  0.8962962962962963,
                  0.8897243107769424,
                  0.9290843806104129,
                  0.9105691056910569,
                  0.9228971962616822,
                  0.8840816326530613,
                  0.8968192397207138,
                  0.8999269539810081,
                  0.8674275680421423,
                  0.8988648090815273,
                  0.9470945359930616,
                  0.9603246167718665,
                  0.8666134185303515,
                  0.9580952380952381,
                  0.9024577572964669,
                  0.8978955572876072,
                  0.9675967596759676
                ]
              }
            ],
            "unit": "pct",
            "kind": "line"
          },
          {
            "title": "Largest service gaps",
            "subtitle": "Missed promise units by site and product category.",
            "labels": [
              "Central · Fasteners",
              "Central · Tooling",
              "Central · Safety supplies",
              "Central · Shop supplies"
            ],
            "series": [
              {
                "label": "Missed units",
                "values": [
                  570,
                  444,
                  436,
                  433
                ]
              }
            ],
            "unit": "count",
            "kind": "bars"
          }
        ],
        "table": {
          "title": "SKU replenishment review",
          "subtitle": "Top 15 SKU and warehouse pairs by missed units. Ending stock is shown for the cutoff date.",
          "columns": [
            [
              "Warehouse",
              "text"
            ],
            [
              "SKU",
              "text"
            ],
            [
              "Category",
              "text"
            ],
            [
              "Missed units",
              "count"
            ],
            [
              "Line OTIF",
              "pct"
            ],
            [
              "Ending stock",
              "count"
            ]
          ],
          "rows": [
            [
              "Central",
              "SKU-041",
              "Shop supplies",
              111,
              0.7313432835820896,
              29
            ],
            [
              "Central",
              "SKU-011",
              "Fasteners",
              98,
              0.8148148148148148,
              5
            ],
            [
              "Central",
              "SKU-016",
              "Fasteners",
              98,
              0.8072289156626506,
              12
            ],
            [
              "Central",
              "SKU-051",
              "Tooling",
              98,
              0.7096774193548387,
              13
            ],
            [
              "Central",
              "SKU-031",
              "Safety supplies",
              85,
              0.7536231884057971,
              36
            ],
            [
              "Central",
              "SKU-006",
              "Fasteners",
              83,
              0.8108108108108109,
              0
            ],
            [
              "Central",
              "SKU-001",
              "Fasteners",
              79,
              0.8481012658227848,
              0
            ],
            [
              "Central",
              "SKU-023",
              "Safety supplies",
              78,
              0.7291666666666666,
              16
            ],
            [
              "Central",
              "SKU-061",
              "Tooling",
              75,
              0.8309859154929577,
              23
            ],
            [
              "Central",
              "SKU-036",
              "Shop supplies",
              68,
              0.8382352941176471,
              6
            ],
            [
              "Central",
              "SKU-026",
              "Safety supplies",
              64,
              0.8842105263157894,
              13
            ],
            [
              "Central",
              "SKU-056",
              "Tooling",
              61,
              0.8461538461538461,
              28
            ],
            [
              "Central",
              "SKU-021",
              "Safety supplies",
              49,
              0.9090909090909091,
              1
            ],
            [
              "Central",
              "SKU-035",
              "Shop supplies",
              36,
              0.8333333333333334,
              0
            ],
            [
              "Central",
              "SKU-008",
              "Fasteners",
              35,
              0.8387096774193549,
              11
            ]
          ]
        },
        "action": "Review SKU-041 at the Central warehouse first. Compare stockout days and carrier transit before changing reorder points. Test revised lead-time assumptions on the affected category.",
        "evidence": {
          "totals": {
            "matured_lines": 2826,
            "otif": 0.8903043170559094,
            "unit_fill": 0.9101407778573133,
            "missed_units": 1883,
            "ending_value": 116243.17,
            "open_lines": 43
          },
          "top_skus": [
            {
              "site": "Central",
              "sku": "SKU-041",
              "matured_lines": 67,
              "ordered_units": 509,
              "on_time_units": 398,
              "missed_units": 111,
              "otif": 0.7313432835820896,
              "category": "Shop supplies",
              "ending_stock": 29,
              "unit_cost": 63.44,
              "missed_order_cost_basis": 7041.84
            },
            {
              "site": "Central",
              "sku": "SKU-011",
              "matured_lines": 81,
              "ordered_units": 604,
              "on_time_units": 506,
              "missed_units": 98,
              "otif": 0.8148148148148148,
              "category": "Fasteners",
              "ending_stock": 5,
              "unit_cost": 94.5,
              "missed_order_cost_basis": 9261.0
            },
            {
              "site": "Central",
              "sku": "SKU-016",
              "matured_lines": 83,
              "ordered_units": 601,
              "on_time_units": 503,
              "missed_units": 98,
              "otif": 0.8072289156626506,
              "category": "Fasteners",
              "ending_stock": 12,
              "unit_cost": 116.44,
              "missed_order_cost_basis": 11411.12
            },
            {
              "site": "Central",
              "sku": "SKU-051",
              "matured_lines": 62,
              "ordered_units": 448,
              "on_time_units": 350,
              "missed_units": 98,
              "otif": 0.7096774193548387,
              "category": "Tooling",
              "ending_stock": 13,
              "unit_cost": 79.47,
              "missed_order_cost_basis": 7788.06
            },
            {
              "site": "Central",
              "sku": "SKU-031",
              "matured_lines": 69,
              "ordered_units": 458,
              "on_time_units": 373,
              "missed_units": 85,
              "otif": 0.7536231884057971,
              "category": "Safety supplies",
              "ending_stock": 36,
              "unit_cost": 133.55,
              "missed_order_cost_basis": 11351.75
            }
          ],
          "site_category": [
            {
              "site": "Central",
              "category": "Fasteners",
              "missed_units": 570
            },
            {
              "site": "Central",
              "category": "Tooling",
              "missed_units": 444
            },
            {
              "site": "Central",
              "category": "Safety supplies",
              "missed_units": 436
            },
            {
              "site": "Central",
              "category": "Shop supplies",
              "missed_units": 433
            }
          ],
          "site_service": [
            {
              "site": "Central",
              "matured_lines": 2826,
              "complete_on_time": 2516,
              "otif": 0.8903043170559094,
              "ordered_units": 20955,
              "on_time_units": 19072,
              "missed_units": 1883
            }
          ]
        }
      },
      "Northeast": {
        "metrics": [
          {
            "label": "Line OTIF",
            "value": 0.8990536277602523,
            "unit": "pct",
            "note": "Delivered complete by promised date"
          },
          {
            "label": "On-time unit fill",
            "value": 0.9176575645062743,
            "unit": "pct",
            "note": "On-time units ÷ ordered units"
          },
          {
            "label": "Missed promise units",
            "value": 1752,
            "unit": "count",
            "note": "Matured order lines"
          },
          {
            "label": "Ending inventory at cost",
            "value": 134458.54,
            "unit": "money",
            "note": "Single cutoff-date stock balance"
          }
        ],
        "charts": [
          {
            "title": "Delivery performance by promise week",
            "subtitle": "Percent of matured lines and units delivered on time.",
            "labels": [
              "Aug 25",
              "Sep 01",
              "Sep 08",
              "Sep 15",
              "Sep 22",
              "Sep 29",
              "Oct 06",
              "Oct 13",
              "Oct 20",
              "Oct 27",
              "Nov 03",
              "Nov 10",
              "Nov 17",
              "Nov 24",
              "Dec 01",
              "Dec 08",
              "Dec 15",
              "Dec 22"
            ],
            "series": [
              {
                "label": "Line OTIF",
                "values": [
                  0.868421052631579,
                  0.8717948717948718,
                  0.877906976744186,
                  0.8627450980392157,
                  0.9047619047619048,
                  0.8579234972677595,
                  0.8675496688741722,
                  0.9212121212121213,
                  0.9448275862068966,
                  0.9024390243902439,
                  0.9012345679012346,
                  0.8726114649681529,
                  0.9180327868852459,
                  0.9430379746835443,
                  0.9247311827956989,
                  0.9271523178807947,
                  0.9150326797385621,
                  0.8954248366013072
                ]
              },
              {
                "label": "Unit fill",
                "values": [
                  0.8831018518518519,
                  0.8933566433566433,
                  0.9148089171974523,
                  0.8846830985915493,
                  0.914568345323741,
                  0.8955223880597015,
                  0.8909257561869844,
                  0.9147104851330203,
                  0.974907063197026,
                  0.9169463087248322,
                  0.9204918032786885,
                  0.897070467141726,
                  0.9329446064139941,
                  0.9537037037037037,
                  0.9391117478510028,
                  0.9471733086190918,
                  0.9202834366696191,
                  0.915863277826468
                ]
              }
            ],
            "unit": "pct",
            "kind": "line"
          },
          {
            "title": "Largest service gaps",
            "subtitle": "Missed promise units by site and product category.",
            "labels": [
              "Northeast · Tooling",
              "Northeast · Safety supplies",
              "Northeast · Shop supplies",
              "Northeast · Fasteners"
            ],
            "series": [
              {
                "label": "Missed units",
                "values": [
                  498,
                  420,
                  418,
                  416
                ]
              }
            ],
            "unit": "count",
            "kind": "bars"
          }
        ],
        "table": {
          "title": "SKU replenishment review",
          "subtitle": "Top 15 SKU and warehouse pairs by missed units. Ending stock is shown for the cutoff date.",
          "columns": [
            [
              "Warehouse",
              "text"
            ],
            [
              "SKU",
              "text"
            ],
            [
              "Category",
              "text"
            ],
            [
              "Missed units",
              "count"
            ],
            [
              "Line OTIF",
              "pct"
            ],
            [
              "Ending stock",
              "count"
            ]
          ],
          "rows": [
            [
              "Northeast",
              "SKU-031",
              "Safety supplies",
              137,
              0.7058823529411765,
              5
            ],
            [
              "Northeast",
              "SKU-051",
              "Tooling",
              127,
              0.7674418604651163,
              40
            ],
            [
              "Northeast",
              "SKU-041",
              "Shop supplies",
              96,
              0.8275862068965517,
              41
            ],
            [
              "Northeast",
              "SKU-016",
              "Fasteners",
              94,
              0.8352941176470589,
              42
            ],
            [
              "Northeast",
              "SKU-055",
              "Tooling",
              94,
              0.7586206896551724,
              24
            ],
            [
              "Northeast",
              "SKU-026",
              "Safety supplies",
              74,
              0.8378378378378378,
              0
            ],
            [
              "Northeast",
              "SKU-036",
              "Shop supplies",
              66,
              0.88,
              20
            ],
            [
              "Northeast",
              "SKU-046",
              "Shop supplies",
              59,
              0.873015873015873,
              7
            ],
            [
              "Northeast",
              "SKU-056",
              "Tooling",
              53,
              0.8571428571428571,
              0
            ],
            [
              "Northeast",
              "SKU-064",
              "Tooling",
              50,
              0.8,
              2
            ],
            [
              "Northeast",
              "SKU-001",
              "Fasteners",
              43,
              0.8970588235294118,
              4
            ],
            [
              "Northeast",
              "SKU-011",
              "Fasteners",
              42,
              0.9066666666666666,
              16
            ],
            [
              "Northeast",
              "SKU-020",
              "Safety supplies",
              39,
              0.8717948717948718,
              30
            ],
            [
              "Northeast",
              "SKU-006",
              "Fasteners",
              38,
              0.8813559322033898,
              24
            ],
            [
              "Northeast",
              "SKU-013",
              "Fasteners",
              37,
              0.8596491228070176,
              22
            ]
          ]
        },
        "action": "Review SKU-031 at the Northeast warehouse first. Compare stockout days and carrier transit before changing reorder points. Test revised lead-time assumptions on the affected category.",
        "evidence": {
          "totals": {
            "matured_lines": 2853,
            "otif": 0.8990536277602523,
            "unit_fill": 0.9176575645062743,
            "missed_units": 1752,
            "ending_value": 134458.54,
            "open_lines": 35
          },
          "top_skus": [
            {
              "site": "Northeast",
              "sku": "SKU-031",
              "matured_lines": 85,
              "ordered_units": 599,
              "on_time_units": 462,
              "missed_units": 137,
              "otif": 0.7058823529411765,
              "category": "Safety supplies",
              "ending_stock": 5,
              "unit_cost": 133.55,
              "missed_order_cost_basis": 18296.35
            },
            {
              "site": "Northeast",
              "sku": "SKU-051",
              "matured_lines": 86,
              "ordered_units": 602,
              "on_time_units": 475,
              "missed_units": 127,
              "otif": 0.7674418604651163,
              "category": "Tooling",
              "ending_stock": 40,
              "unit_cost": 79.47,
              "missed_order_cost_basis": 10092.69
            },
            {
              "site": "Northeast",
              "sku": "SKU-041",
              "matured_lines": 87,
              "ordered_units": 644,
              "on_time_units": 548,
              "missed_units": 96,
              "otif": 0.8275862068965517,
              "category": "Shop supplies",
              "ending_stock": 41,
              "unit_cost": 63.44,
              "missed_order_cost_basis": 6090.24
            },
            {
              "site": "Northeast",
              "sku": "SKU-016",
              "matured_lines": 85,
              "ordered_units": 621,
              "on_time_units": 527,
              "missed_units": 94,
              "otif": 0.8352941176470589,
              "category": "Fasteners",
              "ending_stock": 42,
              "unit_cost": 116.44,
              "missed_order_cost_basis": 10945.36
            },
            {
              "site": "Northeast",
              "sku": "SKU-055",
              "matured_lines": 58,
              "ordered_units": 429,
              "on_time_units": 335,
              "missed_units": 94,
              "otif": 0.7586206896551724,
              "category": "Tooling",
              "ending_stock": 24,
              "unit_cost": 140.31,
              "missed_order_cost_basis": 13189.14
            }
          ],
          "site_category": [
            {
              "site": "Northeast",
              "category": "Tooling",
              "missed_units": 498
            },
            {
              "site": "Northeast",
              "category": "Safety supplies",
              "missed_units": 420
            },
            {
              "site": "Northeast",
              "category": "Shop supplies",
              "missed_units": 418
            },
            {
              "site": "Northeast",
              "category": "Fasteners",
              "missed_units": 416
            }
          ],
          "site_service": [
            {
              "site": "Northeast",
              "matured_lines": 2853,
              "complete_on_time": 2565,
              "otif": 0.8990536277602523,
              "ordered_units": 21277,
              "on_time_units": 19525,
              "missed_units": 1752
            }
          ]
        }
      },
      "Southeast": {
        "metrics": [
          {
            "label": "Line OTIF",
            "value": 0.8793536804308797,
            "unit": "pct",
            "note": "Delivered complete by promised date"
          },
          {
            "label": "On-time unit fill",
            "value": 0.9033837087729303,
            "unit": "pct",
            "note": "On-time units ÷ ordered units"
          },
          {
            "label": "Missed promise units",
            "value": 2033,
            "unit": "count",
            "note": "Matured order lines"
          },
          {
            "label": "Ending inventory at cost",
            "value": 135200.63,
            "unit": "money",
            "note": "Single cutoff-date stock balance"
          }
        ],
        "charts": [
          {
            "title": "Delivery performance by promise week",
            "subtitle": "Percent of matured lines and units delivered on time.",
            "labels": [
              "Aug 25",
              "Sep 01",
              "Sep 08",
              "Sep 15",
              "Sep 22",
              "Sep 29",
              "Oct 06",
              "Oct 13",
              "Oct 20",
              "Oct 27",
              "Nov 03",
              "Nov 10",
              "Nov 17",
              "Nov 24",
              "Dec 01",
              "Dec 08",
              "Dec 15",
              "Dec 22"
            ],
            "series": [
              {
                "label": "Line OTIF",
                "values": [
                  0.8412698412698413,
                  0.9122807017543859,
                  0.8176470588235294,
                  0.8586956521739131,
                  0.9056603773584906,
                  0.8726114649681529,
                  0.8771929824561403,
                  0.9320987654320988,
                  0.8679245283018868,
                  0.9076923076923077,
                  0.8961038961038961,
                  0.8671328671328671,
                  0.8721804511278195,
                  0.8650306748466258,
                  0.8837209302325582,
                  0.9050279329608939,
                  0.9084507042253521,
                  0.8366013071895425
                ]
              },
              {
                "label": "Unit fill",
                "values": [
                  0.887,
                  0.9158805031446541,
                  0.847926267281106,
                  0.8944193061840121,
                  0.9290894439967768,
                  0.8976052848885219,
                  0.898981989036805,
                  0.9373454245671888,
                  0.8964003511852502,
                  0.9306532663316583,
                  0.9169491525423729,
                  0.8886861313868614,
                  0.893574297188755,
                  0.8766233766233766,
                  0.934077079107505,
                  0.9357459379615952,
                  0.9232192414431082,
                  0.8615249780893953
                ]
              }
            ],
            "unit": "pct",
            "kind": "line"
          },
          {
            "title": "Largest service gaps",
            "subtitle": "Missed promise units by site and product category.",
            "labels": [
              "Southeast · Tooling",
              "Southeast · Safety supplies",
              "Southeast · Fasteners",
              "Southeast · Shop supplies"
            ],
            "series": [
              {
                "label": "Missed units",
                "values": [
                  562,
                  536,
                  480,
                  455
                ]
              }
            ],
            "unit": "count",
            "kind": "bars"
          }
        ],
        "table": {
          "title": "SKU replenishment review",
          "subtitle": "Top 15 SKU and warehouse pairs by missed units. Ending stock is shown for the cutoff date.",
          "columns": [
            [
              "Warehouse",
              "text"
            ],
            [
              "SKU",
              "text"
            ],
            [
              "Category",
              "text"
            ],
            [
              "Missed units",
              "count"
            ],
            [
              "Line OTIF",
              "pct"
            ],
            [
              "Ending stock",
              "count"
            ]
          ],
          "rows": [
            [
              "Southeast",
              "SKU-046",
              "Shop supplies",
              149,
              0.7325581395348837,
              34
            ],
            [
              "Southeast",
              "SKU-026",
              "Safety supplies",
              138,
              0.7341772151898734,
              24
            ],
            [
              "Southeast",
              "SKU-051",
              "Tooling",
              113,
              0.7564102564102564,
              0
            ],
            [
              "Southeast",
              "SKU-006",
              "Fasteners",
              107,
              0.7571428571428571,
              41
            ],
            [
              "Southeast",
              "SKU-031",
              "Safety supplies",
              107,
              0.782051282051282,
              18
            ],
            [
              "Southeast",
              "SKU-021",
              "Safety supplies",
              100,
              0.8148148148148148,
              15
            ],
            [
              "Southeast",
              "SKU-056",
              "Tooling",
              85,
              0.8522727272727273,
              29
            ],
            [
              "Southeast",
              "SKU-001",
              "Fasteners",
              81,
              0.78125,
              6
            ],
            [
              "Southeast",
              "SKU-061",
              "Tooling",
              79,
              0.7833333333333333,
              30
            ],
            [
              "Southeast",
              "SKU-049",
              "Tooling",
              72,
              0.7959183673469388,
              26
            ],
            [
              "Southeast",
              "SKU-036",
              "Shop supplies",
              54,
              0.8656716417910447,
              24
            ],
            [
              "Southeast",
              "SKU-011",
              "Fasteners",
              52,
              0.859375,
              28
            ],
            [
              "Southeast",
              "SKU-008",
              "Fasteners",
              41,
              0.8723404255319149,
              22
            ],
            [
              "Southeast",
              "SKU-023",
              "Safety supplies",
              40,
              0.825,
              20
            ],
            [
              "Southeast",
              "SKU-050",
              "Tooling",
              40,
              0.8275862068965517,
              39
            ]
          ]
        },
        "action": "Review SKU-046 at the Southeast warehouse first. Compare stockout days and carrier transit before changing reorder points. Test revised lead-time assumptions on the affected category.",
        "evidence": {
          "totals": {
            "matured_lines": 2785,
            "otif": 0.8793536804308797,
            "unit_fill": 0.9033837087729303,
            "missed_units": 2033,
            "ending_value": 135200.63,
            "open_lines": 34
          },
          "top_skus": [
            {
              "site": "Southeast",
              "sku": "SKU-046",
              "matured_lines": 86,
              "ordered_units": 674,
              "on_time_units": 525,
              "missed_units": 149,
              "otif": 0.7325581395348837,
              "category": "Shop supplies",
              "ending_stock": 34,
              "unit_cost": 51.67,
              "missed_order_cost_basis": 7698.83
            },
            {
              "site": "Southeast",
              "sku": "SKU-026",
              "matured_lines": 79,
              "ordered_units": 579,
              "on_time_units": 441,
              "missed_units": 138,
              "otif": 0.7341772151898734,
              "category": "Safety supplies",
              "ending_stock": 24,
              "unit_cost": 77.87,
              "missed_order_cost_basis": 10746.06
            },
            {
              "site": "Southeast",
              "sku": "SKU-051",
              "matured_lines": 78,
              "ordered_units": 605,
              "on_time_units": 492,
              "missed_units": 113,
              "otif": 0.7564102564102564,
              "category": "Tooling",
              "ending_stock": 0,
              "unit_cost": 79.47,
              "missed_order_cost_basis": 8980.11
            },
            {
              "site": "Southeast",
              "sku": "SKU-006",
              "matured_lines": 70,
              "ordered_units": 543,
              "on_time_units": 436,
              "missed_units": 107,
              "otif": 0.7571428571428571,
              "category": "Fasteners",
              "ending_stock": 41,
              "unit_cost": 127.1,
              "missed_order_cost_basis": 13599.7
            },
            {
              "site": "Southeast",
              "sku": "SKU-031",
              "matured_lines": 78,
              "ordered_units": 584,
              "on_time_units": 477,
              "missed_units": 107,
              "otif": 0.782051282051282,
              "category": "Safety supplies",
              "ending_stock": 18,
              "unit_cost": 133.55,
              "missed_order_cost_basis": 14289.85
            }
          ],
          "site_category": [
            {
              "site": "Southeast",
              "category": "Tooling",
              "missed_units": 562
            },
            {
              "site": "Southeast",
              "category": "Safety supplies",
              "missed_units": 536
            },
            {
              "site": "Southeast",
              "category": "Fasteners",
              "missed_units": 480
            },
            {
              "site": "Southeast",
              "category": "Shop supplies",
              "missed_units": 455
            }
          ],
          "site_service": [
            {
              "site": "Southeast",
              "matured_lines": 2785,
              "complete_on_time": 2449,
              "otif": 0.8793536804308797,
              "ordered_units": 21042,
              "on_time_units": 19009,
              "missed_units": 2033
            }
          ]
        }
      },
      "West": {
        "metrics": [
          {
            "label": "Line OTIF",
            "value": 0.6851851851851852,
            "unit": "pct",
            "note": "Delivered complete by promised date"
          },
          {
            "label": "On-time unit fill",
            "value": 0.6280799067486635,
            "unit": "pct",
            "note": "On-time units ÷ ordered units"
          },
          {
            "label": "Missed promise units",
            "value": 9253,
            "unit": "count",
            "note": "Matured order lines"
          },
          {
            "label": "Ending inventory at cost",
            "value": 100907.58,
            "unit": "money",
            "note": "Single cutoff-date stock balance"
          }
        ],
        "charts": [
          {
            "title": "Delivery performance by promise week",
            "subtitle": "Percent of matured lines and units delivered on time.",
            "labels": [
              "Aug 25",
              "Sep 01",
              "Sep 08",
              "Sep 15",
              "Sep 22",
              "Sep 29",
              "Oct 06",
              "Oct 13",
              "Oct 20",
              "Oct 27",
              "Nov 03",
              "Nov 10",
              "Nov 17",
              "Nov 24",
              "Dec 01",
              "Dec 08",
              "Dec 15",
              "Dec 22"
            ],
            "series": [
              {
                "label": "Line OTIF",
                "values": [
                  0.831858407079646,
                  0.7762237762237763,
                  0.7669172932330827,
                  0.73125,
                  0.7639751552795031,
                  0.725609756097561,
                  0.5733333333333334,
                  0.5763888888888888,
                  0.6502732240437158,
                  0.6384615384615384,
                  0.7005988023952096,
                  0.6168831168831169,
                  0.5724137931034483,
                  0.6190476190476191,
                  0.7046979865771812,
                  0.7207792207792207,
                  0.6612021857923497,
                  0.7298850574712644
                ]
              },
              {
                "label": "Unit fill",
                "values": [
                  0.8485958485958486,
                  0.7909002904162633,
                  0.7954329210275928,
                  0.7728013029315961,
                  0.8260511129431163,
                  0.7158931082981715,
                  0.5358514724711908,
                  0.4806594800253646,
                  0.5245202558635395,
                  0.5398683247988295,
                  0.606508875739645,
                  0.5296689569019363,
                  0.4163288940359004,
                  0.48816936488169366,
                  0.6288,
                  0.7553191489361702,
                  0.7138849929873773,
                  0.7367613200306984
                ]
              }
            ],
            "unit": "pct",
            "kind": "line"
          },
          {
            "title": "Largest service gaps",
            "subtitle": "Missed promise units by site and product category.",
            "labels": [
              "West · Fasteners",
              "West · Safety supplies",
              "West · Tooling",
              "West · Shop supplies"
            ],
            "series": [
              {
                "label": "Missed units",
                "values": [
                  6782,
                  964,
                  758,
                  749
                ]
              }
            ],
            "unit": "count",
            "kind": "bars"
          }
        ],
        "table": {
          "title": "SKU replenishment review",
          "subtitle": "Top 15 SKU and warehouse pairs by missed units. Ending stock is shown for the cutoff date.",
          "columns": [
            [
              "Warehouse",
              "text"
            ],
            [
              "SKU",
              "text"
            ],
            [
              "Category",
              "text"
            ],
            [
              "Missed units",
              "count"
            ],
            [
              "Line OTIF",
              "pct"
            ],
            [
              "Ending stock",
              "count"
            ]
          ],
          "rows": [
            [
              "West",
              "SKU-011",
              "Fasteners",
              886,
              0.10465116279069768,
              0
            ],
            [
              "West",
              "SKU-006",
              "Fasteners",
              718,
              0.19402985074626866,
              0
            ],
            [
              "West",
              "SKU-001",
              "Fasteners",
              709,
              0.25757575757575757,
              0
            ],
            [
              "West",
              "SKU-016",
              "Fasteners",
              708,
              0.2835820895522388,
              7
            ],
            [
              "West",
              "SKU-005",
              "Fasteners",
              511,
              0.2962962962962963,
              0
            ],
            [
              "West",
              "SKU-004",
              "Fasteners",
              476,
              0.21428571428571427,
              0
            ],
            [
              "West",
              "SKU-007",
              "Fasteners",
              410,
              0.4090909090909091,
              23
            ],
            [
              "West",
              "SKU-008",
              "Fasteners",
              360,
              0.40540540540540543,
              0
            ],
            [
              "West",
              "SKU-002",
              "Fasteners",
              359,
              0.23684210526315788,
              14
            ],
            [
              "West",
              "SKU-010",
              "Fasteners",
              350,
              0.2647058823529412,
              16
            ],
            [
              "West",
              "SKU-013",
              "Fasteners",
              307,
              0.2777777777777778,
              23
            ],
            [
              "West",
              "SKU-003",
              "Fasteners",
              284,
              0.2702702702702703,
              0
            ],
            [
              "West",
              "SKU-014",
              "Fasteners",
              239,
              0.5428571428571428,
              26
            ],
            [
              "West",
              "SKU-026",
              "Safety supplies",
              237,
              0.5813953488372093,
              7
            ],
            [
              "West",
              "SKU-009",
              "Fasteners",
              173,
              0.6363636363636364,
              8
            ]
          ]
        },
        "action": "Review SKU-011 at the West warehouse first. Compare stockout days and carrier transit before changing reorder points. Test revised lead-time assumptions on the affected category.",
        "evidence": {
          "totals": {
            "matured_lines": 2754,
            "otif": 0.6851851851851852,
            "unit_fill": 0.6280799067486635,
            "missed_units": 9253,
            "ending_value": 100907.58,
            "open_lines": 31
          },
          "top_skus": [
            {
              "site": "West",
              "sku": "SKU-011",
              "matured_lines": 86,
              "ordered_units": 995,
              "on_time_units": 109,
              "missed_units": 886,
              "otif": 0.10465116279069768,
              "category": "Fasteners",
              "ending_stock": 0,
              "unit_cost": 94.5,
              "missed_order_cost_basis": 83727.0
            },
            {
              "site": "West",
              "sku": "SKU-006",
              "matured_lines": 67,
              "ordered_units": 951,
              "on_time_units": 233,
              "missed_units": 718,
              "otif": 0.19402985074626866,
              "category": "Fasteners",
              "ending_stock": 0,
              "unit_cost": 127.1,
              "missed_order_cost_basis": 91257.8
            },
            {
              "site": "West",
              "sku": "SKU-001",
              "matured_lines": 66,
              "ordered_units": 904,
              "on_time_units": 195,
              "missed_units": 709,
              "otif": 0.25757575757575757,
              "category": "Fasteners",
              "ending_stock": 0,
              "unit_cost": 55.23,
              "missed_order_cost_basis": 39158.07
            },
            {
              "site": "West",
              "sku": "SKU-016",
              "matured_lines": 67,
              "ordered_units": 925,
              "on_time_units": 217,
              "missed_units": 708,
              "otif": 0.2835820895522388,
              "category": "Fasteners",
              "ending_stock": 7,
              "unit_cost": 116.44,
              "missed_order_cost_basis": 82439.52
            },
            {
              "site": "West",
              "sku": "SKU-005",
              "matured_lines": 54,
              "ordered_units": 729,
              "on_time_units": 218,
              "missed_units": 511,
              "otif": 0.2962962962962963,
              "category": "Fasteners",
              "ending_stock": 0,
              "unit_cost": 22.53,
              "missed_order_cost_basis": 11512.83
            }
          ],
          "site_category": [
            {
              "site": "West",
              "category": "Fasteners",
              "missed_units": 6782
            },
            {
              "site": "West",
              "category": "Safety supplies",
              "missed_units": 964
            },
            {
              "site": "West",
              "category": "Tooling",
              "missed_units": 758
            },
            {
              "site": "West",
              "category": "Shop supplies",
              "missed_units": 749
            }
          ],
          "site_service": [
            {
              "site": "West",
              "matured_lines": 2754,
              "complete_on_time": 1887,
              "otif": 0.6851851851851852,
              "ordered_units": 24879,
              "on_time_units": 15626,
              "missed_units": 9253
            }
          ]
        }
      }
    },
    "accent": "forest",
    "controls": [
      {
        "control": "Order-line and shipment IDs are unique",
        "exceptions": 0,
        "status": "PASS"
      },
      {
        "control": "Every shipment has an order line, positive units and valid event dates",
        "exceptions": 0,
        "status": "PASS"
      },
      {
        "control": "Order quantities reconcile with shipped, on-time and service deficit",
        "exceptions": 0,
        "status": "PASS"
      },
      {
        "control": "The model contains exactly one inventory row per expected day, site and SKU",
        "exceptions": 0,
        "status": "PASS"
      },
      {
        "control": "Stock closes to opening plus receipts minus shipments",
        "exceptions": 0,
        "status": "PASS"
      },
      {
        "control": "Daily inventory opening agrees to previous close",
        "exceptions": 0,
        "status": "PASS"
      },
      {
        "control": "Inventory shipments reconcile to actual outbound lines by site, SKU and day",
        "exceptions": 0,
        "status": "PASS"
      },
      {
        "control": "Pending observation rows remain outside the OTIF denominator",
        "exceptions": 0,
        "status": "PASS"
      }
    ],
    "description": "Which product and warehouse combinations deserve attention before the next replenishment cycle?",
    "method": "A seeded order, shipment and inventory simulation. The warehouse findings illustrate how to prioritize investigation under the stated demand and carrier assumptions."
  },
  "nyc-311": {
    "title": "NYC 311 pothole response",
    "short": "NYC 311",
    "source": "Public NYC Open Data",
    "period": "2024–2025 intake",
    "filter": "Borough",
    "views": {
      "All boroughs": {
        "metrics": [
          {
            "label": "Requests filed",
            "value": 77239,
            "unit": "count",
            "note": "All in-scope reports"
          },
          {
            "label": "Closed within 7 days",
            "value": 0.9085470085470085,
            "unit": "pct",
            "note": "Analyzable requests"
          },
          {
            "label": "Unresolved at 30 days",
            "value": 0.07078477078477079,
            "unit": "pct",
            "note": "Analyzable requests"
          },
          {
            "label": "Weekend gap",
            "value": 0.002991711764610307,
            "unit": "pp",
            "note": "Weekend minus weekday, adjusted for borough and month"
          }
        ],
        "charts": [
          {
            "title": "Share closed within seven days",
            "subtitle": "Follow up begins at intake. Both years receive the same observation windows.",
            "labels": [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ],
            "series": [
              {
                "label": "2024",
                "values": [
                  0.97351209941138,
                  0.9866452991452992,
                  0.9026330744459178,
                  0.805706776797447,
                  0.8730483747120553,
                  0.9117733844791974,
                  0.9021032504780114,
                  0.8645418326693227,
                  0.9357884796978282,
                  0.9660356347438753,
                  0.9747668678003292,
                  0.9904981284192341
                ]
              },
              {
                "label": "2025",
                "values": [
                  0.9910641754670999,
                  0.9631919078392807,
                  0.9364416608675481,
                  0.9126513785106931,
                  0.830891184242133,
                  0.9141028796455821,
                  0.8567756151303709,
                  0.8278460928203094,
                  0.8344453711426189,
                  0.8483412322274881,
                  0.9116869381279746,
                  0.938445667125172
                ]
              }
            ],
            "unit": "pct",
            "kind": "columns"
          },
          {
            "title": "Requests unresolved at day 30",
            "subtitle": "Count by borough for the 2025 intake cohort.",
            "labels": [
              "Queens",
              "Manhattan",
              "Staten Island",
              "Bronx",
              "Brooklyn"
            ],
            "series": [
              {
                "label": "2025",
                "values": [
                  2651,
                  213,
                  145,
                  131,
                  31
                ]
              }
            ],
            "unit": "count",
            "kind": "bars"
          }
        ],
        "table": {
          "title": "Borough review",
          "subtitle": "Counts and closure rates focus triage while keeping volume differences visible.",
          "columns": [
            [
              "Borough",
              "text"
            ],
            [
              "2024 7-day closure",
              "pct"
            ],
            [
              "2025 7-day closure",
              "pct"
            ],
            [
              "Change",
              "pp"
            ],
            [
              "2025 eligible",
              "count"
            ],
            [
              "2025 unresolved at 30 days",
              "count"
            ]
          ],
          "rows": [
            [
              "Queens",
              0.8856012061816811,
              0.8343698048149745,
              -0.051231401366706675,
              16241,
              2651
            ],
            [
              "Manhattan",
              0.9634123222748815,
              0.9624912770411723,
              -0.0009210452337091724,
              5732,
              213
            ],
            [
              "Staten Island",
              0.8726214461607342,
              0.9236719958741619,
              0.051050549713427706,
              3878,
              145
            ],
            [
              "Bronx",
              0.8749441715051363,
              0.8810617662072486,
              0.006117594702112372,
              3918,
              131
            ],
            [
              "Brooklyn",
              0.9824046920821115,
              0.9914529914529915,
              0.00904829937088003,
              8541,
              31
            ]
          ]
        },
        "action": "Start an aged-case review in Queens. Sample long-open records and check closure coding, queue assignment, and crew capacity before changing staffing.",
        "evidence": {
          "totals": {
            "total": 77239,
            "excluded": 19,
            "rate7": 0.9085470085470085,
            "aged": 0.07078477078477079
          },
          "weekend_comparison": {
            "represented": 76973,
            "adjusted_gap": 0.002991711764610307,
            "crude_gap": 0.0023818203129610804
          },
          "boroughs": [
            {
              "title_borough": "QUEENS",
              "year24": 0.8856012061816811,
              "year25": 0.8343698048149745,
              "unresolved_25": 2651,
              "volume_25": 16241
            },
            {
              "title_borough": "MANHATTAN",
              "year24": 0.9634123222748815,
              "year25": 0.9624912770411723,
              "unresolved_25": 213,
              "volume_25": 5732
            },
            {
              "title_borough": "STATEN ISLAND",
              "year24": 0.8726214461607342,
              "year25": 0.9236719958741619,
              "unresolved_25": 145,
              "volume_25": 3878
            },
            {
              "title_borough": "BRONX",
              "year24": 0.8749441715051363,
              "year25": 0.8810617662072486,
              "unresolved_25": 131,
              "volume_25": 3918
            },
            {
              "title_borough": "BROOKLYN",
              "year24": 0.9824046920821115,
              "year25": 0.9914529914529915,
              "unresolved_25": 31,
              "volume_25": 8541
            }
          ],
          "timing_quality": [
            {
              "timing_status": "Analyzable",
              "requests": 77220
            },
            {
              "timing_status": "Closure before intake",
              "requests": 19
            }
          ]
        }
      },
      "Bronx": {
        "metrics": [
          {
            "label": "Requests filed",
            "value": 8399,
            "unit": "count",
            "note": "All in-scope reports"
          },
          {
            "label": "Closed within 7 days",
            "value": 0.8777989518818485,
            "unit": "pct",
            "note": "Analyzable requests"
          },
          {
            "label": "Unresolved at 30 days",
            "value": 0.030133396855645544,
            "unit": "pct",
            "note": "Analyzable requests"
          },
          {
            "label": "Weekend gap",
            "value": -0.004027069442825425,
            "unit": "pp",
            "note": "Weekend minus weekday, adjusted for borough and month"
          }
        ],
        "charts": [
          {
            "title": "Share closed within seven days",
            "subtitle": "Follow up begins at intake. Both years receive the same observation windows.",
            "labels": [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ],
            "series": [
              {
                "label": "2024",
                "values": [
                  0.9860557768924303,
                  0.9779411764705882,
                  0.7155555555555555,
                  0.6152304609218436,
                  0.8,
                  0.9483146067415731,
                  0.8237704918032787,
                  0.8152173913043478,
                  0.9008620689655172,
                  0.9845360824742269,
                  0.9829059829059829,
                  0.9951923076923077
                ]
              },
              {
                "label": "2025",
                "values": [
                  0.9920844327176781,
                  0.9872122762148338,
                  0.8679653679653679,
                  0.9002123142250531,
                  0.8567639257294429,
                  0.8,
                  0.7306397306397306,
                  0.6652719665271967,
                  0.8129770992366412,
                  0.9565217391304348,
                  0.9632352941176471,
                  0.9834254143646409
                ]
              }
            ],
            "unit": "pct",
            "kind": "columns"
          },
          {
            "title": "Requests unresolved at day 30",
            "subtitle": "Count by borough for the 2025 intake cohort.",
            "labels": [
              "Bronx"
            ],
            "series": [
              {
                "label": "2025",
                "values": [
                  131
                ]
              }
            ],
            "unit": "count",
            "kind": "bars"
          }
        ],
        "table": {
          "title": "Borough review",
          "subtitle": "Counts and closure rates focus triage while keeping volume differences visible.",
          "columns": [
            [
              "Borough",
              "text"
            ],
            [
              "2024 7-day closure",
              "pct"
            ],
            [
              "2025 7-day closure",
              "pct"
            ],
            [
              "Change",
              "pp"
            ],
            [
              "2025 eligible",
              "count"
            ],
            [
              "2025 unresolved at 30 days",
              "count"
            ]
          ],
          "rows": [
            [
              "Bronx",
              0.8749441715051363,
              0.8810617662072486,
              0.006117594702112372,
              3918,
              131
            ]
          ]
        },
        "action": "Start an aged-case review in Bronx. Sample long-open records and check closure coding, queue assignment, and crew capacity before changing staffing.",
        "evidence": {
          "totals": {
            "total": 8399,
            "excluded": 3,
            "rate7": 0.8777989518818485,
            "aged": 0.030133396855645544
          },
          "weekend_comparison": {
            "represented": 8396,
            "adjusted_gap": -0.004027069442825425,
            "crude_gap": 0.00815471296136816
          },
          "boroughs": [
            {
              "title_borough": "BRONX",
              "year24": 0.8749441715051363,
              "year25": 0.8810617662072486,
              "unresolved_25": 131,
              "volume_25": 3918
            }
          ],
          "timing_quality": [
            {
              "timing_status": "Analyzable",
              "requests": 8396
            },
            {
              "timing_status": "Closure before intake",
              "requests": 3
            }
          ]
        }
      },
      "Brooklyn": {
        "metrics": [
          {
            "label": "Requests filed",
            "value": 17070,
            "unit": "count",
            "note": "All in-scope reports"
          },
          {
            "label": "Closed within 7 days",
            "value": 0.9869330833235673,
            "unit": "pct",
            "note": "Analyzable requests"
          },
          {
            "label": "Unresolved at 30 days",
            "value": 0.004922067268252666,
            "unit": "pct",
            "note": "Analyzable requests"
          },
          {
            "label": "Weekend gap",
            "value": 0.0024164082616181595,
            "unit": "pp",
            "note": "Weekend minus weekday, adjusted for borough and month"
          }
        ],
        "charts": [
          {
            "title": "Share closed within seven days",
            "subtitle": "Follow up begins at intake. Both years receive the same observation windows.",
            "labels": [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ],
            "series": [
              {
                "label": "2024",
                "values": [
                  0.9854368932038835,
                  0.9869668246445498,
                  0.9891205802357208,
                  0.9725877192982456,
                  0.9670781893004116,
                  0.9793956043956044,
                  0.989409984871407,
                  0.9701492537313433,
                  0.9931662870159453,
                  0.9541062801932367,
                  0.9879518072289156,
                  0.9954954954954955
                ]
              },
              {
                "label": "2025",
                "values": [
                  0.9945533769063181,
                  0.9884763124199744,
                  0.9912280701754386,
                  0.9925925925925926,
                  0.9838709677419355,
                  0.9941118743866536,
                  0.9822866344605475,
                  0.9919093851132686,
                  1.0,
                  0.9980544747081712,
                  0.9949109414758269,
                  0.9882943143812709
                ]
              }
            ],
            "unit": "pct",
            "kind": "columns"
          },
          {
            "title": "Requests unresolved at day 30",
            "subtitle": "Count by borough for the 2025 intake cohort.",
            "labels": [
              "Brooklyn"
            ],
            "series": [
              {
                "label": "2025",
                "values": [
                  31
                ]
              }
            ],
            "unit": "count",
            "kind": "bars"
          }
        ],
        "table": {
          "title": "Borough review",
          "subtitle": "Counts and closure rates focus triage while keeping volume differences visible.",
          "columns": [
            [
              "Borough",
              "text"
            ],
            [
              "2024 7-day closure",
              "pct"
            ],
            [
              "2025 7-day closure",
              "pct"
            ],
            [
              "Change",
              "pp"
            ],
            [
              "2025 eligible",
              "count"
            ],
            [
              "2025 unresolved at 30 days",
              "count"
            ]
          ],
          "rows": [
            [
              "Brooklyn",
              0.9824046920821115,
              0.9914529914529915,
              0.00904829937088003,
              8541,
              31
            ]
          ]
        },
        "action": "Start an aged-case review in Brooklyn. Sample long-open records and check closure coding, queue assignment, and crew capacity before changing staffing.",
        "evidence": {
          "totals": {
            "total": 17070,
            "excluded": 4,
            "rate7": 0.9869330833235673,
            "aged": 0.004922067268252666
          },
          "weekend_comparison": {
            "represented": 17066,
            "adjusted_gap": 0.0024164082616181595,
            "crude_gap": 0.0026986480505496457
          },
          "boroughs": [
            {
              "title_borough": "BROOKLYN",
              "year24": 0.9824046920821115,
              "year25": 0.9914529914529915,
              "unresolved_25": 31,
              "volume_25": 8541
            }
          ],
          "timing_quality": [
            {
              "timing_status": "Analyzable",
              "requests": 17066
            },
            {
              "timing_status": "Closure before intake",
              "requests": 4
            }
          ]
        }
      },
      "Manhattan": {
        "metrics": [
          {
            "label": "Requests filed",
            "value": 11009,
            "unit": "count",
            "note": "All in-scope reports"
          },
          {
            "label": "Closed within 7 days",
            "value": 0.9629326792041428,
            "unit": "pct",
            "note": "Analyzable requests"
          },
          {
            "label": "Unresolved at 30 days",
            "value": 0.03634051058417371,
            "unit": "pct",
            "note": "Analyzable requests"
          },
          {
            "label": "Weekend gap",
            "value": -0.00860586448113161,
            "unit": "pp",
            "note": "Weekend minus weekday, adjusted for borough and month"
          }
        ],
        "charts": [
          {
            "title": "Share closed within seven days",
            "subtitle": "Follow up begins at intake. Both years receive the same observation windows.",
            "labels": [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ],
            "series": [
              {
                "label": "2024",
                "values": [
                  0.9774011299435028,
                  0.9766899766899767,
                  0.9769021739130435,
                  0.9847009735744089,
                  0.974903474903475,
                  0.9479166666666666,
                  0.8888888888888888,
                  0.9137931034482759,
                  0.9635854341736695,
                  0.9665738161559888,
                  0.9769230769230769,
                  0.9933554817275747
                ]
              },
              {
                "label": "2025",
                "values": [
                  0.9841628959276018,
                  0.9851116625310173,
                  0.9630723781388478,
                  0.9673539518900344,
                  0.9738562091503268,
                  0.9422442244224423,
                  0.9309021113243762,
                  0.9343544857768052,
                  0.9752747252747253,
                  0.9619289340101523,
                  0.9637462235649547,
                  0.9854227405247813
                ]
              }
            ],
            "unit": "pct",
            "kind": "columns"
          },
          {
            "title": "Requests unresolved at day 30",
            "subtitle": "Count by borough for the 2025 intake cohort.",
            "labels": [
              "Manhattan"
            ],
            "series": [
              {
                "label": "2025",
                "values": [
                  213
                ]
              }
            ],
            "unit": "count",
            "kind": "bars"
          }
        ],
        "table": {
          "title": "Borough review",
          "subtitle": "Counts and closure rates focus triage while keeping volume differences visible.",
          "columns": [
            [
              "Borough",
              "text"
            ],
            [
              "2024 7-day closure",
              "pct"
            ],
            [
              "2025 7-day closure",
              "pct"
            ],
            [
              "Change",
              "pp"
            ],
            [
              "2025 eligible",
              "count"
            ],
            [
              "2025 unresolved at 30 days",
              "count"
            ]
          ],
          "rows": [
            [
              "Manhattan",
              0.9634123222748815,
              0.9624912770411723,
              -0.0009210452337091724,
              5732,
              213
            ]
          ]
        },
        "action": "Start an aged-case review in Manhattan. Sample long-open records and check closure coding, queue assignment, and crew capacity before changing staffing.",
        "evidence": {
          "totals": {
            "total": 11009,
            "excluded": 2,
            "rate7": 0.9629326792041428,
            "aged": 0.03634051058417371
          },
          "weekend_comparison": {
            "represented": 11007,
            "adjusted_gap": -0.00860586448113161,
            "crude_gap": -0.00790189085016324
          },
          "boroughs": [
            {
              "title_borough": "MANHATTAN",
              "year24": 0.9634123222748815,
              "year25": 0.9624912770411723,
              "unresolved_25": 213,
              "volume_25": 5732
            }
          ],
          "timing_quality": [
            {
              "timing_status": "Analyzable",
              "requests": 11007
            },
            {
              "timing_status": "Closure before intake",
              "requests": 2
            }
          ]
        }
      },
      "Queens": {
        "metrics": [
          {
            "label": "Requests filed",
            "value": 32166,
            "unit": "count",
            "note": "All in-scope reports"
          },
          {
            "label": "Closed within 7 days",
            "value": 0.8597282253801424,
            "unit": "pct",
            "note": "Analyzable requests"
          },
          {
            "label": "Unresolved at 30 days",
            "value": 0.13750427563046114,
            "unit": "pct",
            "note": "Analyzable requests"
          },
          {
            "label": "Weekend gap",
            "value": 0.01290168098629059,
            "unit": "pp",
            "note": "Weekend minus weekday, adjusted for borough and month"
          }
        ],
        "charts": [
          {
            "title": "Share closed within seven days",
            "subtitle": "Follow up begins at intake. Both years receive the same observation windows.",
            "labels": [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ],
            "series": [
              {
                "label": "2024",
                "values": [
                  0.9518072289156626,
                  0.9925975773889637,
                  0.892271662763466,
                  0.7804588607594937,
                  0.8319194061505832,
                  0.8536759457530335,
                  0.8643446379468378,
                  0.7975077881619937,
                  0.9073226544622426,
                  0.9875,
                  0.978448275862069,
                  0.9964881474978051
                ]
              },
              {
                "label": "2025",
                "values": [
                  0.9965301873698821,
                  0.9333795975017349,
                  0.9146413752222881,
                  0.8506616257088847,
                  0.7346437346437347,
                  0.8992558672009159,
                  0.7660984848484849,
                  0.7103718199608611,
                  0.7025316455696202,
                  0.6826347305389222,
                  0.8331441543700341,
                  0.8745954692556634
                ]
              }
            ],
            "unit": "pct",
            "kind": "columns"
          },
          {
            "title": "Requests unresolved at day 30",
            "subtitle": "Count by borough for the 2025 intake cohort.",
            "labels": [
              "Queens"
            ],
            "series": [
              {
                "label": "2025",
                "values": [
                  2651
                ]
              }
            ],
            "unit": "count",
            "kind": "bars"
          }
        ],
        "table": {
          "title": "Borough review",
          "subtitle": "Counts and closure rates focus triage while keeping volume differences visible.",
          "columns": [
            [
              "Borough",
              "text"
            ],
            [
              "2024 7-day closure",
              "pct"
            ],
            [
              "2025 7-day closure",
              "pct"
            ],
            [
              "Change",
              "pp"
            ],
            [
              "2025 eligible",
              "count"
            ],
            [
              "2025 unresolved at 30 days",
              "count"
            ]
          ],
          "rows": [
            [
              "Queens",
              0.8856012061816811,
              0.8343698048149745,
              -0.051231401366706675,
              16241,
              2651
            ]
          ]
        },
        "action": "Start an aged-case review in Queens. Sample long-open records and check closure coding, queue assignment, and crew capacity before changing staffing.",
        "evidence": {
          "totals": {
            "total": 32166,
            "excluded": 7,
            "rate7": 0.8597282253801424,
            "aged": 0.13750427563046114
          },
          "weekend_comparison": {
            "represented": 32159,
            "adjusted_gap": 0.01290168098629059,
            "crude_gap": 0.007196896528678942
          },
          "boroughs": [
            {
              "title_borough": "QUEENS",
              "year24": 0.8856012061816811,
              "year25": 0.8343698048149745,
              "unresolved_25": 2651,
              "volume_25": 16241
            }
          ],
          "timing_quality": [
            {
              "timing_status": "Analyzable",
              "requests": 32159
            },
            {
              "timing_status": "Closure before intake",
              "requests": 7
            }
          ]
        }
      },
      "Staten Island": {
        "metrics": [
          {
            "label": "Requests filed",
            "value": 8348,
            "unit": "count",
            "note": "All in-scope reports"
          },
          {
            "label": "Closed within 7 days",
            "value": 0.896345116836429,
            "unit": "pct",
            "note": "Analyzable requests"
          },
          {
            "label": "Unresolved at 30 days",
            "value": 0.035829838226482925,
            "unit": "pct",
            "note": "Analyzable requests"
          },
          {
            "label": "Weekend gap",
            "value": -0.011662855265160876,
            "unit": "pp",
            "note": "Weekend minus weekday, adjusted for borough and month"
          }
        ],
        "charts": [
          {
            "title": "Share closed within seven days",
            "subtitle": "Follow up begins at intake. Both years receive the same observation windows.",
            "labels": [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ],
            "series": [
              {
                "label": "2024",
                "values": [
                  0.9899193548387096,
                  0.9840989399293286,
                  0.8531889290012034,
                  0.6238532110091743,
                  0.8308080808080808,
                  0.9099378881987578,
                  0.949748743718593,
                  0.9166666666666666,
                  0.9313725490196079,
                  0.8972972972972973,
                  0.8854961832061069,
                  0.9415807560137457
                ]
              },
              {
                "label": "2025",
                "values": [
                  0.9762376237623762,
                  0.9720670391061452,
                  0.925,
                  0.933649289099526,
                  0.793733681462141,
                  0.815028901734104,
                  0.9230769230769231,
                  0.8722222222222222,
                  0.934640522875817,
                  0.9545454545454546,
                  0.9932432432432432,
                  0.9832402234636871
                ]
              }
            ],
            "unit": "pct",
            "kind": "columns"
          },
          {
            "title": "Requests unresolved at day 30",
            "subtitle": "Count by borough for the 2025 intake cohort.",
            "labels": [
              "Staten Island"
            ],
            "series": [
              {
                "label": "2025",
                "values": [
                  145
                ]
              }
            ],
            "unit": "count",
            "kind": "bars"
          }
        ],
        "table": {
          "title": "Borough review",
          "subtitle": "Counts and closure rates focus triage while keeping volume differences visible.",
          "columns": [
            [
              "Borough",
              "text"
            ],
            [
              "2024 7-day closure",
              "pct"
            ],
            [
              "2025 7-day closure",
              "pct"
            ],
            [
              "Change",
              "pp"
            ],
            [
              "2025 eligible",
              "count"
            ],
            [
              "2025 unresolved at 30 days",
              "count"
            ]
          ],
          "rows": [
            [
              "Staten Island",
              0.8726214461607342,
              0.9236719958741619,
              0.051050549713427706,
              3878,
              145
            ]
          ]
        },
        "action": "Start an aged-case review in Staten Island. Sample long-open records and check closure coding, queue assignment, and crew capacity before changing staffing.",
        "evidence": {
          "totals": {
            "total": 8348,
            "excluded": 3,
            "rate7": 0.896345116836429,
            "aged": 0.035829838226482925
          },
          "weekend_comparison": {
            "represented": 8345,
            "adjusted_gap": -0.011662855265160876,
            "crude_gap": -0.028007188250595894
          },
          "boroughs": [
            {
              "title_borough": "STATEN ISLAND",
              "year24": 0.8726214461607342,
              "year25": 0.9236719958741619,
              "unresolved_25": 145,
              "volume_25": 3878
            }
          ],
          "timing_quality": [
            {
              "timing_status": "Analyzable",
              "requests": 8345
            },
            {
              "timing_status": "Closure before intake",
              "requests": 3
            }
          ]
        }
      }
    },
    "description": "Which borough should lead the next review of long-open pothole requests?",
    "method": "Measures administrative closure for reports submitted to 311. Requests can repeat the same incident, and public records lack staffing and inspection data.",
    "accent": "violet",
    "controls": [
      {
        "control": "Public request IDs are non-null and unique",
        "exceptions": 0,
        "status": "PASS"
      },
      {
        "control": "Every raw record is classified",
        "exceptions": 0,
        "status": "PASS"
      },
      {
        "control": "The published proxy has at least 30 days of opportunity",
        "exceptions": 0,
        "status": "PASS"
      },
      {
        "control": "Every 7-day closure is also a 30-day closure",
        "exceptions": 0,
        "status": "PASS"
      },
      {
        "control": "Rates and unresolved counts reconcile",
        "exceptions": 0,
        "status": "PASS"
      }
    ]
  }
};
