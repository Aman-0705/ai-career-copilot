import {
    useEffect,
    useState
} from "react";

import {
    fetchATSHistory
} from "../services/atsService";

const useATSHistory = () => {

    const [reports, setReports] =
        useState([]);

    useEffect(() => {

        const loadReports =
            async () => {

                const data =
                    await fetchATSHistory();

                setReports(data);

            };

        loadReports();

    }, []);

    return reports;

};

export default useATSHistory;