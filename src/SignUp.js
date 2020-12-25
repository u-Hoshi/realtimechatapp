import React, { useContext, useState } from 'react'
import firebase from './config/firebase'
import { AuthContext } from './AuthService'

const SignUp = () => {
    const [email ,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name,setName]= useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
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
                    <label htmlFor='name'>Name</label>
                    <input
                        name='name'
                        type='name'
                        id='name'
                        placeholder='Name'
                        onChange={e => {
                            setName(e.target.value)
                        }}
                        />

                </div>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        name='email'
                        type='email'
                        id='email'
                        placeholder='Email'
                        onChange={e => {
                            setEmail(e.target.value)
                            console.log(e.target.value)
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