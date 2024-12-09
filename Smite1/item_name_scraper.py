import requests
from bs4 import BeautifulSoup

# URL of the page to scrape
url = "https://smite.fandom.com/wiki/Items"

# Fetch the page
response = requests.get(url)
response.raise_for_status()  # Will raise an exception for bad status codes

# Parse the HTML
soup = BeautifulSoup(response.text, 'html.parser')

# Initialize lists for items
consumables = []
other_items = []

# Find the consumables section and extract items
consumables_header = soup.find('span', id='Consumables')
if consumables_header:
    # Navigate to the consumable items div directly after the header
    consumables_div = consumables_header.find_next('div', class_='items-overview-grid')
    consumables_entries = consumables_div.find_all('div', class_='tooltip-hover item-overview-entry') if consumables_div else []
    consumables = [item.find('span', class_='ajaxttlink').text for item in consumables_entries if item.find('span', class_='ajaxttlink')]

# Find all other items (excluding consumables)
all_items_div = soup.find_all('div', class_='items-overview-grid')
for div in all_items_div:
    if div != consumables_div:
        entries = div.find_all('div', class_='tooltip-hover item-overview-entry')
        other_items.extend([item.find('span', class_='ajaxttlink').text for item in entries if item.find('span', class_='ajaxttlink')])

print("Consumables:", consumables)
print("Other Items:", other_items)