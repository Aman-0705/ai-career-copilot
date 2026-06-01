export const fetchApplications = async () => {
    const response = await fetch("http://localhost:5000/api/applications");
    const data = await response.json();
    return data;
};