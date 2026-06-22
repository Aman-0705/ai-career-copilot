import Navbar from "../components/Navbar";

const DashboardLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-black text-white pt-24 md:pt-28">
            <Navbar />
            <div className="px-4 py-8 md:p-10">
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;