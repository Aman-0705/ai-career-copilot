import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

const ATSHistory = () => {

    const [reports, setReports] = useState([]);
    const [openReport, setOpenReport] = useState(null);

    useEffect(() => {

        const loadReports = async () => {

            const token =
                localStorage.getItem("token");

            const response =
                await fetch(
                    `${import.meta.env.VITE_API_URL}/api/ats/history`,
                    {
                        headers: {
                            Authorization:
                                `Bearer ${token}`
                        }
                    }
                );

            const data =
                await response.json();

            setReports(data);

        };

        loadReports();

    }, []);

    return (

        <DashboardLayout>

            <h1 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent pb-4">

                ATS History

            </h1>

            <div className="space-y-6">

                {reports.map((report) => (

                    <div
                        key={report.id}
                        className="bg-white/5 border border-white/10 rounded-3xl p-8"
                    >

                        <h2 className="text-3xl font-bold text-purple-400">

                            ATS Score:
                            {report.score}%

                        </h2>

                        <p className="mt-4 text-gray-400">

                            Created:
                            {" "}
                            {new Date(
                                report.created_at
                            ).toLocaleString()}

                        </p>
                        <button
                            onClick={() =>
                                setOpenReport(
                                    openReport === report.id
                                        ? null
                                        : report.id
                                )
                            }
                            className="mt-6 px-6 py-2 rounded-xl bg-purple-600 hover:bg-purple-700"
                        >
                            {
                                openReport === report.id
                                    ? "Hide Details"
                                    : "View Details"
                            }
                        </button>
                        {
                            openReport === report.id && (
                                <>
                                    <div className="mt-6">

                                        <h3 className="text-green-400 font-bold text-xl">
                                            Strengths
                                        </h3>

                                        <ul className="mt-2">
                                            {report.strengths?.map((item, index) => (
                                                <li key={index}>
                                                    ✅ {item}
                                                </li>
                                            ))}
                                        </ul>

                                    </div>

                                    <div className="mt-6">

                                        <h3 className="text-red-400 font-bold text-xl">
                                            Missing Skills
                                        </h3>

                                        <ul className="mt-2">
                                            {report.missing_skills?.map((item, index) => (
                                                <li key={index}>
                                                    ❌ {item}
                                                </li>
                                            ))}
                                        </ul>

                                    </div>

                                    <div className="mt-6">

                                        <h3 className="text-blue-400 font-bold text-xl">
                                            Suggestions
                                        </h3>

                                        <ul className="mt-2">
                                            {report.suggestions?.map((item, index) => (
                                                <li key={index}>
                                                    💡 {item}
                                                </li>
                                            ))}
                                        </ul>

                                    </div>
                                </>
                            )
                        }

                    </div>

                ))}

            </div>

        </DashboardLayout>

    );

};

export default ATSHistory;