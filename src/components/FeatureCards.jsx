import { motion } from "framer-motion";

const features = [
    {
        title: "AI Resume Analysis",
        description: "Get Smart Resume Feedback and ATS optimization suggestions.",
        icon:"📄",
    },
    {
        title:"Interview Prepration",
        description:"Practice technical and HR interview questions powered by AI.",
        icon:"🎯",
    },
    {
        title:"Career Tracking",
        description:"Track applications, interviews, and career growth effeciently.",
        icon:"📈",
    },
];

const FeatureCards =() => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-32">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold">
                    Powerful Career tools
                </h2>
                <p className="text-gray-500 mt-6 text-lg max-w-2xl mx-auto">
                    Everything you need to accelerate your tech careerw
                    with modern AI-powered tools.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature,index)=>(
                    <motion.div
                    key={index}
                    whileHover={{
                        y:-5,
                        scale:1.02,
                    }}
                    transition={{
                        duration:0.3,
                    }}
                    className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:border-purple-500/40 hover:bg-white/10 transition duration-300"
                    >
                        <div className="text-5xl mb-6">
                            {feature.icon}
                        </div>
                        <div className="text-2xl font-semibold mb-4">
                            {feature.title}
                        </div>
                        <div className="text-gray-400 leading-relaxed">
                            {feature.description}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FeatureCards;