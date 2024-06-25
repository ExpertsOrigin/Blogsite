// const mongoose = require("mongoose");
const User = require("../Models/User-model")


// const Signup = async (req,res)=>{
// const {name, email, password} =  req.body.data;
// // res.json(req.body);
// const data = User({
//     name:name,
//     email:email,
//     password:password,
//     status:0,
//     data:new Date().toDateString()
// });

// console.log(data)

// try {
//     const result = await User.find({email:email});
//     if (result.length > 0){
//         res.json("user already exist");
//     }else{
//         await data.save();
//         res.json("signup successfully");
//     }
// } catch (error) {
//     console.log(error)
//     res.json(error);
// }
// }


const Login = async (req,res)=>{
const {email,password} = req.body.data;
console.log(req.body.data);
try {
    const result = await User.find({email:email,password:password,status:0});
    if(result.length > 0 ){
        res.json({msg:"Login successfully", d:result});
        // res.json("login successfully")
    }else{
    res.json({msg:"invalid user"})
    }
    
} catch (error) {
    res.json(error);
}
}


module.exports = {Login};

