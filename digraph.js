var digraph_details = ['digraph G {', ' size = "16.66,8.33!"; // 1200x600 at 72px/in, "!" to force', ' ratio = "fill";', ' rankdir  = "LR";', ' label    = "Tech Tree of OATMEAL Projects";', ' labelloc = "t";', ' node [style=filled,', '       shape="oval", ', '       fixedsize=true, ', '       width=1,', '       height=1,', '       fontsize=8', '      ];', ' edge [arrowhead=vee,', '       arrowsize=0.5]', ' ', ' potPaper [label="A Plane of\nThrones Paper"];', ' robPaper [label="Robotics Papers"];', ' deskSenseDn [label="Below Desk\nSensing"];', ' desks [label="Unit Desks"];', ' deskSenseUp [label="Above Desk\nSensing"];', ' octopus [label="Octopus"];', ' mApp [label="Mobile App"];', ' geoEthno2 [label="Geographic/\nEthnographic\ndata 2"];', ' MeetingRoomProduct [label="Meeting Room\nOccupancy\nQuantification\nProduct"];', ' basicBeacon [label="iBeacon\nAwareness"];', ' sensicorn2 [label="Sensicorn 2"];', ' geoEthno1 [label="Geographic/\nEthnographic\ndata 1"];', ' emailData [label="Email Data"];', ' RBTM [label="Robotic\nBuilding\nTopology\nModification"];', ' basicRobot [label="Awareness of\nRobots"];', ' timeData [label="Timesheet Data"];', ' SNA [label="Social Network\nAnalysis"];', ' changeSpace [label="Change Space\nCollective"];', ' robDesk [label="Robotic Desk\nArrangement"];', ' CADD_AAS [label="Continuous\nAnalysis,\nDesign &\nDelivery as a\nservice"];', ' Shakedown [label="Shakedown data\ncapture"];', ' SNAawareness [label="SNA Awareness"];', ' diary2 [label="Mobile Phone\nDiary Studies"];', ' DeskRulesEngine [label="Desk Placement\nRules Engine"];', ' halo [label="Robotic Weaving"];', ' SNAblog [label="Social Network\nAnalysis Blog\nPost"];', ' SydStudioSeating [label="Sydney Studio\nSeating"];', ' revit2ML [label="Revit Layout\nExtraction"];', ' data [label="Data Literacy"];', ' sensicorn1 [label="Sensicorn 1"];', ' SydStudioSeating2 [label="Better Sydney\nStudio Seating"];', ' electronicsD [label="Electronics\nDesign"];', ' diary [label="Diary Studies"];', ' SLAM [label="SLAM\n(Simultanious\nLocation And\nMapping)"];', ' bravo [label="Bravo Victor\nNovember"];', ' PCB [label="Printed Circuit\nBoard Design"];', ' workplaceAnalytics [label="Workplace\nAnalytics"];', ' pot [label="A Plane of\nThrones\nFramework"];', ' deskLoc [label="Desk Location"];', ' SydneyModel [label="Sydney Studio\nRevit Model"];', ' electron [label="Desktop App"];', ' robSense [label="Robot Mounted\nSensing"];', ' boom [label="Distribution\nBoom"];', ' altSpace [label="altSpace"];', ' AIlayout [label="AI Layout"];', ' lAmp [label="Learning\nAmplified\nSeating Plans"];', ' bizCap [label="Capturing\nBusiness\nMetrics"];', ' loTraining [label="Layout Training\nData"];', ' cadd [label="Continuous\nAnalysis,\nDesign &\nDelivery"];', ' geoEthno3 [label="Geographic/\nEthnographic\ndata 3"];', ' ShakedownPaper [label="Shakedown Paper"];', ' ImageRec [label="Basic Image\nRecognition"];', ' s3 [label="S3"];', ' sensors [label="Sensor Literacy"];', ' pathVis [label="Path\nVisualisation"];', ' MeetingRoomOcc [label="Meeting Room\nOccupancy\nQuantification"];', ' lExp [label="Learning\nExperiment"];', ' systemReef [label="Systems Reef"];', ' ShakedownBlog [label="Shakedown Blog"];', ' Shakedown2 [label="Shakedown (with\nstalls) Product"];', ' hardware [label="Hardware Design"];', ' BTARATA [label="Buildings That\nAre Right All\nThe Time"];', ' ', ' pot -> potPaper;', ' revit2ML -> potPaper;', ' halo -> robPaper;', ' octopus -> deskSenseDn;', ' boom -> desks;', ' halo -> desks;', ' s3 -> deskSenseUp;', ' electron -> deskSenseUp;', ' desks -> octopus;', ' geoEthno1 -> geoEthno2;', ' deskSenseDn -> geoEthno2;', ' sensicorn2 -> geoEthno2;', ' MeetingRoomOcc -> MeetingRoomProduct;', ' sensicorn1 -> sensicorn2;', ' deskLoc -> sensicorn2;', ' deskSenseUp -> geoEthno1;', ' diary -> geoEthno1;', ' deskLoc -> geoEthno1;', ' robDesk -> RBTM;', ' timeData -> SNA;', ' emailData -> SNA;', ' SNAawareness -> SNA;', ' geoEthno1 -> changeSpace;', ' AIlayout -> robDesk;', ' robSense -> robDesk;', ' SydStudioSeating2 -> robDesk;', ' cadd -> CADD_AAS;', ' sensors -> Shakedown;', ' diary -> diary2;', ' mApp -> diary2;', ' deskLoc -> DeskRulesEngine;', ' basicRobot -> halo;', ' systemReef -> halo;', ' SNA -> SNAblog;', ' bravo -> SNAblog;', ' lAmp -> SydStudioSeating;', ' SydneyModel -> revit2ML;', ' pathVis -> sensicorn1;', ' hardware -> sensicorn1;', ' SydStudioSeating -> SydStudioSeating2;', ' DeskRulesEngine -> SydStudioSeating2;', ' electron -> diary;', ' basicRobot -> SLAM;', ' electronicsD -> PCB;', ' MeetingRoomOcc -> workplaceAnalytics;', ' basicBeacon -> deskLoc;', ' desks -> deskLoc;', ' ImageRec -> deskLoc;', ' mApp -> deskLoc;', ' SLAM -> robSense;', ' sensors -> robSense;', ' systemReef -> boom;', ' geoEthno2 -> altSpace;', ' loTraining -> AIlayout;', ' lExp -> lAmp;', ' SNA -> lAmp;', ' pot -> lAmp;', ' revit2ML -> loTraining;', ' geoEthno3 -> cadd;', ' RBTM -> cadd;', ' bizCap -> cadd;', ' workplaceAnalytics -> cadd;', ' geoEthno2 -> geoEthno3;', ' diary2 -> geoEthno3;', ' Shakedown -> ShakedownPaper;', ' hardware -> s3;', ' sensors -> s3;', ' PCB -> s3;', ' data -> sensors;', ' Shakedown -> MeetingRoomOcc;', ' Shakedown -> ShakedownBlog;', ' bravo -> ShakedownBlog;', ' Shakedown -> Shakedown2;', ' CADD_AAS -> BTARATA;', ' ', ' //{rank = same; data; basicRobot; hardware; systemReef; SNAawareness};', ' \n}'];

 digraph_details =  digraph_details.join("\n");
  
