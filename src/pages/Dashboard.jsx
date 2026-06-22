import DashboardLayout from "../layouts/DashboardLayout";
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { fetchApplications } from "../services/applicationService";
import { div } from "framer-motion/client";
import useApplications from "../hooks/useApplications";
import useDashboardStats from "../hooks/useDashboardStats";
import ATSTrendChart from "../components/ATSTrendChart";
import useATSHistory from "../hooks/useATSHistory";
import RecentATSReports from "../components/RecentATSReports";


const Dashboard = () => {
    const applications = useApplications();
    const stats = useDashboardStats();
    const atsReports = useATSHistory();
    return (
        <DashboardLayout>
            <h1 className="text-3xl md:text-5xl font-bold mb-10 text-center p-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                    <h2 className="text-2xl font-semibold">
                        Applications
                    </h2>
                    <p className="text-3xl md:text-5xl font-bold mt-6 text-purple-400">
                        {
                            stats
                                ? stats.totalApplications
                                : 0
                        }
                    </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

                    <h2 className="text-2xl font-semibold">
                        Interviews
                    </h2>

                    <p className="text-3xl md:text-5xl font-bold mt-6 text-blue-400">
                        {
                            stats
                                ? stats.interviews
                                : 0
                        }
                    </p>

                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

                    <h2 className="text-2xl font-semibold">
                        Offers
                    </h2>

                    <p className="text-3xl md:text-5xl font-bold mt-6 text-green-400">
                        {
                            stats
                                ? stats.offers
                                : 0
                        }
                    </p>

                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

                    <h2 className="text-2xl font-semibold">
                        Latest ATS Score
                    </h2>

                    <p className="text-3xl md:text-5xl font-bold mt-6 text-yellow-400">
                        {
                            stats
                                ? `${stats.latestATS}%`
                                : "0%"
                        }
                    </p>

                </div>
            </div>
            <div className="mt-12">

                <ATSTrendChart
                    reports={atsReports}
                />

            </div>
            <div className="mt-10">

                <RecentATSReports
                    reports={atsReports}
                />

            </div>
            <h2 className="text-4xl font-bold mt-20 mb-10 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Quick Actions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <Link
                    to="/applications"
                    className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition"
                >

                    <h3 className="text-3xl font-semibold">
                        Open Applications
                    </h3>

                    <p className="text-gray-400 mt-4">
                        Manage and track job applications.
                    </p>

                </Link>
                <Link
                    to="/ats-analyzer"
                    className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition"
                >

                    <h3 className="text-3xl font-semibold">
                         Resume Analyzer
                    </h3>

                    <p className="text-gray-400 mt-4">
                        AI-powered resume insights and ATS match score analysis.
                    </p>

                </Link>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 opacity-70">

                    <h3 className="text-3xl font-semibold">
                        Analytics
                    </h3>

                    <p className="text-gray-400 mt-4">
                        Career analytics dashboard coming soon.
                    </p>

                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 opacity-70">

                    <h3 className="text-3xl font-semibold">
                        AI Interview Prep
                    </h3>

                    <p className="text-gray-400 mt-4">
                        Practice smarter with AI-generated interviews.
                    </p>

                </div>

            </div>
            <h1 className="text-3xl md:text-5xl font-semibold mt-20 mb-10 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Recent Applications
            </h1>
            
            <div className="space-y-4 text-center">
                {applications.slice(0, 3).map((app) => {
                    return (
                        <div key={app.id}
                            className="bg-white/5 border border-white/10 rounded-3xl p-6 ">
                            <h3 className="text-xl md:text-2xl font-semibold">{app.company}</h3>
                            <p className="text-gray-400 mt-3">{app.role}</p>
                            <p className="text-purple-400 mt-3">{app.status}</p>
                        </div>)
                })}
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;