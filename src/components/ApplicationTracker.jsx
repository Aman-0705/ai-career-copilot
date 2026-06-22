import { useEffect, useState } from "react";
import { fetchApplications } from "../services/applicationService";

const ApplicationTracker = () => {

    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");
    const [applications, setApplications] = useState([]);

    const loadApplications = async () => {

        const data = await fetchApplications();

        setApplications(data);

    };

    useEffect(() => {

        loadApplications();

    }, []);

    const handleAddApplication = async () => {
        const token = localStorage.getItem("token");

        try {

            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/applications`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },

                    body: JSON.stringify({
                        company,
                        role,
                    }),
                }
            );

            const data = await response.json();

            console.log("POST DATA:", data);

            await loadApplications();

            setCompany("");
            setRole("");

        } catch (error) {

            console.log(error);

        }

    };

    const handleDeleteApplication = async (id) => {

        const token = localStorage.getItem("token");

        await fetch(
            `${import.meta.env.VITE_API_URL}/api/applications/${id}`,
            {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        await loadApplications();
    };

    const handleUpdateStatus = async (id, status) => {

        const token = localStorage.getItem("token");

        await fetch(
            `${import.meta.env.VITE_API_URL}/api/applications/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    status
                })
            }
        );

        await loadApplications();
    };

    return (

        <div className="max-w-5xl mx-auto py-10 md:py-20 text-white">

            <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
                Job Application Tracker
            </h2>

            <div className="flex flex-col md:flex-row gap-4 mb-8 pt-5">

                <input
                    type="text"
                    placeholder="Company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl bg-black border border-gray-700"
                />

                <input
                    type="text"
                    placeholder="Role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl bg-black border border-gray-700"
                />

                <button
                    onClick={handleAddApplication}
                    className="px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-600"
                >
                    Add
                </button>

            </div>

            <div className="space-y-4 text-center">

                {applications.map((app) => (

                    <div
                        key={app.id}
                        className="bg-white/5 border border-white/10 p-5 md:p-6 rounded-2xl overflow-hidden"
                    >

                        <h3 className="text-2xl font-semibold">
                            {app.company}
                        </h3>

                        <p className="text-gray-400 mt-2">
                            {app.role}
                        </p>



                        <p className="mt-4 text-yellow-400">
                            Status : {app.status}
                        </p>

                        <div className="grid grid-cols-2 md:flex gap-3 mt-6 justify-center">

                            <button
                                onClick={() =>
                                    handleUpdateStatus(app.id, "Interview")
                                }
                                className="w-full md:w-auto px-4 py-2 rounded-2xl bg-blue-500"
                            >
                                Interview
                            </button>

                            <button
                                onClick={() =>
                                    handleUpdateStatus(app.id, "Offer")
                                }
                                className="w-full md:w-auto px-4 py-2 rounded-2xl bg-green-500"
                            >
                                Offer
                            </button>

                            <button onClick={() => handleUpdateStatus(app.id, "Rejected")}
                                className="w-full md:w-auto px-4 py-2 rounded-2xl bg-red-500">
                                Rejected
                            </button>

                            <button onClick={() => handleDeleteApplication(app.id)}
                                className="w-full md:w-auto px-4 py-2 rounded-2xl bg-white text-black"
                            >
                                Delete
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default ApplicationTracker;