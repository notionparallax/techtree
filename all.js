// This is crusty, but it seems to work.
// Generated at 2018-06-13 12:39:25.055389


var digraph_details = ['digraph G {', ' rankdir  = "LR";', ' label    = "Tech Tree of OATMEAL Projects";', ' labelloc = "t";', ' node [style=filled,', '       shape="oval", ', '       fixedsize=true, ', '       width=1,', '       height=1,', '       fontsize=8', '      ];', ' edge [arrowhead=vee,', '       arrowsize=0.5]', ' ', ' potPaper [label="A Plane of\nThrones Paper"];', ' robPaper [label="Robotics Papers"];', ' deskSenseDn [label="Below Desk\nSensing"];', ' desks [label="Unit Desks"];', ' deskSenseUp [label="Above Desk\nSensing"];', ' octopus [label="Octopus"];', ' mApp [label="Mobile App"];', ' geoEthno2 [label="Geographic/\nEthnographic\ndata 2"];', ' MeetingRoomProduct [label="Meeting Room\nOccupancy\nQuantification\nProduct"];', ' basicBeacon [label="iBeacon\nAwareness"];', ' sensicorn2 [label="Sensicorn 2"];', ' geoEthno1 [label="Geographic/\nEthnographic\ndata 1"];', ' emailData [label="Email Data"];', ' RBTM [label="Robotic\nBuilding\nTopology\nModification"];', ' basicRobot [label="Awareness of\nRobots"];', ' timeData [label="Timesheet Data"];', ' SNA [label="Social Network\nAnalysis"];', ' changeSpace [label="Change Space\nCollective"];', ' robDesk [label="Robotic Desk\nArrangement"];', ' CADD_AAS [label="Continuous\nAnalysis,\nDesign &\nDelivery as a\nservice"];', ' Shakedown [label="Shakedown data\ncapture"];', ' SNAawareness [label="SNA Awareness"];', ' diary2 [label="Mobile Phone\nDiary Studies"];', ' DeskRulesEngine [label="Desk Placement\nRules Engine"];', ' halo [label="Robotic Weaving"];', ' SNAblog [label="Social Network\nAnalysis Blog\nPost"];', ' SydStudioSeating [label="Sydney Studio\nSeating"];', ' revit2ML [label="Revit Layout\nExtraction"];', ' data [label="Data Literacy"];', ' sensicorn1 [label="Sensicorn 1"];', ' SydStudioSeating2 [label="Better Sydney\nStudio Seating"];', ' electronicsD [label="Electronics\nDesign"];', ' diary [label="Diary Studies"];', ' SLAM [label="SLAM\n(Simultanious\nLocation And\nMapping)"];', ' bravo [label="Bravo Victor\nNovember"];', ' PCB [label="Printed Circuit\nBoard Design"];', ' workplaceAnalytics [label="Workplace\nAnalytics"];', ' pot [label="A Plane of\nThrones\nFramework"];', ' deskLoc [label="Desk Location"];', ' SydneyModel [label="Sydney Studio\nRevit Model"];', ' electron [label="Desktop App"];', ' robSense [label="Robot Mounted\nSensing"];', ' boom [label="Distribution\nBoom"];', ' altSpace [label="altSpace"];', ' AIlayout [label="AI Layout"];', ' lAmp [label="Learning\nAmplified\nSeating Plans"];', ' bizCap [label="Capturing\nBusiness\nMetrics"];', ' loTraining [label="Layout Training\nData"];', ' cadd [label="Continuous\nAnalysis,\nDesign &\nDelivery"];', ' geoEthno3 [label="Geographic/\nEthnographic\ndata 3"];', ' ShakedownPaper [label="Shakedown Paper"];', ' ImageRec [label="Basic Image\nRecognition"];', ' s3 [label="S3"];', ' sensors [label="Sensor Literacy"];', ' pathVis [label="Path\nVisualisation"];', ' MeetingRoomOcc [label="Meeting Room\nOccupancy\nQuantification"];', ' lExp [label="Learning\nExperiment"];', ' systemReef [label="Systems Reef"];', ' ShakedownBlog [label="Shakedown Blog"];', ' Shakedown2 [label="Shakedown (with\nstalls) Product"];', ' hardware [label="Hardware Design"];', ' BTARATA [label="Buildings That\nAre Right All\nThe Time"];', ' ', ' pot -> potPaper;', ' revit2ML -> potPaper;', ' halo -> robPaper;', ' octopus -> deskSenseDn;', ' boom -> desks;', ' halo -> desks;', ' s3 -> deskSenseUp;', ' electron -> deskSenseUp;', ' desks -> octopus;', ' geoEthno1 -> geoEthno2;', ' deskSenseDn -> geoEthno2;', ' sensicorn2 -> geoEthno2;', ' MeetingRoomOcc -> MeetingRoomProduct;', ' sensicorn1 -> sensicorn2;', ' deskLoc -> sensicorn2;', ' deskSenseUp -> geoEthno1;', ' diary -> geoEthno1;', ' deskLoc -> geoEthno1;', ' robDesk -> RBTM;', ' timeData -> SNA;', ' emailData -> SNA;', ' SNAawareness -> SNA;', ' geoEthno1 -> changeSpace;', ' AIlayout -> robDesk;', ' robSense -> robDesk;', ' SydStudioSeating2 -> robDesk;', ' cadd -> CADD_AAS;', ' sensors -> Shakedown;', ' diary -> diary2;', ' mApp -> diary2;', ' deskLoc -> DeskRulesEngine;', ' basicRobot -> halo;', ' systemReef -> halo;', ' SNA -> SNAblog;', ' bravo -> SNAblog;', ' lAmp -> SydStudioSeating;', ' SydneyModel -> revit2ML;', ' pathVis -> sensicorn1;', ' hardware -> sensicorn1;', ' SydStudioSeating -> SydStudioSeating2;', ' DeskRulesEngine -> SydStudioSeating2;', ' electron -> diary;', ' basicRobot -> SLAM;', ' electronicsD -> PCB;', ' MeetingRoomOcc -> workplaceAnalytics;', ' basicBeacon -> deskLoc;', ' desks -> deskLoc;', ' ImageRec -> deskLoc;', ' mApp -> deskLoc;', ' SLAM -> robSense;', ' sensors -> robSense;', ' systemReef -> boom;', ' geoEthno2 -> altSpace;', ' loTraining -> AIlayout;', ' lExp -> lAmp;', ' SNA -> lAmp;', ' pot -> lAmp;', ' revit2ML -> loTraining;', ' geoEthno3 -> cadd;', ' RBTM -> cadd;', ' bizCap -> cadd;', ' workplaceAnalytics -> cadd;', ' geoEthno2 -> geoEthno3;', ' diary2 -> geoEthno3;', ' Shakedown -> ShakedownPaper;', ' hardware -> s3;', ' sensors -> s3;', ' PCB -> s3;', ' data -> sensors;', ' Shakedown -> MeetingRoomOcc;', ' Shakedown -> ShakedownBlog;', ' bravo -> ShakedownBlog;', ' Shakedown -> Shakedown2;', ' CADD_AAS -> BTARATA;', ' ', ' //{rank = same; data; basicRobot; hardware; systemReef; SNAawareness};', ' \n}'];

 digraph_details =  digraph_details.join("\n");
  



var parallelData = {
  "AIlayout": {
    "LongName": "AI Layout",
    "Name": "AIlayout",
    "Other_people_involved": [
      "recjdvfsS0ZXESR2L"
    ],
    "Owner": [
      "rece9qyNSfMqAhZAL"
    ],
    "Type": "Project",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": [
      "recnjMKU5MFlbshGD"
    ]
  },
  "BTARATA": {
    "LongName": "Buildings That Are Right All The Time",
    "Name": "BTARATA",
    "Other_people_involved": null,
    "Owner": null,
    "Type": "Capability",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": [
      "recKHYcTAaR6Vkn3s"
    ]
  },
  "CADD_AAS": {
    "LongName": "Continuous Analysis, Design & Delivery as a service",
    "Name": "CADD_AAS",
    "Other_people_involved": null,
    "Owner": null,
    "Type": "Product",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": [
      "recnjUfIqLIJp934C"
    ]
  },
  "DeskRulesEngine": {
    "LongName": "Desk Placement Rules Engine",
    "Name": "DeskRulesEngine",
    "Other_people_involved": null,
    "Owner": [
      "rece9qyNSfMqAhZAL"
    ],
    "Type": "Project",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": [
      "recg3Af1SGeuhckqO"
    ]
  },
  "ImageRec": {
    "LongName": "Basic Image Recognition",
    "Name": "ImageRec",
    "Other_people_involved": null,
    "Owner": null,
    "Type": "Capability",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": null
  },
  "MeetingRoomOcc": {
    "LongName": "Meeting Room Occupancy Quantification",
    "Name": "MeetingRoomOcc",
    "Other_people_involved": [
      "recgcDkgKvrBLH1k0"
    ],
    "Owner": [
      "recj2rmnndUmxB3Dt"
    ],
    "Type": "Project",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": [
      "recL2m88D6TZ1chAj"
    ]
  },
  "MeetingRoomProduct": {
    "LongName": "Meeting Room Occupancy Quantification Product",
    "Name": "MeetingRoomProduct",
    "Other_people_involved": null,
    "Owner": null,
    "Type": "Product",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": [
      "recsAhFnFOcFBztTU"
    ]
  },
  "PCB": {
    "LongName": "Printed Circuit Board Design",
    "Name": "PCB",
    "Other_people_involved": null,
    "Owner": [
      "recj2rmnndUmxB3Dt"
    ],
    "Type": "Capability",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 100,
    "precursors": [
      "recbg2qJjrY6BVKjM"
    ]
  },
  "RBTM": {
    "LongName": "Robotic Building Topology Modification",
    "Name": "RBTM",
    "Other_people_involved": null,
    "Owner": null,
    "Type": "Project",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": [
      "recJMJDs4EKTMzUQm"
    ]
  },
  "SLAM": {
    "LongName": "SLAM (Simultanious Location And Mapping)",
    "Name": "SLAM",
    "Other_people_involved": null,
    "Owner": null,
    "Type": "Capability",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": [
      "recEL4ZZsARmsYwFt"
    ]
  },
  "SNA": {
    "LongName": "Social Network Analysis",
    "Name": "SNA",
    "Other_people_involved": null,
    "Owner": [
      "recgcDkgKvrBLH1k0"
    ],
    "Type": "Capability",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": [
      "recF1PTEM9uexmaTm",
      "recCdV0IBu62AhiOt",
      "recLOjxayu02HVkjR"
    ]
  },
  "SNAawareness": {
    "LongName": "SNA Awareness",
    "Name": "SNAawareness",
    "Other_people_involved": null,
    "Owner": [
      "recgcDkgKvrBLH1k0"
    ],
    "Type": "Capability",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 100,
    "precursors": null
  },
  "SNAblog": {
    "LongName": "Social Network Analysis Blog Post",
    "Name": "SNAblog",
    "Other_people_involved": null,
    "Owner": [
      "recgcDkgKvrBLH1k0"
    ],
    "Type": "Publication",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": [
      "recFT5OW9AN6NJAAp",
      "recdfXs5aT7qL0wVc"
    ]
  },
  "Shakedown": {
    "LongName": "Shakedown data capture",
    "Name": "Shakedown",
    "Other_people_involved": [
      "recgcDkgKvrBLH1k0",
      "rece9qyNSfMqAhZAL"
    ],
    "Owner": [
      "recj2rmnndUmxB3Dt"
    ],
    "Type": "Project",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": [
      "recrOomL72JDA45yp"
    ]
  },
  "Shakedown2": {
    "LongName": "Shakedown (with stalls) Product",
    "Name": "Shakedown2",
    "Other_people_involved": null,
    "Owner": null,
    "Type": "Project",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": [
      "recL2m88D6TZ1chAj"
    ]
  },
  "ShakedownBlog": {
    "LongName": "Shakedown Blog",
    "Name": "ShakedownBlog",
    "Other_people_involved": [
      "rece9qyNSfMqAhZAL"
    ],
    "Owner": [
      "recj2rmnndUmxB3Dt"
    ],
    "Type": "Publication",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": [
      "recL2m88D6TZ1chAj",
      "recdfXs5aT7qL0wVc"
    ]
  },
  "ShakedownPaper": {
    "LongName": "Shakedown Paper",
    "Name": "ShakedownPaper",
    "Other_people_involved": [
      "rece9qyNSfMqAhZAL"
    ],
    "Owner": [
      "recj2rmnndUmxB3Dt"
    ],
    "Type": "Publication",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": [
      "recL2m88D6TZ1chAj"
    ]
  },
  "SydStudioSeating": {
    "LongName": "Sydney Studio Seating",
    "Name": "SydStudioSeating",
    "Other_people_involved": null,
    "Owner": null,
    "Type": "Project",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": [
      "recmjo5fVtiAflmvo"
    ]
  },
  "SydStudioSeating2": {
    "LongName": "Better Sydney Studio Seating",
    "Name": "SydStudioSeating2",
    "Other_people_involved": null,
    "Owner": null,
    "Type": null,
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": [
      "recR43XpefFqhNpAC",
      "recMW87IdbvZxXxEd"
    ]
  },
  "SydneyModel": {
    "LongName": "Sydney Studio Revit Model",
    "Name": "SydneyModel",
    "Other_people_involved": [
      "rec3HypnJiuTkeVBJ"
    ],
    "Owner": [
      "recjdvfsS0ZXESR2L"
    ],
    "Type": "Project",
    "deck_embed": "https://docs.google.com/presentation/d/e/2PACX-1vRF7DSeGnbLr_zwWnHVrUF0ptxjfIoj9bDwkaJb370IYYWEwF48yszwLUUTAECQ5F6mlJMrUrlQqdj-/embed",
    "percentComplete": 40,
    "precursors": null
  },
  "altSpace": {
    "LongName": "altSpace",
    "Name": "altSpace",
    "Other_people_involved": null,
    "Owner": [
      "recHN7P3Wz3YGdAN2"
    ],
    "Type": "Product",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 50,
    "precursors": [
      "rec916rZDT7JzwkZs"
    ]
  },
  "basicBeacon": {
    "LongName": "iBeacon Awareness",
    "Name": "basicBeacon",
    "Other_people_involved": [
      "rece9qyNSfMqAhZAL"
    ],
    "Owner": [
      "rec3HypnJiuTkeVBJ"
    ],
    "Type": "Capability",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 30,
    "precursors": null
  },
  "basicRobot": {
    "LongName": "Awareness of Robots",
    "Name": "basicRobot",
    "Other_people_involved": null,
    "Owner": [
      "reck4uCQdMmA9Dy0e"
    ],
    "Type": "Capability",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 100,
    "precursors": null
  },
  "bizCap": {
    "LongName": "Capturing Business Metrics",
    "Name": "bizCap",
    "Other_people_involved": null,
    "Owner": [
      "rec0dpxUhHfgHWU7r"
    ],
    "Type": "Project",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": null
  },
  "boom": {
    "LongName": "Distribution Boom",
    "Name": "boom",
    "Other_people_involved": null,
    "Owner": [
      "recHLT6IoCZXwwtp3"
    ],
    "Type": "Project",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 70,
    "precursors": [
      "rectkEzpAV9fxHPwS"
    ]
  },
  "bravo": {
    "LongName": "Bravo Victor November",
    "Name": "bravo",
    "Other_people_involved": null,
    "Owner": [
      "rece9qyNSfMqAhZAL"
    ],
    "Type": "Publication",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 100,
    "precursors": null
  },
  "cadd": {
    "LongName": "Continuous Analysis, Design & Delivery",
    "Name": "cadd",
    "Other_people_involved": null,
    "Owner": null,
    "Type": "Capability",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": [
      "recnwxulBH9KL5lLV",
      "recDOicHkVaPVArFd",
      "recnXgQGgzh4q3t9M",
      "recfkDMBy4hbnCCtM"
    ]
  },
  "changeSpace": {
    "LongName": "Change Space Collective",
    "Name": "changeSpace",
    "Other_people_involved": null,
    "Owner": [
      "recHN7P3Wz3YGdAN2"
    ],
    "Type": "Product",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": [
      "recC9Zxt4MV7hRodc"
    ]
  },
  "data": {
    "LongName": "Data Literacy",
    "Name": "data",
    "Other_people_involved": [
      "recj2rmnndUmxB3Dt",
      "rece9qyNSfMqAhZAL",
      "rec3HypnJiuTkeVBJ",
      "recjdvfsS0ZXESR2L",
      "recuFyI25ChOwWWhr"
    ],
    "Owner": [
      "recgcDkgKvrBLH1k0"
    ],
    "Type": "Capability",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 100,
    "precursors": null
  },
  "deskLoc": {
    "LongName": "Desk Location",
    "Name": "deskLoc",
    "Other_people_involved": [
      "recgcDkgKvrBLH1k0"
    ],
    "Owner": [
      "rece9qyNSfMqAhZAL"
    ],
    "Type": "Project",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": [
      "recBSgYm9bZFyanp3",
      "rec3robMWYUXVp8GD",
      "recqOv9Vreddx4JOV",
      "rec6Sw3PV7S8g7E6f"
    ]
  },
  "deskSenseDn": {
    "LongName": "Below Desk Sensing",
    "Name": "deskSenseDn",
    "Other_people_involved": null,
    "Owner": [
      "recj2rmnndUmxB3Dt"
    ],
    "Type": "Project",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 5,
    "precursors": [
      "rec6MNLorNu6r2hMI"
    ]
  },
  "deskSenseUp": {
    "LongName": "Above Desk Sensing",
    "Name": "deskSenseUp",
    "Other_people_involved": [
      "recuFyI25ChOwWWhr",
      "rece9qyNSfMqAhZAL"
    ],
    "Owner": [
      "recj2rmnndUmxB3Dt"
    ],
    "Type": "Project",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 50,
    "precursors": [
      "recqsdnZyKEXLlafN",
      "rechAwGrx1K8hAmTi"
    ]
  },
  "desks": {
    "LongName": "Unit Desks",
    "Name": "desks",
    "Other_people_involved": null,
    "Owner": [
      "recHLT6IoCZXwwtp3"
    ],
    "Type": "Capability",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 80,
    "precursors": [
      "recli0IRLQZowpWoF",
      "recPhk9t87eiweyAl"
    ]
  },
  "diary": {
    "LongName": "Diary Studies",
    "Name": "diary",
    "Other_people_involved": [
      "rece9qyNSfMqAhZAL"
    ],
    "Owner": [
      "recjdvfsS0ZXESR2L"
    ],
    "Type": "Project",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": [
      "rechAwGrx1K8hAmTi"
    ]
  },
  "diary2": {
    "LongName": "Mobile Phone Diary Studies",
    "Name": "diary2",
    "Other_people_involved": null,
    "Owner": [
      "recjdvfsS0ZXESR2L"
    ],
    "Type": "Project",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": [
      "reccHCPeML8SyRFTp",
      "rec6Sw3PV7S8g7E6f"
    ]
  },
  "electron": {
    "LongName": "Desktop App",
    "Name": "electron",
    "Other_people_involved": [
      "recj2rmnndUmxB3Dt",
      "recuFyI25ChOwWWhr",
      "recgcDkgKvrBLH1k0"
    ],
    "Owner": [
      "rece9qyNSfMqAhZAL"
    ],
    "Type": "Project",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 20,
    "precursors": null
  },
  "electronicsD": {
    "LongName": "Electronics Design",
    "Name": "electronicsD",
    "Other_people_involved": null,
    "Owner": [
      "recj2rmnndUmxB3Dt"
    ],
    "Type": "Capability",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 100,
    "precursors": null
  },
  "emailData": {
    "LongName": "Email Data",
    "Name": "emailData",
    "Other_people_involved": null,
    "Owner": [
      "recgcDkgKvrBLH1k0"
    ],
    "Type": "Capability",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": null
  },
  "geoEthno1": {
    "LongName": "Geographic/ Ethnographic data 1",
    "Name": "geoEthno1",
    "Other_people_involved": null,
    "Owner": null,
    "Type": "Milestone",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": [
      "rec5v7YBAh4XzeOQ7",
      "reccHCPeML8SyRFTp",
      "recg3Af1SGeuhckqO"
    ]
  },
  "geoEthno2": {
    "LongName": "Geographic/ Ethnographic data 2",
    "Name": "geoEthno2",
    "Other_people_involved": null,
    "Owner": null,
    "Type": "Milestone",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": [
      "recC9Zxt4MV7hRodc",
      "rec2musyOg3qL274O",
      "recBZs1l0WWw1pytw"
    ]
  },
  "geoEthno3": {
    "LongName": "Geographic/ Ethnographic data 3",
    "Name": "geoEthno3",
    "Other_people_involved": null,
    "Owner": [
      "rece9qyNSfMqAhZAL"
    ],
    "Type": "Milestone",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": [
      "rec916rZDT7JzwkZs",
      "recM8tifFlTEr4VSc"
    ]
  },
  "halo": {
    "LongName": "Robotic Weaving",
    "Name": "halo",
    "Other_people_involved": null,
    "Owner": [
      "reck4uCQdMmA9Dy0e"
    ],
    "Type": "Project",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 100,
    "precursors": [
      "recEL4ZZsARmsYwFt",
      "rectkEzpAV9fxHPwS"
    ]
  },
  "hardware": {
    "LongName": "Hardware Design",
    "Name": "hardware",
    "Other_people_involved": [
      "recMZdSRhVMMJQcOb"
    ],
    "Owner": [
      "recj2rmnndUmxB3Dt"
    ],
    "Type": "Capability",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 100,
    "precursors": null
  },
  "lAmp": {
    "LongName": "Learning Amplified Seating Plans",
    "Name": "lAmp",
    "Other_people_involved": null,
    "Owner": [
      "recgcDkgKvrBLH1k0"
    ],
    "Type": "Project",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": [
      "recsE2Wezl1QpWoL3",
      "recFT5OW9AN6NJAAp",
      "recflCm8BzuGQbmW0"
    ]
  },
  "lExp": {
    "LongName": "Learning Experiment",
    "Name": "lExp",
    "Other_people_involved": [
      "rece9qyNSfMqAhZAL"
    ],
    "Owner": [
      "recgcDkgKvrBLH1k0"
    ],
    "Type": "Project",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": null
  },
  "loTraining": {
    "LongName": "Layout Training Data",
    "Name": "loTraining",
    "Other_people_involved": [
      "recjdvfsS0ZXESR2L",
      "recFUgthTUYQnR7Mz"
    ],
    "Owner": [
      "rece9qyNSfMqAhZAL"
    ],
    "Type": "Project",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 70,
    "precursors": [
      "recSIIp1grVggDGQo"
    ]
  },
  "mApp": {
    "LongName": "Mobile App",
    "Name": "mApp",
    "Other_people_involved": null,
    "Owner": null,
    "Type": "Project",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": null
  },
  "octopus": {
    "LongName": "Octopus",
    "Name": "octopus",
    "Other_people_involved": [
      "rece9qyNSfMqAhZAL",
      "recj2rmnndUmxB3Dt"
    ],
    "Owner": [
      "recwl2PnrQ8ueQBQ7"
    ],
    "Type": "Product",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 70,
    "precursors": [
      "rec3robMWYUXVp8GD"
    ]
  },
  "pathVis": {
    "LongName": "Path Visualisation",
    "Name": "pathVis",
    "Other_people_involved": null,
    "Owner": [
      "rec3HypnJiuTkeVBJ"
    ],
    "Type": "Capability",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 50,
    "precursors": null
  },
  "pot": {
    "LongName": "A Plane of Thrones Framework",
    "Name": "pot",
    "Other_people_involved": null,
    "Owner": [
      "recgcDkgKvrBLH1k0"
    ],
    "Type": "Project",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 50,
    "precursors": null
  },
  "potPaper": {
    "LongName": "A Plane of Thrones Paper",
    "Name": "potPaper",
    "Other_people_involved": [
      "rece9qyNSfMqAhZAL"
    ],
    "Owner": [
      "recgcDkgKvrBLH1k0"
    ],
    "Type": "Publication",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 100,
    "precursors": [
      "recflCm8BzuGQbmW0",
      "recSIIp1grVggDGQo"
    ]
  },
  "revit2ML": {
    "LongName": "Revit Layout Extraction",
    "Name": "revit2ML",
    "Other_people_involved": [
      "rece9qyNSfMqAhZAL"
    ],
    "Owner": [
      "recjdvfsS0ZXESR2L"
    ],
    "Type": "Project",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 70,
    "precursors": [
      "recgrgZIuBEI9namY"
    ]
  },
  "robDesk": {
    "LongName": "Robotic Desk Arrangement",
    "Name": "robDesk",
    "Other_people_involved": null,
    "Owner": null,
    "Type": "Project",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": [
      "recmUQLIxzr2wiyzd",
      "reckGLlAcxRnaKhvi",
      "recaFkQZ7S3oau84v"
    ]
  },
  "robPaper": {
    "LongName": "Robotics Papers",
    "Name": "robPaper",
    "Other_people_involved": [
      "recHLT6IoCZXwwtp3"
    ],
    "Owner": [
      "reck4uCQdMmA9Dy0e"
    ],
    "Type": "Publication",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": [
      "recPhk9t87eiweyAl"
    ]
  },
  "robSense": {
    "LongName": "Robot Mounted Sensing",
    "Name": "robSense",
    "Other_people_involved": null,
    "Owner": null,
    "Type": "Project",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": [
      "recctP32G3sreUKjg",
      "recrOomL72JDA45yp"
    ]
  },
  "s3": {
    "LongName": "S3",
    "Name": "s3",
    "Other_people_involved": [
      "rece9qyNSfMqAhZAL",
      "recMZdSRhVMMJQcOb"
    ],
    "Owner": [
      "recj2rmnndUmxB3Dt"
    ],
    "Type": "Project",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 100,
    "precursors": [
      "reczMCua56WUmp3zF",
      "recrOomL72JDA45yp",
      "recea5Mw1USCySVAU"
    ]
  },
  "sensicorn1": {
    "LongName": "Sensicorn 1",
    "Name": "sensicorn1",
    "Other_people_involved": [
      "rec3HypnJiuTkeVBJ"
    ],
    "Owner": [
      "rece9qyNSfMqAhZAL"
    ],
    "Type": "Project",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 80,
    "precursors": [
      "recru4UXYdMmO7sX8",
      "reczMCua56WUmp3zF"
    ]
  },
  "sensicorn2": {
    "LongName": "Sensicorn 2",
    "Name": "sensicorn2",
    "Other_people_involved": null,
    "Owner": null,
    "Type": "Project",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": [
      "reca1ZZ98UE1Y07Oo",
      "recg3Af1SGeuhckqO"
    ]
  },
  "sensors": {
    "LongName": "Sensor Literacy",
    "Name": "sensors",
    "Other_people_involved": null,
    "Owner": [
      "recj2rmnndUmxB3Dt"
    ],
    "Type": "Capability",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 100,
    "precursors": [
      "recXEw0Q2LFFIa2XB"
    ]
  },
  "systemReef": {
    "LongName": "Systems Reef",
    "Name": "systemReef",
    "Other_people_involved": [
      "reck4uCQdMmA9Dy0e"
    ],
    "Owner": [
      "recHLT6IoCZXwwtp3"
    ],
    "Type": "Project",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": null
  },
  "timeData": {
    "LongName": "Timesheet Data",
    "Name": "timeData",
    "Other_people_involved": null,
    "Owner": null,
    "Type": "Capability",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": null
  },
  "workplaceAnalytics": {
    "LongName": "Workplace Analytics",
    "Name": "workplaceAnalytics",
    "Other_people_involved": null,
    "Owner": null,
    "Type": "Capability",
    "deck_embed": "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0",
    "percentComplete": 0,
    "precursors": [
      "recsAhFnFOcFBztTU"
    ]
  }
};


var peopleData = {
  "rec0dpxUhHfgHWU7r": {
    "Headshot": [
      {
        "filename": "P_160405_N137.jpg",
        "id": "attIji1HbmalXUkuZ",
        "size": 186823,
        "thumbnails": {
          "large": {
            "height": 500,
            "url": "https://dl.airtable.com/6ax7C3bmSUWbWYULMZsZ_large_P_160405_N137.jpg",
            "width": 500
          },
          "small": {
            "height": 36,
            "url": "https://dl.airtable.com/mJbE3QgJRMyJfWsJkFDs_small_P_160405_N137.jpg",
            "width": 36
          }
        },
        "type": "image/jpeg",
        "url": "https://dl.airtable.com/XDqFqCuSQTKj0p03atm9_P_160405_N137.jpg"
      }
    ],
    "Initials": "KM",
    "Name": "Kevin M",
    "Notes": null,
    "Techs": [
      "recnXgQGgzh4q3t9M"
    ],
    "id": "rec0dpxUhHfgHWU7r",
    "thumb_large": "https://dl.airtable.com/6ax7C3bmSUWbWYULMZsZ_large_P_160405_N137.jpg"
  },
  "rec3HypnJiuTkeVBJ": {
    "Headshot": [
      {
        "filename": "P_160405_N20.jpg",
        "id": "attBViPOM4doUlrmU",
        "size": 170959,
        "thumbnails": {
          "large": {
            "height": 500,
            "url": "https://dl.airtable.com/JgeHAo9xSGmjVWy0FtXS_large_P_160405_N20.jpg",
            "width": 500
          },
          "small": {
            "height": 36,
            "url": "https://dl.airtable.com/8QWYcVKNR2iXQcBUCqAq_small_P_160405_N20.jpg",
            "width": 36
          }
        },
        "type": "image/jpeg",
        "url": "https://dl.airtable.com/mbzSbvBfSFKL7o35bJf5_P_160405_N20.jpg"
      }
    ],
    "Initials": "ARR",
    "Name": "Annisa",
    "Notes": null,
    "Techs": [
      "recXEw0Q2LFFIa2XB",
      "reca1ZZ98UE1Y07Oo",
      "recgrgZIuBEI9namY"
    ],
    "id": "rec3HypnJiuTkeVBJ",
    "thumb_large": "https://dl.airtable.com/JgeHAo9xSGmjVWy0FtXS_large_P_160405_N20.jpg"
  },
  "recF9tgC6LJUmi5gJ": {
    "Headshot": [
      {
        "filename": "dura-ace-cog.jpg",
        "id": "attGY4CDlDWCO1Ug0",
        "size": 349692,
        "thumbnails": {
          "large": {
            "height": 512,
            "url": "https://dl.airtable.com/k7bmR1FNTyeJBIzaiWcA_large_dura-ace-cog.jpg",
            "width": 512
          },
          "small": {
            "height": 36,
            "url": "https://dl.airtable.com/80fMJGaRTg2tLpHDUekQ_small_dura-ace-cog.jpg",
            "width": 36
          }
        },
        "type": "image/jpeg",
        "url": "https://dl.airtable.com/OOtgGnlQS4n8IShitlvQ_dura-ace-cog.jpg"
      }
    ],
    "Initials": "--",
    "Name": "nobodyAssigned",
    "Notes": "This is who'll be assigned automagically if nobody is assigned",
    "Techs": null,
    "id": "recF9tgC6LJUmi5gJ",
    "thumb_large": "https://dl.airtable.com/k7bmR1FNTyeJBIzaiWcA_large_dura-ace-cog.jpg"
  },
  "recFKWrjwOUM5oWxI": {
    "Headshot": [
      {
        "filename": "P_160405_N26.jpg",
        "id": "attJPKI8qeNxWFgDi",
        "size": 159204,
        "thumbnails": {
          "large": {
            "height": 500,
            "url": "https://dl.airtable.com/4NWLSnTFRwSfdFDBAt9A_large_P_160405_N26.jpg",
            "width": 500
          },
          "small": {
            "height": 36,
            "url": "https://dl.airtable.com/0nZTz4SMGjAzgKSWDe5g_small_P_160405_N26.jpg",
            "width": 36
          }
        },
        "type": "image/jpeg",
        "url": "https://dl.airtable.com/rjQbMqmUQpKBu2MyCd5X_P_160405_N26.jpg"
      }
    ],
    "Initials": "BaD",
    "Name": "Barry D",
    "Notes": null,
    "Techs": null,
    "id": "recFKWrjwOUM5oWxI",
    "thumb_large": "https://dl.airtable.com/4NWLSnTFRwSfdFDBAt9A_large_P_160405_N26.jpg"
  },
  "recFUgthTUYQnR7Mz": {
    "Headshot": null,
    "Initials": "RX",
    "Name": "AI Richard",
    "Notes": null,
    "Techs": [
      "recnjMKU5MFlbshGD"
    ],
    "id": "recFUgthTUYQnR7Mz",
    "thumb_large": "http://getdrawings.com/images/casper-drawing-8.jpg"
  },
  "recHLT6IoCZXwwtp3": {
    "Headshot": [
      {
        "filename": "P_160405_N190.jpg",
        "id": "att05xuQ0g4VVK3Nh",
        "size": 145252,
        "thumbnails": {
          "large": {
            "height": 500,
            "url": "https://dl.airtable.com/n5K9IIPLSEiPPcY8qKCG_large_P_160405_N190.jpg",
            "width": 500
          },
          "small": {
            "height": 36,
            "url": "https://dl.airtable.com/kMYbSN7TneqIjt1MUuth_small_P_160405_N190.jpg",
            "width": 36
          }
        },
        "type": "image/jpeg",
        "url": "https://dl.airtable.com/rvs1ofaTQ0KuslEhniYh_P_160405_N190.jpg"
      }
    ],
    "Initials": "NT",
    "Name": "Ninotschka",
    "Notes": null,
    "Techs": [
      "rec0tbY526abDXcRr"
    ],
    "id": "recHLT6IoCZXwwtp3",
    "thumb_large": "https://dl.airtable.com/n5K9IIPLSEiPPcY8qKCG_large_P_160405_N190.jpg"
  },
  "recHN7P3Wz3YGdAN2": {
    "Headshot": [
      {
        "filename": "P_160405_N31.jpg",
        "id": "att6DDYg3qurTxHLC",
        "size": 54300,
        "thumbnails": {
          "large": {
            "height": 500,
            "url": "https://dl.airtable.com/nestrTYmQqT79f6rfpHQ_large_P_160405_N31.jpg",
            "width": 500
          },
          "small": {
            "height": 36,
            "url": "https://dl.airtable.com/96Z81gBcS8uwD5dCSEww_small_P_160405_N31.jpg",
            "width": 36
          }
        },
        "type": "image/jpeg",
        "url": "https://dl.airtable.com/psrBb8e4Qbpb9g5PrMAF_P_160405_N31.jpg"
      }
    ],
    "Initials": "BiD",
    "Name": "Bill",
    "Notes": null,
    "Techs": [
      "recmNHHmIUj4nPild",
      "recHpePW60ZlXrLKY"
    ],
    "id": "recHN7P3Wz3YGdAN2",
    "thumb_large": "https://dl.airtable.com/nestrTYmQqT79f6rfpHQ_large_P_160405_N31.jpg"
  },
  "recMZdSRhVMMJQcOb": {
    "Headshot": [
      {
        "filename": "P_160405_N25.jpg",
        "id": "attG3o5l2IdGJbkhh",
        "size": 134490,
        "thumbnails": {
          "large": {
            "height": 500,
            "url": "https://dl.airtable.com/tEyLZYnrSSaN4Ikic0k5_large_P_160405_N25.jpg",
            "width": 500
          },
          "small": {
            "height": 36,
            "url": "https://dl.airtable.com/alB8IJyHRHiVUO6oZvS4_small_P_160405_N25.jpg",
            "width": 36
          }
        },
        "type": "image/jpeg",
        "url": "https://dl.airtable.com/LO2GzIePRpexTNeifQm0_P_160405_N25.jpg"
      }
    ],
    "Initials": "BC",
    "Name": "Barry C",
    "Notes": null,
    "Techs": [
      "recqsdnZyKEXLlafN",
      "reczMCua56WUmp3zF"
    ],
    "id": "recMZdSRhVMMJQcOb",
    "thumb_large": "https://dl.airtable.com/tEyLZYnrSSaN4Ikic0k5_large_P_160405_N25.jpg"
  },
  "rece9qyNSfMqAhZAL": {
    "Headshot": [
      {
        "filename": "face.jpg",
        "id": "attdaQhNW1zfK4FrF",
        "size": 533677,
        "thumbnails": {
          "large": {
            "height": 512,
            "url": "https://dl.airtable.com/9bCj4hVTSkCAXtf3e4eT_large_face.jpg",
            "width": 512
          },
          "small": {
            "height": 36,
            "url": "https://dl.airtable.com/XBF0no73TZzffAq7pQnw_small_face.jpg",
            "width": 36
          }
        },
        "type": "image/jpeg",
        "url": "https://dl.airtable.com/QAuKDpFiSqmdz4gTDVKa_face.jpg"
      }
    ],
    "Initials": "BeD",
    "Name": "Ben",
    "Notes": null,
    "Techs": [
      "reccHCPeML8SyRFTp",
      "rec5v7YBAh4XzeOQ7",
      "recSIIp1grVggDGQo",
      "recqsdnZyKEXLlafN",
      "reco8NZ3WlsKp4wJg",
      "recBSgYm9bZFyanp3",
      "recXEw0Q2LFFIa2XB",
      "recsE2Wezl1QpWoL3",
      "recL2m88D6TZ1chAj",
      "recwy65aPjhG9k7DU",
      "rec0ArDcPS4hLrmJq",
      "rec6MNLorNu6r2hMI"
    ],
    "id": "rece9qyNSfMqAhZAL",
    "thumb_large": "https://dl.airtable.com/9bCj4hVTSkCAXtf3e4eT_large_face.jpg"
  },
  "recgcDkgKvrBLH1k0": {
    "Headshot": [
      {
        "filename": "Ishaan.jpg",
        "id": "attiQH5ebrzZzivNM",
        "size": 136215,
        "thumbnails": {
          "large": {
            "height": 512,
            "url": "https://dl.airtable.com/heJnNH6AS0CjCCRvxXa3_large_Ishaan.jpg",
            "width": 512
          },
          "small": {
            "height": 36,
            "url": "https://dl.airtable.com/dwvEVpaWTVO1EAfDqhCg_small_Ishaan.jpg",
            "width": 36
          }
        },
        "type": "image/jpeg",
        "url": "https://dl.airtable.com/3tQHY3rkQWTQKnCsL51p_Ishaan.jpg"
      }
    ],
    "Initials": "IV",
    "Name": "Ishaan",
    "Notes": null,
    "Techs": [
      "rechAwGrx1K8hAmTi",
      "recg3Af1SGeuhckqO",
      "recL2m88D6TZ1chAj",
      "recsAhFnFOcFBztTU"
    ],
    "id": "recgcDkgKvrBLH1k0",
    "thumb_large": "https://dl.airtable.com/heJnNH6AS0CjCCRvxXa3_large_Ishaan.jpg"
  },
  "recj2rmnndUmxB3Dt": {
    "Headshot": [
      {
        "filename": "50.png",
        "id": "attE4V4KrVsP8E7wd",
        "size": 4270,
        "thumbnails": {
          "large": {
            "height": 50,
            "url": "https://dl.airtable.com/wNAkSR0RUlLTf8AMRYJA_large_50.png",
            "width": 50
          },
          "small": {
            "height": 36,
            "url": "https://dl.airtable.com/cU0MsTORrmdxB0n3NQgB_small_50.png",
            "width": 36
          }
        },
        "type": "image/png",
        "url": "https://dl.airtable.com/ekDPZ0oMTaenUrQ0BnuA_50.png"
      }
    ],
    "Initials": "AR",
    "Name": "Aiden",
    "Notes": null,
    "Techs": [
      "rechAwGrx1K8hAmTi",
      "recXEw0Q2LFFIa2XB",
      "rec6MNLorNu6r2hMI"
    ],
    "id": "recj2rmnndUmxB3Dt",
    "thumb_large": "https://dl.airtable.com/wNAkSR0RUlLTf8AMRYJA_large_50.png"
  },
  "recjdvfsS0ZXESR2L": {
    "Headshot": [
      {
        "filename": "Shawnee+Finlayson.jpg",
        "id": "attv0XAsb6pZQWOD6",
        "size": 123751,
        "thumbnails": {
          "large": {
            "height": 512,
            "url": "https://dl.airtable.com/LtvAB3rHQC2u6tcZArZt_large_Shawnee%2BFinlayson.jpg",
            "width": 512
          },
          "small": {
            "height": 36,
            "url": "https://dl.airtable.com/7uBNK5JcRVyqpM6YM79R_small_Shawnee%2BFinlayson.jpg",
            "width": 36
          }
        },
        "type": "image/jpeg",
        "url": "https://dl.airtable.com/7KkDhpp0QZeedK6lAXPk_Shawnee%2BFinlayson.jpg"
      }
    ],
    "Initials": "SF",
    "Name": "Shawnee",
    "Notes": null,
    "Techs": [
      "recmUQLIxzr2wiyzd",
      "recXEw0Q2LFFIa2XB",
      "recnjMKU5MFlbshGD"
    ],
    "id": "recjdvfsS0ZXESR2L",
    "thumb_large": "https://dl.airtable.com/LtvAB3rHQC2u6tcZArZt_large_Shawnee%2BFinlayson.jpg"
  },
  "reck4uCQdMmA9Dy0e": {
    "Headshot": [
      {
        "filename": "P_160405_N47.jpg",
        "id": "attGOA5MpsB4raA3H",
        "size": 191503,
        "thumbnails": {
          "large": {
            "height": 500,
            "url": "https://dl.airtable.com/1ocVojsCTZJYDRTtp7kI_large_P_160405_N47.jpg",
            "width": 500
          },
          "small": {
            "height": 36,
            "url": "https://dl.airtable.com/sjGxLU8WRpGhiLXpuIoQ_small_P_160405_N47.jpg",
            "width": 36
          }
        },
        "type": "image/jpeg",
        "url": "https://dl.airtable.com/VqHW2czEQQagyG4rDIw4_P_160405_N47.jpg"
      }
    ],
    "Initials": "CB",
    "Name": "Chris B",
    "Notes": null,
    "Techs": [
      "rectkEzpAV9fxHPwS"
    ],
    "id": "reck4uCQdMmA9Dy0e",
    "thumb_large": "https://dl.airtable.com/1ocVojsCTZJYDRTtp7kI_large_P_160405_N47.jpg"
  },
  "recuFyI25ChOwWWhr": {
    "Headshot": [
      {
        "filename": "20171005_171412_resized.jpg",
        "id": "atttBWDq0tQn5PWfU",
        "size": 205211,
        "thumbnails": {
          "large": {
            "height": 687,
            "url": "https://dl.airtable.com/FRJXAfziQn226JiBopNq_large_20171005_171412_resized.jpg",
            "width": 512
          },
          "small": {
            "height": 36,
            "url": "https://dl.airtable.com/isoTiRQUmHSFgQ8Iw63w_small_20171005_171412_resized.jpg",
            "width": 27
          }
        },
        "type": "image/jpeg",
        "url": "https://dl.airtable.com/eaL9jk1iSyeknVHIsrOx_20171005_171412_resized.jpg"
      }
    ],
    "Initials": "BH",
    "Name": "Baptiste",
    "Notes": null,
    "Techs": [
      "rec5v7YBAh4XzeOQ7",
      "rechAwGrx1K8hAmTi",
      "recXEw0Q2LFFIa2XB"
    ],
    "id": "recuFyI25ChOwWWhr",
    "thumb_large": "https://dl.airtable.com/FRJXAfziQn226JiBopNq_large_20171005_171412_resized.jpg"
  },
  "recwl2PnrQ8ueQBQ7": {
    "Headshot": [
      {
        "filename": "P_160405_N171.jpg",
        "id": "attCl8pJkU9awSTLm",
        "size": 160824,
        "thumbnails": {
          "large": {
            "height": 500,
            "url": "https://dl.airtable.com/yXqIqKWoQcWED51FYjOO_large_P_160405_N171.jpg",
            "width": 500
          },
          "small": {
            "height": 36,
            "url": "https://dl.airtable.com/uwMGu8v4RUqBN2gU1kN0_small_P_160405_N171.jpg",
            "width": 36
          }
        },
        "type": "image/jpeg",
        "url": "https://dl.airtable.com/dXxQw6E2TeeOQjRff6jS_P_160405_N171.jpg"
      }
    ],
    "Initials": "MB",
    "Name": "Matthew",
    "Notes": null,
    "Techs": [
      "rec6MNLorNu6r2hMI"
    ],
    "id": "recwl2PnrQ8ueQBQ7",
    "thumb_large": "https://dl.airtable.com/yXqIqKWoQcWED51FYjOO_large_P_160405_N171.jpg"
  }
};