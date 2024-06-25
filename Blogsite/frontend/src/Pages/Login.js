import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import '../Assets/Style/Signup.css'


export default function Login() {
  const [data, setdata] = useState({});
  const navigate = useNavigate();

  const handleInput = (e) => {
    setdata({
      ...data, [e.target.name]: e.target.value
    })
  }

  const Login = () => {
    if (data.email !== undefined && data.password !== undefined) {
      axios.post("http://localhost:4000/login", { data }).then((res) => {
        alert(res.data.msg);

        sessionStorage.setItem("username", res.data.d[0].name)
        sessionStorage.setItem("email", res.data.d[0].email)
        sessionStorage.setItem("isLoggedIn", true)
        // console.log(res.data)
        navigate("/admin")
    


      }).catch((err) => {
        console.log(err)
      })
    } else {
      
      alert("please add data in fields");
    }
  }

  return (
    <>

      {/* This is a login form */}
      <div className="signup">
        <div className="signform">
          <h1 className="register">Login</h1>

          {/* <label htmlFor="email">Email</label><br /> */}
          <input className='signupinput' type="text" name='email' placeholder='Email' onChange={handleInput} /><br />


          {/* <label htmlFor="name">Password</label><br /> */}
          <input className='signupinput' type="text" name='password' placeholder='Password' onChange={handleInput} />
          <br />
          <button onClick={Login} className='signupbtn' >Login</button>
        </div>

        <img className='signupimg' src={require("../Assets/Images/03.png")} alt="img loading" />
      </div>
    </>
  )
}
