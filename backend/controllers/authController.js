const bcrypt = require('bcrypt');
const pool = require("../config/database");
// const users = []; // This will store user data in memory for demonstration purposes
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await pool.query("INSERT INTO users (username,email,password) VALUES ($1,$2,$3)", [username, email, hashedPassword]);
        res.json({ message: "Signup successful" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
};

const login = async (req, res) => {

    const { email, password } = req.body;
    // console.log("Login Request:");
    // console.log(email);
    // console.log(password);

    try {

        const result = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        );

        if (result.rows.length === 0) {

            return res.status(404).json({
                message: "User not found",
            });

        }

        const user = result.rows[0];

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {

            return res.status(401).json({
                message: "Invalid credentials",
            });

        }

        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.json({
            message: "Login successful",
            token,
        });

    }
    catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server error",
        });

    }

};

module.exports = {
    signup,
    login
};