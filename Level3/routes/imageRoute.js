const { uploadImage } = require("../controllers/imageController");
const { Router } = require("express");

const imageRouter = Router();

imageRouter.post("/upload_image", uploadImage);

module.exports = imageRouter;

