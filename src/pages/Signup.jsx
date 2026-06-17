import { secondsToMilliseconds } from "framer-motion";
import Navbar from "../components/Navbar";
import { useState } from "react";


const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSignup = async () => {
        // console.log("Signup button clicked");
        const response = await fetch("http://localhost:5000/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, email, password }),
        });
        const data = await response.json();
        setMessage(data.message);
    };

    return (

        <div className="bg-black min-h-screen text-white">

            <Navbar />

            <div className="flex items-center justify-center min-h-screen">

                <div className="bg-white/5 border border-white/10 rounded-3xl p-10 w-full max-w-md">

                    <h1 className="text-4xl font-bold mb-8 text-center">

                        Create Account

                    </h1>

                    <div className="space-y-6">

                        <input
                            type="text"
                            placeholder="Name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-4 rounded-xl bg-black border border-gray-700"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-4 rounded-xl bg-black border border-gray-700"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-4 rounded-xl bg-black border border-gray-700"
                        />

                        <button className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 font-semibold text-lg" onClick={handleSignup}>

                            Signup

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

export default Signup;