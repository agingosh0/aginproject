import React, { useState } from 'react'

import '../styles/addbooks.css'
import { useNavigate } from 'react-router-dom'
const AddUser = () => {
  let navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [language, setLanguage] = useState('');
  const [date, setDate] = useState('');
  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title && !author && !language && !date && !id) {
     
    } else {
      let data = {
        title,
        author,
        email,
        dob,
        address
      };
      fetch("http://localhost:2000/users", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      
    }
  }
  const handleReset = () => {
    setName('')
    setPhone('')
    setEmail('')
    setDob('')
    setAddress('')
  }
  return (
    <div>
      <h1>AddUser</h1>

      <div className="add-user-container">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name
            <input placeholder="Name" onChange={(e) => { setName(e.target.value) }} value={name} type="text" name="name" id="name" />
          </label>
          <label htmlFor="phone">
            Phone No.
            <input placeholder="Phone No." onChange={(e) => { setPhone(e.target.value) }} value={author} type="tel" name="phone" id="phone" />
          </label>

          <label htmlFor="email">
            Email
            <input placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" name="email" id="email" />
          </label>
          <label htmlFor="dob">
            <div>
              DOB
            </div>
            <input className='date-of-birth' placeholder='Date of Birth' onChange={(e) => { setDob(e.target.value) }} value={dob} type="date" name="dob" id="dob" />
          </label>
          <div>
            <label htmlFor="address">
              Address
              <input placeholder='Address' onChange={(e) => { setAddress(e.target.value) }} value={address} type="text" name="address" id="address" />
            </label>
          </div>

          <div className='add-user-btn-container'>
            <button className='btn-add-fav' style={{ marginRight: "15px" }} >Submmit</button>
            <button className='btn-add-fav' type="reset" onClick={handleReset}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddUser
