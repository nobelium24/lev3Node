const dotenv = require("dotenv");
dotenv.config();

const CONNECTION_STRING = process.env.CONNECTION_STRING;
const JWT_SECRET = process.env.JWT_SECRET;
const FROM_MAIL = process.env.FROM_MAIL;
const MAILER_PASSWORD = process.env.MAILER_PASSWORD
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY
const CLOUDINARY_SECRET_KEY = process.env.CLOUDINARY_SECRET_KEY
const CLOUD_NAME = process.env.CLOUD_NAME

// module.exports = CONNECTION_STRING;
module.exports = {
    CONNECTION_STRING, JWT_SECRET, FROM_MAIL, MAILER_PASSWORD,
    CLOUDINARY_API_KEY, CLOUDINARY_SECRET_KEY, CLOUD_NAME
};