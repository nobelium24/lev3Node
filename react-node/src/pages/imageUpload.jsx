import { useState } from 'react';
import axios from "axios";

export const ImageUpload = () => {
    const route = 'http://localhost:5200/images/upload_image';
    const [base64Image, setBase64Image] = useState('');

    const uploadImage = async () => {
        try {
            console.log(base64Image);
            const response = await axios.post(route, {base64Image});
            console.log(response);
            alert("image upload successful");
        } catch (error) {
            console.log(error)
            alert("Error Uploading image")
        }
    }

    const imageConverter = (e) => {
        const image = e.target.files[0]
        const fileReader = new FileReader();
        fileReader.readAsDataURL(image);
        fileReader.onload = () => {
            const result = fileReader.result
            setBase64Image(result);
        }
    }

    return (
        <>
            <input type="file" onChange={(e) => imageConverter(e)} />
            <button onClick={() => uploadImage()}>Upload</button>
            <img src="https://res.cloudinary.com/woleogunba/image/upload/v1718276169/rod4zhnjwq24dhgy6zoh.jpg" alt="" />
        </>
    )
}
