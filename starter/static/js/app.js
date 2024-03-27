const buttons = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

d3.json(buttons).then(function(data) {
    console.log(data);
});

function init() {
    // create dropdown, use d3 to get the data, find sample id's, append to the dropdown
    let dropdownMenu = d3.select("#selDataset");
    d3.json(buttons).then((data) => {
    let sample_names = data.names;
        console.log(sample_names);
        sample_names.forEach((name) => {
            dropdownMenu.append("option").text(name).property("value", name)});
    let name = sample_names[0];
// initialize the bar, bubble, and demographics functions with the first value
    barGraph(name);
    bubblePlot(name);
    demographics(name);
    gauge(name);
    });
};

function barGraph(value) {
    d3.json(buttons).then((data) =>{
        let samples = data.samples;
        let results = samples.filter((sample) => sample.id === value);
        let result = results[0];
        console.log(result);
        // realized the y axis needed to have OTU added, and added reverse to start w largest values
        let trace = [{
            x: result.sample_values.slice(0,10).reverse(),
            y: result.otu_ids.slice(0,10).map((otu_id) => `OTU ${otu_id}`).reverse(),
            text: result.otu_labels.slice(0,10).reverse(),
            type: "bar",
            orientation: "h"
        }];

        let layout = {
            title: "Top 10 UTO Samples"
        }

        Plotly.newPlot("bar", trace, layout);
    });
    };

function bubblePlot(value) {
    d3.json(buttons).then((data) => {
        let samples = data.samples;
        let results = samples.filter((sample) => sample.id === value);
        let result = results[0];
        console.log(result);

        let trace = [{
            x: result.otu_ids,
            y: result.sample_values,
            mode: "markers",
            marker: {
                size: result.sample_values,
                color: result.otu_ids
            },
            text: result.otu_labels
        }];

        let layout = {
            xaxis: {title: "OTU ID"}
        }

        Plotly.newPlot("bubble", trace, layout);
    });
};

function demographics(value) {
    d3.json(buttons).then((data) => {
        let metadata = data.metadata;
        let results = metadata.filter((meta) => meta.id == value);
        let result = results[0];
        console.log(results)
        // clearing the values in sample_metadata
        d3.select("#sample-metadata").html("");
        // link for discovering object.entries in readme
        // wanted to create key/value pairs
        let entries = Object.entries(result);
        entries.forEach(([key,value]) => {
            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        console.log(entries);
        });
    });
};

function gauge(value) {
    d3.json(buttons).then((data) => {
        let metadata = data.metadata;
        let results = metadata.filter((meta) => meta.id == value);
        let result = results[0];
        console.log(results);

        let trace = [{
            domain: {x: [0,1], y: [0,1]},
            value: result.wfreq,
            title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week"},
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: { range: [null, 9] },
                bar: {color: "red"},
                bgcolor: "cyan",
                // couldn't figure out how to increase the color gradient in a way that made sense so its all black :)
                steps: [
                    { range: [0, 1]},
                    { range: [1, 2]},
                    { range: [2, 3]},
                    { range: [3, 4]},
                    { range: [4, 5]},
                    { range: [5, 6]},
                    { range: [6, 7]},
                    { range: [7, 8]},
                    { range: [8, 9]},
                    { range: [9, 10]}
                ]
            }
        }];

        Plotly.newPlot("gauge", trace)
    })
}

function optionChanged(value) {
    barGraph(value);
    bubblePlot(value);
    demographics(value);
    gauge(value);
}
init()