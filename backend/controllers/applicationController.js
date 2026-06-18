const pool = require("../config/database");

const getApplication = async(req, res) => {

    try {
        const result = await pool.query("SELECT * FROM applications WHERE user_id = $1 ORDER BY id DESC", [req.user.id]);
        res.json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
};

const addApplication = async (req, res) => {
    try {
        const { company, role } = req.body;
        const result = await pool.query("INSERT INTO applications (company,role,status,user_id) VALUES ($1,$2,$3,$4) RETURNING *",[company,role,"Applied",req.user.id]);
        res.json({
            message: "Application added successfully!",
            application: result.rows[0]
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
   
};

const deleteApplication = async (req, res) => {

    try {

        const applicationId = req.params.id;

        await pool.query(
            "DELETE FROM applications WHERE id = $1 AND user_id = $2",
            [
                applicationId,
                req.user.id
            ]
        );

        res.json({
            message: "Application deleted successfully!"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};

const updateApplicationStatus = async (req, res) => {

    try {

        const applicationId = req.params.id;

        const { status } = req.body;

        const result = await pool.query(
            `UPDATE applications
             SET status = $1
             WHERE id = $2
             AND user_id = $3
             RETURNING *`,
            [
                status,
                applicationId,
                req.user.id
            ]
        );

        res.json({
            message: "Application updated successfully!",
            application: result.rows[0]
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};

module.exports = {
    getApplication,
    addApplication,
    deleteApplication,
    updateApplicationStatus,
};