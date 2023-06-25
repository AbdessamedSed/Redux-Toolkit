import React, { useState } from 'react'
import "./Form.css"
//import { addUser } from '../../redux/userSlice'
import { useDispatch , useSelector } from 'react-redux'
import { addUser } from '../../redux/api'

export default function Form() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const {loading , error} = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser({name, email}));
    }
  return (
    <form onSubmit={handleSubmit}>
        <div className='form-group'>
            <input
                type='text'
                placeholder='Enter Name'
                onChange={(e) => setName(e.target.value)}
            />
        </div>

        <div className='form-group'>
            <input
                type='email'
                placeholder='Enter Email'
                onChange={(e) => setEmail(e.target.value)}    
            />
        </div>

        {loading ? 'Loading ... ' : 
            <div className='form-group'>
            <input type='submit' placeholder='Add User' />
        </div>}

        {error && loading === false && "Error !! "}
    </form>
    )
}
