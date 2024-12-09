import os
import requests
from bs4 import BeautifulSoup
from constants import ITEMS, CONSUMABLE_ITEMS, BASE_URL

def save_image(image_url, filename):
    response = requests.get(image_url, stream=True)
    if response.status_code == 200:
        with open(f'images/{filename}', 'wb') as f:
            f.write(response.content)
    else:
        print(f"Failed to download {filename}")

def fetch_and_save_images(item_list):
    for item in item_list:
        url = f"{BASE_URL}{item.replace(' ', '_')}"
        response = requests.get(url)
        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')
            image_tag = soup.find('a', class_='image').find('img')

            if image_tag and ('data-src' in image_tag.attrs or 'src' in image_tag.attrs):
                image_url = image_tag.get('data-src', image_tag.get('src'))  # Prioritize 'data-src' over 'src'
                # Removing apostrophes and formatting the filename
                formatted_item_name = item.replace(' ', '_').replace("'", "").replace('/', '-')
                save_image(image_url, f"{formatted_item_name}.png")
                print(f"Downloaded image for {item}")
            else:
                print(f"No valid image URL found for {item}")
        else:
            print(f"Failed to fetch page for {item}")

def main():
    print("Processing general items...")
    fetch_and_save_images(ITEMS)
    print("Processing consumable items...")
    fetch_and_save_images(CONSUMABLE_ITEMS)

if __name__ == "__main__":
    main()