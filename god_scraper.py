import requests
from bs4 import BeautifulSoup
import json
from godlist import godlist

all_gods_data = []

# Loop through each god in the list
for god in godlist:
    url = f'https://smite.fandom.com/wiki/{god}'
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
                    key = header.text.strip(':').strip()
                    value = row.find('td').text.strip()
                    character_data["Attributes"][key] = value
            
            all_gods_data.append(character_data)

# Save the data to a JSON file
with open('gods_data.json', 'w') as f:
    json.dump(all_gods_data, f, indent=4)

print("Data scraped and saved successfully.")

