const { createToken, verifyToken } = require("../services/sessionService");
const userModel = require("../models/userModel");

const verifyUserToken = async (req, res, next) => {
    try {
        const userToken = req.headers.authorization;
        const token = userToken.split(" ")[1];
        const decodedToken = verifyToken(token);
        console.log(decodedToken, 66);
        const email  = decodedToken.email;
        const user = await userModel.findOne({ email: email });
        if (!user) return res.status(401).send({ message: "UNAUTHORIZED" });
        req.user = user;
        next()
    } catch (error) {
        return res.status(500).send({ message: "An error occurred", error })
    }
}
module.exports = verifyUserToken;