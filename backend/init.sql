CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS applications (
    id SERIAL PRIMARY KEY,
    company VARCHAR(225) NOT NULL,
    role VARCHAR(255) NOT NULL,
    status VARCHAR(100) DEFAULT 'Applied',
    user_id INTEGER,

    CONSTRAINT applications_user_id_fkey
    FOREIGN KEY (user_id)
    REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS ats_results (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    score INTEGER,
    strengths TEXT,
    missing_skills TEXT,
    suggestions TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT ats_results_user_id_fkey
    FOREIGN KEY (user_id)
    REFERENCES users(id)
);