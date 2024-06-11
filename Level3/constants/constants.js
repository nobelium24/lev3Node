const dotenv = require("dotenv");
dotenv.config();

const CONNECTION_STRING = process.env.CONNECTION_STRING;
const JWT_SECRET = process.env.JWT_SECRET;
const FROM_MAIL = process.env.FROM_MAIL;
const MAILER_PASSWORD = process.env.MAILER_PASSWORD
console.log(FROM_MAIL, MAILER_PASSWORD)

// module.exports = CONNECTION_STRING;
module.exports = {CONNECTION_STRING, JWT_SECRET, FROM_MAIL, MAILER_PASSWORD};