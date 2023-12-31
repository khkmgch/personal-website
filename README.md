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
  - 継続的に開発する際には型がある方が管理しやすいと考えた

### NextJS
- 簡単にセットアップでき、新しいプロジェクトの立ち上げを素早く行える。
- ダイナミックなルーティングやネストされたルーティングを簡単に設定することができる。
- 今回はマークダウンファイルのデータを使うため、SSGを使って高速なページ遷移を可能にしたかった。
- Next/Imageにより、画像ファイルの最適化ができる。
- １つのファイルにバンドルせず、コード分割することで、アプリケーションの初期ロード時間を短縮できる。

### Tailwind CSS
- Bootstrapのような既定のデザインに依存せず、カスタマイズが柔軟にできる。
- カラーパレットやボーダースタイルなどを細かく調整しやすい。
  
## :pushpin:特にこだわった箇所
### ユーザーエクスペリエンス
#### ページ遷移の速度
NextJSのStatic Site Generation(SSG)を用いて、ビルド時にHTMLを生成しておくことで高速なページ遷移を可能にしました。

[該当するコード]
- [Work](./pages/work/[...slug].tsx)
- [Home](./pages/index.tsx)

※ 参考資料  
https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation

#### 動的インポート
ページ表示速度のパフォーマンスを考慮し、後述するPdfViewerコンポーネントを動的に読み込むようにしました。

※ 参考資料 
https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading

### Pdfファイルの閲覧
Pdfファイルを表示させるため、react-pdfライブラリを活用しました。  
全てのページを表示するためのコンポーネントとして、PdfViewerを作成しました。

[該当するコード]
- [PdfViewer](./components/PdfViewer.tsx) 

### デザイン
- 絵が展示してあるようなデザイン/レイアウトにしました。
- レスポンシブ対応しています。

### Contactフォーム
web3formsライブラリを使用して、フォームからメールで問い合わせできるように実装しました。

[該当するコード]
- [Contact](./pages/contact/index.tsx)

## :muscle:苦労した点

## :pencil2:今後の改良点
### ①ブログ記事を公開
microCMSを使って、Qiitaに投稿している記事を移設する予定です。
その際に、シンタックスハイライトを適用させるように実装したいです。

