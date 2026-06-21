export const fetchATSHistory = async () => {

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

    return data;
};