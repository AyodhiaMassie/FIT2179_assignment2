var vg_1 = "vegalite_test.vg.json";

vegaEmbed("#bar_chart", vg_1)
    .then(function(result) {
        console.log("Chart loaded successfully");
    })
    .catch(console.error);