// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// // import { Link } from 'react-router-dom';
// import '../Assets/Style/Delete.css'

// export default function Delete() {
//   const [data, setdata] = useState([])
//   const [image,setimage] = useState([])
//   const [inputdata, setinputdata] =  useState([])

  


//   const deletepost = (data)=>{
//   axios.post("http://localhost:4000/deleteblogpost",{data}).then((res)=>{
//   alert(res.data)
//   }).catch((err)=>{
//   console.log(err)
//   })
//   }

//   useEffect(() => {
//     axios.get("http://localhost:4000/get-blogs").then((res) => {
//       setdata(res.data)
//     }).catch((err) => {
//       console.log(err)
//     })
//   },[deletepost])


  

// const handleInput = (e)=>{
//   setinputdata({
//   ...data, [e.target.name]:e.target.value
// })
// }
// const handleImage = (e)=>{
// const file = e.target.files[0]
// const reader = new FileReader();
// reader.readAsDataURL(file);
// reader.addEventListener('load',()=>{
// setimage({...data,blogImage:reader.result})
// })
// }

// // console.log(data)
// const Update = ()=>{
// if(data.heading !== undefined && data.textarea !== undefined && data.name !== undefined){
//   axios.post("http://localhost:4000/updateblogpost", { data }).then((res) => {
//     console.log(data)
//   alert(res.data)
//   // window.location.reload();
//   }).catch((err)=>{
//   console.log(err)
//   })
// }else{
//   alert("insert data");
// }
// }


//   return (
//     <>
 



//       <div className="updateform">
//         <div className="heading">
//                   <input type="text" className='input1' name = 'heading' />

//                     <label htmlFor="" className='formh1'>Heading</label><br />
//                     <input className='inputl1' type="text" name='heading' onChange={handleInput} />
//                 </div>

//                 <div className="text">
//                     <textarea className='inputt1' name="textarea" id="" cols="37" rows="8" onChange={handleInput} placeholder='Enter description here'></textarea>
//                 </div>

//                 <div className="inputimg">
//                     <label htmlFor="myfile" className='formh3'>Select image &nbsp;&nbsp;&nbsp; </label>
//                     <input className='imgbtn' type="file" id='myfile' name='image' onChange={handleImage} />
//                 </div>

//                 <button onClick={Update} className='updatebtn'>Update</button> 
//   </div>

     
//  <div className="home delete">
//         {
//           data.map((res) => {
//             const {heading, textarea, imageUrl} = res;
//             return (
//               <>

//                 <div className="homecontent">
//                   <img className='home-img' src={imageUrl} alt="img loading" />

//                   <h1 className="home-card-h1">{heading}</h1>
//                   <i className="iconic fa-solid fa-clock"> 4 April, 2016  </i>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
//                   <i className="iconic fa-solid fa-list"> Photography</i>
//                   <p className="home-p-1">{textarea} </p>
//                   <button onClick={()=>(deletepost(res._id))} className='homebtn'>Delete Post</button>
//                   <button onClick={()=>(Update(res._id))} className='homebtn'>Update Post</button>

//                 </div>
//               </>
//             )
//           })
//         }


//       </div>
    
//     </>
//   )
// }
