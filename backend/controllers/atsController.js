const fs = require("fs");
const pdfParse = require("pdf-parse");

const uploadResume = async (req, res) => {

    try {

        const filePath = req.file.path;

        const dataBuffer = fs.readFileSync(filePath);

        const pdfData = await pdfParse(dataBuffer);

        const resumeText =
            pdfData.text.toLowerCase();

        const jobDescription =
            req.body.jobDescription.toLowerCase();

        const jdWords =
            jobDescription
                .replace(/[^\w\s]/g, "")
                .split(/\s+/)
                .filter(word => word.length > 3);

        const uniqueKeywords =
            [...new Set(jdWords)];

        const matchedKeywords =
            uniqueKeywords.filter(keyword =>
                resumeText.includes(keyword)
            );

        const missingKeywords =
            uniqueKeywords.filter(keyword =>
                !resumeText.includes(keyword)
            );

        const matchScore =
            Math.round(
                (matchedKeywords.length /
                    uniqueKeywords.length) * 100
            );

        console.log({
            score: matchScore,
            matchedKeywords,
            missingKeywords
        });
        res.json({
            message:
                "Resume analyzed successfully",

            score: matchScore,

            matchedKeywords,

            missingKeywords,

            resumeText: pdfData.text
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