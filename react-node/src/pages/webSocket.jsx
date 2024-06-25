import {useState, useEffect, useRef} from 'react'
import io from 'socket.io-client';  

const WebSocket = () => {
    const endpoint = 'http://localhost:5200';
    const [message, setMessage] = useState('');
    const [receivedMessages, setReceivedMessages] = useState([]);

    let socket = useRef();

    useEffect(()=>{
        socket.current = io(endpoint);
        console.log(socket);
    }, [])

    const sendMessage = () =>{
        socket.current.emit("message", message);
    }

    useEffect(()=>{
        if(receivedMessages){
            socket.current.on('broadcast', (message)=>{
                setReceivedMessages([...receivedMessages, message])
            })
        }
        console.log(receivedMessages);
    }, [receivedMessages])

    return (
        <>
            <div className='d-flex flex-row align-items-center justify-content-center w-75 mx-auto shadow-lg' style={{height:"300px"}}>
                <input type="text" onChange={(e)=>setMessage(e.target.value)} />
                <button className='btn btn-dark' onClick={sendMessage}>Submit</button>
            </div>

            <div className='shadow-lg w-75 mt-5 mx-auto' style={{height:'fit-content', minHeight:"300px"}}>
                {
                    receivedMessages.map((item, index)=>{
                        <p key={index}>Message: {item}</p>
                    })
                }
            </div>
        </>
    )
}

export default WebSocket