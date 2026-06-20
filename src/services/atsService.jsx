export const fetchATSHistory = async () => {

    const token =
        localStorage.getItem("token");

    const response =
        await fetch(
            "http://localhost:5000/api/ats/history",
            {
                headers: {
                    Authorization:
                        `Bearer ${token}`
                }
            }
        );

    const data =
        await response.json();

    return data;
};