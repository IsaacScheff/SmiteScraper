# import requests
# from bs4 import BeautifulSoup
# import json
# from constants import GODLIST, BASE_URL

# all_gods_data = []

# # Loop through each god in the list
# for god in GODLIST:
#     url = f'{BASE_URL}{god}'
#     response = requests.get(url)
#     if response.status_code == 200:
#         soup = BeautifulSoup(response.text, 'html.parser')
        
#         # Parse the infobox to get basic god attributes
#         infobox = soup.find('table', class_='infobox')
#         if infobox:
#             character_name = infobox.find('th', class_='title').text.strip()
#             character_data = {"Name": character_name, "Attributes": {}}
            
#             for row in infobox.find_all('tr'):
#                 header = row.find('th')
#                 if header and header.get('colspan') != '2' and not header.find_parent('th', class_='header'):
#                     key = header.text.strip(':').strip()
#                     value = row.find('td').text.strip()
#                     character_data["Attributes"][key] = value

#         # Parse abilities for the god
#         abilities = []
#         ability_headers = soup.find_all('th', colspan="4")
#         ability_sections = [header.parent for header in ability_headers]  # assuming each <th> is directly inside a <tr>

#         for i, section in enumerate(ability_sections):
#             ability_name = ability_headers[i].get_text(strip=True).replace('-', ' - ')
#             description = section.find_next_sibling('tr').find_next_sibling('tr').find('td', colspan="2").get_text(strip=True)

#             notes = []
#             current_row = section.find_next_sibling('tr')
#             while current_row:
#                 if current_row in ability_sections:
#                     break  # Stop if we hit the next ability header row
                
#                 if current_row.find('img', alt="Bullet"):
#                     note_texts = current_row.find_all('td')
#                     for note in note_texts:
#                         lines = note.decode_contents().split('<br/>')
#                         for line in lines:
#                             text = BeautifulSoup(line, 'html.parser').text.strip()
#                             if text and text != "Notes:" and text != description:
#                                 notes.append(text)
                            
#                 current_row = current_row.find_next_sibling('tr')
            
#             abilities.append({
#                 "name": ability_name,
#                 "description": description,
#                 "notes": notes
#             })

#         character_data["Abilities"] = abilities
#         all_gods_data.append(character_data)

# with open('complete_gods_data.json', 'w') as f:
#     json.dump(all_gods_data, f, indent=4)

# print("Data scraped and saved successfully.")

import requests
from bs4 import BeautifulSoup
import json
from constants import GODLIST, BASE_URL

all_gods_data = []

# Loop through each god in the list
for god in GODLIST:
    url = f'{BASE_URL}{god}'
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Parse the infobox to get basic god attributes
        infobox = soup.find('table', class_='infobox')
        if infobox:
            character_name = infobox.find('th', class_='title').text.strip()
            character_data = {"Name": character_name, "Attributes": {}}
            
            for row in infobox.find_all('tr'):
                header = row.find('th')
                if header and header.get('colspan') != '2' and not header.find_parent('th', class_='header'):
                    key = header.text.strip(':').strip()
                    value = row.find('td').text.strip()
                    character_data["Attributes"][key] = value

        # Parse abilities for the god
        abilities = []
        ability_headers = soup.find_all('th', colspan="4")
        ability_sections = [header.parent for header in ability_headers]  # assuming each <th> is directly inside a <tr>

        ultimate_found = False
        for i, section in enumerate(ability_sections):
            ability_name = ability_headers[i].get_text(strip=True).replace('-', ' - ')
            if "Ultimate" in ability_name:
                ultimate_found = True
            
            description = section.find_next_sibling('tr').find_next_sibling('tr').find('td', colspan="2").get_text(strip=True)

            notes = []
            current_row = section.find_next_sibling('tr')
            while current_row:
                if current_row in ability_sections:
                    break  # Stop if we hit the next ability header row
                
                if current_row.find('img', alt="Bullet"):
                    note_texts = current_row.find_all('td')
                    for note in note_texts:
                        lines = note.decode_contents().split('<br/>')
                        for line in lines:
                            text = BeautifulSoup(line, 'html.parser').text.strip()
                            if text and text != "Notes:" and text != description:
                                notes.append(text)
                            
                current_row = current_row.find_next_sibling('tr')
            
            abilities.append({
                "name": ability_name,
                "description": description,
                "notes": notes
            })
            
            if ultimate_found:
                break  # Stop adding abilities after the ultimate has been processed

        character_data["Abilities"] = abilities
        all_gods_data.append(character_data)

# Save the data to a JSON file
with open('complete_gods_data.json', 'w') as f:
    json.dump(all_gods_data, f, indent=4)

print("Data scraped and saved successfully.")
