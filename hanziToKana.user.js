// ==UserScript==
// @name         汉字到衍生假名转换器 漢字から派生仮名への変換 Hanzi to derived Kana Converter
// @name:en      Hanzi to derived Kana Converter
// @name:zh-CN   漢字到衍生假名轉換器
// @name:zh-TW   汉字到衍生假名转换器
// @name:ja      漢字から派生仮名への変換
// @namespace    https://4kliksAlex.github.com/
// @version      0.1.1
// @description  Replace Hanzis on web pages with the derived Kanas of them.
// @author       4kliksAlex
// @match        *://*/*
// @icon         https://raw.githubusercontent.com/4kliksAlex/Hanzi-To-Kana/main/icon.png
// @grant        none
// @liscense     GPLv3
// ==/UserScript==

(function() {
    'use strict';
    const tchineseHiragana = {
      "安": "あ", "以": "い", "宇": "う", "衣": "え", "於": "お",
      "加": "か", "幾": "き", "久": "く", "計": "け", "己": "こ",
      "左": "さ", "之": "し", "寸": "す", "世": "せ", "曽": "そ",
      "太": "た", "知": "ち", "川": "つ", "天": "て", "止": "と",
      "奈": "な", "仁": "に", "奴": "ぬ", "祢": "ね", "乃": "の",
      "波": "は", "比": "ひ", "不": "ふ", "部": "へ", "保": "ほ",
      "末": "ま", "美": "み", "武": "む", "女": "め", "毛": "も",
      "也": "や", "由": "ゆ", "与": "よ",
      "良": "ら", "利": "り", "留": "る", "礼": "れ", "呂": "ろ",
      "和": "わ", "為": "ゐ", "恵": "ゑ", "遠": "を",
      "无": "ん"
    };
    const tchineseKatakana = {
      "阿": "ア", "伊": "イ", "宇": "ウ", "江": "エ", "於": "オ",
      "加": "カ", "幾": "キ", "久": "ク", "介": "ケ", "己": "コ",
      "散": "サ", "之": "シ", "須": "ス", "世": "セ", "曽": "ソ",
      "多": "タ", "千": "チ", "川": "ツ", "天": "テ", "止": "ト",
      "奈": "ナ", "二": "ニ", "奴": "ヌ", "祢": "ネ", "乃": "ノ",
      "八": "ハ", "比": "ヒ", "不": "フ", "部": "ヘ", "保": "ホ",
      "万": "マ", "三": "ミ", "牟": "ム", "女": "メ", "毛": "モ",
      "也": "ヤ", "由": "ユ", "与": "ヨ",
      "良": "ラ", "利": "リ", "流": "ル", "礼": "レ", "呂": "ロ",
      "和": "ワ", "乎": "ヲ",
      "尓": "ン"
    };
    const schineseHiragana = {
      "安": "あ", "以": "い", "宇": "う", "衣": "え", "于": "お",
      "加": "か", "几": "き", "久": "く", "计": "け", "己": "こ",
      "左": "さ", "之": "し", "寸": "す", "世": "せ", "曽": "そ",
      "太": "た", "知": "ち", "川": "つ", "天": "て", "止": "と",
      "奈": "な", "仁": "に", "奴": "ぬ", "祢": "ね", "乃": "の",
      "波": "は", "比": "ひ", "不": "ふ", "部": "へ", "保": "ほ",
      "末": "ま", "美": "み", "武": "む", "女": "め", "毛": "も",
      "也": "や", "由": "ゆ", "与": "よ",
      "良": "ら", "利": "り", "留": "る", "礼": "れ", "吕": "ろ",
      "和": "わ", "为": "ゐ", "恵": "ゑ", "远": "を",
      "无": "ん"
    };
    const schineseKatakana = {
      "阿": "ア", "伊": "イ", "宇": "ウ", "江": "エ", "于": "オ",
      "加": "カ", "几": "キ", "久": "ク", "介": "ケ", "己": "コ",
      "散": "サ", "之": "シ", "须": "ス", "世": "セ", "曽": "ソ",
      "多": "タ", "千": "チ", "川": "ツ", "天": "テ", "止": "ト",
      "奈": "ナ", "二": "ニ", "奴": "ヌ", "祢": "ネ", "乃": "ノ",
      "八": "ハ", "比": "ヒ", "不": "フ", "部": "ヘ", "保": "ホ",
      "万": "マ", "三": "ミ", "牟": "ム", "女": "メ", "毛": "モ",
      "也": "ヤ", "由": "ユ", "与": "ヨ",
      "良": "ラ", "利": "リ", "流": "ル", "礼": "レ", "吕": "ロ",
      "和": "ワ", "乎": "ヲ",
      "尔": "ン"
    };
    const hanziToKanaMap = new Map([
      ...Object.entries(tchineseKatakana),
      ...Object.entries(tchineseHiragana),
      ...Object.entries(schineseKatakana),
      ...Object.entries(schineseHiragana),
    ]);

    function replaceHanziWithKana(text) {
      return text.split('').map(char => hanziToKanaMap.get(char) || char).join('');
    }

    function traverseAndReplace(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        node.nodeValue = replaceHanziWithKana(node.nodeValue);
      } else {
        node.childNodes.forEach(traverseAndReplace);
      }
    }

    traverseAndReplace(document.body);
})();
