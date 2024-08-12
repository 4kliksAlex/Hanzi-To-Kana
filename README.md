![](https://upload.wikimedia.org/wikipedia/commons/f/fc/FlowRoot_alternate.png)

# 漢字到衍生假名轉換器

## 描述

Hanzi to Kana Converter 是一個可以將中文漢字替換爲衍生假名（如果有）的 Tampermonkey 腳本。它支援繁體和簡體中文漢字，並保留頁面的原始佈局和樣式。

## 如何安裝

1. 如果您的瀏覽器尚未安裝[Tampermonkey](https://www.tampermonkey.net/)擴充程序，請先安裝。
2. 開啟[腳本原始碼](hanziToKana.user.js)，點選`raw`按鈕。
3. Tampermonkey 會自動顯示安裝頁面。
4. 點選“安裝”按鈕安裝腳本。

## 用法

安裝並開啟後，該腳本將自動在網頁上執行。

## 自訂

您可以修改腳本中的對應對應以新增、刪除或變更轉換。映射儲存在以下`object`中：`tchineseHiragana`、`tchineseKatakana`、`schineseHiragana`、`schineseKatakana`。

## 限制

該腳本並非旨在轉換萬葉假名。

# Hanzi to Kana Converter

## Description

The Hanzi to Kana Converter is a Tampermonkey script that replaces Chinese characters (Hanzi) with their derivative Japanese kanas, if available. It supports both Traditional and Simplified Chinese characters.

## Features

- Works on the entire web page content
- Preserves original layout and styling of the page

## How to install

1. If you haven't installed the [Tampermonkey](https://www.tampermonkey.net/) extension on your browser, please install it first.
2. Open [script source code](hanziToKana.user.js), click on the `raw` button.
3. Tampermonkey will automatically display the installation page.
4. Click the "Install" button to install the script.

## Usage

Once installed, the script will automatically run on all web pages.

## Customization

You can modify the character mappings in the script to add, remove, or change the conversions. The mappings are stored in the following objects: `tchineseHiragana`, `tchineseKatakana`, `schineseHiragana`, `schineseKatakana`.

## Limitations

The script is NOT meant to convert Man'yōgana to kana.

Feel free to fork this project and submit pull requests with improvements.

## Disclaimer

This script is provided as-is, without any guarantees.

# 漢字から派生仮名への変換

## 概要

Hanzi to Kana Converter は、Web ページ上の漢字を可能な場合は派生したかな文字に置き換える Tampermonkey スクリプトです。

## 特徴

- 中国語の文字（繁体字と簡体字）を、その派生語である日本語の仮名文字に変換します。
- ひらがなとカタカナの両方に対応

## インストール方法

1. ブラウザに [Tampermonkey](https://www.tampermonkey.net/) 拡張機能をインストールしていない場合は、まずインストールしてください。
2. [スクリプト ソース コード](hanziToKana.user.js) を開き、`Raw` ボタンをクリックします。
3. Tampermonkey によってインストール ページが自動的に表示されます。
4. [インストール] ボタンをクリックしてスクリプトをインストールします。

## 使用方法

インストール後、スクリプトは自動的に有効になります。ウェブページを開くと、対応する漢字が自動的に仮名に変換されます。

## 対応漢字

スクリプトは、日本語の仮名の起源となった特定の漢字のみを変換します。すべての漢字が変換されるわけではありません。

## 注意事項

- このスクリプトは、ウェブページの表示を変更するだけで、元のコンテンツを改変することはありません。
- 一部のウェブサイトでは、デザインや機能に影響を与える可能性があります。

## 貢献

バグの報告や新機能の提案は、GitHub の Issue セクションで行ってください。プルリクエストも歓迎します。( •̀ ω •́ )✧

## 作者

[4kliksAlex](https://github.com/4kliksAlex/)
