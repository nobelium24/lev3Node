const {Router} = require("express");
const {
    viewUsers, createNewUser, editUser, 
    updateUser, deleteUser, loginUser,
} = require("../controllers/userController")
const validate = require("../middlewares/validator");
const {userValidationSchema} = require("../middlewares/userValidation")
const verifyUserToken = require("../middlewares/tokenValidator");

const userRoutes = Router();

userRoutes.get("/viewUsers", verifyUserToken, viewUsers);


userRoutes.post("/createUser", validate(userValidationSchema), createNewUser);
userRoutes.post("/login", loginUser);
// userRoutes.get("/verifyToken", verifyUserToken);

userRoutes.get("/editUser/:id", editUser);
userRoutes.post("/update/:id", updateUser);
userRoutes.delete("/delete/:id", deleteUser);

module.exports = {userRoutes};