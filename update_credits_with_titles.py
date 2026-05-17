import json
import re

# Load the Excel data
with open('credit_categories.json') as f:
    excel_data = json.load(f)

# Extract titles from existing src/credits.js
with open('src/credits.js', 'r') as f:
    credits_js = f.read()

# Find all credit code and title pairs
title_pattern = r"code:'([A-Z]+-[0-9A-Z.-]+)',title:'([^']+)'"
matches = re.findall(title_pattern, credits_js)

credit_titles = {}
for code, title in matches:
    credit_titles[code] = title

print(f"Found {len(credit_titles)} credit titles")

# Now create the updated src/credits.js
def get_section_from_code(code):
    """Determine section from credit code"""
    if code.startswith('IDP'): return 'IDP'
    if code.startswith('NS'): return 'NS'
    if code.startswith('LBo'): return 'LBo'
    if code.startswith('LBi'): return 'LBi'
    if code.startswith('PW'): return 'PW'
    if code.startswith('RE'): return 'RE'
    if code.startswith('SM'): return 'SM'
    if code.startswith('IP'): return 'IP'
    return 'IDP'  # default

def create_credit_object(code, excel_info, credit_type):
    """Create a credit object with Excel data"""
    title = credit_titles.get(code, f'Credit {code}')  # Use existing title or fallback

    base_obj = {
        'code': code,
        'title': title,
        'pts': excel_info['pts'],
        'req': False
    }

    if credit_type == 'checkbox':
        # For checkbox credits, create pointOptions from the options
        options = []
        for i, opt in enumerate(excel_info['options'], 1):
            options.append({
                'pts': opt['pts'],
                'label': f'{opt["pts"]} pt{"s" if opt["pts"] > 1 else ""} — {opt["desc"][:60]}{"..." if len(opt["desc"]) > 60 else ""}',
                'desc': opt['desc']
            })
        base_obj['pointOptions'] = options

    elif credit_type == 'dropdown':
        # For dropdown credits, create pointOptions from the options
        options = []
        for opt in excel_info['options']:
            options.append({
                'pts': opt['pts'],
                'label': f'{opt["pts"]} pt{"s" if opt["pts"] > 1 else ""} — {opt["desc"][:60]}{"..." if len(opt["desc"]) > 60 else ""}',
                'desc': opt['desc']
            })
        base_obj['pointOptions'] = options

    elif credit_type == 'straight':
        # For straight credits, just set the description
        base_obj['desc'] = excel_info['desc']

    return base_obj

# Create new CREDITS object
new_credits = {
    'IDP': [],
    'NS': [],
    'LBo': [],
    'LBi': [],
    'PW': [],
    'RE': [],
    'SM': [],
    'IP': []
}

# Add credits from Excel data
for credit_type, credits in excel_data.items():
    for code, info in credits.items():
        section = get_section_from_code(code)
        credit_obj = create_credit_object(code, info, credit_type)
        new_credits[section].append(credit_obj)

# Generate the new src/credits.js content
def format_credit_obj(obj):
    """Format a credit object as JavaScript"""
    lines = []
    lines.append(f"  {{code:'{obj['code']}',title:'{obj['title']}',pts:{obj['pts']},req:{str(obj['req']).lower()}")

    if 'desc' in obj:
        lines.append(f",desc:'{obj['desc']}'")

    if 'pointOptions' in obj:
        lines.append(",pointOptions:[")
        for opt in obj['pointOptions']:
            lines.append(f"    {{pts:{opt['pts']},label:'{opt['label']}',desc:'{opt['desc']}'}},")
        lines[-1] = lines[-1].rstrip(',')  # Remove trailing comma
        lines.append("  ]")

    lines.append("},")
    return '\n'.join(lines)

# Build the new CREDITS object
credits_lines = []
for section, credits in new_credits.items():
    if credits:
        credits_lines.append(f"{section}:[")
        for credit in credits:
            credits_lines.append(format_credit_obj(credit))
        credits_lines.append("],")

# Remove trailing comma from last section
if credits_lines and credits_lines[-1].endswith(','):
    credits_lines[-1] = credits_lines[-1].rstrip(',')

new_credits_js = f"""// Static PBRS credit catalog loaded by PBRS_Pearl_Checklist.html
const SECTIONS = {{
  IDP: 'IDP — Integrated Development Process',
  NS:  'NS — Natural Systems',
  LBo: 'LB — Livable Buildings (Outdoors)',
  LBi: 'LB — Livable Buildings (Indoors)',
  PW:  'PW — Precious Water',
  RE:  'RE — Resourceful Energy',
  SM:  'SM — Stewarding Materials',
  IP:  'IP — Innovating Practice',
}};

const CREDITS = {{
{chr(10).join(credits_lines)}
}};

const ALL_CREDITS = Object.values(CREDITS).flat();
"""

# Write the new src/credits.js
with open('credits_updated.js', 'w') as f:
    f.write(new_credits_js)

print("Generated credits_updated.js with Excel data and existing titles")
print(f"Total credits: {sum(len(credits) for credits in new_credits.values())}")
print(f"Titles found: {len(credit_titles)}")
