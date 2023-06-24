import React from 'react'
import "./Header.css"
import { useSelector } from 'react-redux'

export default function Header() {
  const {user} = useSelector(state => state.user.userData)
  return (
    <div className='header'>
        <h1> Abdou Academy </h1>
        <p> Welcome {user} </p>
    </div>
  )
}
