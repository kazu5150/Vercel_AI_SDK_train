This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

# Better than Nothing

このプロジェクトは、Next.js をベースにしたチャットアプリケーションです。  
「ai/react」パッケージの useChat フックを活用し、OpenAI の GPT-3.5 を利用してリアルタイムでチャット応答を生成・表示します。  
また、Tailwind CSS を使ったスタイリッシュな UI や、レスポンシブデザインを取り入れており、どのデバイスでも快適にご利用いただけます。

## 特徴

- **Next.js セットアップ**  
  Next.js の最新機能を活用したシングルページアプリケーション。

- **リアルタイムチャット**  
  useChat フックを利用し、ユーザーの入力に対してチャット応答をストリーミング表示。

- **OpenAI GPT-3.5 の活用**  
  最新の AI モデルを用いた自然な対話体験を実現。

- **モダンな UI デザイン**  
  Tailwind CSS を活用し、直感的で快適なユーザーインターフェースを提供。

## 開発の始め方

以下の手順でプロジェクトをセットアップし、ローカルサーバーを起動してください。

1. プロジェクトのクローン

```bash
git clone https://github.com/yourusername/better-than-nothing.git
cd better-than-nothing
```


2. 依存パッケージのインストール

```bash
npm install
```

3. 開発サーバーの起動

```bash
npm run dev
```

4. ブラウザでアクセス

```bash
http://localhost:3000
```

## プロジェクトの構成

### ファイル構造

my-ai-project/
├── app/

    ├── page.tsx
    ├── layout.tsx
    ├── api/
    │ └── chat.ts
    └── components/
        ├── Chat.tsx
        └── Message.tsx 

### コードの概要

#### app/page.tsx

    チャット画面のコンポーネント。
    チャット履歴を表示し、ユーザーの入力を受け取り、API リクエストを送信して応答を受け取ります。
    ストリーミングで応答を表示し、ユーザーの入力をリアルタイムで処理します。

#### app/layout.tsx

    アプリケーションのレイアウトを定義します。
    チャット画面のレイアウトを設定し、ヘッダーとフッターを含めます。

#### app/api/chat.ts

    チャット API のルートハンドラー。
    ユーザーの入力を受け取り、OpenAI の GPT-3.5 モデルを使用して応答を生成します。

#### app/components/Chat.tsx

    チャット履歴を表示するコンポーネント。
    メッセージの表示、ユーザーの入力フィールド、送信ボタンを含めます。

#### app/components/Message.tsx

    チャットメッセージを表示するコンポーネント。
    ユーザーのメッセージと AI の応答を表示します。

