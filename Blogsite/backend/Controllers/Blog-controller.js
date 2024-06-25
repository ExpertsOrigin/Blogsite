// const User = require("../Models/User-model")
const Admin = require("../Models/Admin-model")


const Addblogpost = async (req, res) => {
    const { heading, textarea, blogImage } = req.body.data;

    const data = Admin({
        heading: heading,
        textarea: textarea,
        imageUrl: blogImage,
        status: 0
       
    });
    
    try {
        await data.save();
        res.json("Post Published")
    } catch (error) {
        res.json(error);
    }
}


const GetBlogs = async (req, res) => {
    try {
        const result = await Admin.find({status: 0});
        // console.log(result)
        if (result.length > 0) {
            res.json(result)
        }
    } catch (error) {
        res.json(error)
        // console.log(error)
    }
}


const Updateblogpost = async (req, res) => {
    const {_id, heading, textarea, blogImage } = req.body.finalUpdate;

    console.log(req.body.finalUpdate);
    try {
        const filter = { _id: _id }
        const update = { heading: heading, textarea: textarea , imageUrl:blogImage }
        const result = await Admin.findOneAndUpdate(filter, update);
        // const result = await Admin.find({ heading: heading });
        // console.log(result[0].heading)
        // if (result.heading === heading && result.textarea === textarea) {
        // } 
        res.json({msg:"data updated"});
    } catch (error) {
        res.json(error);
    }
}

const Deleteblogpost = async (req, res) => {
    const { data } = req.body;
    console.log(data)
    try {
        const filter = {_id:data };
        const update = { status: 1 }

        await Admin.findOneAndUpdate(filter, update);
        res.json("Data deleted");
    } catch (error) {
        res.json(error);
    }
}

module.exports = { Addblogpost, Deleteblogpost, Updateblogpost, GetBlogs };
// module.exports = { Addblogpost, GetBlogs };



