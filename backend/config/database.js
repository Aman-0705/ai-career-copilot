const { Pool }  = require('pg');

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"ai_career_copilot",
    password:"Aman@0705",
    port:5432,
});

module.exports = pool;