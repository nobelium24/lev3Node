const {Router} = require("express");
const {
    viewUsers, createNewUser, editUser, 
    updateUser, deleteUser, loginUser, verifyUserToken
} = require("../controllers/userController")

const userRoutes = Router();

userRoutes.get("/viewUsers", viewUsers);


userRoutes.post("/createUser", createNewUser);
userRoutes.post("/login", loginUser);
userRoutes.get("/verifyToken", verifyUserToken);

userRoutes.get("/editUser/:id", editUser);
userRoutes.post("/update/:id", updateUser);
userRoutes.delete("/delete/:id", deleteUser);

module.exports = {userRoutes};