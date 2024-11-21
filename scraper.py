import requests
from bs4 import BeautifulSoup

# URL of the page to scrape
url = 'https://smite.fandom.com/wiki/Achilles'  # hardcoding achilles for testing

# Fetch the web page
response = requests.get(url)
response.raise_for_status()

# Parse the content with BeautifulSoup
soup = BeautifulSoup(response.text, 'html.parser')

# Find the infobox table
infobox = soup.find('table', class_='infobox')

# Extract character name
character_name = infobox.find('th', class_='title').text.strip()

# Extract character image URL
image_tag = infobox.find('a', class_='image').find('img')
character_image_url = image_tag['data-src'] if 'data-src' in image_tag.attrs else image_tag['src']

# Initialize a dictionary to store all attributes and stats
character_data = {
    "Name": character_name,
    "Image URL": character_image_url,
    "Attributes": {},
    "Stats": {}
}

# Extract attributes and stats
for row in infobox.find_all('tr'):
    header = row.find('th')
    if header and header.get('colspan') != '2':  # This checks if it's a regular attribute or stat row
        key = header.text.strip(':').strip()
        value = row.find('td').text.strip()
        if "Stats" in header.text or "Basic Attack" in header.text or "Protection" in header.text or "Regen" in header.text:
            character_data["Stats"][key] = value
        else:
            character_data["Attributes"][key] = value

# Output the extracted data
print(character_data)
