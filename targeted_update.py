import json
import re

# Load the Excel data
with open('credit_categories.json') as f:
    excel_data = json.load(f)

# Load the existing credits.js
with open('credits.js', 'r') as f:
    credits_js = f.read()

print(f"Loaded credits.js ({len(credits_js)} chars)")

# Function to update pts value for a credit
def update_pts(js_content, code, new_pts):
    """Update the pts value for a credit"""
    pattern = rf"(code:'{re.escape(code)}',title:'[^']+',desc:'[^']+',)(pts:)[^,]+"
    replacement = rf"\1\2{new_pts}"
    return re.sub(pattern, replacement, js_content)

# Function to update pointOptions for a credit
def update_point_options(js_content, code, options):
    """Update the pointOptions for a credit"""
    # Find the credit block
    start_pattern = rf"code:'{re.escape(code)}',title:'[^']+',desc:'[^']+',pts:[^,]+,req:false,"
    start_match = re.search(start_pattern, js_content)

    if not start_match:
        print(f"Could not find start of credit {code}")
        return js_content

    start_pos = start_match.end()

    # Find the end of pointOptions (before criteria or closing brace)
    remaining = js_content[start_pos:]
    criteria_pos = remaining.find('criteria:')
    brace_pos = remaining.find('},')

    if criteria_pos != -1 and (brace_pos == -1 or criteria_pos < brace_pos):
        end_pos = start_pos + criteria_pos
    elif brace_pos != -1:
        end_pos = start_pos + brace_pos
    else:
        print(f"Could not find end of credit {code}")
        return js_content

    # Extract the current pointOptions
    current_block = js_content[start_pos:end_pos]
    point_options_match = re.search(r'pointOptions:\[([^\]]*)\]', current_block, re.DOTALL)

    if not point_options_match:
        print(f"No pointOptions found for {code}")
        return js_content

    # Create new pointOptions
    new_options = []
    for opt in options:
        label = f"{opt['pts']} pt{'s' if opt['pts'] > 1 else ''} — {opt['desc'][:60]}{'...' if len(opt['desc']) > 60 else ''}"
        new_options.append(f"{{pts:{opt['pts']},label:'{label}',desc:'{opt['desc']}'}}")

    new_point_options = f"pointOptions:[{','.join(new_options)}]"

    # Replace
    old_point_options = f"pointOptions:[{point_options_match.group(1)}]"
    return js_content.replace(old_point_options, new_point_options)

# Update all credits
updated_js = credits_js

# First update pts values
for credit_type, credits in excel_data.items():
    for code, info in credits.items():
        print(f"Updating pts for {code} to {info['pts']}")
        updated_js = update_pts(updated_js, code, info['pts'])

# Then update pointOptions for checkbox and dropdown credits
for credit_type in ['checkbox', 'dropdown']:
    for code, info in excel_data[credit_type].items():
        if 'options' in info:
            print(f"Updating pointOptions for {code} ({len(info['options'])} options)")
            updated_js = update_point_options(updated_js, code, info['options'])

# Write the updated file
with open('credits_updated.js', 'w') as f:
    f.write(updated_js)

print("Updated credits.js saved as credits_updated.js")
print(f"Original: {len(credits_js)} chars")
print(f"Updated: {len(updated_js)} chars")