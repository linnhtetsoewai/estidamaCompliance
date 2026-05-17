import json
import re

# Load the Excel data
with open('credit_categories.json') as f:
    excel_data = json.load(f)

# Load the existing credits.js
with open('credits.js', 'r') as f:
    credits_js = f.read()

print(f"Loaded credits.js ({len(credits_js)} chars)")

# Function to update a credit's pointOptions and pts
def update_credit_in_js(js_content, code, excel_info, credit_type):
    """Update a credit in the JS content with Excel data"""

    # Find the credit object
    pattern = rf"(\{{code:'{re.escape(code)}',title:'[^']+',)(pts:[^,]+,req:[^,]+)([^}}]+)\}}"
    match = re.search(pattern, js_content, re.DOTALL)

    if not match:
        print(f"Could not find credit {code} in JS")
        return js_content

    prefix = match.group(1)
    pts_req = match.group(2)
    rest = match.group(3)

    # Update pts value
    new_pts = f"pts:{excel_info['pts']},req:false"
    updated_prefix = prefix + new_pts

    # Update pointOptions if needed
    if credit_type in ['checkbox', 'dropdown'] and 'options' in excel_info:
        # Remove existing pointOptions
        rest = re.sub(r',pointOptions:\[[^\]]*\]', '', rest)

        # Add new pointOptions
        options_js = []
        for opt in excel_info['options']:
            label = f"{opt['pts']} pt{'s' if opt['pts'] > 1 else ''} — {opt['desc'][:60]}{'...' if len(opt['desc']) > 60 else ''}"
            options_js.append(f"{{pts:{opt['pts']},label:'{label}',desc:'{opt['desc']}'}}")

        rest += f",pointOptions:[{','.join(options_js)}]"

    # Reconstruct the credit object
    new_credit = updated_prefix + rest + '}'

    # Replace in JS content
    return js_content.replace(match.group(0), new_credit)

# Update all credits
updated_js = credits_js
for credit_type, credits in excel_data.items():
    for code, info in credits.items():
        print(f"Updating {code} ({credit_type})")
        updated_js = update_credit_in_js(updated_js, code, info, credit_type)

# Write the updated file
with open('credits_updated.js', 'w') as f:
    f.write(updated_js)

print("Updated credits.js saved as credits_updated.js")
print(f"Original: {len(credits_js)} chars")
print(f"Updated: {len(updated_js)} chars")