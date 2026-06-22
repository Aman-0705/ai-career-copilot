import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSignup = async () => {
        try {

            setLoading(true);
            setMessage("");

            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/auth/signup`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username,
                        email,
                        password
                    }),
                }
            );

            const data = await response.json();

            setMessage(data.message);

            if (response.ok) {

                setTimeout(() => {
                    navigate("/login");
                }, 1000);

            }

        } catch (error) {

            console.log(error);

            setMessage(
                "Unable to connect to server"
            );

        } finally {

            setLoading(false);

        }
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

                        <button
                            onClick={handleSignup}
                            disabled={loading}
                            className={`w-full py-4 rounded-xl font-semibold text-lg transition
                               ${loading
                                    ? "bg-gray-600 cursor-not-allowed"
                                    : "bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105"
                                }`}
                        >
                            {
                                loading
                                    ? "Creating Account..."
                                    : "Signup"
                            }
                        </button>
                        {
                            loading && (
                                <div className="flex flex-col items-center mt-4 gap-3">

                                    <div className="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>

                                    <p className="text-sm text-gray-400 text-center">
                                        Creating your account...
                                    </p>

                                </div>
                            )
                        }
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