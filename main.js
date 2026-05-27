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

const implementedCharts = [
  { id: "chart1", specUrl: "charts/ch1_internet_pen_overtime.vg.json" },
  { id: "chart2", specUrl: "charts/ch2_internet_usage_byCategories.vg.json" },
  { id: "chart3", specUrl: "charts/ch3_internet_usage_daily.vg.json" },
  { id: "chart4", specUrl: "charts/ch4_internet_usage_byState.vg.json" },
  { id: "chart5", specUrl: "charts/ch5_internet_usage_urbanvsrural.vg.json" },
  { id: "chart6", specUrl: "charts/ch6_internet_pen_vs_hdi.vg.json" },
  { id: "chart7", specUrl: "charts/ch7_internetpen_vs_householdincome.vg.json" },
  { id: "chart8", specUrl: "charts/ch8_internetpen_byState_overtime.vg.json" },
  { id: "chart9", specUrl: "charts/ch9_internetpen_ruralvsurban_overtime.vg.json" },
  { id: "chart10", specUrl: "charts/ch10_global_internetpen.vg.json" }
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

  implementedCharts.forEach(({ id, specUrl }) => {
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

    vegaEmbed(vegaTarget, specUrl, {
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

