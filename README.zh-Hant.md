# 漢字到衍生假名轉換器

## 描述

Hanzi to Kana Converter 是一個可以用衍生的日文假名（如果有）中文漢字的 Tampermonkey 腳本。它支援繁體和簡體中文漢字，並保留頁面的原始佈局和樣式。

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

該腳本並非旨在將萬葉假名轉換。