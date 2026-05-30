import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Applications from "../pages/Applications";
import Login from "../pages/Login";

const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/login" element={<Login />} />
        </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;