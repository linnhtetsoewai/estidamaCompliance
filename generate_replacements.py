import json
import re

# Load the Excel data
with open('credit_categories.json') as f:
    excel_data = json.load(f)

# Load the existing credits.js
with open('credits.js', 'r') as f:
    credits_js = f.read()

print("Generating replacement commands for credits.js...")

# Generate replacement commands for each credit
replacements = []

for credit_type, credits in excel_data.items():
    for code, info in credits.items():
        print(f"\n=== {code} ({credit_type}) ===")

        # Find the current credit in JS
        pattern = rf"(\{{code:'{re.escape(code)}',title:'[^']+',desc:'[^']+',)(pts:)[^,]+(,[^}}]*pointOptions:\[[^\]]*\][^}}]*)\}}"
        match = re.search(pattern, credits_js, re.DOTALL)

        if not match:
            print(f"Could not find credit {code}")
            continue

        current_pts = match.group(2) + re.search(r'pts:([^,]+)', match.group(0)).group(1)
        print(f"Current pts: {current_pts}")
        print(f"New pts: {info['pts']}")

        # Generate new pointOptions if applicable
        if credit_type in ['checkbox', 'dropdown'] and 'options' in info:
            new_options = []
            for opt in info['options']:
                label = f"{opt['pts']} pt{'s' if opt['pts'] > 1 else ''} — {opt['desc'][:60]}{'...' if len(opt['desc']) > 60 else ''}"
                new_options.append(f"{{pts:{opt['pts']},label:'{label}',desc:'{opt['desc']}'}}")

            new_point_options = f"pointOptions:[{','.join(new_options)}]"
            print(f"New pointOptions: {new_point_options[:100]}...")

            # Create replacement command
            old_full = match.group(0)
            new_pts_part = f"pts:{info['pts']}"

            # Replace pts
            updated = re.sub(r'pts:[^,]+', f'pts:{info["pts"]}', old_full)

            # Replace pointOptions
            old_options_match = re.search(r'pointOptions:\[[^\]]*\]', updated)
            if old_options_match:
                updated = updated.replace(old_options_match.group(0), new_point_options)

            replacements.append((old_full, updated))
            print(f"Will replace {len(old_full)} chars with {len(updated)} chars")

print(f"\nGenerated {len(replacements)} replacement commands")

# Apply replacements
updated_js = credits_js
for old, new in replacements:
    updated_js = updated_js.replace(old, new, 1)

# Write the updated file
with open('credits_updated.js', 'w') as f:
    f.write(updated_js)

print("Updated credits.js saved as credits_updated.js")
print(f"Original: {len(credits_js)} chars")
print(f"Updated: {len(updated_js)} chars")