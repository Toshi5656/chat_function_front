import { Button } from "@mui/material";
import React from 'react';
import { auth } from "../firebase";  
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

function SignIn() {
  // Google ログイン関数の型定義
  const signInWithGoogle = async (): Promise<void> => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Googleログインに失敗しました:", error);
    }
  };

  return (
    <div>
      <Button onClick={signInWithGoogle} variant="contained" color="primary">
        グーグルでログインする
      </Button>
    </div>
  );
}

export default SignIn;