/* ============================================
   DIALOGUES.JS – Dữ liệu hội thoại cho cả 3 giáo trình
   HSK 1: L01-L15 | HSK 2: L16-L30 | HSK 3: L31-L50
   Mỗi hội thoại có 2 nhân vật và 6-10 lượt thoại
   ============================================ */

(function injectDialogues() {
  'use strict';

  /* ============================================================
     HSK 1 – Các hội thoại cơ bản, từ vựng đơn giản
     ============================================================ */
  const dialoguesHSK1 = {

    /* L01 – Chào hỏi cơ bản */
    L01: [
      {
        title: 'Gặp nhau lần đầu', characters: ['Minh', 'Lan'],
        lines: [
          { speaker: 0, chinese: '你好！', pinyin: 'Nǐ hǎo!', vietnamese: 'Xin chào!' },
          { speaker: 1, chinese: '你好！你叫什么名字？', pinyin: 'Nǐ hǎo! Nǐ jiào shénme míngzi?', vietnamese: 'Xin chào! Bạn tên là gì?' },
          { speaker: 0, chinese: '我叫李明。你呢？', pinyin: 'Wǒ jiào Lǐ Míng. Nǐ ne?', vietnamese: 'Tôi tên là Lý Minh. Còn bạn?' },
          { speaker: 1, chinese: '我叫小兰。很高兴认识你！', pinyin: 'Wǒ jiào Xiǎo Lán. Hěn gāoxìng rènshi nǐ!', vietnamese: 'Tôi tên là Tiểu Lan. Rất vui được gặp bạn!' },
          { speaker: 0, chinese: '我也很高兴认识你！你好吗？', pinyin: 'Wǒ yě hěn gāoxìng rènshi nǐ! Nǐ hǎo ma?', vietnamese: 'Tôi cũng rất vui! Bạn có khỏe không?' },
          { speaker: 1, chinese: '我很好，谢谢！再见！', pinyin: 'Wǒ hěn hǎo, xièxie! Zàijiàn!', vietnamese: 'Tôi rất khỏe, cảm ơn! Tạm biệt!' },
          { speaker: 0, chinese: '再见！', pinyin: 'Zàijiàn!', vietnamese: 'Tạm biệt!' }
        ]
      },
      {
        title: 'Chào bạn mới', characters: ['David', 'Mary'],
        lines: [
          { speaker: 0, chinese: '同学，你好！', pinyin: 'Tóngxué, nǐ hǎo!', vietnamese: 'Chào bạn!' },
          { speaker: 1, chinese: '您好！你是美国人吗？', pinyin: 'Nín hǎo! Nǐ shì Měiguó rén ma?', vietnamese: 'Chào anh! Anh là người Mỹ à?' },
          { speaker: 0, chinese: '不是，我是英国人。你呢？', pinyin: 'Bú shì, wǒ shì Yīngguó rén. Nǐ ne?', vietnamese: 'Không, tôi là người Anh. Còn bạn?' },
          { speaker: 1, chinese: '我是美国人。我叫玛丽。', pinyin: 'Wǒ shì Měiguó rén. Wǒ jiào Mǎlì.', vietnamese: 'Tôi là người Mỹ. Tôi tên là Mary.' },
          { speaker: 0, chinese: '很高兴认识你。', pinyin: 'Hěn gāoxìng rènshi nǐ.', vietnamese: 'Rất vui được gặp bạn.' },
          { speaker: 1, chinese: '认识你我也很高兴！', pinyin: 'Rènshi nǐ wǒ yě hěn gāoxìng!', vietnamese: 'Rất vui được làm quen với anh!' }
        ]
      },
      {
        title: 'Gặp giáo viên', characters: ['Học sinh', 'Giáo viên'],
        lines: [
          { speaker: 0, chinese: '老师好！', pinyin: 'Lǎoshī hǎo!', vietnamese: 'Chào thầy cô!' },
          { speaker: 1, chinese: '你好！你叫什么名字？', pinyin: 'Nǐ hǎo! Nǐ jiào shénme míngzi?', vietnamese: 'Chào em! Em tên là gì?' },
          { speaker: 0, chinese: '我叫李月。我是中国学生。', pinyin: 'Wǒ jiào Lǐ Yuè. Wǒ shì Zhōngguó xuésheng.', vietnamese: 'Em tên là Lý Nguyệt. Em là học sinh Trung Quốc.' },
          { speaker: 1, chinese: '李月，你好！', pinyin: 'Lǐ Yuè, nǐ hǎo!', vietnamese: 'Lý Nguyệt, chào em!' },
          { speaker: 0, chinese: '老师，再见！', pinyin: 'Lǎoshī, zàijiàn!', vietnamese: 'Tạm biệt thầy cô!' },
          { speaker: 1, chinese: '再见！', pinyin: 'Zàijiàn!', vietnamese: 'Tạm biệt!' }
        ]
      }
    ],

    /* L02 – Tên và danh tính */
    L02: [
      {
        title: 'Tự giới thiệu bản thân', characters: ['An', 'Hoa'],
        lines: [
          { speaker: 0, chinese: '你好！我叫陈安。', pinyin: 'Nǐ hǎo! Wǒ jiào Chén Ān.', vietnamese: 'Xin chào! Tôi tên là Trần An.' },
          { speaker: 1, chinese: '你好！我是王花。你是哪国人？', pinyin: 'Nǐ hǎo! Wǒ shì Wáng Huā. Nǐ shì nǎ guó rén?', vietnamese: 'Xin chào! Tôi là Vương Hoa. Bạn là người nước nào?' },
          { speaker: 0, chinese: '我是越南人。你呢？', pinyin: 'Wǒ shì Yuènán rén. Nǐ ne?', vietnamese: 'Tôi là người Việt Nam. Còn bạn?' },
          { speaker: 1, chinese: '我是中国人。这是我的名片。', pinyin: 'Wǒ shì Zhōngguó rén. Zhè shì wǒ de míngpiàn.', vietnamese: 'Tôi là người Trung Quốc. Đây là danh thiếp của tôi.' },
          { speaker: 0, chinese: '谢谢！这是我的名片。', pinyin: 'Xièxie! Zhè shì wǒ de míngpiàn.', vietnamese: 'Cảm ơn! Đây là danh thiếp của tôi.' },
          { speaker: 1, chinese: '很高兴认识你，陈先生！', pinyin: 'Hěn gāoxìng rènshi nǐ, Chén xiānsheng!', vietnamese: 'Rất vui được gặp bạn, anh Trần!' },
          { speaker: 0, chinese: '我也是！请多关照！', pinyin: 'Wǒ yě shì! Qǐng duō guānzhào!', vietnamese: 'Tôi cũng vậy! Mong được giúp đỡ!' }
        ]
      },
      {
        title: 'Bạn là học sinh phải không', characters: ['Lan', 'Hải'],
        lines: [
          { speaker: 0, chinese: '对不起，你是学生吗？', pinyin: 'Duìbùqǐ, nǐ shì xuésheng ma?', vietnamese: 'Xin lỗi, bạn có phải là học sinh không?' },
          { speaker: 1, chinese: '没关系。我是学生。你呢？', pinyin: 'Méi guānxi. Wǒ shì xuésheng. Nǐ ne?', vietnamese: 'Không sao. Tôi là học sinh. Còn bạn?' },
          { speaker: 0, chinese: '我不是学生，我是汉语老师。', pinyin: 'Wǒ bú shì xuésheng, wǒ shì Hànyǔ lǎoshī.', vietnamese: 'Tôi không phải học sinh, tôi là giáo viên tiếng Trung.' },
          { speaker: 1, chinese: '老师好！很高兴认识您。', pinyin: 'Lǎoshī hǎo! Hěn gāoxìng rènshi nín.', vietnamese: 'Chào cô ạ! Rất vui được biết cô.' },
          { speaker: 0, chinese: '谢谢你！你叫什么名字？', pinyin: 'Xièxiè nǐ! Nǐ jiào shénme míngzi?', vietnamese: 'Cảm ơn em! Em tên là gì?' },
          { speaker: 1, chinese: '我叫大卫。我是美国人。', pinyin: 'Wǒ jiào Dàwèi. Wǒ shì Měiguó rén.', vietnamese: 'Em tên là David. Em là người Mỹ.' }
        ]
      },
      {
        title: 'Lời cảm ơn', characters: ['Khách', 'Phục vụ'],
        lines: [
          { speaker: 0, chinese: '你好，这是你的茶。', pinyin: 'Nǐ hǎo, zhè shì nǐ de chá.', vietnamese: 'Chào bạn, đây là trà của bạn.' },
          { speaker: 1, chinese: '谢谢！', pinyin: 'Xièxiè!', vietnamese: 'Cảm ơn!' },
          { speaker: 0, chinese: '不客气！你也是越南人吗？', pinyin: 'Bú kèqì! Nǐ yě shì Yuènán rén ma?', vietnamese: 'Đừng khách sáo! Bạn cũng là người Việt Nam à?' },
          { speaker: 1, chinese: '对，我是越南人。你叫什么？', pinyin: 'Duì, wǒ shì Yuènán rén. Nǐ jiào shénme?', vietnamese: 'Đúng, tôi là người Việt Nam. Bạn tên gì?' },
          { speaker: 0, chinese: '我叫王方。', pinyin: 'Wǒ jiào Wáng Fāng.', vietnamese: 'Tôi tên Vương Phương.' },
          { speaker: 1, chinese: '好的，谢谢你！', pinyin: 'Hǎo de, xièxiè nǐ!', vietnamese: 'Tốt rồi, cảm ơn bạn!' }
        ]
      }
    ],

    /* L03 – Gia đình */
    L03: [
      {
        title: 'Nói về gia đình', characters: ['Nam', 'Yuki'],
        lines: [
          { speaker: 0, chinese: '你家有几口人？', pinyin: 'Nǐ jiā yǒu jǐ kǒu rén?', vietnamese: 'Gia đình bạn có mấy người?' },
          { speaker: 1, chinese: '我家有四口人。爸爸、妈妈、妹妹和我。', pinyin: 'Wǒ jiā yǒu sì kǒu rén. Bàba, māma, mèimei hé wǒ.', vietnamese: 'Gia đình tôi có bốn người. Bố, mẹ, em gái và tôi.' },
          { speaker: 0, chinese: '你有哥哥吗？', pinyin: 'Nǐ yǒu gēgē ma?', vietnamese: 'Bạn có anh trai không?' },
          { speaker: 1, chinese: '没有。我是家里最大的。你呢？', pinyin: 'Méiyǒu. Wǒ shì jiālǐ zuì dà de. Nǐ ne?', vietnamese: 'Không. Tôi là người lớn nhất trong nhà. Còn bạn?' },
          { speaker: 0, chinese: '我家有三口人。我有一个弟弟。', pinyin: 'Wǒ jiā yǒu sān kǒu rén. Wǒ yǒu yī gè dìdi.', vietnamese: 'Gia đình tôi có ba người. Tôi có một em trai.' },
          { speaker: 1, chinese: '你爸爸做什么工作？', pinyin: 'Nǐ bàba zuò shénme gōngzuò?', vietnamese: 'Bố bạn làm nghề gì?' },
          { speaker: 0, chinese: '我爸爸是老师，我妈妈是医生。', pinyin: 'Wǒ bàba shì lǎoshī, wǒ māma shì yīshēng.', vietnamese: 'Bố tôi là giáo viên, mẹ tôi là bác sĩ.' },
          { speaker: 1, chinese: '你们家真好！', pinyin: 'Nǐmen jiā zhēn hǎo!', vietnamese: 'Gia đình bạn thật tuyệt!' }
        ]
      },
      {
        title: 'Hỏi về độ tuổi', characters: ['Hoa', 'Anh'],
        lines: [
          { speaker: 0, chinese: '你女儿今年几岁了？', pinyin: 'Nǐ nǚ\'ér jīnnián jǐ suì le?', vietnamese: 'Con gái bạn năm nay mấy tuổi rồi?' },
          { speaker: 1, chinese: '她今年四岁了。', pinyin: 'Tā jīnnián sì suì le.', vietnamese: 'Cháu năm nay bốn tuổi.' },
          { speaker: 0, chinese: '李老师多大了？', pinyin: 'Lǐ lǎoshī duō dà le?', vietnamese: 'Cô Lý bao nhiêu tuổi rồi?' },
          { speaker: 1, chinese: '她今年五十岁了。', pinyin: 'Tā jīnnián wǔshí suì le.', vietnamese: 'Cô ấy năm nay năm mươi tuổi.' },
          { speaker: 0, chinese: '她女儿呢？', pinyin: 'Tā nǚ\'ér ne?', vietnamese: 'Còn con gái cô ấy thì sao?' },
          { speaker: 1, chinese: '她女儿今年二十岁。', pinyin: 'Tā nǚ\'ér jīnnián èrshí suì.', vietnamese: 'Con gái cô ấy năm nay hai mươi tuổi.' }
        ]
      },
      {
        title: 'Người kia là ai', characters: ['A', 'B'],
        lines: [
          { speaker: 0, chinese: '那个人是谁？', pinyin: 'Nà gè rén shì shéi?', vietnamese: 'Người kia là ai vậy?' },
          { speaker: 1, chinese: '那是我爸爸。', pinyin: 'Nà shì wǒ bàba.', vietnamese: 'Đó là bố tôi.' },
          { speaker: 0, chinese: '你爸爸多大了？', pinyin: 'Nǐ bàba duō dà le?', vietnamese: 'Bố bạn bao nhiêu tuổi rồi?' },
          { speaker: 1, chinese: '他今年六十五岁了。', pinyin: 'Tā jīnnián liùshíwǔ suì le.', vietnamese: 'Ông ấy năm nay 65 tuổi.' },
          { speaker: 0, chinese: '他身体好吗？', pinyin: 'Tā shēntǐ hǎo ma?', vietnamese: 'Ông ấy khỏe không?' },
          { speaker: 1, chinese: '他身体很好，谢谢你。', pinyin: 'Tā shēntǐ hěn hǎo, xièxiè nǐ.', vietnamese: 'Ông ấy rất khỏe, cảm ơn bạn.' }
        ]
      }
    ],

    /* L04 – Số và ngày tháng */
    L04: [
      {
        title: 'Hỏi về ngày tháng', characters: ['Trang', 'Wei'],
        lines: [
          { speaker: 0, chinese: '今天几号？', pinyin: 'Jīntiān jǐ hào?', vietnamese: 'Hôm nay ngày mấy?' },
          { speaker: 1, chinese: '今天是五月二十号，星期三。', pinyin: 'Jīntiān shì Wǔyuè èrshí hào, xīngqīsān.', vietnamese: 'Hôm nay là ngày 20 tháng 5, thứ Tư.' },
          { speaker: 0, chinese: '哦！你下个月有什么计划？', pinyin: 'Ó! Nǐ xià gè yuè yǒu shénme jìhuà?', vietnamese: 'Ồ! Tháng sau bạn có kế hoạch gì không?' },
          { speaker: 1, chinese: '六月我要去北京旅行。你的生日是哪天？', pinyin: 'Liùyuè wǒ yào qù Běijīng lǚxíng. Nǐ de shēngrì shì nǎ tiān?', vietnamese: 'Tháng 6 tôi sẽ đi du lịch Bắc Kinh. Sinh nhật bạn là ngày nào?' },
          { speaker: 0, chinese: '我的生日是七月十五号。', pinyin: 'Wǒ de shēngrì shì Qīyuè shíwǔ hào.', vietnamese: 'Sinh nhật tôi là ngày 15 tháng 7.' },
          { speaker: 1, chinese: '那是下个星期六！我们一起庆祝吧！', pinyin: 'Nà shì xià gè xīngqīliù! Wǒmen yīqǐ qìngzhù ba!', vietnamese: 'Đó là thứ Bảy tuần sau! Chúng ta cùng kỷ niệm nhé!' },
          { speaker: 0, chinese: '谢谢你，太好了！', pinyin: 'Xièxie nǐ, tài hǎo le!', vietnamese: 'Cảm ơn bạn, thật tuyệt!' }
        ]
      },
      {
        title: 'Ngày mai là thứ mấy', characters: ['A', 'B'],
        lines: [
          { speaker: 0, chinese: '昨天是几月几号？', pinyin: 'Zuótiān shì jǐ yuè jǐ hào?', vietnamese: 'Hôm qua là ngày mấy tháng mấy?' },
          { speaker: 1, chinese: '昨天是八月三十一号，星期二。', pinyin: 'Zuótiān shì bāyuè sānshíyī hào, xīngqī\'èr.', vietnamese: 'Hôm qua là mùng 31 tháng 8, thứ Ba.' },
          { speaker: 0, chinese: '明天呢？', pinyin: 'Míngtiān ne?', vietnamese: 'Thế còn ngày mai?' },
          { speaker: 1, chinese: '明天是九月二号，星期四。', pinyin: 'Míngtiān shì jiǔyuè èr hào, xīngqīsì.', vietnamese: 'Ngày mai là mồng 2 tháng 9, thứ Năm.' },
          { speaker: 0, chinese: '明天星期四，你去学校吗？', pinyin: 'Míngtiān xīngqīsì, nǐ qù xuéxiào ma?', vietnamese: 'Mai thứ Năm, bạn đến trường không?' },
          { speaker: 1, chinese: '我去学校看书。', pinyin: 'Wǒ qù xuéxiào kàn shū.', vietnamese: 'Tôi đi đến trường đọc sách.' }
        ]
      },
      {
        title: 'Mua ly sữa', characters: ['Khách', 'Bán hàng'],
        lines: [
          { speaker: 0, chinese: '你好！这个杯子多少钱？', pinyin: 'Nǐ hǎo! Zhè ge bēizi duōshǎo qián?', vietnamese: 'Chào anh! Cái ly này bao nhiêu tiền?' },
          { speaker: 1, chinese: '二十八块。', pinyin: 'Èrshíbā kuài.', vietnamese: 'Hai mươi tám tệ.' },
          { speaker: 0, chinese: '那个呢？那个杯子多少钱？', pinyin: 'Nà ge ne? Nà ge bēizi duōshǎo qián?', vietnamese: 'Còn cái kia? Ly kia bao nhiêu tiền?' },
          { speaker: 1, chinese: '那个杯子十八块钱。', pinyin: 'Nà ge bēizi shíbā kuài qián.', vietnamese: 'Cái ly đó mười tám tệ.' },
          { speaker: 0, chinese: '好，我买那个杯子。', pinyin: 'Hǎo, wǒ mǎi nà ge bēizi.', vietnamese: 'Được, tôi mua cái ly đó.' },
          { speaker: 1, chinese: '好的，谢谢！', pinyin: 'Hǎo de, xièxiè!', vietnamese: 'Vâng ạ, cảm ơn!' }
        ]
      }
    ],

    /* L05 – Thời gian */
    L05: [
      {
        title: 'Hẹn giờ gặp nhau', characters: ['Long', 'Mei'],
        lines: [
          { speaker: 0, chinese: '现在几点？', pinyin: 'Xiànzài jǐ diǎn?', vietnamese: 'Bây giờ mấy giờ?' },
          { speaker: 1, chinese: '现在九点半。你几点上班？', pinyin: 'Xiànzài jiǔ diǎn bàn. Nǐ jǐ diǎn shàngbān?', vietnamese: 'Bây giờ là chín giờ rưỡi. Bạn đi làm mấy giờ?' },
          { speaker: 0, chinese: '我八点上班。今天我迟到了！', pinyin: 'Wǒ bā diǎn shàngbān. Jīntiān wǒ chídào le!', vietnamese: 'Tôi đi làm lúc 8 giờ. Hôm nay tôi đến muộn rồi!' },
          { speaker: 1, chinese: '哎呀！你快点去吧！下午我们几点见？', pinyin: 'Āiyā! Nǐ kuài diǎn qù ba! Xiàwǔ wǒmen jǐ diǎn jiàn?', vietnamese: 'Thôi! Bạn đi nhanh đi! Chiều chúng ta gặp nhau mấy giờ?' },
          { speaker: 0, chinese: '下午两点见可以吗？', pinyin: 'Xiàwǔ liǎng diǎn jiàn kěyǐ ma?', vietnamese: 'Gặp nhau lúc 2 giờ chiều được không?' },
          { speaker: 1, chinese: '可以！下午两点见！', pinyin: 'Kěyǐ! Xiàwǔ liǎng diǎn jiàn!', vietnamese: 'Được! 2 giờ chiều gặp nhau!' },
          { speaker: 0, chinese: '好的，再见！', pinyin: 'Hǎo de, zàijiàn!', vietnamese: 'Được rồi, tạm biệt!' }
        ]
      },
      {
        title: 'Khi nào bố về', characters: ['Con', 'Mẹ'],
        lines: [
          { speaker: 0, chinese: '妈妈，爸爸什么时候回家？', pinyin: 'Māma, bàba shénme shíhòu huí jiā?', vietnamese: 'Mẹ ơi, khi nào bố về nhà?' },
          { speaker: 1, chinese: '下午五点。', pinyin: 'Xiàwǔ wǔ diǎn.', vietnamese: 'Năm giờ chiều.' },
          { speaker: 0, chinese: '我们什么时候去看电影？', pinyin: 'Wǒmen shénme shíhòu qù kàn diànyǐng?', vietnamese: 'Chúng ta khi nào đi xem phim?' },
          { speaker: 1, chinese: '六点三十分。', pinyin: 'Liù diǎn sānshí fēn.', vietnamese: 'Sáu giờ ba mươi phút.' },
          { speaker: 0, chinese: '太好了！我很高兴！', pinyin: 'Tài hǎo le! Wǒ hěn gāoxìng!', vietnamese: 'Tuyệt quá! Con rất vui!' },
          { speaker: 1, chinese: '好，现在你去做作业吧。', pinyin: 'Hǎo, xiànzài nǐ qù zuò zuòyè ba.', vietnamese: 'Được rồi, bây giờ con đi làm bài tập đi.' }
        ]
      },
      {
        title: 'Ở nhà', characters: ['A', 'B'],
        lines: [
          { speaker: 0, chinese: '你在哪儿工作？', pinyin: 'Nǐ zài nǎr gōngzuò?', vietnamese: 'Bạn làm việc ở đâu?' },
          { speaker: 1, chinese: '我在学校工作。你呢？', pinyin: 'Wǒ zài xuéxiào gōngzuò. Nǐ ne?', vietnamese: 'Tôi làm việc ở trường học. Còn bạn?' },
          { speaker: 0, chinese: '我在医院工作。', pinyin: 'Wǒ zài yīyuàn gōngzuò.', vietnamese: 'Tôi làm ở bệnh viện.' },
          { speaker: 1, chinese: '你儿子在哪儿工作？', pinyin: 'Nǐ érzi zài nǎr gōngzuò?', vietnamese: 'Con trai bạn làm việc ở đâu?' },
          { speaker: 0, chinese: '我儿子在医院工作，他是医生。', pinyin: 'Wǒ érzi zài yīyuàn gōngzuò, tā shì yīshēng.', vietnamese: 'Con trai tôi làm việc ở bệnh viện, cậu ấy là bác sĩ.' },
          { speaker: 1, chinese: '真不错！', pinyin: 'Zhēn búcuò!', vietnamese: 'Thật tuyệt!' }
        ]
      }
    ],

    /* L06 – Phòng học và trường học */
    L06: [
      {
        title: 'Bạn biết nói tiếng Trung không?', characters: ['Giáo viên', 'Học sinh'],
        lines: [
          { speaker: 0, chinese: '你会说汉语吗？', pinyin: 'Nǐ huì shuō Hànyǔ ma?', vietnamese: 'Em biết nói tiếng Trung không?' },
          { speaker: 1, chinese: '我会说汉语。', pinyin: 'Wǒ huì shuō Hànyǔ.', vietnamese: 'Em biết nói tiếng Trung.' },
          { speaker: 0, chinese: '你妈妈会说汉语吗？', pinyin: 'Nǐ māma huì shuō Hànyǔ ma?', vietnamese: 'Mẹ em có biết nói tiếng Trung không?' },
          { speaker: 1, chinese: '她不会说。', pinyin: 'Tā bú huì shuō.', vietnamese: 'Mẹ em không biết nói.' },
          { speaker: 0, chinese: '很好！你朋友呢？', pinyin: 'Hěn hǎo! Nǐ péngyǒu ne?', vietnamese: 'Rất tốt! Còn bạn của em thì sao?' },
          { speaker: 1, chinese: '我的中国朋友会说，美国朋友不会说。', pinyin: 'Wǒ de Zhōngguó péngyǒu huì shuō, Měiguó péngyǒu bú huì shuō.', vietnamese: 'Bạn Trung Quốc của em biết nói, bạn Mỹ không biết nói.' }
        ]
      },
      {
        title: 'Món ăn Trung Quốc', characters: ['Minh', 'Hoa'],
        lines: [
          { speaker: 0, chinese: '中国菜好吃吗？', pinyin: 'Zhōngguó cài hǎochī ma?', vietnamese: 'Món ăn Trung Quốc ngon không?' },
          { speaker: 1, chinese: '中国菜很好吃！', pinyin: 'Zhōngguó cài hěn hǎochī!', vietnamese: 'Món ăn Trung Quốc rất ngon!' },
          { speaker: 0, chinese: '你会做中国菜吗？', pinyin: 'Nǐ huì zuò Zhōngguó cài ma?', vietnamese: 'Bạn biết làm món ăn Trung Quốc không?' },
          { speaker: 1, chinese: '我不会做，我会做越南菜。', pinyin: 'Wǒ bú huì zuò, wǒ huì zuò Yuènán cài.', vietnamese: 'Tôi không biết làm, tôi biết làm món ăn Việt Nam.' },
          { speaker: 0, chinese: '太好了！越南菜也好吃。', pinyin: 'Tài hǎo le! Yuènán cài yě hǎochī.', vietnamese: 'Tuyệt quá! Món Việt Nam cũng rất ngon.' },
          { speaker: 1, chinese: '谢谢你。', pinyin: 'Xièxiè nǐ.', vietnamese: 'Cảm ơn bạn.' }
        ]
      },
      {
        title: 'Viết chữ Hán', characters: ['Con', 'Bố'],
        lines: [
          { speaker: 0, chinese: '爸爸，你会写汉字吗？', pinyin: 'Bàba, nǐ huì xiě Hànzì ma?', vietnamese: 'Bố ơi, bố biết viết chữ Hán không?' },
          { speaker: 1, chinese: '我会写。你要写什么字？', pinyin: 'Wǒ huì xiě. Nǐ yào xiě shénme zì?', vietnamese: 'Bố biết viết. Con muốn viết chữ gì?' },
          { speaker: 0, chinese: '这个字怎么写？', pinyin: 'Zhè ge zì zěnme xiě?', vietnamese: 'Chữ này viết thế nào ạ?' },
          { speaker: 1, chinese: '对不起，这个字我会读，不会写。', pinyin: 'Duìbùqǐ, zhè ge zì wǒ huì dú, bú huì xiě.', vietnamese: 'Xin lỗi, chữ này bố biết đọc, không biết viết.' },
          { speaker: 0, chinese: '没关系，我去问老师。', pinyin: 'Méi guānxi, wǒ qù wèn lǎoshī.', vietnamese: 'Không sao ạ, con đi hỏi thầy.' },
          { speaker: 1, chinese: '好的。', pinyin: 'Hǎo de.', vietnamese: 'Được rồi.' }
        ]
      }
    ],

    /* L07 – Đồ vật và chỉ định */
    L07: [
      {
        title: 'Mượn đồ dùng học tập', characters: ['Bình', 'Châu'],
        lines: [
          { speaker: 0, chinese: '这是什么？', pinyin: 'Zhè shì shénme?', vietnamese: 'Đây là cái gì?' },
          { speaker: 1, chinese: '那是我的书。', pinyin: 'Nà shì wǒ de shū.', vietnamese: 'Đó là sách của tôi.' },
          { speaker: 0, chinese: '这是你的书吗？', pinyin: 'Zhè shì nǐ de shū ma?', vietnamese: 'Đây có phải sách của bạn không?' },
          { speaker: 1, chinese: '不是，这是老师的书。', pinyin: 'Bú shì, zhè shì lǎoshī de shū.', vietnamese: 'Không phải, đây là sách của cô giáo.' },
          { speaker: 0, chinese: '那本书多少钱？', pinyin: 'Nà běn shū duōshǎo qián?', vietnamese: 'Quyển sách kia bao nhiêu tiền?' },
          { speaker: 1, chinese: '那本书八十块。', pinyin: 'Nà běn shū bāshí kuài.', vietnamese: 'Quyển sách kia tám mươi tệ.' }
        ]
      },
      {
        title: 'Đây là ai', characters: ['Lan', 'Hải'],
        lines: [
          { speaker: 0, chinese: '照片上的这个人是谁？', pinyin: 'Zhàopiàn shàng de zhè ge rén shì shéi?', vietnamese: 'Người ở trên bức ảnh này là ai?' },
          { speaker: 1, chinese: '这是我哥哥。', pinyin: 'Zhè shì wǒ gēgē.', vietnamese: 'Đây là anh trai tôi.' },
          { speaker: 0, chinese: '他旁边那个大汉是谁？', pinyin: 'Tā pángbiān nà gè dà hàn shì shéi?', vietnamese: 'Người đàn ông to lớn bên cạnh anh ấy là ai?' },
          { speaker: 1, chinese: '那是他的好朋友。', pinyin: 'Nà shì tā de hǎo péngyǒu.', vietnamese: 'Đó là bạn tốt của anh ấy.' },
          { speaker: 0, chinese: '他朋友也是中国人吗？', pinyin: 'Tā péngyǒu yě shì Zhōngguó rén ma?', vietnamese: 'Bạn anh ấy cũng là người Trung Quốc à?' },
          { speaker: 1, chinese: '不是，他是美国人。', pinyin: 'Bú shì, tā shì Měiguó rén.', vietnamese: 'Không phải, anh ấy là người Mỹ.' }
        ]
      },
      {
        title: 'Đọc báo', characters: ['Mẹ', 'Con'],
        lines: [
          { speaker: 0, chinese: '你在看什么呢？', pinyin: 'Nǐ zài kàn shénme ne?', vietnamese: 'Con đang xem gì thế?' },
          { speaker: 1, chinese: '我在看报纸。', pinyin: 'Wǒ zài kàn bàozhǐ.', vietnamese: 'Con đang đọc báo.' },
          { speaker: 0, chinese: '今天的报纸在哪儿？', pinyin: 'Jīntiān de bàozhǐ zài nǎr?', vietnamese: 'Báo của ngày hôm nay ở đâu?' },
          { speaker: 1, chinese: '在桌子上。', pinyin: 'Zài zhuōzi shàng.', vietnamese: 'Ở trên bàn.' },
          { speaker: 0, chinese: '好，我看见了。谢谢！', pinyin: 'Hǎo, wǒ kànjiàn le. Xièxiè!', vietnamese: 'Được, mẹ thấy rồi. Cảm ơn con!' },
          { speaker: 1, chinese: '不客气！', pinyin: 'Bú kèqì!', vietnamese: 'Không có gì ạ!' }
        ]
      }
    ],

    /* L08 – Thức ăn và đồ uống */
    L08: [
      {
        title: 'Chọn món ăn', characters: ['Khách', 'Phục vụ'],
        lines: [
          { speaker: 0, chinese: '你好！你想吃什么？', pinyin: 'Nǐ hǎo! Nǐ xiǎng chī shénme?', vietnamese: 'Xin chào! Bạn muốn ăn gì?' },
          { speaker: 1, chinese: '我想吃米饭。', pinyin: 'Wǒ xiǎng chī mǐfàn.', vietnamese: 'Tôi muốn ăn cơm trắng.' },
          { speaker: 0, chinese: '你想喝什么？', pinyin: 'Nǐ xiǎng hē shénme?', vietnamese: 'Bạn muốn uống gì?' },
          { speaker: 1, chinese: '我想喝茶。', pinyin: 'Wǒ xiǎng hē chá.', vietnamese: 'Tôi muốn uống trà.' },
          { speaker: 0, chinese: '好的，请等一下。', pinyin: 'Hǎo de, qǐng děng yīxià.', vietnamese: 'Vâng, xin đợi một lát.' },
          { speaker: 1, chinese: '谢谢你！', pinyin: 'Xièxiè nǐ!', vietnamese: 'Cảm ơn bạn!' }
        ]
      },
      {
        title: 'Đi mua đồ', characters: ['Vợ', 'Chồng'],
        lines: [
          { speaker: 0, chinese: '下午你想做什么？', pinyin: 'Xiàwǔ nǐ xiǎng zuò shénme?', vietnamese: 'Buổi chiều anh muốn làm gì?' },
          { speaker: 1, chinese: '下午我想去商店。', pinyin: 'Xiàwǔ wǒ xiǎng qù shāngdiàn.', vietnamese: 'Buổi chiều anh muốn đi cửa hàng.' },
          { speaker: 0, chinese: '你想买什么？', pinyin: 'Nǐ xiǎng mǎi shénme?', vietnamese: 'Anh muốn mua gì?' },
          { speaker: 1, chinese: '我想买一个杯子。那个杯子怎么样？', pinyin: 'Wǒ xiǎng mǎi yī gè bēizi. Nà ge bēizi zěnmeyàng?', vietnamese: 'Anh muốn mua một cái ly. Cái ly kia thế nào?' },
          { speaker: 0, chinese: '那个杯子很漂亮。多少钱？', pinyin: 'Nà ge bēizi hěn piàoliang. Duōshǎo qián?', vietnamese: 'Cái ly kia rất đẹp. Bao nhiêu tiền?' },
          { speaker: 1, chinese: '十八块。', pinyin: 'Shíbā kuài.', vietnamese: 'Mười tám tệ.' }
        ]
      },
      {
        title: 'Táo và trái cây', characters: ['A', 'B'],
        lines: [
          { speaker: 0, chinese: '我们要买些什么水果？', pinyin: 'Wǒmen yào mǎi xiē shénme shuǐguǒ?', vietnamese: 'Chúng ta cần mua thêm hoa quả gì?' },
          { speaker: 1, chinese: '买些苹果吧。', pinyin: 'Mǎi xiē píngguǒ ba.', vietnamese: 'Mua thêm một chút táo đi.' },
          { speaker: 0, chinese: '苹果多少钱一斤？', pinyin: 'Píngguǒ duōshǎo qián yī jīn?', vietnamese: 'Táo bao nhiêu tiền một cân?' },
          { speaker: 1, chinese: '五块钱一斤。', pinyin: 'Wǔ kuài qián yī jīn.', vietnamese: 'Năm tệ một cân.' },
          { speaker: 0, chinese: '我们买三斤。还要买水吗？', pinyin: 'Wǒmen mǎi sān jīn. Hái yào mǎi shuǐ ma?', vietnamese: 'Chúng ta mua ba cân nhé. Có cần mua nước nữa không?' },
          { speaker: 1, chinese: '不买水了，家里有很多水。', pinyin: 'Bù mǎi shuǐ le, jiālǐ yǒu hěn duō shuǐ.', vietnamese: 'Không mua nước nữa, ở nhà nhiều nước lắm rồi.' }
        ]
      }
    ],

    /* L09 – Nơi chốn và vị trí */
    L09: [
      {
        title: 'Hỏi mèo con ở đâu', characters: ['Con', 'Mẹ'],
        lines: [
          { speaker: 0, chinese: '小猫在哪儿？', pinyin: 'Xiǎo māo zài nǎr?', vietnamese: 'Con mèo con ở đâu rồi?' },
          { speaker: 1, chinese: '小猫在那儿。', pinyin: 'Xiǎo māo zài nàr.', vietnamese: 'Mèo con ở đằng kia.' },
          { speaker: 0, chinese: '小狗在哪儿？', pinyin: 'Xiǎo gǒu zài nǎr?', vietnamese: 'Còn con chó con ở đâu?' },
          { speaker: 1, chinese: '小狗在椅子下面。', pinyin: 'Xiǎo gǒu zài yǐzi xiàmiàn.', vietnamese: 'Con chó con ở dưới ghế.' },
          { speaker: 0, chinese: '妈妈，小猫吃什么？', pinyin: 'Māma, xiǎo māo chī shénme?', vietnamese: 'Mẹ ơi, mèo con ăn gì thế?' },
          { speaker: 1, chinese: '小猫吃鱼。', pinyin: 'Xiǎo māo chī yú.', vietnamese: 'Mèo con ăn cá.' }
        ]
      },
      {
        title: 'Hỏi chỗ làm việc', characters: ['Lam', 'Bình'],
        lines: [
          { speaker: 0, chinese: '你在哪儿工作？', pinyin: 'Nǐ zài nǎr gōngzuò?', vietnamese: 'Bạn làm việc ở đâu vậy?' },
          { speaker: 1, chinese: '我在学校工作。', pinyin: 'Wǒ zài xuéxiào gōngzuò.', vietnamese: 'Tôi làm việc ở trường học.' },
          { speaker: 0, chinese: '你儿子在哪儿工作？', pinyin: 'Nǐ érzi zài nǎr gōngzuò?', vietnamese: 'Con trai bạn làm việc ở đâu?' },
          { speaker: 1, chinese: '我儿子在医院工作，他是医生。', pinyin: 'Wǒ érzi zài yīyuàn gōngzuò, tā shì yīshēng.', vietnamese: 'Con trai tôi làm việc ở bệnh viện, con tôi là bác sĩ.' },
          { speaker: 0, chinese: '你女儿也工作吗？', pinyin: 'Nǐ nǚ\'ér yě gōngzuò ma?', vietnamese: 'Con gái bạn cũng đi làm à?' },
          { speaker: 1, chinese: '没有，她还是学生。', pinyin: 'Méiyǒu, tā hái shì xuésheng.', vietnamese: 'Chưa, cháu nó vẫn là học sinh.' }
        ]
      },
      {
        title: 'Hỏi thầy giáo', characters: ['Học sinh', 'Đồng nghiệp'],
        lines: [
          { speaker: 0, chinese: '请问，李老师在哪儿？', pinyin: 'Qǐngwèn, Lǐ lǎoshī zài nǎr?', vietnamese: 'Xin hỏi, thầy Lý ở đâu ạ?' },
          { speaker: 1, chinese: '李老师在后面。', pinyin: 'Lǐ lǎoshī zài hòumiàn.', vietnamese: 'Thầy Lý ở phía sau.' },
          { speaker: 0, chinese: '李老师的家在哪儿？', pinyin: 'Lǐ lǎoshī de jiā zài nǎr?', vietnamese: 'Nhà của thầy Lý ở đâu ạ?' },
          { speaker: 1, chinese: '他的家在学校前面。', pinyin: 'Tā de jiā zài xuéxiào qiánmiàn.', vietnamese: 'Nhà thầy ấy ở phía trước trường học.' },
          { speaker: 0, chinese: '前面那是哪儿？', pinyin: 'Qiánmiàn nà shì nǎr?', vietnamese: 'Phía trước đó là đâu vậy?' },
          { speaker: 1, chinese: '那是火车站。', pinyin: 'Nà shì huǒchē zhàn.', vietnamese: 'Đó là ga xe lửa.' }
        ]
      }
    ],

    /* L10 – Hỏi thăm sức khỏe */
    L10: [
      {
        title: 'Chỗ này có người không', characters: ['A', 'B'],
        lines: [
          { speaker: 0, chinese: '桌子上有什么？', pinyin: 'Zhuōzi shàng yǒu shénme?', vietnamese: 'Trên bàn có cái gì?' },
          { speaker: 1, chinese: '桌子上有一个电脑和一本书。', pinyin: 'Zhuōzi shàng yǒu yī gè diànnǎo hé yī běn shū.', vietnamese: 'Trên bàn có một cái máy tính và một quyển sách.' },
          { speaker: 0, chinese: '杯子在哪儿？', pinyin: 'Bēizi zài nǎr?', vietnamese: 'Cái ly ở đâu rồi?' },
          { speaker: 1, chinese: '杯子在桌子里面。', pinyin: 'Bēizi zài zhuōzi lǐmiàn.', vietnamese: 'Cái ly ở bên trong bàn.' },
          { speaker: 0, chinese: '前面这个人叫什么名字？', pinyin: 'Qiánmiàn zhè ge rén jiào shénme míngzi?', vietnamese: 'Người đằng trước này tên là gì?' },
          { speaker: 1, chinese: '他叫王方，在医院工作。', pinyin: 'Tā jiào Wáng Fāng, zài yīyuàn gōngzuò.', vietnamese: 'Anh ấy tên Vương Phương, làm việc ở bệnh viện.' }
        ]
      },
      {
        title: 'Đi khám bác sĩ', characters: ['Bác sĩ', 'Bệnh nhân'],
        lines: [
          { speaker: 0, chinese: '你好，你怎么了？哪里不舒服？', pinyin: 'Nǐ hǎo, nǐ zěnme le? Nǎlǐ bù shūfu?', vietnamese: 'Xin chào, bạn sao vậy? Chỗ nào không khỏe?' },
          { speaker: 1, chinese: '医生，我不舒服。我头疼。', pinyin: 'Yīshēng, wǒ bù shūfu. Wǒ tóuténg.', vietnamese: 'Bác sĩ, tôi không khỏe. Tôi đau đầu.' },
          { speaker: 0, chinese: '我能坐这儿吗？', pinyin: 'Wǒ néng zuò zhèr ma?', vietnamese: 'Tôi có thể ngồi đây không?' },
          { speaker: 1, chinese: '请坐。', pinyin: 'Qǐng zuò.', vietnamese: 'Xin mời ngồi.' },
          { speaker: 0, chinese: '你去看医生了吗？', pinyin: 'Nǐ qù kàn yīshēng le ma?', vietnamese: 'Bạn đã đi khám bác sĩ chưa?' },
          { speaker: 1, chinese: '没有，今天才来。', pinyin: 'Méiyǒu, jīntiān cái lái.', vietnamese: 'Chưa, hôm nay mới tới.' }
        ]
      },
      {
        title: 'Có thể uống trà không', characters: ['Hải', 'Lan'],
        lines: [
          { speaker: 0, chinese: '我想喝茶。', pinyin: 'Wǒ xiǎng hē chá.', vietnamese: 'Tôi muốn uống trà.' },
          { speaker: 1, chinese: '这儿没有茶。', pinyin: 'Zhèr méiyǒu chá.', vietnamese: 'Ở đây không có trà.' },
          { speaker: 0, chinese: '那我喝水可以吗？', pinyin: 'Nà wǒ hē shuǐ kěyǐ ma?', vietnamese: 'Vậy tôi uống nước lọc được không?' },
          { speaker: 1, chinese: '可以，你喝吧。', pinyin: 'Kěyǐ, nǐ hē ba.', vietnamese: 'Được, bạn uống đi.' },
          { speaker: 0, chinese: '谢谢你。', pinyin: 'Xièxiè nǐ.', vietnamese: 'Cảm ơn bạn.' },
          { speaker: 1, chinese: '不客气！天气不太好，多喝水。', pinyin: 'Bú kèqì! Tiānqì bù zhai hǎo, duō hē shuǐ.', vietnamese: 'Đừng khách sáo! Thời tiết không tốt lắm, hãy uống nhiều nước.' }
        ]
      }
    ],

    /* L11 – Thời tiết */
    L11: [
      {
        title: 'Nói chuyện về thời tiết', characters: ['Hùng', 'Thúy'],
        lines: [
          { speaker: 0, chinese: '今天天气怎么样？', pinyin: 'Jīntiān tiānqì zěnmeyàng?', vietnamese: 'Hôm nay thời tiết thế nào?' },
          { speaker: 1, chinese: '今天天气太热了！外面在下雨。', pinyin: 'Jīntiān tiānqì tài rè le! Wàimiàn zài xià yǔ.', vietnamese: 'Hôm nay thời tiết nóng quá! Bên ngoài đang mưa.' },
          { speaker: 0, chinese: '明天天气怎样？会下雨吗？', pinyin: 'Míngtiān tiānqì zěnyàng? Huì xià yǔ ma?', vietnamese: 'Thời tiết ngày mai thế nào? Có mưa không?' },
          { speaker: 1, chinese: '明天不会下雨，明天很冷。', pinyin: 'Míngtiān bú huì xià yǔ, míngtiān hěn lěng.', vietnamese: 'Ngày mai không mưa, ngày mai rất lạnh.' },
          { speaker: 0, chinese: '太好了，我不喜欢热天。', pinyin: 'Tài hǎo le, wǒ bù xǐhuān rè tiān.', vietnamese: 'Tuyệt quá, tôi không thích trời nóng.' },
          { speaker: 1, chinese: '我也不喜欢。', pinyin: 'Wǒ yě bù xǐhuān.', vietnamese: 'Tôi cũng không thích.' }
        ]
      },
      {
        title: 'Cơ thể không khỏe trời lạnh', characters: ['Minh', 'Hải'],
        lines: [
          { speaker: 0, chinese: '今天很冷，你去哪儿？', pinyin: 'Jīntiān hěn lěng, nǐ qù nǎr?', vietnamese: 'Hôm nay rất lạnh, bạn đi đâu thế?' },
          { speaker: 1, chinese: '我去医院看医生。', pinyin: 'Wǒ qù yīyuàn kàn yīshēng.', vietnamese: 'Tôi đi bệnh viện khám bác sĩ.' },
          { speaker: 0, chinese: '你怎么了？', pinyin: 'Nǐ zěnme le?', vietnamese: 'Bạn làm sao vậy?' },
          { speaker: 1, chinese: '我不太舒服，可能感冒了。', pinyin: 'Wǒ bù tài shūfu, kěnéng gǎnmào le.', vietnamese: 'Tôi không được khỏe lắm, có thể là cảm lạnh rồi.' },
          { speaker: 0, chinese: '那你多穿衣服！多喝水！', pinyin: 'Nà nǐ duō chuān yīfu! Duō hē shuǐ!', vietnamese: 'Vậy bạn mặc thêm áo vào! Uống nhiều nước nhé!' },
          { speaker: 1, chinese: '好的，谢谢你！', pinyin: 'Hǎo de, xièxiè nǐ!', vietnamese: 'Được rồi, cảm ơn bạn!' }
        ]
      },
      {
        title: 'Cô Vương đi Bắc Kinh', characters: ['Học sinh', 'Cô giáo'],
        lines: [
          { speaker: 0, chinese: '老师，你要去北京吗？', pinyin: 'Lǎoshī, nǐ yào qù Běijīng ma?', vietnamese: 'Cô ơi, cô sắp đi Bắc Kinh ạ?' },
          { speaker: 1, chinese: '是的，我下个星期去。', pinyin: 'Shì de, wǒ xià ge xīngqī qù.', vietnamese: 'Đúng vậy, tuần sau cô sẽ đi.' },
          { speaker: 0, chinese: '北京的天气怎么样？冷不冷？', pinyin: 'Běijīng de tiānqì zěnmeyàng? Lěng bù lěng?', vietnamese: 'Thời tiết ở Bắc Kinh thế nào ạ? Lạnh hay không lạnh?' },
          { speaker: 1, chinese: '北京现在比较冷，会下雪。', pinyin: 'Běijīng xiànzài bǐjiào lěng, huì xià xuě.', vietnamese: 'Bắc Kinh bây giờ tương đối lạnh, sẽ có tuyết rơi.' },
          { speaker: 0, chinese: '老师，你要多穿一点儿衣服。', pinyin: 'Lǎoshī, nǐ yào duō chuān yīdiǎnr yīfu.', vietnamese: 'Cô ơi, cô phải mặc thêm nhiều quần áo nhé.' },
          { speaker: 1, chinese: '谢谢你！', pinyin: 'Xièxiè nǐ!', vietnamese: 'Cảm ơn em!' }
        ]
      }
    ],

    /* L12 – Sở thích và hoạt động */
    L12: [
      {
        title: 'Bạn đang làm gì', characters: ['Mai', 'Lan'],
        lines: [
          { speaker: 0, chinese: '喂，你在做什么呢？', pinyin: 'Wéi, nǐ zài zuò shénme ne?', vietnamese: 'Alo, bạn đang làm gì đấy?' },
          { speaker: 1, chinese: '我在看书呢。你呢？', pinyin: 'Wǒ zài kàn shū ne. Nǐ ne?', vietnamese: 'Tôi đang đọc sách. Còn bạn?' },
          { speaker: 0, chinese: '我在听音乐。', pinyin: 'Wǒ zài tīng yīnyuè.', vietnamese: 'Tôi đang nghe nhạc.' },
          { speaker: 1, chinese: '大卫也在听音乐吗？', pinyin: 'Dàwèi yě zài tīng yīnyuè ma?', vietnamese: 'David cũng đang nghe nhạc à?' },
          { speaker: 0, chinese: '他没听音乐，他在学习汉语。', pinyin: 'Tā méi tīng yīnyuè, tā zài xuéxí Hànyǔ.', vietnamese: 'Anh ấy không nghe nhạc, anh ấy đang học tiếng Trung.' },
          { speaker: 1, chinese: '好，那下午我们去打篮球吧？', pinyin: 'Hǎo, nà xiàwǔ wǒmen qù dǎ lánqiú ba?', vietnamese: 'Được, vậy buổi chiều chúng ta đi đánh bóng rổ nhé?' },
          { speaker: 0, chinese: '好的！我非常喜欢打篮球。', pinyin: 'Hǎo de! Wǒ fēicháng xǐhuān dǎ lánqiú.', vietnamese: 'Được chứ! Tôi rất thích chơi bóng rổ.' }
        ]
      },
      {
        title: 'Xem ti vi', characters: ['Con', 'Mẹ'],
        lines: [
          { speaker: 0, chinese: '妈妈，我能看电视吗？', pinyin: 'Māma, wǒ néng kàn diànshì ma?', vietnamese: 'Mẹ ơi, con có thể xem ti vi không?' },
          { speaker: 1, chinese: '你做作业了吗？', pinyin: 'Nǐ zuò zuòyè le ma?', vietnamese: 'Con đã làm bài tập chưa?' },
          { speaker: 0, chinese: '我做好了。', pinyin: 'Wǒ zuò hǎo le.', vietnamese: 'Con làm xong rồi ạ.' },
          { speaker: 1, chinese: '好，你可以看三十分钟。', pinyin: 'Hǎo, nǐ kěyǐ kàn sānshí fēnzhōng.', vietnamese: 'Được, con có thể xem ba mươi phút.' },
          { speaker: 0, chinese: '爸爸在那儿做什么呢？', pinyin: 'Bàba zài nàr zuò shénme ne?', vietnamese: 'Bố đang làm gì ở đằng kia thế?' },
          { speaker: 1, chinese: '他在玩电脑。', pinyin: 'Tā zài wán diànnǎo.', vietnamese: 'Bố đang chơi máy tính.' }
        ]
      },
      {
        title: 'Sở thích của bạn là gì', characters: ['Hoa', 'Minh'],
        lines: [
          { speaker: 0, chinese: '你喜欢做什么？', pinyin: 'Nǐ xǐhuān zuò shénme?', vietnamese: 'Bạn thích làm gì?' },
          { speaker: 1, chinese: '我喜欢买东西和看电影。', pinyin: 'Wǒ xǐhuān mǎi dōngxi hé kàn diànyǐng.', vietnamese: 'Tôi thích đi mua sắm và xem phim.' },
          { speaker: 0, chinese: '你经常看电影吗？', pinyin: 'Nǐ jīngcháng kàn diànyǐng ma?', vietnamese: 'Bạn có thường xuyên xem phim không?' },
          { speaker: 1, chinese: '我不经常看。你喜欢看书吗？', pinyin: 'Wǒ bù jīngcháng kàn. Nǐ xǐhuān kàn shū ma?', vietnamese: 'Tôi không xem thường xuyên. Bạn có thích đọc sách không?' },
          { speaker: 0, chinese: '我最喜欢看书。', pinyin: 'Wǒ zuì xǐhuān kàn shū.', vietnamese: 'Tôi thích đọc sách nhất.' },
          { speaker: 1, chinese: '那我们星期六去书店吧！', pinyin: 'Nà wǒmen xīngqīliù qù shūdiàn ba!', vietnamese: 'Vậy thứ Bảy chúng ta đi nhà sách nhé!' }
        ]
      }
    ],

    /* L13 – Mua sắm cơ bản */
    L13: [
      {
        title: 'Mua quần áo', characters: ['Khách', 'Người bán'],
        lines: [
          { speaker: 0, chinese: '这件衣服多少钱？', pinyin: 'Zhè jiàn yīfu duōshǎo qián?', vietnamese: 'Bộ quần áo này bao nhiêu tiền?' },
          { speaker: 1, chinese: '这件衣服一百五十块钱。', pinyin: 'Zhè jiàn yīfu yī bǎi wǔshí kuài qián.', vietnamese: 'Bộ quần áo này một trăm năm mươi tệ.' },
          { speaker: 0, chinese: '太贵了！能便宜一点儿吗？', pinyin: 'Tài guì le! Néng piányí yīdiǎnr ma?', vietnamese: 'Đắt quá! Có thể rẻ hơn một chút được không?' },
          { speaker: 1, chinese: '一百二十块，可以吗？', pinyin: 'Yī bǎi èrshí kuài, kěyǐ ma?', vietnamese: 'Một trăm hai mươi tệ, được không?' },
          { speaker: 0, chinese: '好的，我要买这件。', pinyin: 'Hǎo de, wǒ yào mǎi zhè jiàn.', vietnamese: 'Được rồi, tôi sẽ mua bộ này.' },
          { speaker: 1, chinese: '谢谢您。', pinyin: 'Xièxiè nín.', vietnamese: 'Cảm ơn quý khách.' }
        ]
      },
      {
        title: 'Mua hoa quả', characters: ['A', 'B'],
        lines: [
          { speaker: 0, chinese: '昨天你去了哪里？', pinyin: 'Zuótiān nǐ qù le nǎlǐ?', vietnamese: 'Hôm qua bạn đã đi đâu?' },
          { speaker: 1, chinese: '我去了商店买东西。', pinyin: 'Wǒ qù le shāngdiàn mǎi dōngxi.', vietnamese: 'Tôi đã đi cửa hàng mua đồ.' },
          { speaker: 0, chinese: '你买了什么？', pinyin: 'Nǐ mǎi le shénme?', vietnamese: 'Bạn đã mua gì?' },
          { speaker: 1, chinese: '我买了一些苹果和水。', pinyin: 'Wǒ mǎi le yīxiē píngguǒ hé shuǐ.', vietnamese: 'Tôi đã mua một ít táo và nước.' },
          { speaker: 0, chinese: '苹果多少钱一斤？', pinyin: 'Píngguǒ duōshǎo qián yī jīn?', vietnamese: 'Táo bao nhiêu tiền một cân?' },
          { speaker: 1, chinese: '十块钱一斤，很甜很好吃。', pinyin: 'Shí kuài qián yī jīn, hěn tián hěn hǎochī.', vietnamese: 'Mười tệ một cân, rất ngọt và ngon.' }
        ]
      },
      {
        title: 'Mua quà sinh nhật', characters: ['Bạn 1', 'Bạn 2'],
        lines: [
          { speaker: 0, chinese: '明天是王老师的生日。', pinyin: 'Míngtiān shì Wáng lǎoshī de shēngrì.', vietnamese: 'Ngày mai là sinh nhật của thầy Vương.' },
          { speaker: 1, chinese: '我们给他买一个杯子好吗？', pinyin: 'Wǒmen gěi tā mǎi yī gè bēizi hǎo ma?', vietnamese: 'Chúng ta mua cho thầy ấy một cái ly được không?' },
          { speaker: 0, chinese: '好啊，他在哪儿能买到？', pinyin: 'Hǎo a, tā zài nǎr néng mǎidào?', vietnamese: 'Được chứ, ở đâu có thể mua được?' },
          { speaker: 1, chinese: '前面有一个大商店，里面有很多杯子。', pinyin: 'Qiánmiàn yǒu yī gè dà shāngdiàn, lǐmiàn yǒu hěn duō bēizi.', vietnamese: 'Phía trước có một cửa hàng lớn, bên trong có rất nhiều ly.' },
          { speaker: 0, chinese: '那些杯子贵不贵？', pinyin: 'Nàxiē bēizi guì bù guì?', vietnamese: 'Những cái ly đó có đắt không?' },
          { speaker: 1, chinese: '不贵，也就二十块钱。', pinyin: 'Bú guì, yě jiù èrshí kuài qián.', vietnamese: 'Không đắt, chỉ khoảng hai mươi tệ thôi.' },
          { speaker: 0, chinese: '那我们现在去买吧。', pinyin: 'Nà wǒmen xiànzài qù mǎi ba.', vietnamese: 'Vậy bây giờ chúng ta đi mua đi.' }
        ]
      }
    ],

    /* L14 – Giao thông cơ bản */
    L14: [
      {
        title: 'Phương tiện đi làm', characters: ['Đồng nghiệp 1', 'Đồng nghiệp 2'],
        lines: [
          { speaker: 0, chinese: '你每天怎么去工作？', pinyin: 'Nǐ měitiān zěnme qù gōngzuò?', vietnamese: 'Mỗi ngày bạn đi làm bằng cách nào?' },
          { speaker: 1, chinese: '我坐出租车去。你呢？', pinyin: 'Wǒ zuò chūzūchē qù. Nǐ ne?', vietnamese: 'Tôi đi bằng xe taxi. Còn bạn?' },
          { speaker: 0, chinese: '我开车去。', pinyin: 'Wǒ kāichē qù.', vietnamese: 'Tôi tự lái xe đi.' },
          { speaker: 1, chinese: '开车要多长时间？', pinyin: 'Kāichē yào duō cháng shíjiān?', vietnamese: 'Lái xe mất bao nhiêu thời gian?' },
          { speaker: 0, chinese: '大约二十分钟，很快的。', pinyin: 'Dàyuē èrshí fēnzhōng, hěn kuài de.', vietnamese: 'Khoảng hai mươi phút, rất nhanh.' },
          { speaker: 1, chinese: '真好，坐出租车比较贵。', pinyin: 'Zhēn hǎo, zuò chūzūchē bǐjiào guì.', vietnamese: 'Thật tốt, đi taxi tương đối đắt.' }
        ]
      },
      {
        title: 'Đến trường bằng gì', characters: ['Sinh viên', 'Giáo viên'],
        lines: [
          { speaker: 0, chinese: '老师，您怎么来学校？', pinyin: 'Lǎoshī, nín zěnme lái xuéxiào?', vietnamese: 'Thầy ơi, thầy đến trường bằng hình thức nào ạ?' },
          { speaker: 1, chinese: '我是坐飞机来的。', pinyin: 'Wǒ shì zuò fēijī lái de.', vietnamese: 'Tôi đến bằng máy bay.' },
          { speaker: 0, chinese: '坐飞机？您不是住在北京吗？', pinyin: 'Zuò fēijī? Nín bú shì zhù zài Běijīng ma?', vietnamese: 'Đi máy bay ạ? Không phải thầy sống ở Bắc Kinh sao?' },
          { speaker: 1, chinese: '我的家在上海，我在北京工作。', pinyin: 'Wǒ de jiā zài Shànghǎi, wǒ zài Běijīng gōngzuò.', vietnamese: 'Nhà tôi ở Thượng Hải, tôi làm việc ở Bắc Kinh.' },
          { speaker: 0, chinese: '那是几点出发的？', pinyin: 'Nà shì jǐ diǎn chūfā de?', vietnamese: 'Vậy thầy khởi hành lúc mấy giờ?' },
          { speaker: 1, chinese: '早上六点。', pinyin: 'Zǎoshang liù diǎn.', vietnamese: 'Sáu giờ sáng.' }
        ]
      },
      {
        title: 'Đi tàu hỏa', characters: ['Bạn 1', 'Bạn 2'],
        lines: [
          { speaker: 0, chinese: '我们怎么去火车站？', pinyin: 'Wǒmen zěnme qù huǒchēzhàn?', vietnamese: 'Chúng ta đi đến ga xe lửa bằng cách nào?' },
          { speaker: 1, chinese: '坐公共汽车去吧。', pinyin: 'Zuò gōnggòng qìchē qù ba.', vietnamese: 'Đi bằng xe buýt đi.' },
          { speaker: 0, chinese: '公共汽车太慢了。我们坐出租车可以吗？', pinyin: 'Gōnggòng qìchē tài màn le. Wǒmen zuò chūzūchē kěyǐ ma?', vietnamese: 'Xe buýt chậm quá. Chúng ta đi taxi được không?' },
          { speaker: 1, chinese: '现在下雨了，没有出租车。', pinyin: 'Xiànzài xià yǔ le, méiyǒu chūzūchē.', vietnamese: 'Bây giờ trời mưa rồi, không có xe taxi đâu.' },
          { speaker: 0, chinese: '那好吧，我们去等公交车。', pinyin: 'Nà hǎo ba, wǒmen qù děng gōngjiāochē.', vietnamese: 'Vậy thôi được, chúng ta đi đợi xe buýt.' },
          { speaker: 1, chinese: '在那边，很快就来了！', pinyin: 'Zài nàbiān, hěn kuài jiù lái le!', vietnamese: 'Ở đằng kia, xe sắp tới rồi!' }
        ]
      }
    ],

    /* L15 – Gọi điện và liên lạc */
    L15: [
      {
        title: 'Gọi điện về nhà', characters: ['Mẹ', 'Con trai'],
        lines: [
          { speaker: 0, chinese: '喂，你在做什么呢？', pinyin: 'Wéi, nǐ zài zuò shénme ne?', vietnamese: 'Alo, con đang làm gì đấy?' },
          { speaker: 1, chinese: '妈妈，我在看书。', pinyin: 'Māma, wǒ zài kàn shū.', vietnamese: 'Mẹ ơi, con đang đọc sách.' },
          { speaker: 0, chinese: '你什么时候回家？', pinyin: 'Nǐ shénme shíhòu huí jiā?', vietnamese: 'Khi nào con về nhà?' },
          { speaker: 1, chinese: '我明天回家，下午两点到。', pinyin: 'Wǒ míngtiān huí jiā, xiàwǔ liǎng diǎn dào.', vietnamese: 'Ngày mai con về, hai giờ chiều đến nơi.' },
          { speaker: 0, chinese: '好的，我去火车站接你。', pinyin: 'Hǎo de, wǒ qù huǒchēzhàn jiē nǐ.', vietnamese: 'Được rồi, mẹ sẽ ra ga đón con.' },
          { speaker: 1, chinese: '好的妈妈，明天见！', pinyin: 'Hǎo de māma, míngtiān jiàn!', vietnamese: 'Vâng ạ, hẹn gặp lại mẹ vào ngày mai!' }
        ]
      },
      {
        title: 'Trao đổi số điện thoại', characters: ['Tân', 'Hải'],
        lines: [
          { speaker: 0, chinese: '你的电话号码是多少？', pinyin: 'Nǐ de diànhuà hàomǎ shì duōshǎo?', vietnamese: 'Số điện thoại của bạn là bao nhiêu?' },
          { speaker: 1, chinese: '我的号码是138-0013-8000。', pinyin: 'Wǒ de hàomǎ shì yāo sān bā líng líng yāo sān bā líng líng líng.', vietnamese: 'Số của tôi là 138-0013-8000.' },
          { speaker: 0, chinese: '我的是139-2580。我给你打电话。', pinyin: 'Wǒ de shì yāo sān jiǔ èr wǔ bā líng. Wǒ gěi nǐ dǎ diànhuà.', vietnamese: 'Của tôi là 139-2580. Tôi sẽ gọi cho bạn.' },
          { speaker: 1, chinese: '好的。你认识李月吗？', pinyin: 'Hǎo de. Nǐ rènshi Lǐ Yuè ma?', vietnamese: 'Được rồi. Bạn có quen Lý Nguyệt không?' },
          { speaker: 0, chinese: '我认识。她的电话号码是多少？', pinyin: 'Wǒ rènshi. Tā de diànhuà hàomǎ shì duōshǎo?', vietnamese: 'Tôi có quen. Số điện thoại của cô ấy là gì?' },
          { speaker: 1, chinese: '我不知道，对不起。', pinyin: 'Wǒ bù zhīdào, duìbùqǐ.', vietnamese: 'Tôi không biết, xin lỗi bạn.' }
        ]
      },
      {
        title: 'Nhắn tin qua WeChat', characters: ['Anh', 'Bình'],
        lines: [
          { speaker: 0, chinese: '我们认识多长时间了？', pinyin: 'Wǒmen rènshi duō cháng shíjiān le?', vietnamese: 'Chúng ta quen nhau được bao lâu rồi?' },
          { speaker: 1, chinese: '三年了。我们在北京大学认识的。', pinyin: 'Sān nián le. Wǒmen zài Běijīng Dàxué rènshi de.', vietnamese: 'Được ba năm rồi. Chúng ta quen nhau ở Đại học Bắc Kinh.' },
          { speaker: 0, chinese: '对。你的微信是多少？', pinyin: 'Duì. Nǐ de Wēixìn shì duōshǎo?', vietnamese: 'Đúng vậy. WeChat của bạn là gì?' },
          { speaker: 1, chinese: '我的微信是A-N-N-A。', pinyin: 'Wǒ de Wēixìn shì A-N-N-A.', vietnamese: 'WeChat của tôi là ANNA.' },
          { speaker: 0, chinese: '我想昨天给你发微信的，但是太忙了。', pinyin: 'Wǒ xiǎng zuótiān gěi nǐ fā wēixìn de, dànshì tài máng le.', vietnamese: 'Tôi muốn nhắn tin WeChat cho bạn hôm qua, nhưng bận quá.' },
          { speaker: 1, chinese: '没关系，现在可以给我发。', pinyin: 'Méi guānxi, xiànzài kěyǐ gěi wǒ fā.', vietnamese: 'Không sao, bây giờ bạn có thể nhắn cho tôi.' },
          { speaker: 0, chinese: '好，谢谢你。', pinyin: 'Hǎo, xièxiè nǐ.', vietnamese: 'Được, cảm ơn bạn.' }
        ]
      }
    ]

  };

  /* ============================================================
     HSK 2 – Hội thoại nâng cao hơn, ngữ pháp phức tạp hơn
     ============================================================ */
  const dialoguesHSK2 = {

    /* L16 – Nghề nghiệp */
    L16: [
      {
        title: 'Bạn làm nghề gì', characters: ['Linh', 'David'],
        lines: [
          { speaker: 0, chinese: '你做什么工作？', pinyin: 'Nǐ zuò shénme gōngzuò?', vietnamese: 'Bạn làm nghề gì?' },
          { speaker: 1, chinese: '我在一家医院工作，我是医生。你呢？', pinyin: 'Wǒ zài yī jiā yīyuàn gōngzuò, wǒ shì yīshēng. Nǐ ne?', vietnamese: 'Tôi làm việc ở một bệnh viện, tôi là bác sĩ. Còn bạn?' },
          { speaker: 0, chinese: '我以前是老师，现在不工作了。', pinyin: 'Wǒ yǐqián shì lǎoshī, xiànzài bù gōngzuò le.', vietnamese: 'Trước đây tôi là giáo viên, bây giờ không làm việc nữa.' },
          { speaker: 1, chinese: '哦，你工作多长时间了？', pinyin: 'Ó, nǐ gōngzuò duō cháng shíjiān le?', vietnamese: 'Ồ, bạn đã làm việc bao lâu rồi?' },
          { speaker: 0, chinese: '我已经工作三年了。', pinyin: 'Wǒ yǐjīng gōngzuò sān nián le.', vietnamese: 'Tôi đã làm việc được ba năm rồi.' },
          { speaker: 1, chinese: '当老师很累吧？', pinyin: 'Dāng lǎoshī hěn lèi ba?', vietnamese: 'Làm giáo viên mệt lắm nhỉ?' },
          { speaker: 0, chinese: '是的，每天都很忙。', pinyin: 'Shì de, měitiān dōu hěn máng.', vietnamese: 'Đúng vậy, mỗi ngày đều rất bận.' }
        ]
      },
      {
        title: 'Giới thiệu việc làm', characters: ['Mẹ', 'Con gái'],
        lines: [
          { speaker: 0, chinese: '你找到工作了吗？', pinyin: 'Nǐ zhǎodào gōngzuò le ma?', vietnamese: 'Con đã tìm được việc làm chưa?' },
          { speaker: 1, chinese: '还没有，找工作太难了。', pinyin: 'Hái méiyǒu, zhǎo gōngzuò tài nán le.', vietnamese: 'Vẫn chưa, tìm việc khó quá.' },
          { speaker: 0, chinese: '李阿姨的儿子在公司工作，让他帮你介绍吧。', pinyin: 'Lǐ āyí de érzi zài gōngsī gōngzuò, ràng tā bāng nǐ jièshào ba.', vietnamese: 'Con trai dì Lý làm ở công ty, để anh ấy giới thiệu giúp con nhé.' },
          { speaker: 1, chinese: '真的吗？他做什么工作？', pinyin: 'Zhēn de ma? Tā zuò shénme gōngzuò?', vietnamese: 'Thật không? Anh ấy làm công việc gì?' },
          { speaker: 0, chinese: '他在那儿做服务员。', pinyin: 'Tā zài nàr zuò fúwùyuán.', vietnamese: 'Anh ấy làm phục vụ ở đó.' },
          { speaker: 1, chinese: '我不想做服务员。我想去学校。', pinyin: 'Wǒ bù xiǎng zuò fúwùyuán. Wǒ xiǎng qù xuéxiào.', vietnamese: 'Con không muốn làm phục vụ. Con muốn đến trường học.' },
          { speaker: 0, chinese: '好，那你再等等吧。', pinyin: 'Hǎo, nà nǐ zài děngděng ba.', vietnamese: 'Được, vậy con cứ đợi thêm nhé.' }
        ]
      },
      {
        title: 'Công việc của chồng', characters: ['Vương', 'Trương'],
        lines: [
          { speaker: 0, chinese: '你的丈夫在哪里工作？', pinyin: 'Nǐ de zhàngfu zài nǎlǐ gōngzuò?', vietnamese: 'Chồng của bạn làm việc ở đâu?' },
          { speaker: 1, chinese: '他在北京的一个公司工作。', pinyin: 'Tā zài Běijīng de yī gè gōngsī gōngzuò.', vietnamese: 'Anh ấy làm việc ở một công ty tại Bắc Kinh.' },
          { speaker: 0, chinese: '他的工资高吗？', pinyin: 'Tā de gōngzī gāo ma?', vietnamese: 'Lương của anh ấy cao không?' },
          { speaker: 1, chinese: '不太高，但是我很喜欢。', pinyin: 'Bù tài gāo, dànshì wǒ hěn xǐhuān.', vietnamese: 'Không cao lắm, nhưng tôi rất thích.' },
          { speaker: 0, chinese: '为什么？', pinyin: 'Wèishénme?', vietnamese: 'Vì sao?' },
          { speaker: 1, chinese: '因为他每天晚上都能回家吃饭。', pinyin: 'Yīnwèi tā měitiān wǎnshang dōu néng huí jiā chī fàn.', vietnamese: 'Bởi vì mỗi tối anh ấy đều có thể về nhà ăn cơm.' },
          { speaker: 0, chinese: '那真不错。', pinyin: 'Nà zhēn bùcuò.', vietnamese: 'Thế thì thật tốt.' }
        ]
      }
    ],

    /* L17 – Hỏi đường */
    L17: [
      {
        title: 'Đường đến trường học', characters: ['Học sinh', 'Người dân'],
        lines: [
          { speaker: 0, chinese: '打扰一下，请问学校怎么走？', pinyin: 'Dǎrǎo yíxià, qǐngwèn xuéxiào zěnme zǒu?', vietnamese: 'Xin làm phiền một chút, cho hỏi đến trường học đi đường nào?' },
          { speaker: 1, chinese: '学校离这里很近，你一直往前走。', pinyin: 'Xuéxiào lí zhèlǐ hěn jìn, nǐ yīzhí wǎng qián zǒu.', vietnamese: 'Trường học cách đây rất gần, bạn cứ đi thẳng.' },
          { speaker: 0, chinese: '要走多长时间？', pinyin: 'Yào zǒu duō cháng shíjiān?', vietnamese: 'Phải đi khoảng bao lâu?' },
          { speaker: 1, chinese: '大概五分钟就到了。', pinyin: 'Dàgài wǔ fēnzhōng jiù dào le.', vietnamese: 'Khoảng nhăm phút là tới nơi.' },
          { speaker: 0, chinese: '学校旁边有银行吗？', pinyin: 'Xuéxiào pángbiān yǒu yínháng ma?', vietnamese: 'Bên cạnh trường có ngân hàng không?' },
          { speaker: 1, chinese: '有，银行就在学校对面。', pinyin: 'Yǒu, yínháng jiù zài xuéxiào duìmiàn.', vietnamese: 'Có, ngân hàng ở ngay đối diện trường học.' },
          { speaker: 0, chinese: '谢谢您，再见！', pinyin: 'Xièxiè nín, zàijiàn!', vietnamese: 'Cảm ơn ông, tạm biệt!' }
        ]
      },
      {
        title: 'Khoảng cách từ nhà đến công ty', characters: ['Đồng nghiệp 1', 'Đồng nghiệp 2'],
        lines: [
          { speaker: 0, chinese: '你家离公司远吗？', pinyin: 'Nǐ jiā lí gōngsī yuǎn ma?', vietnamese: 'Nhà bạn cách công ty xa không?' },
          { speaker: 1, chinese: '很远，我每天都要坐公交车。', pinyin: 'Hěn yuǎn, wǒ měitiān dōu yào zuò gōngjiāochē.', vietnamese: 'Rất xa, ngày nào tôi cũng phải đi xe buýt.' },
          { speaker: 0, chinese: '坐车要几分钟？', pinyin: 'Zuòchē yào jǐ fēnzhōng?', vietnamese: 'Đi xe mất mấy phút?' },
          { speaker: 1, chinese: '差不多四十分钟，你家呢？', pinyin: 'Chàbùduō sìshí fēnzhōng, nǐ jiā ne?', vietnamese: 'Tầm bốn mươi phút, còn nhà bạn?' },
          { speaker: 0, chinese: '我家就在公司旁边，我走路来。', pinyin: 'Wǒ jiā jiù zài gōngsī pángbiān, wǒ zǒulù lái.', vietnamese: 'Nhà tôi ở ngay cạnh công ty, tôi đi bộ đến.' },
          { speaker: 1, chinese: '真好，你不累。', pinyin: 'Zhēn hǎo, nǐ bú lèi.', vietnamese: 'Tốt quá, bạn không bị mệt.' }
        ]
      },
      {
        title: 'Đi mua sách', characters: ['An', 'Bình'],
        lines: [
          { speaker: 0, chinese: '我想去买一本汉语书。', pinyin: 'Wǒ xiǎng qù mǎi yī běn Hànyǔ shū.', vietnamese: 'Tôi muốn đi mua một cuốn sách tiếng Trung.' },
          { speaker: 1, chinese: '书店离这里远不远？', pinyin: 'Shūdiàn lí zhèlǐ yuǎn bù yuǎn?', vietnamese: 'Nhà sách cách đây xa không?' },
          { speaker: 0, chinese: '有一点远，我们坐出租车去吧。', pinyin: 'Yǒu yīdiǎn yuǎn, wǒmen zuò chūzūchē qù ba.', vietnamese: 'Hơi xa một chút, chúng ta đi taxi nhé.' },
          { speaker: 1, chinese: '出租车太贵了，我们坐地铁怎么样？', pinyin: 'Chūzūchē tài guì le, wǒmen zuò dìtiě zěnmeyàng?', vietnamese: 'Taxi đắt quá, chúng ta đi tàu điện ngầm thì sao?' },
          { speaker: 0, chinese: '好啊，地铁站在右边。', pinyin: 'Hǎo a, dìtiě zhàn zài yòubiān.', vietnamese: 'Được thôi, ga điện ngầm ở phía bên phải.' },
          { speaker: 1, chinese: '往右边走，很快就到。', pinyin: 'Wǎng yòubiān zǒu, hěn kuài jiù dào.', vietnamese: 'Đi về bên phải, rất nhanh là tới.' },
          { speaker: 0, chinese: '好的，我们快走吧。', pinyin: 'Hǎo de, wǒmen kuài zǒu ba.', vietnamese: 'Được, chúng ta đi mau thôi.' }
        ]
      }
    ],

    /* L18 – Nhà ở và môi trường */
    L18: [
      {
        title: 'Tìm nhà để thuê', characters: ['Người thuê', 'Chủ nhà'],
        lines: [
          { speaker: 0, chinese: '你好，我想租房子。', pinyin: 'Nǐ hǎo, wǒ xiǎng zū fángzi.', vietnamese: 'Xin chào, tôi muốn thuê nhà.' },
          { speaker: 1, chinese: '你想找什么样的房子？', pinyin: 'Nǐ xiǎng zhǎo shénmeyàng de fángzi?', vietnamese: 'Bạn muốn tìm căn nhà như thế nào?' },
          { speaker: 0, chinese: '我想找一个离学校近的房子。', pinyin: 'Wǒ xiǎng zhǎo yī gè lí xuéxiào jìn de fángzi.', vietnamese: 'Tôi muốn tìm một căn nhà ở gần trường học.' },
          { speaker: 1, chinese: '这间房间不错，旁边就是学校。', pinyin: 'Zhè jiān fángjiān búcuò, pángbiān jiù shì xuéxiào.', vietnamese: 'Căn phòng này không tệ, bên cạnh chính là trường học.' },
          { speaker: 0, chinese: '但是房间有点小，有大一点的吗？', pinyin: 'Dànshì fángjiān yǒudiǎn xiǎo, yǒu dà yīdiǎn de ma?', vietnamese: 'Nhưng phòng hơi nhỏ, có phòng nào to hơn chút không?' },
          { speaker: 1, chinese: '有，但是大一点的比较贵。', pinyin: 'Yǒu, dànshì dà yīdiǎn de bǐjiào guì.', vietnamese: 'Có, nhưng mà phòng to hơn thì đắt hơn.' },
          { speaker: 0, chinese: '没有问题，我想去看看。', pinyin: 'Méiyǒu wèntí, wǒ xiǎng qù kànkan.', vietnamese: 'Không thành vấn đề, tôi muốn đi xem thử.' }
        ]
      },
      {
        title: 'Chuyển nhà', characters: ['Anh', 'Em'],
        lines: [
          { speaker: 0, chinese: '我下个月要搬家了。', pinyin: 'Wǒ xià ge yuè yào bānjiā le.', vietnamese: 'Tháng sau anh phải chuyển nhà rồi.' },
          { speaker: 1, chinese: '为什么？现在的房子不好吗？', pinyin: 'Wèishénme? Xiànzài de fángzi bù hǎo ma?', vietnamese: 'Sao vậy? Nhà hiện tại không tốt sao?' },
          { speaker: 0, chinese: '因为工作，我要去北京。', pinyin: 'Yīnwèi gōngzuò, wǒ yào qù Běijīng.', vietnamese: 'Bởi vì công việc nên anh phải đến Bắc Kinh.' },
          { speaker: 1, chinese: '你在北京找到新房子了吗？', pinyin: 'Nǐ zài Běijīng zhǎodào xīn fángzi le ma?', vietnamese: 'Anh tìm được nhà mới ở Bắc Kinh chưa?' },
          { speaker: 0, chinese: '找到了，房子很大，也很漂亮。', pinyin: 'Zhǎodào le, fángzi hěn dà, yě hěn piàoliang.', vietnamese: 'Anh tìm được rồi, nhà rất to và còn rất đẹp.' },
          { speaker: 1, chinese: '祝贺你！我想去北京看你。', pinyin: 'Zhùhè nǐ! Wǒ xiǎng qù Běijīng kàn nǐ.', vietnamese: 'Chúc mừng anh! Em muốn tới Bắc Kinh thăm anh.' },
          { speaker: 0, chinese: '欢迎你来，我的房子有很多房间。', pinyin: 'Huānyíng nǐ lái, wǒ de fángzi yǒu hěn duō fángjiān.', vietnamese: 'Hoan nghênh em tới, nhà của anh có rất nhiều phòng.' }
        ]
      },
      {
        title: 'Môi trường sống', characters: ['A', 'B'],
        lines: [
          { speaker: 0, chinese: '你觉得这里的环境怎么样？', pinyin: 'Nǐ juéde zhèlǐ de huánjìng zěnmeyàng?', vietnamese: 'Bạn cảm thấy môi trường ở đây thế nào?' },
          { speaker: 1, chinese: '我觉得很好，空气不错。', pinyin: 'Wǒ juéde hěn hǎo, kōngqì búcuò.', vietnamese: 'Tôi thấy rất tốt, không khí không tệ.' },
          { speaker: 0, chinese: '这几天天气也很暖和。', pinyin: 'Zhè jǐ tiān tiānqì yě hěn nuǎnhuo.', vietnamese: 'Thời tiết mấy ngày nay cũng rất ấm áp.' },
          { speaker: 1, chinese: '是的，也没有下雨。', pinyin: 'Shìde, yě méiyǒu xià yǔ.', vietnamese: 'Đúng vậy, cũng không có mưa.' },
          { speaker: 0, chinese: '我希望能一直住在这里。', pinyin: 'Wǒ xīwàng néng yīzhí zhù zài zhèlǐ.', vietnamese: 'Tôi hi vọng có thể sống ở đây mãi mãi.' },
          { speaker: 1, chinese: '你可以买一个房子。', pinyin: 'Nǐ kěyǐ mǎi yī gè fángzi.', vietnamese: 'Bạn có thể mua một căn nhà.' },
          { speaker: 0, chinese: '这里的房子太贵了，我买不起。', pinyin: 'Zhèlǐ de fángzi tài guì le, wǒ mǎi bù qǐ.', vietnamese: 'Nhà ở đây đắt lắm, tôi mua không nổi.' }
        ]
      }
    ],

    /* L19 – Đặt hàng ở nhà hàng */
    L19: [
      {
        title: 'Bữa tối tại nhà hàng', characters: ['Khách', 'Phục vụ'],
        lines: [
          { speaker: 0, chinese: '服务员，我们想点菜。', pinyin: 'Fúwùyuán, wǒmen xiǎng diǎn cài.', vietnamese: 'Phục vụ ơi, chúng tôi muốn gọi món.' },
          { speaker: 1, chinese: '您好，这是菜单，请看。', pinyin: 'Nín hǎo, zhè shì càidān, qǐng kàn.', vietnamese: 'Xin chào, đây là thực đơn, mời xem qua.' },
          { speaker: 0, chinese: '你们有什么好吃的菜？', pinyin: 'Nǐmen yǒu shénme hǎochī de cài?', vietnamese: 'Các bạn có món nào ngon?' },
          { speaker: 1, chinese: '我们的牛肉和鱼都很好吃。', pinyin: 'Wǒmen de niúròu hé yú dōu hěn hǎochī.', vietnamese: 'Thịt bò và cá của chúng tôi đều rất ngon.' },
          { speaker: 0, chinese: '那我们要一个牛肉和一个鱼。', pinyin: 'Nà wǒmen yào yí gè niúròu hé yí gè yú.', vietnamese: 'Vậy chúng tôi muốn một phần thịt bò và một phần cá.' },
          { speaker: 1, chinese: '请问要喝点什么吗？', pinyin: 'Qǐngwèn yào hē diǎn shénme ma?', vietnamese: 'Xin hỏi cần uống chút gì không?' },
          { speaker: 0, chinese: '要两杯茶，谢谢你。', pinyin: 'Yào liǎng bēi chá, xièxiè nǐ.', vietnamese: 'Muốn hai ly trà, cảm ơn bạn.' }
        ]
      },
      {
        title: 'Ăn mì ở quán', characters: ['Na', 'Vy'],
        lines: [
          { speaker: 0, chinese: '你觉得这家面条怎么样？', pinyin: 'Nǐ juéde zhè jiā miàntiáo zěnmeyàng?', vietnamese: 'Bạn cảm thấy mì ở tiệm này thế nào?' },
          { speaker: 1, chinese: '非常好吃，我经常来这里吃。', pinyin: 'Fēicháng hǎochī, wǒ jīngcháng lái zhèlǐ chī.', vietnamese: 'Cực kỳ ngon, tôi rất hay đến đây ăn.' },
          { speaker: 0, chinese: '我觉得面条有点儿贵。', pinyin: 'Wǒ juéde miàntiáo yǒudiǎnr guì.', vietnamese: 'Tôi cảm thấy món mì này hơi đắt.' },
          { speaker: 1, chinese: '二十块钱一碗，还可以吧？', pinyin: 'Èrshí kuài qián yī wǎn, hái kěyǐ ba?', vietnamese: 'Hai mươi tệ một bát, cũng được chứ nhỉ?' },
          { speaker: 0, chinese: '你吃完了吗？', pinyin: 'Nǐ chī wán le ma?', vietnamese: 'Bạn ăn xong chưa?' },
          { speaker: 1, chinese: '吃完了，我们买单吧。', pinyin: 'Chī wán le, wǒmen mǎidān ba.', vietnamese: 'Ăn xong rồi, chúng ta gọi tính tiền đi.' },
          { speaker: 0, chinese: '服务员，买单。', pinyin: 'Fúwùyuán, mǎidān.', vietnamese: 'Phục vụ, tính tiền.' }
        ]
      },
      {
        title: 'Tráng miệng và trái cây', characters: ['Lan', 'Hương'],
        lines: [
          { speaker: 0, chinese: '你吃饱了吗？', pinyin: 'Nǐ chī bǎo le ma?', vietnamese: 'Bạn ăn no chưa?' },
          { speaker: 1, chinese: '我吃饱了。你呢？', pinyin: 'Wǒ chī bǎo le. Nǐ ne?', vietnamese: 'Tôi ăn no rồi. Bạn thì sao?' },
          { speaker: 0, chinese: '我也饱了。你想吃点儿水果吗？', pinyin: 'Wǒ yě bǎo le. Nǐ xiǎng chī diǎnr shuǐguǒ ma?', vietnamese: 'Tôi cũng no rồi. Bạn có muốn ăn chút trái cây không?' },
          { speaker: 1, chinese: '好啊，我们去买苹果吧。', pinyin: 'Hǎo a, wǒmen qù mǎi píngguǒ ba.', vietnamese: 'Được chứ, chúng ta đi mua táo nhé.' },
          { speaker: 0, chinese: '买西瓜怎么样？现在是夏天。', pinyin: 'Mǎi xīguā zěnmeyàng? Xiànzài shì xiàtiān.', vietnamese: 'Mua dưa hấu thì sao? Giờ đang là mùa hè.' },
          { speaker: 1, chinese: '好主意，西瓜比苹果好吃。', pinyin: 'Hǎo zhǔyì, xīguā bǐ píngguǒ hǎochī.', vietnamese: 'Ý hay đấy, dưa hấu ăn ngon hơn táo.' },
          { speaker: 0, chinese: '那我们走吧。', pinyin: 'Nà wǒmen zǒu ba.', vietnamese: 'Vậy chúng ta đi thôi.' }
        ]
      }
    ],

    /* L20 – Mua sắm nâng cao */
    L20: [
      {
        title: 'Mua váy mới', characters: ['Khách hàng', 'Bán hàng'],
        lines: [
          { speaker: 0, chinese: '你好，这件衣服多少钱？', pinyin: 'Nǐ hǎo, zhè jiàn yīfu duōshǎo qián?', vietnamese: 'Chào bạn, bộ quần áo này bao nhiêu tiền?' },
          { speaker: 1, chinese: '这件两百块钱，这是我们昨天新来的衣服。', pinyin: 'Zhè jiàn liǎng bǎi kuài qián, zhè shì wǒmen zuótiān xīn lái de yīfu.', vietnamese: 'Cái này hai trăm tệ, đây là quần áo chúng tôi mới nhập hôm qua.' },
          { speaker: 0, chinese: '有其他颜色吗？我不太喜欢黑色。', pinyin: 'Yǒu qítā yánsè ma? Wǒ bú tài xǐhuān hēisè.', vietnamese: 'Có màu khác không? Tôi không thích màu đen lắm.' },
          { speaker: 1, chinese: '有红色的和白色的。你要哪个？', pinyin: 'Yǒu hóngsè de hé báisè de. Nǐ yào nǎgè?', vietnamese: 'Có màu đỏ và màu trắng. Bạn muốn cái nào?' },
          { speaker: 0, chinese: '让我看看白色的。', pinyin: 'Ràng wǒ kànkan báisè de.', vietnamese: 'Cho tôi xem cái màu trắng đi.' },
          { speaker: 1, chinese: '给你，你可以去那边试穿。', pinyin: 'Gěi nǐ, nǐ kěyǐ qù nàbiān shìchuān.', vietnamese: 'Đây ạ, bạn có thể sang bên kia để mặc thử.' },
          { speaker: 0, chinese: '谢谢你。', pinyin: 'Xièxiè nǐ.', vietnamese: 'Cám ơn bạn.' }
        ]
      },
      {
        title: 'Bàn bạc về đôi giày', characters: ['Chồng', 'Vợ'],
        lines: [
          { speaker: 0, chinese: '我想买一双新鞋。', pinyin: 'Wǒ xiǎng mǎi yī shuāng xīn xié.', vietnamese: 'Tôi muốn mua một đôi giày mới.' },
          { speaker: 1, chinese: '你的鞋还很新，为什么要买新的？', pinyin: 'Nǐ de xié hái hěn xīn, wèi shénme yào mǎi xīn de?', vietnamese: 'Giày của bạn vẫn còn rất mới, tại sao lại muốn mua cái mới?' },
          { speaker: 0, chinese: '因为这双鞋不舒服。', pinyin: 'Yīnwèi zhè shuāng xié bù shūfu.', vietnamese: 'Bởi vì đôi giày này không thoải mái.' },
          { speaker: 1, chinese: '你想买多少钱的？', pinyin: 'Nǐ xiǎng mǎi duōshǎo qián de?', vietnamese: 'Bạn muốn mua loại bao nhiêu tiền?' },
          { speaker: 0, chinese: '四百块钱的可以吗？', pinyin: 'Sìbǎi kuài qián de kěyǐ ma?', vietnamese: 'Loại bốn trăm tệ được không?' },
          { speaker: 1, chinese: '有一点儿贵，买便宜一点儿的吧。', pinyin: 'Yǒu yīdiǎnr guì, mǎi piányí yīdiǎnr de ba.', vietnamese: 'Hơi đắt một chút, mua loại rẻ hơn chút đi.' },
          { speaker: 0, chinese: '好吧，我们去商店看看。', pinyin: 'Hǎo ba, wǒmen qù shāngdiàn kànkàn.', vietnamese: 'Được thôi, chúng ta đi cửa hàng xem thử.' }
        ]
      },
      {
        title: 'Mặc cả', characters: ['Người mưa', 'Chủ tiệm'],
        lines: [
          { speaker: 0, chinese: '老板，这个杯子能便宜一点吗？', pinyin: 'Lǎobǎn, zhège bēizi néng piányí yīdiǎn ma?', vietnamese: 'Ông chủ, cái cốc này có thể rẻ hơn chút không?' },
          { speaker: 1, chinese: '不能再便宜了，这是三十块钱的杯子。', pinyin: 'Bùnéng zài piányí le, zhè shì sānshí kuài qián de bēizi.', vietnamese: 'Không thể rẻ hơn nữa, đây là cốc ba mươi tệ.' },
          { speaker: 0, chinese: '二十五块钱卖不卖？', pinyin: 'Èrshí wǔ kuài qián mài bú mài?', vietnamese: 'Hai lăm tệ có bán không?' },
          { speaker: 1, chinese: '我不卖。你买两个的话，五十块钱。', pinyin: 'Wǒ bú mài. Nǐ mǎi liǎng gè de huà, wǔshí kuài qián.', vietnamese: 'Tôi không bán. Nếu bạn mua hai chiếc, thì năm mươi tệ.' },
          { speaker: 0, chinese: '好吧，我买两个。一个是红色的，一个是白色的。', pinyin: 'Hǎo ba, wǒ mǎi liǎng gè. Yī gè shì hóngsè de, yī gè shì báisè de.', vietnamese: 'Được rồi, tôi mua hai cái. Một chiếc màu đỏ, một chiếc màu trắng.' },
          { speaker: 1, chinese: '这是你要的杯子。', pinyin: 'Zhè shì nǐ yào de bēizi.', vietnamese: 'Đây là cốc mà bác cần.' },
          { speaker: 0, chinese: '现在给你钱。', pinyin: 'Xiànzài gěi nǐ qián.', vietnamese: 'Bây giờ gửi ông tiền.' }
        ]
      }
    ],

    /* L21 – Du lịch và khách sạn */
    L21: [
      {
        title: 'Check-in khách sạn', characters: ['Khách', 'Lễ tân'],
        lines: [
          { speaker: 0, chinese: '你好，我是大卫。我已经预订了房间。', pinyin: 'Nǐ hǎo, wǒ shì Dàwèi. Wǒ yǐjīng yùdìng le fángjiān.', vietnamese: 'Xin chào, tôi là David. Tôi đã đặt phòng rồi.' },
          { speaker: 1, chinese: '你好，大卫先生，请给我看看你的护照。', pinyin: 'Nǐ hǎo, Dàwèi xiānsheng, qǐng gěi wǒ kànkan nǐ de hùzhào.', vietnamese: 'Chào ngài David, xin vui lòng cho tôi xem hộ chiếu.' },
          { speaker: 0, chinese: '给你，这是我的护照。', pinyin: 'Gěi nǐ, zhè shì wǒ de hùzhào.', vietnamese: 'Đưa cho bạn, đây là hộ chiếu của tôi.' },
          { speaker: 1, chinese: '谢谢。你预订了两个晚上的房间。', pinyin: 'Xièxiè. Nǐ yùdìng le liǎng gè wǎnshang de fángjiān.', vietnamese: 'Cám ơn. Ngài đã đặt phòng cho hai đêm.' },
          { speaker: 0, chinese: '是的。房间里有网络吗？', pinyin: 'Shì de. Fángjiān lǐ yǒu wǎngluò ma?', vietnamese: 'Đúng vậy. Trong phòng có mạng không?' },
          { speaker: 1, chinese: '有的，房间里可以上网，这是你的房卡。', pinyin: 'Yǒu de, fángjiān lǐ kěyǐ shàngwǎng, zhè shì nǐ de fángkǎ.', vietnamese: 'Có ạ, trong phòng có thể lên mạng, đây là thẻ phòng của ngài.' },
          { speaker: 0, chinese: '麻烦你了，我的房间在几楼？', pinyin: 'Máfan nǐ le, wǒ de fángjiān zài jǐ lóu?', vietnamese: 'Phiền bạn rồi, phòng của tôi ở tầng mấy?' },
          { speaker: 1, chinese: '在八楼，电梯在前面右边。', pinyin: 'Zài bā lóu, diàntī zài qiánmiàn yòubiān.', vietnamese: 'Ở tầng tám, thang máy nằm ở phía trước bên phải.' }
        ]
      },
      {
        title: 'Lên kế hoạch đi chơi', characters: ['Minh', 'Hoa'],
        lines: [
          { speaker: 0, chinese: '这个周末你有什么旅游计划吗？', pinyin: 'Zhège zhōumò nǐ yǒu shénme lǚyóu jìhuà ma?', vietnamese: 'Cuối tuần này bạn có kế hoạch đi du lịch gì không?' },
          { speaker: 1, chinese: '我们想去海边玩，你想去吗？', pinyin: 'Wǒmen xiǎng qù hǎibiān wán, nǐ xiǎng qù ma?', vietnamese: 'Chúng tôi muốn đi biển chơi, bạn muốn đi cùng không?' },
          { speaker: 0, chinese: '好啊，可是海边离这里有点远。', pinyin: 'Hǎo a, kěshì hǎibiān lí zhèlǐ yǒudiǎn yuǎn.', vietnamese: 'Được thôi, nhưng mà biển cách đây hơi xa.' },
          { speaker: 1, chinese: '没关系，我们打算坐火车去。', pinyin: 'Méi guānxi, wǒmen dǎsuàn zuò huǒchē qù.', vietnamese: 'Không sao, chúng ta dự định đi bằng xe lửa.' },
          { speaker: 0, chinese: '要坐多长时间的火车？', pinyin: 'Yào zuò duō cháng shíjiān de huǒchē?', vietnamese: 'Phải ngồi xe lửa bao lâu?' },
          { speaker: 1, chinese: '大概两三个小时，火车票也不贵。', pinyin: 'Dàgài liǎng sān gè xiǎoshí, huǒchē piào yě bú guì.', vietnamese: 'Khoảng hai ba tiếng, vé xe lửa cũng không đắt.' },
          { speaker: 0, chinese: '那太好了，谁去买票？', pinyin: 'Nà tài hǎo le, shéi qù mǎi piào?', vietnamese: 'Vậy thì tốt quá, ai đi mua vé?' },
          { speaker: 1, chinese: '我明天就去买。', pinyin: 'Wǒ míngtiān jiù qù mǎi.', vietnamese: 'Ngày mai tôi sẽ đi mua.' }
        ]
      },
      {
        title: 'Hỏi về phong cảnh', characters: ['Du khách', 'Hướng dẫn'],
        lines: [
          { speaker: 0, chinese: '你觉得这个地方怎么样？', pinyin: 'Nǐ juéde zhège dìfāng zěnmeyàng?', vietnamese: 'Bạn cảm thấy chỗ này như thế nào?' },
          { speaker: 1, chinese: '非常漂亮，这里很有名。', pinyin: 'Fēicháng piàoliang, zhèlǐ hěn yǒumíng.', vietnamese: 'Vô cùng đẹp, ở đây rất nổi tiếng.' },
          { speaker: 0, chinese: '有很多中国人来这里旅游吗？', pinyin: 'Yǒu hěn duō Zhōngguó rén lái zhèlǐ lǚyóu ma?', vietnamese: 'Có nhiều người Trung Quốc đến đây du lịch không?' },
          { speaker: 1, chinese: '是的，冬天和春天来旅游的人最多。', pinyin: 'Shì de, dōngtiān hé chūntiān lái lǚyóu de rén zuì duō.', vietnamese: 'Đúng vậy, người tới du lịch vào mùa đông và mùa xuân là nhiều nhất.' },
          { speaker: 0, chinese: '因为这里冬天不下雪吗？', pinyin: 'Yīnwèi zhèlǐ dōngtiān bù xià xuě ma?', vietnamese: 'Vì ở đây mùa đông không có tuyết rơi sao?' },
          { speaker: 1, chinese: '对，这里天气比北京暖和。', pinyin: 'Duì, zhèlǐ tiānqì bǐ Běijīng nuǎnhuo.', vietnamese: 'Đúng, thời tiết ở đây ấm áp hơn Bắc Kinh.' }
        ]
      }
    ],

    /* L22 – Thể thao và sức khỏe */
    L22: [
      {
        title: 'Môn thể thao yêu thích', characters: ['Khanh', 'Nam'],
        lines: [
          { speaker: 0, chinese: '你平时喜欢做什么运动？', pinyin: 'Nǐ píngshí xǐhuān zuò shénme yùndòng?', vietnamese: 'Bình thường bạn thích tập môn thể thao gì?' },
          { speaker: 1, chinese: '我最喜欢打篮球，也喜欢踢足球。', pinyin: 'Wǒ zuì xǐhuān dǎ lánqiú, yě xǐhuān tī zúqiú.', vietnamese: 'Tôi thích chơi bóng rổ nhất, cũng thích đá bóng.' },
          { speaker: 0, chinese: '你打篮球打得非常好吧？', pinyin: 'Nǐ dǎ lánqiú dǎ de fēicháng hǎo ba?', vietnamese: 'Bạn đánh bóng rổ rất cừ đúng không?' },
          { speaker: 1, chinese: '我还行。你喜欢运动吗？', pinyin: 'Wǒ hái xíng. Nǐ xǐhuān yùndòng ma?', vietnamese: 'Tôi tạm ổn thôi. Bạn có thích thể thao không?' },
          { speaker: 0, chinese: '我每天早上都去跑步。', pinyin: 'Wǒ měitiān zǎoshang dōu qù pǎobù.', vietnamese: 'Sáng nào tôi cũng đi chạy bộ.' },
          { speaker: 1, chinese: '跑步对身体很好。', pinyin: 'Pǎobù duì shēntǐ hěn hǎo.', vietnamese: 'Chạy bộ rất tốt cho cơ thể.' },
          { speaker: 0, chinese: '明天你想一起去公园跑步吗？', pinyin: 'Míngtiān nǐ xiǎng yīqǐ qù gōngyuán pǎobù ma?', vietnamese: 'Ngày mai bạn có muốn cùng đi công viên chạy bộ không?' }
        ]
      },
      {
        title: 'Bơi lội mỗi tuần', characters: ['Cường', 'Vy'],
        lines: [
          { speaker: 0, chinese: '你每个星期去几次游泳？', pinyin: 'Nǐ měi ge xīngqī qù jǐ cì yóuyǒng?', vietnamese: 'Mỗi tuần bạn đi bơi mấy lần?' },
          { speaker: 1, chinese: '我每个星期去两次游泳。', pinyin: 'Wǒ měi ge xīngqī qù liǎng cì yóuyǒng.', vietnamese: 'Mỗi tuần tôi đi bơi hai lần.' },
          { speaker: 0, chinese: '游泳的时候，人多不多？', pinyin: 'Yóuyǒng de shíhòu, rén duō bù duō?', vietnamese: 'Trông lúc bơi, người có đông không?' },
          { speaker: 1, chinese: '有时候多，有时候不多。昨天人很少。', pinyin: 'Yǒushíhòu duō, yǒushíhòu bù duō. Zuótiān rén hěn xiǎo.', vietnamese: 'Đôi khi đông, đôi khi không đông. Hôm qua người rất ít.' },
          { speaker: 0, chinese: '游泳累不累？', pinyin: 'Yóuyǒng lèi bù lèi?', vietnamese: 'Đi bơi có mệt không?' },
          { speaker: 1, chinese: '有一点儿累，但是我很喜欢。', pinyin: 'Yǒu yīdiǎnr lèi, dànshì wǒ hěn xǐhuān.', vietnamese: 'Có một chút mệt, nhưng mà tôi rất thích.' }
        ]
      },
      {
        title: 'Chăm sóc sức khỏe', characters: ['Mẹ', 'Con trai'],
        lines: [
          { speaker: 0, chinese: '你不应该每天都在家看电视。', pinyin: 'Nǐ bù yīnggāi měitiān dōu zài jiā kàn diànshì.', vietnamese: 'Con không nên ngày nào cũng ở nhà xem ti vi.' },
          { speaker: 1, chinese: '可是外面太热了，我不想出去。', pinyin: 'Kěshì wàimiàn tài rè le, wǒ bù xiǎng chūqù.', vietnamese: 'Nhưng mà bên ngoài nóng lắm, con không muốn ra ngoài.' },
          { speaker: 0, chinese: '那你可以去游泳，运动对身体好。', pinyin: 'Nà nǐ kěyǐ qù yóuyǒng, yùndòng duì shēntǐ hǎo.', vietnamese: 'Vậy con có thể đi bơi, thể thao tốt cho sức khỏe.' },
          { speaker: 1, chinese: '好的，下午我和朋友一起去打篮球。', pinyin: 'Hǎo de, xiàwǔ wǒ hé péngyǒu yīqǐ qù dǎ lánqiú.', vietnamese: 'Vâng ạ, buổi chiều con và bạn cùng đi chơi bóng rổ.' },
          { speaker: 0, chinese: '玩篮球的时候要多喝水。', pinyin: 'Wán lánqiú de shíhòu yào duō hē shuǐ.', vietnamese: 'Trong lúc chơi bóng rổ con nhớ uống nhiều nước nhé.' },
          { speaker: 1, chinese: '我知道了，谢谢妈妈。', pinyin: 'Wǒ zhīdào le, xièxiè māma.', vietnamese: 'Con biết rồi ạ, cám ơn mẹ.' }
        ]
      }
    ],

    /* L23 – Học ngoại ngữ */
    L23: [
      {
        title: 'Khó khăn khi học tiếng Trung', characters: ['John', 'Giáo viên'],
        lines: [
          { speaker: 0, chinese: '老师，我觉得学习汉语太难了。', pinyin: 'Lǎoshī, wǒ juéde xuéxí Hànyǔ tài nán le.', vietnamese: 'Thưa cô, em cảm thấy học tiếng Trung khó quá.' },
          { speaker: 1, chinese: '你觉得什么地方最难？', pinyin: 'Nǐ juéde shénme dìfāng zuì nán?', vietnamese: 'Em cảm thấy điểm nào là khó nhất?' },
          { speaker: 0, chinese: '我觉得汉字非常难写。', pinyin: 'Wǒ juéde Hànzì fēicháng nán xiě.', vietnamese: 'Em thấy chữ Hán vô cùng khó viết.' },
          { speaker: 1, chinese: '写汉字是有点难，你要每天练习。', pinyin: 'Xiě Hànzì shì yǒudiǎn nán, nǐ yào měitiān liànxí.', vietnamese: 'Viết chữ Hán hơi khó một chút, em cần luyện tập mỗi ngày.' },
          { speaker: 0, chinese: '可是我听不懂别人说话。', pinyin: 'Kěshì wǒ tīngbùdǒng biérén shuōhuà.', vietnamese: 'Nhưng mà em cũng không nghe hiểu người khác nói gì.' },
          { speaker: 1, chinese: '因为听得太少了，你可以多看中国电影。', pinyin: 'Yīnwèi tīng de tài shǎo le, nǐ kěyǐ duō kàn Zhōngguó diànyǐng.', vietnamese: 'Bởi vì nghe quá ít, em có thể xem phim Trung Quốc nhiều hơn.' },
          { speaker: 0, chinese: '好的，老师，我会努力的。', pinyin: 'Hǎo de, lǎoshī, wǒ huì nǔlì de.', vietnamese: 'Vâng ạ, thưa cô, em sẽ cố gắng.' }
        ]
      },
      {
        title: 'Bí quyết giỏi tiếng Trung', characters: ['Mary', 'David'],
        lines: [
          { speaker: 0, chinese: '大卫，你的汉语说得真好。', pinyin: 'Dàwèi, nǐ de Hànyǔ shuō de zhēn hǎo.', vietnamese: 'David, tiếng Trung của bạn nói thật sự rất tốt.' },
          { speaker: 1, chinese: '谢谢你。我学习汉语两年了。', pinyin: 'Xièxiè nǐ. Wǒ xuéxí Hànyǔ liǎng nián le.', vietnamese: 'Cám ơn bạn. Tôi đã học tiếng Trung hai năm rồi.' },
          { speaker: 0, chinese: '你是怎么学习的？能告诉我吗？', pinyin: 'Nǐ shì zěnme xuéxí de? Néng gàosu wǒ ma?', vietnamese: 'Bạn đã học như thế nào vậy? Có thể kể mình nghe không?' },
          { speaker: 1, chinese: '我每天早上都读课文，也经常多听。', pinyin: 'Wǒ měitiān zǎoshang dōu dú kèwén, yě jīngcháng duō tīng.', vietnamese: 'Sáng nào tôi cũng đọc bài khóa, cũng thường xuyên nghe nhiều hơn.' },
          { speaker: 0, chinese: '你认识多少个汉字？', pinyin: 'Nǐ rènshi duōshǎo gè Hànzì?', vietnamese: 'Bạn nhận biết được bao nhiêu chữ Hán?' },
          { speaker: 1, chinese: '我不记得了，可能有一千个吧。', pinyin: 'Wǒ bù jìde le, kěnéng yǒu yī qiān gè ba.', vietnamese: 'Tôi không nhớ nữa, có lẽ khoảng một nghìn chữ.' },
          { speaker: 0, chinese: '真厉害，我想跟你一起学习。', pinyin: 'Zhēn lìhài, wǒ xiǎng gēn nǐ yīqǐ xuéxí.', vietnamese: 'Giỏi quá đi, tôi muốn cùng học với bạn.' }
        ]
      },
      {
        title: 'Ngôn ngữ khác', characters: ['An', 'Nam'],
        lines: [
          { speaker: 0, chinese: '你会说英语吗？', pinyin: 'Nǐ huì shuō Yīngyǔ ma?', vietnamese: 'Bạn biết nói tiếng Anh không?' },
          { speaker: 1, chinese: '我会一点儿，但是我英语说得不好。', pinyin: 'Wǒ huì yīdiǎnr, dànshì wǒ Yīngyǔ shuō de bù hǎo.', vietnamese: 'Tôi biết một chút, nhưng tiếng Anh của tôi nói không tốt.' },
          { speaker: 0, chinese: '为什么？', pinyin: 'Wèishénme?', vietnamese: 'Tại sao?' },
          { speaker: 1, chinese: '因为我的工作不用英语，所以我不经常说。', pinyin: 'Yīnwèi wǒ de gōngzuò bù yòng Yīngyǔ, suǒyǐ wǒ bù jīngcháng shuō.', vietnamese: 'Vì công việc của tôi không dùng đến tiếng Anh, nên tôi không hay nói.' },
          { speaker: 0, chinese: '现在懂外语很重要，我们可以互相帮助。', pinyin: 'Xiànzài dǒng wàiyǔ hěn zhòngyào, wǒmen kěyǐ hùxiāng bāngzhù.', vietnamese: 'Bây giờ hiểu ngoại ngữ rất quan trọng, chúng ta có thể giúp đỡ lẫn nhau.' },
          { speaker: 1, chinese: '好啊，我教你汉语，你教我英语。', pinyin: 'Hǎo a, wǒ jiāo nǐ Hànyǔ, nǐ jiāo wǒ Yīngyǔ.', vietnamese: 'Được thôi, tôi dạy bạn tiếng Trung, bạn dạy tôi tiếng Anh.' }
        ]
      }
    ],

    /* L24 – Kế hoạch tương lai */
    L24: [
      {
        title: 'Kế hoạch học tập', characters: ['Sinh viên', 'Giảng viên'],
        lines: [
          { speaker: 0, chinese: '老师，我明年想去中国学习。', pinyin: 'Lǎoshī, wǒ míngnián xiǎng qù Zhōngguó xuéxí.', vietnamese: 'Thưa thầy, năm tới em muốn đi Trung Quốc học.' },
          { speaker: 1, chinese: '是吗？你想准备考哪个大学？', pinyin: 'Shì ma? Nǐ xiǎng zhǔnbèi kǎo nǎ gè dàxué?', vietnamese: 'Thế à? Em muốn chuẩn bị thi vào trường Đại học nào?' },
          { speaker: 0, chinese: '我想考北京大学，您觉得可以吗？', pinyin: 'Wǒ xiǎng kǎo Běijīng Dàxué, nín juéde kěyǐ ma?', vietnamese: 'Em muốn thi Đại học Bắc Kinh, thầy thấy được không ạ?' },
          { speaker: 1, chinese: '我觉得很好，但是考试比较难。', pinyin: 'Wǒ juéde hěn hǎo, dànshì kǎoshì bǐjiào nán.', vietnamese: 'Thầy thấy rất tốt, nhưng bài thi khá là khó đấy.' },
          { speaker: 0, chinese: '所以我现在想开始准备，每天多做练习。', pinyin: 'Suǒyǐ wǒ xiànzài xiǎng kāishǐ zhǔnbèi, měitiān duō zuò liànxí.', vietnamese: 'Cho nên bây giờ em muốn bắt đầu chuẩn bị, mỗi ngày làm nhiều bài tập.' },
          { speaker: 1, chinese: '如果你有问题，都可以来问我。', pinyin: 'Rúguǒ nǐ yǒu wèntí, dōu kěyǐ lái wèn wǒ.', vietnamese: 'Nếu em có vấn đề gì, đều có thể tới hỏi thầy.' },
          { speaker: 0, chinese: '太感谢您了！', pinyin: 'Tài gǎnxiè nín le!', vietnamese: 'Vô cùng cảm ơn thầy ạ!' }
        ]
      },
      {
        title: 'Chuyến đi năm sau', characters: ['Lan', 'Hải'],
        lines: [
          { speaker: 0, chinese: '你希望明年可以做什么？', pinyin: 'Nǐ xīwàng míngnián kěyǐ zuò shénme?', vietnamese: 'Bạn hi vọng năm sau có thể làm gì?' },
          { speaker: 1, chinese: '我希望能去很多地方旅游。', pinyin: 'Wǒ xīwàng néng qù hěn duō dìfāng lǚyóu.', vietnamese: 'Tôi mong là có thể đi du lịch rất nhiều nơi.' },
          { speaker: 0, chinese: '中国你打算去吗？', pinyin: 'Zhōngguó nǐ dǎsuàn qù ma?', vietnamese: 'Bạn có định đi Trung Quốc không?' },
          { speaker: 1, chinese: '打算去，我想去看看下雪的日子。', pinyin: 'Dǎsuàn qù, wǒ xiǎng qù kànkan xià xuě de rìzi.', vietnamese: 'Có ý định đi, tôi muốn thử đi xem những ngày tuyết rơi.' },
          { speaker: 0, chinese: '那就得冬天去，你要买很多衣服。', pinyin: 'Nà jiù děi dōngtiān qù, nǐ yào mǎi hěn duō yīfu.', vietnamese: 'Thế thì phải đi vào mùa đông, bạn phải mua rất nhiều quần áo.' },
          { speaker: 1, chinese: '是的，所以除了旅游，我还想多赚钱。', pinyin: 'Shì de, suǒyǐ chúle lǚyóu, wǒ hái xiǎng duō zhuànqián.', vietnamese: 'Đúng vậy, nên ngoài du lịch, tôi còn muốn kiếm nhiều tiền tí.' },
          { speaker: 0, chinese: '祝你的计划成功！', pinyin: 'Zhù nǐ de jìhuà chénggōng!', vietnamese: 'Chúc kế hoạch của bạn thành công!' }
        ]
      },
      {
        title: 'Kỳ thi quan trọng', characters: ['Minh', 'Hoa'],
        lines: [
          { speaker: 0, chinese: '下个星期的考试，你准备好了吗？', pinyin: 'Xià ge xīngqī de kǎoshì, nǐ zhǔnbèi hǎo le ma?', vietnamese: 'Trận thi của tuần sau bạn đã chuẩn bị kỹ chưa?' },
          { speaker: 1, chinese: '还没准备好，我昨天生病了。', pinyin: 'Hái méi zhǔnbèi hǎo, wǒ zuótiān shēngbìng le.', vietnamese: 'Vẫn chưa chuẩn bị xong, hôm qua tôi bị ốm.' },
          { speaker: 0, chinese: '那你现在身体怎么样？', pinyin: 'Nà nǐ xiànzài shēntǐ zěnmeyàng?', vietnamese: 'Thế bây giờ cơ thể bạn sao rồi?' },
          { speaker: 1, chinese: '现在好多了，开始看书复习。', pinyin: 'Xiànzài hǎo duō le, kāishǐ kàn shū fùxí.', vietnamese: 'Bây giờ đỡ hơn nhiều rồi, bắt đầu đọc sách ôn tập.' },
          { speaker: 0, chinese: '这次考试的题很多，我们一起做吧。', pinyin: 'Zhè cì kǎoshì de tí hěn duō, wǒmen yīqǐ zuò ba.', vietnamese: 'Kỳ thi lần này có rất nhiều câu hỏi, tụi mình cùng làm nhé.' },
          { speaker: 1, chinese: '太好了，如果我不懂，请你帮助我。', pinyin: 'Tài hǎo le, rúguǒ wǒ bù dǒng, qǐng nǐ bāngzhù wǒ.', vietnamese: 'Tốt quá, nếu mình không hiểu gì, nhờ cậu giúp đỡ mình với nha.' }
        ]
      }
    ],

    /* L25 – Cảm xúc và tâm tư */
    L25: [
      {
        title: 'Tâm trạng làm việc', characters: ['Nam', 'Đồng nghiệp'],
        lines: [
          { speaker: 0, chinese: '这段时间你看起来很累。', pinyin: 'Zhè duàn shíjiān nǐ kànqǐlái hěn lèi.', vietnamese: 'Thời gian này nhìn thân hình bạn hơi mệt mỏi.' },
          { speaker: 1, chinese: '是的，每天上班的时间太长了。', pinyin: 'Shì de, měitiān shàngbān de shíjiān tài cháng le.', vietnamese: 'Đúng vậy, mỗi ngày thời gian đi làm đều quá dài.' },
          { speaker: 0, chinese: '为什么这么忙？', pinyin: 'Wèishénme zhème máng?', vietnamese: 'Vì sao lại bận rộn như vậy?' },
          { speaker: 1, chinese: '公司有很多新问题要处理。', pinyin: 'Gōngsī yǒu hěn duō xīn wèntí yào chǔlǐ.', vietnamese: 'Công ty có rất nhiều vấn đề mới cần xử lý.' },
          { speaker: 0, chinese: '你不快乐吗？', pinyin: 'Nǐ bú kuàilè ma?', vietnamese: 'Bạn không vui sao?' },
          { speaker: 1, chinese: '我不觉得快乐，我想休息几天。', pinyin: 'Wǒ bù juéde kuàilè, wǒ xiǎng xiūxi jǐ tiān.', vietnamese: 'Tôi chẳng thấy vui chút nào, tôi muốn được nghỉ vài hôm.' },
          { speaker: 0, chinese: '如果太累，就请假吧。', pinyin: 'Rúguǒ tài lèi, jiù qǐngjià ba.', vietnamese: 'Nếu quá mệt mỏi, thì hãy xin nghỉ phép đi.' }
        ]
      },
      {
        title: 'Buồn bã về tình bạn', characters: ['An', 'Bình'],
        lines: [
          { speaker: 0, chinese: '你今天怎么了？不高兴吗？', pinyin: 'Nǐ jīntiān zěnme le? Bù gāoxìng ma?', vietnamese: 'Hôm nay bạn sao vậy? Không vui hả?' },
          { speaker: 1, chinese: '我的朋友要去别的国家了。', pinyin: 'Wǒ de péngyǒu yào qù bié de guójiā le.', vietnamese: 'Bạn mình sắp đi sang một đất nước khác rồi.' },
          { speaker: 0, chinese: '难怪你看起来这么难过。', pinyin: 'Nánguài nǐ kàn qǐlái zhème nánguò.', vietnamese: 'Khó trách cậu trông lại thấy buồn đến thế.' },
          { speaker: 1, chinese: '我们以后很少见面，所以心里很难受。', pinyin: 'Wǒmen yǐhòu hěn shǎo jiànmiàn, suǒyǐ xīnli hěn nánshòu.', vietnamese: 'Chúng mình sau này sẽ ít được gặp nhau, cho nên trong lòng rất khó chịu.' },
          { speaker: 0, chinese: '不要伤心，你们可以在网上谈话呀。', pinyin: 'Búyào shāngxīn, nǐmen kěyǐ zài wǎngshàng tánhuà ya.', vietnamese: 'Đừng có buồn bã nữa, các bạn vẫn có thể chuyện trò qua mạng mà.' },
          { speaker: 1, chinese: '你说得对，我会习惯的。', pinyin: 'Nǐ shuō de duì, wǒ huì xíguàn de.', vietnamese: 'Bạn nói đúng đấy, tôi rồi sẽ quen.' }
        ]
      },
      {
        title: 'Mừng rỡ vì tin tốt', characters: ['Hồng', 'Vương'],
        lines: [
          { speaker: 0, chinese: '你今天早上一直都在笑，为什么？', pinyin: 'Nǐ jīntiān zǎoshang yīzhí dōu zài xiào, wèishénme?', vietnamese: 'Sáng nay bạn lúc nào cũng cười tủm tỉm, là sao thế?' },
          { speaker: 1, chinese: '这是因为我通过了HSK考试！', pinyin: 'Zhè shì yīnwèi wǒ tōngguò le HSK kǎoshì!', vietnamese: 'Đó là vì tôi đã thi qua chứng chỉ HSK rồi!' },
          { speaker: 0, chinese: '哇！真的太棒了！', pinyin: 'Wā! Zhēn de tài bàng le!', vietnamese: 'Oa! Điều đó đỉnh thật đấy nha!' },
          { speaker: 1, chinese: '我也觉得非常惊喜，之前的题目很难。', pinyin: 'Wǒ yě juéde fēicháng jīngxǐ, zhīqián de tímù hěn nán.', vietnamese: 'Mình cảm thấy thật sự ngạc nhiên vì đề trước khó lắm.' },
          { speaker: 0, chinese: '这是你辛苦学习的回报。', pinyin: 'Zhè shì nǐ xīnkǔ xuéxí de huíbào.', vietnamese: 'Đây là sự đền đáp cho công sức chăm chỉ học tập của bạn.' },
          { speaker: 1, chinese: '谢谢你！晚上我们一起出去吃大餐吧！', pinyin: 'Xièxiè nǐ! Wǎnshang wǒmen yīqǐ chūqù chī dàcān ba!', vietnamese: 'Cám ơn nhé! Tối nay tụi mình cùng ra ngoài dùng bữa linh đình đi nha!' },
          { speaker: 0, chinese: '好啊，我等不及了！', pinyin: 'Hǎo a, wǒ děngbùjí le!', vietnamese: 'Triển luôn, tôi chẳng thể đợi được thêm.' }
        ]
      }
    ],

    /* L26 – Cuộc sống hàng ngày */
    L26: [
      {
        title: 'Thói quen thức dậy', characters: ['Người mẹ', 'Con trai'],
        lines: [
          { speaker: 0, chinese: '你每天几点起床？', pinyin: 'Nǐ měitiān jǐ diǎn qǐchuáng?', vietnamese: 'Mỗi ngày con thức dậy lúc mấy giờ?' },
          { speaker: 1, chinese: '我一般七点半起床。', pinyin: 'Wǒ yībān qī diǎn bàn qǐchuáng.', vietnamese: 'Con thường dậy lúc bảy giờ rưỡi.' },
          { speaker: 0, chinese: '七点半太晚了，你应该早一点儿起床。', pinyin: 'Qī diǎn bàn tài wǎn le, nǐ yīnggāi zǎo yīdiǎnr qǐchuáng.', vietnamese: 'Bảy giờ rưỡi trễ quá rồi, con nên dậy sớm hơn một chút.' },
          { speaker: 1, chinese: '可是我昨天晚上十二点才睡觉。', pinyin: 'Kěshì wǒ zuótiān wǎnshang shí\'èr diǎn cái shuìjiào.', vietnamese: 'Nhưng mà tối hôm qua mười hai giờ con mới ngủ.' },
          { speaker: 0, chinese: '晚上十二点？你在做什么？', pinyin: 'Wǎnshang shí\'èr diǎn? Nǐ zài zuò shénme?', vietnamese: 'Mười hai giờ đêm hả? Con đang làm gì thế?' },
          { speaker: 1, chinese: '我在看书，因为今天有考试。', pinyin: 'Wǒ zài kàn shū, yīnwèi jīntiān yǒu kǎoshì.', vietnamese: 'Con đang đọc sách, bởi vì hôm nay có kỳ thi.' },
          { speaker: 0, chinese: '那考完试，你要好好休息。', pinyin: 'Nà kǎo wán shì, nǐ yào hǎohǎo xiūxi.', vietnamese: 'Vậy thi xong, con phải nghỉ ngơi cho tốt nhé.' }
        ]
      },
      {
        title: 'Chuyện bếp núc', characters: ['Vợ', 'Chồng'],
        lines: [
          { speaker: 0, chinese: '今天晚上谁做饭？', pinyin: 'Jīntiān wǎnshang shéi zuò fàn?', vietnamese: 'Tối hôm nay ai nấu cơm thế?' },
          { speaker: 1, chinese: '今天我做饭，你想吃什么？', pinyin: 'Jīntiān wǒ zuò fàn, nǐ xiǎng chī shénme?', vietnamese: 'Hôm nay anh làm cơm, em muốn ăn gì?' },
          { speaker: 0, chinese: '我想吃羊肉和一些蔬菜。', pinyin: 'Wǒ xiǎng chī yángròu hé yīxiē shūcài.', vietnamese: 'Em muốn ăn thịt cừu cùng với vài loại rau củ.' },
          { speaker: 1, chinese: '家里没有羊肉了，去买一点儿吧。', pinyin: 'Jiālǐ méiyǒu yángròu le, qù mǎi yīdiǎnr ba.', vietnamese: 'Ở nhà hết thịt cừu rồi, đi mua một ít đi.' },
          { speaker: 0, chinese: '好的，我也顺便去买点儿鸡蛋。', pinyin: 'Hǎo de, wǒ yě shùnbiàn qù mǎi diǎnr jīdān.', vietnamese: 'Được ạ, em cũng nhân tiện đi mua chút trứng gà luôn.' },
          { speaker: 1, chinese: '那你快去吧，我等你回来洗菜。', pinyin: 'Nà nǐ kuài qù ba, wǒ děng nǐ huílái xǐ cài.', vietnamese: 'Thế em mau đi đi, anh đợi em về rồi rửa rau.' }
        ]
      },
      {
        title: 'Sinh hoạt cuối tuần', characters: ['Bình', 'An'],
        lines: [
          { speaker: 0, chinese: '周末你一般做什么？', pinyin: 'Zhōumò nǐ yībān zuò shénme?', vietnamese: 'Cuối tuần bạn thường làm gì?' },
          { speaker: 1, chinese: '我一般在家打扫房间，洗衣服。', pinyin: 'Wǒ yībān zài jiā dǎsǎo fángjiān, xǐ yīfu.', vietnamese: 'Tôi thường ở nhà dọn dẹp phòng ốc, giặt giũ quần áo.' },
          { speaker: 0, chinese: '你不和朋友一起出去玩吗？', pinyin: 'Nǐ bù hé péngyǒu yīqǐ chūqù wán ma?', vietnamese: 'Bạn không cùng bạn bè đi ra ngoài chơi hay sao?' },
          { speaker: 1, chinese: '有时候出去喝咖啡或者看电影。', pinyin: 'Yǒushíhòu chūqù hē kāfēi huòzhě kàn diànyǐng.', vietnamese: 'Đôi khi cũng đi ra uống cà phê hay xem phim.' },
          { speaker: 0, chinese: '这个周末我们去看新电影吧。', pinyin: 'Zhège zhōumò wǒmen qù kàn xīn diànyǐng ba.', vietnamese: 'Cuối tuần này chúng mình đi rạp xem phim mới đi.' },
          { speaker: 1, chinese: '这真是一个好主意。', pinyin: 'Zhè zhēn shì yī gè hǎo zhǔyì.', vietnamese: 'Đây quả là một ý kiến vô cùng hay đó.' }
        ]
      }
    ],

    /* L27 – Tiền bạc và ngân hàng */
    L27: [
      {
        title: 'Đổi tiền ở ngân hàng', characters: ['Khách', 'Nhân viên'],
        lines: [
          { speaker: 0, chinese: '你好，我想把美元换成人民币。', pinyin: 'Nǐ hǎo, wǒ xiǎng bǎ měiyuán huàn chéng rénmínbì.', vietnamese: 'Xin chào, tôi muốn đổi tiền Đô La sang tiền Nhân dân tệ.' },
          { speaker: 1, chinese: '好的。今天的汇率是多少？', pinyin: 'Hǎo de. Jīntiān de huìlǜ shì duōshǎo?', vietnamese: 'Vâng ạ. Tỷ giá đổi của ngày hôm nay rơi vào bao nhiêu?' },
          { speaker: 0, chinese: '我刚看了，是一比六点九。', pinyin: 'Wǒ gāng kàn le, shì yī bǐ liù diǎn jiǔ.', vietnamese: 'Tôi mới xem qua, là một đổi được sáu phẩy chín đấy.' },
          { speaker: 1, chinese: '没问题，你想换多少美元？', pinyin: 'Méi wèntí, nǐ xiǎng huàn duōshǎo měiyuán?', vietnamese: 'Không vấn đề gì, ông muốn đổi bao nhiêu Đô La ạ?' },
          { speaker: 0, chinese: '我换两千美元，能快一点儿吗？', pinyin: 'Wǒ huàn liǎng qiān měiyuán, néng kuài yīdiǎnr ma?', vietnamese: 'Tôi đổi hai ngàn đô, có thể làm thao tác nhanh chút được không?' },
          { speaker: 1, chinese: '请等五分钟，马上给您办好。', pinyin: 'Qǐng děng wǔ fēnzhōng, mǎshàng gěi nín bàn hǎo.', vietnamese: 'Xin ông hãy nán lại dăm phút, liền sẽ làm giúp ông ngay đây.' }
        ]
      },
      {
        title: 'Trợ giúp về tài khoản', characters: ['Vương', 'Quản lý viên'],
        lines: [
          { speaker: 0, chinese: '我的银行卡不能用了，怎么办？', pinyin: 'Wǒ de yínháng kǎ bùnéng yòng le, zěnme bàn?', vietnamese: 'Thẻ ngân hàng của tôi lại không thao tác được nữa, chuyện này sao đây?' },
          { speaker: 1, chinese: '请问您的银行卡是什么时候办的？', pinyin: 'Qǐngwèn nín de yínháng kǎ shì shénme shíhòu bàn de?', vietnamese: 'Xin hỏi thẻ của ngài là làm từ khi nào?' },
          { speaker: 0, chinese: '三年前办的，但是我忘了密码。', pinyin: 'Sān nián qián bàn de, dànshì wǒ wàng le mìmǎ.', vietnamese: 'Làm hồi ba năm trước rồi, nhưng tôi lỡ quên mất tiêu luôn mật khẩu.' },
          { speaker: 1, chinese: '没关系，请把身份证给我看一看。', pinyin: 'Méi guānxi, qǐng bǎ shēnfènzhèng gěi wǒ kàn yī kàn.', vietnamese: 'Đừng lo, mời ngài đem lấy thẻ căn cước ra đưa tôi xem coi xem sao.' },
          { speaker: 0, chinese: '给你，现在帮我改密码可以吗？', pinyin: 'Gěi nǐ, xiànzài bāng wǒ gǎi mìmǎ kěyǐ ma?', vietnamese: 'Của cô đây, tiện đây đổi giùm thẻ cho tôi đi nhé.' },
          { speaker: 1, chinese: '可以，请在这里写下你的新密码。', pinyin: 'Kěyǐ, qǐng zài zhèlǐ xiě xià nǐ de xīn mìmǎ.', vietnamese: 'Không sao, mời ngài hãy điền ngay mật khẩu mới vô cái chỗ này nha.' }
        ]
      },
      {
        title: 'Mua quà tặng', characters: ['Nam', 'Mẹ'],
        lines: [
          { speaker: 0, chinese: '妈妈，我没有钱了。你可以给我一点儿吗？', pinyin: 'Māma, wǒ méiyǒu qián le. Nǐ kěyǐ gěi wǒ yīdiǎnr ma?', vietnamese: 'Mẹ à mẹ ơi, con không còn xíu tiền nào cả rồi. Cho con ít được không?' },
          { speaker: 1, chinese: '你上个星期还有一千块钱。怎么花完了？', pinyin: 'Nǐ shàng ge xīngqī hái yǒu yī qiān kuài qián. Zěnme huā wán le?', vietnamese: 'Cái hồi tuần vừa rồi con mới có được một ngàn tệ mà. Sao lẹ thế tiêu sạch là sao?' },
          { speaker: 0, chinese: '因为我给朋友买了一块手表做生日礼物。', pinyin: 'Yīnwèi wǒ gěi péngyǒu mǎi le yī kuài shǒubiǎo zuò shēngrì lǐwù.', vietnamese: 'Vì con đã dành riêng tiền đi mua tặng cho đứa bạn hẳn cái đồng hồ dịp sinh nhật nó rồi.' },
          { speaker: 1, chinese: '那手表多少钱？', pinyin: 'Nà shǒubiǎo duōshǎo qián?', vietnamese: 'Thế cái chiếc đồng hồ đắt đó bao nhiêu tiền?' },
          { speaker: 0, chinese: '八百多块钱。', pinyin: 'Bābǎi duō kuài qián.', vietnamese: 'Cũng hơn tám trăm đồng thưa mẹ.' },
          { speaker: 1, chinese: '好吧，我再给你五百块钱，省着点儿用。', pinyin: 'Hǎo ba, wǒ zài gěi nǐ wǔbǎi kuài qián, shěng zhe diǎnr yòng.', vietnamese: 'Đành vậy đi, mẹ cho con thêm luôn cái năm trăm nữa đấy nhé, biết đường mà xài ít thôi.' }
        ]
      }
    ],

    /* L28 – Bệnh viện và thuốc */
    L28: [
      {
        title: 'Tư vấn bệnh', characters: ['Bệnh nhân', 'Bác sĩ'],
        lines: [
          { speaker: 0, chinese: '医生，这是我的检查结果。', pinyin: 'Yīshēng, zhè shì wǒ de jiǎnchá jiéguǒ.', vietnamese: 'Thưa bác sĩ, đây là kết quả kiểm tra của con đây ạ.' },
          { speaker: 1, chinese: '看起来没有什么大问题。', pinyin: 'Kàn qǐlái méiyǒu shénme dà wèntí.', vietnamese: 'Nhìn thì có vẻ đâu nghiêm trọng lắm đâu nhỉ.' },
          { speaker: 0, chinese: '但是我总是觉得头很疼。', pinyin: 'Dànshì wǒ zǒng shì juéde tóu hěn téng.', vietnamese: 'Cứ mà sao con thấy trong đầu nó đau dữ thần.' },
          { speaker: 1, chinese: '你可能是因为太累了才头疼。', pinyin: 'Nǐ kěnéng shì yīnwèi tài lèi le cái tóuténg.', vietnamese: 'Có thì là do làm quá mệt lử ra mà đâm đau đầu đó thôi.' },
          { speaker: 0, chinese: '我需要吃药吗？', pinyin: 'Wǒ xūyào chī Yào ma?', vietnamese: 'Mô Phật thuốc than gì đây không thế hở bác sĩ kia?' },
          { speaker: 1, chinese: '我给你开一点儿药。多休息就好了。', pinyin: 'Wǒ gěi nǐ kāi yīdiǎnr yào. Duō xiūxi jiù hǎo le.', vietnamese: 'Thôi thì để ta kê đơn. Nhớ về phải biết nằm mà nghỉ cho nhiều đấy, được chưa.' }
        ]
      },
      {
        title: 'Ăn uống hợp lý', characters: ['Linh', 'Bà'],
        lines: [
          { speaker: 0, chinese: '奶奶，多吃点儿蔬菜，对身体好。', pinyin: 'Nǎinai, duō chī diǎnr shūcài, duì shēntǐ hǎo.', vietnamese: 'Nội hỡi nội ơi, mình ráng mà ăn thật nhiều rau cỏ vào. Tốt cho cơ thể lắm đó mà.' },
          { speaker: 1, chinese: '人老了，吃什么都不觉得好吃。', pinyin: 'Rén lǎo le, chī shénme dōu bù juéde hǎochī.', vietnamese: 'Khi con người đã lỡ sang tuổi xế tà thì, có mà ăn tới sơn hào hải vị thì liệu mần cái chi ngon chứ ha.' },
          { speaker: 0, chinese: '您要是不想吃饭，可以喝点儿果汁。', pinyin: 'Nín yàoshi bù xiǎng chīfàn, kěyǐ hē diǎnr guǒzhī.', vietnamese: 'Nếu như cụ chẳng có buồn miệng nuốt nổi miếng cơm, uống thì miếng nước với cái hoa quả vậy.' },
          { speaker: 1, chinese: '好，帮我拿一杯西瓜汁来。', pinyin: 'Hǎo, bāng wǒ ná yī bēi xīguā zhī lái.', vietnamese: 'Được, con mang tới cho bà liền li nước giải khát mà làm từ quả dưa hấu đó.' },
          { speaker: 0, chinese: '您还需要吃药，别忘了。', pinyin: 'Nín hái xūyào chī yào, bié wàng le.', vietnamese: 'À nhớ đấy nha, bà nhà mình này còn phải nạp viên nang thuốc vào, chẳng thể được có quyền quên nhé.' },
          { speaker: 1, chinese: '我记得，晚上睡觉前我会吃的。', pinyin: 'Wǒ jìde, wǎnshang shuìjiào qián wǒ huì chī de.', vietnamese: 'Nội minh mẫn chán con. Đợi lát chiều tối đến lúc chuẩn bị đi nằm, bà tu xong ngay cũng chẳng sao ha.' }
        ]
      },
      {
        title: 'Hồi phục phẫu thuật', characters: ['Đồng nghiệp A', 'Đồng nghiệp B'],
        lines: [
          { speaker: 0, chinese: '听说王经理生病了，在医院。', pinyin: 'Tīngshuō Wáng jīnglǐ shēngbìng le, zài yīyuàn.', vietnamese: 'Mình nghe đồn là Giám đốc vương bị ốm rồi, đang phải ở trong viện lận nha.' },
          { speaker: 1, chinese: '是啊，他上个星期做了一个手术。', pinyin: 'Shì a, tā shàng ge xīngqī zuò le yī gè shǒushù.', vietnamese: 'Phải, người ta tuần trước thì mới dính vô ngay cái phẫu thuật liền mà lại.' },
          { speaker: 0, chinese: '我们去医院看他怎么样？', pinyin: 'Wǒmen qù yīyuàn kàn tā zěnmeyàng?', vietnamese: 'Thế thì tụi mình thử sang bệnh viện thăm dò ông ấy, có ra sao thì liệu nhỉ?' },
          { speaker: 1, chinese: '好主意，买点儿什么去好呢？', pinyin: 'Hǎo zhǔyì, mǎi diǎnr shénme qù hǎo ne?', vietnamese: 'Quả là diệu kế, xong mình phải xách ngay món chi mang vào cho hợp lý.' },
          { speaker: 0, chinese: '买点儿苹果或者牛奶吧，对病人好。', pinyin: 'Mǎi diǎnr píngguǒ huòzhě niúnǎi ba, duì bìngrén hǎo.', vietnamese: 'Hay tụi mình tậu ngay cái thùng táo hay là thùng sữa cho xong lẹ, cho người bệnh nó bổ.' },
          { speaker: 1, chinese: '行，下班以后我们就打车过去。', pinyin: 'Xíng, xiàbān yǐhòu wǒmen jiù dǎchē guòqù.', vietnamese: 'Tuyệt, thế thôi thì tan ca xong ta bắt cái taxi tới.' }
        ]
      }
    ],

    /* L29 – Công nghệ và internet */
    L29: [
      {
        title: 'Làm quen máy tính', characters: ['Nhân viên mới', 'Nhân viên cũ'],
        lines: [
          { speaker: 0, chinese: '不好意思，这台电脑我不太会用。', pinyin: 'Bù hǎoyìsi, zhè tái diànnǎo wǒ bú tài huì yòng.', vietnamese: 'Xin lỗi, cái con máy tính này tôi chẳng lấy gì mà rành cho cam.' },
          { speaker: 1, chinese: '没关系，哪里不懂可以问我。', pinyin: 'Méi guānxi, nǎlǐ bù dǒng kěyǐ wèn wǒ.', vietnamese: 'Chẳng có sao đâu mà. Có phần sao lạ cứ việc đến hỏi coi.' },
          { speaker: 0, chinese: '我要怎么把这个文件发给老板电脑上。', pinyin: 'Wǒ yào zěnme bǎ zhège wénjiàn fā gěi lǎobǎn diànnǎo shàng.', vietnamese: 'Phải thế này thì làm sao mần gửi tài liệu văn kiện này cho sang tới tay sếp chủ được lên.' },
          { speaker: 1, chinese: '你可以用电子邮件发过去。', pinyin: 'Nǐ kěyǐ yòng diànzǐ yóujiàn fā guòqù.', vietnamese: 'Dùng luôn với cái mà gọi là email đặng qua ngay thôi.' },
          { speaker: 0, chinese: '可以拿你的电脑示范给我看吗？', pinyin: 'Kěyǐ ná nǐ de diànnǎo shìfàn gěi wǒ kàn ma?', vietnamese: 'Bạn lấy xem thử cái máy tính thao tác minh hoạ lên tôi dòm theo được chăng?' },
          { speaker: 1, chinese: '好的，你看我怎么做。', pinyin: 'Hǎo de, nǐ kàn wǒ zěnme zuò.', vietnamese: 'Nào, xem qua đi thao tác tôi thế nào đây mà học cho nó dễ.' }
        ]
      },
      {
        title: 'Xài điện thoại mới', characters: ['Ông nội', 'Cháu'],
        lines: [
          { speaker: 0, chinese: '我不明白，这手机怎么照相机？', pinyin: 'Wǒ bù míngbái, zhè shǒujī zěnme zhàoxiàngjī?', vietnamese: 'Trời hỡi nó thế nào, máy điện thoại chụp ảnh kiểu gì thế?' },
          { speaker: 1, chinese: '爷爷，这很简单。你点击这个图标。', pinyin: 'Yéye, zhè hěn jiǎndān. Nǐ diǎnjī zhège túbiāo.', vietnamese: 'Quá muỗi dễ lắm ông ơi. Đấy nhấn trỏ ngón tay tới trên vào biểu tượng đi.' },
          { speaker: 0, chinese: '那怎么发给别人呢？', pinyin: 'Nà zěnme fā gěi biérén ne?', vietnamese: 'Cớ sao ta gửi sang cho cả mà kẻ kia coi luôn?' },
          { speaker: 1, chinese: '你看这里有一个箭头，点一下就能发了。', pinyin: 'Nǐ kàn zhèlǐ yǒu yī gè jiàntóu, diǎn yí xià jiù néng fā le.', vietnamese: 'Ngắm vào đấy có hình ngay chóp mũi tên, chỉ việc mần thao tác gửi được đi hết ngay.' },
          { speaker: 0, chinese: '太神奇了，现在手机什么都能做。', pinyin: 'Tài shénqí le, xiànzài shǒujī shénme dōu néng zuò.', vietnamese: 'Xảo diệu chi lắm vậy à nha, máy bây giờ nó làm ăn kiểu quỷ thần.' },
          { speaker: 1, chinese: '是的，爷爷，以后上网也很方便。', pinyin: 'Shì de, yéye, yǐhòu shàngwǎng yě hěn fāngbiàn.', vietnamese: 'Vâng ạ, mai về ông lướt web trên cái đấy thật quá mà nó đã.' }
        ]
      },
      {
        title: 'Làm mảng mạng rớt', characters: ['Khách Víp', 'Kỹ Thuật'],
        lines: [
          { speaker: 0, chinese: '为什么我的电脑不能上网了？', pinyin: 'Wèishénme wǒ de diànnǎo bùnéng shàngwǎng le?', vietnamese: 'Ông xem lại coi máy tính cái kiểu gì mà không có lên mạng gì kia.' },
          { speaker: 1, chinese: '请等一下，让我查一查网络的问题。', pinyin: 'Qǐng děng yíxià, ràng wǒ chá yi chá wǎngluò de wèntí.', vietnamese: 'Xin chờ nán lại đôi chút, kiểm cái vấn đề internet có ra thế sao luôn.' },
          { speaker: 0, chinese: '是不是我们这边的线路断了呢。', pinyin: 'Shì bú shì wǒmen zhèbiān de xiànlù duàn le ne.', vietnamese: 'Thế có phải là mạng đường truyền bị đứt đoạn rồi chăng hả?' },
          { speaker: 1, chinese: '看起来不是，是路由器出错了。', pinyin: 'Kàn qǐlái bú shì, shì lùyúqì chūcuò le.', vietnamese: 'Không không chẳng bao giờ là vậy, lỗi này dính cục router rồi cơ.' },
          { speaker: 0, chinese: '那什么时候能修理好？', pinyin: 'Nà shénme shíhòu néng xiūlǐ hǎo?', vietnamese: 'Khắc phục bao giờ mần xong lên ngay lại cho đây?' },
          { speaker: 1, chinese: '非常快，重新启动一下就好了。', pinyin: 'Fēicháng kuài, chóngxīn qǐdòng yí xià jiù hǎo le.', vietnamese: 'Khoảng một tí xíu à, để tôi tắt máy cục kích làm cho nó lên chạy lại cho coi.' }
        ]
      }
    ],

    /* L30 – Bạn bè và quan hệ xã hội */
    L30: [
      {
        title: 'Hoàn cảnh kết bạn', characters: ['Cảnh sát', 'Nhân chứng'],
        lines: [
          { speaker: 0, chinese: '请问，您是怎么认识那个人的？', pinyin: 'Qǐngwèn, nín shì zěnme rènshi nà ge rén de?', vietnamese: 'Xin hỏi ngài làm thế nào mà quen biết được người kia vậy?' },
          { speaker: 1, chinese: '我是上个月在图书馆里认识他的。', pinyin: 'Wǒ shì shàng ge yuè zài túshūguǎn lǐ rènshi tā de.', vietnamese: 'Tháng qua đó chứ đâu, tôi cùng cậu ta có dịp chạm mặt bên trong thư viện.' },
          { speaker: 0, chinese: '你们经常在一起吗？', pinyin: 'Nǐmen jīngcháng zài yīqǐ ma?', vietnamese: 'Có những dịp các anh gặp cũng khá gần gũi à?' },
          { speaker: 1, chinese: '不经常，我们偶尔一起喝咖啡。', pinyin: 'Bù jīngcháng, wǒmen ǒu\'ěr yīqǐ hē kāfēi.', vietnamese: 'Làm gì có đâu, tụi tôi lâu lâu chỉ húp tí chung li cà phê thui.' },
          { speaker: 0, chinese: '他有没有告诉你他的工作是什么？', pinyin: 'Tā yǒu méiyǒu gàosu nǐ tā de gōngzuò shì shénme?', vietnamese: 'Hắn đấy rốt cuộc đã đề cập gì cùng làm loại nghề nghiệp về cho anh kể?' },
          { speaker: 1, chinese: '他说是来这儿做生意的。', pinyin: 'Tā shuō shì lái zhèr zuò shēngyì de.', vietnamese: 'Cha nội bảo tôi hắn đến đây qua mần chuyện mua buôn có kinh doanh thôi đấy chứ.' }
        ]
      },
      {
        title: 'Sinh nhật bạn bè', characters: ['Kiên', 'Hà'],
        lines: [
          { speaker: 0, chinese: '今天是玛丽的生日，你知道吗？', pinyin: 'Jīntiān shì Mǎlì de shēngrì, nǐ zhīdào ma?', vietnamese: 'Bạn có nhận được tin nay đúng dịp sinh nhật nhỏ Mary hay không?' },
          { speaker: 1, chinese: '天啊，我完了，我没准备礼物啊。', pinyin: 'Tiān a, wǒ wán le, wǒ méi zhǔnbèi lǐwù a.', vietnamese: 'Chết tôi chưa kìa xong đời, tui này hỡi còn chưa mua sửa sang chi cả.' },
          { speaker: 0, chinese: '没事，晚上有很多同学一起去呢。', pinyin: 'Méi shì, wǎnshang yǒu hěn duō tóngxué yīqǐ qù ne.', vietnamese: 'Í chớ sao, rằm tối tụ tập lũ bạn lớp lên tới tắp cùng lên thôi ấy.' },
          { speaker: 1, chinese: '我们可以现在去商场买些什么。', pinyin: 'Wǒmen kěyǐ xiànzài qù shāngchǎng mǎi xiē shénme.', vietnamese: 'Rủ luôn tới cùng qua thương mại kia chạy sộc kiếm chi mà tậu chút đi.' },
          { speaker: 0, chinese: '我们去买鲜花怎么看？', pinyin: 'Wǒmen qù mǎi xiānhuā zěnme kàn?', vietnamese: 'Bộ hai tụi mình tìm chỗ xem bó hoa tươi đẹp tặng chả nhẽ còn?' },
          { speaker: 1, chinese: '这主意可以，她最喜欢红花了！', pinyin: 'Zhè zhǔyì kěyǐ, tā zuì xǐhuān hóng huā le!', vietnamese: 'Tốt quá tuyệt lắm mầy, thì nó kia lại cưng mấy đoá vô diêm hoa đỏ.' }
        ]
      },
      {
        title: 'Giúp đỡ lúc khó khăn', characters: ['Cậu học sinh', 'Bạn thân'],
        lines: [
          { speaker: 0, chinese: '要是没有你的帮助，我就惨了。', pinyin: 'Yàoshi méiyǒu nǐ de bāngzhù, wǒ jiù cǎn le.', vietnamese: 'May mà có cái công cậu lại để mà phụ tôi, chớ không mình đây thảm rồi.' },
          { speaker: 1, chinese: '大家都是好朋友，不用这么客气嘛。', pinyin: 'Dàjiā dōu shì hǎo péngyǒu, búyòng zhème kèqi ma.', vietnamese: 'Chỗ đồng bạn tri kỷ với nhau thôi, bày đặt vô cái đạo lí khách sáo mần chi.' },
          { speaker: 0, chinese: '你觉得我的汉语什么时候能变好？', pinyin: 'Nǐ juéde wǒ de Hànyǔ shénme shíhòu néng biàn hǎo?', vietnamese: 'Cậu cho điểm môn này xem hồi nào cái năng lực Hán ngữ của tôi có lên trình.' },
          { speaker: 1, chinese: '别急，多说多练就慢慢熟了呀。', pinyin: 'Bié jí, duō shuō duō liàn jiù mànman shú le ya.', vietnamese: 'Đừng sốt sắng quá khỉ khô, hãy mài dũa ăn nói năng riết thì thể chăng quen dần cái một.' },
          { speaker: 0, chinese: '可是我总是常常忘了字呀。', pinyin: 'Kěshì wǒ zǒng shì chángcháng wàng le zì ya.', vietnamese: 'Ai da ngặt cái nỗi sao thì cứ lại mải dăm ngày quên phứt sạch bách từ vựng luôn ta.' },
          { speaker: 1, chinese: '这也是没办法，大家只能加油咯。', pinyin: 'Zhè yě shì méi bànfǎ, dàjiā zhǐ néng jiāyóu lo.', vietnamese: 'Tạo hóa đành thôi vô phương chịu nhường vạn thọ thôi, chúng ta ráng cố lên cố lên nào.' }
        ]
      }
    ]
  };

  /* ============================================================
     HSK 3 – Hội thoại phức tạp, từ vựng nâng cao
     ============================================================ */
  const dialoguesHSK3 = {

    /* L31 – Công việc văn phòng */
    L31: [
      {
        title: 'Bàn bạc công việc', characters: ['Giám đốc', 'Nhân viên'],
        lines: [
          { speaker: 0, chinese: '大家准备好了吗？开始开会吧。', pinyin: 'Dàjiā zhǔnbèi hǎo le ma? Kāishǐ kāihuì ba.', vietnamese: 'Mọi người chuẩn bị xong chưa? Bắt đầu họp thôi.' },
          { speaker: 1, chinese: '经理，这个项目的截止日期是下个星期五。', pinyin: 'Jīnglǐ, zhège xiàngmù de jiézhǐ rìqī shì xià ge xīngqī wǔ.', vietnamese: 'Giám đốc, hạn chót của dự án này là thứ Sáu tuần sau.' },
          { speaker: 0, chinese: '时间有点短，我们需要提高工作效率。', pinyin: 'Shíjiān yǒudiǎn duǎn, wǒmen xūyào tígāo gōngzuò xiàolǜ.', vietnamese: 'Thời gian hơi ngắn, chúng ta cần nâng cao hiệu suất làm việc.' },
          { speaker: 1, chinese: '没问题，我和借来的几个新同事会一起做。', pinyin: 'Méi wèntí, wǒ hé jiè lái de jǐ gè xīn tóngshì huì yīqǐ zuò.', vietnamese: 'Không sao, tôi và vài đồng nghiệp mới mượn tới sẽ cùng làm.' },
          { speaker: 0, chinese: '那好，有什么问题可以随时来找我解决。', pinyin: 'Nà hǎo, yǒu shénme wèntí kěyǐ suíshí lái zhǎo wǒ jiějué.', vietnamese: 'Được rồi, có vấn đề gì có thể đến tìm tôi giải quyết bất cứ lúc nào.' },
          { speaker: 1, chinese: '好的，会议结束后我会把计划发给您。', pinyin: 'Hǎo de, huìyì jiéshù hòu wǒ huì bǎ jìhuà fā gěi nín.', vietnamese: 'Vâng ạ, họp xong tôi sẽ đem kế hoạch gửi cho anh.' }
        ]
      },
      {
        title: 'Phỏng vấn xin việc', characters: ['Người phỏng vấn', 'Ứng viên'],
        lines: [
          { speaker: 0, chinese: '请坐，能简单介绍一下你自己吗？', pinyin: 'Qǐng zuò, néng jiǎndān jièshào yí xià nǐ zìjǐ ma?', vietnamese: 'Mời ngồi, có thể giới thiệu đơn giản một chút về bản thân bạn không?' },
          { speaker: 1, chinese: '好的。我以前在一家大公司做过两年。', pinyin: 'Hǎo de. Wǒ yǐqián zài yī jiā dà gōngsī zuò guò liǎng nián.', vietnamese: 'Vâng. Trước đây tôi từng làm hai năm ở một công ty lớn.' },
          { speaker: 0, chinese: '你觉得自己的优点是什么？', pinyin: 'Nǐ juéde zìjǐ de yōudiǎn shì shénme?', vietnamese: 'Bạn nghĩ ưu điểm của mình là gì?' },
          { speaker: 1, chinese: '我工作很认真，也能很快发现工作中的问题。', pinyin: 'Wǒ gōngzuò hěn rènzhēn, yě néng hěn kuài fāxiàn gōngzuò zhōng de wèntí.', vietnamese: 'Tôi làm việc rất nghiêm túc, cũng có thể nhanh chóng phát hiện các vấn đề trong lúc làm.' },
          { speaker: 0, chinese: '如果总是需要加班，你愿意吗？', pinyin: 'Rúguǒ zǒng shì xūyào jiābān, nǐ yuànyì ma?', vietnamese: 'Nếu như lúc nào cũng cần phải tăng ca, bạn có bằng lòng không?' },
          { speaker: 1, chinese: '只要是工作需要，我必须完成到底。', pinyin: 'Zhǐyào shì gōngzuò xūyào, wǒ bìxū wánchéng dàodǐ.', vietnamese: 'Chỉ cần là do công việc đòi hỏi, tôi buộc phải hoàn thành tới cùng.' }
        ]
      },
      {
        title: 'Đồng nghiệp nói chuyện', characters: ['An', 'Nam'],
        lines: [
          { speaker: 0, chinese: '你的那份报告写好了吗？', pinyin: 'Nǐ de nà fèn bàogào xiě hǎo le ma?', vietnamese: 'Cái bản báo cáo kia của bạn đã viết xong rồi à?' },
          { speaker: 1, chinese: '别提了，我的电脑被弟弟弄坏了。', pinyin: 'Bié tí le, wǒ de diànnǎo bèi dìdi nòng huài le.', vietnamese: 'Đừng có nhắc nữa, máy tính của tôi bị em trai tôi làm hỏng rồi.' },
          { speaker: 0, chinese: '啊？那你今天下午怎么办？', pinyin: 'À? Nà nǐ jīntiān xiàwǔ zěnme bàn?', vietnamese: 'Hả? Thế chiều nay bạn làm thế nào đây?' },
          { speaker: 1, chinese: '我打算借别人的电脑用一会儿。', pinyin: 'Wǒ dǎsuàn jiè biérén de diànnǎo yòng yí huìr.', vietnamese: 'Tôi tính mượn máy của người khác dùng một lát.' },
          { speaker: 0, chinese: '我的现在不用，你拿去用吧。', pinyin: 'Wǒ de xiànzài bú yòng, nǐ ná qù yòng ba.', vietnamese: 'Máy của tôi hiện không dùng, bạn đem qua dùng đi.' },
          { speaker: 1, chinese: '太谢谢你了，我一定很快还给你。', pinyin: 'Tài xièxie nǐ le, wǒ yídìng hěn kuài huán gěi nǐ.', vietnamese: 'Quá cảm ơn bạn rồi, tôi chắc chắn sẽ trả lại cho bạn nhanh thôi.' }
        ]
      }
    ],

    /* L32 – Môi trường và thiên nhiên */
    L32: [
      {
        title: 'Bảo vệ môi trường', characters: ['Cô giáo', 'Sinh viên'],
        lines: [
          { speaker: 0, chinese: '今天我们讨论一个问题：怎么保护环境？', pinyin: 'Jīntiān wǒmen tǎolùn yī gè wèntí: zěnme bǎohù huánjìng?', vietnamese: 'Hôm nay chúng ta bàn về một vấn đề: Làm thế nào để bảo vệ môi trường?' },
          { speaker: 1, chinese: '我觉得我们应该少用塑料袋。', pinyin: 'Wǒ juéde wǒmen yīnggāi shǎo yòng sùliào dài.', vietnamese: 'Tôi cảm thấy chúng ta nên xài ít túi nilon đi.' },
          { speaker: 0, chinese: '很好的想法。空气污染越来越严重了。', pinyin: 'Hěn hǎo de xiǎngfǎ. Kōngqì wūrǎn yuèlái yuè yánzhòng le.', vietnamese: 'Lối suy nghĩ rất hay. Ô nhiễm trên không khí thì ngày càng chuyển biến trầm trọng rồi.' },
          { speaker: 1, chinese: '所以我们大家必须多种树。', pinyin: 'Suǒyǐ wǒmen dàjiā bìxū duō zhǒng shù.', vietnamese: 'Bởi vậy nên tất cả chúng ta nhất định phải trồng nhiều cây hơn nữa.' },
          { speaker: 0, chinese: '那么为了我们的城市又该做点什么？', pinyin: 'Nàme wèile wǒmen de chéngshì yòu gāi zuò diǎnr shénme?', vietnamese: 'Vậy để vì cái thành phố của cả bọn chúng ta thì phải lại cần nên mần điều chi nào?' },
          { speaker: 1, chinese: '可以多骑自行车，少开汽车。', pinyin: 'Kěyǐ duō qí zìxíngchē, shǎo kāi qìchē.', vietnamese: 'Có thể đạp chiếc xe đạp thêm nhiều, ít có lái dòng xe hơi.' }
        ]
      },
      {
        title: 'Đi dạo công viên', characters: ['Cường', 'Vũ'],
        lines: [
          { speaker: 0, chinese: '这个公园的环境真是不错啊。', pinyin: 'Zhège gōngyuán de huánjìng zhēn shì búcuò a.', vietnamese: 'Khí trời hoàn cảnh cái khu công viên đây thật tốt biết bao ha.' },
          { speaker: 1, chinese: '是的，这里的树木很茂盛。空气也很新鲜。', pinyin: 'Shì de, zhèlǐ de shùmù hěn màoshèng. Kōngqì yě hěn xīnxiān.', vietnamese: 'Đúng thế đó, lùm cây chỗ này vô cùng xum xuê quá thể. Luồng không khí chăng cũng trong sạch lắm thay.' },
          { speaker: 0, chinese: '但是河里的水好像不太干净。', pinyin: 'Dànshì hé lǐ de shuǐ hǎoxiàng bú tài gānjìng.', vietnamese: 'Ấy vậy đoạn nước dưới lòng con mương lại dường giống như chưa lấy được chi là sạch đâu nhe.' },
          { speaker: 1, chinese: '我发现很多人把垃圾扔到了河边。', pinyin: 'Wǒ fāxiàn hěn duō rén bǎ lājī rēng dào le hé biān.', vietnamese: 'Tôi tinh ý nhác thấy nhiều lắm người cứ tiện cái thói quẳng rác hướng trên ven sông ấy chứ.' },
          { speaker: 0, chinese: '这个习惯很不好，污染了水质。', pinyin: 'Zhège xíguàn hěn bù hǎo, wūrǎn le shuǐzhì.', vietnamese: 'Như rứa thói tật tồi tệ cực kỳ, nó vấy bẩn đến luôn độ sạch của chốn nước non.' },
          { speaker: 1, chinese: '希望以后大家能注意保护这里。', pinyin: 'Xīwàng yǐhòu dàjiā néng zhùyì bǎohù zhèlǐ.', vietnamese: 'Mong sao có sau này mười phần thiên hạ ráng sẽ chú tâm đem tay che chở tới nơi công cộng dường này.' }
        ]
      },
      {
        title: 'Thời tiết thay đổi', characters: ['Mẹ', 'Con trai'],
        lines: [
          { speaker: 0, chinese: '天气预报说，明天可能有大暴雨。', pinyin: 'Tiānqì yùbào shuō, míngtiān kěnéng yǒu dà bàoyǔ.', vietnamese: 'Báo chương tình hình thời tiết kể lại thì, chừng là qua hôm mai có hẳn đợt mưa to quằn quại lắm.' },
          { speaker: 1, chinese: '怎么最近的天气越来越奇怪了？', pinyin: 'Zěnme zuìjìn de tiānqì yuèlái yuè qíguài le?', vietnamese: 'Sao mà ba cái thứ tiết trời kì cạn ở đây ngày một kì cục nhể?' },
          { speaker: 0, chinese: '是因为全球气候变暖的问题。', pinyin: 'Shì yīnwèi quánqiú qìhòu biàn nuǎn de wèntí.', vietnamese: 'Nội do chuyện dính phải vấn đề là đợt khí hậu Trái Đất nó biến mà ra ấm lên.' },
          { speaker: 1, chinese: '这也跟我们的生活习惯有关系吧。', pinyin: 'Zhè yě gēn wǒmen de shēnghuó xíguàn yǒu guānxi ba.', vietnamese: 'Có nhẽ như cái đống này đây cũng quy củ với sự tình sinh hoạt theo đời hay.' },
          { speaker: 0, chinese: '当然，人类活动影响了地球。', pinyin: 'Dāngrán, rénlèi huódòng yǐngxiǎng le dìqiú.', vietnamese: 'Lẽ dĩ nhiên là vậy rồi, mấy trò động hoạt của một bầy loài người ảnh hưởng trực tiếp liền tới Địa cầu hòn sao.' },
          { speaker: 1, chinese: '看来解决环境问题真的必须马上去做。', pinyin: 'Kàn lái jiějué huánjìng wèntí zhēn de bìxū mǎshàng qù zuò.', vietnamese: 'Quang cảnh ra chiều bề là xử lí môi trường ấy quả thực gắt gao quá phải cất tay lao vào lẹ ngay cho rồi.' }
        ]
      }
    ],

    /* L33 – Giáo dục và học tập */
    L33: [
      {
        title: 'Bàn luận về điểm số', characters: ['Nam', 'Lan'],
        lines: [
          { speaker: 0, chinese: '这次历史考试，你的成绩怎么样？', pinyin: 'Zhè cì lìshǐ kǎoshì, nǐ de chéngjì zěnmeyàng?', vietnamese: 'Ở chỗ cuộc thi định kì lần này môn Lịch sử, ba cái thành tích của mầy ra mặt sao dăng rồi?' },
          { speaker: 1, chinese: '我只考了七十分，你呢？', pinyin: 'Wǒ zhǐ kǎo le qīshí fēn, nǐ ne?', vietnamese: 'Tớ đậu qua có nổi bẩy mươi điểm thôi à, còn cậu thì ra mần răng?' },
          { speaker: 0, chinese: '我比你少两分，六十八。', pinyin: 'Wǒ bǐ nǐ shǎo liǎng fēn, liùshí bā.', vietnamese: 'Khoản tớ lại tuột mất nhỏ bé đi của mầy hai điểm đây, sáu mươi với tám.' },
          { speaker: 1, chinese: '我觉得这次考试的题目比上次难。', pinyin: 'Wǒ juéde zhè cì kǎoshì de tímù bǐ shàng cì nán.', vietnamese: 'Tớ tính chừng nào những bề chủ đề của đận thi lần tới coi ra đánh đố khó nhằn hẵm lại so đận bữa trước.' },
          { speaker: 0, chinese: '是啊，看来我必须每天复习两个小时了。', pinyin: 'Shì a, kànlái wǒ bìxū měitiān fùxí liǎng gè xiǎoshí le.', vietnamese: 'Chắc nó đúng đó há, xem cái nết thì chừng nào tớ buộc ắt hẳn là rèn với ôn hằng ngày tới hãi có tận hai con tiếng liền.' },
          { speaker: 1, chinese: '我们一起努力吧，下次一定要拿九十分！', pinyin: 'Wǒmen yīqǐ nǔlì ba, xià cì yīdìng yào ná jiǔshí fēn!', vietnamese: 'Thôi đôi bận cùng cố nào, bữa hẹn chuyến sau này thề sẽ lượm về có mức chín chục tròn trôi.' }
        ]
      },
      {
        title: 'Xin tư vấn chọn trường', characters: ['Phụ huynh', 'Thầy giáo'],
        lines: [
          { speaker: 0, chinese: '老师，我想问问关于我儿子的教育。', pinyin: 'Lǎoshī, wǒ xiǎng wènwen guānyú wǒ érzi de jiàoyù.', vietnamese: 'Ngài giáo ơi, tôi đang muốn ngỏ dăm dò câu vì cái khoản uốn nắn đi học của đứa con trai.' },
          { speaker: 1, chinese: '他很聪明，只要认真就没问题。', pinyin: 'Tā hěn cōngmíng, zhǐyào rènzhēn jiù méi wèntí.', vietnamese: 'Thằng chả sáng dạ là rành, miễn là lấy bề chịu thương rèn học thì cũng chả ra vấn đề dính nỗi chi.' },
          { speaker: 0, chinese: '您觉得他考上那所名牌大学容易吗？', pinyin: 'Nín juéde tā kǎo shàng nà suǒ míngpái dàxué róngyì ma?', vietnamese: 'Theo con mắt ngài xem lấy cậu ta ứng vào đậu cho được cái trường mang danh khét tiếng cỡ đó có bề chi thuận hay không vậy nhỉ?' },
          { speaker: 1, chinese: '今年竞争很激烈，但他已经把数学提高了很多。', pinyin: 'Jīnnián jìngzhēng hěn jīliè, dàn tā yǐjīng bǎ shùxué tígāo le hěn duō.', vietnamese: 'Mùa năm nay đánh chọi giành chỗ sặc khói lận, chớ nhưng thằng ý cũng đem qua nhồi môn toán đẩy vọt bay nhiều ngần ấy rồi.' },
          { speaker: 0, chinese: '那我这就放心了，希望他有一个好成绩。', pinyin: 'Nà wǒ zhè jiù fàngxīn le, xīwàng tā yǒu yī gè hǎo chéngjì.', vietnamese: 'Nào vậy thì cho là cái thân này tạm thấy thả lỏng được đi, ước sau cho chả gặt về thành tích khá lên.' },
          { speaker: 1, chinese: '多给他鼓励和时间吧。', pinyin: 'Duō gěi tā gǔlì hé shíjiān ba.', vietnamese: 'Ráng bồi thêm nhiều những lời cổ vũ khích lệ lấy nữa lại dôi quỹ giờ giấc qua cậu ấm nó nghe.' }
        ]
      },
      {
        title: 'Học ở thư viện', characters: ['Sinh viên', 'Giám thị'],
        lines: [
          { speaker: 0, chinese: '你好，我可以借这本关于历史的书吗？', pinyin: 'Nǐ hǎo, wǒ kěyǐ jiè zhè běn guānyú lìshǐ de shū ma?', vietnamese: 'Xin thưa chào bác, đằng cháu đây có làm thao tác mượn xách về coi cái quyển cuốn mà nói ở đề loại lịch sử ấy không nhể?' },
          { speaker: 1, chinese: '当然可以，请把你的学生证拿给我。', pinyin: 'Dāngrán kěyǐ, qǐng bǎ nǐ de xuésheng zhèng ná gěi wǒ.', vietnamese: 'Thì ừ tất nhiên còn có, đưa cái bằng thẻ làm sinh viên của chú đặng đây tôi cầm xí cho.' },
          { speaker: 0, chinese: '给你。这本书我能借多长时间？', pinyin: 'Gěi nǐ. Zhè běn shū wǒ néng jiè duō cháng shíjiān?', vietnamese: 'Đưa cho ngài ạ. Cái pho này cháu đủ cầm lưu thủ nó tới lận cỡ trong độ khoảng thời gian bao lăm dài?' },
          { speaker: 1, chinese: '你可以借两个星期。如果看不完可以再续借。', pinyin: 'Nǐ kěyǐ jiè liǎng gè xīngqī. Rúguǒ kàn bù wán kěyǐ zài xùjiè.', vietnamese: 'Mầy cầm nó giữ lấy hai kỳ tuần lễ đi. Ví dầu lỡ hụt bận chưa coi dứt bộ nữa thì sau gia hạn thời gian mượn xài tiếp.' },
          { speaker: 0, chinese: '太好了，我还想问一下，洗手间在哪里？', pinyin: 'Tài hǎo le, wǒ hái xiǎng wèn yíxià, xǐshǒujiān zài nǎlǐ?', vietnamese: 'Dung dị tuyệt làm sao, nhân thể còn nấn một cái câu mà hỏi này, ở đâu mà vô căn rửa tay phòng vệ sinh ta?' },
          { speaker: 1, chinese: '一直走，到电梯向左转。', pinyin: 'Yīzhí zǒu, dào diàntī xiàng zuǒ zhuǎn.', vietnamese: 'Cứ rảo cẳng đâm thẳng lút, gặp lấy cửa buồng thang máy rẽ rẹt đường trái chui tọt vào.' }
        ]
      }
    ],

    /* L34 – Văn hóa và phong tục */
    L34: [
      {
        title: 'Quen với ẩm thực', characters: ['John', 'Hải'],
        lines: [
          { speaker: 0, chinese: '你在中国生活了半年，习惯这里的菜了吗？', pinyin: 'Nǐ zài Zhōngguó shēnghuó le bàn nián, xíguàn zhèlǐ de cài le ma?', vietnamese: 'Cậu bươn chải tới sống phía vùng đất Tàu nguyên luôn phân nửa năm thì quen ngấm dần món cỗ trong chỗ đây hả chăng?' },
          { speaker: 1, chinese: '已经习惯了。我发现中国菜非常丰富。', pinyin: 'Yǐjīng xíguàn le. Wǒ fāxiàn Zhōngguó cài fēicháng fēngfù.', vietnamese: 'Kịp rèn làm quen thuộc đi rồi. Xong mình đây chợt phát giác được những ẩm đồ Trung cỗ bàn cũng khá chi vô cùng phong phú dư dật đấy.' },
          { speaker: 0, chinese: '跟你们国家的菜一样吗？', pinyin: 'Gēn nǐmen guójiā de cài yíyàng ma?', vietnamese: 'Liệu cùng chung như cỗ xứ các anh mâm đẻ ra không đâu?' },
          { speaker: 1, chinese: '不一样，我们那里不常吃饭。', pinyin: 'Bù yíyàng, wǒmen nàlǐ bù cháng chī fàn.', vietnamese: 'Đời nào y chang sao giống vậy cho đành, xứ tớ trong khu tắp chẳng thi thoảng nhai nuốt chút nhón vô cái hột gạo.' },
          { speaker: 0, chinese: '那你最喜欢中国什么菜？', pinyin: 'Nà nǐ zuì xǐhuān Zhōngguó shénme cài?', vietnamese: 'Mần mà rứa thì món gì bên này cậu xơi phải vô miệng vừa vặn bụng dạ đớp nhấy vậy?' },
          { speaker: 1, chinese: '我最喜欢包子和饺子。', pinyin: 'Wǒ zuì xǐhuān bāozi hé jiǎozi.', vietnamese: 'Mê đớp nghiền cái nhứt là món các cái bánh bao rồi thêm đến những dòng cái sủi cào này.' }
        ]
      },
      {
        title: 'Tặng quà sinh nhật', characters: ['Ann', 'Linh'],
        lines: [
          { speaker: 0, chinese: '这是你要送给经理的礼物吗？', pinyin: 'Zhè shì nǐ yào sòng gěi jīnglǐ de lǐwù ma?', vietnamese: 'Ngần này đây cái thảy là những đồ vật biếu tặng quà xách tay để đưa tới người giám đốc quản lí à?' },
          { speaker: 1, chinese: '对，明天是他五十岁的生日。', pinyin: 'Duì, míngtiān shì tā wǔshí suì de shēngrì.', vietnamese: 'Gật ngay, nhằm hôm ngày mai liền kì sinh nhật cho tới ngưỡng năm chục cái tuổi của đàn anh sếp.' },
          { speaker: 0, chinese: '在中国，送礼物有什么讲究吗？', pinyin: 'Zài Zhōngguó, sòng lǐwù yǒu shénme jiǎngjiu ma?', vietnamese: 'Bộ ở lãnh địa tại Trung Quốc ý, ba cái trò múa may dâng cho phần vật phẩm đi thăm lễ này cũng chứa lấy bao quy cách răn dặn soi nét hở trời?' },
          { speaker: 1, chinese: '有很多啊。比如不能送钟或者鞋。', pinyin: 'Yǒu hěn duō a. Bǐrú bùnéng sòng zhōng huòzhě xié.', vietnamese: 'Ngần lắm bao la thứ là. Nào lôi cho ví thử cấm triệt thói gửi lấy cái đồ đồng hồ cũng đôi giày mà ngó rước đến.' },
          { speaker: 0, chinese: '哇，我以前真的不知道。', pinyin: 'Wā, wǒ yǐqián zhēn de bù zhīdào.', vietnamese: 'Ái dà dà, bản thể ta của độ lỡ chót dĩ vãng thực quá đâu biết rõ chi chuyện rành này à.' },
          { speaker: 1, chinese: '不要急，这本来就是一种文化。', pinyin: 'Bú yào jí, zhè běnlái jiù shì yī zhǒng wénhuà.', vietnamese: 'Cáo từ cơn sốt sắng ngưng ngay, vốn ngay nền rạ xưa gốc là cội cái sự kiểu dáng văn minh của phái đạo ấy rồi.' }
        ]
      },
      {
        title: 'Lễ hội truyền thống', characters: ['Sinh viên', 'Người bản địa'],
        lines: [
          { speaker: 0, chinese: '中秋节的时候，大家一般吃什么？', pinyin: 'Zhōngqiū jié de shíhòu, dàjiā yībān chī shénme?', vietnamese: 'Nhân cớ những vụ ngày hội lễ Trung thu, tất thảy mọi đồng bào thường có cớ thói ăn mần món chi thế?' },
          { speaker: 1, chinese: '我们必须吃月饼，这和家庭有关。', pinyin: 'Wǒmen bìxū chī yuèbǐng, zhè hé jiātíng yǒu guān.', vietnamese: 'Đoàn ta ắt bắt buộc đớp vài ba ngụm cái món loại bánh mặt trăng, ấy cái nhã dính nếp quấn tới một nền móng gia đình đó nhe.' },
          { speaker: 0, chinese: '月饼那么好吃呀！有那些不同种的呢？', pinyin: 'Yuèbǐng nàme hǎo chī ya! Yǒu nàxiē bù tóng zhǒng de ne?', vietnamese: 'Đã bảo là bánh mặt trăng vậy có chăng đành đơm cực khoái là vậy ư? Ở kia cũng bốc lên là những chùm phân loại tách cọc nhau tới tận?' },
          { speaker: 1, chinese: '有肉的，也有绿豆的。不过还是花样多。', pinyin: 'Yǒu ròu de, yě yǒu lǜdòu de. Búguò háishì huāyàng duō.', vietnamese: 'Loại băm thịt thà mớ, cái thì còn đậu xanh đậu vỏ ngắt. Xong dù sao nó cũng đa đới phong sắc muôn vàn mẫu.' },
          { speaker: 0, chinese: '我也要把这个讲给我的朋友听！', pinyin: 'Wǒ yě yào bǎ zhège jiǎng gěi wǒ de péngyǒu tīng!', vietnamese: 'Ta cũng sẽ liền đặng mang cục mớ hầm chuyện bà rịa ni để cho tuôn kể với cánh rạo mạc lũ bạn mình nghe thoảng nhĩ!' },
          { speaker: 1, chinese: '那快去吧，这是很不错的文化。', pinyin: 'Nà kuài qù ba, zhè shì hěn búcuò de wénhuà.', vietnamese: 'Ngay mau lẹ mà phóng đi mần, bởi cái lẽ điều ấy đâm coi bộ thứ văn hoá không có tồi dở chút ngần ti.' }
        ]
      }
    ],

    /* L35 – Du lịch và khám phá */
    L35: [
      {
        title: 'Chuẩn bị đi du lịch', characters: ['Chồng', 'Vợ'],
        lines: [
          { speaker: 0, chinese: '明天我们要去旅游了，护照带来了吗？', pinyin: 'Míngtiān wǒmen yào qù lǚyóu le, hùzhào dàilái le ma?', vietnamese: 'Gì thì gì mai gia đình mình sẽ lại bắt chuyến du lịch, xách theo đem cầm theo lấy sổ chiếu passport vô không thế?' },
          { speaker: 1, chinese: '护照我已经放在这个红箱子里了。', pinyin: 'Hùzhào wǒ yǐjīng fàng zài zhège hóng xiāngzi lǐ le.', vietnamese: 'Đã bảo tấm hộ chiếu em nhét vào khuất đặng kĩ tới ngay chiếc hòm mang màu đỏ đây rồi là gì.' },
          { speaker: 0, chinese: '你还带了什么东西？', pinyin: 'Nǐ hái dài le shénme dōngxi?', vietnamese: 'Coi em còn xách ôm đằng mang được món lặt vặt gì không?' },
          { speaker: 1, chinese: '我带了一些衣服，还有雨伞。', pinyin: 'Wǒ dài le yīxiē yīfu, hái yǒu yǔsǎn.', vietnamese: 'Em cầm đem với hốt vội chiếc y phục thay đồ, cũng đơm vào rấm sẵn những đồ ô che.' },
          { speaker: 0, chinese: '我觉得还必须带地图，别忘了。', pinyin: 'Wǒ juéde hái bìxū dài dìtú, bié wàng le.', vietnamese: 'Anh ngõ định thiết nghĩ là ắt hẳn mình vẫn phải bắt xách liền đồ là tờ tay cái bản đồ định hướng đấy, chớ có quên cho cam.' },
          { speaker: 1, chinese: '现在大家都用手机上网看地图了。', pinyin: 'Xiànzài dàjiā dōu yòng shǒujī shàngwǎng kàn dìtú le.', vietnamese: 'Giai đoạn đời này thảy bá quan dân chúng đều áp máy điện thoại truy cập vô đường mạng xoi móc bản đồ ngay rồi nha.' }
        ]
      },
      {
        title: 'Tham quan bảo tàng', characters: ['Hướng dẫn viên', 'Khách du lịch'],
        lines: [
          { speaker: 0, chinese: '大家看一下，我们已经到了博物馆。', pinyin: 'Dàjiā kàn yí xià, wǒmen yǐjīng dào le bówùguǎn.', vietnamese: 'Mọi người coi cho đây xíu, phái đoạn chúng ta hiện nay cũng tới cập chân tại bảo tàng đặng rồi.' },
          { speaker: 1, chinese: '请问我们可以在这里照相吗？', pinyin: 'Qǐngwèn wǒmen kěyǐ zài zhèlǐ zhàoxiàng ma?', vietnamese: 'Xin đánh ngỏ lời, mọi người phía chung cho có được tại chỗ đây lấy cảnh quay phim mần chụp ảnh vậy nha?' },
          { speaker: 0, chinese: '在这个房间里不能照相。', pinyin: 'Zài zhège fángjiān lǐ bùnéng zhàoxiàng.', vietnamese: 'Giữa cái phần căn buồng bên ấy này chẳng cho ai cất chụp phô cảnh chi ra hết ráo.' },
          { speaker: 1, chinese: '明白了。我们什么时候去下一个地方？', pinyin: 'Míngbái le. Wǒmen shénme shíhòu qù xià yī gè dìfāng?', vietnamese: 'Ra vậy rõ thông rồi. Tụi đây tính cớ độ nào đặng lúc bao lâu thì mới lượn đến địa nơi kế ghé tiếp ở đây?' },
          { speaker: 0, chinese: '我们只有一个小时的时间在这里参观。', pinyin: 'Wǒmen zhǐ yǒu yí gè xiǎoshí de shíjiān zài zhèlǐ cānguān.', vietnamese: 'Phái bọn đôi chúng đây gom được chừng có đâu cũng tầm khoảng mọt tiếng tròn để ở nhác xem tham dò quan khách.' },
          { speaker: 1, chinese: '好的，我已经把包放在门外了。', pinyin: 'Hǎo de, wǒ yǐjīng bǎ bāo fàng zài mén wài le.', vietnamese: 'Tuyệt đỉnh a, tớ đây cũng định bề tấp cho vứt hết thảy cục bao nằm ngõ ở mút chỉ ngoài cái viền cánh của chớp kia rồi đấy nha.' }
        ]
      },
      {
        title: 'Bàn bạc chuyến đi', characters: ['Lan', 'Hà'],
        lines: [
          { speaker: 0, chinese: '你觉得这个夏天我们去哪里玩好？', pinyin: 'Nǐ juéde zhège xiàtiān wǒmen qù nǎlǐ wán hǎo?', vietnamese: 'Cậu cho điểm tính liệu cớ sao về dốc cái mùa dịp hạ sang này hai ngả mình đi chơi ngỏ chốn nào vậy hay hơn?' },
          { speaker: 1, chinese: '我们去爬山，怎么样？', pinyin: 'Wǒmen qù páshān, zěnmeyàng?', vietnamese: 'Hây là tụi bọn đành kéo nheo nhóc nhú chùm lên đi neo leo cái dãi ngọn núi rặng, theo đó vậy không tồi chứ?' },
          { speaker: 0, chinese: '可是我上个星期脚很疼。不去爬了。', pinyin: 'Kěshì wǒ shàng ge xīngqī jiǎo hěn téng. Bú qù pá le.', vietnamese: 'Nhưng mà hiềm cái vớ ở chỗ tuần lễ qua cổ chân tớ bị đau xé đau. Mài răng mà mò theo chông tởm neo cho nổi hòng đi.' },
          { speaker: 1, chinese: '那么我决定去海边，你想去吃海鲜吗？', pinyin: 'Nàme wǒ juédìng qù hǎibiān, nǐ xiǎng qù chī hǎixiān ma?', vietnamese: 'Đoán định nhịp độ mình thôi hạ lẹ cái kế chốt đánh mẻ dọn sát ngay dưới mỏm ven cái biển vậy nha, bạn cũng thèm thốt xắn chén nhấm nháp lấy ba cái mớ đồ hải mặn mà?' },
          { speaker: 0, chinese: '好啊，那我们把狗也带去吧。', pinyin: 'Hǎo a, nà wǒmen bǎ gǒu yě dài qù ba.', vietnamese: 'Xán vô chứ, lại tiện đó tụi anh em phải đơm lôi mang cả rọn cuống chú con cẩu khuyển chó ra cho đi chung trọn nhé.' },
          { speaker: 1, chinese: '太棒了，这一定会有很多乐趣的！', pinyin: 'Tài bàng le, zhè yídìng huì yǒu hěn duō lèqù de!', vietnamese: 'Tuyệt chiêu xịn sò ông mặt tròi luôn đi dĩ, cuộc rẽ bước như này định chừng phăng một cách ắt hẳn giăng tớp nhặt lấy đặng là rất chừng lắm những thứ mà thú hứng khoái chi vui lạc.' }
        ]
      }
    ],

    /* L36 – Tình yêu và hôn nhân */
    L36: [
      {
        title: 'Chuyện tình cảm', characters: ['Bạn A', 'Bạn B'],
        lines: [
          { speaker: 0, chinese: '你结婚了吗？', pinyin: 'Nǐ jiéhūn le ma?', vietnamese: 'Bạn kết hôn chưa?' },
          { speaker: 1, chinese: '还没有，我在谈恋爱。你们相识多久了？', pinyin: 'Hái méiyǒu, wǒ zài tán liàn\'ài. Nǐmen xiāngshí duō jiǔ le?', vietnamese: 'Chưa, tôi đang yêu. Các bạn quen nhau bao lâu rồi?' },
          { speaker: 0, chinese: '我和她认识了三年了。我们准备结婚了。', pinyin: 'Wǒ hé tā rènshi le sān nián le. Wǒmen zhǔnbèi jiéhūn le.', vietnamese: 'Tôi và cô ấy quen nhau được ba năm rồi. Chúng tôi chuẩn bị kết hôn.' },
          { speaker: 1, chinese: '真的吗？恭喜！幸福的婚姻需要经营。', pinyin: 'Zhēn de ma? Gōngxǐ! Xìngfú de hūnyīn xūyào jīngyíng.', vietnamese: 'Thật sao? Chúc mừng! Hôn nhân hạnh phúc cần được vun đắp.' },
          { speaker: 0, chinese: '是的，需要互相理解和包容。你呢，喜欢什么类型？', pinyin: 'Shì de, xūyào hùxiāng lǐjiě hé bāoróng. Nǐ ne, xǐhuān shénme lèixíng?', vietnamese: 'Đúng, cần sự hiểu nhau và bao dung. Còn bạn, thích kiểu người nào?' },
          { speaker: 1, chinese: '我喜欢善良、体贴的人。两情相悦最重要！', pinyin: 'Wǒ xǐhuān shànliáng, tǐtiē de rén. Liǎng qíng xiāngyuè zuì zhòngyào!', vietnamese: 'Tôi thích người tốt bụng, chu đáo. Hai người cùng có tình cảm là quan trọng nhất!' },
          { speaker: 0, chinese: '说得对！祝你们白头偕老！', pinyin: 'Shuō de duì! Zhù nǐmen báitóu xiélǎo!', vietnamese: 'Nói đúng lắm! Chúc hai bạn trăm năm hạnh phúc!' }
        ]
      },
      {
        title: 'Kỷ niệm ngày cưới', characters: ['Chồng', 'Vợ'],
        lines: [
          { speaker: 0, chinese: '亲爱的，今天是我们的结婚纪念日。', pinyin: 'Qīn\'ài de, jīntiān shì wǒmen de jiéhūn jìniàn rì.', vietnamese: 'Em yêu à, hôm nay là ngày kỷ niệm kết hôn của chúng ta.' },
          { speaker: 1, chinese: '时间过得真快，我们已经结婚五年了。', pinyin: 'Shíjiān guò de zhēn kuài, wǒmen yǐjīng jiéhūn wǔ nián le.', vietnamese: 'Thời gian trôi nhanh thật, chúng mình đã kết hôn được năm năm rồi.' },
          { speaker: 0, chinese: '谢谢你一直以来的照顾。这是给你买的礼物。', pinyin: 'Xièxiè nǐ yīzhí yǐlái de zhàogù. Zhè shì gěi nǐ mǎi de lǐwù.', vietnamese: 'Cám ơn em đã luôn chăm sóc gia đình. Đây là món quà anh mua tặng em.' },
          { speaker: 1, chinese: '哇，一条漂亮的项链！你太费心了。', pinyin: 'Wā, yī tiáo piàoliang de xiàngliàn! Nǐ tài fèixīn le.', vietnamese: 'Oa, một sợi dây chuyền đẹp quá! Anh đã hao tâm tổn trí rồi.' },
          { speaker: 0, chinese: '只要你喜欢就好。晚上我们出去吃饭吧？', pinyin: 'Zhǐyào nǐ xǐhuān jiù hǎo. Wǎnshang wǒmen chūqù chīfàn ba?', vietnamese: 'Chỉ cần em thích là được. Buổi tối mình ra ngoài ăn nhé?' },
          { speaker: 1, chinese: '好啊，我们去那家新开的法国餐厅怎么样？', pinyin: 'Hǎo a, wǒmen qù nà jiā xīn kāi de Fǎguó cāntīng zěnmeyàng?', vietnamese: 'Được thôi, chúng ta đến nhà hàng Pháp mới mở đó thì sao?' },
          { speaker: 0, chinese: '没问题，我现在就打电话订位置。', pinyin: 'Méi wèntí, wǒ xiànzài jiù dǎ diànhuà dìng wèizhì.', vietnamese: 'Không thành vấn đề, anh sẽ gọi điện đặt chỗ ngay bây giờ.' }
        ]
      },
      {
        title: 'Thất tình', characters: ['Tiểu Lệ', 'Tiểu Hồng'],
        lines: [
          { speaker: 0, chinese: '我昨天和他分手了。', pinyin: 'Wǒ zuótiān hé tā fēnshǒu le.', vietnamese: 'Hôm qua mình đã chia tay với anh ấy rồi.' },
          { speaker: 1, chinese: '怎么会这样？你们不是一直很好吗？', pinyin: 'Zěnme huì zhèyàng? Nǐmen bú shì yīzhí hěn hǎo ma?', vietnamese: 'Sao lại như vậy? Hai người không phải luôn rất tốt sao?' },
          { speaker: 0, chinese: '最近我们经常吵架，性格实在不合适。', pinyin: 'Zuìjìn wǒmen jīngcháng chǎojià, xìnggé shízài bù héshì.', vietnamese: 'Dạo này bọn mình hay cãi nhau, tính cách thực sự không hợp.' },
          { speaker: 1, chinese: '别难过了，感情的事情不能勉强。', pinyin: 'Bié nánguò le, gǎnqíng de shìqíng bùnéng miǎnqiǎng.', vietnamese: 'Đừng buồn nữa, chuyện tình cảm không thể miễn cưỡng được.' },
          { speaker: 0, chinese: '我知道，但我心里还是觉得很难受。', pinyin: 'Wǒ zhīdào, dàn wǒ xīnli háishì juéde hěn nánshòu.', vietnamese: 'Mình biết, nhưng trong lòng vẫn cảm thấy rất khó chịu.' },
          { speaker: 1, chinese: '想哭就哭出来吧，以后会遇到更好的人。', pinyin: 'Xiǎng kū jiù kū chūlái ba, yǐhòu huì yùdào gèng hǎo de rén.', vietnamese: 'Muốn khóc thì cứ khóc ra đi, sau này sẽ gặp được người tốt hơn thôi.' },
          { speaker: 0, chinese: '谢谢你陪着我。我们去喝杯咖啡散散心吧。', pinyin: 'Xièxiè nǐ péizhe wǒ. Wǒmen qù hē bēi kāfēi sàn sànxīn ba.', vietnamese: 'Cám ơn cậu đã ở bên mình. Chúng ta đi uống cà phê cho khuây khỏa đi.' }
        ]
      }
    ],

    /* L37 – Kinh tế và kinh doanh */
    L37: [
      {
        title: 'Thảo luận kinh doanh', characters: ['Giám đốc A', 'Giám đốc B'],
        lines: [
          { speaker: 0, chinese: '中国经济发展非常快速，你觉得呢？', pinyin: 'Zhōngguó jīngjì fāzhǎn fēicháng kuàisù, nǐ juéde ne?', vietnamese: 'Kinh tế Trung Quốc phát triển rất nhanh, bạn nghĩ sao?' },
          { speaker: 1, chinese: '是的。你对电商有什么看法？', pinyin: 'Shì de. Nǐ duì diànshāng yǒu shénme kànfǎ?', vietnamese: 'Đúng vậy. Bạn có suy nghĩ gì về thương mại điện tử?' },
          { speaker: 0, chinese: '电商改变了人们的购物方式，非常重要。', pinyin: 'Diànshāng gǎibiàn le rénmen de gòuwù fāngshì, fēicháng zhòngyào.', vietnamese: 'Thương mại điện tử đã thay đổi cách mua sắm của mọi người, rất quan trọng.' },
          { speaker: 1, chinese: '市场竞争越来越激烈，我们需要新的策略。', pinyin: 'Shìchǎng jìngzhēng yuèlái yuè jīliè, wǒmen xūyào xīn de cèlüè.', vietnamese: 'Cạnh tranh thị trường ngày càng khốc liệt, chúng ta cần chiến lược mới.' },
          { speaker: 0, chinese: '我们需要制定新的商业策略。合作共赢怎么样？', pinyin: 'Wǒmen xūyào zhìdìng xīn de shāngyè cèlüè. Hézuò gòng yíng zěnmeyàng?', vietnamese: 'Chúng ta cần lập chiến lược kinh doanh mới. Hợp tác cùng thắng thế nào?' },
          { speaker: 1, chinese: '合作共赢是最好的方式！我赞同。', pinyin: 'Hézuò gòng yíng shì zuì hǎo de fāngshì! Wǒ zàntóng.', vietnamese: 'Hợp tác cùng thắng là cách tốt nhất! Tôi đồng ý.' },
          { speaker: 0, chinese: '很好！我们一起做个合作协议吧。', pinyin: 'Hěn hǎo! Wǒmen yīqǐ zuò gè hézuò xiéyì ba.', vietnamese: 'Tốt lắm! Chúng ta cùng ký một thỏa thuận hợp tác nhé.' }
        ]
      },
      {
        title: 'Đầu tư chứng khoán', characters: ['Trương Vĩ', 'Lý Tường'],
        lines: [
          { speaker: 0, chinese: '最近股票市场怎么样？我打算投资点钱。', pinyin: 'Zuìjìn gǔpiào shìchǎng zěnmeyàng? Wǒ dǎsuàn tóuzī diǎn qián.', vietnamese: 'Dạo này thị trường chứng khoán thế nào? Tôi định đầu tư chút tiền.' },
          { speaker: 1, chinese: '风险还是挺大的，你要谨慎一点。', pinyin: 'Fēngxiǎn háishì tǐng dà de, nǐ yào jǐnshèn yīdiǎn.', vietnamese: 'Rủi ro vẫn khá lớn đấy, anh phải cẩn thận một chút.' },
          { speaker: 0, chinese: '我明白，所以我想先买一些稳定的股票。', pinyin: 'Wǒ míngbái, suǒyǐ wǒ xiǎng xiān mǎi yīxiē wěndìng de gǔpiào.', vietnamese: 'Tôi hiểu, cho nên tôi muốn mua vài cổ phiếu ổn định trước.' },
          { speaker: 1, chinese: '那你可以看看科技公司的股票，最近涨了不少。', pinyin: 'Nà nǐ kěyǐ kànkan kējì gōngsī de gǔpiào, zuìjìn zhǎng le xuěduō.', vietnamese: 'Vậy anh có thể xem cổ phiếu của các công ty công nghệ, dạo này tăng giá không ít.' },
          { speaker: 0, chinese: '谢谢你的建议！我会好好研究的。', pinyin: 'Xièxiè nǐ de jiànyì! Wǒ huì hǎohǎo yánjiū de.', vietnamese: 'Cám ơn lời khuyên của anh! Tôi sẽ nghiên cứu thật kỹ.' },
          { speaker: 1, chinese: '不用谢，投资之前一定要多看新闻。', pinyin: 'Búyòng xiè, tóuzī zhīqián yīdìng yào duō kàn xīnwén.', vietnamese: 'Không có chi, trước khi đầu tư nhất định phải xem nhiều tin tức vào.' }
        ]
      },
      {
        title: 'Thành lập công ty', characters: ['Vương Cường', 'Vợ'],
        lines: [
          { speaker: 0, chinese: '我打算自己开一家软件公司，自己做老板。', pinyin: 'Wǒ dǎsuàn zìjǐ kāi yī jiā ruǎnjiàn gōngsī, zìjǐ zuò lǎobǎn.', vietnamese: 'Anh tính tự mở một công ty phần mềm, tự mình làm chủ.' },
          { speaker: 1, chinese: '这是个大事，你考虑清楚了吗？', pinyin: 'Zhè shì gè dàshì, nǐ kǎolǜ qīngchu le ma?', vietnamese: 'Đây là chuyện lớn, anh đã cân nhắc rành mạch chưa vậy?' },
          { speaker: 0, chinese: '我计划了好几个月了，资金也准备得差不多了。', pinyin: 'Wǒ jìhuà le hǎo jǐ gè yuè le, zījīn yě zhǔnbèi de chàbùduō le.', vietnamese: 'Anh đã lên kế hoạch mấy tháng rồi, tiền vốn cũng chuẩn bị ngót nghét đủ rồi.' },
          { speaker: 1, chinese: '现在做生意不容易，压力会非常大呀。', pinyin: 'Xiànzài zuò shēngyì bù róngyì, yālì huì fēicháng dà ya.', vietnamese: 'Làm ăn thương trường bây giờ đâu có dễ, áp lực sẽ cực lớn đấy nha.' },
          { speaker: 0, chinese: '我知道，但我相信我们的产品能在市场上成功。', pinyin: 'Wǒ zhīdào, dàn wǒ xiāngxìn wǒmen de chǎnpǐn néng zài shìchǎng shàng chénggōng.', vietnamese: 'Anh biết, nhưng anh tin sản phẩm của chúng ta có thể thành công trên thị trường.' },
          { speaker: 1, chinese: '只要你决定了，我就会百分之百支持你。', pinyin: 'Zhǐyào nǐ juédìng le, wǒ jiù huì bǎifēnzhībǎi zhīchí nǐ.', vietnamese: 'Chỉ cần anh quyết chí, em nhất định ủng hộ anh 100%.' },
          { speaker: 0, chinese: '谢谢老婆，我的成功少不了你。', pinyin: 'Xièxiè lǎopo, wǒ de chénggōng shǎo bù liǎo nǐ.', vietnamese: 'Cám ơn bà xã xinh đẹp, thành công của anh không bao giờ có thể thiếu đi em được đâu.' }
        ]
      }
    ],

    /* L38 – Nghệ thuật và âm nhạc */
    L38: [
      {
        title: 'Nói chuyện về nghệ thuật', characters: ['Nghệ sĩ', 'Khán giả'],
        lines: [
          { speaker: 0, chinese: '你喜欢什么风格的音乐？', pinyin: 'Nǐ xǐhuān shénme fēnggé de yīnyuè?', vietnamese: 'Bạn thích phong cách âm nhạc nào?' },
          { speaker: 1, chinese: '我喜欢古典音乐和流行歌曲。你会弹吉他吗？', pinyin: 'Wǒ xǐhuān gǔdiǎn yīnyuè hé liúxíng gēqǔ. Nǐ huì tán jítā ma?', vietnamese: 'Tôi thích nhạc cổ điển và nhạc pop. Bạn có biết chơi guitar không?' },
          { speaker: 0, chinese: '会一点。学一门乐器需要很多时间和练习。', pinyin: 'Huì yīdiǎn. Xué yī mén yuèqì xūyào hěn duō shíjiān hé liànxí.', vietnamese: 'Biết một chút. Học một nhạc cụ cần rất nhiều thời gian và luyện tập.' },
          { speaker: 1, chinese: '是的。这幅画有什么含义？看起来很特别。', pinyin: 'Shì de. Zhè fú huà yǒu shénme hányì? Kàn qǐlái hěn tèbié.', vietnamese: 'Đúng vậy. Bức tranh này có ý nghĩa gì? Trông rất đặc biệt.' },
          { speaker: 0, chinese: '艺术可以表达人的内心世界。这幅画表达孤独感。', pinyin: 'Yìshù kěyǐ biǎodá rén de nèixīn shìjiè. Zhè fú huà biǎodá gūdú gǎn.', vietnamese: 'Nghệ thuật có thể diễn đạt thế giới nội tâm của con người. Bức tranh này thể hiện cảm giác cô đơn.' },
          { speaker: 1, chinese: '我能感受到！这幅作品太有力量了！', pinyin: 'Wǒ néng gǎnshòu dào! Zhè fú zuòpǐn tài yǒu lìliàng le!', vietnamese: 'Tôi cảm nhận được! Tác phẩm này thật có sức mạnh!' },
          { speaker: 0, chinese: '谢谢！艺术欣赏需要时间，慢慢来。', pinyin: 'Xièxie! Yìshù xīnshǎng xūyào shíjiān, mànmàn lái.', vietnamese: 'Cảm ơn! Thưởng thức nghệ thuật cần có thời gian, từ từ thôi.' }
        ]
      },
      {
        title: 'Buổi hòa nhạc', characters: ['Bạn nam', 'Bạn nữ'],
        lines: [
          { speaker: 0, chinese: '下个周末有周杰伦的演唱会，你想去吗？', pinyin: 'Xià ge zhōumò yǒu Zhōu Jiélún de yǎnchànghuì, nǐ xiǎng qù ma?', vietnamese: 'Cuối tuần sau có biểu diễn hòa nhạc ca nhạc của ca sỹ Châu Kiệt Luân, cậu có muốn đi xem không?' },
          { speaker: 1, chinese: '真的吗？我太想去了！他的票很难买到。', pinyin: 'Zhēn de ma? Wǒ tài xiǎng qù le! Tā de piào hěn nán mǎidào.', vietnamese: 'Thật á? Mình thèm đi quá đi mất! Vé của anh ấy rất khó mua đấy nha.' },
          { speaker: 0, chinese: '放心吧，我已经提前抢到两张了。', pinyin: 'Fàngxīn ba, wǒ yǐjīng tíqián qiǎng dào liǎng zhāng le.', vietnamese: 'Yên chí con tim, mình đã bon chen sớm săn được sẵn tới hai chiếc rồi cớ.' },
          { speaker: 1, chinese: '哇！你太棒了！我们在哪里见面？', pinyin: 'Wā! Nǐ tài bàng le! Wǒmen zài nǎlǐ jiànmiàn?', vietnamese: 'Ối trời thần đất hỡi cậu giỏi đét! Đôi ta xáp mặt lại hẹn chốn mô mới được?' },
          { speaker: 0, chinese: '星期六晚上七点，体育馆门口见吧。', pinyin: 'Xīngqīliù wǎnshang qī diǎn, tǐyùguǎn ménkǒu jiàn ba.', vietnamese: 'Tầm lúc bảy giờ tối Thứ 7, ngoài cửa trung tâm nhà thi đấu gặp được chăng?' },
          { speaker: 1, chinese: '好的，我已经迫不及待了！', pinyin: 'Hǎo de, wǒ yǐjīng pòbùjídài le!', vietnamese: 'Ừ đúng ý quá, tớ đã ngóng cuồng ruột rạo rực nôn nao cả thân thể rồi nè!' }
        ]
      },
      {
        title: 'Học chơi Piano', characters: ['Mẹ', 'Con gái'],
        lines: [
          { speaker: 0, chinese: '莉莉，你最近弹钢琴进步很大！', pinyin: 'Lìli, nǐ zuìjìn tán gāngqín jìnbù hěn dà!', vietnamese: 'Lily này, dạo gần đây tay đàn piano của con có chiều tiến bộ lớn quá đó nghen!' },
          { speaker: 1, chinese: '谢谢妈妈，老师也夸我了。', pinyin: 'Xièxiè māma, lǎoshī yě kuā wǒ le.', vietnamese: 'Con cám ơn mẹ yêu, giáo viên cũng vừa khen con đó.' },
          { speaker: 0, chinese: '只要你每天坚持练习，一定会越来越好。', pinyin: 'Zhǐyào nǐ měitiān jiānchí liànxí, yídìng huì yuèlái yuè hǎo.', vietnamese: 'Chỉ ngặt con cố luôn duy trì kiên nhẫn luyện đánh mỗi ngày, mẹ chăc chắn sẽ ngày sẽ càng giỏi lên thui.' },
          { speaker: 1, chinese: '但我有时候觉得手指很累，不想弹。', pinyin: 'Dàn wǒ yǒushíhòu juéde shǒuzhǐ hěn lèi, bù xiǎng tán.', vietnamese: 'Nhưng mà thỉnh thoảng các tay cơ ngón con mỏi muốn nhức chả buồn nhấn phím đàn.' },
          { speaker: 0, chinese: '学习艺术都需要吃苦的，不能半途而废。', pinyin: 'Xuéxí yìshù dōu xūyào chīkǔ de, bùnéng bàntú\'érfèi.', vietnamese: 'Ôm lấy cái sự đường nghệ thuật đều khổ sở cả thôi, chẳng thể dang dở nửa chừng mà dứt bỏ bễ.' },
          { speaker: 1, chinese: '好吧，我会接着努力练习。', pinyin: 'Hǎo ba, wǒ huì jiēzhe nǔlì liànxí.', vietnamese: 'Thôi đành, con sẽ tiếp tục nằng nặc nhọc công tập đàn nha.' }
        ]
      }
    ],

    /* L39 – Khoa học và công nghệ */
    L39: [
      {
        title: 'Thảo luận về AI', characters: ['Giáo sư', 'Sinh viên'],
        lines: [
          { speaker: 0, chinese: '科学技术改变了我们的生活，你同意吗？', pinyin: 'Kēxué jìshù gǎibiàn le wǒmen de shēnghuó, nǐ tóngyì ma?', vietnamese: 'Khoa học và công nghệ đã thay đổi cuộc sống của chúng ta, bạn đồng ý không?' },
          { speaker: 1, chinese: '完全同意！人工智能正在快速发展，影响很大。', pinyin: 'Wánquán tóngyì! Réngōng zhìnéng zhèngzài kuàisù fāzhǎn, yǐngxiǎng hěn dà.', vietnamese: 'Hoàn toàn đồng ý! Trí tuệ nhân tạo đang phát triển nhanh chóng, ảnh hưởng rất lớn.' },
          { speaker: 0, chinese: '你觉得人工智能对人类有什么影响？', pinyin: 'Nǐ juéde réngōng zhìnéng duì rénlèi yǒu shénme yǐngxiǎng?', vietnamese: 'Bạn nghĩ trí tuệ nhân tạo có ảnh hưởng gì đến con người?' },
          { speaker: 1, chinese: '科技既有好处也有坏处。要理性看待。', pinyin: 'Kējì jì yǒu hǎochù yě yǒu huàichù. Yào lǐxìng kàndài.', vietnamese: 'Công nghệ vừa có lợi vừa có hại. Cần nhìn nhận một cách lý trí.' },
          { speaker: 0, chinese: '太空探索有什么意义？这也是科技的一部分。', pinyin: 'Tàikōng tànsuǒ yǒu shénme yìyì? Zhè yě shì kējì de yī bùfèn.', vietnamese: 'Khám phá không gian có ý nghĩa gì? Đây cũng là một phần của khoa học công nghệ.' },
          { speaker: 1, chinese: '太空探索帮助人类了解宇宙，意义重大。', pinyin: 'Tàikōng tànsuǒ bāngzhù rénlèi liǎojiě yǔzhòu, yìyì zhòngdà.', vietnamese: 'Khám phá không gian giúp con người hiểu vũ trụ, ý nghĩa rất lớn.' },
          { speaker: 0, chinese: '人类应该共同面对技术挑战，合作才有未来！', pinyin: 'Rénlèi yīnggāi gòngtóng miànduì jìshù tiǎozhàn, hézuò cái yǒu wèilái!', vietnamese: 'Nhân loại nên cùng nhau đối mặt với thách thức công nghệ, hợp tác mới có tương lai!' }
        ]
      },
      {
        title: 'Sản phẩm công nghệ mới', characters: ['Nam', 'Lan'],
        lines: [
          { speaker: 0, chinese: '你换新手机了吗？这个牌子最近很火。', pinyin: 'Nǐ huàn xīn shǒujī le ma? Zhège páizi zuìjìn hěn huǒ.', vietnamese: 'Bạn đổi điện thoại mới rồi hả? Hiệu này dạo đây đang cháy hàng lắm đây.' },
          { speaker: 1, chinese: '对啊，上个月刚买的。屏幕超级清晰！', pinyin: 'Duì a, shàng ge yuè gāng mǎi de. Píngmù chāojí qīngxī!', vietnamese: 'Chứ đâu, vừa mới tậu tháng trước đấy mờ. Cái dòng màn hình hiển thị thật sự nét căng!' },
          { speaker: 0, chinese: '电池耐用吗？我的旧手机半天就没电了。', pinyin: 'Diànchí nàiyòng ma? Wǒ de jiù shǒujī bàntiān jiù méi diàn le.', vietnamese: 'Kiểu như pin sài thấy lâu bền chứ? Điện thoại cũ của tôi chỉ dùng nửa buổi là lại sập sạch sành sanh.' },
          { speaker: 1, chinese: '电池很不错，而且充电速度非常快。', pinyin: 'Diànchí hěn búcuò, érqiě chōngdiàn sùdù fēicháng kuài.', vietnamese: 'Dung lượng pin không tệ, thêm điểm là tốc độ lúc cắm nạp pin vô cùng nhanh nhoay nhoáy.' },
          { speaker: 0, chinese: '科技发展真快，现在的产品越来越好用了。', pinyin: 'Kējì fāzhǎn zhēn kuài, xiànzài de chǎnpǐn yuèlái yuè hǎo yòng le.', vietnamese: 'Bước ngoặt trình công nghệ vụt lên ác đi, sản phẩm ngày nay có cớ càng trở lên mướt thuận dễ dùng.' },
          { speaker: 1, chinese: '是啊，连家里很多电器都能用手机控制了。', pinyin: 'Shì a, lián jiālǐ hěn duō diànqì dōu néng yòng shǒujī kòngzhì le.', vietnamese: 'Này đó, ngay thiết bị gia dụng nhiều món cũng đem cái máy tính cầm tay mà trỏ tới giật điều khiển mần được rồi đấy nha.' }
        ]
      },
      {
        title: 'Bàn bạc về tương lai', characters: ['Cảnh', 'Vương'],
        lines: [
          { speaker: 0, chinese: '你说二十年后的世界会是什么样子？', pinyin: 'Nǐ shuō èrshí nián hòu de shìjiè huì shì shénme yàngzi?', vietnamese: 'Cậu thử đánh giá đôi chút xem viễn cảnh hai chục cái chu kì năm thì thế giới ra làm sao?' },
          { speaker: 1, chinese: '我觉得到处都是机器人，帮我们做家务。', pinyin: 'Wǒ juéde dàochù dōu shì jīqìrén, bāng wǒmen zuò jiāwù.', vietnamese: 'Tôi đánh liều ắt hẳn tứ phía là người tự động rô bốt, hỗ phụ tẩm đám lau dọn nhà cửa mớ.' },
          { speaker: 0, chinese: '那人类还需要工作吗？', pinyin: 'Nà rénlèi hái xūyào gōngzuò ma?', vietnamese: 'Nhẽ lúc ấy bọn con người còn cần thiết phải hì hục động tay lao động kiếm việc không?' },
          { speaker: 1, chinese: '当然需要，只是工作的方式会不同。', pinyin: 'Dāngrán xūyào, zhǐshì gōngzuò de fāngshì huì bù tóng.', vietnamese: 'Đâu còn bề khác, nhưng định rằng cách bề hoạt động phương án vận chuyển sẽ tách xa hoàn toàn.' },
          { speaker: 0, chinese: '我也希望医学技术能治好所有的病。', pinyin: 'Wǒ yě xīwàng yīxué jìshù néng zhìhǎo suǒyǒu de bìng.', vietnamese: 'Còn tớ đây kì ngộ mảng bên y khoa y học thì kĩ thuật cao đem đi quét dọn tiệt được mọi căn bệnh.' },
          { speaker: 1, chinese: '这要看科学家的努力了，我们要有信心！', pinyin: 'Zhè yào kàn kēxuéjiā de nǔlì le, wǒmen yào yǒu xìnxīn!', vietnamese: 'Muốn biết như dường đều đổ nhờ xem lấy thực sức nỗ lực khoa học gia rồi, tụi mình cần nhất định có trong ngực sự tự tin chớp tin vào!' }
        ]
      }
    ],

    /* L40 – Thức ăn và văn hóa ẩm thực */
    L40: [
      {
        title: 'Khám phá ẩm thực Trung Quốc', characters: ['Du khách', 'Đầu bếp'],
        lines: [
          { speaker: 0, chinese: '中国菜系非常丰富多样，我想学习！', pinyin: 'Zhōngguó càixì fēicháng fēngfù duōyàng, wǒ xiǎng xuéxí!', vietnamese: 'Ẩm thực Trung Quốc rất phong phú và đa dạng, tôi muốn học!' },
          { speaker: 1, chinese: '欢迎！你最喜欢哪种中国菜？', pinyin: 'Huānyíng! Nǐ zuì xǐhuān nǎ zhǒng Zhōngguó cài?', vietnamese: 'Chào mừng! Bạn thích món ăn Trung Quốc nào nhất?' },
          { speaker: 0, chinese: '我喜欢北京烤鸭。川菜以麻辣著称，对吗？', pinyin: 'Wǒ xǐhuān Běijīng kǎoyā. Chuāncài yǐ má là zhùchēng, duì ma?', vietnamese: 'Tôi thích vịt quay Bắc Kinh. Ẩm thực Tứ Xuyên nổi tiếng với vị cay tê, phải không?' },
          { speaker: 1, chinese: '对！你会做中国菜吗？我可以教你做饺子！', pinyin: 'Duì! Nǐ huì zuò Zhōngguó cài ma? Wǒ kěyǐ jiāo nǐ zuò jiǎozi!', vietnamese: 'Đúng! Bạn có biết nấu món ăn Trung Quốc không? Tôi có thể dạy bạn làm bánh há cảo!' },
          { speaker: 0, chinese: '太好了！我学会了做饺子的步骤了！', pinyin: 'Tài hǎo le! Wǒ xué huì le zuò jiǎozi de bùzhòu le!', vietnamese: 'Tuyệt quá! Tôi đã học được các bước làm bánh há cảo rồi!' },
          { speaker: 1, chinese: '很好！饮食文化反映了一个民族的特色。', pinyin: 'Hěn hǎo! Yǐnshí wénhuà fǎnyìng le yī gè mínzú de tèsè.', vietnamese: 'Rất tốt! Văn hóa ẩm thực phản ánh đặc sắc của một dân tộc.' },
          { speaker: 0, chinese: '说得好！通过美食，可以了解一个国家！', pinyin: 'Shuō de hǎo! Tōngguò měishí, kěyǐ liǎojiě yī gè guójiā!', vietnamese: 'Nói hay lắm! Thông qua ẩm thực, có thể hiểu một đất nước!' }
        ]
      },
      {
        title: 'Ăn tối cùng gia đình', characters: ['Mẹ', 'Con trai'],
        lines: [
          { speaker: 0, chinese: '饭做好了，快去洗手准备吃饭吧！', pinyin: 'Fàn zuò hǎo le, kuài qù xǐshǒu zhǔnbèi chīfàn ba!', vietnamese: 'Mẹ dọn mâm cơm ra chuẩn bị đâu ra đó rồi nha nhóc, hãy đi tráng ngay cái tay rồi vào sẵn mà dùng cơm lẹ nào!' },
          { speaker: 1, chinese: '哇！今天有糖醋排骨和炒青菜，太香了。', pinyin: 'Wā! Jīntiān yǒu tángcù páigǔ hé chǎo qīngcài, tài xiāng le.', vietnamese: 'Sướng chưa nè! Nay được ăn món sườn xào chua ngọt với có rau luộc xào lăn, mùi mẫn lại sao mà nó thơm dã man.' },
          { speaker: 0, chinese: '这些都是你爱吃的，多吃一点。', pinyin: 'Zhèxiē dōu shì nǐ ài chī de, duō chī yīdiǎn.', vietnamese: 'Tất thảy nhiêu đây cũng là cục cưng đây yêu thích xơi nhồm ngoàm, thế nên ăn cho nhiều thêm.' },
          { speaker: 1, chinese: '妈妈做的菜比饭店里的好吃多了！', pinyin: 'Māma zuò de cài bǐ fàndiàn lǐ de hǎochī duō le!', vietnamese: 'Những món của tay mẹ tạo ra chế làm cỗ bàn đồ bỉ thì cứ phải thốt là có ăn đứt nhà hàng!' },
          { speaker: 0, chinese: '你喜欢吃，妈妈以后天天给你做。', pinyin: 'Nǐ xǐhuān chī, māma yǐhòu tiāntiān gěi nǐ zuò.', vietnamese: 'Cưng thấy ngon thích ăn như rứa là mẹ lòng sung sướng, cứ ngày trời đổ mẹ làm dâng con.' },
          { speaker: 1, chinese: '谢谢妈妈，我一辈子都吃不腻。', pinyin: 'Xièxiè māma, wǒ yībèizi dōu chī bú nì.', vietnamese: 'Xuyt xoa con cảm tạ mẹ vô kể, một cả cái cuộn đời này con thề là đớp nuốt làm sao cho ngấy.' }
        ]
      },
      {
        title: 'Sở thích ăn uống', characters: ['David', 'Hương'],
        lines: [
          { speaker: 0, chinese: '你吃得惯辣的食物吗？四川菜很辣。', pinyin: 'Nǐ chī de guàn là de shíwù ma? Sìchuān cài hěn là.', vietnamese: 'Anh ăn được những món cay chứ? Đồ ăn Tứ Xuyên rất cay đấy.' },
          { speaker: 1, chinese: '我很喜欢吃辣的，尤其是火锅。', pinyin: 'Wǒ hěn xǐhuān chī là de, yóuqí shì huǒguō.', vietnamese: 'Tôi rất thích ăn cay, đặc biệt là lẩu.' },
          { speaker: 0, chinese: '我不行，我吃一点辣就受不了。', pinyin: 'Wǒ bù xíng, wǒ chī yīdiǎn là jiù shòubùliǎo.', vietnamese: 'Tôi thì không được, tôi ăn một chút cay là không chịu nổi.' },
          { speaker: 1, chinese: '那你喜欢什么样的口味？甜的还是咸的？', pinyin: 'Nà nǐ xǐhuān shénmeyàng de kǒuwèi? Tián de háishì xián de?', vietnamese: 'Vậy bạn thích hương vị thế nào? Ngọt hay mặn?' },
          { speaker: 0, chinese: '我比较喜欢清淡一点的，比如广东菜。', pinyin: 'Wǒ bǐjiào xǐhuān qīngdàn yīdiǎn de, bǐrú Guǎngdōng cài.', vietnamese: 'Tôi thích đồ thanh đạm một chút, ví dụ như ẩm thực Quảng Đông.' },
          { speaker: 1, chinese: '那下次我们去吃一家有名的广东早茶吧！', pinyin: 'Nà xià cì wǒmen qù chī yī jiā yǒumíng de Guǎngdōng zǎochá ba!', vietnamese: 'Vậy lần sau chúng ta đi ăn dimsum Quảng Đông ở một quán nổi tiếng nhé!' }
        ]
      }
    ],

    /* L41 – Xã hội và cộng đồng */
    L41: [
      {
        title: 'Hoạt động tình nguyện', characters: ['Người phục vụ', 'Điều phối viên'],
        lines: [
          { speaker: 0, chinese: '我们每个人都是社会的一部分，对吗？', pinyin: 'Wǒmen měi gè rén dōu shì shèhuì de yí bùfèn, duì ma?', vietnamese: 'Mỗi chúng ta đều là một phần của xã hội, phải không?' },
          { speaker: 1, chinese: '对！志愿者工作对社会很有价值！', pinyin: 'Duì! Zhìyuànzhě gōngzuò duì shèhuì hěn yǒu jiàzhí!', vietnamese: 'Đúng! Công việc tình nguyện rất có giá trị cho xã hội!' },
          { speaker: 0, chinese: '社区应该互相帮助。他们做了很多贡献。', pinyin: 'Shèqū yīnggāi hùxiāng bāngzhù. Tāmen zuò le hěn duō gòngxiàn.', vietnamese: 'Cộng đồng nên giúp đỡ lẫn nhau. Họ đã đóng góp rất nhiều.' },
          { speaker: 1, chinese: '公民有权利也有义务。参与社区活动很重要。', pinyin: 'Gōngmín yǒu quánlì yě yǒu yìwù. Cānyù shèqū huódòng hěn zhòngyào.', vietnamese: 'Công dân có quyền lợi và cũng có nghĩa vụ. Tham gia hoạt động cộng đồng rất quan trọng.' },
          { speaker: 0, chinese: '我想参加志愿活动。社会的进步需要大家努力。', pinyin: 'Wǒ xiǎng cānjiā zhìyuàn huódòng. Shèhuì de jìnbù xūyào dàjiā nǔlì.', vietnamese: 'Tôi muốn tham gia hoạt động tình nguyện. Sự tiến bộ của xã hội cần mọi người nỗ lực.' },
          { speaker: 1, chinese: '非常欢迎！我们这周末在公园做清洁活动。', pinyin: 'Fēicháng huānyíng! Wǒmen zhè zhōumò zài gōngyuán zuò qīngjié huódòng.', vietnamese: 'Rất hoan nghênh! Cuối tuần này chúng tôi làm hoạt động dọn dẹp ở công viên.' },
          { speaker: 0, chinese: '我一定参加！大家共同努力，让社区更美好！', pinyin: 'Wǒ yídìng cānjiā! Dàjiā gòngtóng nǔlì, ràng shèqū gèng měihǎo!', vietnamese: 'Tôi nhất định tham gia! Mọi người cùng nỗ lực, làm cộng đồng tốt đẹp hơn!' }
        ]
      },
      {
        title: 'Quyên góp quần áo', characters: ['Hà', 'Minh'],
        lines: [
          { speaker: 0, chinese: '我整理了一些旧衣服，打算捐给有需要的人。', pinyin: 'Wǒ zhěnglǐ le yìxiē jiù yīfu, dǎsuàn juān gěi yǒu xūyào de rén.', vietnamese: 'Tớ vừa soạn mớ quần áo cũ, tính quyên vào cho những người cần tới.' },
          { speaker: 1, chinese: '这是个好主意。你知道附近哪里有捐赠点吗？', pinyin: 'Zhè shì gè hǎo zhǔyì. Nǐ zhīdào fùjìn nǎlǐ yǒu juānzèng diǎn ma?', vietnamese: 'Chủ ý hay đó. Cậu có biết loanh quanh đây chỗ nào là điểm gom không?' },
          { speaker: 0, chinese: '社区中心旁边就有一个，我们一起去吧。', pinyin: 'Shèqū zhōngxīn pángbiān jiù yǒu yí gè, wǒmen yìqǐ qù ba.', vietnamese: 'Trung tâm cộng đồng có luôn một hòm đấy, rủ nhau đi thôi.' },
          { speaker: 1, chinese: '好啊，我也回家找找看有没有可以捐的。', pinyin: 'Hǎo a, wǒ yě huí jiā zhǎozhǎo kàn yǒu méiyǒu kěyǐ juān de.', vietnamese: 'Triển luôn, để tớ lộn về moi xem còn chừa lại cái gì quyên được.' },
          { speaker: 0, chinese: '虽然是旧物，但对别人来说可能很有用。', pinyin: 'Suīrán shì jiùwù, dàn duì biérén lái shuō kěnéng hěn yǒuyòng.', vietnamese: 'Dù là đồ cũ mèm, những nhỡ đâu với người khác lại dùng ra trò.' },
          { speaker: 1, chinese: '没错，帮助别人也会让自己感到快乐。', pinyin: 'Méicuò, bāngzhù biérén yě huì ràng zìjǐ gǎndào kuàilè.', vietnamese: 'Đúng chóc, mở lòng đùm bọc cũng là cho mình thấy yêu đời phơi phới.' }
        ]
      },
      {
        title: 'Bảo vệ môi trường khu phố', characters: ['Hàng xóm A', 'Hàng xóm B'],
        lines: [
          { speaker: 0, chinese: '最近小区的垃圾分类做得越来越好了。', pinyin: 'Zuìjìn xiǎoqū de lājī fēnlèi zuò de yuè lái yuè hǎo le.', vietnamese: 'Sát dạo này khu dân cư phân loại rác càng ngày càng tinh tươm rồi ha.' },
          { speaker: 1, chinese: '是啊，大家都意识到保护环境的重要性了。', pinyin: 'Shì a, dàjiā dōu yìshi dào bǎohù huánjìng de zhòngyào xìng le.', vietnamese: 'Chứ sao mầy, bà con ai nấy đều đánh hơi thấy tầm hệ trọng của môi trường môi sinh rồi.' },
          { speaker: 0, chinese: '我们不但要分类，平时还要减少使用塑料袋。', pinyin: 'Wǒmen búdàn yào fēnlèi, píngshí hái yào jiǎnshǎo shǐyòng sùliàodài.', vietnamese: 'Không những mình phải chia rác, mà chập thường còn nên bớt bớt lạm dụng bịch ny lông.' },
          { speaker: 1, chinese: '我每次去超市都自己带环保袋。', pinyin: 'Wǒ měi cì qù chāoshì dōu zìjǐ dài huánbǎodài.', vietnamese: 'Kể từ dạo đó tao phi đến siêu thị toàn tự thủ sẵn túi vải thân thiện thôi.' },
          { speaker: 0, chinese: '大家的环保意识提高了，社区环境就会越来越好。', pinyin: 'Dàjiā de huánbǎo yìshí tígāo le, shèqū huánjìng jiù huì yuè lái yuè hǎo.', vietnamese: 'Căn ý thức dân tình kéo cao lên, môi trường khối cộng đồng càng lúc liền được trong lành.' },
          { speaker: 1, chinese: '为了我们的下一代，这是应该做的。', pinyin: 'Wèile wǒmen de xià yídài, zhè shì yīnggāi zuò de.', vietnamese: 'Đành là vì thế hệ con cháu kế cận chúng mình, những thứ này ngặt nỗi là phải làm đấy.' }
        ]
      }
    ],

    /* L42 – Thể hiện ý kiến */
    L42: [
      {
        title: 'Cuộc tranh luận nhỏ', characters: ['Người A', 'Người B'],
        lines: [
          { speaker: 0, chinese: '你对这个问题有什么看法？', pinyin: 'Nǐ duì zhège wèntí yǒu shénme kànfǎ?', vietnamese: 'Bạn có ý kiến gì về vấn đề này?' },
          { speaker: 1, chinese: '我认为这个方案不可行，成本太高了。', pinyin: 'Wǒ rènwéi zhège fāng\'àn bù kěxíng, chéngběn tài gāo le.', vietnamese: 'Tôi cho rằng phương án này không khả thi, chi phí quá cao.' },
          { speaker: 0, chinese: '我同意你的看法。但还有另一种思路。', pinyin: 'Wǒ tóngyì nǐ de kànfǎ. Dàn hái yǒu lìng yì zhǒng sīlù.', vietnamese: 'Tôi đồng ý với quan điểm của bạn. Nhưng còn có một hướng suy nghĩ khác.' },
          { speaker: 1, chinese: '我不太赞成这种做法，从我的角度来看很冒险。', pinyin: 'Wǒ bú tài zànchéng zhè zhǒng zuòfǎ, cóng wǒ de jiǎodù lái kàn hěn màoxiǎn.', vietnamese: 'Tôi không hoàn toàn tán thành cách làm này, từ góc độ của tôi rất mạo hiểm.' },
          { speaker: 0, chinese: '我有充分的理由支持这个观点。你的例子很有说服力。', pinyin: 'Wǒ yǒu chōngfèn de lǐyóu zhīchí zhège guāndiǎn. Nǐ de lìzi hěn yǒu shuōfúlì.', vietnamese: 'Tôi có đầy đủ lý do để ủng hộ quan điểm này. Ví dụ của bạn rất có sức thuyết phục.' },
          { speaker: 1, chinese: '但我们也要考虑另一方面。我们需要用事实说话。', pinyin: 'Dàn wǒmen yě yào kǎolǜ lìng yì fāngmiàn. Wǒmen xūyào yòng shìshí shuōhuà.', vietnamese: 'Nhưng chúng ta cũng phải xem xét mặt khác. Chúng ta cần để sự thật nói lên tất cả.' },
          { speaker: 0, chinese: '我们可以听听不同的意见，然后再做决定。', pinyin: 'Wǒmen kěyǐ tīngting bùtóng de yìjiàn, ránhòu zài zuò juédìng.', vietnamese: 'Chúng ta có thể nghe các ý kiến khác nhau, rồi mới đưa ra quyết định.' }
        ]
      },
      {
        title: 'Đóng góp ý kiến cho sếp', characters: ['Nhân viên', 'Quản lý'],
        lines: [
          { speaker: 0, chinese: '经理，关于新的营销计划，我有一些不同的想法。', pinyin: 'Jīnglǐ, guānyú xīn de yíngxiāo jìhuà, wǒ yǒu yìxiē bùtóng de xiǎngfǎ.', vietnamese: 'Biết không quản lý à, về phần phương án tiếp thị kia em có dăm ý ngách khác biệt đôi tí.' },
          { speaker: 1, chinese: '好啊，你说来听听，我愿意倾听大家的意见。', pinyin: 'Hǎo a, nǐ shuō lái tīngting, wǒ yuànyì qīngtīng dàjiā de yìjiàn.', vietnamese: 'Được chứ, em nói cho tỏ xem sao, tôi sẵn lòng để thẩm ý kiến của chư vị mọi người.' },
          { speaker: 0, chinese: '我觉得我们不应该只关注线上，线下也很重要。', pinyin: 'Wǒ juéde wǒmen bù yīnggāi zhǐ guānzhù xiànshàng, xiànxià yě hěn zhòngyào.', vietnamese: 'Em thiết trộm nghĩ ta hông nên chăm chăm mải miết mảng chìm trực tuyến, ngoại tuyến phô trương cũng cộm không kém.' },
          { speaker: 1, chinese: '确实，但我们这季度的预算有限。', pinyin: 'Quèshí, dàn wǒmen zhè jìdù de yùsuàn yǒuxiàn.', vietnamese: 'Trúng phóc rồi, khổ cái quỷ kế ngân sách quý này nó hạn hẹp cụt lủn.' },
          { speaker: 0, chinese: '如果合理分配，我相信效果会更好。', pinyin: 'Rúguǒ hélǐ fēnpèi, wǒ xiāngxìn xiàoguǒ huì gèng hǎo.', vietnamese: 'Nếu chịu xoay xở san bổ một lý, em tự thân dám tin kết quả mang về là sáng suốt.' },
          { speaker: 1, chinese: '你有具体的方案吗？明天开会时讨论一下。', pinyin: 'Nǐ yǒu jùtǐ de fāng\'àn ma? Míngtiān kāihuì shí tǎolùn yíxià.', vietnamese: 'Em nhắm được một đề xuất hiện hữu không? Mai đi họp mình lôi ráo cho ra.' }
        ]
      },
      {
        title: 'Từ chối lời đề nghị', characters: ['Cường', 'Ly'],
        lines: [
          { speaker: 0, chinese: '周末我打算组织大家去爬山，你觉得怎么样？', pinyin: 'Zhōumò wǒ dǎsuàn zǔzhī dàjiā qù páshān, nǐ juéde zěnmeyàng?', vietnamese: 'Cuối tuần rồi nay tớ đứng vãn một hội trèo non, cậu cảm giá sao nhĩ?' },
          { speaker: 1, chinese: '爬山很好，但最近天气太热了，可能不合适。', pinyin: 'Páshān hěn hǎo, dàn zuìjìn tiānqì tài rè le, kěnéng bù héshì.', vietnamese: 'Leo núi bổ khỏe đấy, nhưng lịm dạo này trời nắng gắt rát thịt, chẳng ra dáng một ti nào.' },
          { speaker: 0, chinese: '那我们可以早点出发，避开中午的高温。', pinyin: 'Nà wǒmen kěyǐ zǎodiǎn chūfā, bì kāi zhōngwǔ de gāowēn.', vietnamese: 'Vậy thì mình cứ nhổ rễ tinh sương sớm, bẻ lái tránh cơn thiêu rụi buổi trưa.' },
          { speaker: 1, chinese: '说实话，比起爬山，我更倾向于去游泳。', pinyin: 'Shuō shíhuà, bǐqǐ páshān, wǒ gèng qīngxiàng yú qù yóuyǒng.', vietnamese: 'Nói huỵch tẹt ra, sánh đọ với leo lúi, tớ càng nghiêng chiều lượn đi bơi hơn.' },
          { speaker: 0, chinese: '也有道理，那我们再问问其他人的意见吧。', pinyin: 'Yě yǒu dàolǐ, nà wǒmen zài wènwèn qítā rén de yìjiàn ba.', vietnamese: 'Cũng ra sự cái lí, thế thôi để bọn tớ tham khảo châm chước ý của người khác.' },
          { speaker: 1, chinese: '对，少数服从多数，看看大家想去哪。', pinyin: 'Duì, shǎoshù fúcóng duōshù, kànkan dàjiā xiǎng qù nǎ.', vietnamese: 'Phải đó, quy tắc thiểu số theo đa số đấy, dọ xem quần hùng đâm chọc chỗ nào.' }
        ]
      }
    ],

    /* L43 – Sức khỏe và lối sống */
    L43: [
      {
        title: 'Chăm sóc sức khỏe', characters: ['Bác sĩ dinh dưỡng', 'Bệnh nhân'],
        lines: [
          { speaker: 0, chinese: '保持健康的生活方式很重要，你同意吗？', pinyin: 'Bǎochí jiànkāng de shēnghuó fāngshì hěn zhòngyào, nǐ tóngyì ma?', vietnamese: 'Duy trì lối sống lành mạnh rất quan trọng, bạn đồng ý không?' },
          { speaker: 1, chinese: '非常同意！均衡饮食对健康很有好处。', pinyin: 'Fēicháng tóngyì! Jūnhéng yǐnshí duì jiànkāng hěn yǒu hǎochù.', vietnamese: 'Rất đồng ý! Ăn uống cân bằng rất tốt cho sức khỏe.' },
          { speaker: 0, chinese: '现代人的生活压力很大，你有什么感受？', pinyin: 'Xiàndài rén de shēnghuó yālì hěn dà, nǐ yǒu shénme gǎnshòu?', vietnamese: 'Người hiện đại chịu rất nhiều áp lực cuộc sống, bạn cảm nhận thế nào?' },
          { speaker: 1, chinese: '是的。你怎么缓解工作压力？', pinyin: 'Shì de. Nǐ zěnme huǎnjiě gōngzuò yālì?', vietnamese: 'Đúng vậy. Bạn làm thế nào để giảm bớt áp lực công việc?' },
          { speaker: 0, chinese: '冥想和瑜伽对减压很有效，我每天都做。', pinyin: 'Míngxiǎng hé yújiā duì jiǎn yā hěn yǒuxiào, wǒ měitiān dōu zuò.', vietnamese: 'Thiền định và yoga rất hiệu quả để giảm stress, tôi làm mỗi ngày.' },
          { speaker: 1, chinese: '睡眠不足会影响健康，我经常睡不好。', pinyin: 'Shuìmián bùzú huì yǐngxiǎng jiànkāng, wǒ jīngcháng shuì bù hǎo.', vietnamese: 'Ngủ không đủ giấc sẽ ảnh hưởng đến sức khỏe, tôi thường khó ngủ ngon.' },
          { speaker: 0, chinese: '睡前不用手机，放松一下，睡眠会改善！', pinyin: 'Shuì qián bú yòng shǒujī, fàngsōng yíxià, shuìmián huì gǎishàn!', vietnamese: 'Trước khi ngủ đừng dùng điện thoại, thư giãn một chút, giấc ngủ sẽ cải thiện!' }
        ]
      },
      {
        title: 'Bàn về thói quen tập luyện', characters: ['Long', 'Thu'],
        lines: [
          { speaker: 0, chinese: '你每天下班后都去健身房吗？', pinyin: 'Nǐ měitiān xiàbān hòu dōu qù jiànshēnfáng ma?', vietnamese: 'Mỗi ban tan làm cậu đều chui vào phòng thể dục phải hông?' },
          { speaker: 1, chinese: '差不多吧，我觉得出汗的感觉很好。', pinyin: 'Chàbùduō ba, wǒ juéde chūhàn de gǎnjué hěn hǎo.', vietnamese: 'Xem như na ná thế đi, đổ đẫm mồi hồi thì tớ cảm thấy sảng khoái thôi.' },
          { speaker: 0, chinese: '我想开始运动，但总是坚持不下来。', pinyin: 'Wǒ xiǎng kāishǐ yùndòng, dàn zǒngshì jiānchí bú xiàlái.', vietnamese: 'Nhưng lòng tớ muốn động thủ thể lực, khổ nỗi chả trụ dai được đàng.' },
          { speaker: 1, chinese: '你可以从简单的运动开始，比如跑步或游泳。', pinyin: 'Nǐ kěyǐ cóng jiǎndān de yùndòng kāishǐ, bǐrú pǎobù huò yóuyǒng.', vietnamese: 'Lợi khuyên cậu xê dịch thử từ động lực nhẹ nhất, tựa hồ chạy bộ nhảy nước bơi.' },
          { speaker: 0, chinese: '那你可以当我的健身教练吗？', pinyin: 'Nà nǐ kěyǐ dāng wǒ de jiànshēn jiàoliàn ma?', vietnamese: 'Bởi vậy nếu đặng rãnh thân cậu hóa tay chỉ dạy nâng tạ tớ được chớ?' },
          { speaker: 1, chinese: '哈哈，没问题，明天我们就一起去。', pinyin: 'Hāhā, méi wèntí, míngtiān wǒmen jiù yìqǐ qù.', vietnamese: 'Hơ hơ, gật vội chứ, qua ngày kia là mình đi chao tay thôi.' }
        ]
      },
      {
        title: 'Chuyên mục giảm cân', characters: ['Nhàn', 'Quyên'],
        lines: [
          { speaker: 0, chinese: '最近我又胖了，连以前的裤子都穿不下了。', pinyin: 'Zuìjìn wǒ yòu pàng le, lián yǐqián de kùzi dōu chuān bú xià le.', vietnamese: 'Mấy hôm nay tớ phệ mỡ nữa rồi, những cái quần sọc dạo xửa diện cũng kẹt cứng trân.' },
          { speaker: 1, chinese: '是吗？但我觉得你看起来还行啊。', pinyin: 'Shì ma? Dàn wǒ juéde nǐ kàn qǐlái hái xíng a.', vietnamese: 'Ngộ ha? Sao mà soi tớ thấy cậu trông vẫn rất mi nhon ỏn đấy chứ.' },
          { speaker: 0, chinese: '不行，我必须要减肥了，我要节食。', pinyin: 'Bù xíng, wǒ bìxū yào jiǎnféi le, wǒ yào jiéshí.', vietnamese: 'Bó tay cấm cữ, bắt kiêng phải bóp mỡ nhét thịt thôi, tớ ăn giảm lại đây.' },
          { speaker: 1, chinese: '过度节食对身体不好，你应该健康饮食。', pinyin: 'Guòdù jiéshí duì shēntǐ bù hǎo, nǐ yīnggāi jiànkāng yǐnshí.', vietnamese: 'Buông miệng bóp bụng quá mức lại tổ sinh bệnh ra chừ, ăn có lề có chọn lọc là đài cát rồi.' },
          { speaker: 0, chinese: '我知道，但我管不住自己的嘴。', pinyin: 'Wǒ zhīdào, dàn wǒ guǎn bú zhù zìjǐ de zuǐ.', vietnamese: 'Cái này tớ có mường, ngặt một nỗi tớ không phanh cầm cái sướng cái miệng rảnh ro le lưỡi.' },
          { speaker: 1, chinese: '明天开始我监督你，少吃甜食多吃蔬菜！', pinyin: 'Míngtiān kāishǐ wǒ jiāndū nǐ, shǎo chī tiánshí duō chī shūcài!', vietnamese: 'Mất cả lề thoái, sang buổi tối mai tớ rình thộp quản cậu, tọng vào nhiều rau củ ít thôi mớ kẹo ngọt nhé!' }
        ]
      }
    ],

    /* L44 – Phương tiện truyền thông */
    L44: [
      {
        title: 'Thảo luận về truyền thông', characters: ['Nhà báo', 'Độc giả'],
        lines: [
          { speaker: 0, chinese: '你平时通过什么方式获取新闻？', pinyin: 'Nǐ píngshí tōngguò shénme fāngshì huòqǔ xīnwén?', vietnamese: 'Bạn thường lấy tin tức qua phương tiện nào?' },
          { speaker: 1, chinese: '我喜欢看网络新闻，比报纸方便多了。', pinyin: 'Wǒ xǐhuān kàn wǎngluò xīnwén, bǐ bàozhǐ fāngbiàn duō le.', vietnamese: 'Tôi thích đọc tin tức trực tuyến, tiện hơn báo giấy nhiều.' },
          { speaker: 0, chinese: '社交媒体改变了信息传播方式，你觉得呢？', pinyin: 'Shèjiāo méitǐ gǎibiàn le xìnxī chuánbō fāngshì, nǐ juéde ne?', vietnamese: 'Mạng xã hội đã thay đổi cách truyền thông tin, bạn nghĩ sao?' },
          { speaker: 1, chinese: '是的，但我们需要辨别真假信息，很重要！', pinyin: 'Shì de, dàn wǒmen xūyào biànbié zhēnjiǎ xìnxī, hěn zhòngyào!', vietnamese: 'Đúng vậy, nhưng chúng ta cần phân biệt thông tin thật giả, rất quan trọng!' },
          { speaker: 0, chinese: '新闻自由是民主社会的基础，你同意吗？', pinyin: 'Xīnwén zìyóu shì mínzhǔ shèhuì de jīchǔ, nǐ tóngyì ma?', vietnamese: 'Tự do báo chí là nền tảng của xã hội dân chủ, bạn đồng ý không?' },
          { speaker: 1, chinese: '同意！你如何提高信息素养？这很重要。', pinyin: 'Tóngyì! Nǐ rúhé tígāo xìnxī sùyǎng? Zhè hěn zhòngyào.', vietnamese: 'Đồng ý! Bạn làm thế nào để nâng cao khả năng xử lý thông tin? Điều này rất quan trọng.' },
          { speaker: 0, chinese: '多看不同媒体，独立思考，不轻易相信。', pinyin: 'Duō kàn bùtóng méitǐ, dúlì sīkǎo, bù qīngyì xiāngxìn.', vietnamese: 'Xem nhiều nguồn media khác nhau, tư duy độc lập, không dễ tin.' }
        ]
      },
      {
        title: 'Sức mạnh MXH', characters: ['Lan', 'Hương'],
        lines: [
          { speaker: 0, chinese: '你看今天这篇关于环保的文章了吗？', pinyin: 'Nǐ kàn jīntiān zhè piān guānyú huánbǎo de wénzhāng le ma?', vietnamese: 'Bạn đọc bài viết hôm nay về việc bảo vệ môi trường chưa?' },
          { speaker: 1, chinese: '看到了，现在在微博上非常火。', pinyin: 'Kàn dào le, xiànzài zài Wēibó shàng fēicháng huǒ.', vietnamese: 'Đọc được rồi, trên Weibo hiện đang hot rần rần đó.' },
          { speaker: 0, chinese: '我觉得社交媒体的力量真是太大了。', pinyin: 'Wǒ juéde shèjiāo méitǐ de lìliàng zhēn shì tài dà le.', vietnamese: 'Theo mình sức mạnh của truyền thông xã hội dường như bùng nổ dữ dội hơn đó.' },
          { speaker: 1, chinese: '是的，它可以很快地让几百万人知道一件事。', pinyin: 'Shì de, tā kěyǐ hěn kuài de ràng jǐ bǎi wàn rén zhīdào yí jiàn shì.', vietnamese: 'Phải rồi, nó rầm rộ nhanh đến mức hàng triệu người biết đến.' },
          { speaker: 0, chinese: '这也很危险，如果消息是假的怎么办？', pinyin: 'Zhè yě hěn wēixiǎn, rúguǒ xiāoxi shì jiǎ de zěnme bàn?', vietnamese: 'Nhưng cũng có điểm hiểm nguy, ngộ nhỡ tin tức là giả thì làm sao?' },
          { speaker: 1, chinese: '所以我们不能随便转发没有确认的消息。', pinyin: 'Suǒyǐ wǒmen bùnéng suíbiàn zhuǎnfā méiyǒu quèrèn de xiāoxi.', vietnamese: 'Bởi vậy nên chúng ta đừng tùy tiện share tin tức chưa xác nhận.' }
        ]
      },
      {
        title: 'Video ngắn', characters: ['Cảnh', 'Vy'],
        lines: [
          { speaker: 0, chinese: '你每天晚上都在看短视频吗？', pinyin: 'Nǐ měitiān wǎnshang dōu zài kàn duǎn shìpín ma?', vietnamese: 'Có phải buổi tối ngày nào em cũng lướt xem video ngắn?' },
          { speaker: 1, chinese: '是啊，我觉得有些很有意思，很搞笑。', pinyin: 'Shì a, wǒ juéde yǒuxiē hěn yǒu yìsi, hěn gǎoxiào.', vietnamese: 'Đúng á anh, em thấy một vài clip rất thú vị, hài hước nức nở.' },
          { speaker: 0, chinese: '但是看太久对眼睛很不好。', pinyin: 'Dànshì kàn tài jiǔ duì yǎnjing hěn bù hǎo.', vietnamese: 'Cơ mà xem thời gian quá lâu không tốt cho đôi mắt đâu.' },
          { speaker: 1, chinese: '我知道，但我就是停不下来。', pinyin: 'Wǒ zhīdào, dàn wǒ jiù shì tíng bú xiàlái.', vietnamese: 'Em rõ chứ lỵ, dưng cơ mà sao cứ lướt hoài chẳng thể dừng chớ.' },
          { speaker: 0, chinese: '以后只能看二十分钟，然后去睡觉。', pinyin: 'Yǐhòu zhǐ néng kàn èrshí fēnzhōng, ránhòu qù shuìjiào.', vietnamese: 'Lần sau em cứ canh đủ 20 phút thôi nha, rồi sau đó đi ngủ.' },
          { speaker: 1, chinese: '你好像我妈妈啊，不过我听你的。', pinyin: 'Nǐ hǎoxiàng wǒ māma a, búguò wǒ tīng nǐ de.', vietnamese: 'Trời ơi anh y chang má em, chớ dưng mà em nghe lời anh vậy.' }
        ]
      }
    ],

    /* L45 – Tranh luận và thuyết phục */
    L45: [
      {
        title: 'Hội thảo tranh luận', characters: ['Người A', 'Người B'],
        lines: [
          { speaker: 0, chinese: '你能解释一下你的理由吗？', pinyin: 'Nǐ néng jiěshì yīxià nǐ de lǐyóu ma?', vietnamese: 'Bạn có thể giải thích lý do của bạn không?' },
          { speaker: 1, chinese: '当然！我有充分的理由支持这个观点。', pinyin: 'Dāngrán! Wǒ yǒu chōngfèn de lǐyóu zhīchí zhège guāndiǎn.', vietnamese: 'Tất nhiên! Tôi có đầy đủ lý do để ủng hộ quan điểm này.' },
          { speaker: 0, chinese: '你的例子很有说服力，但我有不同意见。', pinyin: 'Nǐ de lìzi hěn yǒu shuōfúlì, dàn wǒ yǒu bùtóng yìjiàn.', vietnamese: 'Ví dụ của bạn rất có sức thuyết phục, nhưng tôi có ý kiến khác.' },
          { speaker: 1, chinese: '但是我们也要考虑另一方面。这很公平。', pinyin: 'Dànshì wǒmen yě yào kǎolǜ lìng yī fāngmiàn. Zhè hěn gōngpíng.', vietnamese: 'Nhưng chúng ta cũng phải xem xét mặt khác. Điều này rất công bằng.' },
          { speaker: 0, chinese: '从我的角度来看，这很重要。我的结论是……', pinyin: 'Cóng wǒ de jiǎodù lái kàn, zhè hěn zhòngyào. Wǒ de jiélùn shì……', vietnamese: 'Từ góc độ của tôi, điều này rất quan trọng. Kết luận của tôi là...' },
          { speaker: 1, chinese: '我们需要用事实说话，而不是情绪。', pinyin: 'Wǒmen xūyào yòng shìshí shuōhuà, ér bù shì qíngxù.', vietnamese: 'Chúng ta cần để sự thật nói lên tất cả, chứ không phải cảm xúc.' },
          { speaker: 0, chinese: '说得对！我们可以找到共同点，取得共识！', pinyin: 'Shuō de duì! Wǒmen kěyǐ zhǎodào gòngtóng diǎn, qǔdé gòngshí!', vietnamese: 'Nói đúng lắm! Chúng ta có thể tìm điểm chung, đạt được sự đồng thuận!' }
        ]
      },
      {
        title: 'Thuyết phục khách hàng', characters: ['Sale', 'Khách hàng'],
        lines: [
          { speaker: 0, chinese: '您好，这款产品非常适合您公司的需求。', pinyin: 'Nín hǎo, zhè kuǎn chǎnpǐn fēicháng shìhé nín gōngsī de xūyào.', vietnamese: 'Chào ông, dòng sản phẩm này thật sự rất thích hợp với nhu cầu công ty ông.' },
          { speaker: 1, chinese: '可是我还是觉得价格有一点高了。', pinyin: 'Kěshì wǒ háishì juéde jiàgé yǒu yìdiǎn gāo le.', vietnamese: 'Vậy mà tôi đây vẫn thấy cái giá hơi cao.' },
          { speaker: 0, chinese: '我们的质量在市场上是最好的，保证物有所值。', pinyin: 'Wǒmen de zhìliàng zài shìchǎng shàng shì zuì hǎo de, bǎozhèng wù yǒu suǒ zhí.', vietnamese: 'Chất lượng hàng của chúng tôi trên thị trường là hảo hạng nhất, đảm bảo tiền nào của nấy.' },
          { speaker: 1, chinese: '我知道，但我只有这么多的预算。', pinyin: 'Wǒ zhīdào, dàn wǒ zhǐ yǒu zhème duō de yùsuàn.', vietnamese: 'Tôi cũng rõ, có điều ngân sách tôi chỉ có từng này.' },
          { speaker: 0, chinese: '如果您能今天签合同，我可以给您打九折。', pinyin: 'Rúguǒ nín néng jīntiān qiān hétóng, wǒ kěyǐ gěi nín dǎ jiǔ zhé.', vietnamese: 'Nếu hôm nay chốt luôn hợp đồng được, tôi đây mạnh dạn chiết khấu để anh giảm 10%.' },
          { speaker: 1, chinese: '这听起来还不错，让我再考虑五分钟。', pinyin: 'Zhè tīng qǐlái hái búcuò, ràng wǒ zài kǎolǜ wǔ fēnzhōng.', vietnamese: 'Nghe có vẻ cũng tốt đấy, để tôi xin thêm 5 phút suy nghĩ.' }
        ]
      },
      {
        title: 'Xin nuôi thú cưng', characters: ['Con gái', 'Mẹ'],
        lines: [
          { speaker: 0, chinese: '妈妈，我真的很想养一只小猫。', pinyin: 'Māma, wǒ zhēn de hěn xiǎng yǎng yì zhǐ xiǎo māo.', vietnamese: 'Mẹ à, con cực kì muốn ẵm về nuôi bằng được một bé mèo.' },
          { speaker: 1, chinese: '不行，养猫太麻烦了，家里会到处是毛。', pinyin: 'Bù xíng, yǎng māo tài máfan le, jiālǐ huì dàochù shì máo.', vietnamese: 'Không được, nuôi mèo rắc rối lắm, trong nhà sẽ đầy rẫy lông tơ.' },
          { speaker: 0, chinese: '我保证每天都会自己清理猫砂和梳毛！', pinyin: 'Wǒ bǎozhèng měitiān dōu huì zìjǐ qīnglǐ māoshā hé shū máo!', vietnamese: 'Con xin trịnh trọng hứa mỗi ngày đều tự thân dọn cát thú, cào chải lông!' },
          { speaker: 1, chinese: '你连自己的房间都不打扫，我怎么相信你？', pinyin: 'Nǐ lián zìjǐ de fángjiān dōu bù dǎsǎo, wǒ zěnme xiāngxìn nǐ?', vietnamese: 'Cái phòng con còn chả tự mà quét dọn, mẹ sao mường tin nổi đây?' },
          { speaker: 0, chinese: '如果我连续一个月都保持房间干净呢？', pinyin: 'Rúguǒ wǒ liánxù yí gè yuè dōu bǎochí fángjiān gānjìng ne?', vietnamese: 'Ví nhỡ con có thể giữ trọn được một tháng phòng ốc luôn sạch sẽ thì sao?' },
          { speaker: 1, chinese: '那好，如果你能做到，我们就去宠物店看看。', pinyin: 'Nà hǎo, rúguǒ nǐ néng zuò dào, wǒmen jiù qù chǒngwù diàn kànkan.', vietnamese: 'Được rồi, nếu quả như làm được, ta đi ngó đến cửa tiệm vật nuôi một phen.' }
        ]
      }
    ],

    /* L46 – Lịch sử và địa lý Trung Quốc */
    L46: [
      {
        title: 'Tìm hiểu lịch sử Trung Quốc', characters: ['Giáo viên', 'Du khách'],
        lines: [
          { speaker: 0, chinese: '中国有五千年的历史，非常悠久。', pinyin: 'Zhōngguó yǒu wǔqiān nián de lìshǐ, fēicháng yōujiǔ.', vietnamese: 'Trung Quốc có năm nghìn năm lịch sử, rất lâu đời.' },
          { speaker: 1, chinese: '长城是中国的标志性建筑！真的很壮观！', pinyin: 'Chángchéng shì Zhōngguó de biāozhìxìng jiànzhú! Zhēn de hěn zhuànguān!', vietnamese: 'Vạn Lý Trường Thành là công trình biểu tượng của Trung Quốc! Thật hùng vĩ!' },
          { speaker: 0, chinese: '中国是世界上人口最多的国家，你知道吗？', pinyin: 'Zhōngguó shì shìjiè shàng rénkǒu zuì duō de guójiā, nǐ zhīdào ma?', vietnamese: 'Trung Quốc là quốc gia đông dân nhất thế giới, bạn có biết không?' },
          { speaker: 1, chinese: '知道！黄河被称为中华民族的母亲河，对吗？', pinyin: 'Zhīdào! Huánghé bèi chēng wéi Zhōnghuá mínzú de mǔqīn hé, duì ma?', vietnamese: 'Biết! Hoàng Hà được gọi là con sông mẹ của dân tộc Trung Hoa, phải không?' },
          { speaker: 0, chinese: '对！中国的四大发明影响了全世界！', pinyin: 'Duì! Zhōngguó de sì dà fāmíng yǐngxiǎng le quán shìjiè!', vietnamese: 'Đúng! Bốn phát minh vĩ đại của Trung Quốc đã ảnh hưởng đến cả thế giới!' },
          { speaker: 1, chinese: '丝绸之路促进了东西方文化交流，真了不起！', pinyin: 'Sīchóu zhī lù cùjìn le dōng xīfāng wénhuà jiāoliú, zhēn liǎobuqǐ!', vietnamese: 'Con đường tơ lụa đã thúc đẩy giao lưu văn hóa Đông-Tây, thật đáng kinh ngạc!' },
          { speaker: 0, chinese: '中国历史确实博大精深，值得深入研究！', pinyin: 'Zhōngguó lìshǐ quèshí bódàjīngshēn, zhídé shēnrù yánjiū!', vietnamese: 'Lịch sử Trung Quốc quả thực sâu sắc rộng lớn, đáng nghiên cứu sâu!' }
        ]
      },
      {
        title: 'Lên kế hoạch đi chơi', characters: ['Minh', 'Hải'],
        lines: [
          { speaker: 0, chinese: '这个周末我们要去西安旅游，你准备好了吗？', pinyin: 'Zhège zhōumò wǒmen yào qù Xī\'ān lǚyóu, nǐ zhǔnbèi hǎo le ma?', vietnamese: 'Cuối tuần này chúng ta đi du lịch Tây An, cậu chuẩn bị xong hết chưa?' },
          { speaker: 1, chinese: '差不多了。听说西安是一座历史古城，对吗？', pinyin: 'Chàbùduō le. Tīngshuō Xī\'ān shì yí zuò lìshǐ gǔchéng, duì ma?', vietnamese: 'Gần xong rồi. Nghe nói Tây An là một tòa thành cổ lịch sử, phải không?' },
          { speaker: 0, chinese: '对，它是几个朝代的首都，有很多古迹。', pinyin: 'Duì, tā shì jǐ gè cháodài de shǒudū, yǒu hěn duō gǔjì.', vietnamese: 'Đúng, nó là thủ đô của mấy triều đại, có rất nhiều di tích.' },
          { speaker: 1, chinese: '我想去看兵马俑，听说非常壮观。', pinyin: 'Wǒ xiǎng qù kàn Bīngmǎyǒng, tīngshuō fēicháng zhuàngguān.', vietnamese: 'Tớ muốn đi xem Đội quân đất nung, nghe bảo hoành tráng lắm.' },
          { speaker: 0, chinese: '没问题，我已经提前在网上买好门票了。', pinyin: 'Méi wèntí, wǒ yǐjīng tíqián zài wǎngshàng mǎihǎo ménpiào le.', vietnamese: 'Không vấn đề, tớ đã mua sẵn vé trước trên mạng rồi.' },
          { speaker: 1, chinese: '太好了！我们还可以尝尝当地的特色小吃。', pinyin: 'Tài hǎo le! Wǒmen hái kěyǐ chángchang dāngdì de tèsè xiǎochī.', vietnamese: 'Tuyệt quá đi! Chúng ta còn có thể nếm thử đồ ăn vặt đặc sắc địa phương nữa.' }
        ]
      },
      {
        title: 'Nói chuyện về địa lý', characters: ['Học sinh', 'Thầy giáo'],
        lines: [
          { speaker: 0, chinese: '老师，中国的地形有什么特点？', pinyin: 'Lǎoshī, Zhōngguó de dìxíng yǒu shénme tèdiǎn?', vietnamese: 'Thầy ơi, địa hình Trung Quốc có những đặc điểm gì ạ?' },
          { speaker: 1, chinese: '中国地大物博，西部是高山，东部是平原。', pinyin: 'Zhōngguó dì dà wù bó, xībù shì gāoshān, dōngbù shì píngyuán.', vietnamese: 'Trung Quốc đất rộng vật nhiều, phía Tây là núi cao, phía Đông là đồng bằng.' },
          { speaker: 0, chinese: '那长江和黄河也是从西向东流的吗？', pinyin: 'Nà Chángjiāng hé Huánghé yě shì cóng xī xiàng dōng liú de ma?', vietnamese: 'Vậy Trường Giang với Hoàng Hà cũng chảy từ Tây sang Đông sao?' },
          { speaker: 1, chinese: '没错，因为地势西高东低，水就往低处流了。', pinyin: 'Méicuò, yīnwèi dìshì xī gāo dōng dī, shuǐ jiù wǎng dī chù liú le.', vietnamese: 'Không sai, vì địa thế Tây cao Đông thấp, nên nước chảy về chỗ trũng.' },
          { speaker: 0, chinese: '原来是这样！地理知识真有意思。', pinyin: 'Yuánlái shì zhèyàng! Dìlǐ zhīshí zhēn yǒu yìsi.', vietnamese: 'Thì ra là thế! Kiến thức địa lý thực sự rất thú vị.' },
          { speaker: 1, chinese: '多看看地图，你会发现更多有意思的东西。', pinyin: 'Duō kànkan dìtú, nǐ huì fāxiàn gèng duō yǒu yìsi de dōngxi.', vietnamese: 'Em năng xem bản đồ nhiều hơn, sẽ khám phá thêm nhiều điều hay ho.' }
        ]
      }
    ],

    /* L47 – Văn học và thơ ca */
    L47: [
      {
        title: 'Câu lạc bộ đọc sách', characters: ['Người A', 'Người B'],
        lines: [
          { speaker: 0, chinese: '你喜欢读中国文学作品吗？', pinyin: 'Nǐ xǐhuān dú Zhōngguó wénxué zuòpǐn ma?', vietnamese: 'Bạn có thích đọc tác phẩm văn học Trung Quốc không?' },
          { speaker: 1, chinese: '非常喜欢！《红楼梦》是中国四大名著之一！', pinyin: 'Fēicháng xǐhuān! 《Hónglóumèng》 shì Zhōngguó sì dà míngzhù zhī yī!', vietnamese: 'Rất thích! "Hồng Lâu Mộng" là một trong tứ đại danh tác của Trung Quốc!' },
          { speaker: 0, chinese: '李白是唐朝著名的诗人，你读过他的诗吗？', pinyin: 'Lǐ Bái shì Tángcháo zhùmíng de shīrén, nǐ dú guò tā de shī ma?', vietnamese: 'Lý Bạch là nhà thơ nổi tiếng thời nhà Đường, bạn đã đọc thơ của ông chưa?' },
          { speaker: 1, chinese: '读过！这首诗表达了作者对故乡的思念，很感人。', pinyin: 'Dú guò! Zhè shǒu shī biǎodá le zuòzhě duì gùxiāng de sīniàn, hěn gǎnrén.', vietnamese: 'Đọc rồi! Bài thơ này thể hiện nỗi nhớ quê hương của tác giả, rất cảm động.' },
          { speaker: 0, chinese: '阅读文学作品可以提高语言能力，你认为呢？', pinyin: 'Yuèdú wénxué zuòpǐn kěyǐ tígāo yǔyán nénglì, nǐ rènwéi ne?', vietnamese: 'Đọc tác phẩm văn học có thể nâng cao năng lực ngôn ngữ, bạn nghĩ sao?' },
          { speaker: 1, chinese: '完全同意！每一部名著都有其深刻的内涵。', pinyin: 'Wánquán tóngyì! Měi yī bù míngzhù dōu yǒu qí shēnkè de nèihán.', vietnamese: 'Hoàn toàn đồng ý! Mỗi tác phẩm kinh điển đều có nội hàm sâu sắc riêng.' },
          { speaker: 0, chinese: '下次我们讨论《西游记》，好吗？', pinyin: 'Xià cì wǒmen tǎolùn 《Xīyóujì》, hǎo ma?', vietnamese: 'Lần sau chúng ta thảo luận về "Tây Du Ký", được không?' }
        ]
      },
      {
        title: 'Bàn về nhà văn hiện đại', characters: ['Minh Anh', 'Khánh'],
        lines: [
          { speaker: 0, chinese: '除了古典文学，你还会看现代小说吗？', pinyin: 'Chú le gǔdiǎn wénxué, nǐ hái huì kàn xiàndài xiǎoshuō ma?', vietnamese: 'Ngoài văn học cổ điển ra, bạn có đọc cả tiểu thuyết hiện đại không?' },
          { speaker: 1, chinese: '当然，我很喜欢鲁迅先生的文章，虽然有点难懂。', pinyin: 'Dāngrán, wǒ hěn xǐhuān Lǔ Xùn xiānshēng de wénzhāng, suīrán yǒudiǎn nán dǒng.', vietnamese: 'Đương nhiên, tôi rất thích bài viết của Lỗ Tấn tiên sinh, tuy rằng hơi khó hiểu.' },
          { speaker: 0, chinese: '《阿Q正传》是一部非常经典的现代小说。', pinyin: '《Ā Q zhèngzhuàn》 shì yí bù fēicháng jīngdiǎn de xiàndài xiǎoshuō.', vietnamese: '"AQ chính truyện" là một bộ tiểu thuyết hiện đại vô cùng kinh điển.' },
          { speaker: 1, chinese: '是的，我觉得它反映了很多当时的社会问题。', pinyin: 'Shì de, wǒ juéde tā fǎnyìng le hěn duō dāngshí de shèhuì wèntí.', vietnamese: 'Đúng vậy, tôi thấy nó phản ánh được rất nhiều vấn đề thời đại lúc bấy giờ.' },
          { speaker: 0, chinese: '现代诗歌你读过吗？徐志摩的诗很美。', pinyin: 'Xiàndài shīgē nǐ dú guò ma? Xú Zhìmó de shī hěn měi.', vietnamese: 'Thơ hiện đại cậu từng đọc qua chưa? Thơ của Từ Chí Ma rất đẹp.' },
          { speaker: 1, chinese: '读过一些，《再别康桥》我都能背下来了。', pinyin: 'Dú guò yìxiē, 《Zài bié Kāngqiáo》 wǒ dōu néng bèi xiàlái le.', vietnamese: 'Tớ có đọc chút ít, bài "Tạm biệt Khang Kiều" tớ thuộc lòng luôn rồi.' }
        ]
      },
      {
        title: 'Trao đổi sở thích', characters: ['Thư', 'Đức'],
        lines: [
          { speaker: 0, chinese: '比起看书，我更喜欢听有声小说。', pinyin: 'Bǐ qǐ kàn shū, wǒ gèng xǐhuān tīng yǒushēng xiǎoshuō.', vietnamese: 'So với đọc sách, tớ thích nghe truyện audio hơn.' },
          { speaker: 1, chinese: '是吗？听有声小说确实可以在路上打发时间。', pinyin: 'Shì ma? Tīng yǒushēng xiǎoshuō quèshí kěyǐ zài lù shang dǎfā shíjiān.', vietnamese: 'Thế á? Nghe truyện audio đúng là có thể để giết thời gian trong lúc đi đường.' },
          { speaker: 0, chinese: '而且有些主播的声音很好听，感觉很真实。', pinyin: 'Érqiě yǒuxiē zhǔbō de shēngyīn hěn hǎo tīng, gǎnjué hěn zhēnshí.', vietnamese: 'Hơn nữa giọng của một số phát thanh viên còn rất hay, cảm giác sống động.' },
          { speaker: 1, chinese: '那你可以推荐几个你觉得不错的节目给我吗？', pinyin: 'Nà nǐ kěyǐ tuījiàn jǐ gè nǐ juéde búcuò de jiémù gěi wǒ ma?', vietnamese: 'Vậy cậu có thể giới thiệu vài chương trình ổn áp xíu cho mình không?' },
          { speaker: 0, chinese: '没问题，我等会儿把链接发给你。', pinyin: 'Méi wèntí, wǒ děng huìr bǎ liànjiē fā gěi nǐ.', vietnamese: 'Chuyện nhỏ, đợi lát tớ gửi đường link cho nha.' },
          { speaker: 1, chinese: '太谢谢了！以后我们又多了一个可以聊天的话题。', pinyin: 'Tài xièxie le! Yǐhòu wǒmen yòu duō le yí gè kěyǐ liáotiān de huàtí.', vietnamese: 'Đa tạ nha! Về sau mình lại kiếm thêm được chủ đề để buôn chuyện rồi.' }
        ]
      }
    ],

    /* L48 – Vấn đề xã hội */
    L48: [
      {
        title: 'Thảo luận vấn đề xã hội', characters: ['Bình', 'An'],
        lines: [
          { speaker: 0, chinese: '城市化带来了很多问题，你有什么看法？', pinyin: 'Chéngshìhuà dài lái le hěn duō wèntí, nǐ yǒu shénme kànfǎ?', vietnamese: 'Đô thị hóa mang lại rất nhiều vấn đề, bạn có ý kiến gì?' },
          { speaker: 1, chinese: '贫富差距是一个全球性问题，需要重视。', pinyin: 'Pínfù chājù shì yī gè quánqiúxìng wèntí, xūyào zhòngshì.', vietnamese: 'Khoảng cách giàu nghèo là một vấn đề toàn cầu, cần được quan tâm.' },
          { speaker: 0, chinese: '老龄化社会对国家也是个挑战，你同意吗？', pinyin: 'Lǎolínghuà shèhuì duì guójiā yě shì gè tiǎozhàn, nǐ tóngyì ma?', vietnamese: 'Xã hội già hóa cũng là một thách thức với đất nước, bạn đồng ý không?' },
          { speaker: 1, chinese: '同意。教育是解决很多问题的关键！', pinyin: 'Tóngyì. Jiàoyù shì jiějué hěn duō wèntí de guānjiàn!', vietnamese: 'Đồng ý. Giáo dục là chìa khóa để giải quyết nhiều vấn đề!' },
          { speaker: 0, chinese: '我们需要关注弱势群体，这是责任。', pinyin: 'Wǒmen xūyào guānzhù ruòshì qúntǐ, zhè shì zérèn.', vietnamese: 'Chúng ta cần quan tâm đến các nhóm yếu thế, đây là trách nhiệm.' },
          { speaker: 1, chinese: '社会问题需要大家共同解决，不是一个人的事。', pinyin: 'Shèhuì wèntí xūyào dàjiā gòngtóng jiějué, bù shì yī gè rén de shì.', vietnamese: 'Các vấn đề xã hội cần mọi người cùng nhau giải quyết, không phải việc của một người.' },
          { speaker: 0, chinese: '说得对！政府和公民要共同努力才行。', pinyin: 'Shuō de duì! Zhèngfǔ hé gōngmín yào gòngtóng nǔlì cái xíng.', vietnamese: 'Nói đúng lắm! Chính phủ và công dân phải cùng nhau nỗ lực mới được.' }
        ]
      },
      {
        title: 'Già hóa dân số', characters: ['Cường', 'Vinh'],
        lines: [
          { speaker: 0, chinese: '现在年轻人生孩子的越来越少了，你发现了吗？', pinyin: 'Xiànzài niánqīng rén shēng háizi de yuè lái yuè shǎo le, nǐ fāxiàn le ma?', vietnamese: 'Bây giờ giới trẻ sinh con ngày càng ít đi, cậu có phát hiện ra không?' },
          { speaker: 1, chinese: '是啊，因为生活成本太高了，大家压力都很大。', pinyin: 'Shì a, yīnwèi shēnghuó chéngběn tài gāo le, dàjiā yālì dōu hěn dà.', vietnamese: 'Ừ, bởi vì chi phí sinh hoạt cao quá, áp lực của ai cũng lớn cả.' },
          { speaker: 0, chinese: '这对未来的社会有什么影响呢？', pinyin: 'Zhè duì wèilái de shèhuì yǒu shénme yǐngxiǎng ne?', vietnamese: 'Điều này thì có ảnh hưởng gì tới xã hội tương lai không?' },
          { speaker: 1, chinese: '会导致劳动力不足，而且老年人需要更多照顾。', pinyin: 'Huì dǎozhì láodònglì bùzú, érqiě lǎonián rén xūyào gèng duō zhàogù.', vietnamese: 'Sẽ dẫn đến thiếu hụt lao động, hơn nữa người lớn tuổi cần được chăm sóc thêm.' },
          { speaker: 0, chinese: '所以国家出台了很多鼓励生育的政策。', pinyin: 'Suǒyǐ guójiā chūtái le hěn duō gǔlì shēngyù de zhèngcè.', vietnamese: 'Thế nên nhà nước đã ban hành ra rất nhiều chính sách để khuyến khích sinh nở.' },
          { speaker: 1, chinese: '希望这些政策能起到一定的作用吧。', pinyin: 'Xīwàng zhèxiē zhèngcè néng qǐ dào yídìng de zuòyòng ba.', vietnamese: 'Mong sao dăm ba cái chính sách này sẽ phát huy được đôi phần tác dụng.' }
        ]
      },
      {
        title: 'Bảo vệ môi trường', characters: ['Lan', 'Hương'],
        lines: [
          { speaker: 0, chinese: '这几天的空气污染太严重了，出门必须戴口罩。', pinyin: 'Zhè jǐ tiān de kōngqì wūrǎn tài yánzhòng le, chūmén bìxū dài kǒuzhào.', vietnamese: 'Khí trời ô nhiễm nặng mấy ngày nay rồi, hễ ra đường là phải đeo khẩu trang.' },
          { speaker: 1, chinese: '主要是工厂排放的废气和汽车尾气太多。', pinyin: 'Zhǔyào shì gōngchǎng páifàng de fèiqì hé qìchē wěiqì tài duō.', vietnamese: 'Chủ yếu là vì khí thải nhả từ nhà máy với xe cộ quá ư là nhiều.' },
          { speaker: 0, chinese: '我们普通人能做些什么呢？', pinyin: 'Wǒmen pǔtōng rén néng zuò xiē shénme ne?', vietnamese: 'Dân đen tụi mình thì kham được việc gì?' },
          { speaker: 1, chinese: '尽量多坐公交地铁，少开私家车。', pinyin: 'Jìnliàng duō zuò gōngjiāo dìtiě, shǎo kāi sījiāchē.', vietnamese: 'Thay vào đó gắng đi buýt và tàu điện ngầm nhiều vô, bỏ chạy xe riêng.' },
          { speaker: 0, chinese: '还有就是要做好垃圾分类，保护环境。', pinyin: 'Háiyǒu jiù shì yào zuò hǎo lājī fēnlèi, bǎohù huánjìng.', vietnamese: 'Mặt khác phải chú trọng bước phân loại rác, bảo vệ cho bầu thiên nhiên.' },
          { speaker: 1, chinese: '对，保护环境从一点一滴的小事做起。', pinyin: 'Duì, bǎohù huánjìng cóng yì diǎn yì dī de xiǎoshì zuò qǐ.', vietnamese: 'Phải đó, chung tay bảo vệ môi sinh bắt đầu bằng những việc be bé tí hin.' }
        ]
      }
    ],

    /* L49 – Tốt nghiệp và sự nghiệp */
    L49: [
      {
        title: 'Phỏng vấn xin việc', characters: ['Người phỏng vấn', 'Ứng viên'],
        lines: [
          { speaker: 0, chinese: '请介绍一下自己。你打算毕业后做什么？', pinyin: 'Qǐng jièshào yíxià zìjǐ. Nǐ dǎsuàn bìyè hòu zuò shénme?', vietnamese: 'Hãy tự giới thiệu bản thân. Bạn dự định sau khi tốt nghiệp sẽ làm gì?' },
          { speaker: 1, chinese: '我学经济，想找一份和专业相关的工作。', pinyin: 'Wǒ xué jīngjì, xiǎng zhǎo yífèn hé zhuānyè xiāngguān de gōngzuò.', vietnamese: 'Tôi học kinh tế, muốn tìm một công việc liên quan đến chuyên ngành.' },
          { speaker: 0, chinese: '求职面试需要做好充分准备，你准备了吗？', pinyin: 'Qiúzhí miànshì xūyào zuò hǎo chōngfèn zhǔnbèi, nǐ zhǔnbèi le ma?', vietnamese: 'Phỏng vấn xin việc cần đi đôi sự chuẩn bị kỹ lưỡng, bạn đã lo liệu chưa?' },
          { speaker: 1, chinese: '我研究过贵公司，也准备了可能被问到的问题。', pinyin: 'Wǒ yánjiū guò guì gōngsī, yě zhǔnbèi le kěnéng bèi wèn dào de wèntí.', vietnamese: 'Hạ mình đã tìm tòi qua quý bộ, tất nhiên cũng soạn sẵn kha khá câu hỏi bị bắt bẻ.' },
          { speaker: 0, chinese: '那你以前有没有相关的实习经验？', pinyin: 'Nà nǐ yǐqián yǒu méiyǒu xiāngguān de shíxí jīngyàn?', vietnamese: 'Vậy rốt trước kia bạn từng có qua tí kinh nghiệm đi thực tập dính líu tới chưa?' },
          { speaker: 1, chinese: '有！我在一家外企实习过整整六个月。', pinyin: 'Yǒu! Wǒ zài yìjiā wàiqǐ shíxí guò zhěngzhěng liù gè yuè.', vietnamese: 'Vâng tôi có! Tôi từng công tác thực tập đúng tròn tày sáu tháng ở công ty nước ngoài.' },
          { speaker: 0, chinese: '很好，做好职业规划对未来的发展很有帮助。', pinyin: 'Hěn hǎo, zuò hǎo zhíyè guīhuà duì wèilái de fāzhǎn hěn yǒu bāngzhù.', vietnamese: 'Hay lắm, chuyện bày binh bố trận lộ trình rất đắc lực cho sự phát triển mai sau.' }
        ]
      },
      {
        title: 'Bàn về định hướng', characters: ['Tuấn', 'Khang'],
        lines: [
          { speaker: 0, chinese: '马上就要毕业了，你找到合适的工作了吗？', pinyin: 'Mǎshàng jiù yào bìyè le, nǐ zhǎo dào héshì de gōngzuò le ma?', vietnamese: 'Tới hồi tốt nghiệp liền nơi rồi, cậu xin vào được đâu phù hợp chưa?' },
          { speaker: 1, chinese: '还没呢，我打算先休息一个月，再慢慢找。', pinyin: 'Hái méi ne, wǒ dǎsuàn xiān xiūxi yí gè yuè, zài mànman zhǎo.', vietnamese: 'Tớ chả kiếm ra, tớ định dưỡng sức trong một tháng rồi sau lững thững hẵng tìm.' },
          { speaker: 0, chinese: '可是晚一点的话，好工作可能就被别人抢光了。', pinyin: 'Kěshì wǎn yìdiǎn de huà, hǎo gōngzuò kěnéng jiù bèi biérén qiǎng guāng le.', vietnamese: 'Thế nhưng lỡ mà sẩy tay muộn nhịp, việc thơm bị người ta hớt tay trên sạch sành sanh cho coi.' },
          { speaker: 1, chinese: '我也担心，但我不想匆忙做一个错误的决定。', pinyin: 'Wǒ yě dānxīn, dàn wǒ bù xiǎng cōngmáng zuò yí gè cuòwù de juédìng.', vietnamese: 'Thấy đó tớ đực mặt lo âu, khổ nỗi chả muốn quýt làm ba chóp xén đứt một quyết định sai lầm.' },
          { speaker: 0, chinese: '也是，毕竟第一份工作对职业生涯很重要。', pinyin: 'Yě shì, bìjìng dì yī fèn gōngzuò duì zhíyè shēngyá hěn zhòngyào.', vietnamese: 'Cũng đúng, âu tới cùng việc làm khởi điểm vô cùng thiết yếu cho cả cái kiếp làm thuê.' },
          { speaker: 1, chinese: '对啊，顺其自然吧，我相信总会找到的。', pinyin: 'Duì a, shùn qí zìrán ba, wǒ xiāngxìn zǒng huì zhǎo dào de.', vietnamese: 'Hẳn phải vậy rồi, để tự theo duyên thôi, tớ đinh ninh nhất định vớ được.' }
        ]
      },
      {
        title: 'Học lên cao', characters: ['Vy', 'My'],
        lines: [
          { speaker: 0, chinese: '毕业后你是直接工作，还是考研究生？', pinyin: 'Bìyè hòu nǐ shì zhíjiē gōngzuò, háishì kǎo yánjiūshēng?', vietnamese: 'Tốt nghiệp ra ngoài làm luôn hay là thi tuyển cho rạch mặt cái thạc sĩ?' },
          { speaker: 1, chinese: '我已经在准备考研了，我想继续深造。', pinyin: 'Wǒ yǐjīng zài zhǔnbèi kǎoyán le, wǒ xiǎng jìxù shēnzào.', vietnamese: 'Tớ đã sửa soạn để thi nghiên cứu sinh cả rồi, tớ muốn học đào sâu nối tiếp vào.' },
          { speaker: 0, chinese: '考研压力很大吧？我看你每天都在复习。', pinyin: 'Kǎoyán yālì hěn dà ba? Wǒ kàn nǐ měitiān dōu zài fùxí.', vietnamese: 'Kì thi cao học áp lực nặng nề chứ? Tớ rõ cậu hôm nào cũng ở đây ôn ôn vẹt vẹt.' },
          { speaker: 1, chinese: '有时候确实觉得挺累的，但为了梦想值得。', pinyin: 'Yǒushíhou quèshí juéde tǐng lèi de, dàn wèile mèngxiǎng zhídé.', vietnamese: 'Thực sầu cũng có phút mệt rã rời tay, nhưng vì ngọn cỏ ước mơ thì cũng đáng là lạ.' },
          { speaker: 0, chinese: '我很佩服你的毅力，祝你顺利考上！', pinyin: 'Wǒ hěn pèifú nǐ de yìlì, zhù nǐ shùnlì kǎo shàng!', vietnamese: 'Phải ngả mủ thán phục nghị lực của cậu, chúc điềm nhiên đắc cử đậu vớt chóa nha!' },
          { speaker: 1, chinese: '借你吉言，如果我们都能如愿就好了。', pinyin: 'Jiè nǐ jíyán, rúguǒ wǒmen dōu néng rúyuàn jiù hǎo le.', vietnamese: 'Được lời như cởi tấm lòng, ngộ lỡ hai ta cùng như ước nguyện thì tuyệt vời ông mặt trời.' }
        ]
      }
    ],

    /* L50 – Ước mơ và lý tưởng */
    L50: [
      {
        title: 'Chia sẻ ước mơ', characters: ['Cảnh', 'Nhiên'],
        lines: [
          { speaker: 0, chinese: '你的梦想是什么？', pinyin: 'Nǐ de mèngxiǎng shì shénme?', vietnamese: 'Ước mơ của bạn là gì?' },
          { speaker: 1, chinese: '我的梦想是成为一名翻译家，沟通中越文化。', pinyin: 'Wǒ de mèngxiǎng shì chéngwéi yì míng fānyìjiā, gōutōng Zhōng Yuè wénhuà.', vietnamese: 'Ước mơ của tôi là trở thành phiên dịch viên, kết nối văn hóa Trung-Việt.' },
          { speaker: 0, chinese: '太棒了！努力就能实现梦想，加油！', pinyin: 'Tài bàng le! Nǔlì jiù néng shíxiàn mèngxiǎng, jiāyóu!', vietnamese: 'Tuyệt vời! Nỗ lực sẽ giúp hiện thực hóa ước mơ, cố lên!' },
          { speaker: 1, chinese: '谢谢你！你的梦想是什么？', pinyin: 'Xièxie nǐ! Nǐ de mèngxiǎng shì shénme?', vietnamese: 'Cảm ơn nhé! Ước mơ của bạn là gì?' },
          { speaker: 0, chinese: '我的梦想是做一名优秀的教师，教书育人。', pinyin: 'Wǒ de mèngxiǎng shì zuò yì míng yōuxiù de jiàoshī, jiāoshū yùrén.', vietnamese: 'Ước mơ của tôi là làm một giáo viên xuất sắc, dạy học và nuôi dưỡng con người.' },
          { speaker: 1, chinese: '那我们互相加油，共同实现美好的梦想吧！', pinyin: 'Nà wǒmen hùxiāng jiāyóu, gòngtóng shíxiàn měihǎo de mèngxiǎng ba!', vietnamese: 'Thế thì chúng ta cùng cố lên, cùng nhau thực hiện ước mơ tươi đẹp nhé!' }
        ]
      },
      {
        title: 'Lý tưởng sống', characters: ['Hoa', 'Trung'],
        lines: [
          { speaker: 0, chinese: '除了工作，你觉得生活中什么最重要？', pinyin: 'Chú le gōngzuò, nǐ juéde shēnghuó zhōng shénme zuì zhòngyào?', vietnamese: 'Ngoài công việc ra, bạn thấy trong cuộc sống điều gì quan trọng nhất?' },
          { speaker: 1, chinese: '我觉得健康和家庭最重要，这是人生基础。', pinyin: 'Wǒ juéde jiànkāng hé jiātíng zuì zhòngyào, zhè shì rénshēng jīchǔ.', vietnamese: 'Tôi thấy sức khoẻ và gia đình là quan trọng nhất, đây là học phần cơ bản của đời người.' },
          { speaker: 0, chinese: '没错。那你有自己追求的理想吗？', pinyin: 'Méi cuò. Nà nǐ yǒu zìjǐ zhuīqiú de lǐxiǎng ma?', vietnamese: 'Chính xác! Vậy bạn có một lý tưởng muốn theo đuổi không?' },
          { speaker: 1, chinese: '我的理想是环游世界，体验不同的风土人情。', pinyin: 'Wǒ de lǐxiǎng shì huányóu shìjiè, tǐyàn bùtóng de fēngtǔ rénqíng.', vietnamese: 'Lý tưởng của tôi là du lãm vòng quanh thế giới, trải nghiệm nhiều phong thủ nhân tình khác nhau.' },
          { speaker: 0, chinese: '这个想法太浪漫了，但也需要很多钱啊。', pinyin: 'Zhège xiǎngfǎ tài làngmàn le, dàn yě xūyào hěn duō qián a.', vietnamese: 'Tư tưởng này lãng mạn quá, có điều kham khoản này tốn khá nhiều tiền.' },
          { speaker: 1, chinese: '是啊，所以我现在正在拼命赚钱，为了理想奋斗。', pinyin: 'Shì a, suǒyǐ wǒ xiànzài zhèngzài pīnmìng zhuànqián, wèile lǐxiǎng fèndòu.', vietnamese: 'Đúng vậy nha, thế nên chừ tôi mới cắm đầu tranh đoạt kiếm tiền, ráng phấn đấu vì lý tưởng.' }
        ]
      },
      {
        title: 'Khởi nghiệp', characters: ['Hoàng', 'Tâm'],
        lines: [
          { speaker: 0, chinese: '听说你想自己开一家咖啡店，是真的吗？', pinyin: 'Tīngshuō nǐ xiǎng zìjǐ kāi yì jiā kāfēidiàn, shì zhēn de ma?', vietnamese: 'Nghe nói em muốn tự mình mở tiệm cà phê, thật đó chứ?' },
          { speaker: 1, chinese: '是的，我一直很喜欢咖啡文化，想拥有一间自己的店。', pinyin: 'Shì de, wǒ yìzhí hěn xǐhuān kāfēi wénhuà, xiǎng yōngyǒu yì jiān zìjǐ de diàn.', vietnamese: 'Là thật anh, xưa rày em luôn dấn thân vô văn hóa cà phê, cũng mong thầu lấy một cửa hàng riêng.' },
          { speaker: 0, chinese: '创业很辛苦，你做好心理准备了吗？', pinyin: 'Chuàngyè hěn xīnqǔ, nǐ zuò hǎo xīnlǐ zhǔnbèi le ma?', vietnamese: 'Đưa tay ra rước lấy khởi nghiệp mệt mỏi trần ai, em đã lót sẵn tâm lý chưa?' },
          { speaker: 1, chinese: '我知道很难，但不去尝试一下，我会后悔的。', pinyin: 'Wǒ zhīdào hěn nán, dàn bú qù chángshì yíxià, wǒ huì hòuhuǐ de.', vietnamese: 'Em rõ mười mươi chứ, chả qua không dám xông pha thử nghiệm thì lại luyến tiếc.' },
          { speaker: 0, chinese: '有志者事竟成，如果你需要投资，可以找我。', pinyin: 'Yǒuzhìzhě shì jìng chéng, rúguǒ nǐ xūyào tóuzī, kěyǐ zhǎo wǒ.', vietnamese: 'Có chí ắt làm nên, sau này ví phỏng cần vốn đầu tư thì em biết tìm ai rồi đó.' },
          { speaker: 1, chinese: '太感谢了！有你的支持，我更有信心了。', pinyin: 'Tài gǎnxiè le! Yǒu nǐ de zhīchí, wǒ gèng yǒu xìnxīn le.', vietnamese: 'Vô cùng cảm tạ! Kế đó có anh hậu thuẫn, em đâm tự tin ngút ngàn.' }
        ]
      }
    ]
  };

  /* ============================================================
     INJECT – Gắn dialogue vào LESSONS_DATA.shadowing
     ============================================================ */
  const allDialogues = Object.assign({}, dialoguesHSK1, dialoguesHSK2, dialoguesHSK3);

  if (typeof LESSONS_DATA !== 'undefined' && LESSONS_DATA.shadowing) {
    LESSONS_DATA.shadowing.forEach(function (lesson) {
      if (allDialogues[lesson.id]) {
        if (Array.isArray(allDialogues[lesson.id])) {
          lesson.dialogues = allDialogues[lesson.id];
        } else {
          lesson.dialogue = allDialogues[lesson.id];
        }
      }
    });
    console.log('[Dialogues] Injected', Object.keys(allDialogues).length, 'dialogues into LESSONS_DATA');
  } else {
    console.warn('[Dialogues] LESSONS_DATA not found – dialogues will load later...');
    // Retry after a short delay in case scripts load out of order
    setTimeout(function () {
      if (typeof LESSONS_DATA !== 'undefined' && LESSONS_DATA.shadowing) {
        LESSONS_DATA.shadowing.forEach(function (lesson) {
          if (allDialogues[lesson.id]) {
            if (Array.isArray(allDialogues[lesson.id])) {
              lesson.dialogues = allDialogues[lesson.id];
            } else {
              lesson.dialogue = allDialogues[lesson.id];
            }
          }
        });
        console.log('[Dialogues] Injected (retry)', Object.keys(allDialogues).length, 'dialogues');
      }
    }, 200);
  }
})();
