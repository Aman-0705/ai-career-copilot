import {motion} from "framer-motion";

const testimonials = [
    {
        name : "Aman Sharma",
        role: "Software Developer",
        review:  "This platform completely transformed how I prepared for interviews and improved my resume.",
    },
    {
        name: "Rahul Verma",
        role: "Software Engineer",
        review: "The AI-powered feedback helped me land more interviews within weeks.",
    },
    {
        name: "Priya Kapoor",
        role: "AI Enthusiast",
        review: "The dashboard and interview preparation tools feel incredibly modern and useful.",
    },
];

const Testimonials = () =>{
    return(
        <section className="max-w-7xl mx-auto px-6 py-32">
            <div className="text-center mb-20">
                <h2 className="text-5xl font-bold">
                    What Users Say
                </h2>
                <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
                    Thousands of students and developers trust
                    AI Career Copilot to accelerate their growth.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((item,index)=>(
                    <motion.div
                    key={index}
                    whileHover={{
                        y:-10,
                    }}
                    transition={{
                        duration:0.3,
                    }}
                    className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:border-purple-500/30 transition duration-300"
                    >
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center text-black font-bold text-xl mb-6">
                            {item.name.charAt(0)}
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-8">
                            {item.review}
                        </p>
                        <div>
                        <h3 className="text-xl font-semibold">
                            {item.name}
                        </h3>
                        <p className="text-gray-400 mt-1">
                            {item.role}
                        </p>
                        </div>

                    </motion.div>
                ))}
            </div>
        </section>
    );
};
export default Testimonials;

// const Testimonials = () => {
//   return (
//     <div className="text-white">
//       Testimonials Working
//     </div>
//   );
// };

// export default Testimonials;