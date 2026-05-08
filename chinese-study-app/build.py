import csv
import glob
import json
import os

csv_dir = r"d:\02.Document\Tài liệu bản thân\Tiếng Trung\Webapp_moi\Chinese-Grammar-master\Chinese-Grammar-master\CSV Files HSK1 - HSK6"
js_file = r"d:\02.Document\Tài liệu bản thân\Tiếng Trung\Webapp_moi\chinese-study-app\js\grammar_db.js"

grammar_dict = {}

for filepath in glob.glob(os.path.join(csv_dir, "*.csv")):
    with open(filepath, 'r', encoding='utf-8-sig') as f:
        reader = csv.reader(f)
        for row in reader:
            if len(row) < 9:
                continue
            zh_spaced = row[0]
            zh = row[1]
            pinyin = row[2]
            en = row[3]
            audio = row[4]
            structure_raw = row[5]
            tags = row[6]
            desc = row[7]
            url = row[8]
            
            # extract structure string
            structure = structure_raw.strip()
            if structure.startswith("::") and structure.endswith("::"):
                structure = structure[2:-2].strip()
                
            # extract id from URL
            gid = url.split('/')[-1] if url else ""
            if not gid:
                continue
                
            if gid not in grammar_dict:
                grammar_dict[gid] = {
                    "id": gid,
                    "desc": desc,
                    "structure": structure,
                    "tags": tags,
                    "examples": []
                }
            
            grammar_dict[gid]["examples"].append({
                "zh": zh,
                "pinyin": pinyin,
                "en": en
            })

grammar_list = list(grammar_dict.values())

with open(js_file, 'w', encoding='utf-8') as f:
    f.write("const GRAMMAR_DATA = ")
    json.dump(grammar_list, f, ensure_ascii=True, indent=4)
    f.write(";\n")

print(f"Generated {js_file} with {len(grammar_list)} grammar points.")
