import React from 'react'
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './CSS/LoginSignup.css'


const LoginSignup = () => {

  const [action,setAction] = useState("Sign Up");

  return (
      <div className="container-fluid loginsignup bg-info py-3">
        <div className="row d-flex justify-content-center">
          <div className="loginsignup-fields gap-2 mt-3 col-4 bg-body rounded-1 py-4 px-3">
          <h1 className='mb-3 mx-1 h4'>{action}</h1>
            <form className='d-grid gap-2'>
              <div className="d-grid gap-3">
                {action==="Login"?<div></div>:<input type="text" className="form-control py-2 shadow-sm rounded-0" id="exampleInputName" aria-describedby="nameHelp" placeholder="Your Name"/>}
                <input type="email" className="form-control py-2 shadow-sm rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <input type="password" className="form-control py-2 shadow-sm rounded-0" id="exampleInputPassword1" placeholder="Password"/>
                {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span className='fw-bold change small'>Click Here!</span></div>}
              </div>
              <button className=' mx-2 bg-danger text-bg-danger border-0 py-2 my-2'>Continue</button>
              {action==="Login"?<div></div>:<p className="loginsignup-login small">Already have an account? <span className='change text-danger fw-bold' onClick={()=>{setAction("Login")}}>Login </span>Here</p>}
              {action==="Sign Up"?<div></div>:<div className="new">No account? <span className='change text-danger fw-bold' onClick={()=>{setAction("Sign Up")}}>Click Here! </span></div>}
              {action==="Login"?<div></div>:<div className="loginsignup-agree">
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <p className='small'>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
              </div>}
            </form>
          </div>
        </div>
      </div>
  )
}

export default LoginSignup