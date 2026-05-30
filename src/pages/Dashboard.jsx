import DashboardLayout from "../layouts/DashboardLayout";
import { Link } from "react-router-dom";

const Dashbord = () => {
    return (
        <DashboardLayout>
            <h1 className="text-5xl font-bold mb-10 text-center p-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                    <h2 className="text-2xl font-semibold">
                        Applications
                    </h2>
                    <p className="text-5xl font-bold mt-6 text-purple-400">
                        12
                    </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

                    <h2 className="text-2xl font-semibold">
                        Interviews
                    </h2>

                    <p className="text-5xl font-bold mt-6 text-blue-400">
                        5
                    </p>

                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

                    <h2 className="text-2xl font-semibold">
                        Offers
                    </h2>

                    <p className="text-5xl font-bold mt-6 text-green-400">
                        2
                    </p>

                </div>
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

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 opacity-70">

                    <h3 className="text-3xl font-semibold">
                        Resume Analyzer
                    </h3>

                    <p className="text-gray-400 mt-4">
                        AI-powered resume insights coming soon.
                    </p>

                </div>

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
        </DashboardLayout>
    );
};

export default Dashbord;