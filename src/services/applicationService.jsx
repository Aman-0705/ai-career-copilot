export const fetchApplications = async () => {
    const token = localStorage.getItem("token");
    console.log("TOKEN:", token);

    const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/applications`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    const data = await response.json();

    return data;
};

