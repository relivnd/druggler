
var dataUSA = [
    {group: "BigMac", value: 10},
    {group: "Canabis (0.5g)", value: 28.5},
    {group: "Cocaine (0.5g)", value: 223},
    {group: "Meth (0.2g)", value: 179.5}
];

var dataJAPAN = [
    {group: "BigMac", value: 11},
    {group: "Canabis (0.5g)", value: 67.5},
    {group: "Cocaine (0.5g)", value: 270},
    {group: "Meth (0.2g)", value: 324.2}
];

var dataGREATBRITAN = [
    {group: "BigMac", value: 11},
    {group: "Canabis (0.5g)", value: 8},
    {group: "Cocaine (0.5g)", value: 53.5},
    {group: "Meth (0.2g)", value: 65.2}
];

var dataNORWAY = [
    {group: "BigMac", value: 13},
    {group: "Canabis (0.5g)", value: 12},
    {group: "Cocaine (0.5g)", value: 107}
];

var dataSWITZERLAND = [
    {group: "BigMac", value: 12},
    {group: "Canabis (0.5g)", value: 10.5},
    {group: "Cocaine (0.5g)", value: 80},
    {group: "Meth (0.2g)", value: 90.6}
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
    .attr("class", "axis")
    .attr("y", 0 - margin.left)
    .attr("x",0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Minutes of Work needed to buy one Unit");

svg_finalComparison.append("text")
    .attr("class", "axis")
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
        .attr("fill", "#6b486b")
    dataTemp
        .exit()
        .remove()
}
update(dataUSA)
