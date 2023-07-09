# personal-website

# :grey_question:Personal Website
作成したアプリや建築デザイン、ブログ記事などを公開するための個人サイトです。
## :globe_with_meridians:Url
https://personal-website-khkmgch.vercel.app/
## :desktop_computer:Demo
![personal-website](https://github.com/khkmgch/personal-website/assets/101968115/5b102406-932c-4920-abd2-6d98af79aa5a)

## :eyes:作成理由

#### 活動を公開するため
個人の活動を記録、公開するための場所が欲しくて作成しました。

## :clock3:期間
2023年6月下旬の２週間

## :joystick:機能


## :hammer_and_wrench:使用技術
### フロントエンド
- NextJS
- Typescript
- Tailwind CSS

### ホスティング
- Vercel

## 📗それぞれの技術の採用理由

### Typescript
  - これまでJavascriptで開発しており、型のあるTypesciptで書いてみたかった
  - 継続的に開発する際には型がある方が管理しやすいと考えた

### NextJS
- 簡単にセットアップでき、新しいプロジェクトの立ち上げを素早く行える。
- ダイナミックなルーティングやネストされたルーティングを簡単に設定することができる。
- 今回はマークダウンファイルのデータを使うため、SSGを使って高速なページ遷移を可能にしたかった。

### Tailwind CSS
- 色や線などの細かい設定が可能
  
## :pushpin:特にこだわった箇所
### ページ遷移の速度
NextJSのSSGを用いて、高速なページ遷移を可能にしました。

[該当するコード]
- [getBooksRecommendedByAI()](../server/src/book/book.service.ts) (73行目)
- [テキスト解析](../server/src/book/utils/nlp.util.ts)
- [GPT](../server/src/chatgpt/chatgpt.service.ts)
### Pdfファイルの閲覧
Pdfファイルを表示させたかったため、react-pdfライブラリを活用しました。

[該当するコード]
- [疑問と本を紐づけするコード](../server/src/question/question.controller.ts) (96行目)

### Contactフォーム
web3ライブラリを使用して、フォームからメールで問い合わせできるように実装しました。

[該当するコード]
- [BookShelfコンポーネント](../client/components/book/BookShelf.tsx)

## :muscle:苦労した点

## :pencil2:今後の改良点
### ①ブログ記事を公開
microCMSを使って、Qiitaに投稿している記事を移設する予定です。
その際に、シンタックスハイライトを適用させるように実装したいです。

