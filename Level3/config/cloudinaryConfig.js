const cloudinary = require("cloudinary").v2
const { CLOUDINARY_API_KEY, CLOUDINARY_SECRET_KEY, CLOUD_NAME } = require("../constants/constants")

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_SECRET_KEY
})

module.exports = cloudinary;

