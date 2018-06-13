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
print("\n--SOURCE FILE--")
print(template.get('presentationId'))
print(template.get('title'))
print("\n--OUTPUT IDs--")

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

"""
1Xh2jlO6Ov0sQVPiVknJinzu3ic7ZsUesJSgIg3zs9H0
1GY9xwdxRllU7ZVg-5VjGOehGJpD3tWfGuVtD7Y8pHFg
1Idsm9BhSxgPC4qFzcJ1r2WBQoE8RhRVeWsLVrw7aPAI
16WkyHQ2ArYD4r_fhj8RQoQvpHktOC_CwPKY-pyXb0nU
1InYu6LF9vFBfAe57iNYRs05DqUaw6_xV95HMEwWpkrs
11KUoUZntxbSXu5VYyyc9sSumkWua85FX3tilwZiJzTo
1-TPIhN9cgGh6FnSp5H7ypuknlNnb6duHvn7T9BHhVYw
1RkEpmderYqkKYVX5xo0GwXUOM1biNXtRvN5nqeJzmUY
1J4YxqhIho2OrgGSzIZWtV8N4E7U92c7kmdbYTNmpLJ0
1pbYtLVbXRhJtKeGp_XBRf8jbVz7B3MDLywZ5ntgj77s
1M-ml3G7Y6bItbxN2LWeh9UH-RvjIq2COedFpdMTusUM
1sK2lNPxUByLHbiVfrVs5Yx2GnF7G0Qllk5ZuB0va3kY
1304y9SLaY7-jsP6Wcv50Ye8YKPKikvZUG5OAQ-_exrM
160YPLdSeNjG-_KmQzBBdz1zfoTbRZMkRU25SXY087M8
1rEt_v9BDDm68BAYMYuXeFW65AoPyqgn3xYdGCUDozTE
1dCCubdnptUc0iT9TlBynsTA2WDJpAcDlHEbWdJ0K35Q
1C2CvOE563FiG_0YnXZuEFaCI04U1uk7c61IyfyjeBG8
1Awq9k5GbxTwuokmtyha62gIplHYrXVF-xGWIJWGfYfc
1OiMQJhugmLtvnlKKOu0f76kLN9z4j-OA_aEUpn4QlAI
1tdmY-X3EK_APpiapzebw6JyIrDn-2OyGmq85qsexwg0
1026iI6sxqdgd_SUAGbQ8y0ii9ucG5LVbgtEy2VQvHvQ
1yG_B1ka_ky97EIBdkncHqKUaaeWlzoxdT6o1LLTqlv4
1mtSCzObScPGB29g1swKekZt7IaxMpgHqO5wP6lKuYYg
1vgnlGZg8Sdzl02zxOl4pARSezgUwfMYUFbM5agxvJBQ
1QbZ5eJiMHqOtywt1C5SZerMzz1kNtzsF-6pub4YKsM8
1SQg23N6AGdA4wqmVRZ3ihKZkD-1NU3hVwdvTx7bAjps
155QDpeh7TrIHIqCUriAyCU2grqmX9vNBjA5t66l8lH8
15I8TOnKaj_7awL_cNv_c9u_oI5nnKvxSWHqT4SeGSik
1j2IzRaHfB2ouJUaDKLyahVyCcL648XpIBB_zB8mH-Ok
1WQYJsMVDHpGkiddUntybD6im0YkOOeAECBKyrrn8R_Y
1f4jqAyDciZlU73IoQ_AxDqia38sTZWteNta9zwYD8hM
1J_laW5EpqY4QgxF1IR2tO8yCY49g-Pxl5B_8NsZQick
15xH8fNx-dExc6b11zTpXzfv9Ss3e7ay2CpBAxXIH4fI
1pZIHOAGThr7vb3Wq1AHKGOnUN09hiO0B5jj7W6F-lTM
1BpSoYzbzPIXRpAN6m-rl0Kf9O5Jlh2DP92JPKMQLdPs
1Gv2fgBV35SoqmIEMY_12f8-W596fxbn6jB3Qo_2Cp_E
1d2hMBhtQGuckHmDrFn8GXcJj4jOm9CAedoM_u6Zat3Y
1fe6EFZL8_L3_h87AjY7lQOYlyKzhOVXn7POc6XXNf30
12VG3A8EWYrEzhOJNZDAbu5ubJrhm69IxJwEAxfYupug
1uPiy3pCihdZ2XayYVRs9bQq1Bru-Tb0Kmv3MUHNyeqQ
166hs1FfoYx8I13alsftQ8uM2cq02kgVD3_tJcmiKyKs
1Uo8vC9ghkX4bTt-9nUDoh2E-HIVqD03Ubo5nfhp1w8A
1FcGQM0wKvtFhGd2ZzUqxhnLi-iAOhgIVP6q1MK1ikIw
1FJMs_l5cM5M-6hEvGSecCH7N_0Xk1oVufM-A1s-fKw8
1PDWlrBMYoCEND0O2F3xoWhgS9Y2yQxLZIQjoKolI76g
1SSEaE6GxVXSLuB52Q3rC7CsSPymzxWNEV_dIerWqme4
1o9va5WyqRJSg0ImP3t1VBh02hTJZaXpJ87bC-WeiGsA
1UiXeiPv_yIwwykV9ndGfNtXD_UzlGNQSPLkR11bKfsA
1217XetsMe5ey2kO5WjX9MrSRblnAM4P6UmzXxSMbS5U
1QFd1jFko7jMfGVmWQctV8YW1eG-lUp_Spi1B4G8C30Q
10OSu46tSOfIG8r3KKB-kIGCvCue5iVK0cn30X5m0GMw
1nECaIrfQCQr3vYJwT3ASWy0pDAyvo8m7GVsXebVpsFE
1LtXVLS_JXr_z7XtBJv02GxTLWEJiXLiMh8gB-qWu6Ls
1vkIWB1Lr-gbx2rQ-QHotzBghe290tHkifqXq5OVj84M
16tZJ5z-mO8qvCdBMqSC8vmtQNMnRPeT8qNdJCbjXnG4
1JSov6xZXQ2CQO4ThRl_cprI_VzNHb8wnTHTaKQtjwMs
1W90PbPPy8IuoTOcqPDefn_mDEPCi9eU_4iA2mFixHgk
1rryQ5VlRdW6aRrD-1HYkl9BSnwHtBBOoguDcCbh89fg
1GmNlQVtA3XgHEvD35U2Fj6yrL8Dg6unntG18t-Kc7UU
1FFlGeGNJHZJ1LcFusl1iWFcT8rjFKyNxbz6dlxZhpgQ
1PyzKaZ8JIoRVGEDdnqcSV4atEqHMlNPTZLHCp0gostA
"""
