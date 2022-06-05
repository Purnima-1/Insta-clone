import React,{useState} from 'react'
//import axios from 'axios'
import M from 'materialize-css'

import { Link,useNavigate } from 'react-router-dom'
const Signup = () => {
  const navigate = useNavigate()
const [name,setName] = useState('')
const [password,setPassword] = useState('')
const [email,setEmail] = useState('')
const PostData = async() => {
  if( !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email)){
    return M.toast({html:"Invalid Email",classes:'#1de9b6 teal accent-3'})
  }
  
  fetch('/signup',{
    method:'post',
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      name,
      password,
      email
    })
  }).then(res=> res.json())
  .then(data=> {
  if(data.error){
    M.toast({html: data.error,classes:"#ef5350 red lighten-1"})
  }else  {M.toast({html: data.message,classes:'#1de9b6 teal accent-3'})
    //console.log(data);
    navigate('/login')}
      }).catch(err=> console.log(err)
      )
 }
  return (
    <div className="='myCard">
    <div className="card auth-card">
     <h2>Instagram</h2>
     <input type="text"
     placeholder='name' 
     value={name}
     onChange = {(e=> setName(e.target.value))}
     />
     <input type="text"
     placeholder='email' 
     value={email}
     onChange = {(e=> setEmail(e.target.value))}/>
      <input type="text"
     placeholder='password'
      value={password}
     onChange = {(e=> setPassword(e.target.value))}/>
     <button className="btn waves-effect waves-light #ab47bc purple lighten-1" onClick={()=> PostData()}>
  Sign Up </button>
  <h5>
<Link to = "/login">Already have a login?</Link></h5>
    </div>
  </div>
  )
}

export default Signup