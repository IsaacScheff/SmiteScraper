import json

# Load your existing JSON data
with open('smite_2_god_data_raw.json', 'r') as file:
    gods_data = json.load(file)

# Define the base path for your images including the 'assets' folder
base_image_path = 'images'

# Loop through each god in the data
for god in gods_data:
    # Replace spaces with underscores and apostrophes with '%27'
    god_name = god['Name'].replace(' ', '_').replace("'", "%27")
    # Add the god image URL
    god['Attributes']['imageURL'] = f'{base_image_path}/{god_name}.png'

    # Check if 'Abilities' in god and process accordingly
    if 'Abilities' in god:
        # Loop through each ability and add the appropriate image URL
        for index, ability in enumerate(god['Abilities']):
            ability['imageURL'] = f'{base_image_path}/{god_name}_ability_{index + 1}.png'

# Save the modified data back to a JSON file
with open('god_data_smite_2.json', 'w') as file:
    json.dump(gods_data, file, indent=4)

print("Image URLs added successfully with updated naming for spaces and apostrophes.")