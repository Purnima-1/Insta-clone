import React from 'react'

const Profile = () => {
  return (
    <div style= {{maxWidth:'950px',margin:'0px auto'}}>
<div style={{display:'flex',justifyContent:'space-around',margin:'18px 0px',borderBottom:'1px solid grey'}}>
  <div> <img src=
  "https://images.unsplash.com/photo-1513207565459-d7f36bfa1222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
  style={{width:'160px',height:'160px',borderRadius:"80px"}} alt="" /> </div>
  <div> <h4>Jenny Thompson</h4>
  <div style={{display:'flex',justifyContent:'space-between',width: "109%"}}>
    <h5>40 posts</h5>
    <h5>40 followers</h5>
    <h5>40 following</h5>
  </div>
  </div>
</div>
<div className='gallery'>
  <img className= 'item' src="https://images.unsplash.com/photo-1513207565459-d7f36bfa1222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
  alt="" />
  <img className= 'item' src="https://images.unsplash.com/photo-1513207565459-d7f36bfa1222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
  alt="" />
  <img className= 'item' src="https://images.unsplash.com/photo-1513207565459-d7f36bfa1222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
  alt="" />
  <img className= 'item' src="https://images.unsplash.com/photo-1513207565459-d7f36bfa1222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
  alt="" />
  <img className= 'item' src="https://images.unsplash.com/photo-1513207565459-d7f36bfa1222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
  alt="" />
  <img className= 'item' src="https://images.unsplash.com/photo-1513207565459-d7f36bfa1222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
  alt="" />
</div>
    </div>
  )
}

export default Profile