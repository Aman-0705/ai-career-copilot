import { motion } from "framer-motion";
import { section } from "framer-motion/client";

const stats = [{
    number:"10K+",
    label:"Active Users",
},
{
    number:"50K+",
    label:"Resumes Reviewed",
},
{
    number:"95%",
    label:"Interview Success",
},
{
    number:"24/7",
    label:"AI Career Guidance",
},];

const StatsSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-32">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat,index)=>(
                    <motion.div
                    key={index}
                    whileHover={{
                        scale:1.05,
                    }}
                    transition={{
                        duration:0.3,
                    }}
                    className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl text-center p-8 hover:border-purple-500/30 transition duration-300"
                    >
                        <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            {stat.number}
                        </h2>
                        <p className="text-gray-400 mt-4 text-lg">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default StatsSection;