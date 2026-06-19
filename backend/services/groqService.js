const Groq = require("groq-sdk");

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

const analyzeResume = async (
    resumeText,
    jobDescription
) => {

    const completion =
        await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",

            messages: [
                {
                    role: "system",
                    content:
                        `You are an ATS Resume Analyzer.

Return ONLY raw JSON.

Do NOT use markdown.
Do NOT use \`\`\`json.
Do NOT add explanations.

Format:

{
  "matchScore": 0,
  "strengths": [],
  "missingSkills": [],
  "suggestions": []
}`
                },
                {
                    role: "user",
                    content: `
Resume:
                ${resumeText}

Job Description:
                ${jobDescription}
                    `
                }
            ],

            temperature: 0.2,
        });

    return completion.choices[0].message.content;
};

module.exports = {
    analyzeResume,
};