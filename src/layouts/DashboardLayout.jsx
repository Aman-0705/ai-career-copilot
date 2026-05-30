import Navbar from "../components/Navbar";

const DashboardLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-black text-white pt-15">
            <Navbar />
            <div className="p-10">
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;