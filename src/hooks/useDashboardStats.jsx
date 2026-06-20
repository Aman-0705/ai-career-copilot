import {
    useState,
    useEffect
} from "react";

import {
    fetchDashboardStats
} from "../services/dashboardService";

const useDashboardStats = () => {

    const [stats, setStats] =
        useState(null);

    useEffect(() => {

        const loadStats =
            async () => {

                const data =
                    await fetchDashboardStats();

                setStats(data);

            };

        loadStats();

    }, []);

    return stats;

};

export default useDashboardStats;