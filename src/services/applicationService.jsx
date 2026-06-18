export const fetchApplications = async () => {
    const token = localStorage.getItem("token");
    console.log("TOKEN:", token);

    const response = await fetch(
        "http://localhost:5000/api/applications",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    const data = await response.json();

    return data;
};

