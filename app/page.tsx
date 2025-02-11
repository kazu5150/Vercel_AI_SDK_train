"use client";

import { useChat } from 'ai/react';

export default function Home() {
  // AI SDK UI のuseChatフックを使ってチャット機能を取得
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat', // APIルートを指定（デフォルトも同じ）
  });

  return (
    <div style={{
      width: '100vw', // 幅を画面全体に設定
      height: '100vh', // 高さを画面全体に設定
      margin: '0', // 余白をなくす
      padding: '20px',
      backgroundImage: 'url(/space-background2.jpg)', // 宇宙の画像を設定
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center', // 中央に配置
    }}>
      <h1 style={{
        textAlign: 'center',
        marginBottom: '20px',
        fontSize: '3em', // フォントサイズを大きく
        fontWeight: 'bold', // 太字にする
      }}>
        Better than Nothing
      </h1>

      {/* チャット履歴を表示 */}
      <div style={{
        width: '80%', // チャットボックスの幅を調整
        maxWidth: '600px',
        minHeight: '200px',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        padding: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        overflowY: 'auto',
        marginBottom: '20px',
      }}>
        {messages.map((m) => (
          <div key={m.id} style={{ marginBottom: '8px' }}>
            <strong>{m.role === 'user' ? 'You: ' : 'AI: '}</strong>
            {m.content}
          </div>
        ))}
      </div>

      {/* 入力フォーム */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', width: '80%', maxWidth: '600px' }}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="メッセージを入力..."
          style={{
            flex: 1,
            marginRight: '5px',
            padding: '10px',
            color: 'black',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            borderRadius: '4px',
          }}
        />
        <button type="submit" style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}>送信</button>
      </form>
    </div>
  );
}