import React from 'react'

const CreatePost = () => {
  return (
    <div className='card input-field' style={{maxWidth:'70%',margin:'30px auto',padding:'20px',textAlign:'center'}}>
        <input type="text" placeholder='title' />
        <input type="text" placeholder='body' />
        <div className="file-field input-field">
      <div className="btn #ab47bc purple lighten-1">
        <span >Upload Image</span>
        <input type="file" multiple/>
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" placeholder="Upload one or more files"/>
            </div>
    </div>
    <button className="btn waves-effect waves-light #ab47bc purple lighten-1" >
    Submit Post </button>
    </div>
  )
}

export default CreatePost