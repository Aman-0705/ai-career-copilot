require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

const applicationRoutes = require("./routes/applicationRoutes");
const authRoutes = require("./routes/authRoutes");
const pool = require("./config/database");
const authMiddleware = require("./middleware/authMiddleware");
const atsRoutes = require("./routes/atsRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

app.use(cors());

app.use(express.json());

app.use("/api", applicationRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/ats",atsRoutes);
app.use("/api/dashboard",dashboardRoutes);

// pool.query("SELECT NOW()", (err, res) => {

//     if (err) {
//         console.log("Database Connection Error");
//         console.log(err);
//     } else {
//         console.log("Database Connected");
//         console.log(res.rows);
//     }

// });

app.listen(PORT, () => {

    console.log(`Server running on Port ${PORT}`);

});