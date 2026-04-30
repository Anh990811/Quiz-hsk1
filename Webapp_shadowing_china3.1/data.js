/* ============================================
   DATA.JS – 50 bài học theo giáo trình HSK
   HSK1: bài 1-15 | HSK2: bài 16-30 | HSK3: bài 31-50
   ============================================ */

const LESSONS_DATA = {

  /* =============================================
     SHADOWING – 50 chủ đề (mỗi bài 6-8 câu)
     HSK1: L1-L15 | HSK2: L16-L30 | HSK3: L31-L50
     ============================================= */
  shadowing: [
    /* -------- HSK 1 -------- */
    {
      id: "L01", lesson: 1, topic: "Chào hỏi cơ bản", topicEn: "Basic Greetings", icon: "👋", level: "HSK 1",
      grammar: "你好 / 再见 / 谢谢",
      sentences: [
        { id: 1, chinese: "你好！", pinyin: "Nǐ hǎo!", vietnamese: "Xin chào!", english: "Hello!" },
        { id: 2, chinese: "你好吗？", pinyin: "Nǐ hǎo ma?", vietnamese: "Bạn có khỏe không?", english: "How are you?" },
        { id: 3, chinese: "我很好，谢谢。", pinyin: "Wǒ hěn hǎo, xièxie.", vietnamese: "Tôi rất khỏe, cảm ơn.", english: "I'm fine, thank you." },
        { id: 4, chinese: "再见！", pinyin: "Zàijiàn!", vietnamese: "Tạm biệt!", english: "Goodbye!" },
        { id: 5, chinese: "早上好！", pinyin: "Zǎoshang hǎo!", vietnamese: "Chào buổi sáng!", english: "Good morning!" },
        { id: 6, chinese: "晚上好！", pinyin: "Wǎnshang hǎo!", vietnamese: "Chào buổi tối!", english: "Good evening!" },
        { id: 7, chinese: "不客气！", pinyin: "Bù kèqi!", vietnamese: "Không có gì!", english: "You're welcome!" },
        { id: 8, chinese: "对不起！", pinyin: "Duìbuqǐ!", vietnamese: "Xin lỗi!", english: "Sorry!" }
      ]
    },
    {
      id: "L02", lesson: 2, topic: "Tên và danh tính", topicEn: "Names & Identity", icon: "🪪", level: "HSK 1",
      grammar: "叫 / 是 / 我叫……",
      sentences: [
        { id: 1, chinese: "你叫什么名字？", pinyin: "Nǐ jiào shénme míngzi?", vietnamese: "Bạn tên là gì?", english: "What is your name?" },
        { id: 2, chinese: "我叫李明。", pinyin: "Wǒ jiào Lǐ Míng.", vietnamese: "Tôi tên là Lý Minh.", english: "My name is Li Ming." },
        { id: 3, chinese: "你是哪国人？", pinyin: "Nǐ shì nǎ guó rén?", vietnamese: "Bạn là người nước nào?", english: "What nationality are you?" },
        { id: 4, chinese: "我是越南人。", pinyin: "Wǒ shì Yuènán rén.", vietnamese: "Tôi là người Việt Nam.", english: "I am Vietnamese." },
        { id: 5, chinese: "这是我的名片。", pinyin: "Zhè shì wǒ de míngpiàn.", vietnamese: "Đây là danh thiếp của tôi.", english: "This is my business card." },
        { id: 6, chinese: "很高兴认识你！", pinyin: "Hěn gāoxìng rènshi nǐ!", vietnamese: "Rất vui được gặp bạn!", english: "Nice to meet you!" }
      ]
    },
    {
      id: "L03", lesson: 3, topic: "Gia đình", topicEn: "Family", icon: "👨‍👩‍👧", level: "HSK 1",
      grammar: "有 / 几个 / 家人称谓",
      sentences: [
        { id: 1, chinese: "你家有几口人？", pinyin: "Nǐ jiā yǒu jǐ kǒu rén?", vietnamese: "Gia đình bạn có mấy người?", english: "How many people are in your family?" },
        { id: 2, chinese: "我家有四口人。", pinyin: "Wǒ jiā yǒu sì kǒu rén.", vietnamese: "Gia đình tôi có bốn người.", english: "There are four people in my family." },
        { id: 3, chinese: "我有一个妹妹。", pinyin: "Wǒ yǒu yī gè mèimei.", vietnamese: "Tôi có một người em gái.", english: "I have a younger sister." },
        { id: 4, chinese: "我爸爸是老师。", pinyin: "Wǒ bàba shì lǎoshī.", vietnamese: "Bố tôi là giáo viên.", english: "My father is a teacher." },
        { id: 5, chinese: "我妈妈很漂亮。", pinyin: "Wǒ māma hěn piàoliang.", vietnamese: "Mẹ tôi rất xinh đẹp.", english: "My mother is very beautiful." },
        { id: 6, chinese: "他们都很好。", pinyin: "Tāmen dōu hěn hǎo.", vietnamese: "Họ đều rất tốt.", english: "They are all very good." }
      ]
    },
    {
      id: "L04", lesson: 4, topic: "Số và ngày tháng", topicEn: "Numbers & Dates", icon: "📅", level: "HSK 1",
      grammar: "几号 / 几月 / 星期几",
      sentences: [
        { id: 1, chinese: "今天几号？", pinyin: "Jīntiān jǐ hào?", vietnamese: "Hôm nay ngày mấy?", english: "What date is today?" },
        { id: 2, chinese: "今天是三月一号。", pinyin: "Jīntiān shì Sānyuè yī hào.", vietnamese: "Hôm nay là ngày 1 tháng 3.", english: "Today is March 1st." },
        { id: 3, chinese: "今天星期几？", pinyin: "Jīntiān xīngqī jǐ?", vietnamese: "Hôm nay thứ mấy?", english: "What day of the week is today?" },
        { id: 4, chinese: "今天星期三。", pinyin: "Jīntiān xīngqīsān.", vietnamese: "Hôm nay thứ Tư.", english: "Today is Wednesday." },
        { id: 5, chinese: "你的生日是哪天？", pinyin: "Nǐ de shēngrì shì nǎ tiān?", vietnamese: "Sinh nhật của bạn là ngày nào?", english: "When is your birthday?" },
        { id: 6, chinese: "我的生日是七月十五号。", pinyin: "Wǒ de shēngrì shì Qīyuè shíwǔ hào.", vietnamese: "Sinh nhật tôi là ngày 15 tháng 7.", english: "My birthday is July 15th." },
        { id: 7, chinese: "今年是哪年？", pinyin: "Jīnnián shì nǎ nián?", vietnamese: "Năm nay là năm nào?", english: "What year is this year?" }
      ]
    },
    {
      id: "L05", lesson: 5, topic: "Thời gian", topicEn: "Time", icon: "⏰", level: "HSK 1",
      grammar: "几点 / 现在 / 上午/下午",
      sentences: [
        { id: 1, chinese: "现在几点？", pinyin: "Xiànzài jǐ diǎn?", vietnamese: "Bây giờ mấy giờ?", english: "What time is it now?" },
        { id: 2, chinese: "现在八点半。", pinyin: "Xiànzài bā diǎn bàn.", vietnamese: "Bây giờ là tám giờ rưỡi.", english: "It is now 8:30." },
        { id: 3, chinese: "你几点上班？", pinyin: "Nǐ jǐ diǎn shàngbān?", vietnamese: "Bạn đi làm mấy giờ?", english: "What time do you go to work?" },
        { id: 4, chinese: "我八点上班。", pinyin: "Wǒ bā diǎn shàngbān.", vietnamese: "Tôi đi làm lúc 8 giờ.", english: "I go to work at 8 o'clock." },
        { id: 5, chinese: "下午两点见！", pinyin: "Xiàwǔ liǎng diǎn jiàn!", vietnamese: "Gặp nhau lúc 2 giờ chiều!", english: "See you at 2 PM!" },
        { id: 6, chinese: "会议从上午十点开始。", pinyin: "Huìyì cóng shàngwǔ shí diǎn kāishǐ.", vietnamese: "Cuộc họp bắt đầu từ 10 giờ sáng.", english: "The meeting starts at 10 AM." }
      ]
    },
    {
      id: "L06", lesson: 6, topic: "Phòng học và trường học", topicEn: "Classroom & School", icon: "🏫", level: "HSK 1",
      grammar: "学习 / 老师 / 同学",
      sentences: [
        { id: 1, chinese: "你是学生吗？", pinyin: "Nǐ shì xuésheng ma?", vietnamese: "Bạn có phải là học sinh không?", english: "Are you a student?" },
        { id: 2, chinese: "我是大学生。", pinyin: "Wǒ shì dàxuésheng.", vietnamese: "Tôi là sinh viên đại học.", english: "I am a university student." },
        { id: 3, chinese: "你学什么专业？", pinyin: "Nǐ xué shénme zhuānyè?", vietnamese: "Bạn học chuyên ngành gì?", english: "What is your major?" },
        { id: 4, chinese: "我学汉语。", pinyin: "Wǒ xué Hànyǔ.", vietnamese: "Tôi học tiếng Trung.", english: "I study Chinese." },
        { id: 5, chinese: "老师好！", pinyin: "Lǎoshī hǎo!", vietnamese: "Chào thầy/cô!", english: "Good day, teacher!" },
        { id: 6, chinese: "同学们，请坐！", pinyin: "Tóngxuémen, qǐng zuò!", vietnamese: "Các bạn, mời ngồi!", english: "Students, please sit down!" },
        { id: 7, chinese: "我听不懂，请再说一遍。", pinyin: "Wǒ tīng bù dǒng, qǐng zài shuō yī biàn.", vietnamese: "Tôi nghe không hiểu, xin nói lại một lần.", english: "I don't understand, please say it again." }
      ]
    },
    {
      id: "L07", lesson: 7, topic: "Đồ vật và chỉ định", topicEn: "Objects & Pointing", icon: "🎒", level: "HSK 1",
      grammar: "这/那 + 是 / 的",
      sentences: [
        { id: 1, chinese: "这是什么？", pinyin: "Zhè shì shénme?", vietnamese: "Đây là cái gì?", english: "What is this?" },
        { id: 2, chinese: "那是书包。", pinyin: "Nà shì shūbāo.", vietnamese: "Đó là cặp sách.", english: "That is a school bag." },
        { id: 3, chinese: "这是你的书吗？", pinyin: "Zhè shì nǐ de shū ma?", vietnamese: "Đây có phải sách của bạn không?", english: "Is this your book?" },
        { id: 4, chinese: "是的，是我的书。", pinyin: "Shì de, shì wǒ de shū.", vietnamese: "Vâng, đó là sách của tôi.", english: "Yes, it is my book." },
        { id: 5, chinese: "那本书多少钱？", pinyin: "Nà běn shū duōshǎo qián?", vietnamese: "Quyển sách đó bao nhiêu tiền?", english: "How much is that book?" },
        { id: 6, chinese: "请给我一支笔。", pinyin: "Qǐng gěi wǒ yī zhī bǐ.", vietnamese: "Cho tôi mượn một cây bút.", english: "Please give me a pen." }
      ]
    },
    {
      id: "L08", lesson: 8, topic: "Thức ăn và đồ uống", topicEn: "Food & Drinks", icon: "🍜", level: "HSK 1",
      grammar: "想吃/喝 / 好吃",
      sentences: [
        { id: 1, chinese: "你想吃什么？", pinyin: "Nǐ xiǎng chī shénme?", vietnamese: "Bạn muốn ăn gì?", english: "What do you want to eat?" },
        { id: 2, chinese: "我想喝茶。", pinyin: "Wǒ xiǎng hē chá.", vietnamese: "Tôi muốn uống trà.", english: "I want to drink tea." },
        { id: 3, chinese: "好吃极了！", pinyin: "Hǎochī jí le!", vietnamese: "Ngon tuyệt!", english: "It is extremely delicious!" },
        { id: 4, chinese: "我喜欢吃米饭。", pinyin: "Wǒ xǐhuān chī mǐfàn.", vietnamese: "Tôi thích ăn cơm.", english: "I like eating rice." },
        { id: 5, chinese: "你吃饱了吗？", pinyin: "Nǐ chī bǎo le ma?", vietnamese: "Bạn ăn no chưa?", english: "Are you full?" },
        { id: 6, chinese: "我要一杯水。", pinyin: "Wǒ yào yī bēi shuǐ.", vietnamese: "Tôi muốn một ly nước.", english: "I want a glass of water." },
        { id: 7, chinese: "这个不辣吗？", pinyin: "Zhège bù là ma?", vietnamese: "Cái này không cay à?", english: "Isn't this spicy?" }
      ]
    },
    {
      id: "L09", lesson: 9, topic: "Nơi chốn và vị trí", topicEn: "Places & Locations", icon: "📍", level: "HSK 1",
      grammar: "在哪里 / 方位词",
      sentences: [
        { id: 1, chinese: "你在哪里？", pinyin: "Nǐ zài nǎlǐ?", vietnamese: "Bạn đang ở đâu?", english: "Where are you?" },
        { id: 2, chinese: "我在家。", pinyin: "Wǒ zài jiā.", vietnamese: "Tôi đang ở nhà.", english: "I am at home." },
        { id: 3, chinese: "学校在哪里？", pinyin: "Xuéxiào zài nǎlǐ?", vietnamese: "Trường học ở đâu?", english: "Where is the school?" },
        { id: 4, chinese: "学校在银行旁边。", pinyin: "Xuéxiào zài yínháng pángbiān.", vietnamese: "Trường học ở cạnh ngân hàng.", english: "The school is next to the bank." },
        { id: 5, chinese: "书在桌子上面。", pinyin: "Shū zài zhuōzi shàngmiàn.", vietnamese: "Sách ở trên bàn.", english: "The book is on the table." },
        { id: 6, chinese: "厕所在哪里？", pinyin: "Cèsuǒ zài nǎlǐ?", vietnamese: "Nhà vệ sinh ở đâu?", english: "Where is the restroom?" }
      ]
    },
    {
      id: "L10", lesson: 10, topic: "Hỏi thăm sức khỏe", topicEn: "Health & Feelings", icon: "🏥", level: "HSK 1",
      grammar: "不舒服 / 头疼 / 看医生",
      sentences: [
        { id: 1, chinese: "你怎么了？", pinyin: "Nǐ zěnme le?", vietnamese: "Bạn làm sao vậy?", english: "What's wrong with you?" },
        { id: 2, chinese: "我不舒服。", pinyin: "Wǒ bù shūfu.", vietnamese: "Tôi không khỏe.", english: "I don't feel well." },
        { id: 3, chinese: "我头疼。", pinyin: "Wǒ tóuténg.", vietnamese: "Tôi đau đầu.", english: "I have a headache." },
        { id: 4, chinese: "你去看医生了吗？", pinyin: "Nǐ qù kàn yīshēng le ma?", vietnamese: "Bạn đi khám bác sĩ chưa?", english: "Did you go see the doctor?" },
        { id: 5, chinese: "医生说我要多休息。", pinyin: "Yīshēng shuō wǒ yào duō xiūxi.", vietnamese: "Bác sĩ nói tôi cần nghỉ ngơi nhiều.", english: "The doctor said I need more rest." },
        { id: 6, chinese: "你好多了吗？", pinyin: "Nǐ hǎo duō le ma?", vietnamese: "Bạn đã khỏe hơn chưa?", english: "Are you feeling better?" }
      ]
    },
    {
      id: "L11", lesson: 11, topic: "Thời tiết", topicEn: "Weather", icon: "🌤️", level: "HSK 1",
      grammar: "天气 / 怎么样 / 下雨/雪",
      sentences: [
        { id: 1, chinese: "今天天气怎么样？", pinyin: "Jīntiān tiānqì zěnmeyàng?", vietnamese: "Hôm nay thời tiết thế nào?", english: "What's the weather like today?" },
        { id: 2, chinese: "今天很热。", pinyin: "Jīntiān hěn rè.", vietnamese: "Hôm nay rất nóng.", english: "Today is very hot." },
        { id: 3, chinese: "外面在下雨。", pinyin: "Wàimiàn zài xià yǔ.", vietnamese: "Bên ngoài trời đang mưa.", english: "It is raining outside." },
        { id: 4, chinese: "明天会下雪吗？", pinyin: "Míngtiān huì xià xuě ma?", vietnamese: "Ngày mai có tuyết rơi không?", english: "Will it snow tomorrow?" },
        { id: 5, chinese: "冬天很冷。", pinyin: "Dōngtiān hěn lěng.", vietnamese: "Mùa đông rất lạnh.", english: "Winter is very cold." },
        { id: 6, chinese: "春天真美！", pinyin: "Chūntiān zhēn měi!", vietnamese: "Mùa xuân thật đẹp!", english: "Spring is so beautiful!" }
      ]
    },
    {
      id: "L12", lesson: 12, topic: "Sở thích và hoạt động", topicEn: "Hobbies & Activities", icon: "🎨", level: "HSK 1",
      grammar: "喜欢 / 爱好 / 不喜欢",
      sentences: [
        { id: 1, chinese: "你有什么爱好？", pinyin: "Nǐ yǒu shénme àihào?", vietnamese: "Bạn có sở thích gì?", english: "What are your hobbies?" },
        { id: 2, chinese: "我喜欢看电影。", pinyin: "Wǒ xǐhuān kàn diànyǐng.", vietnamese: "Tôi thích xem phim.", english: "I like watching movies." },
        { id: 3, chinese: "我不喜欢运动。", pinyin: "Wǒ bù xǐhuān yùndòng.", vietnamese: "Tôi không thích thể dục.", english: "I don't like exercise." },
        { id: 4, chinese: "你喜欢听音乐吗？", pinyin: "Nǐ xǐhuān tīng yīnyuè ma?", vietnamese: "Bạn có thích nghe nhạc không?", english: "Do you like listening to music?" },
        { id: 5, chinese: "我非常喜欢读书。", pinyin: "Wǒ fēicháng xǐhuān dú shū.", vietnamese: "Tôi rất thích đọc sách.", english: "I really like reading books." },
        { id: 6, chinese: "周末你一般做什么？", pinyin: "Zhōumò nǐ yībān zuò shénme?", vietnamese: "Cuối tuần bạn thường làm gì?", english: "What do you usually do on weekends?" }
      ]
    },
    {
      id: "L13", lesson: 13, topic: "Mua sắm cơ bản", topicEn: "Basic Shopping", icon: "🛒", level: "HSK 1",
      grammar: "多少钱 / 要/买",
      sentences: [
        { id: 1, chinese: "这个多少钱？", pinyin: "Zhège duōshǎo qián?", vietnamese: "Cái này bao nhiêu tiền?", english: "How much is this?" },
        { id: 2, chinese: "五十块钱。", pinyin: "Wǔshí kuài qián.", vietnamese: "Năm mươi tệ.", english: "Fifty yuan." },
        { id: 3, chinese: "太贵了！", pinyin: "Tài guì le!", vietnamese: "Đắt quá!", english: "Too expensive!" },
        { id: 4, chinese: "我要买两个。", pinyin: "Wǒ yào mǎi liǎng gè.", vietnamese: "Tôi muốn mua hai cái.", english: "I want to buy two." },
        { id: 5, chinese: "便宜一点可以吗？", pinyin: "Piányí yīdiǎn kěyǐ ma?", vietnamese: "Rẻ hơn một chút được không?", english: "Can you make it a bit cheaper?" },
        { id: 6, chinese: "这里可以刷卡吗？", pinyin: "Zhèlǐ kěyǐ shuā kǎ ma?", vietnamese: "Ở đây có thể thanh toán thẻ không?", english: "Can I pay by card here?" }
      ]
    },
    {
      id: "L14", lesson: 14, topic: "Giao thông cơ bản", topicEn: "Basic Transport", icon: "🚌", level: "HSK 1",
      grammar: "坐/骑/开 + 交通工具",
      sentences: [
        { id: 1, chinese: "你怎么来学校？", pinyin: "Nǐ zěnme lái xuéxiào?", vietnamese: "Bạn đến trường bằng gì?", english: "How do you get to school?" },
        { id: 2, chinese: "我坐公交车来。", pinyin: "Wǒ zuò gōngjiāochē lái.", vietnamese: "Tôi đi xe buýt đến.", english: "I take the bus." },
        { id: 3, chinese: "骑自行车要多长时间？", pinyin: "Qí zìxíngchē yào duō cháng shíjiān?", vietnamese: "Đi xe đạp mất bao lâu?", english: "How long does it take by bicycle?" },
        { id: 4, chinese: "大约十分钟。", pinyin: "Dàyuē shí fēnzhōng.", vietnamese: "Khoảng mười phút.", english: "About ten minutes." },
        { id: 5, chinese: "地铁比公交车快。", pinyin: "Dìtiě bǐ gōngjiāochē kuài.", vietnamese: "Tàu điện ngầm nhanh hơn xe buýt.", english: "The subway is faster than the bus." },
        { id: 6, chinese: "下一站是哪里？", pinyin: "Xià yī zhàn shì nǎlǐ?", vietnamese: "Trạm tiếp theo là đâu?", english: "What is the next stop?" }
      ]
    },
    {
      id: "L15", lesson: 15, topic: "Gọi điện và liên lạc", topicEn: "Phone & Contact", icon: "📱", level: "HSK 1",
      grammar: "打电话 / 号码 / 联系",
      sentences: [
        { id: 1, chinese: "你的电话号码是多少？", pinyin: "Nǐ de diànhuà hàomǎ shì duōshǎo?", vietnamese: "Số điện thoại của bạn là bao nhiêu?", english: "What is your phone number?" },
        { id: 2, chinese: "我的号码是……", pinyin: "Wǒ de hàomǎ shì……", vietnamese: "Số của tôi là…", english: "My number is…" },
        { id: 3, chinese: "我给你打电话。", pinyin: "Wǒ gěi nǐ dǎ diànhuà.", vietnamese: "Tôi sẽ gọi điện cho bạn.", english: "I will call you." },
        { id: 4, chinese: "你的微信是什么？", pinyin: "Nǐ de Wēixìn shì shénme?", vietnamese: "WeChat của bạn là gì?", english: "What is your WeChat?" },
        { id: 5, chinese: "发短信给我。", pinyin: "Fā duǎnxìn gěi wǒ.", vietnamese: "Nhắn tin cho tôi.", english: "Send me a text message." },
        { id: 6, chinese: "没有信号。", pinyin: "Méiyǒu xìnhào.", vietnamese: "Không có sóng.", english: "There's no signal." }
      ]
    },

    /* -------- HSK 2 -------- */
    {
      id: "L16", lesson: 16, topic: "Nghề nghiệp", topicEn: "Occupations", icon: "💼", level: "HSK 2",
      grammar: "是 + 职业 / 在哪儿工作",
      sentences: [
        { id: 1, chinese: "你做什么工作？", pinyin: "Nǐ zuò shénme gōngzuò?", vietnamese: "Bạn làm nghề gì?", english: "What do you do for work?" },
        { id: 2, chinese: "我是医生。", pinyin: "Wǒ shì yīshēng.", vietnamese: "Tôi là bác sĩ.", english: "I am a doctor." },
        { id: 3, chinese: "他在一家公司上班。", pinyin: "Tā zài yī jiā gōngsī shàngbān.", vietnamese: "Anh ấy làm việc ở một công ty.", english: "He works at a company." },
        { id: 4, chinese: "你工作多长时间了？", pinyin: "Nǐ gōngzuò duō cháng shíjiān le?", vietnamese: "Bạn đã làm việc bao lâu rồi?", english: "How long have you been working?" },
        { id: 5, chinese: "我已经工作三年了。", pinyin: "Wǒ yǐjīng gōngzuò sān nián le.", vietnamese: "Tôi đã làm việc ba năm rồi.", english: "I have been working for three years." },
        { id: 6, chinese: "她是一位有名的演员。", pinyin: "Tā shì yī wèi yǒumíng de yǎnyuán.", vietnamese: "Cô ấy là một diễn viên nổi tiếng.", english: "She is a famous actress." }
      ]
    },
    {
      id: "L17", lesson: 17, topic: "Hỏi đường", topicEn: "Asking Directions", icon: "🗺️", level: "HSK 2",
      grammar: "怎么走 / 往左/右转 / 直走",
      sentences: [
        { id: 1, chinese: "请问，图书馆怎么走？", pinyin: "Qǐngwèn, túshūguǎn zěnme zǒu?", vietnamese: "Xin hỏi, đi đến thư viện như thế nào?", english: "Excuse me, how do I get to the library?" },
        { id: 2, chinese: "一直往前走。", pinyin: "Yīzhí wǎng qián zǒu.", vietnamese: "Đi thẳng về phía trước.", english: "Go straight ahead." },
        { id: 3, chinese: "到红绿灯往右转。", pinyin: "Dào hónglǜdēng wǎng yòu zhuǎn.", vietnamese: "Đến đèn giao thông thì rẽ phải.", english: "Turn right at the traffic light." },
        { id: 4, chinese: "大概走五分钟就到了。", pinyin: "Dàgài zǒu wǔ fēnzhōng jiù dào le.", vietnamese: "Đi khoảng năm phút là đến.", english: "It takes about five minutes on foot." },
        { id: 5, chinese: "图书馆在银行对面。", pinyin: "Túshūguǎn zài yínháng duìmiàn.", vietnamese: "Thư viện ở đối diện ngân hàng.", english: "The library is opposite the bank." },
        { id: 6, chinese: "你迷路了吗？", pinyin: "Nǐ mílù le ma?", vietnamese: "Bạn bị lạc đường rồi à?", english: "Did you get lost?" }
      ]
    },
    {
      id: "L18", lesson: 18, topic: "Nhà ở và môi trường", topicEn: "Housing & Environment", icon: "🏠", level: "HSK 2",
      grammar: "住在 / 附近 / 环境",
      sentences: [
        { id: 1, chinese: "你住在哪里？", pinyin: "Nǐ zhù zài nǎlǐ?", vietnamese: "Bạn sống ở đâu?", english: "Where do you live?" },
        { id: 2, chinese: "我住在学校附近。", pinyin: "Wǒ zhù zài xuéxiào fùjìn.", vietnamese: "Tôi sống gần trường học.", english: "I live near the school." },
        { id: 3, chinese: "你的房子大吗？", pinyin: "Nǐ de fángzi dà ma?", vietnamese: "Nhà bạn có rộng không?", english: "Is your house big?" },
        { id: 4, chinese: "房子不大，但环境很好。", pinyin: "Fángzi bù dà, dàn huánjìng hěn hǎo.", vietnamese: "Nhà không rộng, nhưng môi trường rất tốt.", english: "The house is not big, but the environment is nice." },
        { id: 5, chinese: "附近有超市吗？", pinyin: "Fùjìn yǒu chāoshì ma?", vietnamese: "Gần đây có siêu thị không?", english: "Is there a supermarket nearby?" },
        { id: 6, chinese: "这里交通很方便。", pinyin: "Zhèlǐ jiāotōng hěn fāngbiàn.", vietnamese: "Giao thông nơi đây rất thuận tiện.", english: "Transportation here is very convenient." }
      ]
    },
    {
      id: "L19", lesson: 19, topic: "Đặt hàng ở nhà hàng", topicEn: "Ordering at Restaurant", icon: "🍽️", level: "HSK 2",
      grammar: "服务员 / 点菜 / 结账",
      sentences: [
        { id: 1, chinese: "服务员，可以点菜了吗？", pinyin: "Fúwùyuán, kěyǐ diǎn cài le ma?", vietnamese: "Phục vụ, có thể gọi món chưa?", english: "Waiter, can we order now?" },
        { id: 2, chinese: "我要一碗牛肉面。", pinyin: "Wǒ yào yī wǎn niúròu miàn.", vietnamese: "Tôi muốn một bát mì bò.", english: "I'd like a bowl of beef noodles." },
        { id: 3, chinese: "有没有素食菜单？", pinyin: "Yǒu méiyǒu sùshí càidān?", vietnamese: "Có thực đơn chay không?", english: "Is there a vegetarian menu?" },
        { id: 4, chinese: "请给我们换一双筷子。", pinyin: "Qǐng gěi wǒmen huàn yī shuāng kuàizi.", vietnamese: "Vui lòng đổi cho chúng tôi một đôi đũa.", english: "Please bring us a new pair of chopsticks." },
        { id: 5, chinese: "买单，谢谢！", pinyin: "Mǎidān, xièxie!", vietnamese: "Tính tiền, cảm ơn!", english: "Check please, thank you!" },
        { id: 6, chinese: "可以开发票吗？", pinyin: "Kěyǐ kāi fāpiào ma?", vietnamese: "Có thể xuất hóa đơn không?", english: "Can you issue an invoice?" }
      ]
    },
    {
      id: "L20", lesson: 20, topic: "Mua sắm nâng cao", topicEn: "Advanced Shopping", icon: "🛍️", level: "HSK 2",
      grammar: "比较 / 更 / 换一件",
      sentences: [
        { id: 1, chinese: "我想买一件衬衫。", pinyin: "Wǒ xiǎng mǎi yī jiàn chènshān.", vietnamese: "Tôi muốn mua một chiếc áo sơ mi.", english: "I want to buy a shirt." },
        { id: 2, chinese: "有没有更便宜的？", pinyin: "Yǒu méiyǒu gèng piányí de?", vietnamese: "Có cái nào rẻ hơn không?", english: "Is there a cheaper one?" },
        { id: 3, chinese: "我可以试穿吗？", pinyin: "Wǒ kěyǐ shì chuān ma?", vietnamese: "Tôi có thể thử mặc không?", english: "Can I try it on?" },
        { id: 4, chinese: "这件太大了，有小号吗？", pinyin: "Zhè jiàn tài dà le, yǒu xiǎo hào ma?", vietnamese: "Cái này quá rộng, có size nhỏ không?", english: "This is too big, do you have a small size?" },
        { id: 5, chinese: "可以打折吗？", pinyin: "Kěyǐ dǎzhé ma?", vietnamese: "Có thể giảm giá không?", english: "Can you give a discount?" },
        { id: 6, chinese: "我可以用微信支付吗？", pinyin: "Wǒ kěyǐ yòng Wēixìn zhīfù ma?", vietnamese: "Tôi có thể thanh toán bằng WeChat không?", english: "Can I pay with WeChat Pay?" }
      ]
    },
    {
      id: "L21", lesson: 21, topic: "Du lịch và khách sạn", topicEn: "Travel & Hotel", icon: "✈️", level: "HSK 2",
      grammar: "预订 / 入住/退房 / 旅游",
      sentences: [
        { id: 1, chinese: "我想预订一个标准间。", pinyin: "Wǒ xiǎng yùdìng yī gè biāozhǔn jiān.", vietnamese: "Tôi muốn đặt một phòng tiêu chuẩn.", english: "I'd like to book a standard room." },
        { id: 2, chinese: "办理入住请出示护照。", pinyin: "Bànlǐ rùzhù qǐng chūshì hùzhào.", vietnamese: "Khi làm thủ tục nhận phòng xin xuất trình hộ chiếu.", english: "Please show your passport when checking in." },
        { id: 3, chinese: "退房时间是几点？", pinyin: "Tuìfáng shíjiān shì jǐ diǎn?", vietnamese: "Thời gian trả phòng là mấy giờ?", english: "What time is check-out?" },
        { id: 4, chinese: "我想换一个安静的房间。", pinyin: "Wǒ xiǎng huàn yī gè ānjìng de fángjiān.", vietnamese: "Tôi muốn đổi sang phòng yên tĩnh hơn.", english: "I'd like to change to a quieter room." },
        { id: 5, chinese: "附近有什么好玩的地方？", pinyin: "Fùjìn yǒu shénme hǎowán de dìfāng?", vietnamese: "Gần đây có chỗ nào hay không?", english: "Are there any fun places nearby?" },
        { id: 6, chinese: "我想参观故宫。", pinyin: "Wǒ xiǎng cānguān Gùgōng.", vietnamese: "Tôi muốn tham quan Tử Cấm Thành.", english: "I want to visit the Forbidden City." }
      ]
    },
    {
      id: "L22", lesson: 22, topic: "Thể thao và sức khỏe", topicEn: "Sports & Health", icon: "⚽", level: "HSK 2",
      grammar: "打/踢/游 + 运动 / 锻炼",
      sentences: [
        { id: 1, chinese: "你平时喜欢什么运动？", pinyin: "Nǐ píngshí xǐhuān shénme yùndòng?", vietnamese: "Bạn thường thích môn thể thao nào?", english: "What sports do you usually like?" },
        { id: 2, chinese: "我喜欢打篮球。", pinyin: "Wǒ xǐhuān dǎ lánqiú.", vietnamese: "Tôi thích chơi bóng rổ.", english: "I like playing basketball." },
        { id: 3, chinese: "你每天锻炼多长时间？", pinyin: "Nǐ měitiān duànliàn duō cháng shíjiān?", vietnamese: "Mỗi ngày bạn tập thể dục bao lâu?", english: "How long do you exercise every day?" },
        { id: 4, chinese: "锻炼身体很重要。", pinyin: "Duànliàn shēntǐ hěn zhòngyào.", vietnamese: "Tập thể dục rất quan trọng.", english: "Physical exercise is very important." },
        { id: 5, chinese: "我去游泳了。", pinyin: "Wǒ qù yóuyǒng le.", vietnamese: "Tôi đã đi bơi.", english: "I went swimming." },
        { id: 6, chinese: "明天我们一起打羽毛球吧。", pinyin: "Míngtiān wǒmen yīqǐ dǎ yǔmáoqiú ba.", vietnamese: "Ngày mai chúng ta cùng đánh cầu lông nhé.", english: "Let's play badminton together tomorrow." }
      ]
    },
    {
      id: "L23", lesson: 23, topic: "Học ngoại ngữ", topicEn: "Learning Languages", icon: "📖", level: "HSK 2",
      grammar: "学习 + 语言 / 会/能 + 说",
      sentences: [
        { id: 1, chinese: "你会说几种语言？", pinyin: "Nǐ huì shuō jǐ zhǒng yǔyán?", vietnamese: "Bạn biết nói mấy thứ tiếng?", english: "How many languages do you speak?" },
        { id: 2, chinese: "我会说汉语和英语。", pinyin: "Wǒ huì shuō Hànyǔ hé Yīngyǔ.", vietnamese: "Tôi biết nói tiếng Trung và tiếng Anh.", english: "I speak Chinese and English." },
        { id: 3, chinese: "你汉语说得很好！", pinyin: "Nǐ Hànyǔ shuō de hěn hǎo!", vietnamese: "Tiếng Trung của bạn nói rất tốt!", english: "Your Chinese is very good!" },
        { id: 4, chinese: "谢谢，我还在学习。", pinyin: "Xièxie, wǒ hái zài xuéxí.", vietnamese: "Cảm ơn, tôi vẫn đang học.", english: "Thank you, I'm still learning." },
        { id: 5, chinese: "你每天怎么练习汉语？", pinyin: "Nǐ měitiān zěnme liànxí Hànyǔ?", vietnamese: "Mỗi ngày bạn luyện tiếng Trung như thế nào?", english: "How do you practice Chinese every day?" },
        { id: 6, chinese: "我用手机APP学习汉语。", pinyin: "Wǒ yòng shǒujī APP xuéxí Hànyǔ.", vietnamese: "Tôi dùng ứng dụng điện thoại để học tiếng Trung.", english: "I use a phone app to learn Chinese." }
      ]
    },
    {
      id: "L24", lesson: 24, topic: "Kế hoạch tương lai", topicEn: "Future Plans", icon: "🎯", level: "HSK 2",
      grammar: "打算 / 计划 / 想要",
      sentences: [
        { id: 1, chinese: "你有什么计划？", pinyin: "Nǐ yǒu shénme jìhuà?", vietnamese: "Bạn có kế hoạch gì?", english: "What are your plans?" },
        { id: 2, chinese: "我打算去中国留学。", pinyin: "Wǒ dǎsuàn qù Zhōngguó liúxué.", vietnamese: "Tôi dự định đi du học ở Trung Quốc.", english: "I plan to study abroad in China." },
        { id: 3, chinese: "你想去哪个城市？", pinyin: "Nǐ xiǎng qù nǎ gè chéngshì?", vietnamese: "Bạn muốn đến thành phố nào?", english: "Which city do you want to go to?" },
        { id: 4, chinese: "我想去北京或上海。", pinyin: "Wǒ xiǎng qù Běijīng huò Shànghǎi.", vietnamese: "Tôi muốn đến Bắc Kinh hoặc Thượng Hải.", english: "I want to go to Beijing or Shanghai." },
        { id: 5, chinese: "你打算什么时候出发？", pinyin: "Nǐ dǎsuàn shénme shíhòu chūfā?", vietnamese: "Bạn dự định khi nào khởi hành?", english: "When are you planning to depart?" },
        { id: 6, chinese: "明年九月份。", pinyin: "Míngnián jiǔyuèfèn.", vietnamese: "Tháng 9 năm sau.", english: "September of next year." }
      ]
    },
    {
      id: "L25", lesson: 25, topic: "Cảm xúc và tâm tư", topicEn: "Emotions & Feelings", icon: "💭", level: "HSK 2",
      grammar: "感觉 / 高兴/难过 / 觉得",
      sentences: [
        { id: 1, chinese: "你今天心情怎么样？", pinyin: "Nǐ jīntiān xīnqíng zěnmeyàng?", vietnamese: "Hôm nay tâm trạng bạn thế nào?", english: "How are you feeling today?" },
        { id: 2, chinese: "我很高兴，因为通过考试了。", pinyin: "Wǒ hěn gāoxìng, yīnwèi tōngguò kǎoshì le.", vietnamese: "Tôi rất vui vì đã thi đỗ.", english: "I am very happy because I passed the exam." },
        { id: 3, chinese: "他看起来很难过。", pinyin: "Tā kàn qǐlái hěn nánguò.", vietnamese: "Trông anh ấy có vẻ rất buồn.", english: "He looks very sad." },
        { id: 4, chinese: "我有点担心。", pinyin: "Wǒ yǒudiǎn dānxīn.", vietnamese: "Tôi hơi lo lắng.", english: "I'm a little worried." },
        { id: 5, chinese: "别担心，一切都会好的。", pinyin: "Bié dānxīn, yīqiè dōu huì hǎo de.", vietnamese: "Đừng lo, mọi thứ sẽ ổn thôi.", english: "Don't worry, everything will be fine." },
        { id: 6, chinese: "我觉得这件事很有意思。", pinyin: "Wǒ juéde zhè jiàn shì hěn yǒu yìsi.", vietnamese: "Tôi thấy chuyện này rất thú vị.", english: "I find this matter very interesting." }
      ]
    },
    {
      id: "L26", lesson: 26, topic: "Cuộc sống hàng ngày", topicEn: "Daily Life", icon: "☀️", level: "HSK 2",
      grammar: "习惯 / 每天 / 一般来说",
      sentences: [
        { id: 1, chinese: "你每天几点起床？", pinyin: "Nǐ měitiān jǐ diǎn qǐchuáng?", vietnamese: "Bạn mỗi ngày dậy mấy giờ?", english: "What time do you get up every day?" },
        { id: 2, chinese: "我一般六点半起床。", pinyin: "Wǒ yībān liù diǎn bàn qǐchuáng.", vietnamese: "Tôi thường dậy lúc sáu giờ rưỡi.", english: "I usually get up at six thirty." },
        { id: 3, chinese: "你的日常生活怎么样？", pinyin: "Nǐ de rìcháng shēnghuó zěnmeyàng?", vietnamese: "Cuộc sống hàng ngày của bạn như thế nào?", english: "What is your daily life like?" },
        { id: 4, chinese: "我习惯早睡早起。", pinyin: "Wǒ xíguàn zǎo shuì zǎo qǐ.", vietnamese: "Tôi có thói quen ngủ sớm dậy sớm.", english: "I have a habit of sleeping early and waking up early." },
        { id: 5, chinese: "下班后我喜欢散步。", pinyin: "Xiàbān hòu wǒ xǐhuān sànbù.", vietnamese: "Sau giờ làm tôi thích đi dạo.", english: "After work I like to take a walk." },
        { id: 6, chinese: "周末我一般在家休息。", pinyin: "Zhōumò wǒ yībān zài jiā xiūxi.", vietnamese: "Cuối tuần tôi thường nghỉ ngơi ở nhà.", english: "On weekends I usually rest at home." }
      ]
    },
    {
      id: "L27", lesson: 27, topic: "Tiền bạc và ngân hàng", topicEn: "Money & Banking", icon: "💰", level: "HSK 2",
      grammar: "换钱 / 存/取款 / 汇率",
      sentences: [
        { id: 1, chinese: "我想换一些人民币。", pinyin: "Wǒ xiǎng huàn yīxiē rénmínbì.", vietnamese: "Tôi muốn đổi một ít nhân dân tệ.", english: "I'd like to exchange some RMB." },
        { id: 2, chinese: "今天汇率是多少？", pinyin: "Jīntiān huìlǜ shì duōshǎo?", vietnamese: "Tỷ giá hôm nay là bao nhiêu?", english: "What is the exchange rate today?" },
        { id: 3, chinese: "我想取五百块钱。", pinyin: "Wǒ xiǎng qǔ wǔbǎi kuài qián.", vietnamese: "Tôi muốn rút năm trăm tệ.", english: "I'd like to withdraw five hundred yuan." },
        { id: 4, chinese: "ATM在哪里？", pinyin: "ATM zài nǎlǐ?", vietnamese: "Máy ATM ở đâu?", english: "Where is the ATM?" },
        { id: 5, chinese: "可以用手机支付吗？", pinyin: "Kěyǐ yòng shǒujī zhīfù ma?", vietnamese: "Có thể thanh toán bằng điện thoại không?", english: "Can I pay with my phone?" },
        { id: 6, chinese: "我的账户里有多少钱？", pinyin: "Wǒ de zhànghù lǐ yǒu duōshǎo qián?", vietnamese: "Tài khoản của tôi có bao nhiêu tiền?", english: "How much money is in my account?" }
      ]
    },
    {
      id: "L28", lesson: 28, topic: "Bệnh viện và thuốc", topicEn: "Hospital & Medicine", icon: "💊", level: "HSK 2",
      grammar: "看病 / 开药 / 症状描述",
      sentences: [
        { id: 1, chinese: "我发烧了，需要看医生。", pinyin: "Wǒ fāshāo le, xūyào kàn yīshēng.", vietnamese: "Tôi bị sốt, cần đi khám bác sĩ.", english: "I have a fever and need to see a doctor." },
        { id: 2, chinese: "你有什么症状？", pinyin: "Nǐ yǒu shénme zhèngzhuàng?", vietnamese: "Bạn có những triệu chứng gì?", english: "What symptoms do you have?" },
        { id: 3, chinese: "我头疼、发烧、咳嗽。", pinyin: "Wǒ tóuténg, fāshāo, késou.", vietnamese: "Tôi đau đầu, sốt và ho.", english: "I have a headache, fever, and cough." },
        { id: 4, chinese: "我给你开一些药。", pinyin: "Wǒ gěi nǐ kāi yīxiē yào.", vietnamese: "Tôi sẽ kê cho bạn một số thuốc.", english: "I will prescribe some medicine for you." },
        { id: 5, chinese: "这种药一天吃几次？", pinyin: "Zhè zhǒng yào yī tiān chī jǐ cì?", vietnamese: "Loại thuốc này một ngày uống mấy lần?", english: "How many times a day should I take this medicine?" },
        { id: 6, chinese: "多喝水，多休息。", pinyin: "Duō hē shuǐ, duō xiūxi.", vietnamese: "Uống nhiều nước, nghỉ ngơi nhiều.", english: "Drink more water and rest more." }
      ]
    },
    {
      id: "L29", lesson: 29, topic: "Công nghệ và internet", topicEn: "Technology & Internet", icon: "💻", level: "HSK 2",
      grammar: "用电脑 / 上网 / 下载",
      sentences: [
        { id: 1, chinese: "你会用电脑吗？", pinyin: "Nǐ huì yòng diànnǎo ma?", vietnamese: "Bạn có biết dùng máy tính không?", english: "Do you know how to use a computer?" },
        { id: 2, chinese: "我每天都上网。", pinyin: "Wǒ měitiān dōu shàngwǎng.", vietnamese: "Tôi mỗi ngày đều lên mạng.", english: "I go on the internet every day." },
        { id: 3, chinese: "这个APP怎么下载？", pinyin: "Zhège APP zěnme xiàzài?", vietnamese: "Ứng dụng này tải về như thế nào?", english: "How do I download this app?" },
        { id: 4, chinese: "WiFi密码是多少？", pinyin: "WiFi mìmǎ shì duōshǎo?", vietnamese: "Mật khẩu WiFi là gì?", english: "What is the WiFi password?" },
        { id: 5, chinese: "我的手机没电了。", pinyin: "Wǒ de shǒujī méi diàn le.", vietnamese: "Điện thoại tôi hết pin rồi.", english: "My phone is out of battery." },
        { id: 6, chinese: "可以借你的充电器吗？", pinyin: "Kěyǐ jiè nǐ de chōngdiànqì ma?", vietnamese: "Có thể mượn sạc của bạn không?", english: "Can I borrow your charger?" }
      ]
    },
    {
      id: "L30", lesson: 30, topic: "Bạn bè và quan hệ xã hội", topicEn: "Friends & Social Relations", icon: "🤝", level: "HSK 2",
      grammar: "朋友 / 认识 / 联系",
      sentences: [
        { id: 1, chinese: "你们是怎么认识的？", pinyin: "Nǐmen shì zěnme rènshi de?", vietnamese: "Các bạn quen nhau như thế nào?", english: "How did you get to know each other?" },
        { id: 2, chinese: "我们是同学。", pinyin: "Wǒmen shì tóngxué.", vietnamese: "Chúng tôi là bạn cùng lớp.", english: "We are classmates." },
        { id: 3, chinese: "他是我最好的朋友。", pinyin: "Tā shì wǒ zuì hǎo de péngyou.", vietnamese: "Anh ấy là người bạn tốt nhất của tôi.", english: "He is my best friend." },
        { id: 4, chinese: "我们经常一起出去玩。", pinyin: "Wǒmen jīngcháng yīqǐ chūqù wán.", vietnamese: "Chúng tôi thường xuyên cùng nhau đi chơi.", english: "We often go out together." },
        { id: 5, chinese: "你有很多中国朋友吗？", pinyin: "Nǐ yǒu hěn duō Zhōngguó péngyou ma?", vietnamese: "Bạn có nhiều bạn bè Trung Quốc không?", english: "Do you have many Chinese friends?" },
        { id: 6, chinese: "交朋友需要诚实和耐心。", pinyin: "Jiāo péngyou xūyào chéngshí hé nàixīn.", vietnamese: "Kết bạn cần sự thành thật và kiên nhẫn.", english: "Making friends requires honesty and patience." }
      ]
    },

    /* -------- HSK 3 -------- */
    {
      id: "L31", lesson: 31, topic: "Công việc văn phòng", topicEn: "Office Work", icon: "🏢", level: "HSK 3",
      grammar: "汇报 / 项目 / 会议",
      sentences: [
        { id: 1, chinese: "今天下午三点有一个重要会议。", pinyin: "Jīntiān xiàwǔ sān diǎn yǒu yī gè zhòngyào huìyì.", vietnamese: "Chiều nay lúc 3 giờ có một cuộc họp quan trọng.", english: "There is an important meeting at 3 PM today." },
        { id: 2, chinese: "请把报告发给我看看。", pinyin: "Qǐng bǎ bàogào fā gěi wǒ kànkàn.", vietnamese: "Hãy gửi báo cáo cho tôi xem.", english: "Please send the report for me to review." },
        { id: 3, chinese: "这个项目的截止日期是什么时候？", pinyin: "Zhège xiàngmù de jiézhǐ rìqī shì shénme shíhòu?", vietnamese: "Hạn chót của dự án này là khi nào?", english: "What is the deadline for this project?" },
        { id: 4, chinese: "我需要和客户沟通一下。", pinyin: "Wǒ xūyào hé kèhù gōutōng yīxià.", vietnamese: "Tôi cần trao đổi với khách hàng một chút.", english: "I need to communicate with the client." },
        { id: 5, chinese: "你的表现非常出色。", pinyin: "Nǐ de biǎoxiàn fēicháng chūsè.", vietnamese: "Biểu hiện của bạn xuất sắc lắm.", english: "Your performance is excellent." },
        { id: 6, chinese: "我们需要提高工作效率。", pinyin: "Wǒmen xūyào tígāo gōngzuò xiàolǜ.", vietnamese: "Chúng ta cần nâng cao hiệu suất làm việc.", english: "We need to improve work efficiency." }
      ]
    },
    {
      id: "L32", lesson: 32, topic: "Môi trường và thiên nhiên", topicEn: "Environment & Nature", icon: "🌿", level: "HSK 3",
      grammar: "保护环境 / 污染 / 资源",
      sentences: [
        { id: 1, chinese: "保护环境是每个人的责任。", pinyin: "Bǎohù huánjìng shì měi gè rén de zérèn.", vietnamese: "Bảo vệ môi trường là trách nhiệm của mỗi người.", english: "Protecting the environment is everyone's responsibility." },
        { id: 2, chinese: "空气污染越来越严重。", pinyin: "Kōngqì wūrǎn yuèlái yuè yánzhòng.", vietnamese: "Ô nhiễm không khí ngày càng nghiêm trọng.", english: "Air pollution is getting more and more serious." },
        { id: 3, chinese: "我们应该节约用水。", pinyin: "Wǒmen yīnggāi jiéyuē yòng shuǐ.", vietnamese: "Chúng ta nên tiết kiệm nước.", english: "We should conserve water." },
        { id: 4, chinese: "使用可再生能源很重要。", pinyin: "Shǐyòng kě zàishēng néngyuán hěn zhòngyào.", vietnamese: "Việc sử dụng năng lượng tái tạo rất quan trọng.", english: "Using renewable energy is very important." },
        { id: 5, chinese: "这片森林里有很多动植物。", pinyin: "Zhè piàn sēnlín lǐ yǒu hěn duō dòngzhíwù.", vietnamese: "Khu rừng này có rất nhiều động thực vật.", english: "This forest has many animals and plants." },
        { id: 6, chinese: "我们要减少使用一次性塑料袋。", pinyin: "Wǒmen yào jiǎnshǎo shǐyòng yīcìxìng sùliào dài.", vietnamese: "Chúng ta phải giảm sử dụng túi nhựa dùng một lần.", english: "We should reduce the use of single-use plastic bags." }
      ]
    },
    {
      id: "L33", lesson: 33, topic: "Giáo dục và học tập", topicEn: "Education & Learning", icon: "🎓", level: "HSK 3",
      grammar: "教育 / 考试 / 成绩",
      sentences: [
        { id: 1, chinese: "教育对一个人的发展非常重要。", pinyin: "Jiàoyù duì yī gè rén de fāzhǎn fēicháng zhòngyào.", vietnamese: "Giáo dục rất quan trọng đối với sự phát triển của một người.", english: "Education is very important for a person's development." },
        { id: 2, chinese: "你的汉语水平提高了很多。", pinyin: "Nǐ de Hànyǔ shuǐpíng tígāo le hěn duō.", vietnamese: "Trình độ tiếng Trung của bạn đã nâng cao rất nhiều.", english: "Your Chinese level has improved a lot." },
        { id: 3, chinese: "这次考试你考了多少分？", pinyin: "Zhè cì kǎoshì nǐ kǎo le duōshǎo fēn?", vietnamese: "Lần thi này bạn đạt bao nhiêu điểm?", english: "How many points did you get on this exam?" },
        { id: 4, chinese: "我需要更加努力学习。", pinyin: "Wǒ xūyào gèngjiā nǔlì xuéxí.", vietnamese: "Tôi cần học tập chăm chỉ hơn.", english: "I need to study harder." },
        { id: 5, chinese: "死记硬背不是好方法。", pinyin: "Sǐjìyìngbèi bù shì hǎo fāngfǎ.", vietnamese: "Học vẹt không phải là phương pháp tốt.", english: "Rote memorization is not a good method." },
        { id: 6, chinese: "理解比记忆更重要。", pinyin: "Lǐjiě bǐ jìyì gèng zhòngyào.", vietnamese: "Hiểu quan trọng hơn là ghi nhớ.", english: "Understanding is more important than memorizing." }
      ]
    },
    {
      id: "L34", lesson: 34, topic: "Văn hóa và phong tục", topicEn: "Culture & Customs", icon: "🏮", level: "HSK 3",
      grammar: "习俗 / 传统 / 文化差异",
      sentences: [
        { id: 1, chinese: "中国春节是最重要的节日。", pinyin: "Zhōngguó Chūnjié shì zuì zhòngyào de jiérì.", vietnamese: "Tết Nguyên Đán của Trung Quốc là lễ hội quan trọng nhất.", english: "Chinese New Year is the most important holiday." },
        { id: 2, chinese: "过年时家人都团聚在一起。", pinyin: "Guò nián shí jiārén dōu tuánjù zài yīqǐ.", vietnamese: "Trong dịp năm mới, gia đình đoàn tụ với nhau.", english: "During New Year, families gather together." },
        { id: 3, chinese: "你了解中国的饮食文化吗？", pinyin: "Nǐ liǎojiě Zhōngguó de yǐnshí wénhuà ma?", vietnamese: "Bạn có hiểu về văn hóa ẩm thực Trung Quốc không?", english: "Do you understand Chinese food culture?" },
        { id: 4, chinese: "中国人非常注重面子。", pinyin: "Zhōngguórén fēicháng zhùzhòng miànzi.", vietnamese: "Người Trung Quốc rất coi trọng thể diện.", english: "Chinese people value 'face' (reputation) greatly." },
        { id: 5, chinese: "送礼有很多讲究。", pinyin: "Sòng lǐ yǒu hěn duō jiǎngjiū.", vietnamese: "Việc tặng quà có rất nhiều điều cần chú ý.", english: "There are many considerations when giving gifts." },
        { id: 6, chinese: "了解文化差异有助于沟通。", pinyin: "Liǎojiě wénhuà chāyì yǒuzhù yú gōutōng.", vietnamese: "Hiểu sự khác biệt văn hóa giúp giao tiếp tốt hơn.", english: "Understanding cultural differences helps communication." }
      ]
    },
    {
      id: "L35", lesson: 35, topic: "Du lịch và khám phá", topicEn: "Tourism & Exploration", icon: "🧭", level: "HSK 3",
      grammar: "旅行 / 景点 / 参观游览",
      sentences: [
        { id: 1, chinese: "你去过中国哪些地方？", pinyin: "Nǐ qù guò Zhōngguó nǎxiē dìfāng?", vietnamese: "Bạn đã đi những nơi nào ở Trung Quốc?", english: "What places in China have you visited?" },
        { id: 2, chinese: "我参观过北京的故宫和长城。", pinyin: "Wǒ cānguān guò Běijīng de Gùgōng hé Chángchéng.", vietnamese: "Tôi đã tham quan Tử Cấm Thành và Vạn Lý Trường Thành ở Bắc Kinh.", english: "I've visited the Forbidden City and the Great Wall in Beijing." },
        { id: 3, chinese: "这个景点真的很值得去。", pinyin: "Zhège jǐngdiǎn zhēn de hěn zhídé qù.", vietnamese: "Điểm tham quan này thực sự rất đáng đi.", english: "This attraction is really worth visiting." },
        { id: 4, chinese: "旅行让我开阔了眼界。", pinyin: "Lǚxíng ràng wǒ kāikuò le yǎnjiè.", vietnamese: "Du lịch đã giúp tôi mở rộng tầm nhìn.", english: "Traveling has broadened my horizons." },
        { id: 5, chinese: "下次我想去云南看看。", pinyin: "Xià cì wǒ xiǎng qù Yúnnán kànkàn.", vietnamese: "Lần sau tôi muốn đến Vân Nam xem thử.", english: "Next time I want to visit Yunnan." },
        { id: 6, chinese: "旅行中遇到困难怎么办？", pinyin: "Lǚxíng zhōng yù dào kùnnán zěnme bàn?", vietnamese: "Nếu gặp khó khăn trong khi du lịch thì phải làm sao?", english: "What do you do when you encounter difficulties while traveling?" }
      ]
    },
    {
      id: "L36", lesson: 36, topic: "Tình yêu và hôn nhân", topicEn: "Love & Marriage", icon: "💑", level: "HSK 3",
      grammar: "恋爱 / 结婚 / 幸福",
      sentences: [
        { id: 1, chinese: "你结婚了吗？", pinyin: "Nǐ jiéhūn le ma?", vietnamese: "Bạn kết hôn chưa?", english: "Are you married?" },
        { id: 2, chinese: "我还没有，我在谈恋爱。", pinyin: "Wǒ hái méiyǒu, wǒ zài tán liàn'ài.", vietnamese: "Tôi chưa, tôi đang yêu.", english: "Not yet, I am in a relationship." },
        { id: 3, chinese: "你们相识多久了？", pinyin: "Nǐmen xiāngshí duō jiǔ le?", vietnamese: "Các bạn quen nhau bao lâu rồi?", english: "How long have you known each other?" },
        { id: 4, chinese: "我们认识了三年了。", pinyin: "Wǒmen rènshi le sān nián le.", vietnamese: "Chúng tôi quen nhau được ba năm rồi.", english: "We have known each other for three years." },
        { id: 5, chinese: "幸福的婚姻需要经营。", pinyin: "Xìngfú de hūnyīn xūyào jīngyíng.", vietnamese: "Hôn nhân hạnh phúc cần được vun đắp.", english: "A happy marriage needs to be nurtured." },
        { id: 6, chinese: "祝你们白头偕老！", pinyin: "Zhù nǐmen báitóu xiélǎo!", vietnamese: "Chúc hai bạn trăm năm hạnh phúc!", english: "Wishing you a long and happy marriage!" }
      ]
    },
    {
      id: "L37", lesson: 37, topic: "Kinh tế và kinh doanh", topicEn: "Economy & Business", icon: "📊", level: "HSK 3",
      grammar: "经济 / 市场 / 发展",
      sentences: [
        { id: 1, chinese: "中国经济发展非常快速。", pinyin: "Zhōngguó jīngjì fāzhǎn fēicháng kuàisù.", vietnamese: "Kinh tế Trung Quốc phát triển rất nhanh.", english: "China's economy is developing very rapidly." },
        { id: 2, chinese: "你对电商有什么看法？", pinyin: "Nǐ duì diànshāng yǒu shénme kànfǎ?", vietnamese: "Bạn có suy nghĩ gì về thương mại điện tử?", english: "What are your thoughts on e-commerce?" },
        { id: 3, chinese: "电商改变了人们的购物方式。", pinyin: "Diànshāng gǎibiàn le rénmen de gòuwù fāngshì.", vietnamese: "Thương mại điện tử đã thay đổi cách mua sắm của mọi người.", english: "E-commerce has changed the way people shop." },
        { id: 4, chinese: "市场竞争越来越激烈。", pinyin: "Shìchǎng jìngzhēng yuèlái yuè jīliè.", vietnamese: "Cạnh tranh thị trường ngày càng khốc liệt.", english: "Market competition is becoming increasingly fierce." },
        { id: 5, chinese: "我们需要制定新的商业策略。", pinyin: "Wǒmen xūyào zhìdìng xīn de shāngyè cèlüè.", vietnamese: "Chúng ta cần lập chiến lược kinh doanh mới.", english: "We need to develop new business strategies." },
        { id: 6, chinese: "合作共赢是最好的方式。", pinyin: "Hézuò gòng yíng shì zuì hǎo de fāngshì.", vietnamese: "Hợp tác cùng thắng là cách tốt nhất.", english: "Cooperation for mutual benefit is the best approach." }
      ]
    },
    {
      id: "L38", lesson: 38, topic: "Nghệ thuật và âm nhạc", topicEn: "Arts & Music", icon: "🎵", level: "HSK 3",
      grammar: "艺术 / 音乐风格 / 欣赏",
      sentences: [
        { id: 1, chinese: "你喜欢什么风格的音乐？", pinyin: "Nǐ xǐhuān shénme fēnggé de yīnyuè?", vietnamese: "Bạn thích phong cách âm nhạc nào?", english: "What style of music do you like?" },
        { id: 2, chinese: "我喜欢古典音乐和流行歌曲。", pinyin: "Wǒ xǐhuān gǔdiǎn yīnyuè hé liúxíng gēqǔ.", vietnamese: "Tôi thích nhạc cổ điển và nhạc pop.", english: "I like classical music and pop songs." },
        { id: 3, chinese: "你会弹吉他吗？", pinyin: "Nǐ huì tán jítā ma?", vietnamese: "Bạn có biết chơi guitar không?", english: "Can you play the guitar?" },
        { id: 4, chinese: "学一门乐器需要很多时间。", pinyin: "Xué yī mén yuèqì xūyào hěn duō shíjiān.", vietnamese: "Học một nhạc cụ cần rất nhiều thời gian.", english: "Learning a musical instrument takes a lot of time." },
        { id: 5, chinese: "这幅画有什么含义？", pinyin: "Zhè fú huà yǒu shénme hányì?", vietnamese: "Bức tranh này có ý nghĩa gì?", english: "What is the meaning of this painting?" },
        { id: 6, chinese: "艺术可以表达人的内心世界。", pinyin: "Yìshù kěyǐ biǎodá rén de nèixīn shìjiè.", vietnamese: "Nghệ thuật có thể diễn đạt thế giới nội tâm của con người.", english: "Art can express a person's inner world." }
      ]
    },
    {
      id: "L39", lesson: 39, topic: "Khoa học và công nghệ", topicEn: "Science & Technology", icon: "🔬", level: "HSK 3",
      grammar: "科技 / 发明 / 影响",
      sentences: [
        { id: 1, chinese: "科学技术改变了我们的生活。", pinyin: "Kēxué jìshù gǎibiàn le wǒmen de shēnghuó.", vietnamese: "Khoa học và công nghệ đã thay đổi cuộc sống của chúng ta.", english: "Science and technology have changed our lives." },
        { id: 2, chinese: "人工智能正在快速发展。", pinyin: "Réngōng zhìnéng zhèngzài kuàisù fāzhǎn.", vietnamese: "Trí tuệ nhân tạo đang phát triển nhanh chóng.", english: "Artificial intelligence is developing rapidly." },
        { id: 3, chinese: "你觉得人工智能对人类有什么影响？", pinyin: "Nǐ juéde réngōng zhìnéng duì rénlèi yǒu shénme yǐngxiǎng?", vietnamese: "Bạn nghĩ trí tuệ nhân tạo có ảnh hưởng gì đến con người?", english: "What do you think is the impact of AI on humanity?" },
        { id: 4, chinese: "科技既有好处也有坏处。", pinyin: "Kējì jì yǒu hǎochù yě yǒu huàichù.", vietnamese: "Công nghệ vừa có lợi vừa có hại.", english: "Technology has both benefits and drawbacks." },
        { id: 5, chinese: "太空探索有什么意义？", pinyin: "Tàikōng tànsuǒ yǒu shénme yìyì?", vietnamese: "Khám phá không gian có ý nghĩa gì?", english: "What is the significance of space exploration?" },
        { id: 6, chinese: "人类应该共同面对技术挑战。", pinyin: "Rénlèi yīnggāi gòngtóng miànduì jìshù tiǎozhàn.", vietnamese: "Nhân loại nên cùng nhau đối mặt với thách thức công nghệ.", english: "Humanity should face technological challenges together." }
      ]
    },
    {
      id: "L40", lesson: 40, topic: "Thức ăn và văn hóa ẩm thực", topicEn: "Food & Culinary Culture", icon: "🥘", level: "HSK 3",
      grammar: "美食 / 烹饪 / 饮食文化",
      sentences: [
        { id: 1, chinese: "中国菜系非常丰富多样。", pinyin: "Zhōngguó càixì fēicháng fēngfù duōyàng.", vietnamese: "Ẩm thực Trung Quốc rất phong phú và đa dạng.", english: "Chinese cuisine is very rich and diverse." },
        { id: 2, chinese: "你最喜欢哪种中国菜？", pinyin: "Nǐ zuì xǐhuān nǎ zhǒng Zhōngguó cài?", vietnamese: "Bạn thích món ăn Trung Quốc nào nhất?", english: "Which Chinese dish do you like the most?" },
        { id: 3, chinese: "川菜以麻辣著称。", pinyin: "Chuāncài yǐ má là zhùchēng.", vietnamese: "Ẩm thực Tứ Xuyên nổi tiếng với vị cay tê.", english: "Sichuan cuisine is famous for its numbing-spicy flavor." },
        { id: 4, chinese: "你会做中国菜吗？", pinyin: "Nǐ huì zuò Zhōngguó cài ma?", vietnamese: "Bạn có biết nấu món ăn Trung Quốc không?", english: "Can you cook Chinese food?" },
        { id: 5, chinese: "我学会了做饺子。", pinyin: "Wǒ xué huì le zuò jiǎozi.", vietnamese: "Tôi đã học được cách làm bánh há cảo.", english: "I learned how to make dumplings." },
        { id: 6, chinese: "饮食文化反映了一个民族的特色。", pinyin: "Yǐnshí wénhuà fǎnyìng le yī gè mínzú de tèsè.", vietnamese: "Văn hóa ẩm thực phản ánh đặc sắc của một dân tộc.", english: "Food culture reflects the characteristics of a people." }
      ]
    },
    {
      id: "L41", lesson: 41, topic: "Xã hội và cộng đồng", topicEn: "Society & Community", icon: "🏘️", level: "HSK 3",
      grammar: "社会 / 责任 / 贡献",
      sentences: [
        { id: 1, chinese: "我们每个人都是社会的一部分。", pinyin: "Wǒmen měi gè rén dōu shì shèhuì de yī bùfèn.", vietnamese: "Mỗi chúng ta đều là một phần của xã hội.", english: "Each of us is a part of society." },
        { id: 2, chinese: "志愿者工作对社会很有价值。", pinyin: "Zhìyuànzhě gōngzuò duì shèhuì hěn yǒu jiàzhí.", vietnamese: "Công việc tình nguyện rất có giá trị cho xã hội.", english: "Volunteer work is very valuable to society." },
        { id: 3, chinese: "社区应该互相帮助。", pinyin: "Shèqū yīnggāi hùxiāng bāngzhù.", vietnamese: "Cộng đồng nên giúp đỡ lẫn nhau.", english: "Communities should help each other." },
        { id: 4, chinese: "他们在社区做了很多贡献。", pinyin: "Tāmen zài shèqū zuò le hěn duō gòngxiàn.", vietnamese: "Họ đã đóng góp rất nhiều cho cộng đồng.", english: "They have made many contributions to the community." },
        { id: 5, chinese: "公民有权利也有义务。", pinyin: "Gōngmín yǒu quánlì yě yǒu yìwù.", vietnamese: "Công dân có quyền lợi và cũng có nghĩa vụ.", english: "Citizens have both rights and obligations." },
        { id: 6, chinese: "社会的进步需要大家共同努力。", pinyin: "Shèhuì de jìnbù xūyào dàjiā gòngtóng nǔlì.", vietnamese: "Tiến bộ của xã hội cần sự nỗ lực chung của mọi người.", english: "Social progress requires everyone's collective effort." }
      ]
    },
    {
      id: "L42", lesson: 42, topic: "Thể hiện ý kiến", topicEn: "Expressing Opinions", icon: "💬", level: "HSK 3",
      grammar: "我认为 / 我觉得 / 对……有看法",
      sentences: [
        { id: 1, chinese: "你对这个问题有什么看法？", pinyin: "Nǐ duì zhège wèntí yǒu shénme kànfǎ?", vietnamese: "Bạn có ý kiến gì về vấn đề này?", english: "What is your opinion on this issue?" },
        { id: 2, chinese: "我认为这个方案不可行。", pinyin: "Wǒ rènwéi zhège fāng'àn bù kěxíng.", vietnamese: "Tôi cho rằng phương án này không khả thi.", english: "I think this plan is not feasible." },
        { id: 3, chinese: "我同意你的看法。", pinyin: "Wǒ tóngyì nǐ de kànfǎ.", vietnamese: "Tôi đồng ý với quan điểm của bạn.", english: "I agree with your view." },
        { id: 4, chinese: "我不太赞成这种做法。", pinyin: "Wǒ bù tài zànchéng zhè zhǒng zuòfǎ.", vietnamese: "Tôi không hoàn toàn tán thành cách làm này.", english: "I don't quite agree with this approach." },
        { id: 5, chinese: "从我的角度来看，这很重要。", pinyin: "Cóng wǒ de jiǎodù lái kàn, zhè hěn zhòngyào.", vietnamese: "Từ góc độ của tôi, điều này rất quan trọng.", english: "From my perspective, this is very important." },
        { id: 6, chinese: "我们可以听听不同的意见。", pinyin: "Wǒmen kěyǐ tīngtīng bùtóng de yìjiàn.", vietnamese: "Chúng ta có thể nghe các ý kiến khác nhau.", english: "We can listen to different opinions." }
      ]
    },
    {
      id: "L43", lesson: 43, topic: "Sức khỏe và lối sống", topicEn: "Health & Lifestyle", icon: "🧘", level: "HSK 3",
      grammar: "健康生活 / 饮食均衡 / 压力",
      sentences: [
        { id: 1, chinese: "保持健康的生活方式很重要。", pinyin: "Bǎochí jiànkāng de shēnghuó fāngshì hěn zhòngyào.", vietnamese: "Duy trì lối sống lành mạnh rất quan trọng.", english: "Maintaining a healthy lifestyle is very important." },
        { id: 2, chinese: "均衡饮食对健康很有好处。", pinyin: "Jūnhéng yǐnshí duì jiànkāng hěn yǒu hǎochù.", vietnamese: "Ăn uống cân bằng rất tốt cho sức khỏe.", english: "A balanced diet is very beneficial for health." },
        { id: 3, chinese: "现代人的生活压力很大。", pinyin: "Xiàndài rén de shēnghuó yālì hěn dà.", vietnamese: "Người hiện đại chịu rất nhiều áp lực cuộc sống.", english: "Modern people face a lot of life pressure." },
        { id: 4, chinese: "你怎么缓解工作压力？", pinyin: "Nǐ zěnme huǎnjiě gōngzuò yālì?", vietnamese: "Bạn làm thế nào để giảm bớt áp lực công việc?", english: "How do you relieve work stress?" },
        { id: 5, chinese: "冥想和瑜伽对减压很有效。", pinyin: "Míngxiǎng hé yújiā duì jiǎn yā hěn yǒuxiào.", vietnamese: "Thiền định và yoga rất hiệu quả để giảm stress.", english: "Meditation and yoga are very effective for stress relief." },
        { id: 6, chinese: "睡眠不足会影响健康。", pinyin: "Shuìmián bùzú huì yǐngxiǎng jiànkāng.", vietnamese: "Ngủ không đủ giấc sẽ ảnh hưởng đến sức khỏe.", english: "Insufficient sleep can affect health." }
      ]
    },
    {
      id: "L44", lesson: 44, topic: "Phương tiện truyền thông", topicEn: "Media & Communication", icon: "📰", level: "HSK 3",
      grammar: "新闻 / 媒体 / 信息",
      sentences: [
        { id: 1, chinese: "你平时通过什么方式获取新闻？", pinyin: "Nǐ píngshí tōngguò shénme fāngshì huòqǔ xīnwén?", vietnamese: "Bạn thường lấy tin tức qua phương tiện nào?", english: "How do you usually get news?" },
        { id: 2, chinese: "我喜欢看网络新闻。", pinyin: "Wǒ xǐhuān kàn wǎngluò xīnwén.", vietnamese: "Tôi thích đọc tin tức trực tuyến.", english: "I like reading online news." },
        { id: 3, chinese: "社交媒体改变了信息传播方式。", pinyin: "Shèjiāo méitǐ gǎibiàn le xìnxī chuánbō fāngshì.", vietnamese: "Mạng xã hội đã thay đổi cách truyền thông tin.", english: "Social media has changed the way information spreads." },
        { id: 4, chinese: "我们需要辨别真假信息。", pinyin: "Wǒmen xūyào biànbié zhēnjiǎ xìnxī.", vietnamese: "Chúng ta cần phân biệt thông tin thật giả.", english: "We need to distinguish between true and false information." },
        { id: 5, chinese: "新闻自由是民主社会的基础。", pinyin: "Xīnwén zìyóu shì mínzhǔ shèhuì de jīchǔ.", vietnamese: "Tự do báo chí là nền tảng của xã hội dân chủ.", english: "Freedom of the press is the foundation of a democratic society." },
        { id: 6, chinese: "你如何提高信息素养？", pinyin: "Nǐ rúhé tígāo xìnxī sùyǎng?", vietnamese: "Bạn làm thế nào để nâng cao khả năng xử lý thông tin?", english: "How do you improve your information literacy?" }
      ]
    },
    {
      id: "L45", lesson: 45, topic: "Tranh luận và thuyết phục", topicEn: "Debate & Persuasion", icon: "🎤", level: "HSK 3",
      grammar: "辩论 / 说服 / 论点论据",
      sentences: [
        { id: 1, chinese: "你能解释一下你的理由吗？", pinyin: "Nǐ néng jiěshì yīxià nǐ de lǐyóu ma?", vietnamese: "Bạn có thể giải thích lý do của bạn không?", english: "Can you explain your reasons?" },
        { id: 2, chinese: "我有充分的理由支持这个观点。", pinyin: "Wǒ yǒu chōngfèn de lǐyóu zhīchí zhège guāndiǎn.", vietnamese: "Tôi có đầy đủ lý do để ủng hộ quan điểm này.", english: "I have sufficient reasons to support this viewpoint." },
        { id: 3, chinese: "你的例子很有说服力。", pinyin: "Nǐ de lìzi hěn yǒu shuōfúlì.", vietnamese: "Ví dụ của bạn rất có sức thuyết phục.", english: "Your examples are very persuasive." },
        { id: 4, chinese: "但是我们也要考虑另一方面。", pinyin: "Dànshì wǒmen yě yào kǎolǜ lìng yī fāngmiàn.", vietnamese: "Nhưng chúng ta cũng phải xem xét mặt khác.", english: "But we also need to consider the other side." },
        { id: 5, chinese: "我的结论是……", pinyin: "Wǒ de jiélùn shì……", vietnamese: "Kết luận của tôi là…", english: "My conclusion is…" },
        { id: 6, chinese: "我们需要用事实说话。", pinyin: "Wǒmen xūyào yòng shìshí shuōhuà.", vietnamese: "Chúng ta cần để sự thật nói lên tất cả.", english: "We need to let the facts speak for themselves." }
      ]
    },
    {
      id: "L46", lesson: 46, topic: "Lịch sử và địa lý Trung Quốc", topicEn: "Chinese History & Geography", icon: "🏯", level: "HSK 3",
      grammar: "历史 / 地理 / 文明",
      sentences: [
        { id: 1, chinese: "中国有五千年的历史。", pinyin: "Zhōngguó yǒu wǔqiān nián de lìshǐ.", vietnamese: "Trung Quốc có năm nghìn năm lịch sử.", english: "China has five thousand years of history." },
        { id: 2, chinese: "长城是中国的标志性建筑。", pinyin: "Chángchéng shì Zhōngguó de biāozhìxìng jiànzhú.", vietnamese: "Vạn Lý Trường Thành là công trình biểu tượng của Trung Quốc.", english: "The Great Wall is China's iconic landmark." },
        { id: 3, chinese: "中国是世界上人口最多的国家。", pinyin: "Zhōngguó shì shìjiè shàng rénkǒu zuì duō de guójiā.", vietnamese: "Trung Quốc là quốc gia đông dân nhất thế giới.", english: "China is the most populous country in the world." },
        { id: 4, chinese: "黄河被称为中华民族的母亲河。", pinyin: "Huánghé bèi chēng wéi Zhōnghuá mínzú de mǔqīn hé.", vietnamese: "Hoàng Hà được gọi là con sông mẹ của dân tộc Trung Hoa.", english: "The Yellow River is called the mother river of the Chinese nation." },
        { id: 5, chinese: "中国的四大发明影响了全世界。", pinyin: "Zhōngguó de sì dà fāmíng yǐngxiǎng le quán shìjiè.", vietnamese: "Bốn phát minh vĩ đại của Trung Quốc đã ảnh hưởng đến cả thế giới.", english: "China's four great inventions have influenced the whole world." },
        { id: 6, chinese: "丝绸之路促进了东西方文化交流。", pinyin: "Sīchóu zhī lù cùjìn le dōng xīfāng wénhuà jiāoliú.", vietnamese: "Con đường tơ lụa đã thúc đẩy giao lưu văn hóa Đông-Tây.", english: "The Silk Road promoted cultural exchange between East and West." }
      ]
    },
    {
      id: "L47", lesson: 47, topic: "Văn học và thơ ca", topicEn: "Literature & Poetry", icon: "📜", level: "HSK 3",
      grammar: "文学 / 诗歌 / 名著",
      sentences: [
        { id: 1, chinese: "你喜欢读中国文学作品吗？", pinyin: "Nǐ xǐhuān dú Zhōngguó wénxué zuòpǐn ma?", vietnamese: "Bạn có thích đọc tác phẩm văn học Trung Quốc không?", english: "Do you like reading Chinese literary works?" },
        { id: 2, chinese: "《红楼梦》是中国四大名著之一。", pinyin: "《Hónglóumèng》 shì Zhōngguó sì dà míngzhù zhī yī.", vietnamese: "'Hồng Lâu Mộng' là một trong tứ đại danh tác của Trung Quốc.", english: "'Dream of the Red Chamber' is one of China's four great classic novels." },
        { id: 3, chinese: "李白是唐朝著名的诗人。", pinyin: "Lǐ Bái shì Tángcháo zhùmíng de shīrén.", vietnamese: "Lý Bạch là nhà thơ nổi tiếng thời nhà Đường.", english: "Li Bai is a famous poet of the Tang Dynasty." },
        { id: 4, chinese: "这首诗表达了作者对故乡的思念。", pinyin: "Zhè shǒu shī biǎodá le zuòzhě duì gùxiāng de sīniàn.", vietnamese: "Bài thơ này thể hiện nỗi nhớ quê hương của tác giả.", english: "This poem expresses the author's longing for their hometown." },
        { id: 5, chinese: "阅读文学作品可以提高语言能力。", pinyin: "Yuèdú wénxué zuòpǐn kěyǐ tígāo yǔyán nénglì.", vietnamese: "Đọc tác phẩm văn học có thể nâng cao năng lực ngôn ngữ.", english: "Reading literary works can improve language ability." },
        { id: 6, chinese: "每一部名著都有其深刻的内涵。", pinyin: "Měi yī bù míngzhù dōu yǒu qí shēnkè de nèihán.", vietnamese: "Mỗi tác phẩm kinh điển đều có nội hàm sâu sắc riêng.", english: "Every classic work has its own profound meaning." }
      ]
    },
    {
      id: "L48", lesson: 48, topic: "Vấn đề xã hội", topicEn: "Social Issues", icon: "⚖️", level: "HSK 3",
      grammar: "问题 / 解决 / 影响",
      sentences: [
        { id: 1, chinese: "城市化带来了很多问题。", pinyin: "Chéngshìhuà dài lái le hěn duō wèntí.", vietnamese: "Đô thị hóa mang lại rất nhiều vấn đề.", english: "Urbanization has brought many problems." },
        { id: 2, chinese: "贫富差距是一个全球性问题。", pinyin: "Pínfù chājù shì yī gè quánqiúxìng wèntí.", vietnamese: "Khoảng cách giàu nghèo là một vấn đề toàn cầu.", english: "The gap between rich and poor is a global issue." },
        { id: 3, chinese: "老龄化社会对国家是个挑战。", pinyin: "Lǎolínghuà shèhuì duì guójiā shì gè tiǎozhàn.", vietnamese: "Xã hội già hóa là một thách thức với đất nước.", english: "An aging society is a challenge for the country." },
        { id: 4, chinese: "教育是解决很多问题的关键。", pinyin: "Jiàoyù shì jiějué hěn duō wèntí de guānjiàn.", vietnamese: "Giáo dục là chìa khóa để giải quyết nhiều vấn đề.", english: "Education is the key to solving many problems." },
        { id: 5, chinese: "我们需要关注弱势群体。", pinyin: "Wǒmen xūyào guānzhù ruòshì qúntǐ.", vietnamese: "Chúng ta cần quan tâm đến các nhóm yếu thế.", english: "We need to pay attention to vulnerable groups." },
        { id: 6, chinese: "社会问题需要大家共同解决。", pinyin: "Shèhuì wèntí xūyào dàjiā gòngtóng jiějué.", vietnamese: "Các vấn đề xã hội cần mọi người cùng nhau giải quyết.", english: "Social problems need to be solved collectively." }
      ]
    },
    {
      id: "L49", lesson: 49, topic: "Tốt nghiệp và sự nghiệp", topicEn: "Graduation & Career", icon: "🎓", level: "HSK 3",
      grammar: "毕业 / 求职 / 职业规划",
      sentences: [
        { id: 1, chinese: "你打算毕业后做什么？", pinyin: "Nǐ dǎsuàn bìyè hòu zuò shénme?", vietnamese: "Bạn dự định sau khi tốt nghiệp sẽ làm gì?", english: "What are you planning to do after graduation?" },
        { id: 2, chinese: "我想找一份和专业相关的工作。", pinyin: "Wǒ xiǎng zhǎo yī fèn hé zhuānyè xiāngguān de gōngzuò.", vietnamese: "Tôi muốn tìm một công việc liên quan đến chuyên ngành.", english: "I want to find a job related to my major." },
        { id: 3, chinese: "求职面试需要做好充分准备。", pinyin: "Qiúzhí miànshì xūyào zuò hǎo chōngfèn zhǔnbèi.", vietnamese: "Cần chuẩn bị kỹ lưỡng cho buổi phỏng vấn xin việc.", english: "Job interviews require thorough preparation." },
        { id: 4, chinese: "你有没有实习经验？", pinyin: "Nǐ yǒu méiyǒu shíxí jīngyàn?", vietnamese: "Bạn có kinh nghiệm thực tập không?", english: "Do you have any internship experience?" },
        { id: 5, chinese: "我认为工作经验比学历更重要。", pinyin: "Wǒ rènwéi gōngzuò jīngyàn bǐ xuélì gèng zhòngyào.", vietnamese: "Tôi cho rằng kinh nghiệm làm việc quan trọng hơn bằng cấp.", english: "I think work experience is more important than academic qualifications." },
        { id: 6, chinese: "做好职业规划对未来很有帮助。", pinyin: "Zuò hǎo zhíyè guīhuà duì wèilái hěn yǒu bāngzhù.", vietnamese: "Lập kế hoạch nghề nghiệp tốt rất có ích cho tương lai.", english: "Good career planning is very helpful for the future." }
      ]
    },
    {
      id: "L50", lesson: 50, topic: "Ước mơ và lý tưởng", topicEn: "Dreams & Ideals", icon: "⭐", level: "HSK 3",
      grammar: "梦想 / 理想 / 实现目标",
      sentences: [
        { id: 1, chinese: "你的梦想是什么？", pinyin: "Nǐ de mèngxiǎng shì shénme?", vietnamese: "Ước mơ của bạn là gì?", english: "What is your dream?" },
        { id: 2, chinese: "我的梦想是成为一名翻译家。", pinyin: "Wǒ de mèngxiǎng shì chéngwéi yī míng fānyìjiā.", vietnamese: "Ước mơ của tôi là trở thành một phiên dịch viên.", english: "My dream is to become a translator." },
        { id: 3, chinese: "努力就能实现梦想。", pinyin: "Nǔlì jiù néng shíxiàn mèngxiǎng.", vietnamese: "Nỗ lực sẽ giúp bạn hiện thực hóa ước mơ.", english: "Hard work can make dreams come true." },
        { id: 4, chinese: "永远不要放弃你的理想。", pinyin: "Yǒngyuǎn bù yào fàngqì nǐ de lǐxiǎng.", vietnamese: "Đừng bao giờ từ bỏ lý tưởng của bạn.", english: "Never give up on your ideals." },
        { id: 5, chinese: "每一个成功都来自坚持不懈的努力。", pinyin: "Měi yī gè chénggōng dōu lái zì jiānchí bù xiè de nǔlì.", vietnamese: "Mỗi thành công đều đến từ sự nỗ lực không ngừng.", english: "Every success comes from persistent and tireless effort." },
        { id: 6, chinese: "相信自己，你一定能做到！", pinyin: "Xiāngxìn zìjǐ, nǐ yīdìng néng zuò dào!", vietnamese: "Hãy tin vào bản thân, bạn nhất định làm được!", english: "Believe in yourself, you can definitely do it!" }
      ]
    }
  ],

  /* =============================================
     WRITING – chữ Hán theo cấp độ HSK
     ============================================= */
  writing: {
    hsk1: [
      // Số đếm
      { char: "一", pinyin: "yī", meaning: "một", strokes: 1, lesson: 4 },
      { char: "二", pinyin: "èr", meaning: "hai", strokes: 2, lesson: 4 },
      { char: "三", pinyin: "sān", meaning: "ba", strokes: 3, lesson: 4 },
      { char: "四", pinyin: "sì", meaning: "bốn", strokes: 5, lesson: 4 },
      { char: "五", pinyin: "wǔ", meaning: "năm", strokes: 4, lesson: 4 },
      { char: "六", pinyin: "liù", meaning: "sáu", strokes: 4, lesson: 4 },
      { char: "七", pinyin: "qī", meaning: "bảy", strokes: 2, lesson: 4 },
      { char: "八", pinyin: "bā", meaning: "tám", strokes: 2, lesson: 4 },
      { char: "九", pinyin: "jiǔ", meaning: "chín", strokes: 2, lesson: 4 },
      { char: "十", pinyin: "shí", meaning: "mười", strokes: 2, lesson: 4 },
      // Đại từ và cơ bản
      { char: "你", pinyin: "nǐ", meaning: "bạn (ngôi 2)", strokes: 7, lesson: 1 },
      { char: "我", pinyin: "wǒ", meaning: "tôi (ngôi 1)", strokes: 7, lesson: 1 },
      { char: "他", pinyin: "tā", meaning: "anh ấy", strokes: 5, lesson: 3 },
      { char: "她", pinyin: "tā", meaning: "cô ấy", strokes: 6, lesson: 3 },
      { char: "好", pinyin: "hǎo", meaning: "tốt, khỏe", strokes: 6, lesson: 1 },
      { char: "是", pinyin: "shì", meaning: "là (động từ)", strokes: 9, lesson: 2 },
      { char: "不", pinyin: "bù", meaning: "không (phủ định)", strokes: 4, lesson: 1 },
      { char: "有", pinyin: "yǒu", meaning: "có", strokes: 6, lesson: 3 },
      { char: "人", pinyin: "rén", meaning: "người", strokes: 2, lesson: 2 },
      { char: "大", pinyin: "dà", meaning: "to, lớn", strokes: 3, lesson: 7 },
      { char: "小", pinyin: "xiǎo", meaning: "nhỏ, bé", strokes: 3, lesson: 7 },
      { char: "中", pinyin: "zhōng", meaning: "giữa, Trung Hoa", strokes: 4, lesson: 6 },
      { char: "国", pinyin: "guó", meaning: "đất nước", strokes: 8, lesson: 2 },
      { char: "学", pinyin: "xué", meaning: "học", strokes: 8, lesson: 6 },
      { char: "说", pinyin: "shuō", meaning: "nói", strokes: 9, lesson: 6 },
      { char: "来", pinyin: "lái", meaning: "đến, lại", strokes: 7, lesson: 9 },
      { char: "去", pinyin: "qù", meaning: "đi, rời khỏi", strokes: 5, lesson: 9 },
      { char: "上", pinyin: "shàng", meaning: "trên, lên", strokes: 3, lesson: 9 },
      { char: "日", pinyin: "rì", meaning: "mặt trời, ngày", strokes: 4, lesson: 4 },
      { char: "月", pinyin: "yuè", meaning: "mặt trăng, tháng", strokes: 4, lesson: 4 }
    ],
    hsk2: [
      { char: "吃", pinyin: "chī", meaning: "ăn", strokes: 6, lesson: 8 },
      { char: "喝", pinyin: "hē", meaning: "uống", strokes: 12, lesson: 8 },
      { char: "看", pinyin: "kàn", meaning: "xem, nhìn", strokes: 9, lesson: 12 },
      { char: "听", pinyin: "tīng", meaning: "nghe", strokes: 7, lesson: 12 },
      { char: "写", pinyin: "xiě", meaning: "viết", strokes: 5, lesson: 6 },
      { char: "读", pinyin: "dú", meaning: "đọc", strokes: 10, lesson: 12 },
      { char: "买", pinyin: "mǎi", meaning: "mua", strokes: 6, lesson: 13 },
      { char: "钱", pinyin: "qián", meaning: "tiền", strokes: 10, lesson: 13 },
      { char: "时", pinyin: "shí", meaning: "thời gian", strokes: 7, lesson: 5 },
      { char: "年", pinyin: "nián", meaning: "năm", strokes: 6, lesson: 4 },
      { char: "家", pinyin: "jiā", meaning: "nhà, gia đình", strokes: 10, lesson: 3 },
      { char: "朋", pinyin: "péng", meaning: "bạn bè", strokes: 8, lesson: 30 },
      { char: "友", pinyin: "yǒu", meaning: "bạn bè", strokes: 4, lesson: 30 },
      { char: "老", pinyin: "lǎo", meaning: "già, lâu", strokes: 6, lesson: 6 },
      { char: "师", pinyin: "shī", meaning: "thầy, cô giáo", strokes: 6, lesson: 6 },
      { char: "工", pinyin: "gōng", meaning: "công việc", strokes: 3, lesson: 16 },
      { char: "作", pinyin: "zuò", meaning: "làm, tác phẩm", strokes: 7, lesson: 16 },
      { char: "车", pinyin: "chē", meaning: "xe", strokes: 4, lesson: 14 },
      { char: "门", pinyin: "mén", meaning: "cửa", strokes: 3, lesson: 18 },
      { char: "电", pinyin: "diàn", meaning: "điện", strokes: 5, lesson: 15 },
      { char: "话", pinyin: "huà", meaning: "lời nói, điện thoại", strokes: 8, lesson: 15 },
      { char: "高", pinyin: "gāo", meaning: "cao", strokes: 10, lesson: 22 },
      { char: "快", pinyin: "kuài", meaning: "nhanh", strokes: 7, lesson: 14 },
      { char: "热", pinyin: "rè", meaning: "nóng", strokes: 10, lesson: 11 },
      { char: "冷", pinyin: "lěng", meaning: "lạnh", strokes: 7, lesson: 11 }
    ],
    hsk3: [
      { char: "爱", pinyin: "ài", meaning: "yêu, tình yêu", strokes: 10, lesson: 36 },
      { char: "美", pinyin: "měi", meaning: "đẹp", strokes: 9, lesson: 38 },
      { char: "明", pinyin: "míng", meaning: "sáng, minh", strokes: 8, lesson: 46 },
      { char: "白", pinyin: "bái", meaning: "trắng, hiểu", strokes: 5, lesson: 34 },
      { char: "新", pinyin: "xīn", meaning: "mới", strokes: 13, lesson: 31 },
      { char: "多", pinyin: "duō", meaning: "nhiều", strokes: 6, lesson: 41 },
      { char: "少", pinyin: "shǎo", meaning: "ít", strokes: 4, lesson: 41 },
      { char: "长", pinyin: "cháng", meaning: "dài", strokes: 4, lesson: 46 },
      { char: "开", pinyin: "kāi", meaning: "mở", strokes: 4, lesson: 31 },
      { char: "关", pinyin: "guān", meaning: "đóng, liên quan", strokes: 6, lesson: 31 },
      { char: "问", pinyin: "wèn", meaning: "hỏi", strokes: 6, lesson: 42 },
      { char: "因", pinyin: "yīn", meaning: "vì, do", strokes: 6, lesson: 25 },
      { char: "为", pinyin: "wéi", meaning: "vì, là", strokes: 4, lesson: 25 },
      { char: "事", pinyin: "shì", meaning: "việc, sự việc", strokes: 8, lesson: 42 },
      { char: "发", pinyin: "fā", meaning: "phát ra, gửi", strokes: 5, lesson: 31 },
      { char: "生", pinyin: "shēng", meaning: "sinh ra, học sinh", strokes: 5, lesson: 6 },
      { char: "活", pinyin: "huó", meaning: "sống, cuộc sống", strokes: 9, lesson: 43 },
      { char: "思", pinyin: "sī", meaning: "suy nghĩ, nhớ", strokes: 9, lesson: 42 },
      { char: "想", pinyin: "xiǎng", meaning: "nghĩ, muốn", strokes: 13, lesson: 42 },
      { char: "法", pinyin: "fǎ", meaning: "phương pháp, luật", strokes: 8, lesson: 33 }
    ]
  }
};
