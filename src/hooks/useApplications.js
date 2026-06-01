import { useState, useEffect } from "react";
import { fetchApplications } from "../services/applicationService";

const useApplications = () => {
    const [applications, setApplications] = useState([]);
    useEffect(()=>{
        const loadApplication = async() =>{
            const data = await fetchApplications();
            setApplications(data);
        };
        loadApplication();

    },[]);
    return applications;
};

export default useApplications;