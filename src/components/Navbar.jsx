import Button from "./Button";
import { useState } from "react";
import {motion,AnimatePresence} from "framer-motion";

const Navbar = () => {
    const [openMenu,SetOpenMenu] = useState(false);
    return (
        <nav className="fixed top-0 left-0 w-full z-50 pt-2">
            <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between text-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg">
                <h1 className="text-3xl font-bold tracking-wide cursor-pointer">
                    AI Career Copilot
                </h1>
                <div className="hidden md:flex gap-8 text-lg text-center ">
                    <a href="#" className="hover:-translate-y-1 hover:scale-105 transition duration-300">Home</a>
                    <a href="#" className="hover:-translate-y-1 hover:scale-105 transition duration-300">Features</a>
                    <a href="#" className="hover:-translate-y-1 hover:scale-105 transition duration-300">Login</a>
                    <Button text="Get Started" />
                </div>
                <button className="md:hidden text-3xl hover:scale-105" onClick={()=> SetOpenMenu(!openMenu)}>
                   {openMenu ? "✕" : "☰"}
                </button>
                <AnimatePresence>
                {
                    openMenu && (
                        <motion.div 
                        initial={{
                            opacity:0,
                            y:-20,
                        }}
                        animate={{
                            opacity:1,
                            y:0,
                        }}
                        exit={{
                            opacity:0,
                            y:-20,
                        }}
                        transition={{
                            duration:0.3,
                        }}
                        className="absolute top-24 left-6 right-6 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-6 text-lg md:hidden">
                            <a href="#" className="hover:text-purple-400 transition">Home</a>
                            <a href="#" className="hover:text-purple-400 transition">Features</a>
                            <a href="#" className="hover:text-purple-400 transition">Login</a>
                        </motion.div>
                    )
                } </AnimatePresence>
            </div>
        </nav>
        
    );
};
 export default Navbar;