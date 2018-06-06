// Written by Ben Doherty June 2018


function fiddle_about(){
    var div = d3.select("#graph");
    var svg = d3.select(div.node().querySelector("svg"));
    var g = d3.select(svg.node().querySelectorAll("g g.node"));
    var nodes = g._groups[0][0];
    console.log(nodes);
  };

function whereIsEverything(){
    n = document.getElementsByClassName("node");
    d = {};

    Array.from(n).forEach(function(item) {
        let e = item.getElementsByTagName("ellipse")[0];
  	let this_node = {};
    let name = item.getElementsByTagName("title")[0].textContent;
    this_node.id = item.id;
    this_node.name = name;
    this_node.x    = e.cx.baseVal.value;
    this_node.y    = e.cy.baseVal.value;
    this_node.r    = e.rx.baseVal.value;
    d[name] = this_node;
});

fiddle_about();
console.log(d);
return d;
};


var graph = d3.select("#graph").graphviz();

function getNodes(){
    console.log(d3.selectAll('.node'));
    nodes = d3.selectAll('.node');

    nodes.on("mouseover", function (d) {
        // console.log(cx, cy);
        d3.select(this).select("ellipse").style("fill", "blue")
    }).on("mouseout", function (d) {
        d3.select(this).select("ellipse").style("fill", "black")
    });
    nodes.each(function (d) {
        // console.log(d)
        let mainEllip = d3.select(this).select("ellipse");
        let cx = parseInt(mainEllip.attr("cx"), 10);
        let cy = parseInt(mainEllip.attr("cy"), 10);
        let rx = parseInt(mainEllip.attr("rx"), 10);
        let ry = parseInt(mainEllip.attr("ry"), 10);

        //Draw the ghostly line
        let ghostEllip = mainEllip.clone();
        ghostEllip.style("fill", "none");
        ghostEllip.style("stroke", "black");
        ghostEllip.style("opacity", 0.5);
        ghostEllip.style("stroke-width", "1");
        ghostEllip.attr("rx", rx + 5)
        ghostEllip.attr("ry", ry + 5)
        ghostEllip.attr("class", "ghost-ring");

        //Draw the progress bar
        let prog_full = ghostEllip.node().getTotalLength();
        var progressEllip = mainEllip.clone();
        progressEllip.style("fill", "none");
        progressEllip.style("stroke", "yellow");
        progressEllip.style("stroke-width", "10");
        progressEllip.style("stroke-dasharray", prog_full*Math.random());
        progressEllip.style("stroke-dashoffset", prog_full);
        progressEllip.style("stroke-linecap", "round");
        progressEllip.style("animation", "dash 1s ease-out forwards");
        progressEllip.attr("rx", rx + 5)
        progressEllip.attr("ry", ry + 5)
        progressEllip.attr("class", "progress-ring");

        this.append(ghostEllip);
        this.append(progressEllip);

        //Draw the circles for ownership faces
        //This needs a better way of getting the images into the circles
        let randInt = Math.floor(Math.random() * Math.floor(4)) + 1;
        for (var i = 0; i < randInt; i++) {
          var ownerEllip = mainEllip.clone();
          ownerEllip.style("fill", "red");
          ownerEllip.style("stroke", "black");
          let faceRad = 20;
          ownerEllip.attr("cx", cx - (rx - faceRad) + (faceRad * 0.8 * i));
          ownerEllip.attr("cy", cy + (ry - faceRad));
          ownerEllip.attr("rx", faceRad);
          ownerEllip.attr("ry", faceRad);
          ownerEllip.attr("class", "face-ring");
          this.append(ownerEllip);
        }

    });

}

function render(dotSrc) {
    // console.log('DOT source =', dotSrc);
    transition1 = d3.transition()
        .delay(100)
        .duration(1000);

    graph
        .transition(transition1)
        .renderDot(dotSrc, getNodes);




}

render(digraph_details)


// graph.graphviz()
//     .fade(false)
//     .renderDot(digraph_details, whereIsEverything);




// graph.on("mousemove", function () {
//         cx = d3.mouse(this)[0];
//         cy = d3.mouse(this)[1];
//         // console.log(cx, cy);
//     })
// nodes.on("mouseout", function (d) {
//         d3.select(this).attr("r", 5.5).style("fill", "#fff8ee");
//     });

    // graphviz.renderDot(dotSrc[, callback])
