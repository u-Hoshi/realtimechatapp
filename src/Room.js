import React,{useState,useEffect,useContext} from 'react'
import firebase from './config/firebase'
import 'firebase/firestore'
import { AuthContext } from './AuthService'

const Room = () => {
    const [messages, setMessages] = useState(null)
    const [value, setValue] = useState('')
    
    
     const user = useContext(AuthContext)

    firebase.firestore().collection("messages")
    useEffect(() => {
        firebase.firestore().collection("messages")
            .orderBy('date','desc').onSnapshot((snapshot) => {
                const messages = snapshot.docs.map(doc => {
                    return doc.data()
                })

                setMessages(messages)
            })
    }, [])
    const handleSubmit = e => {
        e.preventDefault()
        firebase.firestore().collection("messages")
            .add({
            content: value,
                user: user.displayName,
                date: new Date()
            })
            setMessages([
                ...messages,
                {
                    user: user.displayName,
                    email: user.email,
                    content: value
                }
            ])
        console.log(user.displayName)
    }

    return (
        <>
            <h1>Room</h1>
                <li>
                sample user : sample message
                </li>
            {
                messages ? messages.map(message => (
                    <li>{message.user}:{message.content}</li>
                )) :
                    <p>...loading</p>
            }
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    // value={value}
                    onChange={e =>
                    setValue(e.target.value)}
                />
                <button type='submit'>送信</button>
            </form>
            <button onClick={()=>firebase.auth().signOut()}>Logout</button>
        
        </>
    )
}

export default Room