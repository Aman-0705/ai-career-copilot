import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem("token");
    return (
        
        <section className="min-h-screen flex items-center justify-center text-center px-6">

            <div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-bold leading-tight"
                >

                    Build Your
                    <span className="text-purple-400">
                        {" "}Dream Career
                    </span>

                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mt-8 text-xl text-gray-400 max-w-3xl mx-auto"
                >

                    Track applications, prepare interviews,
                    improve resumes, and grow with AI-powered career tools.

                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-10"
                >

                    {isLoggedIn ? (
                        <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-xl font-semibold hover:scale-105 transition" onClick={()=> navigate('/dashboard')} >
                            Go to Dashboard
                        </button>
                    ) : (
                        <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-xl font-semibold hover:scale-105 transition" onClick={()=> navigate('/signup')} >
                            Get Started
                        </button>
                    )}

                </motion.div>

            </div>

        </section>

    );

};

export default HeroSection;