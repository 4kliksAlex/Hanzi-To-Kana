// ==UserScript==
// @name         Hanzi to Kana Converter
// @namespace    https://4kliksAlex.github.com/
// @version      0.1.0
// @description  Replace Kana on web pages with the origin Hanzi of them.
// @author       4kliksAlex
// @match        *://*/*
// @icon         data:image/png;base64,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
// @grant        none
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
