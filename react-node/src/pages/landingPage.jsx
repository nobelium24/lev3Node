import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";



const LandingPage = () => {
    const viewUsers = "http://localhost:5200/users/viewUsers";
    const createUsers = "http://localhost:5200/users/createUser";
    const editUser = "http://localhost:5200/users/editUser";
    const deleteUser = "http://localhost:5200/users/delete";

    const verifyToken = "http://localhost:5200/users/verifyToken";


    const [users, setUsers] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const getUsers = async () => {
        try {
            const response = await axios.get(viewUsers)
            // console.log(response)
            setUsers(response.data)
        } catch (error) {
            console.log(error);
        }
    }


    const verifyTokenFunction = async () => {
        const token = localStorage.getItem("userToken");
        if (token === null) {
            alert("Unauthorized");
            navigate('/login')
        } else {
            try {
                const response = await axios.get(verifyToken, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                console.log(response);
            } catch (error) {
                console.log(error);
                alert("Unauthorized");
                navigate("/login");
            }
        }
    }

    useEffect(() => {
        verifyTokenFunction();
        getUsers();
    }, [])


    const addItem = async () => {
        try {
            let userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            }
            console.log(userDetails);

            const newUser = await axios.post(createUsers, userDetails);
            console.log(newUser);
            alert("New user added");
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }

    const editItem = async (id) => {
        try {
            const viewUserToBeEdited = await axios.get(`${editUser}/${id}`);
            console.log(viewUserToBeEdited);
            localStorage.setItem("itemToBeEdited", JSON.stringify(viewUserToBeEdited.data));
            navigate("/edit")
        } catch (error) {
            console.log(error)
        }
    }

    const deleteItem = async (id) => {
        try {
            const deleteUserAction = await axios.delete(`${deleteUser}/${id}`);
            console.log(deleteUserAction);
            alert("User deleted");
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <section className="mx-auto w-70 container shadow-lg px-4" style={{ height: "400px" }}>
                <h6 className="text-center text-muted display-6">Shopping List</h6>
                <input id="input1" placeholder="First name" type="text" className="form-control border border-dark w-100 my-3"
                    onChange={(e) => { setFirstName(e.target.value) }} />

                <input id="input2" placeholder="Last name" type="text" className="form-control border border-dark w-100 my-3"
                    onChange={(e) => { setLastName(e.target.value) }} />

                <input id="input3" placeholder="Email" type="text" className="form-control border border-dark w-100 my-3"
                    onChange={(e) => { setEmail(e.target.value) }} />

                <input id="input3" placeholder="Password" type="text" className="form-control border border-dark w-100 my-3"
                    onChange={(j) => { setPassword(j.target.value) }} />

                <button className="btn btn-dark" onClick={() => { addItem() }}>Create user</button>
            </section>

            <section id="displaySection" className="mx-auto w-70 container shadow-lg px-4">
                {
                    users && users.length === 0 ? <h6 className="text-center text-muted display-6">Empty list</h6> :

                        users.map((item, index) => {
                            return (
                                <>
                                    <div className="w-100 px-3 shadow-lg d-flex align-items-center justify-content-between py-3" style={{ height: 'fit-content' }}>
                                        <p>S/N: {index + 1}</p>
                                        <p>Item first name: {item.firstName}</p>
                                        <p>Item last name: {item.lastName}</p>
                                        <p>Item email: {item.email}</p>
                                        <button className='btn btn-dark' onClick={() => (editItem(item._id))}>Edit</button>
                                        <button className='btn btn-dark' onClick={() => (deleteItem(item._id))}>Delete</button>
                                    </div>
                                </>
                            )
                        })
                }
            </section >
        </>
    )
}

export default LandingPage