import React, {  useState } from 'react'

import '../Assets/Style/Sidebar.css'
import { Link } from 'react-router-dom';

export default function Galaxysidebar() {
  const [open, setOpen] = useState(true);




  return (
    <>
<div  className="header">
  <img className='headerimg' src={require("../Assets/Images/logo.png")} alt="img loading" />

<button onClick={()=>{setOpen(!open)}} className='iconbtn'><i className="fa-solid fa-bars"></i></button>
</div>
<div style={{ position: 'fixed', left: open ? '0px' : '0px', top: '0px' }} className="ssside">
  
{
      open && (
        <div  className="sidebar sidemedia" >
    <i className="fa-regular fa-gem diamond"><br />GALAXY</i>

    <nav className='nav'>
    <ul className='navul'>
        <li className='navli'><Link to="/home">Home</Link></li>
        <li className='navli'><Link to="/about">About</Link></li>
        <li className='navli'><Link to="/contact">Contact</Link></li>
        <li className='navli'><Link to="/pages">Pages</Link></li>
        <li className='navli'><Link to="/admin">Admin</Link></li>
      
    </ul>
    </nav>
    

    <div className="icons">
    <i className="socialicons fa-brands fa-twitter"></i>
    <i className="socialicons fa-brands fa-facebook-f"></i>
    <i className="socialicons fa-brands fa-instagram"></i>
    <i className="socialicons fa-brands fa-linkedin-in"></i>
    </div>
    
    
    
    </div>
      )
    }
</div>




    </>
  )
}
