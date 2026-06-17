import Button from "./Button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [openMenu, SetOpenMenu] = useState(false);
    const navigate = useNavigate();
    return (
        <nav className="fixed top-0 left-0 w-full z-50 pt-2">
            <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between text-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg ">
                <h1 className="text-3xl font-bold tracking-wide cursor-pointer">
                    AI Career Copilot
                </h1>
                <div className="hidden md:flex gap-8 text-lg text-center ">
                    <Link
                        to="/"
                        className="hover:text-purple-400 transition"
                    >
                        Home
                    </Link>

                    <Link
                        to="/dashboard"
                        className="hover:text-purple-400 transition"
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/applications"
                        className="hover:text-purple-400 transition"
                    >
                        Applications
                    </Link>

                    <Link
                        to="/login"
                        className="hover:text-purple-400 transition"
                    >
                        Login
                    </Link>

                    <Link
                        to="/signup"
                        className="hover:text-purple-400 transition"
                    >
                        Signup
                    </Link>
                    <Button text="Get Started" onClick={()=> navigate('/signup')} />
                </div>
                <button className="md:hidden text-3xl hover:scale-105" onClick={() => SetOpenMenu(!openMenu)}>
                    {openMenu ? "✕" : "☰"}
                </button>
                <AnimatePresence>
                    {
                        openMenu && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: -20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -20,
                                }}
                                transition={{
                                    duration: 0.3,
                                }}
                                className="absolute top-24 left-6 right-6 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-6 text-lg md:hidden">
                                <Link
                                    to="/"
                                    className="hover:text-purple-400 transition"
                                >
                                    Home
                                </Link>

                                <Link
                                    to="/dashboard"
                                    className="hover:text-purple-400 transition"
                                >
                                    Dashboard
                                </Link>

                                <Link
                                    to="/applications"
                                    className="hover:text-purple-400 transition"
                                >
                                    Applications
                                </Link>

                                <Link
                                    to="/login"
                                    className="hover:text-purple-400 transition"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/signup"
                                    className="hover:text-purple-400 transition"
                                >
                                    Sign Up
                                </Link>
                            </motion.div>
                        )
                    } </AnimatePresence>
            </div>
        </nav>

    );
};
export default Navbar;