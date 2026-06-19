import DashboardLayout from "../layouts/DashboardLayout";
import { useState } from "react";

const ATSAnalyzer = () => {
    const [resume, setResume] = useState(null);
    const [message, setMessage] = useState("");
    // const [resumeText, setResumeText] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [score, setScore] = useState(null);
    const [strengths, setStrengths] = useState([]);
    const [missingSkills, setMissingSkills] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const handleAnalyze = async () => {
        if (!resume) {
            setMessage("Please select a resume");
            return;
        }
        if (!jobDescription.trim()) {
            setMessage(
                "Please paste a Job Description"
            );
            return;
        }
        const formData = new FormData();
        formData.append("resume", resume);
        formData.append("jobDescription", jobDescription);
        try {
            const response = await fetch("http://localhost:5000/api/ats/upload", {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            setMessage(data.message);
            setScore(data.score);

            setStrengths(
                data.strengths || []
            );

            setMissingSkills(
                data.missingSkills || []
            );

            setSuggestions(
                data.suggestions || []
            );
            // setResumeText(data.text);
            console.log(data);
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <DashboardLayout>
            <h1 className="text-5xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                ATS Resume Analyzer
            </h1>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 max-w-4xl mx-auto">

                <p className="text-center text-gray-400 mb-8">
                    Upload your resume and get ATS insights.
                </p>

                <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setResume(e.target.files[0])}
                    className="w-full p-4 rounded-xl bg-black border border-gray-700"
                />
                <textarea
                    placeholder="Paste Job Description Here..."
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="w-full mt-6 p-4 rounded-xl bg-black border border-gray-700 h-48"
                />

                <button
                    onClick={handleAnalyze}
                    className="w-full mt-6 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 font-semibold"
                >
                    Analyze Resume
                </button>
                {
                    message && (
                        <p className="text-center mt-6 text-green-400">
                            {message}
                        </p>
                    )
                }
                {
                    score !== null && (
                        <div className="mt-8 bg-white/5 border border-white/10 rounded-3xl p-8">

                            <h2 className="text-3xl font-bold text-center mb-6">
                                ATS Match Score
                            </h2>

                            <p className="text-6xl text-center font-bold text-purple-400">
                                {score}%
                            </p>

                        </div>
                    )
                }
                {
                    strengths.length > 0 && (
                        <div className="mt-8 bg-white/5 border border-green-500 rounded-3xl p-8">

                            <h3 className="text-2xl font-bold mb-4 text-green-400">
                                Matched Keywords
                            </h3>

                            <ul>
                                {strengths.map((skill) => (
                                    <li key={skill}>
                                        ✓ {skill}
                                    </li>
                                ))}
                            </ul>

                        </div>
                    )
                }
                {
                    missingSkills.length > 0 && (
                        <div className="mt-8 bg-white/5 border border-red-500 rounded-3xl p-8">

                            <h3 className="text-2xl font-bold mb-4 text-red-400">
                                Missing Skills
                            </h3>

                            <ul>
                                {missingSkills.map((skill) => (
                                    <li key={skill}>
                                        ✗ {skill}
                                    </li>
                                ))}
                            </ul>

                        </div>
                    )
                }
                {
                    suggestions.length > 0 && (
                        <div className="mt-8 bg-white/5 border border-blue-500 rounded-3xl p-8">

                            <h3 className="text-2xl font-bold mb-4 text-blue-400">
                                Suggestions
                            </h3>

                            {
                                suggestions.map((item) => (
                                    <p key={item}>
                                        • {item}
                                    </p>
                                ))
                            }

                        </div>
                    )
                }

            </div>
        </DashboardLayout>
    );
};

export default ATSAnalyzer;