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






// import { Button } from "@mui/material";
// import React from "react";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { app } from "../firebase";  // Firebase初期化設定をインポート

// function SignIn() {
//   function signInWithGoogle() {
//     const auth = getAuth(app);  // FirebaseアプリからAuthインスタンスを取得
//     const provider = new GoogleAuthProvider();  // Google認証プロバイダを作成
//     signInWithPopup(auth, provider)  // signInWithPopupを新しい形で使用
//       .then((result) => {
//         console.log("サインイン成功:", result.user);
//       })
//       .catch((error) => {
//         console.error("サインインエラー:", error);
//       });
//   }

//   return (
//     <div>
//       <Button onClick={signInWithGoogle}>グーグルでログインする</Button>
//     </div>
//   );
// }

// export default SignIn;