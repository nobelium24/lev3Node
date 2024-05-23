const { CONNECTION_STRING } = require("../constants/constants");
const mongoose = require("mongoose");

const connectToDB = async () => {
    try {
        await mongoose.connect(CONNECTION_STRING);
        console.log("DB connected");
    } catch (error) {
        console.log(`An error occurred: ${error}`);
    }
}

module.exports = { connectToDB }


