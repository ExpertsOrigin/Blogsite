import React from 'react'
import '../Assets/Style/Contact.css'
import Galaxysidebar from '../Components/Galaxysidebar'
export default function Contact() {
    return (
        <>



            <div className="contactpage">
                <div className="contact">
                    <h3 className="contact-h3-1">Lets Contact Us</h3>
                </div>



                <div className="name1">
                    <label className="label1" htmlFor="name">Your First Name</label><br />
                    <input className='input1' type="text" placeholder='Rober Lee' />
                </div>
                <div className="name1">
                    <label className="label1" htmlFor="name">Your Last Name</label><br />
                    <input className='input1' type="text" placeholder='Anderson' />
                </div>
                <div className="name1">
                    <label className="label1" htmlFor="name">E-Mail Address</label><br />
                    <input className='input1' type="text" placeholder='kevin.jones@mail.cc' />
                </div>
                <div className="name1">
                    <label className="label1" htmlFor="name">What is This About?</label><br />
                    {/* <input type="text" placeholder='kevin.jones@mail.cc'/> */}
                    <select name="" id="" className='input1' >
                        <option value="">Personal Proposal</option>
                        <option value="">Business Purpose</option>
                        <option value="">Want to say hello</option>
                    </select>
                </div>
                <div className="name2">
                    <label className="label1" htmlFor="name">Your message</label><br />
                    <input className='input1 input-2' type="text" placeholder='Lorem Ipsum is simply dummy text of the printing and...' />
                </div><br />

                <button className='formbtn'>Send Now </button>



            </div>


        </>
    )
}
