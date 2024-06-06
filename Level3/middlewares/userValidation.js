const yup = require('yup');

const userValidationSchema = yup.object().shape({
    firstName: yup.string()
        .min(2, "first name is too short")
        .max(150, "first name is too long")
        .required("First name is required")
        .matches(/^[a-zA-Z]+$/, "First name must be alphabets only"),

    lastName: yup.string()
        .min(2, "Last name is too short")
        .required("Last name is required")
        .max(150, "Last name is too long")
        .matches(/^[a-zA-Z]+$/, "Last name must be alphabets only"),

    email: yup.string()
        .required("Email is required")
        .email("Invalid email"),

    password: yup.string()
        .min(6, "PAssword should have at least 6 characters")
        .required("Password is required")
        .matches(/^[a-zA-Z0-9]+$/, "Password must be alphabets and numbers only"),
})

module.exports = {userValidationSchema};


// create a regex pattern for a password that must contain at least 6 characters, with letters, numbers and special characters

// GitHub Copilot
// You can use the following regular expression to validate a password that must contain at least 6 characters, including letters, numbers, and special characters:

// Here's how you can update your password validation in the schema:

// This regular expression works as follows:
// /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/

// (?=.*[A-Za-z]) ensures there is at least one letter.
// (?=.*\d) ensures there is at least one digit.
// (?=.*[@$!%*#?&]) ensures there is at least one special character.
// [A-Za-z\d@$!%*#?&]{6,} ensures the total length is at least 6 characters.