'use client'

import React, {useEffect, useState} from 'react'
import SignOut from './SignOut';
import {db, auth} from "../firebase"
import SendMessage from './SendMessage';
import { collection, query, orderBy, limit, onSnapshot, DocumentData } from 'firebase/firestore';

interface Message {
    id: string;
    text: string;
    photoURL: string;
    uid: string;
  }
  
  function Chat() {
    const [messages, setMessages] = useState<Message[]>([]);  // 型定義
  
    useEffect(() => {
      const messagesRef = collection(db, 'messages');
      const q = query(messagesRef, orderBy('createdAt'), limit(50));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Message)));
      });
  
      return () => unsubscribe();  // クリーンアップ: リアルタイム更新解除
    }, []);
  
    return (
      <div>
        <SignOut />
        <div className="msgs">
          {messages.map(({ id, text, photoURL, uid }) => (
            <div key={id}  // key を直接設定
              className={`msg ${uid === auth.currentUser?.uid ? 'sent' : 'received'}`}>
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          ))}
        </div>
        <SendMessage />
      </div>
    );
  }
  
  export default Chat;