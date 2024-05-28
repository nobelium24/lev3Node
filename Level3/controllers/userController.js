const userModel = require("../models/userModel");


const viewUsers = async (req, res) => {
    try {
        const AllUsers = await userModel.find({});
        console.log(AllUsers)
        res.status(200).send(AllUsers);
    } catch (error) {
        console.log(error)
    }
}

const createNewUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        console.log(req.body)
        const newUser = {
            firstName,
            lastName,
            email,
            password
        };
        // const user = userModel(newUser);
        // await user.save();

        const user = await userModel.create(newUser);
        res.status(201).send({message:"User created successfully", user})
    } catch (error) {
        console.log(error)
    }
}

const editUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await userModel.findById({ _id: id });
        console.log(user);
        res.status(200).send(user);
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
        res.status(200).send({message:"User details has been updated", update})
    } catch (error) {
        console.log(error)
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await userModel.deleteOne({ _id: id });
        res.status(204)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {viewUsers, createNewUser, editUser, updateUser, deleteUser};


