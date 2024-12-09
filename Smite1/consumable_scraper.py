import requests
from bs4 import BeautifulSoup
import json
import re
from constants import BASE_URL, CONSUMABLE_ITEMS

def fetch_consumable_details(consumable_name):
    url = f"{BASE_URL}{consumable_name.replace(' ', '_')}"  # Format the URL properly
    response = requests.get(url)
    consumable_data = {}

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')

        # Extract title and cost
        title = soup.find('th', class_='title').text.strip()
        cost_cell = soup.find('th', string=re.compile("Cost")).find_next('td')
        cost = cost_cell.text.strip() if cost_cell else "Cost not listed"

        # Extract active effect
        active_effect_header = soup.find('th', string=re.compile("Active Effect"))
        active_effect = active_effect_header.find_next('td').text.strip() if active_effect_header else "No active effect listed"

        # Extract notes
        notes_section = soup.find('span', id='Notes')
        notes_list = []
        if notes_section:
            notes_items = notes_section.find_next('ul').find_all('li')
            notes_list = [li.text.strip() for li in notes_items]

        consumable_data = {
            'name': title,
            'cost': cost,
            'active_effect': active_effect,
            'notes': notes_list
        }

    return consumable_data

def main():
    all_consumable_details = []
    for item in CONSUMABLE_ITEMS:
        details = fetch_consumable_details(item)
        if details:
            all_consumable_details.append(details)

    # Save to JSON file
    with open('consumable_details.json', 'w') as f:
        json.dump(all_consumable_details, f, indent=4)

    print("Consumable details fetched and saved.")

if __name__ == "__main__":
    main()