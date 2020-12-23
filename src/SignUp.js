import React, { useState } from 'react'
import firebase from './config/firebase'

const SignUp = () => {
    const [email ,setEmail] = useState('')
    const [password ,setPassword]= useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('email:', email)
        console.log('password', password)
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(err => {
                console.log('error:',err)
            })
    }
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        name='email'
                        type='email'
                        id='email'
                        placeholder='Email'
                        onChange={e => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        name='password'
                        type='password'
                        id='password'
                        placeholder='Password'
                        onChange={e => {
                            setPassword(e.target.value)
                        }}
                    />
                </div>
                    <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}
export default SignUp