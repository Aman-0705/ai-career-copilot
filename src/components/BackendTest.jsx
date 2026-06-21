import { useState,useEffect } from "react";

const BackendTest = () =>{
    const [message, setMessage] = useState("");
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/api/message`)
        .then((response) => response.json())
        .then((data)=>setMessage(data.message))
    },[]);

    return (
            <div className="text-center text-white py-20">
                <h2 className="text-4xl font-bold mb-6">
                    Backend Connection Test
                </h2>
                <p className="text-purple-500 text-2xl">
                    {message}
                </p>
            </div>
    );
};

export default BackendTest;