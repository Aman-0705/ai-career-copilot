const express = require("express");

const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const {
    getApplication,
    addApplication,
    deleteApplication,
    updateApplicationStatus,
} = require("../controllers/applicationController");

router.get("/applications", authMiddleware, getApplication);

router.post("/applications",authMiddleware, addApplication);

router.delete("/applications/:id",authMiddleware ,deleteApplication);

router.put("/applications/:id",authMiddleware ,updateApplicationStatus);

module.exports = router;