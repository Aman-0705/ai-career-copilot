import DashboardLayout from "../layouts/DashboardLayout";

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
        </DashboardLayout>
    );
};

export default Dashbord;