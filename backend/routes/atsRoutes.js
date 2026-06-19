const express = require("express");
const multer = require("multer");

const router = express.Router();

const {uploadResume} = require("../controllers/atsController");

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
    upload.single("resume"),
    uploadResume
);

module.exports = router;
