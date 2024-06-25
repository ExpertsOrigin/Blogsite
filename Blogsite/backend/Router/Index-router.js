const express = require("express");
const {Login} = require('../Controllers/User-controller');
const {Addblogpost,Updateblogpost,Deleteblogpost, GetBlogs } = require('../Controllers/Blog-controller');
// const {Addblogpost,GetBlogs } = require('../Controllers/Blog-controller');




const router = express.Router();


router.post("/login",Login);
router.post("/addblogpost",Addblogpost);
router.post("/updateblogpost",Updateblogpost);
router.post("/deleteblogpost",Deleteblogpost);
router.get("/get-blogs", GetBlogs);

module.exports = router;