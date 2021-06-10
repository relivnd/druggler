
var dataUSA = [
    {group: "BigMac", value: 10},
    {group: "Canabis", value: 57},
    {group: "Cocaine", value: 446},
    {group: "Meth", value: 359}
];

var dataJAPAN = [
    {group: "BigMac", value: 11},
    {group: "Canabis", value: 135},
    {group: "Cocaine", value: 540},
    {group: "Meth", value: 1621}
];

var dataGREATBRITAN = [
    {group: "BigMac", value: 11},
    {group: "Canabis", value: 16},
    {group: "Cocaine", value: 107},
    {group: "Meth", value: 326}
];

var dataNORWAY = [
    {group: "BigMac", value: 13},
    {group: "Canabis", value: 24},
    {group: "Cocaine", value: 214}
];

var dataSWITZERLAND = [
    {group: "BigMac", value: 12},
    {group: "Canabis", value: 21},
    {group: "Cocaine", value: 160},
    {group: "Meth", value: 453}
];

var margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 550 - margin.left - margin.right,
    height = 420 - margin.top - margin.bottom;

var svg_finalComparison = d3.select("#finalComparison")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleBand()
    .range([ 0, width ])
    .padding(0.2);
var xAxis = svg_finalComparison.append("g")
    .attr("transform", "translate(0," + height + ")")

var y = d3.scaleLinear()
    .range([ height, 0]);
var yAxis = svg_finalComparison.append("g")
    .attr("class", "myYaxis")

svg_finalComparison.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x",0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Minutes of Work needed to buy one Unit");

svg_finalComparison.append("text")
    .attr("transform",
        "translate(" + (width/2) + " ," +
        (height + margin.top + 20) + ")")
    .style("text-anchor", "middle")
    .text("Type of Consumable");

function update(data) {

    x.domain(data.map(function(d) { return d.group; }))
    xAxis.call(d3.axisBottom(x))

    y.domain([0, d3.max(data, function(d) { return d.value }) ]);
    yAxis.transition().duration(1000).call(d3.axisLeft(y));

    var dataTemp = svg_finalComparison.selectAll("rect")
        .data(data)

    dataTemp
        .enter()
        .append("rect")
        .merge(dataTemp)
        .transition()
        .duration(1000)
        .attr("x", function(d) { return x(d.group); })
        .attr("y", function(d) { return y(d.value); })
        .attr("width", x.bandwidth())
        .attr("height", function(d) { return height - y(d.value); })
        .attr("fill", "#e41a1c")
    dataTemp
        .exit()
        .remove()
}
update(dataUSA)
