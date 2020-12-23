import firebase from 'firebase/app';
import 'firebase/auth'

const firebaseConfig={
    apiKey: "AIzaSyCmhBAsNQAZfqzrtcV6DyEAW1B-zmRMfms",
    authDomain: "chatapp-e0fad.firebaseapp.com",
    projectId: "chatapp-e0fad",
    storageBucket: "chatapp-e0fad.appspot.com",
    messagingSenderId: "1060407826406",
    appId: "1:1060407826406:web:1faccd18d27ac7cae4a827"
}

firebase.initializeApp(firebaseConfig)
export default firebase
