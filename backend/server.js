const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5000;

const applicationRoutes = require("./routes/applicationRoutes");

app.use(cors());

app.use(express.json());

app.use("/api", applicationRoutes);

app.listen(PORT, () => {

    console.log(`Server running on Port ${PORT}`);

});