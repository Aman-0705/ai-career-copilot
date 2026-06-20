const express = require("express");
const multer = require("multer");

const router = express.Router();

const {uploadResume, getATSHistory} = require("../controllers/atsController");
const authMiddleware = require("../middleware/authMiddleware");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {

        cb(null, "uploads/");

    },

    filename: (req, file, cb) => {

        cb(
            null,
            Date.now() + "-" + file.originalname
        );

    }
});

const upload = multer({storage});       // Middleware to handle file uploads

router.post(
    "/upload",
    authMiddleware,
    upload.single("resume"),
    uploadResume
);

router.get(
    "/history",
    authMiddleware,
    getATSHistory
)

module.exports = router;
