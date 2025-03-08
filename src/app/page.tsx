"use client"

import React from 'react';
import './globals.css' 
import SignIn from './components/SignIn';
import {useAuthState} from "react-firebase-hooks/auth"
import {auth} from "./firebase"
import Chat from "./components/Chat"


const App: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;  
  }

  if (error) {
    return <div>Error: {error.message}</div>; 
  }
  
  
  return (
    <div>
      {user ? <Chat /> : <SignIn /> }
    </div>
  );
}

export default App;
