const fs = require("fs");
const pdfParse = require("pdf-parse");
const {
    analyzeResume,
} = require("../services/groqService");
const pool = require("../config/database");
const uploadResume = async (req, res) => {

    try {

        const filePath = req.file.path;

        const dataBuffer = fs.readFileSync(filePath);

        const pdfData = await pdfParse(dataBuffer);

        const resumeText =
            pdfData.text.toLowerCase();

        const jobDescription =
            req.body.jobDescription.toLowerCase();

        const aiResult =
            await analyzeResume(
                resumeText,
                jobDescription
            );

        const cleanedResult = aiResult
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        const parsedResult =
            JSON.parse(cleanedResult);

        const score =
            Math.round(
                parsedResult.matchScore * 100
            );

        await pool.query(
            `INSERT INTO ats_results
    (
        user_id,
        score,
        strengths,
        missing_skills,
        suggestions
    )
    VALUES
    ($1,$2,$3,$4,$5)`,

            [
                req.user.id,

                score,

                JSON.stringify(
                    parsedResult.strengths
                ),

                JSON.stringify(
                    parsedResult.missingSkills
                ),

                JSON.stringify(
                    parsedResult.suggestions
                )
            ]
        );

        res.json({
            message:
                "Resume analyzed successfully",

            score:
                score,

            strengths:
                parsedResult.strengths,

            missingSkills:
                parsedResult.missingSkills,

            suggestions:
                parsedResult.suggestions,

            resumeText
        });


    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "PDF parsing failed"
        });

    }

};

const getATSHistory = async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT * FROM ats_results WHERE user_id = $1 ORDER BY created_at DESC`,
            [req.user.id]
        );
        const reports = result.rows.map((report) => ({
            ...report,

            strengths:
                JSON.parse(report.strengths || "[]"),

            missing_skills:
                JSON.parse(report.missing_skills || "[]"),

            suggestions:
                JSON.parse(report.suggestions || "[]")
        }));

        res.json(reports);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = {
    uploadResume,
    getATSHistory,
};