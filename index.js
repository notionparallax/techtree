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

var digraph_details = ['digraph G {',
 ' rankdir  = "LR";',
    ' label    = "Tech Tree of OATMEAL Projects";',
    ' labelloc = "t";',
    ' node [style=filled,',
    '       color="black", ',
    '       fontcolor="white", ',
    '       shape="oval", ',
    '       fixedsize=true, ',
    '       width=1.5,',
    '       height=1.5];',
    ' ',
    ' potPaper [label="A Plane of Thrones\nPaper"];',
    ' robPaper [label="Robotics Papers"];',
    ' deskSenseDn [label="Below Desk Sensing"];',
    ' desks [label="Unit Desks"];',
    ' deskSenseUp [label="Above Desk Sensing"];',
    ' mApp [label="Mobile App"];',
    ' geoEthno2 [label="Geographic/\nEthnographic data 2"];',
    ' basicBeacon [label="iBeacon Awareness"];',
    ' sensicorn2 [label="Sensicorn 2"];',
    ' geoEthno1 [label="Geographic/\nEthnographic data 1"];',
    ' emailData [label="Email Data"];',
    ' RBTM [label="Robotic Building\nTopology Modification"];',
    ' basicRobot [label="Awareness of Robots"];',
    ' timeData [label="Timesheet Data"];',
    ' SNA [label="Social Network\nAnalysis"];',
    ' changeSpace [label="Change Space\nCollective"];',
    ' robDesk [label="Robotic Desk\nArrangement"];',
    ' Shakedown [label="Shakedown data\ncapture"];',
    ' SNAawareness [label="SNA Awareness"];',
    ' phone [label="Access To Phones"];',
    ' halo [label="Robotic Weaving"];',
    ' SNAblog [label="Social Network\nAnalysis Blog Post"];',
    ' SydStudioSeating [label="Sydney Studio Seating"];',
    ' revit2ML [label="Revit Layout\nExtraction"];',
    ' data [label="Data Literacy"];',
    ' sensicorn1 [label="Sensicorn 1"];',
    ' SydStudioSeating2 [label="Better Sydney Studio\nSeating"];',
    ' diary [label="Diary Studies"];',
    ' SLAM [label="SLAM (Simultanious\nLocation And Mapping)"];',
    ' bravo [label="Bravo Victor November"];',
    ' pot [label="A Plane of Thrones\nFramework"];',
    ' deskLoc [label="Desk Location"];',
    ' electron [label="Desktop App"];',
    ' robSense [label="Robot Mounted Sensing"];',
    ' boom [label="Distribution Boom"];',
    ' altSpace [label="altSpace"];',
    ' AIlayout [label="AI Layout"];',
    ' lAmp [label="Learning Amplified\nSeating Plans"];',
    ' bizCap [label="Capturing Business\nMetrics"];',
    ' loTraining [label="Layout Training Data"];',
    ' cadd [label="Continuous Analysis,\nDesign & Delivery"];',
    ' geoEthno3 [label="Geographic/\nEthnographic data 3"];',
    ' ShakedownPaper [label="Shakedown Paper"];',
    ' s3 [label="S3"];',
    ' sensors [label="Sensor Literacy"];',
    ' pathVis [label="Path Visualisation"];',
    ' lExp [label="Learning Experiment"];',
    ' systemReef [label="Systems Reef"];',
    ' ShakedownBlog [label="Shakedown Blog"];',
    ' Shakedown2 [label="Shakedown (with\nstalls) Product"];',
    ' hardware [label="Hardware Design"];',
    ' BTARATA [label="Buildings That Are\nRight All The Time"];',
    ' potPaper -> pot;',
    ' potPaper -> revit2ML;',
    ' robPaper -> halo;',
    ' deskSenseUp -> electron;',
    ' deskSenseUp -> s3;',
    ' mApp -> phone;',
    ' geoEthno2 -> geoEthno1;',
    ' geoEthno2 -> deskSenseDn;',
    ' sensicorn2 -> mApp;',
    ' sensicorn2 -> sensicorn1;',
    ' geoEthno1 -> deskLoc;',
    ' geoEthno1 -> deskSenseUp;',
    ' geoEthno1 -> diary;',
    ' RBTM -> robDesk;',
    ' SNA -> emailData;',
    ' SNA -> timeData;',
    ' robDesk -> AIlayout;',
    ' robDesk -> lAmp;',
    ' robDesk -> robSense;',
    ' Shakedown -> sensors;',
    ' halo -> basicRobot;',
    ' SNAblog -> bravo;',
    ' SydStudioSeating -> pot;',
    ' sensicorn1 -> hardware;',
    ' sensicorn1 -> pathVis;',
    ' SydStudioSeating2 -> lAmp;',
    ' SydStudioSeating2 -> SydStudioSeating;',
    ' diary -> electron;',
    ' deskLoc -> basicBeacon;',
    ' deskLoc -> desks;',
    ' robSense -> basicRobot;',
    ' robSense -> sensors;',
    ' robSense -> SLAM;',
    ' boom -> systemReef;',
    ' AIlayout -> loTraining;',
    ' lAmp -> lExp;',
    ' lAmp -> pot;',
    ' lAmp -> SNA;',
    ' cadd -> bizCap;',
    ' cadd -> geoEthno3;',
    ' cadd -> RBTM;',
    ' geoEthno3 -> sensicorn2;',
    ' geoEthno3 -> geoEthno2;',
    ' ShakedownPaper -> Shakedown;',
    ' s3 -> hardware;',
    ' s3 -> sensors;',
    ' sensors -> data;',
    ' lExp -> revit2ML;',
    ' Shakedown2 -> Shakedown;',
    ' BTARATA -> cadd;',
 ' {rank = same; data; basicRobot; hardware; systemReef; SNAawareness}',
    ' \n}'].join("\n");
   

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
        console.log(d)
        var ellip = d3.select(this).selectAll("ellipse").clone();
        ellip_x = ellip.style("fill", "red");
        ellip_x = ellip_x.attr("cx", parseInt(ellip.attr("cx"), 10) + 10)
        ellip_x = ellip_x.attr("cy", parseInt(ellip.attr("cy"), 10) + 10)
        this.append(ellip_x)
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
