const chartPlaceholders = [
  {
    id: "chart1",
    dataset: "datasets/ch1_internet_pen_overtime.csv",
    chartType: "Line chart",
    role: "Opening time-series chart"
  },
  {
    id: "chart2",
    dataset: "datasets/ch2_internet_usage_byCategories.csv",
    chartType: "Radial bar chart",
    role: "Online activity categories"
  },
  {
    id: "chart3",
    dataset: "datasets/ch3_internet_usage_daily.csv",
    chartType: "Stacked bar chart",
    role: "Daily internet usage"
  },
  {
    id: "chart4",
    dataset: "datasets/ch4_internet_usage_byState.csv",
    chartType: "Choropleth map",
    role: "State comparison"
  },
  {
    id: "chart5",
    dataset: "datasets/ch5_internet_usage_urbanvsrural.csv",
    chartType: "Horizontal bar chart",
    role: "Urban-rural comparison"
  },
  {
    id: "chart6",
    dataset: "datasets/ch6_internet_pen_vs_hdi.csv",
    chartType: "Scatter plot",
    role: "Internet penetration versus HDI"
  },
  {
    id: "chart7",
    dataset: "datasets/ch7_internetpen_vs_householdincome.csv",
    chartType: "Scatter plot",
    role: "Internet penetration versus household income"
  },
  {
    id: "chart8",
    dataset: "datasets/ch8_internetpen_byState_overtime.csv",
    chartType: "Small multiples line chart",
    role: "State trends over time"
  },
  {
    id: "chart9",
    dataset: "datasets/ch9_internetpen_ruralvsurban_overtime.csv",
    chartType: "Slope graph",
    role: "Urban-rural trends over time"
  },
  {
    id: "chart10",
    dataset: "datasets/ch10_global_internetpen.csv",
    chartType: "Multi-line trajectory chart",
    role: "Global context"
  }
];

const chart1Spec = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  description: "Malaysia internet penetration from 2000 to 2024.",
  width: "container",
  height: 430,
  autosize: {
    type: "fit",
    contains: "padding"
  },
  background: "transparent",
  data: {
    values: [
      { year: 2000, usage: 21.38473116 },
      { year: 2001, usage: 26.6959725 },
      { year: 2002, usage: 32.33820434 },
      { year: 2003, usage: 34.97115234 },
      { year: 2004, usage: 42.25226563 },
      { year: 2005, usage: 48.62917025 },
      { year: 2006, usage: 51.63798899 },
      { year: 2007, usage: 55.7 },
      { year: 2008, usage: 55.8 },
      { year: 2009, usage: 55.9 },
      { year: 2010, usage: 56.3 },
      { year: 2011, usage: 61 },
      { year: 2012, usage: 65.8 },
      { year: 2013, usage: 57.05751226 },
      { year: 2014, usage: 63.66542588 },
      { year: 2015, usage: 71.06406781 },
      { year: 2016, usage: 78.78830993 },
      { year: 2017, usage: 80.14047901 },
      { year: 2018, usage: 81.20104862 },
      { year: 2019, usage: 84.18714501 },
      { year: 2020, usage: 89.55501192 },
      { year: 2021, usage: 96.7514278 },
      { year: 2022, usage: 97.3986404 },
      { year: 2023, usage: 97.69272633 },
      { year: 2024, usage: 98.0206059 }
    ]
  },
  config: {
    font: "Inter, Arial, sans-serif",
    axis: {
      labelColor: "#5d6870",
      labelFontSize: 12,
      labelPadding: 8,
      titleColor: "#172026",
      titleFontSize: 13,
      titleFontWeight: 700,
      gridColor: "#e5eeec",
      domainColor: "#cbd8d5",
      tickColor: "#cbd8d5"
    },
    view: {
      stroke: null
    }
  },
  layer: [
    {
      mark: {
        type: "area",
        interpolate: "monotone",
        color: "#d7efea",
        opacity: 0.65
      },
      encoding: {
        x: {
          field: "year",
          type: "quantitative",
          scale: { domain: [2000, 2024] },
          axis: {
            title: null,
            format: "d",
            values: [2000, 2005, 2010, 2015, 2020, 2024],
            labelOverlap: false
          }
        },
        y: {
          field: "usage",
          type: "quantitative",
          scale: { domain: [0, 100] },
          axis: {
            title: "Internet penetration (%)",
            tickCount: 6
          }
        }
      }
    },
    {
      mark: {
        type: "line",
        interpolate: "monotone",
        stroke: "#0f7b70",
        strokeWidth: 4
      },
      encoding: {
        x: { field: "year", type: "quantitative" },
        y: { field: "usage", type: "quantitative" },
        tooltip: [
          { field: "year", type: "quantitative", title: "Year", format: "d" },
          {
            field: "usage",
            type: "quantitative",
            title: "Internet penetration",
            format: ".1f"
          }
        ]
      }
    },
    {
      data: {
        values: [
          {
            year: 2000,
            usage: 21.38473116,
            annotation: "2000: about 1 in 5 Malaysians were online"
          },
          {
            year: 2024,
            usage: 98.0206059,
            annotation: "2024: almost every Malaysian was online"
          }
        ]
      },
      mark: {
        type: "point",
        filled: true,
        size: 110,
        color: "#0f7b70",
        stroke: "#ffffff",
        strokeWidth: 2,
        cursor: "pointer"
      },
      encoding: {
        x: { field: "year", type: "quantitative" },
        y: { field: "usage", type: "quantitative" },
        tooltip: [
          { field: "annotation", type: "nominal", title: "Key point" },
          { field: "usage", type: "quantitative", title: "Internet penetration", format: ".1f" }
        ]
      }
    }
  ]
};

const sharedChartConfig = {
  font: "Inter, Arial, sans-serif",
  axis: {
    labelColor: "#5d6870",
    labelFontSize: 12,
    labelPadding: 8,
    titleColor: "#172026",
    titleFontSize: 13,
    titleFontWeight: 700,
    gridColor: "#e5eeec",
    domainColor: "#cbd8d5",
    tickColor: "#cbd8d5"
  },
  legend: {
    labelColor: "#5d6870",
    labelFontSize: 12,
    titleColor: "#172026",
    titleFontSize: 12,
    titleFontWeight: 700,
    orient: "bottom"
  },
  view: {
    stroke: null
  }
};

const chart2Spec = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  description: "Selected 2024 online activities among internet users in Malaysia.",
  width: "container",
  height: 360,
  autosize: {
    type: "fit",
    contains: "padding"
  },
  padding: { top: 26, right: 24, bottom: 8, left: 24 },
  background: "transparent",
  data: {
    values: [
      { activity: "Social networks", phrase: "social networks", percentage: 99.7 },
      { activity: "Downloads and media", phrase: "downloads and media", percentage: 94.3 },
      { activity: "Finding goods or services", phrase: "finding goods or services", percentage: 93.0 },
      { activity: "Banking", phrase: "banking", percentage: 75.5 },
      { activity: "e-Commerce purchases", phrase: "e-Commerce purchases", percentage: 70.8 }
    ]
  },
  transform: [
    {
      calculate: "format(datum.percentage, '.0f') + '% use the internet for ' + datum.phrase",
      as: "tooltipText"
    }
  ],
  config: sharedChartConfig,
  layer: [
    {
      mark: {
        type: "arc",
        innerRadius: 28,
        stroke: "#ffffff",
        strokeWidth: 2,
        cornerRadius: 3
      },
      encoding: {
        theta: {
          field: "percentage",
          type: "quantitative",
          scale: { domain: [0, 100] },
          stack: false
        },
        radius: {
          field: "activity",
          type: "nominal",
          sort: { field: "percentage", order: "descending" },
          scale: { type: "band", rangeMin: 34, rangeMax: 128 }
        },
        color: {
          field: "activity",
          type: "nominal",
          sort: { field: "percentage", order: "descending" },
          scale: {
            range: ["#0f766e", "#2cb1a1", "#9ae1c0", "#b65f2a", "#d7a174"]
          },
          legend: {
            title: "2024 activity",
            columns: 1
          }
        },
        tooltip: [
          { field: "tooltipText", type: "nominal", title: "Usage" }
        ]
      }
    }
  ]
};

const chart3Spec = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  description: "Daily internet usage duration in Malaysia by year.",
  width: "container",
  height: 360,
  autosize: {
    type: "fit",
    contains: "padding"
  },
  background: "transparent",
  data: {
    values: [
      { year: 2018, interval: "Less than 1 hour", percentage: 9.6 },
      { year: 2018, interval: "1-4 hours", percentage: 39.2 },
      { year: 2018, interval: "5-8 hours", percentage: 23.9 },
      { year: 2018, interval: "9-12 hours", percentage: 13.4 },
      { year: 2018, interval: "13-18 hours", percentage: 5.7 },
      { year: 2018, interval: "More than 18 hours", percentage: 8.1 },
      { year: 2020, interval: "Less than 1 hour", percentage: 1.3 },
      { year: 2020, interval: "1-4 hours", percentage: 24.9 },
      { year: 2020, interval: "5-8 hours", percentage: 28.6 },
      { year: 2020, interval: "9-12 hours", percentage: 21.5 },
      { year: 2020, interval: "13-18 hours", percentage: 9.0 },
      { year: 2020, interval: "More than 18 hours", percentage: 11.5 },
      { year: 2022, interval: "Less than 1 hour", percentage: 18.0 },
      { year: 2022, interval: "1-4 hours", percentage: 49.4 },
      { year: 2022, interval: "5-8 hours", percentage: 23.9 },
      { year: 2022, interval: "9-12 hours", percentage: 4.7 },
      { year: 2022, interval: "13-18 hours", percentage: 1.1 },
      { year: 2022, interval: "More than 18 hours", percentage: 1.7 },
      { year: 2024, interval: "Less than 1 hour", percentage: 18.0 },
      { year: 2024, interval: "1-4 hours", percentage: 55.7 },
      { year: 2024, interval: "5-8 hours", percentage: 17.4 },
      { year: 2024, interval: "9-12 hours", percentage: 4.2 },
      { year: 2024, interval: "13-18 hours", percentage: 2.5 },
      { year: 2024, interval: "More than 18 hours", percentage: 2.2 }
    ]
  },
  transform: [
    {
      calculate: "indexof(['Less than 1 hour', '1-4 hours', '5-8 hours', '9-12 hours', '13-18 hours', 'More than 18 hours'], datum.interval)",
      as: "usageOrder"
    }
  ],
  config: sharedChartConfig,
  mark: {
    type: "bar",
    cornerRadiusTopLeft: 2,
    cornerRadiusTopRight: 2
  },
  encoding: {
    x: {
      field: "year",
      type: "ordinal",
      axis: {
        title: null,
        labelAngle: 0
      }
    },
    y: {
      field: "percentage",
      type: "quantitative",
      stack: "normalize",
      axis: {
        title: "Share of internet users",
        format: "%"
      }
    },
    color: {
      field: "interval",
      type: "nominal",
      sort: [
        "Less than 1 hour",
        "1-4 hours",
        "5-8 hours",
        "9-12 hours",
        "13-18 hours",
        "More than 18 hours"
      ],
      scale: {
        range: ["#d4e9e6", "#86c7bf", "#0f7b70", "#b65f2a", "#d5a073", "#ead3bd"]
      },
      legend: {
        title: "Daily usage",
        columns: 3,
        labelLimit: 120
      }
    },
    order: {
      field: "usageOrder",
      type: "quantitative",
      sort: "ascending"
    },
    tooltip: [
      { field: "year", type: "ordinal", title: "Year" },
      { field: "interval", type: "nominal", title: "Daily usage" },
      { field: "percentage", type: "quantitative", title: "Share", format: ".1f" }
    ]
  }
};

const chart4StateUsage = [
  { state: "Johor", internet_usage: 79.7 },
  { state: "Kedah", internet_usage: 55.7 },
  { state: "Kelantan", internet_usage: 40.5 },
  { state: "Melaka", internet_usage: 67.7 },
  { state: "Negeri Sembilan", internet_usage: 60.8 },
  { state: "Pahang", internet_usage: 58.6 },
  { state: "Perak", internet_usage: 58.7 },
  { state: "Perlis", internet_usage: 56.6 },
  { state: "Pulau Pinang", internet_usage: 78.9 },
  { state: "Sabah", internet_usage: 45.6 },
  { state: "Sarawak", internet_usage: 47.8 },
  { state: "Selangor", internet_usage: 85.2 },
  { state: "Terengganu", internet_usage: 62.1 },
  { state: "Kuala Lumpur", internet_usage: 91.0 },
  { state: "Labuan", internet_usage: 64.3 },
  { state: "Putrajaya", internet_usage: 88.9 }
];

const chart4Spec = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  description: "Internet usage by Malaysian state and federal territory.",
  width: "container",
  height: 430,
  autosize: {
    type: "fit",
    contains: "padding"
  },
  padding: { top: 0, right: 0, bottom: 0, left: 0 },
  background: "transparent",
  data: {
    url: "datasets/malaysia_states.geojson",
    format: {
      type: "json",
      property: "features"
    }
  },
  transform: [
    {
      lookup: "properties.name",
      from: {
        data: { values: chart4StateUsage },
        key: "state",
        fields: ["internet_usage"]
      }
    },
    {
      calculate: "datum.properties.name",
      as: "state_name"
    }
  ],
  projection: {
    type: "mercator",
    center: [109.35, 4.25],
    scale: 1780
  },
  config: sharedChartConfig,
  mark: {
    type: "geoshape",
    stroke: "#ffffff",
    strokeWidth: 0.8
  },
  encoding: {
    color: {
      field: "internet_usage",
      type: "quantitative",
      title: "Internet usage (%)",
      scale: {
        domain: [40, 92],
        range: ["#e9d6c3", "#d7efea", "#0f7b70"]
      },
      legend: {
        orient: "bottom",
        direction: "horizontal",
        gradientLength: 220,
        title: "Usage rate"
      }
    },
    tooltip: [
      { field: "state_name", type: "nominal", title: "State" },
      { field: "internet_usage", type: "quantitative", title: "Internet usage", format: ".1f" }
    ]
  }
};

const chart5Spec = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  description: "Internet access in urban and rural Malaysia.",
  width: "container",
  height: 360,
  autosize: {
    type: "fit",
    contains: "padding"
  },
  padding: { top: 16, right: 30, bottom: 20, left: 18 },
  background: "transparent",
  data: {
    values: [
      { area: "Urban", internet_access: 98.8 },
      { area: "Rural", internet_access: 90.3 }
    ]
  },
  transform: [
    {
      calculate: "format(datum.internet_access, '.1f') + '%'",
      as: "label"
    }
  ],
  config: sharedChartConfig,
  layer: [
    {
      mark: {
        type: "bar",
        cornerRadiusEnd: 5,
        height: { band: 0.52 }
      },
      encoding: {
        y: {
          field: "area",
          type: "nominal",
          sort: ["Urban", "Rural"],
          axis: {
            title: null,
            labelFontSize: 14,
            labelFontWeight: 700
          }
        },
        x: {
          field: "internet_access",
          type: "quantitative",
          scale: { domain: [0, 100] },
          axis: {
            title: "Internet access (%)",
            values: [0, 25, 50, 75, 100],
            grid: true
          }
        },
        color: {
          field: "area",
          type: "nominal",
          scale: {
            domain: ["Urban", "Rural"],
            range: ["#0f7b70", "#b65f2a"]
          },
          legend: null
        },
        tooltip: [
          { field: "area", type: "nominal", title: "Area" },
          { field: "internet_access", type: "quantitative", title: "Internet access", format: ".1f" }
        ]
      }
    },
    {
      mark: {
        type: "text",
        align: "left",
        baseline: "middle",
        dx: 8,
        color: "#172026",
        fontWeight: 800,
        fontSize: 14
      },
      encoding: {
        y: {
          field: "area",
          type: "nominal",
          sort: ["Urban", "Rural"]
        },
        x: {
          field: "internet_access",
          type: "quantitative"
        },
        text: {
          field: "label",
          type: "nominal"
        }
      }
    }
  ]
};

const chart6Spec = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  description: "Internet penetration and Human Development Index across selected Asian countries.",
  width: "container",
  height: 285,
  autosize: {
    type: "fit",
    contains: "padding"
  },
  padding: { top: 18, right: 24, bottom: 14, left: 12 },
  background: "transparent",
  data: {
    values: [
      { country: "Singapore", internet_penetration: 94.28518987, hdi: 0.946 },
      { country: "United Arab Emirates", internet_penetration: 100, hdi: 0.94 },
      { country: "Japan", internet_penetration: 85.00990295, hdi: 0.925 },
      { country: "Saudi Arabia", internet_penetration: 100, hdi: 0.9 },
      { country: "Qatar", internet_penetration: 98.15229797, hdi: 0.886 },
      { country: "Kuwait", internet_penetration: 99.74731125, hdi: 0.852 },
      { country: "Kazakhstan", internet_penetration: 92.87846096, hdi: 0.837 },
      { country: "Malaysia", internet_penetration: 97.69272633, hdi: 0.819 },
      { country: "Thailand", internet_penetration: 89.53525238, hdi: 0.798 },
      { country: "China", internet_penetration: 90.6, hdi: 0.797 },
      { country: "Sri Lanka", internet_penetration: 51.2, hdi: 0.776 },
      { country: "Mongolia", internet_penetration: 83.74320221, hdi: 0.747 },
      { country: "Uzbekistan", internet_penetration: 89.01361047, hdi: 0.74 },
      { country: "Indonesia", internet_penetration: 69.20836554, hdi: 0.728 },
      { country: "Philippines", internet_penetration: 77.86699677, hdi: 0.72 },
      { country: "Bangladesh", internet_penetration: 44.50274195, hdi: 0.685 },
      { country: "India", internet_penetration: 60.25230026, hdi: 0.685 },
      { country: "Nepal", internet_penetration: 45.80680084, hdi: 0.622 },
      { country: "Cambodia", internet_penetration: 68.92549896, hdi: 0.606 }
    ]
  },
  transform: [
    {
      calculate: "datum.country == 'Malaysia' ? 'Malaysia' : 'Other countries'",
      as: "focus"
    }
  ],
  config: sharedChartConfig,
  layer: [
    {
      transform: [
        {
          regression: "hdi",
          on: "internet_penetration"
        }
      ],
      mark: {
        type: "line",
        stroke: "#344149",
        strokeDash: [6, 4],
        strokeWidth: 2,
        opacity: 0.75
      },
      encoding: {
        x: { field: "internet_penetration", type: "quantitative" },
        y: { field: "hdi", type: "quantitative" }
      }
    },
    {
      mark: {
        type: "point",
        filled: true,
        size: 95,
        opacity: 0.88,
        stroke: "#ffffff",
        strokeWidth: 1.5
      },
      encoding: {
        x: {
          field: "internet_penetration",
          type: "quantitative",
          scale: { domain: [40, 102] },
          axis: {
            title: "Internet penetration (%)",
            values: [40, 60, 80, 100]
          }
        },
        y: {
          field: "hdi",
          type: "quantitative",
          scale: { domain: [0.58, 0.97] },
          axis: {
            title: "Human Development Index (HDI)",
            values: [0.6, 0.7, 0.8, 0.9],
            format: ".1f",
            titlePadding: 56
          }
        },
        color: {
          field: "focus",
          type: "nominal",
          scale: {
            domain: ["Malaysia", "Other countries"],
            range: ["#b65f2a", "#0f7b70"]
          },
          legend: null
        },
        size: {
          field: "focus",
          type: "nominal",
          scale: {
            domain: ["Malaysia", "Other countries"],
            range: [180, 80]
          },
          legend: null
        },
        tooltip: [
          { field: "country", type: "nominal", title: "Country" },
          { field: "internet_penetration", type: "quantitative", title: "Internet penetration", format: ".1f" },
          { field: "hdi", type: "quantitative", title: "HDI", format: ".3f" }
        ]
      }
    },
    {
      transform: [{ filter: "datum.country == 'Malaysia'" }],
      mark: {
        type: "text",
        align: "left",
        baseline: "middle",
        dx: 10,
        color: "#172026",
        fontWeight: 800,
        fontSize: 12
      },
      encoding: {
        x: { field: "internet_penetration", type: "quantitative" },
        y: { field: "hdi", type: "quantitative" },
        text: { field: "country", type: "nominal" }
      }
    }
  ]
};

const chart7Spec = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  description: "Internet penetration and median household income by Malaysian state.",
  width: "container",
  height: 285,
  autosize: {
    type: "fit",
    contains: "padding"
  },
  padding: { top: 18, right: 24, bottom: 14, left: 12 },
  background: "transparent",
  data: {
    values: [
      { state: "Johor", internet_penetration: 97.8, income: 7097 },
      { state: "Kedah", internet_penetration: 95.5, income: 5336 },
      { state: "Kelantan", internet_penetration: 93.9, income: 3614 },
      { state: "Melaka", internet_penetration: 98.7, income: 7471 },
      { state: "Negeri Sembilan", internet_penetration: 98.1, income: 6878 },
      { state: "Pahang", internet_penetration: 96.1, income: 5594 },
      { state: "Perak", internet_penetration: 96.5, income: 5527 },
      { state: "Perlis", internet_penetration: 95.7, income: 4956 },
      { state: "Pulau Pinang", internet_penetration: 99.2, income: 6502 },
      { state: "Sabah", internet_penetration: 89.6, income: 4577 },
      { state: "Sarawak", internet_penetration: 89.8, income: 4978 },
      { state: "Selangor", internet_penetration: 99, income: 9983 },
      { state: "Terengganu", internet_penetration: 96.2, income: 5883 },
      { state: "W.P. Kuala Lumpur", internet_penetration: 99.8, income: 10234 },
      { state: "W.P. Labuan", internet_penetration: 98.9, income: 7384 },
      { state: "W.P. Putrajaya", internet_penetration: 100, income: 13135 }
    ]
  },
  transform: [
    {
      calculate: "indexof(['Sabah', 'Sarawak', 'W.P. Kuala Lumpur', 'W.P. Putrajaya'], datum.state) >= 0 ? 'Highlighted state' : 'Other states'",
      as: "focus"
    },
    {
      calculate: "replace(datum.state, 'W.P. ', '')",
      as: "state_label"
    }
  ],
  config: sharedChartConfig,
  layer: [
    {
      transform: [
        {
          regression: "income",
          on: "internet_penetration"
        }
      ],
      mark: {
        type: "line",
        stroke: "#344149",
        strokeDash: [6, 4],
        strokeWidth: 2,
        opacity: 0.75
      },
      encoding: {
        x: { field: "internet_penetration", type: "quantitative" },
        y: { field: "income", type: "quantitative" }
      }
    },
    {
      mark: {
        type: "point",
        filled: true,
        size: 100,
        opacity: 0.88,
        stroke: "#ffffff",
        strokeWidth: 1.5
      },
      encoding: {
        x: {
          field: "internet_penetration",
          type: "quantitative",
          scale: { domain: [88, 101] },
          axis: {
            title: "Internet penetration (%)",
            values: [90, 95, 100]
          }
        },
        y: {
          field: "income",
          type: "quantitative",
          scale: { domain: [3000, 14000] },
          axis: {
            title: "Median household income (RM)",
            format: ",.0f",
            titlePadding: 48
          }
        },
        color: {
          field: "focus",
          type: "nominal",
          scale: {
            domain: ["Highlighted state", "Other states"],
            range: ["#b65f2a", "#0f7b70"]
          },
          legend: null
        },
        tooltip: [
          { field: "state", type: "nominal", title: "State" },
          { field: "internet_penetration", type: "quantitative", title: "Internet penetration", format: ".1f" },
          { field: "income", type: "quantitative", title: "Median household income", format: "," }
        ]
      }
    },
    {
      transform: [{ filter: "datum.focus == 'Highlighted state' && datum.state != 'Sabah' && datum.state != 'Sarawak'" }],
      mark: {
        type: "text",
        align: "left",
        baseline: "middle",
        dx: 8,
        color: "#172026",
        fontWeight: 800,
        fontSize: 11
      },
      encoding: {
        x: { field: "internet_penetration", type: "quantitative" },
        y: { field: "income", type: "quantitative" },
        text: { field: "state_label", type: "nominal" }
      }
    },
    {
      transform: [{ filter: "datum.state == 'Sabah'" }],
      mark: {
        type: "text",
        align: "left",
        baseline: "middle",
        dx: 8,
        dy: 10,
        color: "#172026",
        fontWeight: 800,
        fontSize: 11
      },
      encoding: {
        x: { field: "internet_penetration", type: "quantitative" },
        y: { field: "income", type: "quantitative" },
        text: { field: "state_label", type: "nominal" }
      }
    },
    {
      transform: [{ filter: "datum.state == 'Sarawak'" }],
      mark: {
        type: "text",
        align: "left",
        baseline: "middle",
        dx: 8,
        dy: -10,
        color: "#172026",
        fontWeight: 800,
        fontSize: 11
      },
      encoding: {
        x: { field: "internet_penetration", type: "quantitative" },
        y: { field: "income", type: "quantitative" },
        text: { field: "state_label", type: "nominal" }
      }
    }
  ]
};

const chart8Spec = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  description: "Internet penetration by Malaysian state from 2021 to 2024.",
  width: "container",
  height: 360,
  autosize: {
    type: "fit",
    contains: "padding"
  },
  padding: { top: 14, right: 52, bottom: 18, left: 12 },
  background: "transparent",
  data: {
    url: "datasets/ch8_internetpen_byState_overtime.csv"
  },
  params: [
    {
      name: "selectedState",
      value: "Sabah",
      bind: {
        input: "select",
        name: "Select state: ",
        options: [
          "Johor",
          "Kedah",
          "Kelantan",
          "Melaka",
          "Negeri Sembilan",
          "Pahang",
          "Pulau Pinang",
          "Perak",
          "Perlis",
          "Selangor",
          "Terengganu",
          "Sabah",
          "Sarawak",
          "W.P. Kuala Lumpur",
          "W.P. Labuan",
          "W.P. Putrajaya"
        ]
      }
    }
  ],
  transform: [
    {
      calculate: "datum.state == selectedState ? 'Selected state' : 'Other states'",
      as: "focus"
    },
    {
      calculate: "replace(datum.state, 'W.P. ', '')",
      as: "state_label"
    }
  ],
  config: sharedChartConfig,
  layer: [
    {
      mark: {
        type: "line",
        strokeWidth: 1.7,
        opacity: 0.28
      },
      encoding: {
        x: {
          field: "year",
          type: "ordinal",
          axis: {
            title: null,
            labelAngle: 0
          }
        },
        y: {
          field: "internet_penetration_percent",
          type: "quantitative",
          scale: { domain: [88, 101] },
          axis: {
            title: "Internet penetration (%)",
            values: [90, 95, 100],
            format: ".0f"
          }
        },
        detail: { field: "state", type: "nominal" },
        color: {
          condition: {
            test: "datum.state == selectedState",
            value: "#0f7b70"
          },
          value: "#bdd6d1"
        },
        strokeWidth: {
          condition: {
            test: "datum.state == selectedState",
            value: 4
          },
          value: 1.4
        },
        opacity: {
          condition: {
            test: "datum.state == selectedState",
            value: 1
          },
          value: 0.35
        },
        tooltip: [
          { field: "state", type: "nominal", title: "State" },
          { field: "year", type: "ordinal", title: "Year" },
          { field: "internet_penetration_percent", type: "quantitative", title: "Internet penetration", format: ".1f" }
        ]
      }
    },
    {
      transform: [{ filter: "datum.state == selectedState" }],
      mark: {
        type: "point",
        filled: true,
        size: 90,
        color: "#0f7b70",
        stroke: "#ffffff",
        strokeWidth: 1.5
      },
      encoding: {
        x: { field: "year", type: "ordinal" },
        y: { field: "internet_penetration_percent", type: "quantitative" },
        tooltip: [
          { field: "state", type: "nominal", title: "State" },
          { field: "year", type: "ordinal", title: "Year" },
          { field: "internet_penetration_percent", type: "quantitative", title: "Internet penetration", format: ".1f" }
        ]
      }
    },
    {
      transform: [
        { filter: "datum.state == selectedState && +datum.year == 2024" }
      ],
      mark: {
        type: "text",
        align: "left",
        baseline: "middle",
        dx: 8,
        color: "#172026",
        fontWeight: 800,
        fontSize: 11
      },
      encoding: {
        x: { field: "year", type: "ordinal" },
        y: { field: "internet_penetration_percent", type: "quantitative" },
        text: { field: "state_label", type: "nominal" }
      }
    }
  ]
};

const chart9Spec = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  description: "Urban and rural internet penetration in Malaysia from 2021 to 2024.",
  width: "container",
  height: 360,
  autosize: {
    type: "fit",
    contains: "padding"
  },
  padding: { top: 18, right: 74, bottom: 18, left: 12 },
  background: "transparent",
  data: {
    url: "datasets/ch9_internetpen_ruralvsurban_overtime.csv"
  },
  config: sharedChartConfig,
  layer: [
    {
      mark: {
        type: "line",
        strokeWidth: 4,
        point: {
          filled: true,
          size: 90,
          stroke: "#ffffff",
          strokeWidth: 1.5
        }
      },
      encoding: {
        x: {
          field: "year",
          type: "ordinal",
          axis: {
            title: null,
            labelAngle: 0
          }
        },
        y: {
          field: "internet_penetration_percent",
          type: "quantitative",
          scale: { domain: [84, 100] },
          axis: {
            title: "Internet penetration (%)",
            values: [85, 90, 95, 100],
            format: ".0f"
          }
        },
        color: {
          field: "strata",
          type: "nominal",
          scale: {
            domain: ["Urban", "Rural"],
            range: ["#0f7b70", "#b65f2a"]
          },
          legend: null
        },
        tooltip: [
          { field: "strata", type: "nominal", title: "Area" },
          { field: "year", type: "ordinal", title: "Year" },
          { field: "internet_penetration_percent", type: "quantitative", title: "Internet penetration", format: ".1f" }
        ]
      }
    },
    {
      transform: [{ filter: "+datum.year == 2024" }],
      mark: {
        type: "text",
        align: "left",
        baseline: "middle",
        dx: 10,
        color: "#172026",
        fontWeight: 800,
        fontSize: 12
      },
      encoding: {
        x: { field: "year", type: "ordinal" },
        y: { field: "internet_penetration_percent", type: "quantitative" },
        text: { field: "strata", type: "nominal" }
      }
    }
  ]
};

const chart10Spec = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  description: "Malaysia's internet penetration compared with global and regional references.",
  width: "container",
  height: 450,
  autosize: {
    type: "fit",
    contains: "padding"
  },
  padding: { top: 22, right: 108, bottom: 20, left: 12 },
  background: "transparent",
  data: {
    url: "datasets/ch10_global_internetpen.csv"
  },
  params: [
    {
      name: "comparisonCountry",
      value: "Singapore",
      bind: {
        input: "select",
        name: "Compare with: ",
        options: [
          "Singapore",
          "Thailand",
          "Indonesia",
          "Vietnam",
          "China",
          "South Korea",
          "Germany",
          "France",
          "Denmark",
          "Brazil",
          "Argentina",
          "Kenya",
          "Saudi Arabia",
          "United Arab Emirates",
          "Turkey",
          "Uruguay"
        ]
      }
    }
  ],
  transform: [
    {
      filter: "indexof(['Malaysia', 'World', 'Singapore', 'Thailand', 'Indonesia', 'Vietnam', 'China', 'South Korea', 'Germany', 'France', 'Denmark', 'Brazil', 'Argentina', 'Kenya', 'Saudi Arabia', 'United Arab Emirates', 'Turkey', 'Uruguay'], datum.Entity) >= 0 && +datum.Year >= 2005 && +datum.Year <= 2024"
    },
    {
      calculate: "datum.Entity == comparisonCountry ? 'Selected country' : datum.Entity == 'Malaysia' ? 'Malaysia' : datum.Entity == 'World' ? 'World' : 'Other countries'",
      as: "focus"
    },
    {
      calculate: "datum.Entity == comparisonCountry || datum.Entity == 'Malaysia' ? datum.Entity : ''",
      as: "label"
    }
  ],
  config: sharedChartConfig,
  layer: [
    {
      mark: {
        type: "line",
        interpolate: "monotone",
        strokeWidth: 3,
        opacity: 0.9
      },
      encoding: {
        x: {
          field: "Year",
          type: "quantitative",
          scale: { domain: [2005, 2024] },
          axis: {
            title: null,
            format: "d",
            values: [2005, 2010, 2015, 2020, 2024]
          }
        },
        y: {
          field: "Share of the population using the Internet",
          type: "quantitative",
          scale: { domain: [0, 100] },
          axis: {
            title: "Internet penetration (%)",
            values: [0, 25, 50, 75, 100],
            format: ".0f"
          }
        },
        color: {
          field: "focus",
          type: "nominal",
          scale: {
            domain: ["Malaysia", "Selected country", "World", "Other countries"],
            range: ["#0f7b70", "#b65f2a", "#7a878c", "#bdd6d1"]
          },
          legend: null
        },
        strokeWidth: {
          condition: {
            test: "datum.Entity == 'Malaysia' || datum.Entity == comparisonCountry",
            value: 4.5
          },
          value: 1.6
        },
        opacity: {
          condition: {
            test: "datum.Entity == 'Malaysia' || datum.Entity == comparisonCountry",
            value: 1
          },
          value: 0.28
        },
        tooltip: [
          { field: "Entity", type: "nominal", title: "Country or group" },
          { field: "Year", type: "quantitative", title: "Year", format: "d" },
          {
            field: "Share of the population using the Internet",
            type: "quantitative",
            title: "Internet penetration",
            format: ".1f"
          }
        ]
      }
    },
    {
      transform: [{ filter: "+datum.Year == 2024 && (datum.Entity == 'Malaysia' || datum.Entity == comparisonCountry)" }],
      mark: {
        type: "text",
        align: "left",
        baseline: "middle",
        dx: 8,
        color: "#172026",
        fontWeight: 800,
        fontSize: 11
      },
      encoding: {
        x: { field: "Year", type: "quantitative" },
        y: {
          field: "Share of the population using the Internet",
          type: "quantitative"
        },
        text: { field: "label", type: "nominal" }
      }
    }
  ]
};

const implementedCharts = [
  { id: "chart1", spec: chart1Spec },
  { id: "chart2", spec: chart2Spec },
  { id: "chart3", spec: chart3Spec },
  { id: "chart4", spec: chart4Spec },
  { id: "chart5", spec: chart5Spec },
  { id: "chart6", spec: chart6Spec },
  { id: "chart7", spec: chart7Spec },
  { id: "chart8", spec: chart8Spec },
  { id: "chart9", spec: chart9Spec },
  { id: "chart10", spec: chart10Spec }
];

function labelChartPlaceholders() {
  chartPlaceholders.forEach((chart) => {
    const element = document.getElementById(chart.id);

    if (!element) {
      return;
    }

    element.setAttribute(
      "aria-label",
      `${chart.chartType}. ${chart.role}. Uses ${chart.dataset}.`
    );
  });
}

function renderImplementedCharts() {
  if (typeof vegaEmbed !== "function") {
    return;
  }

  implementedCharts.forEach(({ id, spec }) => {
    const chartElement = document.getElementById(id);

    if (!chartElement) {
      return;
    }

    chartElement.classList.remove("chart-placeholder");
    chartElement.classList.add("chart-canvas", "chart-rendered");

    if (!chartElement.querySelector(".fallback-chart")) {
      chartElement.replaceChildren();
    }

    const vegaTarget = document.createElement("div");
    vegaTarget.className = "vega-render-target";
    chartElement.appendChild(vegaTarget);

    vegaEmbed(vegaTarget, spec, {
      actions: false,
      renderer: "svg"
    }).then(() => {
      chartElement.classList.add("has-vega-chart");
    }).catch((error) => {
      console.error(error);

      chartElement.classList.remove("has-vega-chart");
      vegaTarget.remove();

      const errorMessage = document.createElement("div");
      errorMessage.className = "chart-error";
      errorMessage.textContent = "This chart could not load. Try viewing the page through a local server so the dataset files can be read.";
      chartElement.appendChild(errorMessage);
    });
  });
}

labelChartPlaceholders();
renderImplementedCharts();
