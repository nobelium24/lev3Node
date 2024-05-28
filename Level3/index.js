const express = require("express");
const ejs = require("ejs");
const { connectToDB } = require("./database/database")
const mongoose = require("mongoose");
const {userRoutes} = require("./routes/userRoutes")
const cors = require("cors");



const app = express();
app.use(cors({ origin: "*" }));
app.set({ viewEngine: "ejs" });
app.use(express.json());
app.use(express.urlencoded({ extended: "true" }));


app.use("/users", userRoutes)


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

