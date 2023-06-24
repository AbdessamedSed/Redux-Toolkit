import React from 'react'
import "./Sidebar.css"
import { useSelector } from 'react-redux'

export default function () {
  const {user} = useSelector(state => state.user.userData)
  console.log(user)

  return (
    <div className='sidebar'>
      <ul>
        <li> <a href='#'> Home </a> </li>
        <li> <a href='#'> About </a> </li>
        <li> <a href='#'> Contact </a> </li>
        <li> <a href='#'> Blog </a> </li>
        <li> <a href='#'> Hello {user} </a> </li>
      </ul>
    </div>
  )
}
