import React, { useState } from 'react'
import "./loginForm.css"


export default function LoginForm() {

  const[popupStyle,showPopup]=useState("hide")

  const popup=()=>{
    showPopup("login-popup")
    setTimeout(()=>showPopup("hide"),3000)
  }

  return (
    <div className="cover">
    <h1>Login</h1>
   <input type="text" placeholder='userName'/>
     <input type='password' placeholder='password'/>
     <div className="loginBtn" onClick={popup}>Login</div>

    <div className= {popupStyle}>
      <h3>Login Faild</h3>
      <p>Username or password incorrect</p>
     
    </div>
     
 </div>
  )
}
