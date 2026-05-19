vegaEmbed("#chart1", "charts/ch1_malaysia_internet_usage_overtime.vg.json", {
  actions: false
}).catch(console.error);

vegaEmbed("#chart2", "charts/ch2_malaysia_internet_usage_categories.vg.json", {
  actions: false
}).catch(console.error);

vegaEmbed("#chart3", "charts/ch3_malaysia_internet_usage_daily.vg.json", {
  actions: false
}).catch(console.error);

vegaEmbed(
  "#chart4",
  "charts/ch4_malaysia_internet_usage_byState.vg.json",
  { actions: false }
).catch(console.error);

vegaEmbed("#chart5", "charts/ch5_malaysia_internet_access_urbanrural.vg.json", {
  actions: false
}).catch(console.error);

vegaEmbed("#chart7", "charts/ch7_malaysia_internetpen_vs_hdi.vg.json", {
  actions: false
}).catch(console.error);