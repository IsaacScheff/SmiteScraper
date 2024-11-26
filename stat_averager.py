import json
import re

def extract_numbers(stat):
    base, modifier = 0, 0
    if "(" in stat:
        base = float(re.findall(r"[\d.]+", stat)[0])
        modifier = float(re.findall(r"[\d.]+", re.search(r'\((.*?)\)', stat).group(1))[0])
    else:
        base = float(re.findall(r"[\d.]+", stat)[0])
    return base, modifier

def calculate_averages(gods):
    sum_stats = {}
    for god in gods:
        for key, value in god["Attributes"].items():
            formatted_key = key.replace(":", "").strip()  # Remove colon and strip whitespace
            if formatted_key in numerical_stats:
                base, modifier = extract_numbers(value)
                if formatted_key not in sum_stats:
                    sum_stats[formatted_key] = [0, 0, 0]  # base_sum, modifier_sum, count
                sum_stats[formatted_key][0] += base
                sum_stats[formatted_key][1] += modifier
                sum_stats[formatted_key][2] += 1
    
    averages = {}
    for key, (base_sum, modifier_sum, count) in sum_stats.items():
        if count > 0:
            average_base = base_sum / count
            average_modifier = modifier_sum / count
            # Add '%' only to 'Attack/Sec'
            if key == "Attack/Sec":
                averages[key] = f"{average_base:.1f} (+{average_modifier:.1f}%)"
            else:
                averages[key] = f"{average_base:.1f} (+{average_modifier:.1f})"
    return averages

# List of numerical stat keys
numerical_stats = ["Health", "Mana", "Speed", "Range", "Attack/Sec", "Damage", 
                   "Physical", "Magical", "HP5", "MP5"]

# Load JSON data
with open('complete_gods_data.json', 'r') as file:
    gods_data = json.load(file)

# Organize gods by class and also store all gods for overall average
class_gods = {cls: [] for cls in ["Assassin", "Guardian", "Hunter", "Mage", "Warrior", "Overall"]}
for god in gods_data:
    class_gods["Overall"].append(god)
    if "Class:" in god["Attributes"]:
        god_class = god["Attributes"]["Class:"].split(",")[0].strip()
        if god_class in class_gods:
            class_gods[god_class].append(god)

# Calculate averages for each class and overall
average_results = {}
for cls, gods in class_gods.items():
    averages = calculate_averages(gods)
    average_results[f"Average {cls}"] = averages

with open('average_god_stats.json', 'w') as file:
    json.dump(average_results, file, indent=4)

print("Average statistics saved to 'average_god_stats.json'.")