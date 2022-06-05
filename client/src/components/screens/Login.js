import React, {useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import M from 'materialize-css'
const Login = () => {
  const navigate = useNavigate()
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')
  const PostData = async() => {
    if( !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email)){
      return M.toast({html:"Invalid Email",classes:'#1de9b6 teal accent-3'})
    }
    
    fetch('/signin',{
      method:'post',
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        password,
        email
      })
    }).then(res=> res.json())
    .then(data=> {
    if(data.error){
      M.toast({html: data.error,classes:"#ef5350 red lighten-1"})
    }else  {M.toast({html: data.message,classes:'#1de9b6 teal accent-3'})
      //console.log(data);
      navigate('/home')}
        }).catch(err=> console.log(err)
        )
   }
  return (
    <div className="='myCard">
      <div className="card auth-card">
       <h2>Instagram</h2>
       <input type="text"
       placeholder='email' />
        <input type="text"
       placeholder='password' />
       <button className="btn waves-effect waves-light #ab47bc purple lighten-1" onClick={()=> PostData()}>
    Login </button>
    <h5><Link to = "/signup">New User?</Link></h5>
      </div>
    </div>
  );
};

export default Login;
