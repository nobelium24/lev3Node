const userModel = require("../models/userModel");
const argon2 = require('argon2');
const { createToken, verifyToken } = require("../services/sessionService")
//Returns all the users in the table
const viewUsers = async (req, res) => {
    try {
        const user = req.user;
        console.log(user)
        const AllUsers = await userModel.find({});
        console.log(AllUsers)
        res.status(200).send(AllUsers);
    } catch (error) {
        return res.status(500).send({ message: "An error occurred", error })
    }
}

//Creates a new user in the user table
const createNewUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const verifyUser = await userModel.findOne({ email: email });
        if (verifyUser) return res.status(400).send({ message: "User already exist" });

        const hashedPassword = await argon2.hash(password);
        const newUser = {
            firstName,
            lastName,
            email,
            password: hashedPassword,
        };
        // const user = userModel(newUser);
        // await user.save();

        const user = await userModel.create(newUser);
        return res.status(201).send({ message: "User created successfully", user })
    } catch (error) {
        return res.status(500).send({ message: "An error occurred", error })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email: email });
        if (!user) return res.status(404).send({ message: "User not found" });

        const verifyPassword = await argon2.verify(user.password, password);
        if (!verifyPassword) return res.status(400).send({ message: "Incorrect password" });

        const token = createToken(email);

        return res.status(200).send({ message: "Login successful", token })
    } catch (error) {
        return res.status(500).send({ message: "An error occurred", error })
    }
}



//Fetches and returns the details of the user to be edited
const editUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await userModel.findById({ _id: id });
        console.log(user);
        res.status(200).send(user);
    } catch (error) {
        return res.status(500).send({ message: "An error occurred", error })
    }
}

//Edits the details of a user
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
        res.status(200).send({ message: "User details has been updated", update })
    } catch (error) {
        return res.status(500).send({ message: "An error occurred", error })
    }
}

//Deletes a user from the user table
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await userModel.deleteOne({ _id: id });
        res.status(200).send({ message: "User has been deleted" })
    } catch (error) {
        return res.status(500).send({ message: "An error occurred", error })
    }
}

module.exports = { viewUsers, createNewUser, editUser, updateUser, deleteUser, loginUser };


