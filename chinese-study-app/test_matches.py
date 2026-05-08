import json
import re

with open('js/grammar_data.js', 'r', encoding='utf-8') as f:
    content = f.read()
    json_str = content[content.find('['):content.rfind(']')+1]
    grammar_data = json.loads(json_str)

sentence = '明天早上我和小明一起去踢足球。'
for rule in grammar_data:
    structure = rule.get('structure', '')
    zh_matches = re.findall(r'[\u4e00-\u9fa5]+', structure)
    if zh_matches:
        all_match = True
        total_len = 0
        for word in zh_matches:
            if word in sentence:
                total_len += len(word)
            else:
                all_match = False
                break
        if all_match:
            print(f"Match: {rule['id']}, len: {total_len}")
