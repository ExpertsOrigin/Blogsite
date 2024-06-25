const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
   
    heading: {
        type: String,
        required: true
    },
    textarea: {
        type: String,
        required: true,
    },
    imageUrl:{
        type:String,
        required:true
    },
    status: {
        type: Boolean,
        required: true
    }
    
})

const Admin = mongoose.model('admin', AdminSchema);
Admin.createIndexes();
module.exports = Admin; 