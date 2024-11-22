import requests
from bs4 import BeautifulSoup
import json
import re
from constants import GODLIST, BASE_URL

all_gods_data = []

# Loop through each god in the list
for god in GODLIST:
    url = f'{BASE_URL}{god}'
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        abilities = []
        
        ability_headers = soup.find_all('th', colspan="4")
        ability_sections = [header.parent for header in ability_headers]  # assuming each <th> is directly inside a <tr>

        for i, section in enumerate(ability_sections):
            ability_name = ability_headers[i].get_text(strip=True).replace('-', ' - ')
            description = section.find_next_sibling('tr').find_next_sibling('tr').find('td', colspan="2").get_text(strip=True)

            notes = []
            current_row = section.find_next_sibling('tr')
            while current_row:
                # Check if we're still in the current ability's note area
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

        all_gods_data.append({
            "god": god,
            "abilities": abilities
        })

with open('gods_abilities_data.json', 'w') as f:
    json.dump(all_gods_data, f, indent=4)

print("Data scraped and saved successfully.")