const dotenv = require("dotenv");
dotenv.config();

const CONNECTION_STRING = process.env.CONNECTION_STRING;
const JWT_SECRET = process.env.JWT_SECRET;

// module.exports = CONNECTION_STRING;
module.exports = {CONNECTION_STRING, JWT_SECRET};