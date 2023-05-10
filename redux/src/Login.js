import React from 'react'
import './login.css'
import { useDispatch } from 'react-redux'
import {New} from './states/reducers/index'

export default function Login() {
	const dispatch = useDispatch();


  return (
	<div class="login-container">
		<h1>Login</h1>
		<form>
			<label htmlFor="username">Username</label>
			<input type="text" id="username" name="username" required/>
			<label htmlFor="password">Password</label>
			<input type="password" id="password" name="password" required/>
			<input type="submit" value="Login"/>
		</form>
		<button type="text" className="userbutton" onClick={()=>dispatch(New())}> New User? </button>
	</div>
  )
}
