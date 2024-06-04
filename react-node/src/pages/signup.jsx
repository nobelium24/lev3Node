import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const createUsers = "http://localhost:5200/users/createUser";

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const createUser = async () => {
        try {
            const userData = {
                firstName,
                lastName,
                email,
                password
            }
            const newUser = await axios.post(createUsers, userData);
            console.log(newUser.data);
            alert("New user created");
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <section className="mx-auto w-70 container shadow-lg px-4" style={{ height: "400px" }}>
                <h6 className="text-center text-muted display-6">Sign up</h6>
                <input id="input1" placeholder="First name" type="text" className="form-control border border-dark w-100 my-3"
                    onChange={(e) => { setFirstName(e.target.value) }} />

                <input id="input2" placeholder="Last name" type="text" className="form-control border border-dark w-100 my-3"
                    onChange={(e) => { setLastName(e.target.value) }} />

                <input id="input3" placeholder="Email" type="text" className="form-control border border-dark w-100 my-3"
                    onChange={(e) => { setEmail(e.target.value) }} />

                <input id="input3" placeholder="Password" type="text" className="form-control border border-dark w-100 my-3"
                    onChange={(j) => { setPassword(j.target.value) }} />

                <button className="btn btn-dark" onClick={() => { createUser() }}>Create user</button>
            </section>
        </>
    )
}

export default Signup