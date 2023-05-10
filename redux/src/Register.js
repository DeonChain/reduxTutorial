import React from 'react'
import './register.css'
import { useDispatch } from 'react-redux'
import {New} from './states/reducers/index'


export default function Register() {
  const dispatch = useDispatch();

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" name="confirm-password" required />
        <input type="submit" value="Register" />
      </form>
      <button type="text" className="userbutton" onClick={()=>dispatch(New())}>  Existing User? </button>
    </div>
  )
}
