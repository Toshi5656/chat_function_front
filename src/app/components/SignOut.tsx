import { Button } from '@mui/material'
import {auth} from "../firebase"
import React from 'react'
import CallIcon from "@mui/icons-material/Call"

function SignOut() {
  // サインアウト関数
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("サインアウトに失敗しました:", error);
    }
  };

  return (
    <div className="header">
      <Button
        style={{ color: "white", fontSize: "15px" }}  // fontsize → fontSize に修正
        onClick={handleSignOut}  // 非同期処理
      >
        サインアウト
      </Button>
      {/* displayName が null なら "ゲスト" を表示 */}
      <h3>{auth.currentUser?.displayName ?? "ゲスト"}</h3>
      <CallIcon />
    </div>
  );
}

export default SignOut;
