// Written by Ben Doherty June 2018

function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;
}


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
        var e = item.getElementsByTagName("ellipse")[0];
  	var this_node = {};
    var name = item.getElementsByTagName("title")[0].textContent;
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
    var project_json_obj = JSON.parse(Get("parallellData.json"));

    // console.log(d3.selectAll('.node'));
    nodes = d3.selectAll('.node');

    nodes.on("mouseover", function (d) {
        // console.log(cx, cy);
        d3.select(this).select("ellipse").style("fill", "blue")
    }).on("mouseout", function (d) {
        d3.select(this).select("ellipse").style("fill", "black")
    });
    nodes.each(function (d) {
      var base = 10;
      var ringOffset = 8;
      var faceRad = 10;

      console.log(d)
      var mainEllip = d3.select(this).select("ellipse");
      var cx = parseInt(mainEllip.attr("cx"), base);
      var cy = parseInt(mainEllip.attr("cy"), base);
      var rx = parseInt(mainEllip.attr("rx"), base);
      var ry = parseInt(mainEllip.attr("ry"), base);

      //Draw the ghostly line
      var ghostEllip = mainEllip.clone();
      ghostEllip.attr("rx", rx + (ringOffset*0.5));
      ghostEllip.attr("ry", ry + (ringOffset*0.5));
      ghostEllip.attr("class", "ghost-ring");

      //Draw the progress bar
      console.log(project_json_obj[d.key].percentComplete * 0.01);
      var prog_full = ghostEllip.node().getTotalLength();
      var progressEllip = mainEllip.clone();
      progressEllip.style("stroke-dasharray", prog_full * project_json_obj[d.key].percentComplete * 0.01);
      progressEllip.style("stroke-dashoffset", prog_full);
      progressEllip.attr("rx", rx + (ringOffset*0.5))
      progressEllip.attr("ry", ry + (ringOffset*0.5))
      progressEllip.attr("class", "progress-ring");

      this.append(ghostEllip);
      this.append(progressEllip);

      //Draw the circles for ownership faces
      //This needs a better way of getting the images into the circles
      var randInt = Math.floor(Math.random() * Math.floor(4)) + 1;
      for (var i = 0; i < randInt; i++) {
        var ownerEllip = mainEllip.clone();
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
