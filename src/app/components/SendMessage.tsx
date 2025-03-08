import React, { useState } from 'react';
import { db, auth } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function SendMessage() {
  const [message, setMessage] = useState<string>("");

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    // currentUser が存在しない場合のガード
    if (!auth.currentUser) {
      console.error("ユーザーが認証されていません");
      return;
    }

    const { uid, photoURL } = auth.currentUser;

    try {
      await addDoc(collection(db, 'messages'), {
        text: message,
        photoURL,
        uid,
        createdAt: serverTimestamp(),  // serverTimestamp の利用
      });
      setMessage("");  // 送信後に入力をクリア
    } catch (error) {
      console.error("メッセージ送信に失敗しました:", error);
    }
  };

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            style={{
              width: '78%',
              fontSize: '15px',
              fontWeight: '550',
              marginLeft: '5px',
              marginBottom: '-3px',
            }}
            placeholder="メッセージを入力してください"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <SendIcon style={{ color: '#7AC2FF', marginLeft: '20px', cursor: 'pointer' }} />
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
