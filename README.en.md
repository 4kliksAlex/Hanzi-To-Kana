# Hanzi to derived Kana Converter

## Description

Hanzi to Kana Converter is a Tampermonkey script that converts Chinese characters to derived Japanese kana (if available). It supports both Traditional and Simplified Chinese characters and preserves the original layout and style of the page.

## How to install

1. If your browser does not have the [Tampermonkey](https://www.tampermonkey.net/) extension installed, please install it first.

2. Open the [script source](hanziToKana.user.js) and click the `raw` button.

3. Tampermonkey will automatically display the installation page.

4. Click the "Install" button to install the script.

## Usage

Once installed and opened, the script will automatically execute on the web page.

## Customization

You can modify the mappings in the script to add, delete or change conversions. The mappings are stored in the following `object`: `tchineseHiragana`, `tchineseKatakana`, `schineseHiragana`, `schineseKatakana`.

## Limitations

This script is not intended to convert Manyo-gana.