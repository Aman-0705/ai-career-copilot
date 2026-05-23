const express = require("express");

const router = express.Router();

const {
    getApplication,
    addApplication,
    deleteApplication,
    updateApplicationStatus,
} = require("../controllers/applicationController");

router.get("/applications", getApplication);

router.post("/applications", addApplication);

router.delete("/applications/:id", deleteApplication);

router.put("/applications/:id", updateApplicationStatus);

module.exports = router;