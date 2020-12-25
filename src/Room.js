import React,{useState,useEffect,useContext} from 'react'
import firebase from './config/firebase'
import 'firebase/firestore'
import { AuthContext } from './AuthService'
import chat from './Chat'

const Room = () => {
    const [messages, setMessages] = useState(null)
    const [value, setValue] = useState('')
    
    useEffect(() => {
        firebase.firestore().collection('messages')
            .onSnapshot((snapshot) => {
                const messages = snapshot.docs.map(doc => {
                    return doc.data()
                })

                setMessages(messages)
            })
    },[])

    const user = useContext(AuthContext)
    
    const handleSubmit = (messages) => {
        firebase.firestore().collection(messages).add({
            content: value,
            user: user.displayName
        })
    }

    return (
        <>
            <h1>Room</h1>
            <ul>
                <li>
                    sample user : sample message
                </li>
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={value}
                    onChange={e =>
                    setValue(e.target.value)}
                />
                <button type='submit'>送信</button>
            </form>
            <button onClick={()=>firebase.auth().signOut()}>Logout</button>
            <ul>
            {
                messages.map((chat) => {
                    return (
                        <chat
                            content={chat.content}
                            
                        />
                    )
                })
            }
            </ul >
        </>
    )
}

export default Room