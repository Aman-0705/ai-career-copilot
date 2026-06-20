import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from "recharts";

const ATSTrendChart = ({ reports }) => {

    const chartData =
        reports
            .slice()
            .reverse()
            .map((report, index) => ({
                report: index + 1,
                score: report.score
            }));

    return (

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-8">

                ATS Score Trend

            </h2>

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <LineChart data={chartData}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="report" />

                    <YAxis
                        domain={[0, 100]}
                    />

                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#111",
                            border: "1px solid #9333ea",
                            borderRadius: "12px"
                        }}
                    />

                    <Line
                        type="monotone"
                        dataKey="score"
                        stroke="#a855f7"
                        strokeWidth={3}
                        dot={{ r: 6 }}
                        activeDot={{ r: 8 }}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );

};

export default ATSTrendChart;