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
    // console.log(d3.selectAll('.node'));
    nodes = d3.selectAll('.node');

    nodes.on("mouseover", function (d) {
        d3.select(this).select("ellipse").style("fill", "blue")
    }).on("mouseout", function (d) {
        d3.select(this).select("ellipse").style("fill", "black")
    });
    nodes.each(function (d) {
      var base = 10;
      var ringOffset = 6;
      var faceRad = 10;
      var pd = parallellData[d.key];

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
      this.append(ghostEllip);

      //Draw the progress bar
      if (pd.percentComplete > 0) {
        var prog_full = ghostEllip.node().getTotalLength();
        var prog = prog_full * ((100 - pd.percentComplete) / 100);
        var progressEllip = mainEllip.clone();
        progressEllip.style("stroke-dasharray", prog_full);
        progressEllip.style("stroke-dashoffset", Math.max(0, prog));
        progressEllip.style("stroke-width", ringOffset);
        progressEllip.attr("rx", rx + (ringOffset*0.5))
        progressEllip.attr("ry", ry + (ringOffset*0.5))
        progressEllip.attr("class", "progress-ring");
        this.append(progressEllip);
      }

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

      //set node colours based on type of node
      if (pd.Type === "Project") {
        mainEllip.style("fill", "red");
      } else if (pd.Type === "Capability"){
        mainEllip.style("fill", "green");
      } else if (pd.Type === "Publication"){
        mainEllip.style("fill", "blue");
      } else if (pd.Type === "Milestone"){
        mainEllip.style("fill", "orange");
      } else if (pd.Type === "Product"){
        mainEllip.style("fill", "silver");
      } else {
        //nothing
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
