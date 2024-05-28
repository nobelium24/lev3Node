const dotenv = require("dotenv");
dotenv.config();

const CONNECTION_STRING = process.env.CONNECTION_STRING;

// module.exports = CONNECTION_STRING;
module.exports = {CONNECTION_STRING}