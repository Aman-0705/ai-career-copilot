import Navbar from "../components/Navbar";

const Signup = () => {

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
                            className="w-full px-4 py-4 rounded-xl bg-black border border-gray-700"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-4 rounded-xl bg-black border border-gray-700"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-4 rounded-xl bg-black border border-gray-700"
                        />

                        <button className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 font-semibold text-lg">

                            Signup

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Signup;