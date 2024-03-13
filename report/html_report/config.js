report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Stopwatch_started.png",
        "test": "..\\bitmaps_test\\20240311-144835\\Stopwatch_started.png",
        "selector": "body",
        "fileName": "Stopwatch_started.png",
        "label": "Stopwatch started",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.4,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/stopwatch/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.33925374348958337,
          "misMatchPercentage": "0.34",
          "analysisTime": 62
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Stopwatch_before_one_circle.png",
        "test": "..\\bitmaps_test\\20240311-144835\\Stopwatch_before_one_circle.png",
        "selector": "body",
        "fileName": "Stopwatch_before_one_circle.png",
        "label": "Stopwatch before one circle",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.4,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/stopwatch/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.4350026448567708,
          "misMatchPercentage": "0.44",
          "analysisTime": 61
        },
        "diffImage": "..\\bitmaps_test\\20240311-144835\\failed_diff_Stopwatch_before_one_circle.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Stopwatch_after_one_circle.png",
        "test": "..\\bitmaps_test\\20240311-144835\\Stopwatch_after_one_circle.png",
        "selector": "body",
        "fileName": "Stopwatch_after_one_circle.png",
        "label": "Stopwatch after one circle",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.4,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/stopwatch/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.5738576253255208,
          "misMatchPercentage": "0.57",
          "analysisTime": 68
        },
        "diffImage": "..\\bitmaps_test\\20240311-144835\\failed_diff_Stopwatch_after_one_circle.png"
      },
      "status": "fail"
    }
  ]
});