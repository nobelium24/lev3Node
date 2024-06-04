import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const createUsers = "http://localhost:5200/users/login";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const loginUser = async () => {
        try {
            const userData = {
                email,
                password
            }
            const newUser = await axios.post(createUsers, userData);
            console.log(newUser.data);
            localStorage.setItem("userToken", newUser.data.token)
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <section className="mx-auto w-70 container shadow-lg px-4" style={{ height: "250px" }}>
                <h6 className="text-center text-muted display-6">Login</h6>
                <input id="input3" placeholder="Email" type="text" className="form-control border border-dark w-100 my-3"
                    onChange={(e) => { setEmail(e.target.value) }} />

                <input id="input3" placeholder="Password" type="text" className="form-control border border-dark w-100 my-3"
                    onChange={(j) => { setPassword(j.target.value) }} />

                <button className="btn btn-dark" onClick={() => { loginUser() }}>Create user</button>
            </section>
        </>
    )
}

export default Login