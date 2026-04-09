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
    L01: {
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

    /* L02 – Tên và danh tính */
    L02: {
      title: 'Tự giới thiệu bản thân', characters: ['An', 'Hoa'],
      lines: [
        { speaker: 0, chinese: '你好！我叫陈安。', pinyin: 'Nǐ hǎo! Wǒ jiào Chén Ān.', vietnamese: 'Xin chào! Tôi tên là Trần An.' },
        { speaker: 1, chinese: '你好！我是王花。你是哪国人？', pinyin: 'Nǐ hǎo! Wǒ shì Wáng Huā. Nǐ shì nǎ guó rén?', vietnamese: 'Xin chào! Tôi là Vương Hoa. Bạn là người nước nào?' },
        { speaker: 0, chinese: '我是越南人。你呢？', pinyin: 'Wǒ shì Yuènán rén. Nǐ ne?', vietnamese: 'Tôi là người Việt Nam. Còn bạn?' },
        { speaker: 1, chinese: '我是中国人。这是我的名片。', pinyin: 'Wǒ shì Zhōngguó rén. Zhè shì wǒ de míngpiàn.', vietnamese: 'Tôi là người Trung Quốc. Đây là danh thiếp của tôi.' },
        { speaker: 0, chinese: '谢谢！这是我的名片。', pinyin: 'Xièxie! Zhè shì wǒ de míngpiàn.', vietnamese: 'Cảm ơn! Đây là danh thiếp của tôi.' },
        { speaker: 1, chinese: '很高兴认识你，陈先生！', pinyin: 'Hěn gāoxìng rènshi nǐ, Chén xiānsheng!', vietnamese: 'Rất vui được gặp bạn, anh Trần!' },
        { speaker: 0, chinese: '我也是！请多关照！', pinyin: 'Wǒ yě shì! Qǐng duō guānzhào!', vietnamese: 'Tôi cũng vậy! Mong được chỉ bảo nhiều!' }
      ]
    },

    /* L03 – Gia đình */
    L03: {
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

    /* L04 – Số và ngày tháng */
    L04: {
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

    /* L05 – Thời gian */
    L05: {
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

    /* L06 – Phòng học và trường học */
    L06: {
      title: 'Ở lớp học tiếng Trung', characters: ['Thầy Wang', 'Học sinh'],
      lines: [
        { speaker: 0, chinese: '同学们好！请坐！', pinyin: 'Tóngxuémen hǎo! Qǐng zuò!', vietnamese: 'Chào các bạn! Mời ngồi!' },
        { speaker: 1, chinese: '老师好！', pinyin: 'Lǎoshī hǎo!', vietnamese: 'Chào thầy!' },
        { speaker: 0, chinese: '今天我们学习汉语。你们是大学生吗？', pinyin: 'Jīntiān wǒmen xuéxí Hànyǔ. Nǐmen shì dàxuésheng ma?', vietnamese: 'Hôm nay chúng ta học tiếng Trung. Các bạn là sinh viên đại học không?' },
        { speaker: 1, chinese: '是的，老师。我们学什么专业？', pinyin: 'Shì de, lǎoshī. Wǒmen xué shénme zhuānyè?', vietnamese: 'Vâng, thầy. Chúng em học chuyên ngành gì ạ?' },
        { speaker: 0, chinese: '我们专业是汉语言文学。请跟我读：你好！', pinyin: 'Wǒmen zhuānyè shì Hànyǔyán wénxué. Qǐng gēn wǒ dú: Nǐ hǎo!', vietnamese: 'Chuyên ngành của chúng ta là ngôn ngữ và văn học Hán. Đọc theo tôi: Xin chào!' },
        { speaker: 1, chinese: '你好！', pinyin: 'Nǐ hǎo!', vietnamese: 'Xin chào!' },
        { speaker: 0, chinese: '很好！我听不懂请再说一遍。', pinyin: 'Hěn hǎo! Wǒ tīng bù dǒng qǐng zài shuō yī biàn.', vietnamese: 'Rất tốt! Nếu không hiểu hãy nói lại một lần.' },
        { speaker: 1, chinese: '老师，我听不懂，请再说一遍。', pinyin: 'Lǎoshī, wǒ tīng bù dǒng, qǐng zài shuō yī biàn.', vietnamese: 'Thầy ơi, em không nghe hiểu, xin nói lại một lần ạ.' }
      ]
    },

    /* L07 – Đồ vật và chỉ định */
    L07: {
      title: 'Mượn đồ dùng học tập', characters: ['Bình', 'Châu'],
      lines: [
        { speaker: 0, chinese: '这是什么？', pinyin: 'Zhè shì shénme?', vietnamese: 'Đây là cái gì?' },
        { speaker: 1, chinese: '那是我的书包。这是你的书吗？', pinyin: 'Nà shì wǒ de shūbāo. Zhè shì nǐ de shū ma?', vietnamese: 'Đó là cặp sách của tôi. Đây có phải sách của bạn không?' },
        { speaker: 0, chinese: '是的，是我的书。请问，那本书多少钱？', pinyin: 'Shì de, shì wǒ de shū. Qǐngwèn, nà běn shū duōshǎo qián?', vietnamese: 'Vâng, đó là sách của tôi. Xin hỏi, quyển sách đó bao nhiêu tiền?' },
        { speaker: 1, chinese: '那本书八十块钱。', pinyin: 'Nà běn shū bāshí kuài qián.', vietnamese: 'Quyển sách đó tám mươi tệ.' },
        { speaker: 0, chinese: '哦。你有笔吗？请给我一支笔。', pinyin: 'Ó. Nǐ yǒu bǐ ma? Qǐng gěi wǒ yī zhī bǐ.', vietnamese: 'Ồ. Bạn có bút không? Cho tôi mượn một cây bút.' },
        { speaker: 1, chinese: '有，给你。这是红笔，好吗？', pinyin: 'Yǒu, gěi nǐ. Zhè shì hóng bǐ, hǎo ma?', vietnamese: 'Có, đây. Đây là bút đỏ, được không?' },
        { speaker: 0, chinese: '谢谢，很好！', pinyin: 'Xièxie, hěn hǎo!', vietnamese: 'Cảm ơn, tốt lắm!' }
      ]
    },

    /* L08 – Thức ăn và đồ uống */
    L08: {
      title: 'Ở nhà hàng', characters: ['Khách', 'Phục vụ'],
      lines: [
        { speaker: 0, chinese: '你好！你想吃什么？', pinyin: 'Nǐ hǎo! Nǐ xiǎng chī shénme?', vietnamese: 'Xin chào! Bạn muốn ăn gì?' },
        { speaker: 1, chinese: '我想吃米饭和炒菜。有什么推荐？', pinyin: 'Wǒ xiǎng chī mǐfàn hé chǎocài. Yǒu shénme tuījiàn?', vietnamese: 'Tôi muốn ăn cơm và rau xào. Có gì hay không?' },
        { speaker: 0, chinese: '我们的红烧肉很好吃！', pinyin: 'Wǒmen de hóngshāo ròu hěn hǎochī!', vietnamese: 'Thịt kho tàu của chúng tôi rất ngon!' },
        { speaker: 1, chinese: '好！要一份红烧肉。还有，我要喝茶。', pinyin: 'Hǎo! Yào yī fèn hóngshāo ròu. Hái yǒu, wǒ yào hē chá.', vietnamese: 'Được! Cho tôi một phần thịt kho tàu. Và tôi muốn uống trà.' },
        { speaker: 0, chinese: '好的。这个辣吗？你吃辣吗？', pinyin: 'Hǎo de. Zhège là ma? Nǐ chī là ma?', vietnamese: 'Được rồi. Cái này cay không? Bạn ăn được cay không?' },
        { speaker: 1, chinese: '我不太喜欢吃辣。有不辣的吗？', pinyin: 'Wǒ bù tài xǐhuān chī là. Yǒu bù là de ma?', vietnamese: 'Tôi không thích ăn cay lắm. Có món không cay không?' },
        { speaker: 0, chinese: '有！清蒸鱼不辣，好吃极了！', pinyin: 'Yǒu! Qīngzhēng yú bù là, hǎochī jí le!', vietnamese: 'Có! Cá hấp không cay, ngon tuyệt!' },
        { speaker: 1, chinese: '好，再加一份清蒸鱼。谢谢！', pinyin: 'Hǎo, zài jiā yī fèn qīngzhēng yú. Xièxie!', vietnamese: 'Được, thêm một phần cá hấp. Cảm ơn!' }
      ]
    },

    /* L09 – Nơi chốn và vị trí */
    L09: {
      title: 'Hỏi đường đến trường', characters: ['Sinh', 'Người dân'],
      lines: [
        { speaker: 0, chinese: '您好！请问学校在哪里？', pinyin: 'Nín hǎo! Qǐngwèn xuéxiào zài nǎlǐ?', vietnamese: 'Xin chào! Xin hỏi trường học ở đâu ạ?' },
        { speaker: 1, chinese: '哪个学校？北京大学吗？', pinyin: 'Nǎ gè xuéxiào? Běijīng Dàxué ma?', vietnamese: 'Trường nào vậy? Đại học Bắc Kinh à?' },
        { speaker: 0, chinese: '不是，是北京语言大学。', pinyin: 'Bù shì, shì Běijīng Yǔyán Dàxué.', vietnamese: 'Không phải, là Đại học Ngôn ngữ Bắc Kinh.' },
        { speaker: 1, chinese: '哦！学校在银行旁边，很近。你在哪里？', pinyin: 'Ó! Xuéxiào zài yínháng pángbiān, hěn jìn. Nǐ zài nǎlǐ?', vietnamese: 'Ồ! Trường ở cạnh ngân hàng, rất gần. Bạn đang ở đâu?' },
        { speaker: 0, chinese: '我在书在桌子上面旁边的咖啡馆。', pinyin: 'Wǒ zài shū zài zhuōzi shàngmiàn pángbiān de kāfēiguǎn.', vietnamese: 'Tôi đang ở quán cà phê cạnh đây.' },
        { speaker: 1, chinese: '那很近！走路五分钟就到了。', pinyin: 'Nà hěn jìn! Zǒulù wǔ fēnzhōng jiù dào le.', vietnamese: 'Thế thì rất gần! Đi bộ năm phút là đến.' },
        { speaker: 0, chinese: '谢谢您！还有，厕所在哪里？', pinyin: 'Xièxie nín! Hái yǒu, cèsuǒ zài nǎlǐ?', vietnamese: 'Cảm ơn bạn! À, nhà vệ sinh ở đâu?' },
        { speaker: 1, chinese: '在那边，向右走。', pinyin: 'Zài nàbiān, xiàng yòu zǒu.', vietnamese: 'Ở đằng kia, đi về bên phải.' }
      ]
    },

    /* L10 – Hỏi thăm sức khỏe */
    L10: {
      title: 'Đi khám bác sĩ', characters: ['Bác sĩ', 'Bệnh nhân'],
      lines: [
        { speaker: 0, chinese: '你好，你怎么了？哪里不舒服？', pinyin: 'Nǐ hǎo, nǐ zěnme le? Nǎlǐ bù shūfu?', vietnamese: 'Xin chào, bạn làm sao vậy? Chỗ nào không khỏe?' },
        { speaker: 1, chinese: '医生，我不舒服。我头疼，发烧。', pinyin: 'Yīshēng, wǒ bù shūfu. Wǒ tóuténg, fāshāo.', vietnamese: 'Bác sĩ, tôi không khỏe. Tôi đau đầu, sốt.' },
        { speaker: 0, chinese: '你发烧几度了？昨天就开始了吗？', pinyin: 'Nǐ fāshāo jǐ dù le? Zuótiān jiù kāishǐ le ma?', vietnamese: 'Bạn sốt bao nhiêu độ? Bắt đầu từ hôm qua à?' },
        { speaker: 1, chinese: '三十八度半。是的，昨天晚上开始的。', pinyin: 'Sānshíbā dù bàn. Shì de, zuótiān wǎnshang kāishǐ de.', vietnamese: 'Ba mươi tám độ rưỡi. Vâng, bắt đầu từ tối hôm qua.' },
        { speaker: 0, chinese: '你去看医生了吗？你需要多休息。', pinyin: 'Nǐ qù kàn yīshēng le ma? Nǐ xūyào duō xiūxi.', vietnamese: 'Bạn có đi khám chưa? Bạn cần nghỉ ngơi nhiều.' },
        { speaker: 1, chinese: '没有，今天才来。我好多了吗？', pinyin: 'Méiyǒu, jīntiān cái lái. Wǒ hǎo duō le ma?', vietnamese: 'Chưa, hôm nay mới đến. Tôi đã khỏe hơn chưa ạ?' },
        { speaker: 0, chinese: '需要休息，多喝水，我给你开药。', pinyin: 'Xūyào xiūxi, duō hē shuǐ, wǒ gěi nǐ kāi yào.', vietnamese: 'Cần nghỉ ngơi, uống nhiều nước, tôi sẽ kê thuốc cho bạn.' }
      ]
    },

    /* L11 – Thời tiết */
    L11: {
      title: 'Nói chuyện về thời tiết', characters: ['Hùng', 'Thúy'],
      lines: [
        { speaker: 0, chinese: '今天天气怎么样？', pinyin: 'Jīntiān tiānqì zěnmeyàng?', vietnamese: 'Hôm nay thời tiết thế nào?' },
        { speaker: 1, chinese: '今天很热！三十五度！外面在下雨。', pinyin: 'Jīntiān hěn rè! Sānshíwǔ dù! Wàimiàn zài xià yǔ.', vietnamese: 'Hôm nay rất nóng! Ba mươi lăm độ! Bên ngoài đang mưa.' },
        { speaker: 0, chinese: '哎，夏天太热了。明天天气好一点吗？', pinyin: 'Āi, xiàtiān tài rè le. Míngtiān tiānqì hǎo yīdiǎn ma?', vietnamese: 'Ôi, mùa hè nóng quá. Ngày mai thời tiết có tốt hơn không?' },
        { speaker: 1, chinese: '明天会下雪吗？不，是冬天才下雪。', pinyin: 'Míngtiān huì xià xuě ma? Bù, shì dōngtiān cái xià xuě.', vietnamese: 'Ngày mai có tuyết rơi không? Không, mùa đông mới có tuyết.' },
        { speaker: 0, chinese: '冬天很冷，我不喜欢冬天。', pinyin: 'Dōngtiān hěn lěng, wǒ bù xǐhuān dōngtiān.', vietnamese: 'Mùa đông rất lạnh, tôi không thích mùa đông.' },
        { speaker: 1, chinese: '我喜欢春天！春天真美！', pinyin: 'Wǒ xǐhuān chūntiān! Chūntiān zhēn měi!', vietnamese: 'Tôi thích mùa xuân! Mùa xuân thật đẹp!' },
        { speaker: 0, chinese: '对！春天不冷不热，最舒服！', pinyin: 'Duì! Chūntiān bù lěng bù rè, zuì shūfu!', vietnamese: 'Đúng vậy! Mùa xuân không lạnh không nóng, thoải mái nhất!' }
      ]
    },

    /* L12 – Sở thích và hoạt động */
    L12: {
      title: 'Khám phá sở thích nhau', characters: ['Dung', 'Trinh'],
      lines: [
        { speaker: 0, chinese: '你有什么爱好？', pinyin: 'Nǐ yǒu shénme àihào?', vietnamese: 'Bạn có sở thích gì?' },
        { speaker: 1, chinese: '我喜欢看电影和听音乐。你呢？', pinyin: 'Wǒ xǐhuān kàn diànyǐng hé tīng yīnyuè. Nǐ ne?', vietnamese: 'Tôi thích xem phim và nghe nhạc. Còn bạn?' },
        { speaker: 0, chinese: '我喜欢运动，特别是打篮球。', pinyin: 'Wǒ xǐhuān yùndòng, tèbié shì dǎ lánqiú.', vietnamese: 'Tôi thích thể thao, đặc biệt là chơi bóng rổ.' },
        { speaker: 1, chinese: '哦！我不喜欢运动。我喜欢读书。', pinyin: 'Ó! Wǒ bù xǐhuān yùndòng. Wǒ xǐhuān dú shū.', vietnamese: 'Ồ! Tôi không thích thể dục. Tôi thích đọc sách.' },
        { speaker: 0, chinese: '我也喜欢读书！我非常喜欢读书。', pinyin: 'Wǒ yě xǐhuān dú shū! Wǒ fēicháng xǐhuān dú shū.', vietnamese: 'Tôi cũng thích đọc sách! Tôi rất thích đọc sách.' },
        { speaker: 1, chinese: '太好了！周末你一般做什么？', pinyin: 'Tài hǎo le! Zhōumò nǐ yībān zuò shénme?', vietnamese: 'Thật tuyệt! Cuối tuần bạn thường làm gì?' },
        { speaker: 0, chinese: '周末我喜欢在公园跑步。你来一起吗？', pinyin: 'Zhōumò wǒ xǐhuān zài gōngyuán pǎobù. Nǐ lái yīqǐ ma?', vietnamese: 'Cuối tuần tôi thích chạy bộ ở công viên. Bạn cùng đến không?' },
        { speaker: 1, chinese: '好啊！我很高兴！', pinyin: 'Hǎo a! Wǒ hěn gāoxìng!', vietnamese: 'Được thôi! Tôi rất vui!' }
      ]
    },

    /* L13 – Mua sắm cơ bản */
    L13: {
      title: 'Mua đồ ở chợ', characters: ['Người mua', 'Người bán'],
      lines: [
        { speaker: 0, chinese: '这个多少钱？', pinyin: 'Zhège duōshǎo qián?', vietnamese: 'Cái này bao nhiêu tiền?' },
        { speaker: 1, chinese: '五十块钱一个。', pinyin: 'Wǔshí kuài qián yī gè.', vietnamese: 'Năm mươi tệ một cái.' },
        { speaker: 0, chinese: '太贵了！便宜一点可以吗？', pinyin: 'Tài guì le! Piányí yīdiǎn kěyǐ ma?', vietnamese: 'Đắt quá! Rẻ hơn một chút được không?' },
        { speaker: 1, chinese: '最低四十块。不能再便宜了。', pinyin: 'Zuì dī sìshí kuài. Bù néng zài piányí le.', vietnamese: 'Thấp nhất bốn mươi tệ. Không thể rẻ hơn nữa.' },
        { speaker: 0, chinese: '好，我要买两个。一共多少钱？', pinyin: 'Hǎo, wǒ yào mǎi liǎng gè. Yīgòng duōshǎo qián?', vietnamese: 'Được, tôi muốn mua hai cái. Tổng cộng bao nhiêu?' },
        { speaker: 1, chinese: '两个八十块钱。这里可以刷卡吗？', pinyin: 'Liǎng gè bāshí kuài qián. Zhèlǐ kěyǐ shuā kǎ ma?', vietnamese: 'Hai cái tám mươi tệ. Có thể thanh toán thẻ không?' },
        { speaker: 0, chinese: '可以！谢谢！', pinyin: 'Kěyǐ! Xièxie!', vietnamese: 'Được! Cảm ơn!' }
      ]
    },

    /* L14 – Giao thông cơ bản */
    L14: {
      title: 'Hỏi đường đi', characters: ['Du khách', 'Hướng dẫn'],
      lines: [
        { speaker: 0, chinese: '你好！我怎么去火车站？', pinyin: 'Nǐ hǎo! Wǒ zěnme qù huǒchēzhàn?', vietnamese: 'Xin chào! Tôi đi đến ga tàu bằng cách nào?' },
        { speaker: 1, chinese: '你可以坐公交车，也可以坐地铁。', pinyin: 'Nǐ kěyǐ zuò gōngjiāochē, yě kěyǐ zuò dìtiě.', vietnamese: 'Bạn có thể đi xe buýt, hoặc đi tàu điện ngầm.' },
        { speaker: 0, chinese: '哪个更快？骑自行车要多长时间？', pinyin: 'Nǎge gèng kuài? Qí zìxíngchē yào duō cháng shíjiān?', vietnamese: 'Cái nào nhanh hơn? Đi xe đạp mất bao lâu?' },
        { speaker: 1, chinese: '地铁比公交车快。骑车大约三十分钟。', pinyin: 'Dìtiě bǐ gōngjiāochē kuài. Qí chē dàyuē sānshí fēnzhōng.', vietnamese: 'Tàu điện ngầm nhanh hơn xe buýt. Đi xe đạp khoảng ba mươi phút.' },
        { speaker: 0, chinese: '我坐地铁吧。下一站是哪里？', pinyin: 'Wǒ zuò dìtiě ba. Xià yī zhàn shì nǎlǐ?', vietnamese: 'Tôi đi tàu điện ngầm. Trạm tiếp theo là đâu?' },
        { speaker: 1, chinese: '下一站是中关村站，再走三站就到了。', pinyin: 'Xià yī zhàn shì Zhōngguāncūn zhàn, zài zǒu sān zhàn jiù dào le.', vietnamese: 'Trạm tiếp theo là ga Trung Quan Thôn, đi thêm ba trạm là đến.' },
        { speaker: 0, chinese: '谢谢！你来怎么来学校？', pinyin: 'Xièxie! Nǐ lái zěnme lái xuéxiào?', vietnamese: 'Cảm ơn! Bạn đến trường bằng gì?' },
        { speaker: 1, chinese: '我骑自行车来，很方便！', pinyin: 'Wǒ qí zìxíngchē lái, hěn fāngbiàn!', vietnamese: 'Tôi đi xe đạp, rất tiện!' }
      ]
    },

    /* L15 – Gọi điện và liên lạc */
    L15: {
      title: 'Trao đổi thông tin liên lạc', characters: ['Loan', 'Hải'],
      lines: [
        { speaker: 0, chinese: '你的电话号码是多少？', pinyin: 'Nǐ de diànhuà hàomǎ shì duōshǎo?', vietnamese: 'Số điện thoại của bạn là bao nhiêu?' },
        { speaker: 1, chinese: '我的号码是138-0013-8000。你的呢？', pinyin: 'Wǒ de hàomǎ shì yāo sān bā líng líng yāo sān bā líng líng líng. Nǐ de ne?', vietnamese: 'Số của tôi là 138-0013-8000. Còn bạn?' },
        { speaker: 0, chinese: '我的是139-2580-1234。我给你打电话。', pinyin: 'Wǒ de shì yāo sān jiǔ èr wǔ bā líng yāo èr sān sì. Wǒ gěi nǐ dǎ diànhuà.', vietnamese: 'Của tôi là 139-2580-1234. Tôi sẽ gọi cho bạn.' },
        { speaker: 1, chinese: '好的！你的微信是什么？', pinyin: 'Hǎo de! Nǐ de Wēixìn shì shénme?', vietnamese: 'Được rồi! WeChat của bạn là gì?' },
        { speaker: 0, chinese: '我的微信是LoanVN。发短信给我吧。', pinyin: 'Wǒ de Wēixìn shì LoanVN. Fā duǎnxìn gěi wǒ ba.', vietnamese: 'WeChat của tôi là LoanVN. Nhắn tin cho tôi nhé.' },
        { speaker: 1, chinese: '好的。有时候没有信号，打电话吧。', pinyin: 'Hǎo de. Yǒushíhòu méiyǒu xìnhào, dǎ diànhuà ba.', vietnamese: 'Được. Đôi khi không có sóng, gọi điện nhé.' },
        { speaker: 0, chinese: '好的，再见！', pinyin: 'Hǎo de, zàijiàn!', vietnamese: 'Được rồi, tạm biệt!' }
      ]
    }
  };

  /* ============================================================
     HSK 2 – Hội thoại nâng cao hơn, ngữ pháp phức tạp hơn
     ============================================================ */
  const dialoguesHSK2 = {

    /* L16 – Nghề nghiệp */
    L16: {
      title: 'Hỏi về công việc', characters: ['Linh', 'David'],
      lines: [
        { speaker: 0, chinese: '你做什么工作？', pinyin: 'Nǐ zuò shénme gōngzuò?', vietnamese: 'Bạn làm nghề gì?' },
        { speaker: 1, chinese: '我是工程师，在一家科技公司上班。你呢？', pinyin: 'Wǒ shì gōngchéngshī, zài yī jiā kējì gōngsī shàngbān. Nǐ ne?', vietnamese: 'Tôi là kỹ sư, làm tại một công ty công nghệ. Còn bạn?' },
        { speaker: 0, chinese: '我是医生，在市医院工作。', pinyin: 'Wǒ shì yīshēng, zài shì yīyuàn gōngzuò.', vietnamese: 'Tôi là bác sĩ, làm tại bệnh viện thành phố.' },
        { speaker: 1, chinese: '哇，医生！你工作多长时间了？', pinyin: 'Wā, yīshēng! Nǐ gōngzuò duō cháng shíjiān le?', vietnamese: 'Wow, bác sĩ! Bạn đã làm việc bao lâu rồi?' },
        { speaker: 0, chinese: '我已经工作三年了。工作很忙，但我喜欢。', pinyin: 'Wǒ yǐjīng gōngzuò sān nián le. Gōngzuò hěn máng, dàn wǒ xǐhuān.', vietnamese: 'Tôi đã làm việc ba năm rồi. Công việc rất bận, nhưng tôi thích.' },
        { speaker: 1, chinese: '她是一位有名的演员，对吗？', pinyin: 'Tā shì yī wèi yǒumíng de yǎnyuán, duì ma?', vietnamese: 'Cô ấy là một diễn viên nổi tiếng, phải không?' },
        { speaker: 0, chinese: '对！她在很多电影里演过。', pinyin: 'Duì! Tā zài hěn duō diànyǐng lǐ yǎn guò.', vietnamese: 'Đúng! Cô ấy đã diễn trong nhiều bộ phim.' }
      ]
    },

    /* L17 – Hỏi đường */
    L17: {
      title: 'Đường đến thư viện', characters: ['Du học sinh', 'Người dân địa phương'],
      lines: [
        { speaker: 0, chinese: '请问，图书馆怎么走？', pinyin: 'Qǐngwèn, túshūguǎn zěnme zǒu?', vietnamese: 'Xin hỏi, đi đến thư viện như thế nào?' },
        { speaker: 1, chinese: '图书馆？一直往前走，到红绿灯往右转。', pinyin: 'Túshūguǎn? Yīzhí wǎng qián zǒu, dào hónglǜdēng wǎng yòu zhuǎn.', vietnamese: 'Thư viện à? Đi thẳng về phía trước, đến đèn giao thông rẽ phải.' },
        { speaker: 0, chinese: '大概走多长时间？', pinyin: 'Dàgài zǒu duō cháng shíjiān?', vietnamese: 'Đi khoảng bao lâu?' },
        { speaker: 1, chinese: '大概走五分钟就到了。图书馆在银行对面。', pinyin: 'Dàgài zǒu wǔ fēnzhōng jiù dào le. Túshūguǎn zài yínháng duìmiàn.', vietnamese: 'Đi khoảng năm phút là đến. Thư viện ở đối diện ngân hàng.' },
        { speaker: 0, chinese: '谢谢！我有点迷路了。', pinyin: 'Xièxie! Wǒ yǒudiǎn mílù le.', vietnamese: 'Cảm ơn! Tôi bị lạc một chút.' },
        { speaker: 1, chinese: '没关系！你迷路了吗？我送你去吧。', pinyin: 'Méiguānxi! Nǐ mílù le ma? Wǒ sòng nǐ qù ba.', vietnamese: 'Không sao! Bạn bị lạc à? Để tôi dẫn bạn đến đó.' },
        { speaker: 0, chinese: '太感谢了！你真好！', pinyin: 'Tài gǎnxiè le! Nǐ zhēn hǎo!', vietnamese: 'Cảm ơn quá! Bạn thật tốt!' }
      ]
    },

    /* L18 – Nhà ở và môi trường */
    L18: {
      title: 'Tìm nhà thuê', characters: ['Người thuê', 'Chủ nhà'],
      lines: [
        { speaker: 0, chinese: '您好！我想租房子。', pinyin: 'Nín hǎo! Wǒ xiǎng zū fángzi.', vietnamese: 'Xin chào! Tôi muốn thuê nhà.' },
        { speaker: 1, chinese: '欢迎！你住在哪里？想租什么样的房子？', pinyin: 'Huānyíng! Nǐ zhù zài nǎlǐ? Xiǎng zū shénme yàng de fángzi?', vietnamese: 'Chào mừng! Bạn đang ở đâu? Muốn thuê loại nhà gì?' },
        { speaker: 0, chinese: '我现在住在学校附近。我想租一间单人间。', pinyin: 'Wǒ xiànzài zhù zài xuéxiào fùjìn. Wǒ xiǎng zū yī jiān dānrén jiān.', vietnamese: 'Hiện tôi đang ở gần trường học. Tôi muốn thuê một phòng đơn.' },
        { speaker: 1, chinese: '我有一间房子，不大，但环境很好。', pinyin: 'Wǒ yǒu yī jiān fángzi, bù dà, dàn huánjìng hěn hǎo.', vietnamese: 'Tôi có một phòng, không rộng, nhưng môi trường rất tốt.' },
        { speaker: 0, chinese: '附近有超市吗？交通方便吗？', pinyin: 'Fùjìn yǒu chāoshì ma? Jiāotōng fāngbiàn ma?', vietnamese: 'Gần đây có siêu thị không? Giao thông có thuận tiện không?' },
        { speaker: 1, chinese: '附近有超市，交通很方便，有地铁站。', pinyin: 'Fùjìn yǒu chāoshì, jiāotōng hěn fāngbiàn, yǒu dìtiě zhàn.', vietnamese: 'Gần có siêu thị, giao thông rất thuận tiện, có ga tàu điện ngầm.' },
        { speaker: 0, chinese: '太好了！我可以看看房子吗？', pinyin: 'Tài hǎo le! Wǒ kěyǐ kànkàn fángzi ma?', vietnamese: 'Tuyệt quá! Tôi có thể xem thử phòng không?' },
        { speaker: 1, chinese: '当然可以！请跟我来。', pinyin: 'Dāngrán kěyǐ! Qǐng gēn wǒ lái.', vietnamese: 'Tất nhiên! Xin mời theo tôi.' }
      ]
    },

    /* L19 – Đặt hàng ở nhà hàng */
    L19: {
      title: 'Bữa tối ở nhà hàng', characters: ['Khách', 'Phục vụ'],
      lines: [
        { speaker: 0, chinese: '服务员，可以点菜了吗？', pinyin: 'Fúwùyuán, kěyǐ diǎn cài le ma?', vietnamese: 'Phục vụ, có thể gọi món chưa?' },
        { speaker: 1, chinese: '当然！请看菜单。今天有什么特别想吃的吗？', pinyin: 'Dāngrán! Qǐng kàn càidān. Jīntiān yǒu shénme tèbié xiǎng chī de ma?', vietnamese: 'Tất nhiên! Mời xem thực đơn. Hôm nay có muốn ăn gì đặc biệt không?' },
        { speaker: 0, chinese: '我要一碗牛肉面。有没有素食菜单？', pinyin: 'Wǒ yào yī wǎn niúròu miàn. Yǒu méiyǒu sùshí càidān?', vietnamese: 'Tôi muốn một bát mì bò. Có thực đơn chay không?' },
        { speaker: 1, chinese: '有的！还有，需要我给你推荐吗？', pinyin: 'Yǒu de! Hái yǒu, xūyào wǒ gěi nǐ tuījiàn ma?', vietnamese: 'Có ạ! Bên cạnh đó, bạn có cần tôi giới thiệu không?' },
        { speaker: 0, chinese: '好的，请推荐！另外，请给我们换一双筷子。', pinyin: 'Hǎo de, qǐng tuījiàn! Lìngwài, qǐng gěi wǒmen huàn yī shuāng kuàizi.', vietnamese: 'Được, mời giới thiệu! Ngoài ra, xin đổi cho chúng tôi đôi đũa.' },
        { speaker: 1, chinese: '好的！我推荐红烧排骨，很好吃！', pinyin: 'Hǎo de! Wǒ tuījiàn hóngshāo páigǔ, hěn hǎochī!', vietnamese: 'Được! Tôi giới thiệu sườn kho tàu, rất ngon!' },
        { speaker: 0, chinese: '好，就这些。买单的时候可以开发票吗？', pinyin: 'Hǎo, jiù zhèxiē. Mǎidān de shíhòu kěyǐ kāi fāpiào ma?', vietnamese: 'Được, chỉ vậy thôi. Khi tính tiền có thể xuất hóa đơn không?' },
        { speaker: 1, chinese: '可以！请稍等，我去准备。', pinyin: 'Kěyǐ! Qǐng shāo děng, wǒ qù zhǔnbèi.', vietnamese: 'Được! Xin chờ một chút, tôi đi chuẩn bị.' }
      ]
    },

    /* L20 – Mua sắm nâng cao */
    L20: {
      title: 'Mua quần áo', characters: ['Khách hàng', 'Nhân viên cửa hàng'],
      lines: [
        { speaker: 0, chinese: '你好！我想买一件衬衫。', pinyin: 'Nǐ hǎo! Wǒ xiǎng mǎi yī jiàn chènshān.', vietnamese: 'Xin chào! Tôi muốn mua một chiếc áo sơ mi.' },
        { speaker: 1, chinese: '欢迎！这几件都很好看，你喜欢什么颜色？', pinyin: 'Huānyíng! Zhè jǐ jiàn dōu hěn hǎokàn, nǐ xǐhuān shénme yánsè?', vietnamese: 'Chào mừng! Những chiếc này đều đẹp, bạn thích màu gì?' },
        { speaker: 0, chinese: '我喜欢蓝色。有没有更便宜的？', pinyin: 'Wǒ xǐhuān lánsè. Yǒu méiyǒu gèng piányí de?', vietnamese: 'Tôi thích màu xanh. Có cái nào rẻ hơn không?' },
        { speaker: 1, chinese: '这件蓝色的三百块。你可以试穿吗？', pinyin: 'Zhè jiàn lánsè de sānbǎi kuài. Nǐ kěyǐ shì chuān ma?', vietnamese: 'Chiếc áo xanh này ba trăm tệ. Bạn có thể thử mặc không?' },
        { speaker: 0, chinese: '可以！这件太大了，有小号吗？', pinyin: 'Kěyǐ! Zhè jiàn tài dà le, yǒu xiǎo hào ma?', vietnamese: 'Được! Cái này quá rộng, có size nhỏ không?' },
        { speaker: 1, chinese: '有！这是小号的，再试试看吧。', pinyin: 'Yǒu! Zhè shì xiǎo hào de, zài shìshi kàn ba.', vietnamese: 'Có! Đây là size nhỏ, thử lại xem sao.' },
        { speaker: 0, chinese: '这件合适！可以打折吗？可以用微信支付吗？', pinyin: 'Zhè jiàn héshì! Kěyǐ dǎzhé ma? Kěyǐ yòng Wēixìn zhīfù ma?', vietnamese: 'Chiếc này vừa! Có thể giảm giá không? Có thể thanh toán bằng WeChat không?' },
        { speaker: 1, chinese: '可以打九折，微信支付也可以！', pinyin: 'Kěyǐ dǎ jiǔ zhé, Wēixìn zhīfù yě kěyǐ!', vietnamese: 'Có thể chiết khấu 10%, thanh toán WeChat cũng được!' }
      ]
    },

    /* L21 – Du lịch và khách sạn */
    L21: {
      title: 'Check-in khách sạn', characters: ['Khách', 'Lễ tân'],
      lines: [
        { speaker: 0, chinese: '你好，我想预订一个标准间。', pinyin: 'Nǐ hǎo, wǒ xiǎng yùdìng yī gè biāozhǔn jiān.', vietnamese: 'Xin chào, tôi muốn đặt một phòng tiêu chuẩn.' },
        { speaker: 1, chinese: '好的！您有预订吗？请出示护照。', pinyin: 'Hǎo de! Nín yǒu yùdìng ma? Qǐng chūshì hùzhào.', vietnamese: 'Được! Bạn có đặt trước chưa? Xin xuất trình hộ chiếu.' },
        { speaker: 0, chinese: '有的，我提前在网上预订了。这是我的护照。', pinyin: 'Yǒu de, wǒ tíqián zài wǎngshàng yùdìng le. Zhè shì wǒ de hùzhào.', vietnamese: 'Có, tôi đã đặt trước trực tuyến. Đây là hộ chiếu của tôi.' },
        { speaker: 1, chinese: '好，退房时间是十二点。需要叫醒服务吗？', pinyin: 'Hǎo, tuìfáng shíjiān shì shí èr diǎn. Xūyào jiàoxǐng fúwù ma?', vietnamese: 'Được, thời gian trả phòng là 12 giờ. Bạn có cần dịch vụ đánh thức không?' },
        { speaker: 0, chinese: '不需要，谢谢。我想换一个安静的房间可以吗？', pinyin: 'Bù xūyào, xièxie. Wǒ xiǎng huàn yī gè ānjìng de fángjiān kěyǐ ma?', vietnamese: 'Không cần, cảm ơn. Tôi muốn đổi sang phòng yên tĩnh hơn được không?' },
        { speaker: 1, chinese: '当然！附近有什么好玩的地方想去吗？', pinyin: 'Dāngrán! Fùjìn yǒu shénme hǎowán de dìfāng xiǎng qù ma?', vietnamese: 'Tất nhiên! Bạn muốn đến chỗ nào hay gần đây không?' },
        { speaker: 0, chinese: '我想参观故宫，怎么去？', pinyin: 'Wǒ xiǎng cānguān Gùgōng, zěnme qù?', vietnamese: 'Tôi muốn tham quan Tử Cấm Thành, đi bằng gì?' },
        { speaker: 1, chinese: '坐地铁2号线，很方便！', pinyin: 'Zuò dìtiě èr hào xiàn, hěn fāngbiàn!', vietnamese: 'Đi tàu điện ngầm tuyến số 2, rất tiện!' }
      ]
    },

    /* L22 – Thể thao và sức khỏe */
    L22: {
      title: 'Rủ nhau đi thể thao', characters: ['Khải', 'Minh'],
      lines: [
        { speaker: 0, chinese: '你平时喜欢什么运动？', pinyin: 'Nǐ píngshí xǐhuān shénme yùndòng?', vietnamese: 'Bạn thường thích môn thể thao nào?' },
        { speaker: 1, chinese: '我喜欢打篮球和游泳。你呢？', pinyin: 'Wǒ xǐhuān dǎ lánqiú hé yóuyǒng. Nǐ ne?', vietnamese: 'Tôi thích chơi bóng rổ và bơi lội. Còn bạn?' },
        { speaker: 0, chinese: '我喜欢跑步。你每天锻炼多长时间？', pinyin: 'Wǒ xǐhuān pǎobù. Nǐ měitiān duànliàn duō cháng shíjiān?', vietnamese: 'Tôi thích chạy bộ. Mỗi ngày bạn tập thể dục bao lâu?' },
        { speaker: 1, chinese: '每天大约一个小时。锻炼身体很重要！', pinyin: 'Měitiān dàyuē yī gè xiǎoshí. Duànliàn shēntǐ hěn zhòngyào!', vietnamese: 'Mỗi ngày khoảng một tiếng. Tập thể dục rất quan trọng!' },
        { speaker: 0, chinese: '对！我去游泳了，你也去泳池吗？', pinyin: 'Duì! Wǒ qù yóuyǒng le, nǐ yě qù yǒngchí ma?', vietnamese: 'Đúng! Tôi đã đi bơi, bạn có đến bể bơi không?' },
        { speaker: 1, chinese: '明天我们一起打羽毛球吧！', pinyin: 'Míngtiān wǒmen yīqǐ dǎ yǔmáoqiú ba!', vietnamese: 'Ngày mai chúng ta cùng đánh cầu lông nhé!' },
        { speaker: 0, chinese: '好主意！几点在哪里见？', pinyin: 'Hǎo zhǔyì! Jǐ diǎn zài nǎlǐ jiàn?', vietnamese: 'Ý hay đấy! Mấy giờ gặp nhau ở đâu?' },
        { speaker: 1, chinese: '下午四点在体育馆门口，好吗？', pinyin: 'Xiàwǔ sì diǎn zài tǐyùguǎn ménkǒu, hǎo ma?', vietnamese: 'Bốn giờ chiều ở cửa thể dục quán, được không?' }
      ]
    },

    /* L23 – Học ngoại ngữ */
    L23: {
      title: 'Luyện tập ngôn ngữ', characters: ['Cô giáo', 'Học viên'],
      lines: [
        { speaker: 0, chinese: '你会说几种语言？', pinyin: 'Nǐ huì shuō jǐ zhǒng yǔyán?', vietnamese: 'Bạn biết nói mấy thứ tiếng?' },
        { speaker: 1, chinese: '我会说越南语、汉语和一点英语。', pinyin: 'Wǒ huì shuō Yuènányǔ, Hànyǔ hé yīdiǎn Yīngyǔ.', vietnamese: 'Tôi biết tiếng Việt, tiếng Trung và một chút tiếng Anh.' },
        { speaker: 0, chinese: '你汉语说得很好！', pinyin: 'Nǐ Hànyǔ shuō de hěn hǎo!', vietnamese: 'Tiếng Trung của bạn nói rất tốt!' },
        { speaker: 1, chinese: '谢谢，我还在学习。我每天怎么练习汉语呢？', pinyin: 'Xièxie, wǒ hái zài xuéxí. Wǒ měitiān zěnme liànxí Hànyǔ ne?', vietnamese: 'Cảm ơn, tôi vẫn đang học. Tôi nên luyện tiếng Trung mỗi ngày như thế nào?' },
        { speaker: 0, chinese: '你可以每天看中文节目，听中文歌。', pinyin: 'Nǐ kěyǐ měitiān kàn Zhōngwén jiémù, tīng Zhōngwén gē.', vietnamese: 'Bạn có thể xem chương trình tiếng Trung mỗi ngày, nghe nhạc tiếng Trung.' },
        { speaker: 1, chinese: '我现在用手机APP学习汉语，很有帮助！', pinyin: 'Wǒ xiànzài yòng shǒujī APP xuéxí Hànyǔ, hěn yǒu bāngzhù!', vietnamese: 'Tôi hiện đang dùng ứng dụng điện thoại để học tiếng Trung, rất hữu ích!' },
        { speaker: 0, chinese: '好方法！坚持每天学习，一定会进步！', pinyin: 'Hǎo fāngfǎ! Jiānchí měitiān xuéxí, yīdìng huì jìnbù!', vietnamese: 'Phương pháp hay! Kiên trì học mỗi ngày, nhất định sẽ tiến bộ!' }
      ]
    },

    /* L24 – Kế hoạch tương lai */
    L24: {
      title: 'Kế hoạch du học', characters: ['Phúc', 'Bố'],
      lines: [
        { speaker: 0, chinese: '爸爸，我有什么计划要告诉你。', pinyin: 'Bàba, wǒ yǒu shénme jìhuà yào gàosu nǐ.', vietnamese: 'Bố ơi, con có kế hoạch muốn nói với bố.' },
        { speaker: 1, chinese: '什么计划？说吧。', pinyin: 'Shénme jìhuà? Shuō ba.', vietnamese: 'Kế hoạch gì? Nói đi.' },
        { speaker: 0, chinese: '我打算去中国留学，你觉得呢？', pinyin: 'Wǒ dǎsuàn qù Zhōngguó liúxué, nǐ juéde ne?', vietnamese: 'Con dự định đi du học ở Trung Quốc, bố nghĩ sao?' },
        { speaker: 1, chinese: '哦！你想去哪个城市？什么时候？', pinyin: 'Ó! Nǐ xiǎng qù nǎ gè chéngshì? Shénme shíhòu?', vietnamese: 'Ồ! Con muốn đến thành phố nào? Khi nào?' },
        { speaker: 0, chinese: '我想去北京或上海。我打算明年九月份出发。', pinyin: 'Wǒ xiǎng qù Běijīng huò Shànghǎi. Wǒ dǎsuàn míngnián jiǔyuèfèn chūfā.', vietnamese: 'Con muốn đến Bắc Kinh hoặc Thượng Hải. Con dự định tháng 9 năm sau khởi hành.' },
        { speaker: 1, chinese: '这个计划很好！你准备好了吗？', pinyin: 'Zhège jìhuà hěn hǎo! Nǐ zhǔnbèi hǎo le ma?', vietnamese: 'Kế hoạch này rất tốt! Con đã chuẩn bị chưa?' },
        { speaker: 0, chinese: '我已经开始学习汉语了，成绩还不错。', pinyin: 'Wǒ yǐjīng kāishǐ xuéxí Hànyǔ le, chéngjì hái bùcuò.', vietnamese: 'Con đã bắt đầu học tiếng Trung rồi, thành tích cũng khá.' },
        { speaker: 1, chinese: '好！爸爸支持你！加油！', pinyin: 'Hǎo! Bàba zhīchí nǐ! Jiāyóu!', vietnamese: 'Tốt! Bố ủng hộ con! Cố lên!' }
      ]
    },

    /* L25 – Cảm xúc và tâm tư */
    L25: {
      title: 'Chia sẻ tâm sự', characters: ['Lan', 'Hằng'],
      lines: [
        { speaker: 0, chinese: '你今天心情怎么样？你看起来不太高兴。', pinyin: 'Nǐ jīntiān xīnqíng zěnmeyàng? Nǐ kànqǐlái bù tài gāoxìng.', vietnamese: 'Hôm nay tâm trạng bạn thế nào? Trông bạn có vẻ không vui lắm.' },
        { speaker: 1, chinese: '我有点担心。明天有个重要考试。', pinyin: 'Wǒ yǒudiǎn dānxīn. Míngtiān yǒu gè zhòngyào kǎoshì.', vietnamese: 'Tôi hơi lo lắng. Ngày mai có kỳ thi quan trọng.' },
        { speaker: 0, chinese: '别担心，一切都会好的！你准备好了吗？', pinyin: 'Bié dānxīn, yīqiè dōu huì hǎo de! Nǐ zhǔnbèi hǎo le ma?', vietnamese: 'Đừng lo, mọi thứ sẽ ổn thôi! Bạn đã chuẩn bị chưa?' },
        { speaker: 1, chinese: '我复习了，但还是很紧张。他看起来很难过。', pinyin: 'Wǒ fùxí le, dàn háishi hěn jǐnzhāng. Tā kànqǐlái hěn nánguò.', vietnamese: 'Tôi đã ôn rồi, nhưng vẫn rất hồi hộp. Trông anh ấy có vẻ rất buồn.' },
        { speaker: 0, chinese: '是吗？为什么难过？你觉得这件事很有意思吗？', pinyin: 'Shì ma? Wèishénme nánguò? Nǐ juéde zhè jiàn shì hěn yǒu yìsi ma?', vietnamese: 'Thật à? Tại sao buồn? Bạn thấy chuyện này thú vị không?' },
        { speaker: 1, chinese: '我很高兴，因为通过考试了！今天心情好多了！', pinyin: 'Wǒ hěn gāoxìng, yīnwèi tōngguò kǎoshì le! Jīntiān xīnqíng hǎo duō le!', vietnamese: 'Tôi rất vui vì đã thi đỗ! Hôm nay tâm trạng tốt hơn nhiều rồi!' },
        { speaker: 0, chinese: '太棒了！我也觉得这件事很有意思！', pinyin: 'Tài bàng le! Wǒ yě juéde zhè jiàn shì hěn yǒu yìsi!', vietnamese: 'Tuyệt quá! Tôi cũng thấy chuyện này rất thú vị!' }
      ]
    },

    /* L26 – Cuộc sống hàng ngày */
    L26: {
      title: 'Thói quen hàng ngày', characters: ['Bạn A', 'Bạn B'],
      lines: [
        { speaker: 0, chinese: '你每天几点起床？', pinyin: 'Nǐ měitiān jǐ diǎn qǐchuáng?', vietnamese: 'Bạn mỗi ngày dậy mấy giờ?' },
        { speaker: 1, chinese: '我一般六点半起床。你的日常生活怎么样？', pinyin: 'Wǒ yībān liù diǎn bàn qǐchuáng. Nǐ de rìcháng shēnghuó zěnmeyàng?', vietnamese: 'Tôi thường dậy lúc sáu giờ rưỡi. Cuộc sống hàng ngày của bạn thế nào?' },
        { speaker: 0, chinese: '我习惯早睡早起。早上会跑步，然后去上班。', pinyin: 'Wǒ xíguàn zǎo shuì zǎo qǐ. Zǎoshang huì pǎobù, ránhòu qù shàngbān.', vietnamese: 'Tôi có thói quen ngủ sớm dậy sớm. Buổi sáng chạy bộ, rồi đi làm.' },
        { speaker: 1, chinese: '早睡早起好！我下班后喜欢散步。', pinyin: 'Zǎo shuì zǎo qǐ hǎo! Wǒ xiàbān hòu xǐhuān sànbù.', vietnamese: 'Ngủ sớm dậy sớm tốt! Tôi thích đi dạo sau giờ làm.' },
        { speaker: 0, chinese: '散步很好。周末你一般在家休息吗？', pinyin: 'Sànbù hěn hǎo. Zhōumò nǐ yībān zài jiā xiūxi ma?', vietnamese: 'Đi dạo rất tốt. Cuối tuần bạn thường nghỉ ở nhà không?' },
        { speaker: 1, chinese: '有时候在家，有时候出去。你呢？', pinyin: 'Yǒushíhòu zài jiā, yǒushíhòu chūqù. Nǐ ne?', vietnamese: 'Đôi khi ở nhà, đôi khi ra ngoài. Còn bạn?' },
        { speaker: 0, chinese: '我周末一般在家休息，看电视，做饭。', pinyin: 'Wǒ zhōumò yībān zài jiā xiūxi, kàn diànshì, zuò fàn.', vietnamese: 'Tôi cuối tuần thường nghỉ ở nhà, xem TV, nấu ăn.' }
      ]
    },

    /* L27 – Tiền bạc và ngân hàng */
    L27: {
      title: 'Ở ngân hàng', characters: ['Khách', 'Nhân viên ngân hàng'],
      lines: [
        { speaker: 0, chinese: '您好！我想换一些人民币。', pinyin: 'Nín hǎo! Wǒ xiǎng huàn yīxiē rénmínbì.', vietnamese: 'Xin chào! Tôi muốn đổi một ít nhân dân tệ.' },
        { speaker: 1, chinese: '好的！今天汇率是多少知道吗？', pinyin: 'Hǎo de! Jīntiān huìlǜ shì duōshǎo zhīdào ma?', vietnamese: 'Được! Hôm nay tỷ giá là bao nhiêu bạn biết không?' },
        { speaker: 0, chinese: '今天汇率多少？我想取五百块钱。', pinyin: 'Jīntiān huìlǜ duōshǎo? Wǒ xiǎng qǔ wǔbǎi kuài qián.', vietnamese: 'Tỷ giá hôm nay bao nhiêu? Tôi muốn rút năm trăm tệ.' },
        { speaker: 1, chinese: '今天是3.4越南盾换一块人民币。ATM在走廊那边。', pinyin: 'Jīntiān shì 3.4 Yuènán dùn huàn yī kuài rénmínbì. ATM zài zǒuláng nàbiān.', vietnamese: 'Hôm nay là 3.4 đồng Việt đổi một tệ. Máy ATM ở hành lang kia.' },
        { speaker: 0, chinese: '谢谢。可以用手机支付吗？', pinyin: 'Xièxie. Kěyǐ yòng shǒujī zhīfù ma?', vietnamese: 'Cảm ơn. Có thể thanh toán bằng điện thoại không?' },
        { speaker: 1, chinese: '可以！微信支付和支付宝都可以。', pinyin: 'Kěyǐ! Wēixìn zhīfù hé Zhīfùbǎo dōu kěyǐ.', vietnamese: 'Được! WeChat Pay và Alipay đều được.' },
        { speaker: 0, chinese: '好的。我的账户里有多少钱？', pinyin: 'Hǎo de. Wǒ de zhànghù lǐ yǒu duōshǎo qián?', vietnamese: 'Được rồi. Tài khoản của tôi có bao nhiêu tiền?' },
        { speaker: 1, chinese: '请输入密码查询账户余额。', pinyin: 'Qǐng shūrù mìmǎ cháxún zhànghù yúé.', vietnamese: 'Xin nhập mật khẩu để kiểm tra số dư tài khoản.' }
      ]
    },

    /* L28 – Bệnh viện và thuốc */
    L28: {
      title: 'Khám bệnh', characters: ['Bác sĩ', 'Bệnh nhân'],
      lines: [
        { speaker: 0, chinese: '你好，请坐。你有什么不舒服？', pinyin: 'Nǐ hǎo, qǐng zuò. Nǐ yǒu shénme bù shūfu?', vietnamese: 'Xin chào, mời ngồi. Bạn có điều gì không khỏe?' },
        { speaker: 1, chinese: '医生，我发烧了，需要看医生。我头疼、咳嗽。', pinyin: 'Yīshēng, wǒ fāshāo le, xūyào kàn yīshēng. Wǒ tóuténg, késou.', vietnamese: 'Bác sĩ, tôi bị sốt, cần đi khám. Tôi đau đầu, ho.' },
        { speaker: 0, chinese: '你有什么症状？发烧几度了？', pinyin: 'Nǐ yǒu shénme zhèngzhuàng? Fāshāo jǐ dù le?', vietnamese: 'Bạn có những triệu chứng gì? Sốt bao nhiêu độ?' },
        { speaker: 1, chinese: '我头疼、发烧、咳嗽。三十八度五。', pinyin: 'Wǒ tóuténg, fāshāo, késou. Sānshíbā dù wǔ.', vietnamese: 'Tôi đau đầu, sốt và ho. Ba mươi tám độ rưỡi.' },
        { speaker: 0, chinese: '我给你开一些药。这种药一天吃几次？', pinyin: 'Wǒ gěi nǐ kāi yīxiē yào. Zhè zhǒng yào yī tiān chī jǐ cì?', vietnamese: 'Tôi sẽ kê cho bạn một số thuốc. Loại thuốc này uống mấy lần một ngày?' },
        { speaker: 1, chinese: '请问，这种药一天吃三次对吗？', pinyin: 'Qǐngwèn, zhè zhǒng yào yī tiān chī sān cì duì ma?', vietnamese: 'Xin hỏi, loại thuốc này uống ba lần một ngày có đúng không?' },
        { speaker: 0, chinese: '对！饭后吃。多喝水，多休息。明天来复诊。', pinyin: 'Duì! Fàn hòu chī. Duō hē shuǐ, duō xiūxi. Míngtiān lái fùzhěn.', vietnamese: 'Đúng! Uống sau ăn. Uống nhiều nước, nghỉ ngơi nhiều. Ngày mai đến tái khám.' }
      ]
    },

    /* L29 – Công nghệ và internet */
    L29: {
      title: 'Trợ giúp kỹ thuật', characters: ['Người dùng', 'Kỹ thuật viên'],
      lines: [
        { speaker: 0, chinese: '你好！你会用电脑吗？', pinyin: 'Nǐ hǎo! Nǐ huì yòng diànnǎo ma?', vietnamese: 'Xin chào! Bạn có biết dùng máy tính không?' },
        { speaker: 1, chinese: '会！每天都上网。有什么问题吗？', pinyin: 'Huì! Měitiān dōu shàngwǎng. Yǒu shénme wèntí ma?', vietnamese: 'Biết! Mỗi ngày đều lên mạng. Có vấn đề gì không?' },
        { speaker: 0, chinese: '这个APP怎么下载？我找不到。', pinyin: 'Zhège APP zěnme xiàzài? Wǒ zhǎo bù dào.', vietnamese: 'Ứng dụng này tải về như thế nào? Tôi không tìm thấy.' },
        { speaker: 1, chinese: '在应用商店搜索名字就可以了。WiFi密码是多少？', pinyin: 'Zài yìngyòng shāngdiàn sōusuǒ míngzì jiù kěyǐ le. WiFi mìmǎ shì duōshǎo?', vietnamese: 'Tìm kiếm tên trong cửa hàng ứng dụng là được. Mật khẩu WiFi là gì?' },
        { speaker: 0, chinese: '密码是12345678。我的手机没电了！', pinyin: 'Mìmǎ shì yāo èr sān sì wǔ liù qī bā. Wǒ de shǒujī méi diàn le!', vietnamese: 'Mật khẩu là 12345678. Điện thoại tôi hết pin rồi!' },
        { speaker: 1, chinese: '可以借你的充电器吗？我有充电宝。', pinyin: 'Kěyǐ jiè nǐ de chōngdiànqì ma? Wǒ yǒu chōngdiànbǎo.', vietnamese: 'Có thể mượn sạc của bạn không? Tôi có pin dự phòng.' },
        { speaker: 0, chinese: '太谢谢了！你的手机也没电了吗？', pinyin: 'Tài xièxie le! Nǐ de shǒujī yě méi diàn le ma?', vietnamese: 'Cảm ơn quá! Điện thoại bạn cũng hết pin không?' },
        { speaker: 1, chinese: '没有，我的还有百分之五十电。', pinyin: 'Méiyǒu, wǒ de hái yǒu bǎifēnzhī wǔshí diàn.', vietnamese: 'Không, máy tôi vẫn còn năm mươi phần trăm.' }
      ]
    },

    /* L30 – Bạn bè và quan hệ xã hội */
    L30: {
      title: 'Bước đầu kết bạn', characters: ['Tân sinh viên A', 'Tân sinh viên B'],
      lines: [
        { speaker: 0, chinese: '你好！你们是怎么认识的？', pinyin: 'Nǐ hǎo! Nǐmen shì zěnme rènshi de?', vietnamese: 'Xin chào! Các bạn quen nhau như thế nào?' },
        { speaker: 1, chinese: '我们是同学，进学校就认识了。你呢？', pinyin: 'Wǒmen shì tóngxué, jìn xuéxiào jiù rènshi le. Nǐ ne?', vietnamese: 'Chúng tôi là bạn cùng lớp, vào trường là quen rồi. Còn bạn?' },
        { speaker: 0, chinese: '我刚来，还没有朋友。他是你最好的朋友吗？', pinyin: 'Wǒ gāng lái, hái méiyǒu péngyou. Tā shì nǐ zuì hǎo de péngyou ma?', vietnamese: 'Tôi mới đến, chưa có bạn bè. Anh ấy là người bạn tốt nhất của bạn không?' },
        { speaker: 1, chinese: '对！我们经常一起出去玩。你要一起来吗？', pinyin: 'Duì! Wǒmen jīngcháng yīqǐ chūqù wán. Nǐ yào yīqǐ lái ma?', vietnamese: 'Đúng! Chúng tôi thường cùng nhau đi chơi. Bạn có muốn cùng đến không?' },
        { speaker: 0, chinese: '好啊！你有很多中国朋友吗？', pinyin: 'Hǎo a! Nǐ yǒu hěn duō Zhōngguó péngyou ma?', vietnamese: 'Được! Bạn có nhiều bạn bè Trung Quốc không?' },
        { speaker: 1, chinese: '有！在学校里交了几个。交朋友需要诚实和耐心。', pinyin: 'Yǒu! Zài xuéxiào lǐ jiāo le jǐ gè. Jiāo péngyou xūyào chéngshí hé nàixīn.', vietnamese: 'Có! Trong trường kết thêm vài người. Kết bạn cần sự thành thật và kiên nhẫn.' },
        { speaker: 0, chinese: '说得对！我希望我们也能成为好朋友！', pinyin: 'Shuō de duì! Wǒ xīwàng wǒmen yě néng chéngwéi hǎo péngyou!', vietnamese: 'Nói đúng lắm! Tôi hy vọng chúng ta cũng có thể trở thành bạn tốt!' },
        { speaker: 1, chinese: '当然！欢迎来我们的小队！', pinyin: 'Dāngrán! Huānyíng lái wǒmen de xiǎo duì!', vietnamese: 'Tất nhiên! Chào mừng bạn đến với nhóm chúng tôi!' }
      ]
    }
  };

  /* ============================================================
     HSK 3 – Hội thoại phức tạp, từ vựng nâng cao
     ============================================================ */
  const dialoguesHSK3 = {

    /* L31 – Công việc văn phòng */
    L31: {
      title: 'Cuộc họp công ty', characters: ['Giám đốc', 'Nhân viên'],
      lines: [
        { speaker: 0, chinese: '今天下午三点有一个重要会议，大家准备好了吗？', pinyin: 'Jīntiān xiàwǔ sān diǎn yǒu yī gè zhòngyào huìyì, dàjiā zhǔnbèi hǎo le ma?', vietnamese: 'Chiều nay lúc 3 giờ có một cuộc họp quan trọng, mọi người đã sẵn sàng chưa?' },
        { speaker: 1, chinese: '是的。请问，这个项目的截止日期是什么时候？', pinyin: 'Shì de. Qǐngwèn, zhège xiàngmù de jiézhǐ rìqī shì shénme shíhòu?', vietnamese: 'Vâng. Xin hỏi, hạn chót của dự án này là khi nào?' },
        { speaker: 0, chinese: '截止日期是下周五。请把报告发给我看看。', pinyin: 'Jiézhǐ rìqī shì xià zhōu wǔ. Qǐng bǎ bàogào fā gěi wǒ kànkàn.', vietnamese: 'Hạn chót là thứ Sáu tuần sau. Hãy gửi báo cáo cho tôi xem.' },
        { speaker: 1, chinese: '好的。我需要和客户沟通一下，有些细节需要确认。', pinyin: 'Hǎo de. Wǒ xūyào hé kèhù gōutōng yīxià, yǒuxiē xìjié xūyào quèrèn.', vietnamese: 'Được. Tôi cần trao đổi với khách hàng một chút, có một số chi tiết cần xác nhận.' },
        { speaker: 0, chinese: '好。你的表现非常出色，继续保持！', pinyin: 'Hǎo. Nǐ de biǎoxiàn fēicháng chūsè, jìxù bǎochí!', vietnamese: 'Được. Biểu hiện của bạn xuất sắc lắm, tiếp tục phát huy!' },
        { speaker: 1, chinese: '谢谢您！我们需要提高工作效率。有什么建议吗？', pinyin: 'Xièxie nín! Wǒmen xūyào tígāo gōngzuò xiàolǜ. Yǒu shénme jiànyì ma?', vietnamese: 'Cảm ơn! Chúng ta cần nâng cao hiệu suất làm việc. Có đề xuất gì không?' },
        { speaker: 0, chinese: '可以使用项目管理工具，合理分配任务。', pinyin: 'Kěyǐ shǐyòng xiàngmù guǎnlǐ gōngjù, hélǐ fēnpèi rènwù.', vietnamese: 'Có thể dùng công cụ quản lý dự án, phân bổ nhiệm vụ hợp lý.' }
      ]
    },

    /* L32 – Môi trường và thiên nhiên */
    L32: {
      title: 'Bảo vệ môi trường', characters: ['Giáo viên', 'Học sinh'],
      lines: [
        { speaker: 0, chinese: '今天我们讨论环境保护。保护环境是每个人的责任。', pinyin: 'Jīntiān wǒmen tǎolùn huánjìng bǎohù. Bǎohù huánjìng shì měi gè rén de zérèn.', vietnamese: 'Hôm nay chúng ta thảo luận về bảo vệ môi trường. Bảo vệ môi trường là trách nhiệm của mỗi người.' },
        { speaker: 1, chinese: '老师，空气污染越来越严重，我们应该怎么做？', pinyin: 'Lǎoshī, kōngqì wūrǎn yuèlái yuè yánzhòng, wǒmen yīnggāi zěnme zuò?', vietnamese: 'Thầy ơi, ô nhiễm không khí ngày càng nghiêm trọng, chúng ta nên làm gì?' },
        { speaker: 0, chinese: '我们应该节约用水，使用可再生能源。', pinyin: 'Wǒmen yīnggāi jiéyuē yòng shuǐ, shǐyòng kě zàishēng néngyuán.', vietnamese: 'Chúng ta nên tiết kiệm nước, sử dụng năng lượng tái tạo.' },
        { speaker: 1, chinese: '使用可再生能源很重要。这片森林里有很多动植物！', pinyin: 'Shǐyòng kě zàishēng néngyuán hěn zhòngyào. Zhè piàn sēnlín lǐ yǒu hěn duō dòngzhíwù!', vietnamese: 'Việc sử dụng năng lượng tái tạo rất quan trọng. Khu rừng này có rất nhiều động thực vật!' },
        { speaker: 0, chinese: '对！我们要减少使用一次性塑料袋，这很重要。', pinyin: 'Duì! Wǒmen yào jiǎnshǎo shǐyòng yīcìxìng sùliào dài, zhè hěn zhòngyào.', vietnamese: 'Đúng! Chúng ta phải giảm sử dụng túi nhựa dùng một lần, điều này rất quan trọng.' },
        { speaker: 1, chinese: '我已经开始用环保袋了，节约用电也很重要。', pinyin: 'Wǒ yǐjīng kāishǐ yòng huánbǎo dài le, jiéyuē yòng diàn yě hěn zhòngyào.', vietnamese: 'Tôi đã bắt đầu dùng túi thân thiện môi trường rồi, tiết kiệm điện cũng rất quan trọng.' },
        { speaker: 0, chinese: '说得很好！每个小行动都能改变世界！', pinyin: 'Shuō de hěn hǎo! Měi gè xiǎo xíngdòng dōu néng gǎibiàn shìjiè!', vietnamese: 'Nói rất hay! Mỗi hành động nhỏ đều có thể thay đổi thế giới!' }
      ]
    },

    /* L33 – Giáo dục và học tập */
    L33: {
      title: 'Phương pháp học tập hiệu quả', characters: ['Sinh viên A', 'Giáo sư'],
      lines: [
        { speaker: 0, chinese: '教授，教育对一个人的发展非常重要，对吗？', pinyin: 'Jiàoshòu, jiàoyù duì yī gè rén de fāzhǎn fēicháng zhòngyào, duì ma?', vietnamese: 'Giáo sư, giáo dục rất quan trọng đối với sự phát triển của một người, phải không?' },
        { speaker: 1, chinese: '当然！你的汉语水平提高了很多！', pinyin: 'Dāngrán! Nǐ de Hànyǔ shuǐpíng tígāo le hěn duō!', vietnamese: 'Tất nhiên! Trình độ tiếng Trung của bạn đã nâng cao rất nhiều!' },
        { speaker: 0, chinese: '谢谢！这次考试我考了多少分？', pinyin: 'Xièxie! Zhè cì kǎoshì wǒ kǎo le duōshǎo fēn?', vietnamese: 'Cảm ơn! Lần thi này tôi đạt bao nhiêu điểm?' },
        { speaker: 1, chinese: '九十二分！但我需要更加努力学习。', pinyin: 'Jiǔshí èr fēn! Dàn wǒ xūyào gèngjiā nǔlì xuéxí.', vietnamese: 'Chín mươi hai điểm! Nhưng tôi cần học tập chăm chỉ hơn.' },
        { speaker: 0, chinese: '死记硬背不是好方法，理解比记忆更重要。', pinyin: 'Sǐjìyìngbèi bù shì hǎo fāngfǎ, lǐjiě bǐ jìyì gèng zhòngyào.', vietnamese: 'Học vẹt không phải là phương pháp tốt, hiểu quan trọng hơn ghi nhớ.' },
        { speaker: 1, chinese: '教授说得对。我应该怎么改善学习方法？', pinyin: 'Jiàoshòu shuō de duì. Wǒ yīnggāi zěnme gǎishàn xuéxí fāngfǎ?', vietnamese: 'Giáo sư nói đúng. Tôi nên cải thiện phương pháp học tập như thế nào?' },
        { speaker: 0, chinese: '多思考，多练习，多和人交流。这是最好的方法。', pinyin: 'Duō sīkǎo, duō liànxí, duō hé rén jiāoliú. Zhè shì zuì hǎo de fāngfǎ.', vietnamese: 'Suy nghĩ nhiều, luyện tập nhiều, giao tiếp nhiều với người khác. Đây là phương pháp tốt nhất.' }
      ]
    },

    /* L34 – Văn hóa và phong tục */
    L34: {
      title: 'Tìm hiểu văn hóa Trung Quốc', characters: ['Du khách', 'Người bạn Trung Quốc'],
      lines: [
        { speaker: 0, chinese: '中国春节是最重要的节日，对吗？', pinyin: 'Zhōngguó Chūnjié shì zuì zhòngyào de jiérì, duì ma?', vietnamese: 'Tết Nguyên Đán của Trung Quốc là lễ hội quan trọng nhất, phải không?' },
        { speaker: 1, chinese: '对！过年时家人都团聚在一起，非常热闹！', pinyin: 'Duì! Guò nián shí jiārén dōu tuánjù zài yīqǐ, fēicháng rènào!', vietnamese: 'Đúng! Trong dịp năm mới, gia đình đoàn tụ, rất vui và nhộn nhịp!' },
        { speaker: 0, chinese: '你了解中国的饮食文化吗？', pinyin: 'Nǐ liǎojiě Zhōngguó de yǐnshí wénhuà ma?', vietnamese: 'Bạn có hiểu về văn hóa ẩm thực Trung Quốc không?' },
        { speaker: 1, chinese: '当然！中国人非常注重面子，送礼有很多讲究。', pinyin: 'Dāngrán! Zhōngguórén fēicháng zhùzhòng miànzi, sòng lǐ yǒu hěn duō jiǎngjiū.', vietnamese: 'Tất nhiên! Người Trung Quốc rất coi trọng thể diện, tặng quà có rất nhiều điều cần chú ý.' },
        { speaker: 0, chinese: '了解文化差异有助于沟通，说得对！', pinyin: 'Liǎojiě wénhuà chāyì yǒuzhù yú gōutōng, shuō de duì!', vietnamese: 'Hiểu sự khác biệt văn hóa giúp giao tiếp tốt hơn, nói đúng lắm!' },
        { speaker: 1, chinese: '还有，在中国喝茶也有很多礼仪。', pinyin: 'Hái yǒu, zài Zhōngguó hē chá yě yǒu hěn duō lǐyí.', vietnamese: 'Còn nữa, ở Trung Quốc uống trà cũng có nhiều lễ nghi.' },
        { speaker: 0, chinese: '真有意思！中国文化太丰富了！', pinyin: 'Zhēn yǒu yìsi! Zhōngguó wénhuà tài fēngfù le!', vietnamese: 'Thật thú vị! Văn hóa Trung Quốc thật phong phú!' }
      ]
    },

    /* L35 – Du lịch và khám phá */
    L35: {
      title: 'Chia sẻ trải nghiệm du lịch', characters: ['Người đi tour', 'Bạn mới quen'],
      lines: [
        { speaker: 0, chinese: '你去过中国哪些地方？', pinyin: 'Nǐ qù guò Zhōngguó nǎxiē dìfāng?', vietnamese: 'Bạn đã đi những nơi nào ở Trung Quốc?' },
        { speaker: 1, chinese: '我参观过北京的故宫和长城，还去了上海。', pinyin: 'Wǒ cānguān guò Běijīng de Gùgōng hé Chángchéng, hái qù le Shànghǎi.', vietnamese: 'Tôi đã tham quan Tử Cấm Thành và Vạn Lý Trường Thành ở Bắc Kinh, và còn đến Thượng Hải.' },
        { speaker: 0, chinese: '这个景点真的很值得去！旅行让你有什么感受？', pinyin: 'Zhège jǐngdiǎn zhēn de hěn zhídé qù! Lǚxíng ràng nǐ yǒu shénme gǎnshòu?', vietnamese: 'Điểm tham quan này thực sự rất đáng đi! Du lịch khiến bạn có cảm xúc gì?' },
        { speaker: 1, chinese: '旅行让我开阔了眼界，学到了很多。', pinyin: 'Lǚxíng ràng wǒ kāikuò le yǎnjiè, xuédào le hěn duō.', vietnamese: 'Du lịch đã giúp tôi mở rộng tầm nhìn, học được rất nhiều.' },
        { speaker: 0, chinese: '下次你想去哪里？', pinyin: 'Xià cì nǐ xiǎng qù nǎlǐ?', vietnamese: 'Lần sau bạn muốn đến đâu?' },
        { speaker: 1, chinese: '下次我想去云南看看，据说很美！', pinyin: 'Xià cì wǒ xiǎng qù Yúnnán kànkàn, jùshuō hěn měi!', vietnamese: 'Lần sau tôi muốn đến Vân Nam xem thử, nghe nói rất đẹp!' },
        { speaker: 0, chinese: '旅行中遇到困难怎么办？你有什么经验？', pinyin: 'Lǚxíng zhōng yù dào kùnnán zěnme bàn? Nǐ yǒu shénme jīngyàn?', vietnamese: 'Nếu gặp khó khăn trong khi du lịch thì làm gì? Bạn có kinh nghiệm gì không?' },
        { speaker: 1, chinese: '保持冷静，寻找帮助，很多中国人很热心！', pinyin: 'Bǎochí lěngjìng, xúnzhǎo bāngzhù, hěn duō Zhōngguórén hěn rèxīn!', vietnamese: 'Giữ bình tĩnh, tìm kiếm sự giúp đỡ, nhiều người Trung Quốc rất nhiệt tình!' }
      ]
    },

    /* L36 – Tình yêu và hôn nhân */
    L36: {
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

    /* L37 – Kinh tế và kinh doanh */
    L37: {
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

    /* L38 – Nghệ thuật và âm nhạc */
    L38: {
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

    /* L39 – Khoa học và công nghệ */
    L39: {
      title: 'Thảo luận về AI', characters: ['Giáo sư', 'Sinh viên nghiên cứu'],
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

    /* L40 – Thức ăn và văn hóa ẩm thực */
    L40: {
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

    /* L41 – Xã hội và cộng đồng */
    L41: {
      title: 'Hoạt động tình nguyện', characters: ['Tình nguyện viên', 'Điều phối viên'],
      lines: [
        { speaker: 0, chinese: '我们每个人都是社会的一部分，对吗？', pinyin: 'Wǒmen měi gè rén dōu shì shèhuì de yī bùfèn, duì ma?', vietnamese: 'Mỗi chúng ta đều là một phần của xã hội, phải không?' },
        { speaker: 1, chinese: '对！志愿者工作对社会很有价值！', pinyin: 'Duì! Zhìyuànzhě gōngzuò duì shèhuì hěn yǒu jiàzhí!', vietnamese: 'Đúng! Công việc tình nguyện rất có giá trị cho xã hội!' },
        { speaker: 0, chinese: '社区应该互相帮助。他们做了很多贡献。', pinyin: 'Shèqū yīnggāi hùxiāng bāngzhù. Tāmen zuò le hěn duō gòngxiàn.', vietnamese: 'Cộng đồng nên giúp đỡ lẫn nhau. Họ đã đóng góp rất nhiều.' },
        { speaker: 1, chinese: '公民有权利也有义务。参与社区活动很重要。', pinyin: 'Gōngmín yǒu quánlì yě yǒu yìwù. Cānyù shèqū huódòng hěn zhòngyào.', vietnamese: 'Công dân có quyền lợi và cũng có nghĩa vụ. Tham gia hoạt động cộng đồng rất quan trọng.' },
        { speaker: 0, chinese: '我想参加志愿活动。社会的进步需要大家努力。', pinyin: 'Wǒ xiǎng cānjiā zhìyuàn huódòng. Shèhuì de jìnbù xūyào dàjiā nǔlì.', vietnamese: 'Tôi muốn tham gia hoạt động tình nguyện. Tiến bộ xã hội cần sự nỗ lực của mọi người.' },
        { speaker: 1, chinese: '非常欢迎！我们这周末在公园做清洁活动。', pinyin: 'Fēicháng huānyíng! Wǒmen zhè zhōumò zài gōngyuán zuò qīngjié huódòng.', vietnamese: 'Rất hoan nghênh! Cuối tuần này chúng tôi làm hoạt động vệ sinh công viên.' },
        { speaker: 0, chinese: '我一定参加！大家共同努力，让社区更美好！', pinyin: 'Wǒ yīdìng cānjiā! Dàjiā gòngtóng nǔlì, ràng shèqū gèng měihǎo!', vietnamese: 'Tôi nhất định tham gia! Mọi người cùng nỗ lực, làm cộng đồng tốt đẹp hơn!' }
      ]
    },

    /* L42 – Thể hiện ý kiến */
    L42: {
      title: 'Cuộc tranh luận nhỏ', characters: ['Người A', 'Người B'],
      lines: [
        { speaker: 0, chinese: '你对这个问题有什么看法？', pinyin: 'Nǐ duì zhège wèntí yǒu shénme kànfǎ?', vietnamese: 'Bạn có ý kiến gì về vấn đề này?' },
        { speaker: 1, chinese: '我认为这个方案不可行，成本太高了。', pinyin: 'Wǒ rènwéi zhège fāng\'àn bù kěxíng, chéngběn tài gāo le.', vietnamese: 'Tôi cho rằng phương án này không khả thi, chi phí quá cao.' },
        { speaker: 0, chinese: '我同意你的看法。但还有另一种思路。', pinyin: 'Wǒ tóngyì nǐ de kànfǎ. Dàn hái yǒu lìng yī zhǒng sīlù.', vietnamese: 'Tôi đồng ý với quan điểm của bạn. Nhưng còn có một hướng suy nghĩ khác.' },
        { speaker: 1, chinese: '我不太赞成这种做法，从我的角度来看很冒险。', pinyin: 'Wǒ bù tài zànchéng zhè zhǒng zuòfǎ, cóng wǒ de jiǎodù lái kàn hěn màoxiǎn.', vietnamese: 'Tôi không hoàn toàn tán thành cách làm này, từ góc độ của tôi rất mạo hiểm.' },
        { speaker: 0, chinese: '我有充分的理由支持这个观点。你的例子很有说服力。', pinyin: 'Wǒ yǒu chōngfèn de lǐyóu zhīchí zhège guāndiǎn. Nǐ de lìzi hěn yǒu shuōfúlì.', vietnamese: 'Tôi có đầy đủ lý do để ủng hộ quan điểm này. Ví dụ của bạn rất có sức thuyết phục.' },
        { speaker: 1, chinese: '但我们也要考虑另一方面。我们需要用事实说话。', pinyin: 'Dàn wǒmen yě yào kǎolǜ lìng yī fāngmiàn. Wǒmen xūyào yòng shìshí shuōhuà.', vietnamese: 'Nhưng chúng ta cũng phải xem xét mặt khác. Chúng ta cần để sự thật nói lên tất cả.' },
        { speaker: 0, chinese: '我们可以听听不同的意见，然后再做决定。', pinyin: 'Wǒmen kěyǐ tīngtīng bùtóng de yìjiàn, ránhòu zài zuò juédìng.', vietnamese: 'Chúng ta có thể nghe các ý kiến khác nhau, rồi mới đưa ra quyết định.' }
      ]
    },

    /* L43 – Sức khỏe và lối sống */
    L43: {
      title: 'Chăm sóc sức khỏe', characters: ['Bác sĩ dinh dưỡng', 'Bệnh nhân'],
      lines: [
        { speaker: 0, chinese: '保持健康的生活方式很重要，你同意吗？', pinyin: 'Bǎochí jiànkāng de shēnghuó fāngshì hěn zhòngyào, nǐ tóngyì ma?', vietnamese: 'Duy trì lối sống lành mạnh rất quan trọng, bạn đồng ý không?' },
        { speaker: 1, chinese: '非常同意！均衡饮食对健康很有好处。', pinyin: 'Fēicháng tóngyì! Jūnhéng yǐnshí duì jiànkāng hěn yǒu hǎochù.', vietnamese: 'Rất đồng ý! Ăn uống cân bằng rất tốt cho sức khỏe.' },
        { speaker: 0, chinese: '现代人的生活压力很大，你有什么感受？', pinyin: 'Xiàndài rén de shēnghuó yālì hěn dà, nǐ yǒu shénme gǎnshòu?', vietnamese: 'Người hiện đại chịu rất nhiều áp lực cuộc sống, bạn cảm nhận thế nào?' },
        { speaker: 1, chinese: '是的。你怎么缓解工作压力？', pinyin: 'Shì de. Nǐ zěnme huǎnjiě gōngzuò yālì?', vietnamese: 'Đúng vậy. Bạn làm thế nào để giảm bớt áp lực công việc?' },
        { speaker: 0, chinese: '冥想和瑜伽对减压很有效，我每天都做。', pinyin: 'Míngxiǎng hé yújiā duì jiǎn yā hěn yǒuxiào, wǒ měitiān dōu zuò.', vietnamese: 'Thiền định và yoga rất hiệu quả để giảm stress, tôi làm mỗi ngày.' },
        { speaker: 1, chinese: '睡眠不足会影响健康，我经常睡不好。', pinyin: 'Shuìmián bùzú huì yǐngxiǎng jiànkāng, wǒ jīngcháng shuì bù hǎo.', vietnamese: 'Ngủ không đủ giấc sẽ ảnh hưởng đến sức khỏe, tôi thường khó ngủ ngon.' },
        { speaker: 0, chinese: '睡前不用手机，放松一下，睡眠会改善！', pinyin: 'Shuì qián bù yòng shǒujī, fàngsōng yīxià, shuìmián huì gǎishàn!', vietnamese: 'Trước khi ngủ đừng dùng điện thoại, thư giãn một chút, giấc ngủ sẽ cải thiện!' }
      ]
    },

    /* L44 – Phương tiện truyền thông */
    L44: {
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

    /* L45 – Tranh luận và thuyết phục */
    L45: {
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

    /* L46 – Lịch sử và địa lý Trung Quốc */
    L46: {
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

    /* L47 – Văn học và thơ ca */
    L47: {
      title: 'Câu lạc bộ đọc sách', characters: ['Người yêu văn học A', 'Người yêu văn học B'],
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

    /* L48 – Vấn đề xã hội */
    L48: {
      title: 'Thảo luận vấn đề xã hội', characters: ['Nhà nghiên cứu', 'Sinh viên'],
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

    /* L49 – Tốt nghiệp và sự nghiệp */
    L49: {
      title: 'Phỏng vấn xin việc', characters: ['Nhà tuyển dụng', 'Ứng viên'],
      lines: [
        { speaker: 0, chinese: '请介绍一下自己。你打算毕业后做什么？', pinyin: 'Qǐng jièshào yīxià zìjǐ. Nǐ dǎsuàn bìyè hòu zuò shénme?', vietnamese: 'Hãy tự giới thiệu bản thân. Bạn dự định sau khi tốt nghiệp sẽ làm gì?' },
        { speaker: 1, chinese: '我学经济，想找一份和专业相关的工作。', pinyin: 'Wǒ xué jīngjì, xiǎng zhǎo yī fèn hé zhuānyè xiāngguān de gōngzuò.', vietnamese: 'Tôi học kinh tế, muốn tìm một công việc liên quan đến chuyên ngành.' },
        { speaker: 0, chinese: '求职面试需要做好充分准备，你准备了什么？', pinyin: 'Qiúzhí miànshì xūyào zuò hǎo chōngfèn zhǔnbèi, nǐ zhǔnbèi le shénme?', vietnamese: 'Phỏng vấn xin việc cần chuẩn bị kỹ lưỡng, bạn đã chuẩn bị những gì?' },
        { speaker: 1, chinese: '我研究过公司，准备了问题的答案。你有没有实习经验？', pinyin: 'Wǒ yánjiū guò gōngsī, zhǔnbèi le wèntí de dáàn. Nǐ yǒu méiyǒu shíxí jīngyàn?', vietnamese: 'Tôi đã nghiên cứu về công ty, chuẩn bị câu trả lời. Bạn có kinh nghiệm thực tập không?' },
        { speaker: 0, chinese: '有！我在一家外企实习了六个月。', pinyin: 'Yǒu! Wǒ zài yī jiā wàiqǐ shíxí le liù gè yuè.', vietnamese: 'Có! Tôi đã thực tập tại một công ty nước ngoài sáu tháng.' },
        { speaker: 1, chinese: '我认为工作经验比学历更重要，你觉得呢？', pinyin: 'Wǒ rènwéi gōngzuò jīngyàn bǐ xuélì gèng zhòngyào, nǐ juéde ne?', vietnamese: 'Tôi cho rằng kinh nghiệm làm việc quan trọng hơn bằng cấp, bạn nghĩ sao?' },
        { speaker: 0, chinese: '两者都重要。做好职业规划对未来很有帮助！', pinyin: 'Liǎng zhě dōu zhòngyào. Zuò hǎo zhíyè guīhuà duì wèilái hěn yǒu bāngzhù!', vietnamese: 'Cả hai đều quan trọng. Lập kế hoạch nghề nghiệp tốt rất có ích cho tương lai!' }
      ]
    },

    /* L50 – Ước mơ và lý tưởng */
    L50: {
      title: 'Chia sẻ ước mơ', characters: ['Người trẻ A', 'Người trẻ B'],
      lines: [
        { speaker: 0, chinese: '你的梦想是什么？', pinyin: 'Nǐ de mèngxiǎng shì shénme?', vietnamese: 'Ước mơ của bạn là gì?' },
        { speaker: 1, chinese: '我的梦想是成为一名翻译家，沟通中越文化。', pinyin: 'Wǒ de mèngxiǎng shì chéngwéi yī míng fānyìjiā, gōutōng Zhōng Yuè wénhuà.', vietnamese: 'Ước mơ của tôi là trở thành phiên dịch viên, kết nối văn hóa Trung-Việt.' },
        { speaker: 0, chinese: '太棒了！努力就能实现梦想，加油！', pinyin: 'Tài bàng le! Nǔlì jiù néng shíxiàn mèngxiǎng, jiāyóu!', vietnamese: 'Tuyệt vời! Nỗ lực sẽ giúp hiện thực hóa ước mơ, cố lên!' },
        { speaker: 1, chinese: '谢谢！永远不要放弃你的理想，对吗？', pinyin: 'Xièxie! Yǒngyuǎn bù yào fàngqì nǐ de lǐxiǎng, duì ma?', vietnamese: 'Cảm ơn! Đừng bao giờ từ bỏ lý tưởng của bạn, phải không?' },
        { speaker: 0, chinese: '当然！每一个成功都来自坚持不懈的努力。', pinyin: 'Dāngrán! Měi yī gè chénggōng dōu lái zì jiānchí bù xiè de nǔlì.', vietnamese: 'Tất nhiên! Mỗi thành công đều đến từ sự nỗ lực không ngừng.' },
        { speaker: 1, chinese: '你的梦想是什么？你有什么计划吗？', pinyin: 'Nǐ de mèngxiǎng shì shénme? Nǐ yǒu shénme jìhuà ma?', vietnamese: 'Ước mơ của bạn là gì? Bạn có kế hoạch gì không?' },
        { speaker: 0, chinese: '相信自己，你一定能做到！我的梦想是做一名教师。', pinyin: 'Xiāngxìn zìjǐ, nǐ yīdìng néng zuò dào! Wǒ de mèngxiǎng shì zuò yī míng jiàoshī.', vietnamese: 'Hãy tin vào bản thân, bạn nhất định làm được! Ước mơ của tôi là làm giáo viên.' },
        { speaker: 1, chinese: '我们互相加油，共同实现梦想！', pinyin: 'Wǒmen hùxiāng jiāyóu, gòngtóng shíxiàn mèngxiǎng!', vietnamese: 'Chúng ta cùng cổ vũ nhau, cùng nhau hiện thực hóa ước mơ!' }
      ]
    }
  };

  /* ============================================================
     INJECT – Gắn dialogue vào LESSONS_DATA.shadowing
     ============================================================ */
  const allDialogues = Object.assign({}, dialoguesHSK1, dialoguesHSK2, dialoguesHSK3);

  if (typeof LESSONS_DATA !== 'undefined' && LESSONS_DATA.shadowing) {
    LESSONS_DATA.shadowing.forEach(function(lesson) {
      if (allDialogues[lesson.id]) {
        lesson.dialogue = allDialogues[lesson.id];
      }
    });
    console.log('[Dialogues] Injected', Object.keys(allDialogues).length, 'dialogues into LESSONS_DATA');
  } else {
    console.warn('[Dialogues] LESSONS_DATA not found – dialogues will load later...');
    // Retry after a short delay in case scripts load out of order
    setTimeout(function() {
      if (typeof LESSONS_DATA !== 'undefined' && LESSONS_DATA.shadowing) {
        LESSONS_DATA.shadowing.forEach(function(lesson) {
          if (allDialogues[lesson.id]) {
            lesson.dialogue = allDialogues[lesson.id];
          }
        });
        console.log('[Dialogues] Injected (retry)', Object.keys(allDialogues).length, 'dialogues');
      }
    }, 200);
  }
})();
