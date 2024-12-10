import os
import requests
from bs4 import BeautifulSoup
from constants import GODLIST, BASE_URL

# Ensure the images directory exists
os.makedirs('images', exist_ok=True)

def save_image(image_url, filename):
    response = requests.get(image_url, stream=True)
    if response.status_code == 200:
        with open(filename, 'wb') as f:
            f.write(response.content)
    else:
        print(f"Failed to download {filename}")

for god in GODLIST:
    url = f'{BASE_URL}{god}_(SMITE_2)'
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')

        # Print all alt texts to see the patterns
        images = soup.find_all('img')
        for img in images:
            print(img.get('alt'))  # this output was somehwat confusing, but helpful for debugging

        # Use a general pattern to find the main image
        main_image = None
        for img in images:
            if "Default" in img.get('alt', '') and "SkinArt" in img.get('alt', ''):
                main_image = img
                break

        if main_image:
            image_url = main_image['data-src']
            save_image(image_url, f'images/{god}.png')
            print(f"Downloaded main image for {god}")
        else:
            print(f"No valid image URL found for {god}'s main image.")

        # Find and download ability images, skipping the first one, as it's the melee/range icon
        abilities_section = soup.find('span', id='Abilities').find_next('table')
        if abilities_section:
            ability_links = abilities_section.find_all('a', class_='sbls-image')
            for index, link in enumerate(ability_links, start=1):  # Start indexing from 1
                if index > 1: 
                    if 'href' in link.attrs:
                        ability_image = link.find('img')
                        ability_image_url = ability_image.get('data-src') or ability_image.get('src')
                        save_image(ability_image_url, f'images/{god}_ability_{index-1}.png')
                        print(f"Downloaded ability {index-1} image for {god}")
                    else:
                        print(f"No href found for ability {index-1} of {god}")
        else:
            print(f"No abilities section found for {god}")

    else:
        print(f"Failed to fetch page for {god}")

print("Script execution completed.")

