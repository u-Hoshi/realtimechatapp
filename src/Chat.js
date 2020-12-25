import React,{useState} from 'react'


const chat = ({ content, user }) => {
    return (
        <li>
            {user}{content}
        </li>
    )
}

export default chat