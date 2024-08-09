# 汉字到衍生假名转换器

## 描述

Hanzi to Kana Converter 是一个可以用衍生的日文假名（如果有）中文汉字的 Tampermonkey 脚本。它支援繁体和简体中文汉字，并保留页面的原始布局和样式。

## 如何安装

1. 如果您的浏览器尚未安装[Tampermonkey](https://www.tampermonkey.net/)扩充程序，请先安装。
2. 开启[脚本源码](hanziToKana.user.js)，点选`raw`按钮。
3. Tampermonkey 会自动显示安装页面。
4. 点选「安装」按钮安装脚本。

## 用法

安装并开启后，该脚本将自动在网页上执行。

## 自定义

您可以修改脚本中的映射对应以新增、删除或变更转换。映射储存在以下`object`中：`tchineseHiragana`、`tchineseKatakana`、`schineseHiragana`、`schineseKatakana`。

## 限制

该脚本并非旨在将万叶假名转换。
