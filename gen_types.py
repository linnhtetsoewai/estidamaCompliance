import json

with open('credit_categories.json') as f:
    data = json.load(f)

checkbox = sorted(data['checkbox'].keys())
dropdown = sorted(data['dropdown'].keys())
straight = sorted(data['straight'].keys())

# Generate JS code
js_code = """// Credit type mapping - added to support checkbox, dropdown, and straight credit types
const CREDIT_TYPES = {
"""

for code in checkbox:
    js_code += f"  '{code}': 'checkbox',\n"
for code in dropdown:
    js_code += f"  '{code}': 'dropdown',\n"
for code in straight:
    js_code += f"  '{code}': 'straight',\n"

js_code = js_code.rstrip(',\n') + '\n};\n'

with open('credit_types.js', 'w') as f:
    f.write(js_code)

print("Generated credit_types.js")
print(f"Checkbox: {len(checkbox)}")
print(f"Dropdown: {len(dropdown)}")
print(f"Straight: {len(straight)}")
print(f"Total: {len(checkbox) + len(dropdown) + len(straight)}")
