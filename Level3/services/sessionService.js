const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require("../constants/constants");

function createToken(email){
    try {
        const token = jwt.sign({email}, JWT_SECRET, {expiresIn: "3m"});
        return token;
    } catch (error) {
        throw error;
    }
}

function verifyToken(token){
    try{
        const decodedToken = jwt.verify(token, JWT_SECRET);
        return decodedToken;
    }catch(error){
        throw error;
    }
}

module.exports = {createToken, verifyToken};