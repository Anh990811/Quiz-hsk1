import json
import re

# Dữ liệu từ điển 214 bộ thủ với tên Hán Việt và ý nghĩa
RADICALS = {
    "一": ["Nhất", "Số một"], "丨": ["Cổn", "Nét sổ"], "丶": ["Chủ", "Cái chấm"], "丿": ["Phiệt", "Nét phẩy"], "乙": ["Ất", "Vị trí thứ 2 trong thiên can"], "亅": ["Quyết", "Nét móc"], "二": ["Nhị", "Số hai"], "亠": ["Đầu", "Phần đầu"],
    "人": ["Nhân", "Người"], "亻": ["Nhân", "Người"], "儿": ["Nhi", "Trẻ em"], "入": ["Nhập", "Vào"], "八": ["Bát", "Số tám"], "冂": ["Quynh", "Vùng biên giới ngoài xa"], "冖": ["Mịch", "Trùm khăn lên"], "冫": ["Băng", "Nước đá"],
    "几": ["Kỷ", "Cái bàn nhỏ"], "凵": ["Khảm", "Chỗ đất lõm"], "刀": ["Đao", "Con dao"], "刂": ["Đao", "Con dao"], "⺈": ["Đao", "Con dao"], "力": ["Lực", "Sức mạnh"], "勹": ["Bao", "Bao bọc"], "匕": ["Chủy", "Cái thìa"], "匚": ["Phương", "Cái tủ đựng"],
    "匸": ["Hệ", "Che đậy"], "十": ["Thập", "Số mười"], "卜": ["Bốc", "Xem bói"], "卩": ["Tiết", "Đốt tre"], "厂": ["Hán", "Sườn núi đầm đá"], "厶": ["Khư", "Riêng tư"], "又": ["Hựu", "Lại nữa"], "口": ["Khẩu", "Miệng"], "囗": ["Vi", "Vây quanh"],
    "土": ["Thổ", "Đất"], "士": ["Sĩ", "Kẻ sĩ, người có trí"], "夂": ["Trĩ", "Đi từ từ"], "夕": ["Tịch", "Buổi tối"], "大": ["Đại", "To lớn"], "女": ["Nữ", "Phụ nữ"], "子": ["Tử", "Con cái"], "宀": ["Miên", "Mái nhà che rủ xuống"],
    "寸": ["Thốn", "Đơn vị đo"], "小": ["Tiểu", "Nhỏ bé"], "尢": ["Uông", "Khuyết tật"], "尸": ["Thi", "Thây ma, xác chết"], "屮": ["Triệt", "Mầm non"], "山": ["Sơn", "Núi"], "巛": ["Xuyên", "Sông ngòi"], "川": ["Xuyên", "Sông ngòi"],
    "工": ["Công", "Người thợ"], "己": ["Kỷ", "Bản thân"], "巾": ["Cân", "Cái khăn"], "干": ["Can", "Can phạm, thiên can"], "幺": ["Yêu", "Nhỏ bé"], "广": ["Nghiễm", "Mái nhà rộng"], "廴": ["Dẫn", "Bước dài"], "廾": ["Củng", "Chắp tay"],
    "弋": ["Dặc", "Bắn cung"], "弓": ["Cung", "Cái cung"], "彐": ["Kệ", "Đầu con lợn"], "彡": ["Sam", "Lông vũ"], "彳": ["Xích", "Bước ngắn"], "心": ["Tâm", "Trái tim"], "忄": ["Tâm", "Trái tim"], "戈": ["Qua", "Cây giáo"], "户": ["Hộ", "Cửa một cánh"],
    "手": ["Thủ", "Làm bằng tay"], "扌": ["Thủ", "Làm bằng tay"], "支": ["Chi", "Cành nhánh"], "攴": ["Phộc", "Đánh khẽ"], "攵": ["Phộc", "Đánh khẽ"], "文": ["Văn", "Văn chương"], "斗": ["Đẩu", "Cái đấu đong gạo"], "斤": ["Cân", "Cái rìu"],
    "方": ["Phương", "Vuông vức"], "无": ["Vô", "Không có"], "日": ["Nhật", "Mặt trời, ngày"], "曰": ["Viết", "Nói"], "月": ["Nguyệt", "Mặt trăng, tháng"], "木": ["Mộc", "Cây cối"], "欠": ["Khiếm", "Khuyết thiếu"], "止": ["Chỉ", "Dừng lại"],
    "歹": ["Đãi", "Xấu xa"], "殳": ["Thù", "Binh khí dài"], "毋": ["Vô", "Chớ, đừng"], "比": ["Tỷ", "So sánh"], "毛": ["Mao", "Lông"], "氏": ["Thị", "Họ của người"], "气": ["Khí", "Hơi nước"], "水": ["Thủy", "Nước"], "氵": ["Thủy", "Nước"],
    "火": ["Hỏa", "Lửa"], "灬": ["Hỏa", "Lửa"], "爪": ["Trảo", "Móng vuốt thú"], "爫": ["Trảo", "Móng vuốt"], "父": ["Phụ", "Cha"], "爻": ["Hào", "Hào hoa, nét gạch trong bát quái"], "爿": ["Tường", "Mảnh ván"], "片": ["Phiến", "Tấm mỏng"],
    "牙": ["Nha", "Răng"], "牛": ["Ngưu", "Con trâu"], "牜": ["Ngưu", "Con trâu"], "犬": ["Khuyển", "Con chó"], "犭": ["Khuyển", "Con chó"], "玄": ["Huyền", "Màu đen"], "玉": ["Ngọc", "Đá quý"], "瓜": ["Qua", "Quả dưa"], "瓦": ["Ngõa", "Ngói"],
    "甘": ["Cam", "Ngọt"], "生": ["Sinh", "Sinh đẻ"], "用": ["Dụng", "Sử dụng"], "田": ["Điền", "Ruộng đất"], "疋": ["Thất", "Đơn vị đo"], "疒": ["Nạch", "Tật bệnh"], "癶": ["Bát", "Giẫm đạp, gạt ra"], "白": ["Bạch", "Màu trắng"],
    "皮": ["Bì", "Da"], "皿": ["Mãnh", "Bát đĩa"], "目": ["Mục", "Con mắt"], "矛": ["Mâu", "Cây giáo"], "矢": ["Thỉ", "Mũi tên"], "石": ["Thạch", "Hòn đá"], "示": ["Thị", "Chỉ bày"], "礻": ["Thị", "Chỉ bày"], "禸": ["Nhựu", "Vết chân thú"],
    "禾": ["Hòa", "Cây lúa"], "穴": ["Huyệt", "Hang lỗ"], "立": ["Lập", "Đứng lại"], "竹": ["Trúc", "Cây trúc"], "⺮": ["Trúc", "Cây trúc"], "米": ["Mễ", "Gạo"], "糸": ["Mịch", "Sợi tơ nhỏ"], "纟": ["Mịch", "Sợi tơ nhỏ"],
    "缶": ["Phữu", "Đồ sành, đồ gốm"], "网": ["Võng", "Cái lưới"], "罒": ["Võng", "Cái lưới"], "羊": ["Dương", "Con dê"], "羽": ["Vũ", "Lông vũ"], "老": ["Lão", "Già cả"], "而": ["Nhi", "Và"], "耒": ["Lỗi", "Cái cày"],
    "耳": ["Nhĩ", "Lỗ tai"], "聿": ["Duật", "Cây bút vẽ"], "肉": ["Nhục", "Thịt"], "臣": ["Thần", "Quan bề tôi"], "自": ["Tự", "Bản thân"], "至": ["Chí", "Đến nơi"], "臼": ["Cữu", "Cái cối dã gạo"], "舌": ["Thiệt", "Cái lưỡi"],
    "舛": ["Chuễn", "Sai trái"], "舟": ["Chu", "Cái thuyền"], "艮": ["Cấn", "Quẻ cấn"], "色": ["Sắc", "Màu sắc"], "艸": ["Thảo", "Cỏ"], "艹": ["Thảo", "Cỏ"], "虍": ["Hô", "Vằn lông hổ"], "虫": ["Trùng", "Côn trùng"],
    "血": ["Huyết", "Máu"], "行": ["Hành", "Đi lại"], "衣": ["Y", "Quần áo"], "衤": ["Y", "Quần áo"], "襾": ["Á", "Che đậy"], "见": ["Kiến", "Nhìn thấy"], "角": ["Giác", "Góc, sừng"], "言": ["Ngôn", "Lời nói"], "讠": ["Ngôn", "Lời nói"],
    "谷": ["Cốc", "Thung lũng"], "豆": ["Đậu", "Hạt đậu"], "豕": ["Thỉ", "Con lợn"], "豸": ["Trãi", "Loài sâu bọ"], "贝": ["Bối", "Vỏ sò, tiền"], "赤": ["Xích", "Màu đỏ"], "走": ["Tẩu", "Chạy"], "足": ["Túc", "Bàn chân"],
    "身": ["Thân", "Cơ thể"], "车": ["Xa", "Chiếc xe"], "辛": ["Tân", "Cay, vị nhọc"], "辰": ["Thần", "Ngôi sao"], "辵": ["Sước", "Đi bộ"], "辶": ["Sước", "Đi bước một"], "邑": ["Ấp", "Vùng đất"], "阝": ["Hữu/Phụ", "Gò đất / Ấp"],     
    "酉": ["Dậu", "Rượu"], "采": ["Biện", "Hái lượm"], "里": ["Lý", "Làng mạc, dặm"], "金": ["Kim", "Kim loại, vàng"], "钅": ["Kim", "Kim loại"], "长": ["Trường", "Dài, lớn"], "门": ["Môn", "Cái cửa"], "阜": ["Phụ", "Núi đất"],
    "隶": ["Đãi", "Kịp đuổi theo"], "隹": ["Chuy", "Chim đuôi ngắn"], "雨": ["Vũ", "Mưa"], "青": ["Thanh", "Màu xanh dương"], "非": ["Phi", "Không phải"], "面": ["Diện", "Mặt"], "革": ["Cách", "Da thú lông"], "韦": ["Vi", "Da thuộc"],
    "韭": ["Cửu", "Rau hẹ"], "音": ["Âm", "Âm thanh"], "页": ["Hiệt", "Trang giấy, đầu"], "风": ["Phong", "Gió"], "飞": ["Phi", "Bay"], "食": ["Thực", "Đồ ăn"], "饣": ["Thực", "Đồ ăn"], "首": ["Thủ", "Đầu"], "香": ["Hương", "Mùi thơm"],
    "马": ["Mã", "Con ngựa"], "骨": ["Cốt", "Xương"], "高": ["Cao", "Cao lớn"], "髟": ["Tiêu", "Tóc buông"], "斗": ["Đấu", "Chiến đấu"], "鬯": ["Xưởng", "Rượu tế"], "鬲": ["Cách", "Nồi đất"], "鬼": ["Quỷ", "Con quỷ"],
    "鱼": ["Ngư", "Con cá"], "鸟": ["Điểu", "Con chim"], "卤": ["Lỗ", "Đất mặn"], "鹿": ["Lộc", "Con hươu"], "麦": ["Mạch", "Lúa mạch"], "麻": ["Ma", "Cây gai"], "黄": ["Hoàng", "Màu vàng"], "黍": ["Thử", "Lúa nếp"],
    "黑": ["Hắc", "Màu đen"], "黹": ["Chỉ", "May vá"], "黾": ["Mãnh", "Con ếch"], "鼎": ["Đỉnh", "Cái đỉnh"], "鼓": ["Cổ", "Cái trống"], "鼠": ["Thử", "Con chuột"], "鼻": ["Tị", "Cái mũi"], "齐": ["Tề", "Bằng phẳng"],
    "齿": ["Xỉ", "Răng"], "龙": ["Long", "Rồng"], "龟": ["Quy", "Con rùa"], "龠": ["Dược", "Ống sáo"]
}

char_radical_map = {}

# Parse input makemeahanzi file
try:
    with open('makemeahanzi_dict.txt', 'r', encoding='utf-8') as f:
        for line in f:
            if not line.strip():
                continue
            data = json.loads(line)
            char = data.get('character')
            radical = data.get('radical')
            if char and radical:
                # Store if the radical is in our knowledge base (or store everything)
                if radical in RADICALS:
                    char_radical_map[char] = {
                        "r": radical,
                        "n": RADICALS[radical][0],
                        "m": RADICALS[radical][1]
                    }
except Exception as e:
    print(f"Error reading makemeahanzi_dict.txt: {e}")

# Additional fallback handling for alternative radicals
if "你" not in char_radical_map:
    char_radical_map["你"] = { "r": "亻", "n": RADICALS["亻"][0], "m": RADICALS["亻"][1] }

print(f"Captured {len(char_radical_map)} characters with known radicals.")

# Export to radicals.js
js_output = f"""/* ============================================
   RADICALS.JS - Từ điển bộ thủ cho HSK
   ============================================ */
   
// Bản đồ 214 Bộ thủ (Tham khảo)
const RADICAL_INFO = {json.dumps(RADICALS, ensure_ascii=False)};

// Bản đồ Chữ -> Bộ thủ
const CHAR_TO_RADICAL = {json.dumps(char_radical_map, ensure_ascii=False)};
"""

with open('radicals.js', 'w', encoding='utf-8') as f:
    f.write(js_output)

print("Created radicals.js successfully!")
