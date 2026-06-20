const RecentATSReports = ({ reports }) => {

    const recentReports =
        reports.slice(0, 3);

    return (

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6">

                Recent ATS Reports

            </h2>

            <div className="space-y-4">

                {recentReports.map((report) => (

                    <div
                        key={report.id}
                        className="flex justify-between items-center border-b border-white/10 pb-3"
                    >

                        <span className="text-yellow-400 font-semibold">

                            {report.score}%

                        </span>

                        <span className="text-gray-400">

                            {
                                new Date(
                                    report.created_at
                                ).toLocaleDateString()
                            }

                        </span>

                    </div>

                ))}

            </div>

        </div>

    );

};

export default RecentATSReports;