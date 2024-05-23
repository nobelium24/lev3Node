const {Router} = require("express");
const {viewUsers, createNewUser, editUser, updateUser, deleteUser} = require("../controllers/userController")

const userRoutes = Router();

userRoutes.get("/", viewUsers);
userRoutes.post("/", createNewUser);
userRoutes.post("/editUser/:id", editUser);
userRoutes.post("/update/:id", updateUser);
userRoutes.post("/delete/:id", deleteUser);

module.exports = {userRoutes};