import { useState } from "react";
 const GreetingsForm = () => {
    const [name,setName] = useState("");
    const [reply,setReply] = useState("");
    const handleSubmit = async () =>{
        const response = await fetch("http://localhost:5000/api/greet",
            {method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:name,
            }),
    });
        const data = await response.json();
        setReply(data.reply);
    };

    return(
        <div className="text-center text-white py-20">
            <h2 className="text-4xl font-bold mb-8">
                Send data to backend
            </h2>
            <input type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="px-4 py-3 rounded-xl bg-black border border-gray-700" />

            <button
        onClick={handleSubmit}
        className="ml-4 px-6 py-3 rounded-xl bg-purple-500"
      >
        Send
      </button>
      <p className="mt-8 text-2xl text-blue-400">
        {reply}
      </p>
        </div>
    );
 };

 export default GreetingsForm;