import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div className="='myCard">
    <div className="card auth-card">
     <h2>Instagram</h2>
     <input type="text"
     placeholder='name' />
     <input type="text"
     placeholder='email' />
      <input type="text"
     placeholder='password' />
     <button className="btn waves-effect waves-light #ab47bc purple lighten-1" >
  Sign Up </button>
  <h5>
<Link to = "/login">Already have a login?</Link></h5>
    </div>
  </div>
  )
}

export default Signup