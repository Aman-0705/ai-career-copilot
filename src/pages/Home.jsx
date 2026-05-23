import Navbar from "../components/Navbar";
import { easeInOut, motion } from "framer-motion";
import FeatureCards from "../components/FeatureCards";
import StatsSection from "../components/StatsSection";
import Button from "../components/Button";
import Testimonials from "../components/Testimonials";
// import BackendTest from "../components/BackendTest";
// import GreetingsForm from "../components/GreetingsForm";
import ApplicationTracker from "../components/ApplicationTracker";

const Home = () => {
    return(
        <div className="bg-black min-h-screen text-white relative overflow-hidden">
            <Navbar />


<motion.div
animate={{
    x:[0,40,0],
    y:[0,-40,0],
}}
transition={{
    duration:6,
    repeat:Infinity,
    ease:easeInOut,
}}
 className="pointer-events-none absolute top-40 left-10 w-[500px] h-[500px] bg-purple-500 rounded-full blur-[150px] opacity-40 -z-0" />

<motion.div 
animate={{
    x:[0,40,0],
    y:[0,40,0],
}}
transition={{
    duration:7,
    repeat:Infinity,
    ease: easeInOut,
}}
className="pointer-events-none absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[150px] opacity-40 -z-0" />
   <motion.section 
   initial={{
    opacity:0,
    y:40,
   }}
   animate={{
    opacity:1,
    y:0,
   }}
   transition={{
    duration: 1,
    ease:"easeOut",
   }}
   className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-32 text-center">

                <div className="inline-block border border-gray-700 px-4 py-2 rounded-full text-sm text-gray-300 mb-8">
                    AI Powered career Growth Platform
                </div>
                <h1 className="text-7xl font-bold max-w-4xl mx-auto leading-tight">
                    Accelerate your Career With <br />
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        {" "}AI Guidance
                    </span>
                </h1>
                <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
                    Build resumes, prepare for interviews,
                    track applications, and grow your tech career 
                    with AI-powered tools.
                </p>
                <div className="flex justify-center gap-6 mt-10">
                    <Button text="Get Started" />
                    <button className="border-2 border-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-500 hover:scale-105 transition duration-300">
                        Explore Features
                    </button>
                </div>
            </motion.section>
            <FeatureCards />
            <StatsSection />
            <Testimonials />
            <ApplicationTracker />
            
        </div>
    );
};

export default Home;