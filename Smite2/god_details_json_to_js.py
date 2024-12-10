import json

# Path to your JSON file
input_file_path = 'god_data_smite_2.json'
# Path to the output JS file
output_file_path = 'godsData.js'

def escape_js_string(s):
    """ Escape special characters in a JavaScript string """
    return s.replace('\n', '\\n').replace('"', '\\"')

def convert_json_to_js(input_path, output_path):
    # Read the JSON data
    with open(input_path, 'r') as file:
        gods_data = json.load(file)
    
    # Prepare the JS output
    js_content = 'const gods = [\n'
    
    for god in gods_data:
        js_content += '    {\n'
        js_content += f'        "Name": "{escape_js_string(god["Name"])}",\n'
        js_content += '        "Attributes": {\n'
        for key, value in god["Attributes"].items():
            if key == "imageURL":
                js_content += f'            "{key}": require("{value}"),\n'
            else:
                js_content += f'            "{key}": "{escape_js_string(value)}",\n'
        js_content = js_content.rstrip(',\n') + '\n'  # Remove last comma and add newline
        js_content += '        },\n'
        js_content += '        "Abilities": [\n'
        for ability in god["Abilities"]:
            js_content += '            {\n'
            js_content += f'                "name": "{escape_js_string(ability["name"])}",\n'
            js_content += f'                "description": "{escape_js_string(ability["description"])}",\n'
            if "imageURL" in ability:
                js_content += f'                "imageURL": require("{ability["imageURL"]}"),\n'
            if "notes" in ability:
                js_content += '                "notes": [\n'
                for note in ability["notes"]:
                    js_content += f'                    "{escape_js_string(note)}",\n'
                js_content = js_content.rstrip(',\n') + '\n'
                js_content += '                ],\n'
            js_content = js_content.rstrip(',\n') + '\n'  # Remove last comma
            js_content += '            },\n'
        js_content = js_content.rstrip(',\n') + '\n'  # Remove last comma
        js_content += '        ]\n'
        js_content += '    },\n'
    
    js_content = js_content.rstrip(',\n') + '\n'  # Remove last comma
    js_content += '];\n'
    
    js_content += 'export default gods;\n'
    
    # Write the JS content to file
    with open(output_path, 'w') as file:
        file.write(js_content)

# Call the function with the correct paths
convert_json_to_js(input_file_path, output_file_path)