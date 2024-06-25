import React, { useEffect, useState } from 'react'
import '../Assets/Style/About.css'
// import homedata from '../Components/About'
import { Link } from 'react-router-dom';

import axios from 'axios'
export default function Home() {

  const [data, setdata] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4000/get-blogs").then((res) => {
      setdata(res.data)
    }).catch((err) => {
      console.log(err)
    })
  })


  return (
    <>

<div className="newdiv">

  
<div className="introduction">
        <img className='introimg' src={require("../Assets/Images/01.png")} alt="" />
        <h3 className="intro-h3-1">About Me</h3>
        <p className="intro-p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe adipisci harum, a est consequuntur </p>
        <div className="icons introicon">
          <i className="socialicons fa-brands fa-twitter"></i>
          <i className="socialicons fa-brands fa-facebook-f"></i>
          <i className="socialicons fa-brands fa-instagram"></i>
          <i className="socialicons fa-brands fa-linkedin-in"></i>
        </div>

        <div className="subscribe">
          <h3 className="subscribe-h3-1">Subscribe Blog</h3>
          <p className="intro-p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe adipisci harum, a est consequuntur </p>
          <input className='subinput' type="text" placeholder='enter email address' /><br />
          <button className='subbtn'>Subscribe Now</button>
        </div>
      </div>

      <div className="home">
        {
          data.map((res) => {
            const { heading, textarea, imageUrl } = res;
            return (
              <>

                <div className="homecontent">
                  <img className='home-img' src={imageUrl} alt="img loading" />

                  <h1 className="home-card-h1">{heading}</h1>
                  <i className="iconic fa-solid fa-clock"> 4 April, 2016  </i>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  <i className="iconic fa-solid fa-list"> Photography</i>
                  <p className="home-p-1">{textarea} </p>
                  <button className='homebtn'><Link className='readmore' to='/pages'>Read More</Link></button>

                </div>
              </>
            )
          })
        }
      </div>
</div>



    </>

  )
}
