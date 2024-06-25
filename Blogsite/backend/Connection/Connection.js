const mongoose = require("mongoose");

const Connection = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017");
        console.log("connected to database");
    } catch (error) {
        console.log(error);
    }
}

module.exports = Connection;
