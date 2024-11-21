import requests
from bs4 import BeautifulSoup
import json

# List of god names
godlist = [
    'achilles', 'agni', 'ah_muzen_cab', 'ah_puch', 'amaterasu', 'anhur', 'anubis', 'ao_kuang', 'aphrodite', 'apollo',
    'arachne', 'ares', 'artemis', 'artio', 'athena', 'atlas', 'awilix', 'baba_yaga', 'bacchus', 'bakasura',
    'bake_kujira', 'baron_samedi', 'bastet', 'bellona', 'cabrakan', 'camazotz', 'cerberus', 'chaac', 'chang%27e',
    'charon', 'charybdis', 'chernobog', 'chiron', 'chronos', 'cliodhna', 'cthulhu', 'cu_chulainn', 'cupid', 'da_ji',
    'danzaburou', 'discordia', 'erlang_shen', 'eset', 'fafnir', 'fenrir', 'freya', 'ganesha', 'geb', 'gilgamesh',
    'guan_yu', 'hachiman', 'hades', 'he_bo', 'heimdallr', 'hel', 'hera', 'hercules', 'horus', 'hou_yi', 'hun_batz',
    'ishtar', 'ix_chel', 'izanami', 'janus', 'jing_wei', 'jormungandr', 'kali', 'khepri', 'king_arthur', 'kukulkan',
    'kumbhakarna', 'kuzenbo', 'lancelot', 'loki', 'maman_brigitte', 'martichoras', 'maui', 'medusa', 'mercury',
    'merlin', 'morgan_le_fay', 'mulan', 'ne_zha', 'neith', 'nemesis', 'nike', 'nox', 'nu_wa', 'nut', 'odin', 'olorun',
    'osiris', 'pele', 'persephone', 'poseidon', 'ra', 'raijin', 'rama', 'ratatoskr', 'ravana', 'scylla', 'serqet',
    'set', 'shiva', 'skadi', 'sobek', 'sol', 'sun_wukong', 'surtr', 'susano', 'sylvanus', 'terra', 'thanatos',
    'the_morrigan', 'thor', 'thoth', 'tiamat', 'tsukuyomi', 'tyr', 'ullr', 'vamana', 'vulcan', 'xbalanque', 'xing_tian',
    'yemoja', 'ymir', 'yu_huang', 'zeus', 'zhong_kui'
]

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

