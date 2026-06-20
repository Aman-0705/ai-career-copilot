import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Applications from "../pages/Applications";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoute from "../components/ProtectedRoute";
import ATSAnalyzer from "../pages/ATSAnalyzer";
import ATSHistory from "../pages/ATSHistory";

const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
            <Route path="/applications" element={<ProtectedRoute> <Applications /> </ProtectedRoute>} />
            <Route path="/ats-analyzer" element={<ProtectedRoute> <ATSAnalyzer /> </ProtectedRoute>} />
            <Route path="/ats-history" element={<ProtectedRoute> <ATSHistory /> </ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
        </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;