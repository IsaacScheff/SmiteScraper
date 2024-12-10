import requests
from bs4 import BeautifulSoup
import json
from constants import GODLIST, BASE_URL

def normalize_text(text):
    """ Helper function to normalize text by removing extra spaces and line breaks. """
    return ' '.join(text.replace('\n', ' ').split())

all_gods_data = []

for god in GODLIST:
    url = f'{BASE_URL}{god}_(SMITE_2)'
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        infobox = soup.find('table', class_='infobox')
        if infobox:
            character_name = infobox.find('th', class_='title').text.strip()
            character_data = {"Name": character_name, "Attributes": {}}

            for row in infobox.find_all('tr'):
                header = row.find('th')
                if header and header.get('colspan') != '2' and not header.find_parent('th', class_='header'):
                    key = header.text.replace(':', '').strip()
                    value = row.find('td').text.strip()
                    character_data["Attributes"][key] = value

        abilities = []
        ability_headers = soup.find_all('th', colspan="4")
        ability_sections = [header.parent for header in ability_headers]

        ultimate_found = False
        for i, section in enumerate(ability_sections):
            if "Ultimate" in ability_headers[i].get_text(strip=True):
                ultimate_found = True

            description = normalize_text(section.find_next_sibling('tr').find_next_sibling('tr').find('td', colspan="2").text)

            notes = []
            current_row = section.find_next_sibling('tr')
            while current_row:
                if current_row in ability_sections:
                    break
                
                if current_row.find('img', alt="Bullet"):
                    note_texts = current_row.find_all('td')
                    for note in note_texts:
                        lines = note.decode_contents().split('<br/>')
                        for line in lines:
                            text = normalize_text(BeautifulSoup(line, 'html.parser').text)
                            if text and text != "Notes:" and text not in description:
                                notes.append(text)
                            
                current_row = current_row.find_next_sibling('tr')
            
            # Filter out notes that are exactly the same as the description or are complete sentences in the description
            notes = [note for note in notes if description.find(note) == -1]

            abilities.append({
                "name": ability_headers[i].get_text(strip=True).replace('-', ' - '),
                "description": description,
                "notes": notes
            })

            if ultimate_found:
                break

        character_data["Abilities"] = abilities
        all_gods_data.append(character_data)

with open('smite_2_god_data_raw.json', 'w') as f:
    json.dump(all_gods_data, f, indent=4)

print("Data scraped and saved successfully.")