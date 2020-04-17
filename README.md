# プチゲーム作成用ベース (TypeScriptバージョン)

## 更新履歴

[CHANGELOG.md](https://guava.marietta.co.jp/p-game/pgame-base-ts/blob/master/CHANGELOG.md) を参照

## プロジェクトの概要

js でのプチゲーム開発の環境を **なるべく** そのまま TypeScript化 しました。

プロジェクトの主なディレクトリとファイルは以下のような構造になっている。

```
.
├── build_dev/
├── build_prod/
│
├── jsgame/
│   ├── images_pc/
│   └── images_sp/
│
├── src/
│   ├── scene/
│   │   ├── game/
│   │   │   └── scene-game.ts
│   │   ├── result/
│   │   │   └── scene-result.ts
│   │   ├── top/
│   │   │   └── scene-top.ts
│   │   ├── scene-name.ts
│   │   └── scene.ts
│   │
│   ├── game-manager.ts
│   ├── game.ts
│   ├── main.js
│   └── pgame_canvas.d.ts
│
├── pgame_canvas_pc.fla
├── pgame_canvas_pc.html
├── pgame_canvas_pc.js
├── pgame_canvas_sp.fla
├── pgame_canvas_sp.html
├── pgame_canvas_sp.js
│
├── pgame_sp.html
├── pgame_sp.html
│
├── package.json
├── tsconfig.json
├── webpack.config.dev.js
└── webpack.config.prod.js

10 directories, 18 files

```

### 説明

- `build_dev/` : 初期状態では存在しない。ビルドが行われたタイミングで生成される。テスト用のデプロイに使用する。
- `build_prod/` : 初期状態では存在しない。ビルドが行われたタイミングで生成される。本番用のデプロイに使用する。
- `jsgame/` : Animate で使用した画像の書き出し場所。 (jsバージョンと一緒)
- `src/` : TypeScript のソースを入れて置く場所。
    - `scene/` : シーンクラスを格納している場所。
        - `game/`
            - `scene-game.ts` : シーンクラスを継承したクラス。
        - `result/`
            - `scene-result.ts` : シーンクラスを継承したクラス。
        - `top/`
            - `scene-top.ts` : シーンクラスを継承したクラス。
        - `scene-name.ts` : シーンを呼び出す際の名前を管理する Enum。**(注) シーンを追加したときには追記すること。**
        - `scene.ts` : シーンクラス
    - `game-manager.ts` : ゲームマネージャ
    - `game.ts` : ゲームクラス
    - `main.js` : ゲームクラスをグローバル展開するためのjs。
    - `pgame_canvas.d.ts` : `pgame_canvas_*.js` の型定義ファイル。
- `pgame_canvas_*.fla` : Animate で使用するファイル。
- `pgame_canvas_*.html` : Animate が書き出すファイル。
- `pgame_canvas_*.js` : Animate が書き出すファイル。
- `pgame_pc.html` : ローカル開発用 HTML
- `pgame_sp.html` : ローカル開発用 HTML
- `package.json` : npm の設定ファイル。
- `tsconfig.json` : TypeScript の設定ファイル。
- `webpack.config.*.js` : webpack の設定ファイル

## プチゲーム開発手順

### 開発の開始

1. 以下のURLから最新のソース一式をダウンロードする。
    - url : https://guava.marietta.co.jp/p-game/pgame-base-ts/-/archive/master/pgame-base-ts-master.zip
1. 好きな場所に展開する
1. `package.json` の `name`, `version`, `description` を変更する。
    - 例 : `"name" : "iroyomi"`, `"version" : "1.0.0"`, `"description" : "いろよみ"`
1. コマンド `npm install` を実行

### ローカルでの開発

1. コマンド `npm run start` を実行 (開発用のローカルサーバが立ち上がる)
    - url : http://localhost:3000
1. pc 版デバッグなら `pgame_pc.html`, sp 版デバッグなら `pgame_sp.html` をクリックする
1. ソースコードをいじって保存する
1. ブラウザをリロードする

### sv1 の _user 等にアップロードする

1. `npm run build-dev` を実行
1. ディレクトリ `build_dev/` 以下をアップしたいところに貼り付ける

### テストサーバ、本番サーバへのアップ

1. `npm run build-prod` を実行
1. ディレクトリ `build_prod/` 以下をアップしたいところに貼り付ける
