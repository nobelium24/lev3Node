const nodemailer = require("nodemailer");
const {FROM_MAIL, MAILER_PASSWORD} = require("../constants/constants")

async function sendWelcomeMail(firstName, email){
    const messageTemplate = `
        <div>
            <h2>Welcome mail</h2>
            <ul>
                <li>Name: ${firstName}</li>
                <li>Email: ${email}</li>
            </ul>
            <p>Dear ${firstName}, Welcome to our application. We are happy to see you here.</p>
        </div>
    `

    const createTransport = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user:FROM_MAIL,
            pass:MAILER_PASSWORD
        }
    })

    const mailOptions = {
        from:FROM_MAIL,
        to:email,
        html:messageTemplate,
        subject:"Welcome Message"
    }

    try {
        await createTransport.sendMail(mailOptions)
        console.log("Mail sent")
    } catch (error) {
        throw error;
    }
}

module.exports = {sendWelcomeMail};