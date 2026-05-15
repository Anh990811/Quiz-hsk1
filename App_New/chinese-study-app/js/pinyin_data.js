const PINYIN_INITIALS = [
    { id: 'b', name: 'b', type: 'Âm hai môi', note: 'Phát âm như chữ "p" trong tiếng Việt nhưng không bật hơi.' },
    { id: 'p', name: 'p', type: 'Âm hai môi', note: 'Phát âm như chữ "p" trong tiếng Việt nhưng bật hơi mạnh.' },
    { id: 'm', name: 'm', type: 'Âm hai môi', note: 'Phát âm giống chữ "m" trong tiếng Việt.' },
    { id: 'f', name: 'f', type: 'Âm môi răng', note: 'Phát âm giống chữ "ph" trong tiếng Việt.' },
    { id: 'd', name: 'd', type: 'Âm đầu lưỡi', note: 'Phát âm giống chữ "t" trong tiếng Việt, không bật hơi.' },
    { id: 't', name: 't', type: 'Âm đầu lưỡi', note: 'Phát âm giống chữ "th" trong tiếng Việt, bật hơi mạnh.' },
    { id: 'n', name: 'n', type: 'Âm đầu lưỡi', note: 'Phát âm giống chữ "n" trong tiếng Việt.' },
    { id: 'l', name: 'l', type: 'Âm đầu lưỡi', note: 'Phát âm giống chữ "l" trong tiếng Việt.' },
    { id: 'g', name: 'g', type: 'Âm cuống lưỡi', note: 'Phát âm giống chữ "c" hoặc "k" trong tiếng Việt, không bật hơi.' },
    { id: 'k', name: 'k', type: 'Âm cuống lưỡi', note: 'Phát âm giống chữ "kh" trong tiếng Việt, bật hơi mạnh.' },
    { id: 'h', name: 'h', type: 'Âm cuống lưỡi', note: 'Phát âm nằm giữa "h" và "kh" của tiếng Việt.' },
    { id: 'j', name: 'j', type: 'Âm mặt lưỡi', note: 'Phát âm giống chữ "ch" trong tiếng Việt, môi dẹt.' },
    { id: 'q', name: 'q', type: 'Âm mặt lưỡi', note: 'Phát âm giống "ch" nhưng bật hơi mạnh.' },
    { id: 'x', name: 'x', type: 'Âm mặt lưỡi', note: 'Phát âm giống chữ "x" trong tiếng Việt.' },
    { id: 'zh', name: 'zh', type: 'Âm uốn lưỡi', note: 'Phát âm giống chữ "tr" trong tiếng Việt, uốn lưỡi.' },
    { id: 'ch', name: 'ch', type: 'Âm uốn lưỡi', note: 'Phát âm giống "tr" nhưng bật hơi.' },
    { id: 'sh', name: 'sh', type: 'Âm uốn lưỡi', note: 'Phát âm giống chữ "s" trong tiếng Việt (âm nặng).' },
    { id: 'r', name: 'r', type: 'Âm uốn lưỡi', note: 'Phát âm giống chữ "r" nhưng không rung.' },
    { id: 'z', name: 'z', type: 'Âm đầu lưỡi trước', note: 'Phát âm giống "ch", không bật hơi, đầu lưỡi thẳng.' },
    { id: 'c', name: 'c', type: 'Âm đầu lưỡi trước', note: 'Phát âm giống "z" nhưng bật hơi mạnh.' },
    { id: 's', name: 's', type: 'Âm đầu lưỡi trước', note: 'Phát âm giống "x" nhưng đầu lưỡi chạm mặt sau răng cửa.' },
    { id: 'y', name: 'y', type: 'Bán âm', note: 'Đọc giống "i" hoặc "d".' },
    { id: 'w', name: 'w', type: 'Bán âm', note: 'Đọc giống "u" hoặc "w".' }
];

const PINYIN_FINALS = [
    { id: 'a', name: 'a', type: 'Vận mẫu đơn', note: 'Đọc như "a" trong tiếng Việt nhưng há miệng to hơn.' },
    { id: 'o', name: 'o', type: 'Vận mẫu đơn', note: 'Đọc giữa "ô" và "uo".' },
    { id: 'e', name: 'e', type: 'Vận mẫu đơn', note: 'Đọc lai giữa "ơ" và "ưa".' },
    { id: 'i', name: 'i', type: 'Vận mẫu đơn', note: 'Đọc như "i". Đi sau z, c, s, zh, ch, sh, r thì đọc là "ư".' },
    { id: 'u', name: 'u', type: 'Vận mẫu đơn', note: 'Đọc như "u".' },
    { id: 'ü', name: 'ü', type: 'Vận mẫu đơn', note: 'Tròn môi, đọc như "uy".' },
    { id: 'ai', name: 'ai', type: 'Vận mẫu kép', note: 'Đọc như "ai".' },
    { id: 'ei', name: 'ei', type: 'Vận mẫu kép', note: 'Đọc như "ây".' },
    { id: 'ui', name: 'ui', type: 'Vận mẫu kép', note: 'Đọc như "uây".' },
    { id: 'ao', name: 'ao', type: 'Vận mẫu kép', note: 'Đọc như "ao".' },
    { id: 'ou', name: 'ou', type: 'Vận mẫu kép', note: 'Đọc như "âu".' },
    { id: 'iu', name: 'iu', type: 'Vận mẫu kép', note: 'Đọc như "yêu".' },
    { id: 'ie', name: 'ie', type: 'Vận mẫu kép', note: 'Đọc như "ia".' },
    { id: 'üe', name: 'üe', type: 'Vận mẫu kép', note: 'Đọc như "uê".' },
    { id: 'er', name: 'er', type: 'Vận mẫu kép', note: 'Đọc "ơ" uốn lưỡi.' },
    { id: 'an', name: 'an', type: 'Vận mẫu mũi', note: 'Đọc như "an".' },
    { id: 'en', name: 'en', type: 'Vận mẫu mũi', note: 'Đọc như "ân".' },
    { id: 'in', name: 'in', type: 'Vận mẫu mũi', note: 'Đọc như "in".' },
    { id: 'un', name: 'un', type: 'Vận mẫu mũi', note: 'Đọc như "uân".' },
    { id: 'ün', name: 'ün', type: 'Vận mẫu mũi', note: 'Đọc như "uynh".' },
    { id: 'ang', name: 'ang', type: 'Vận mẫu mũi', note: 'Đọc như "ang".' },
    { id: 'eng', name: 'eng', type: 'Vận mẫu mũi', note: 'Đọc như "âng".' },
    { id: 'ing', name: 'ing', type: 'Vận mẫu mũi', note: 'Đọc như "inh".' },
    { id: 'ong', name: 'ong', type: 'Vận mẫu mũi', note: 'Đọc như "ung".' }
];

const PINYIN_COMBINATIONS = {
    'b': ['ba', 'bo', 'bai', 'bei', 'bao', 'ban', 'ben', 'bang', 'beng', 'bi', 'biao', 'bian', 'bin', 'bing', 'bu'],
    'p': ['pa', 'po', 'pai', 'pei', 'pao', 'pou', 'pan', 'pen', 'pang', 'peng', 'pi', 'piao', 'pian', 'pin', 'ping', 'pu'],
    'm': ['ma', 'mo', 'me', 'mai', 'mei', 'mao', 'mou', 'man', 'men', 'mang', 'meng', 'mi', 'miao', 'miu', 'mian', 'min', 'ming', 'mu'],
    'f': ['fa', 'fo', 'fei', 'fou', 'fan', 'fen', 'fang', 'feng', 'fu'],
    'd': ['da', 'de', 'dai', 'dei', 'dao', 'dou', 'dan', 'den', 'dang', 'deng', 'dong', 'di', 'diao', 'diu', 'dian', 'ding', 'du', 'duo', 'dui', 'duan', 'dun'],
    't': ['ta', 'te', 'tai', 'tao', 'tou', 'tan', 'tang', 'teng', 'tong', 'ti', 'tiao', 'tian', 'ting', 'tu', 'tuo', 'tui', 'tuan', 'tun'],
    'n': ['na', 'ne', 'nai', 'nei', 'nao', 'nou', 'nan', 'nen', 'nang', 'neng', 'nong', 'ni', 'niao', 'niu', 'nian', 'nin', 'niang', 'ning', 'nu', 'nuo', 'nuan', 'nü', 'nüe'],
    'l': ['la', 'le', 'lai', 'lei', 'lao', 'lou', 'lan', 'lang', 'leng', 'long', 'li', 'lia', 'liao', 'liu', 'lian', 'lin', 'liang', 'ling', 'lu', 'luo', 'luan', 'lun', 'lü', 'lüe'],
    'g': ['ga', 'ge', 'gai', 'gei', 'gao', 'gou', 'gan', 'gen', 'gang', 'geng', 'gong', 'gu', 'gua', 'guai', 'gui', 'guan', 'gun', 'guang'],
    'k': ['ka', 'ke', 'kai', 'kei', 'kao', 'kou', 'kan', 'ken', 'kang', 'keng', 'kong', 'ku', 'kua', 'kuai', 'kui', 'kuan', 'kun', 'kuang'],
    'h': ['ha', 'he', 'hai', 'hei', 'hao', 'hou', 'han', 'hen', 'hang', 'heng', 'hong', 'hu', 'hua', 'huai', 'hui', 'huan', 'hun', 'huang'],
    'j': ['ji', 'jia', 'jiao', 'jiu', 'jian', 'jin', 'jiang', 'jing', 'jiong', 'ju', 'jue', 'juan', 'jun'],
    'q': ['qi', 'qia', 'qiao', 'qiu', 'qian', 'qin', 'qiang', 'qing', 'qiong', 'qu', 'que', 'quan', 'qun'],
    'x': ['xi', 'xia', 'xiao', 'xiu', 'xian', 'xin', 'xiang', 'xing', 'xiong', 'xu', 'xue', 'xuan', 'xun'],
    'zh': ['zha', 'zhe', 'zhi', 'zhai', 'zhei', 'zhao', 'zhou', 'zhan', 'zhen', 'zhang', 'zheng', 'zhong', 'zhu', 'zhua', 'zhuai', 'zhui', 'zhuan', 'zhun', 'zhuang'],
    'ch': ['cha', 'che', 'chi', 'chai', 'chao', 'chou', 'chan', 'chen', 'chang', 'cheng', 'chong', 'chu', 'chua', 'chuai', 'chui', 'chuan', 'chun', 'chuang'],
    'sh': ['sha', 'she', 'shi', 'shai', 'shei', 'shao', 'shou', 'shan', 'shen', 'shang', 'sheng', 'shu', 'shua', 'shuai', 'shui', 'shuan', 'shun', 'shuang'],
    'r': ['re', 'ri', 'rao', 'rou', 'ran', 'ren', 'rang', 'reng', 'rong', 'ru', 'rua', 'rui', 'ruan', 'run'],
    'z': ['za', 'ze', 'zi', 'zai', 'zei', 'zao', 'zou', 'zan', 'zen', 'zang', 'zeng', 'zong', 'zu', 'zuo', 'zui', 'zuan', 'zun'],
    'c': ['ca', 'ce', 'ci', 'cai', 'cao', 'cou', 'can', 'cen', 'cang', 'ceng', 'cong', 'cu', 'cuo', 'cui', 'cuan', 'cun'],
    's': ['sa', 'se', 'si', 'sai', 'sao', 'sou', 'san', 'sen', 'sang', 'seng', 'song', 'su', 'suo', 'sui', 'suan', 'sun'],
    'y': ['ya', 'yao', 'you', 'yan', 'yang', 'yu', 'ye', 'yue', 'yuan', 'yi', 'yin', 'yun', 'ying', 'yong'],
    'w': ['wa', 'wo', 'wai', 'wei', 'wan', 'wen', 'wang', 'weng', 'wu']
};

const PINYIN_EXAMPLES = {
    'ba': '八 (bā)', 'bo': '波 (bō)', 'bai': '白 (bái)', 'bei': '杯 (bēi)', 'bao': '包 (bāo)',
};

// Hàm thêm dấu thanh điệu vào Pinyin
// tone: 1 (thanh 1), 2 (thanh 2), 3 (thanh 3), 4 (thanh 4), 0 hoặc 5 (khinh thanh)
function getPinyinWithTone(syllable, tone) {
    if (!tone || tone == 0 || tone == 5) return syllable;

    const toneMarks = {
        'a': ['ā', 'á', 'ǎ', 'à'],
        'o': ['ō', 'ó', 'ǒ', 'ò'],
        'e': ['ē', 'é', 'ě', 'è'],
        'i': ['ī', 'í', 'ǐ', 'ì'],
        'u': ['ū', 'ú', 'ǔ', 'ù'],
        'ü': ['ǖ', 'ǘ', 'ǚ', 'ǜ']
    };

    let targetChar = '';

    // Quy tắc đặt dấu thanh: a -> o -> e -> i/u (đặt vào chữ đứng sau)
    if (syllable.includes('a')) targetChar = 'a';
    else if (syllable.includes('o')) targetChar = 'o';
    else if (syllable.includes('e')) targetChar = 'e';
    else if (syllable.includes('iu')) targetChar = 'u';
    else if (syllable.includes('ui')) targetChar = 'i';
    else if (syllable.includes('i')) targetChar = 'i';
    else if (syllable.includes('u')) targetChar = 'u';
    else if (syllable.includes('ü')) targetChar = 'ü';

    if (targetChar) {
        return syllable.replace(targetChar, toneMarks[targetChar][tone - 1]);
    }

    return syllable;
}
