
var margin = {top: 30, right: 30, bottom: 50, left: 70},
    width = 550 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var svg_cocainePrice = d3.select("#cocainePrice")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

d3.csv("data/drug_prices_cocaine.csv", function(data) {

    var sumstat = d3.nest()
        .key(function(d) { return d.country;})
        .entries(data);

    var x = d3.scaleLinear()
        .domain(d3.extent(data, function(d) { return d.year; }))
        .range([ 0, width ]);
    svg_cocainePrice.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickFormat(d3.format("d")).ticks(4));

    var y = d3.scaleLinear()
        .domain([0, d3.max(data, function(d) { return +d.n; })])
        .range([ height, 0 ]);
    svg_cocainePrice.append("g")
        .call(d3.axisLeft(y));

    var res = sumstat.map(function(d){ return d.key })
    var color = d3.scaleOrdinal()
        .domain(res)
        .range(['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf','#999999'])

    svg_cocainePrice.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x",0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Cocaine Price in $/gram");

    svg_cocainePrice.append("text")
        .attr("transform",
            "translate(" + (width/2) + " ," +
            (height + margin.top + 20) + ")")
        .style("text-anchor", "middle")
        .text("Year");

    svg_cocainePrice.selectAll(".line")
        .data(sumstat)
        .enter()
        .append("path")
        .attr("fill", "none")
        .attr("stroke", function(d){ return color(d.key) })
        .attr("stroke-width", 1.5)
        .attr("d", function(d){
            return d3.line()
                .x(function(d) { return x(d.year); })
                .y(function(d) { return y(+d.n); })
                (d.values)
        })

})

var svg_bigMacIndexChartInfo = d3.select("#cocainePriceInfo")

svg_bigMacIndexChartInfo.append("circle").attr("cx",50).attr("cy",10).attr("r", 6).style("fill", "#e41a1c")
svg_bigMacIndexChartInfo.append("circle").attr("cx",150).attr("cy",10).attr("r", 6).style("fill", "#377eb8")
svg_bigMacIndexChartInfo.append("circle").attr("cx",205).attr("cy",10).attr("r", 6).style("fill", "#4daf4a")
svg_bigMacIndexChartInfo.append("circle").attr("cx",300).attr("cy",10).attr("r", 6).style("fill", "#984ea3")
svg_bigMacIndexChartInfo.append("circle").attr("cx",370).attr("cy",10).attr("r", 6).style("fill", "#ff7f00")
svg_bigMacIndexChartInfo.append("text").attr("x", 60).attr("y", 10).text("United States").style("font-size", "15px").attr("alignment-baseline","middle")
svg_bigMacIndexChartInfo.append("text").attr("x", 160).attr("y", 10).text("Japan").style("font-size", "15px").attr("alignment-baseline","middle")
svg_bigMacIndexChartInfo.append("text").attr("x", 215).attr("y", 10).text("Great Britan").style("font-size", "15px").attr("alignment-baseline","middle")
svg_bigMacIndexChartInfo.append("text").attr("x", 310).attr("y", 10).text("Norway").style("font-size", "15px").attr("alignment-baseline","middle")
svg_bigMacIndexChartInfo.append("text").attr("x", 380).attr("y", 10).text("Switzerland").style("font-size", "15px").attr("alignment-baseline","middle")




