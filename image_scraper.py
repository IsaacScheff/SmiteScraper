import os
import requests
from bs4 import BeautifulSoup
from godlist import godlist

#godlist = ['achilles', 'agni']  # Example god list for testing
base_url = 'https://smite.fandom.com/wiki/'

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
for god in godlist:
    url = f'{base_url}{god}'
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')

        # Find the main god image using the data-src attribute
        main_image = soup.find('img', alt=f"SkinArt {god.capitalize()} Default")
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