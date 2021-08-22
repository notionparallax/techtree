// Written by Ben Doherty June 2018

const base = 10;
const ringOffset = 6;
const faceRad = 11;

d3.json(
    "https://raw.githubusercontent.com/notionparallax/techtree/main/static_graph.json"
).then(makeTree);

function dummy(json_data) {
    const digraph_details = json_data["digraph_js"];
    d3.select("#graph")
        .graphviz({ useWorker: false })
        .renderDot(digraph_details);
    // .renderDot("digraph  {a -> b}");
}

function makeTree(json_data) {
    const digraph_details = json_data["digraph_js"];
    const parallelData = JSON.parse(json_data["parallelData"]);
    const peopleData = JSON.parse(json_data["peopleData"]);
    function showSlides(d) {
        // deck_embed
        console.log("data:", d._groups[0][0].dataset.more);
        const popup = d3.select("#presentation-overlay");
        popup.style("display", "initial");

        d3.select("#presentation-frame").attr(
            "src",
            d._groups[0][0].dataset.more
        );
    }

    function circumference(d3circle) {
        // would use this, but FF doesn't support
        // var prog_full = ghostEllip.node().getTotalLength();
        return 2 * Math.PI * d3circle.node().rx.baseVal.value;
    }

    function getNodes() {
        // console.log(d3.selectAll('.node'));
        nodes = d3.selectAll(".node");

        var svg = d3.select("#graph svg");
        svg.attr("height", "");

        var defs = svg.append("defs");
        defs.append("clipPath")
            .attr("id", "avatar-clip")
            .append("circle")
            .attr("cx", faceRad)
            .attr("cy", faceRad)
            .attr("r", faceRad);

        nodes.on("click", function (d) {
            d3.select(this).select("ellipse").style("fill", "orange");
            showSlides(d3.select(this).select("ellipse.main-ring"));
        });
        //.on("mouseout", function (d) {
        //     d3.select(this).select("ellipse").style("fill", "black")
        // });
        nodes.each((d) => {
            const pd = parallelData[d.key];

            // console.log(d)
            const mainEllip = d3.select(this).select("ellipse");

            const cx = parseInt(mainEllip.attr("cx"), base);
            const cy = parseInt(mainEllip.attr("cy"), base);
            const rx = parseInt(mainEllip.attr("rx"), base);
            const ry = parseInt(mainEllip.attr("ry"), base);

            //Draw the ghostly line
            const ghostEllip = mainEllip.clone();
            ghostEllip.attr("rx", rx + ringOffset * 0.5);
            ghostEllip.attr("ry", ry + ringOffset * 0.5);
            ghostEllip.attr("class", "ghost-ring");
            this.append(ghostEllip);

            //Draw the progress bar
            if (pd.percentComplete > 0) {
                // make the progress bar, method from
                // https://daverupert.com/2018/03/animated-svg-radial-progress-bars/
                // don't draw anything if it's at 0 or you get a little nipple
                const progressEllip = mainEllip.clone();

                const prog_full = circumference(ghostEllip);
                const prog = prog_full * ((100 - pd.percentComplete) / 100);
                progressEllip.style("stroke-dasharray", prog_full);
                progressEllip.style("stroke-dashoffset", Math.max(0, prog));
                progressEllip.style("stroke-width", ringOffset * 0.3);
                progressEllip.attr("rx", rx + ringOffset * 0.5);
                progressEllip.attr("ry", ry + ringOffset * 0.5);
                progressEllip.attr("class", "progress-ring");
                this.append(progressEllip);
            }

            // Draw the circles for ownership faces
            // This needs a better way of getting the images into the circles
            let team = ["recF9tgC6LJUmi5gJ"]; // default assignment
            if (pd.Owner != null) {
                if (pd.Other_people_involved != null) {
                    team = pd.Owner.concat(pd.Other_people_involved);
                } else {
                    team = pd.Owner;
                }
            }

            // TODO: why is this written as a for loop? 🤮
            for (let i = 0; i < team.length; i++) {
                let person = peopleData[team[i]];
                // console.log(person.Name, person.Initials, person.thumb_large);
                let ownerEllip = mainEllip.clone();
                let cenX = cx - (rx - faceRad) + faceRad * 1.5 * i;
                let cenY = cy + (ry - faceRad);
                ownerEllip
                    .attr("cx", cenX)
                    .attr("cy", cenY)
                    .attr("rx", faceRad)
                    .attr("ry", faceRad)
                    .attr("class", "face-ring");
                this.append(ownerEllip);

                d3.select(this)
                    .append("text")
                    .attr("dx", cenX)
                    .attr("dy", cenY)
                    .attr("text-anchor", "middle")
                    .attr("alignment-baseline", "middle")
                    .attr("font-size", faceRad)
                    .attr("z-index", 10 - i) // this doesn't work :(
                    .attr(
                        "class",
                        ["initials", person.Initials, "face" + i].join(" ")
                    )
                    .text(person.Initials);

                d3.select(this)
                    .append("image")
                    .attr("x", 0)
                    .attr("y", 0)
                    .attr("width", faceRad * 2)
                    .attr("height", faceRad * 2)
                    .attr("z-index", 20 - i) // this doesn't work :(
                    .attr(
                        "class",
                        ["faceThumb", person.Initials, "face" + i].join(" ")
                    )
                    .attr("title", person.Name)
                    .attr("xlink:href", person.thumb_large)
                    .attr("clip-path", "url(#avatar-clip)")
                    .attr(
                        "transform",
                        "translate(" +
                            (cenX - faceRad) +
                            ", " +
                            (cenY - faceRad) +
                            ")"
                    );
            }

            //set node colours based on type of node
            if (pd.Type === "Project") {
                mainEllip.style("stroke", "rgb(146, 21, 210)");
            } else if (pd.Type === "Capability") {
                mainEllip.style("stroke", "rgb(236, 222, 97)");
            } else if (pd.Type === "Publication") {
                mainEllip.style("stroke", "rgb(122, 214, 65)");
            } else if (pd.Type === "Milestone") {
                mainEllip.style(
                    "stroke",
                    "rgba(226, 123, 34, 0.9215686274509803)"
                );
            } else if (pd.Type === "Product") {
                mainEllip.style("stroke", "rgb(239, 165, 226)");
            } else {
                /*nothing*/
            }

            mainEllip.attr("data-more", parallelData[d.key].deck_embed);
            mainEllip.attr("class", "main-ring");
        });
    }

    function render(dotSrc) {
        transition1 = d3.transition().delay(100).duration(1000);

        graph.transition(transition1).renderDot(dotSrc, getNodes);
    }

    var container = d3.select("#graph");
    if (container.graphviz !== undefined) {
        // if the browser can handle it:
        var graph = container.graphviz();
        render(digraph_details); // XXX this could also be csv?
    } else {
        // If your browser is a piece of shit:
        var elem = document.createElement("div");
        elem.style.cssText =
            "padding: 1em; position: absolute; font-size: 9em;" +
            "border-image: none; left: 0px; top: 0px; " +
            "height: 100%; text-align: center; color: white;";
        elem.innerHTML +=
            "You really should get a better browser. Really, anything would be better than this!";
        document.body.appendChild(elem);
    }

    // hide the popup if the close icon or the background
    // is clicked
    function hidePopup(e) {
        // TODO: rewrite this somethign like:
        // if(['presentation-overlay', "close-popup"].includes(e.target.id))
        if (
            event.target.id === "presentation-overlay" ||
            event.target.id === "close-popup"
        ) {
            po.style.display = "none";
        }
    }
    var po = document.getElementById("presentation-overlay");
    po.addEventListener("click", hidePopup, false);
}
