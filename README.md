# oomc_fun

これは [Add-Ons for Bedrock Edition](https://www.minecraft.net/addons/) について学ぶための、実験的なプロジェクトです。  
いくつかのゲーム要素を追加します。

[![The BP Factory](https://img.youtube.com/vi/1fsmc1dIYQs/0.jpg)](https://www.youtube.com/watch?v=1fsmc1dIYQs)

**このアドオンは、公式とは関係ありません。**

**このアドオンに登場するものは、架空のものです。実在のものとは関係ありません。**

## Supported Locales

- en_US
- ja_JP

## Setup Addon

[アドオンのセットアップ | Setup Addon](docs/setup_addon.md)

## Gameplay

[ゲームプレイ | Gameplay](docs/play_addon.md)

## Build

- [Node.js](https://nodejs.org/) >= 14

- バージョン番号を上げる場合は、[package.json](./package.json) の
  `version` フィールドを書き換えたうえで、ビルドを行います。
  アドオンの `manifest.json` が自動的に更新されます。

```
npm install
npm run build
```

## Libraries

- [see dependencies](./package.json)
