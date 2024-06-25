import React, { useEffect, useState } from 'react'
import '../Assets/Style/Admin.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Admin() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [temData, setTemData] = useState()
    const [open, setOpen] = useState(false);
    const [finalUpdate, setFinalUpdate] = useState({})

    // const email = sessionStorage.getItem("email");    const check = sessionStorage.getItem("isLoggedIn");
    // useEffect(() => {
    //     if (!check) {
    //         navigate("/login")
    //     }
    // })


    const Logout = () => {
        sessionStorage.clear();
        alert("logged out successfully");
        navigate("/login")
    }



    // @@@@@@@ main form input
    const handleInput = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        })
    }
    const handleImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener('load', () => {
            setData({ ...data, blogImage: reader.result })
        })
    }

    // @@@@@@@@   Form Submit button

    const Submit = () => {
        if (data.heading !== undefined && data.textarea !== undefined) {
            axios.post("http://localhost:4000/addblogpost", { data }).then((res) => {
                alert(res.data);
            }).catch((err) => {
                console.log(err)
            })
        } else {
            alert("please add data")
        }
    }

    const [mydata, setnewdata] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4000/get-blogs").then((res) => {
            setnewdata(res.data)
        }).catch((err) => {
            console.log(err)
        })
    })

    const deletepost = (data) => {
        axios.post("http://localhost:4000/deleteblogpost", { data }).then((res) => {
            alert(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }




    const update = (e) => {
        setOpen(!open)
        setTemData(e)
    }
    // console.log(temData.textarea)

    // image code @@@@@@@@@@@@@


    const finalimage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener('load', () => {
            setFinalUpdate({ ...finalUpdate, blogImage: reader.result })
        })
    }

    // image code @@@@@@@@@@@@@



    const handleInput2 = (e) => {
        setFinalUpdate({
            ...finalUpdate, [e.target.name]: e.target.value, _id: temData._id
        })
    }


    const updatefinaldata = () => {
        console.log(finalUpdate)
        if (finalUpdate.heading !== undefined && finalUpdate.textarea !== undefined) {
            axios.post("http://localhost:4000/updateblogpost", { finalUpdate }).then((res) => {
                alert(res.data.msg)
            }).catch((err) => {
                console.log(err)
            })
        }
        setOpen(!open)
    }

    return (
        <>
           
       <div className="adminnewform">
       <div className="form">

<div>
    {/* <h4>Logged in as:{email} </h4> */}
</div>


<h1 className="formh-1">Add Post Here</h1>
<div className="heading">
    <label htmlFor="" className='formh1'>Heading</label><br />
    <input className='inputl1' type="text" name='heading' onChange={handleInput} />
</div>

<div className="text">
    <textarea className='inputt1' name="textarea" id="" cols="89" rows="10" onChange={handleInput} placeholder='Enter description here'></textarea>
</div>

<div className="inputimg">
    <label htmlFor="myfile" className='formh3'>Select image &nbsp;&nbsp;&nbsp; </label>
    <input className='imgbtn' type="file" id='myfile' name='image' onChange={handleImage} />
</div>

{/* <div className="posttime">
    <label htmlFor=""></label>
</div> */}

<button onClick={Submit} className='adminbtn'>Submit</button>
<button onClick={Logout} className='adminbtn'>Logout</button>
</div>
<div className="admintable">
<table>
    <tbody>
        <tr>
            <th>Image</th>
            <th>Heading</th>
            <th>Edit Post</th>
            <th>Delete Post</th>
        </tr>
        {
            mydata.map((res) => {
                const { heading, imageUrl } = res;
                return (
                    <>
                        <tr>
                            <td className='tdimg' ><img className='td1img' src={imageUrl} alt="image loading" /></td>
                            <td className='tdheading' >{heading}</td>
                            <td><button className='editbtn' onClick={() => update(res)}>UpdatePost</button></td>
                            <td><button className='editbtn' onClick={() => (deletepost(res._id))}>Delete Post</button></td>
                        </tr>
                    </>
                )
            })
        }









    </tbody>
</table>

</div>

{open && (
<div className="form form2">

    <div>
        <button className='togglebtn' onClick={() => setOpen(!open)}><ion-icon name="close"></ion-icon></button>
    </div>


    <h1 className="formh-1">Add Post Here</h1>
    <div className="heading">
        <label htmlFor="" className='formh1'>Heading</label><br />
        <input className='inputl1' type="text" name='heading' onChange={handleInput2} />
    </div>

    <div className="text">
        <textarea className='inputt1' name="textarea" id="" cols="89" rows="10" onChange={handleInput2} placeholder='Enter description here'></textarea>
    </div>

    <div className="inputimg">
        <label htmlFor="myfile" className='formh3'>Select image &nbsp;&nbsp;&nbsp; </label>
        <input className='imgbtn' type="file" id='myfile' name='image' onChange={finalimage} />
    </div>

    <button onClick={updatefinaldata} className='adminbtn newbtn'>Submit</button>

</div>
)}

       </div>







        </>
    )
}
