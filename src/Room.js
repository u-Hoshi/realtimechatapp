import React, { useState, useEffect, useContext } from 'react';
import firebase from './config/firebase';
import 'firebase/firestore';
import { AuthContext } from './AuthService';
import ChatItem from './ChatItem';
import shortid from 'shortid';

const Room = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState('');

  const user = useContext(AuthContext);

  
  useEffect(() => {
    firebase.firestore().collection('messages');
    firebase
      .firestore()
      .collection('messages').orderBy("createdAt")
      .onSnapshot((snapshot) => {
       const messages = snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
       });
        setMessages(messages);
      });
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.firestore().collection('messages').add({
      content: value,
      user: user.displayName,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
      .then(() => {
        console.log("追加成功")
      }).catch(() => {
      console.log("追加失敗")
    })
    setMessages([
      ...messages,
      {
        user: user.displayName,
        content: value,
      },
    ]);
  };

  return (
    <>
      <h1>Room</h1>
      <li>sample user : sample message</li>
      <div>

      {messages.map((message) => {
        return (
          <ChatItem
            key={message.id}
            username={message.user}
            body={message.content}
          />
        )
      })}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <button type="submit">送信</button>
      </form>
      <button onClick={() => firebase.auth().signOut()}>Logout</button>
    </>
  );
};

export default Room;
