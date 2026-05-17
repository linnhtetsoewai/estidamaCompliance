import json

with open('credit_categories.json') as f:
    data = json.load(f)

checkbox = sorted(data['checkbox'].keys())
dropdown = sorted(data['dropdown'].keys())
straight = sorted(data['straight'].keys())

print('Checkbox credits:')
for code in checkbox:
    print(f'  {code}')

print('\nDropdown credits:')
for code in dropdown:
    print(f'  {code}')

print('\nStraight credits:')
for code in straight:
    print(f'  {code}')
