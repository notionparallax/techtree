import json
import ast
import pandas as pd
import requests
import textwrap
import simplejson
from datetime import datetime

print("Loading function")

LINE_LENGTH = 15
NEWLINE = "\n  "
TESTING = False


def lambda_handler(event, context):
    jsonp_body = (
        "// This is crusty, but it seems to work.\n" f"// Generated at {datetime.now()}"
    )
    ret_dict = {}

    def mergeD(ugly_data):
        """Put the ID inside the dictionary that becomes the row."""
        f = ugly_data["fields"]
        i = {"id": ugly_data["id"]}
        f.update(i)
        return f

    if TESTING:
        t = mergeD(
            {
                "createdTime": "2018-05-25T07:45:33.000Z",
                "fields": {
                    "Other_people_involved": ["rece9qyNSfMqAhZAL"],
                    "Owner": ["recgcDkgKvrBLH1k0"],
                    "LongName": "A Plane of Thrones Paper",
                    "Name": "potPaper",
                    "percentComplete": 100,
                    "precursors": ["recflCm8BzuGQbmW0", "recSIIp1grVggDGQo"],
                    "Type": "Publication",
                },
                "id": "rec0ArDcPS4hLrmJq",
            }
        )
        print(t)

    def get_table(table_name):
        """Get the table from the OATMEAL airtable database and return it as a DataFrame."""
        auth_headers = {"Authorization": "Bearer keyYXkjYFw61SeWDk"}
        table_url = "https://api.airtable.com/v0/appuaXpFiadmP89sq/" + table_name
        r = requests.get(table_url, headers=auth_headers)
        d = eval(
            ast.literal_eval(str(r.content)[1:])
        )  # this is almost certainly not the right way to do this!

        rows = [mergeD(x) for x in d["records"]]
        data_frame = pd.DataFrame(rows)
        return data_frame

    if TESTING:
        t = get_table("Techs")
        print(t)

    def pull_out_embed_url(embed_code):
        """Pull the embed url out of the iframe link."""
        if type(embed_code) is not float:
            for thing in embed_code.split(" "):
                if "src=" in thing:
                    thing = thing.split('"')
                    for part in thing:
                        if "https://" in part:
                            return part.split("?")[0]
        else:
            return "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;showinfo=0"

    if TESTING:
        embed = (
            "<iframe "
            'src="https://docs.google.com/presentation/d/e/'
            "2PACX-1vRF7DSeGnbLr_zwWnHVrUF0ptxjfIoj9bDwkaJb370IYYWEwF48yszwLUUTAECQ5F6mlJMrUrlQqdj-/embed?"
            'start=false&loop=false&delayms=60000"'
            'frameborder="0"'
            'width="960"'
            'height="569"'
            'allowfullscreen="true"'
            'mozallowfullscreen="true"'
            'webkitallowfullscreen="true"></iframe>'
        )
        print(pull_out_embed_url(embed))

    def wrap_long_name(row):
        """Insert line breaks to make names fit in the node."""
        try:
            ln = "\n".join(textwrap.wrap(row["LongName"], LINE_LENGTH))
        except Exception as e:
            print(e)
            ln = row["LongName"]
        return ln

    def make_node_description(row, long_name_broken):
        node_description_pattern = '{name} [label="{longName}"];'
        return node_description_pattern.format(
            name=row["Name"], longName=long_name_broken
        )

    project_data = get_table("Techs")
    project_data.set_index("id", inplace=True)
    project_data.deck_embed = project_data.deck_embed.apply(pull_out_embed_url)

    group_data = get_table("groups")
    group_dict = {}
    for _, row in group_data.iterrows():
        print(row)
        group_dict[row.id] = {"name": row.Name, "longName": row.LongName, "nodes": []}

    edge_pattern = "{from_node} -> {to_node};"

    node_descriptions = []
    edges = []
    for _, row in project_data.iterrows():
        ln = wrap_long_name(row)
        n = make_node_description(row, ln)
        node_descriptions.append(n)

        if (
            type(row["precursors"]) is not float
        ):  # nothing reads as NaN, therefore float
            precursors = row["precursors"]  # .split(",")
            for precursor in precursors:
                e = edge_pattern.format(
                    from_node=project_data.loc[precursor].Name, to_node=row["Name"]
                )
                edges.append(e)

        if type(row["Group"]) is not float:  # nothing reads as NaN, therefore float
            id = row["Group"][0]
            print(group_dict[id])
            group_dict[id]["nodes"].append(row["Name"])

    # print(group_dict)
    subgraph_template = """
subgraph cluster_{name} {{
    style="rounded"
    node [style=filled, color=white];
    {nodes};
    label = "{long_name}";
}}"""
    subgraphs = ""
    for _, v in group_dict.items():
        subgraphs += subgraph_template.format(
            name=v["name"], long_name=v["longName"], nodes="; ".join(v["nodes"])
        )

    g = f"""digraph G {{
      size = "16.66,8.33!"; // 1200x600 at 72px/in, "!" to force
      ratio = "fill";
      rankdir  = "LR";
      label    = "Tech Tree of OATMEAL Projects";
      labelloc = "t";
      node [style=filled,
            shape="oval", 
            fixedsize=true, 
            width=1,
            height=1,
            fontsize=8
           ];
      edge [arrowhead=vee,
            arrowsize=0.5]
      
      {NEWLINE.join(node_descriptions)}
      
      {NEWLINE.join(edges)}

      {subgraphs}
      
      //{{rank = same; data; basicRobot; hardware; systemReef; SNAawareness}};
      
    }}"""

    # print(g)

    ret_dict["digraph_js"] = g  # TODO check if new lines are needed

    simple_dict = project_data.to_dict(orient="records")
    new_dict = {}
    for row in simple_dict:
        new_dict[row["Name"]] = row

    j = simplejson.dumps(new_dict, ignore_nan=True, sort_keys=True, indent=2)
    ret_dict["parallelData"] = j
    jsonp_body += "\n\n\n" + j

    def get_thumb(row):
        try:
            h = row["Headshot"]
            if type(h) is not float:
                # TODO: make this check for small as well
                x = list(h)
                return x[0]["thumbnails"]["large"]["url"]
            else:
                return "http://getdrawings.com/images/casper-drawing-8.jpg"
        except Exception as e:
            print(e)
            return "http://getdrawings.com/images/casper-drawing-8.jpg"

    people_data = get_table("People")
    people_data["thumb_large"] = people_data.apply(get_thumb, axis=1)

    # make the dictionary have the project name as a key, instead of bing a list of independent dicts
    simple_people_dict = people_data.to_dict(orient="records")
    new_p_dict = {}
    for row in simple_people_dict:
        new_p_dict[row["id"]] = row

    new_p_dict

    j = simplejson.dumps(new_p_dict, ignore_nan=True, sort_keys=True, indent=2)
    ret_dict["peopleData"] = j
    # j = "var peopleData = {json};".format(json=j)
    # with open('peopleData.js', 'w') as f:
    #     f.write(j)
    # jsonp_body += "\n\n\n" + j
    return ret_dict
    # raise Exception('Something went wrong')


if TESTING or __name__ == "__main__":
    d = lambda_handler(1, 2)
    print(d)
    with open("static_graph.json", "w", encoding="utf-8") as f:
        json.dump(d, f)
