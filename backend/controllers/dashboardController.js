const pool = require("../config/database");

const getDashboardStats = async (req, res) => {

    try {

        const totalApplications =
            await pool.query(
                `SELECT COUNT(*)
                 FROM applications
                 WHERE user_id = $1`,
                [req.user.id]
            );

        const interviews =
            await pool.query(
                `SELECT COUNT(*)
                 FROM applications
                 WHERE user_id = $1
                 AND status = 'Interview'`,
                [req.user.id]
            );

        const offers =
            await pool.query(
                `SELECT COUNT(*)
                 FROM applications
                 WHERE user_id = $1
                 AND status = 'Offer'`,
                [req.user.id]
            );

        const latestATS =
            await pool.query(
                `SELECT score
                 FROM ats_results
                 WHERE user_id = $1
                 ORDER BY created_at DESC
                 LIMIT 1`,
                [req.user.id]
            );

        res.json({

            totalApplications:
                Number(
                    totalApplications.rows[0].count
                ),

            interviews:
                Number(
                    interviews.rows[0].count
                ),

            offers:
                Number(
                    offers.rows[0].count
                ),

            latestATS:
                latestATS.rows.length > 0
                    ? latestATS.rows[0].score
                    : 0

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};

module.exports = {
    getDashboardStats
};