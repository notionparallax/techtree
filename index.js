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

    // nodes.on("mouseover", function (d) {
    //     d3.select(this).select("ellipse").style("fill", "blue")
    // }).on("mouseout", function (d) {
    //     d3.select(this).select("ellipse").style("fill", "black")
    // });
    nodes.each(function (d) {
      var base = 10;
      var ringOffset = 6;
      var faceRad = 10;
      var pd = parallelData[d.key];

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
        // make the progress bar, method from
        // https://daverupert.com/2018/03/animated-svg-radial-progress-bars/
        // don't draw anything if it's at 0 or you get a little nipple
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

        d3.select(this).append("text")
            .attr("dx", cenX)
            .attr("dy", cenY)
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "middle")
            .attr("font-size", faceRad)
            .attr("class", "initials")
            .text(person.Initials);
      }

      //set node colours based on type of node
      if (pd.Type === "Project")            { mainEllip.style("stroke", "rgb(146, 21, 210)");
      } else if (pd.Type === "Capability")  { mainEllip.style("stroke", "rgb(236, 222, 97)");
      } else if (pd.Type === "Publication") { mainEllip.style("stroke", "rgb(122, 214, 65)");
      } else if (pd.Type === "Milestone")   { mainEllip.style("stroke", "rgba(226, 123, 34, 0.9215686274509803)");
      } else if (pd.Type === "Product")     { mainEllip.style("stroke", "rgb(239, 165, 226)");
      } else {        /*nothing*/      }

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
