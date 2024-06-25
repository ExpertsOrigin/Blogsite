import React, { useState } from 'react'
import '../Assets/Style/Signup.css'
import axios from 'axios'


export default function Signup() {
  const [data, setdata] = useState({})

  const handleInput = (e) => {
    setdata({
      ...data, [e.target.name]: e.target.value
    })
  }

  const Register = () => {
    if (data.name !== undefined && data.email !== undefined && data.password !== undefined) {
      axios.post("http://localhost:4000/signup", { data }).then((res) => {
        
        alert(res.data)

        window.location.reload();
      }).catch((err) => {
        console.log(err)
      })
    } else {
      alert("please fill all the fields");
    }
  }


  return (
    <>
      <div className="signup">
        <div className="signform">
          <h1 className="register">Sign Up</h1>

          {/* <label className='l1' htmlFor="name">Name</label><br /> */}
          <input className='signupinput' type="text" name='name' placeholder='Name' onChange={handleInput} /><br />


          {/* <label htmlFor="email">Email</label><br /> */}
          <input className='signupinput' type="text" name='email' placeholder='Email' onChange={handleInput} /><br />


          {/* <label htmlFor="name">Password</label><br /> */}
          <input className='signupinput' type="text" name='password' placeholder='Password' onChange={handleInput} />
          <br />
          <button className='signupbtn' onClick={Register} >Sign Up</button>
        </div>

        <img className='signupimg' src={require("../Assets/Images/03.png")} alt="img loading" />
      </div>


    </>
  )
}
