import Navbar from "../components/Navbar";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async () => {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        console.log(data);

        if(data.token) {
            localStorage.setItem("token",data.token);
        };

        setMessage(data.message);
    }

    return (

        <div className="bg-black min-h-screen text-white">

            <Navbar />

            <div className="flex items-center justify-center min-h-screen">

                <div className="bg-white/5 border border-white/10 rounded-3xl p-10 w-full max-w-md">

                    <h1 className="text-4xl font-bold mb-8 text-center">

                        Welcome Back

                    </h1>

                    <div className="space-y-6">

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-4 rounded-xl bg-black border border-gray-700"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-4 rounded-xl bg-black border border-gray-700"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 font-semibold text-lg" onClick={handleLogin}>

                            Login

                        </button>
                        {
                            message && (
                                <p className="text-center mt-4 text-purple-400">
                                    {message}
                                </p>
                            )
                        }

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Login;