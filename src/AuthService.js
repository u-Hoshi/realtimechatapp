import React, { useState,useEffect } from 'react'
import firebase from './config/firebase'

const AuthContext = React.createContext()

// 

var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;  
}

// 

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setUser(user)
        })
        
    }, [])
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}


export {AuthContext}
export default AuthProvider