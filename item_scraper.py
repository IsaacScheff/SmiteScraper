import requests
from bs4 import BeautifulSoup
import json
import re
from constants import BASE_URL, ITEMS

def fetch_item_details(item_name):
    url = f"{BASE_URL}{item_name.replace(' ', '_')}"  # Format the URL properly
    response = requests.get(url)
    item_data = {}

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')

        # Extract title
        title = soup.find('th', class_='title').text.strip()

        # Initialize dictionary to hold all details
        item_details = {'name': title}

        # Loop through all rows in the item's infobox
        infobox = soup.find('table', class_='infobox')
        if infobox:
            rows = infobox.find_all('tr')
            for row in rows:
                header = row.find('th')
                value = row.find('td')
                if header and value:
                    # Clean the header text to use as a key
                    key = header.text.strip().replace(':', '')
                    # Store the cleaned value text
                    item_details[key] = value.text.strip()

        item_data = item_details

    return item_data

def categorize_items():
    shards = []
    relics = []
    other_items = []

    for item in ITEMS:
        details = fetch_item_details(item)
        if details:
            item_type = details.get('Item Type', 'Uncategorized').lower()
            if "shard" in item_type:
                shards.append(details)
            elif "relic" in item_type:
                relics.append(details)
            else:
                other_items.append(details)

    return shards, relics, other_items

def main():
    shards, relics, other_items = categorize_items()

    with open('shards.json', 'w') as f:
        json.dump(shards, f, indent=4)
    with open('relics.json', 'w') as f:
        json.dump(relics, f, indent=4)
    with open('other_items.json', 'w') as f:
        json.dump(other_items, f, indent=4)

    print("Item details fetched and categorized.")

if __name__ == "__main__":
    main()