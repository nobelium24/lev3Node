const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");


const app = express();
app.set({ viewEngine: "ejs" });
app.use(express.urlencoded({ extended: "true" }));


const connectionString = 'mongodb+srv://nobelium24:oluwatobi@cluster0.1sfkfgv.mongodb.net/testNodeClass?retryWrites=true&w=majority';

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, trim: true }
})

const userModel = mongoose.models.user_tbs || mongoose.model("user_tbs", userSchema)


app.get("/", async (req, res) => {
  try {
    const AllUsers = await userModel.find({});
    console.log(AllUsers)
    res.render("index.ejs", { AllUsers })
  } catch (error) {
    console.log(error)
  }
})

app.post("/", async (req, res) => {
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
    res.redirect("/")
  } catch (error) {
    console.log(error)
  }
})

app.post("/editUser/:id", async (req, res) => {
  try {
    const { id } = req.params
    const user = await userModel.findById({ _id: id });
    console.log(user);
    res.render("edit.ejs", { getUser: user })
  } catch (error) {
    console.log(error)
  }
})

app.post("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {firstName, lastName, email, password} = req.body;
    const updatedUser = {
      firstName,
      lastName,
      email,
      password
    };
    console.log(updatedUser, 33)
    const update = await userModel.findByIdAndUpdate({_id:id}, updatedUser);
    console.log(update)
    res.redirect("/")
  } catch (error) {
    console.log(error)
  }
})

app.post("/delete/:id", async(req, res)=>{
  try {
    const {id} = req.params;
    await userModel.deleteOne({_id:id});
    res.redirect("/")
  } catch (error) {
    console.log(error)
  }
})


const connectToDB = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("DB connected");
  } catch (error) {
    console.log(`An error occurred: ${error}`);
  }
}

app.listen(5200, () => {
  connectToDB()
  console.log("App is running on port 5200");
});



// let AllUsers = [];

// // Initial Rendering on the webpage
// app.get("/", (req, res) => {
//   res.render("index.ejs", { AllUsers });
// });

// // Posting a new User information
// app.post("/", (req, res) => {
//   const { studentName, studentEmail, studentId, studentCourse } = req.body;
//   console.log("Request Body : ", req.body);
//   if (!studentName || !studentEmail || !studentId || !studentCourse) {
//     return console.log("All Fields are mandatory");
//   } else {
//     AllUsers.push(req.body);
//     console.log("All Users : ", AllUsers);
//     res.redirect("/");
//   }
// });

// // Editing Users information
// app.post("/editUser/:id", (req, res) => {
//   const id = req.params.id;
//   console.log("UserId : ", id);
//   const getUser = AllUsers.find((user) => user.studentId === id);
//   console.log("User Trying to edit Acc : ", getUser);

//   res.render("edit.ejs", { getUser });
// });

// // Updating Users Information
// app.post("/update/:id", (req, res) => {
//   const id = req.params.id;
//   const { studentName, studentEmail, studentId, studentCourse } = req.body;
//   const getUser = AllUsers.find((user) => user.studentId === id);
//   console.log("Updaing User : ", getUser);
//   getUser.studentName = studentName;
//   getUser.studentEmail = studentEmail;
//   getUser.studentId = studentId;
//   getUser.studentCourse = studentCourse;
//   res.redirect("/");
// });

// // Deleting Users Information
// app.post("/delete/:id", (req, res) => {
//   const id = req.params.id;
//   console.log("Student Id : ", id);
//   const findUser = AllUsers.find((user) => user.studentId === id);
//   console.log("User Info : ", findUser);
//   AllUsers.splice(AllUsers[id], 1);
//   res.redirect("/");
// });

