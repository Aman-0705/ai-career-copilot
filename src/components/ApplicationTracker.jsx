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
                "http://localhost:5000/api/applications",
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
            `http://localhost:5000/api/applications/${id}`,
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
            `http://localhost:5000/api/applications/${id}`,
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

        <div className="relative z-50 max-w-4xl mx-auto py-20 text-white">

            <h2 className="text-4xl font-bold text-center mb-10">
                Job Application Tracker
            </h2>

            <div className="flex gap-4 mb-8 pt-5">

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
                        className="bg-white/5 border border-white/10 p-6 rounded-2xl"
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

                        <div className="flex gap-5 mt-4 justify-center ">

                            <button
                                onClick={() =>
                                    handleUpdateStatus(app.id, "Interview")
                                }
                                className="px-6 py-2 bg-blue-500 rounded-2xl"
                            >
                                Interview
                            </button>

                            <button
                                onClick={() =>
                                    handleUpdateStatus(app.id, "Offer")
                                }
                                className="px-4 py-2 bg-green-500 rounded-2xl"
                            >
                                Offer
                            </button>

                            <button onClick={() => handleUpdateStatus(app.id, "Rejected")}
                                className="px-4 py-2 bg-red-500 rounded-2xl">
                                Rejected
                            </button>

                            <button onClick={() => handleDeleteApplication(app.id)}
                                className="px-4 py-2 bg-white text-black rounded-2xl"
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