const userModel = require("../models/userModel");


const viewUsers = async (req, res) => {
    try {
        const AllUsers = await userModel.find({});
        console.log(AllUsers)
        res.render("index.ejs", { AllUsers })
    } catch (error) {
        console.log(error)
    }
}

const createNewUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const newUser = {
            firstName,
            lastName,
            email,
            password
        };
        // const user = userModel(newUser);
        // await user.save();

        const user = await userModel.create(newUser);
        res.redirect("/users")
    } catch (error) {
        console.log(error)
    }
}

const editUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await userModel.findById({ _id: id });
        console.log(user);
        res.render("edit.ejs", { getUser: user })
    } catch (error) {
        console.log(error)
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { firstName, lastName, email, password } = req.body;
        const updatedUser = {
            firstName,
            lastName,
            email,
            password
        };
        console.log(updatedUser, 33)
        const update = await userModel.findByIdAndUpdate({ _id: id }, updatedUser);
        console.log(update)
        res.redirect("/users")
    } catch (error) {
        console.log(error)
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await userModel.deleteOne({ _id: id });
        res.redirect("/users")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {viewUsers, createNewUser, editUser, updateUser, deleteUser};


