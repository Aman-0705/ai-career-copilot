const fs = require("fs");
const pdfParse = require("pdf-parse");
const {
    analyzeResume,
} = require("../services/groqService");

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

        res.json({
            message:
                "Resume analyzed successfully",

            score:
                parsedResult.matchScore,

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

module.exports = {
    uploadResume
};