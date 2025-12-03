# we labo Website

shadcn/ui と Next.js を使用した we labo のブランドサイト。

## セットアップ

```bash
npm install
```

## 開発サーバーの起動

```bash
npm run dev
```

http://localhost:3001 でアクセスできます。

## 使用技術

- Next.js 15 (App Router)
- Tailwind CSS
- shadcn/ui
- Lucide React (Icons)
- Google Fonts (Playfair Display, Shippori Mincho)

## コンテンツ参照元

- `welabo/scraping/index.md` およびその他のスクレイピングデータ

## GitHub と Vercel の使い方

### 基本的なワークフロー

1. **コードを編集** → ファイルを変更
2. **変更をコミット・プッシュ** → GitHubに反映
3. **自動デプロイ** → Vercelが自動的にビルド・デプロイ

### Git コマンド

#### 変更を確認
```bash
git status
```

#### 変更をステージング
```bash
git add .
# または特定のファイルのみ
git add app/shopping/page.tsx
```

#### コミット
```bash
git commit -m "変更内容の説明"
```

#### プッシュ
```bash
git push
```

#### 一括でコミット・プッシュ
```bash
git add .
git commit -m "変更内容の説明"
git push
```

### Vercel デプロイ

- **自動デプロイ**: GitHubにプッシュすると、Vercelが自動的にデプロイを開始します
- **デプロイ時間**: 通常1〜3分程度
- **確認方法**: [Vercel ダッシュボード](https://vercel.com) の「Deployments」タブで確認

### デプロイURL

- **本番環境**: `welabo-site.vercel.app`
- **プレビュー環境**: 各ブランチごとに自動生成されるURL

### トラブルシューティング

#### ビルドエラーが発生した場合
1. ローカルで `npm run build` を実行してエラーを確認
2. エラーを修正
3. 再度コミット・プッシュ

#### キャッシュの問題
```bash
# .next フォルダを削除して再ビルド
rm -rf .next
npm run dev
```

#### TypeScriptエラー
- エディタで「TypeScript: Restart TS Server」を実行
- エディタを再起動

## プロジェクト構成

```
welabo/site/
├── app/                    # Next.js App Router
│   ├── shopping/          # ショッピングページ
│   ├── products/          # 商品ページ
│   └── ...
├── components/            # React コンポーネント
│   ├── site-header.tsx    # ヘッダー
│   ├── site-footer.tsx    # フッター
│   └── ui/                # shadcn/ui コンポーネント
└── lib/                   # ユーティリティ
    └── context/           # React Context（カート機能など）
```
