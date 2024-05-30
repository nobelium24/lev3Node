import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Edit = () => {
    const updateUserRoute = "http://localhost:5200/users/update";

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const itemsToBeEdited = JSON.parse(localStorage.getItem("itemToBeEdited"));

    const updateItem = async (id) => {
        const payload = {
            firstName: firstName || itemsToBeEdited.firstName,
            lastName: lastName || itemsToBeEdited.lastName,
            email: email || itemsToBeEdited.email,
            password: password || itemsToBeEdited.password
        }
        try {
            const updateUserAction = await axios.post(`${updateUserRoute}/${id}`, payload);
            console.log(updateUserAction);
            alert("User updated");
            navigate("/");
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <section className="mx-auto w-70 container shadow-lg px-4" style={{ height: "400px" }}>
                <h6 className="text-center text-muted display-6">Shopping List</h6>
                <input id="input1" placeholder="First name" type="text" className="form-control border border-dark w-100 my-3"
                    onChange={(e) => { setFirstName(e.target.value) }} defaultValue={itemsToBeEdited.firstName} />

                <input id="input2" placeholder="Last name" type="text" className="form-control border border-dark w-100 my-3"
                    onChange={(e) => { setLastName(e.target.value) }} defaultValue={itemsToBeEdited.lastName} />

                <input id="input3" placeholder="Email" type="text" className="form-control border border-dark w-100 my-3"
                    onChange={(e) => { setEmail(e.target.value) }} defaultValue={itemsToBeEdited.email} />

                <input id="input3" placeholder="Password" type="text" className="form-control border border-dark w-100 my-3"
                    onChange={(j) => { setPassword(j.target.value) }} defaultValue={itemsToBeEdited.password} />

                <button className="btn btn-dark" onClick={() => { updateItem(itemsToBeEdited._id) }}>Update user</button>
            </section>
        </>
    )
}

export default Edit