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

# Loop through each god in the list
for god in GODLIST:
    url = f'{BASE_URL}{god}'
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Format the god's name for the main image by capitalizing after each underscore and handling encoded apostrophes
        formatted_name = ''.join(word.capitalize() for word in god.split('_'))
        if "%27" in formatted_name:
            apostrophe_index = formatted_name.find("%27")
            if apostrophe_index != -1 and apostrophe_index + 3 < len(formatted_name):
                formatted_name = formatted_name[:apostrophe_index] + formatted_name[apostrophe_index+3].upper() + formatted_name[apostrophe_index+4:]

        # Create potential names to check for the main image, considering versions
        possible_alts = [f"SkinArt {formatted_name} Default", f"SkinArt {formatted_name} Default V2", f"SkinArt {formatted_name} Default V3"]
        
        # Check each potential alt text until the correct image is found
        main_image = None
        for alt_text in possible_alts:
            main_image = soup.find('img', alt=alt_text)
            if main_image:
                break

        if main_image and 'data-src' in main_image.attrs:
            image_url = main_image['data-src']
            save_image(image_url, f'images/{god}.png')
            print(f"Downloaded main image for {god}")
        else:
            print(f"No valid image URL found for {god}'s main image.")

        # Find and download ability images
        abilities_section = soup.find('span', id='Abilities').find_next('table')
        if abilities_section:
            ability_links = abilities_section.find_all('a', class_='sbls-image')
            for index, link in enumerate(ability_links):
                if 'href' in link.attrs:
                    image_url = link['href']
                    save_image(image_url, f'images/{god}_ability_{index}.png')
                    print(f"Downloaded ability {index} image for {god}")
                else:
                    print(f"No href found for ability {index} of {god}")
        else:
            print(f"No abilities section found for {god}")
    else:
        print(f"Failed to fetch page for {god}")

print("Script execution completed.")
