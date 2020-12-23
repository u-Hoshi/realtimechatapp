import React from 'react'

const SingUp = () => {
    return (
        <div>
            <h1>Sing Up</h1>
            <form>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        name='email'
                        type='email'
                        id='email'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        name='password'
                        type='password'
                        id='password'
                        placeholder='Password'
                    />
                </div>
                    <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}
export default SingUp