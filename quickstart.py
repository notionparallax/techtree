#! utf8
"""
Shows basic usage of the Slides API. Prints the number of slides and elments in
a presentation.
"""

from __future__ import print_function
from apiclient.discovery import build
from httplib2 import Http
from oauth2client import file, client, tools



decks_to_make = [
   "A Plane of Thrones Framework",
   "A Plane of Thrones Paper"#,
   "Above Desk Sensing",
   "AI Layout",
   "altSpace",
   "Awareness of Robots",
   "Basic Image Recognition",
   "Below Desk Sensing",
   "Better Sydney Studio Seating",
   "Bravo Victor November",
   "Buildings That Are Right All The Time",
   "Capturing Business Metrics",
   "Change Space Collective",
   "Continuous Analysis, Design & Delivery as a service",
   "Continuous Analysis, Design & Delivery",
   "Data Literacy",
   "Desk Location",
   "Desk Placement Rules Engine",
   "Desktop App",
   "Diary Studies",
   "Distribution Boom",
   "Electronics Design",
   "Email Data",
   "Geographic/ Ethnographic data 1",
   "Geographic/ Ethnographic data 2",
   "Geographic/Ethnographic data 3",
   "Hardware Design",
   "iBeacon Awareness",
   "Layout Training Data",
   "Learning Amplified Seating Plans",
   "Learning Experiment",
   "Meeting Room Occupancy Quantification Product",
   "Meeting Room Occupancy Quantification",
   "Mobile App",
   "Mobile Phone Diary Studies",
   "Octopus",
   "Path Visualisation",
   "Printed Circuit Board Design",
   "Revit Layout Extraction",
   "Robot Mounted Sensing",
   "Robotic Building Topology Modification",
   "Robotic Desk Arrangement",
   "Robotic Weaving",
   "Robotics Papers",
   "S3",
   "Sensicorn 1",
   "Sensicorn 2",
   "Sensor Literacy",
   "Shakedown (with stalls) Product",
   "Shakedown Blog",
   "Shakedown data capture",
   "Shakedown Paper",
   "SLAM (Simultanious Location And Mapping)",
   "SNA Awareness",
   "Social Network Analysis Blog Post",
   "Social Network Analysis",
   "Sydney Studio Revit Model",
   "Sydney Studio Seating",
   "Systems Reef",
   "Timesheet Data",
   "Unit Desks",
   "Workplace Analytics"
   ]


# Setup the Slides API
SCOPES = 'https://www.googleapis.com/auth/drive'
store = file.Storage('credentials.json')
creds = store.get()
if not creds or creds.invalid:
    flow = client.flow_from_clientsecrets('client_secret.json', SCOPES)
    creds = tools.run_flow(flow, store)
drive_service = build('drive', 'v3', http=creds.authorize(Http()))
slide_service = build('slides', 'v1', http=creds.authorize(Http()))

source_presentation_id = "1m9CLrjYTow1-QHn7_Ue2tBeOZMy4OWNSXdURX_Ar-Ok"
template = slide_service.presentations().get(presentationId=source_presentation_id).execute()
print("\n--SOURCE--")
print(template.get('presentationId'))
print(template.get('title'))
print("\n--rest of bs--")

for project_name in decks_to_make:
    body = {
        'name': project_name
    }

    drive_response = drive_service.files().copy(fileId=source_presentation_id,
                                                body=body).execute()
    presentation_copy_id = drive_response.get('id')
    print(presentation_copy_id)

    body = {
        'requests': [
            {
            'replaceAllText': {
                'containsText': {
                    'text': 'title'#,
                    # 'matchCase': True
                    },
                'replaceText': project_name
                }
            }
        ]
    }
    response = slide_service.presentations().batchUpdate(presentationId=presentation_copy_id,
                                                    body=body).execute()
    # print("res", response)
    
    # presentation = service.presentations().create(body=body).execute()
    # id = presentation.get('presentationId')
    # print('Created presentation with ID: {0}'.format(id))
    #
    # presentation = service.presentations().get(presentationId=id).execute()
    # slides = presentation.get('slides')
    # print(slides)
