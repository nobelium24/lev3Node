const imageModel = require("../models/imageModel");
const cloudinary = require("../config/cloudinaryConfig")

const uploadImage = async (req, res) => {
    try {
        const { base64Image } = req.body;
        const uploadResponse = await cloudinary.uploader.upload(base64Image);
        const { public_id, secure_url } = uploadResponse;
        const imageResponse = await imageModel.create({ public_id, secure_url });
        return res.status(201).send(imageResponse);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Internal server error" })
    }
}

module.exports = { uploadImage }