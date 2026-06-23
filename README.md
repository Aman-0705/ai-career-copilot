# AI Career Copilot

AI-powered career management platform that helps users track job applications, analyze resumes using ATS scoring, and gain actionable career insights.

## Live Demo

Frontend:
https://ai-career-copilot-f5i7ljx9o-aman-0705s-projects.vercel.app/

Backend API:
https://ai-career-copilot-backend-ga9q.onrender.com

## Features

### Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes

### Job Application Tracker
- Add Applications
- Edit Applications
- Delete Applications
- Track Application Status

### ATS Resume Analyzer
- Upload PDF Resume
- Paste Job Description
- ATS Match Score
- Matched Skills Detection
- Missing Skills Detection
- Resume Improvement Suggestions

### Dashboard
- Application Statistics
- ATS Reports Summary
- Recent Reports
- ATS Score Trend Chart

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Framer Motion
- Recharts

### Backend
- Node.js
- Express.js
- JWT Authentication
- REST APIs

### Database
- PostgreSQL
- Neon Database

### AI Integration
- Groq API

### DevOps & Deployment
- Docker
- Docker Compose
- Nginx
- Vercel
- Render

## Architecture

React Frontend
↓
Express REST API
↓
Neon PostgreSQL Database

## Screenshots

Add screenshots here:
- Landing Page
<img width="1896" height="916" alt="image" src="https://github.com/user-attachments/assets/998bfa32-18d9-4cb5-b4a5-880f6e741fbc" />
<img width="1899" height="917" alt="image" src="https://github.com/user-attachments/assets/1633162f-ac02-4538-a141-7600efd755e3" />
<img width="1898" height="917" alt="image" src="https://github.com/user-attachments/assets/e9c194b4-f62f-4b0a-990b-48a4d03ba519" />

- Dashboard
<img width="1893" height="916" alt="image" src="https://github.com/user-attachments/assets/9058ce68-c0eb-44d9-82e3-bd0a333e595d" />
<img width="1899" height="918" alt="image" src="https://github.com/user-attachments/assets/79b4f1fc-df63-4feb-bd05-5e5c7bb677aa" />
<img width="1899" height="915" alt="image" src="https://github.com/user-attachments/assets/72004ae8-c523-41c1-bdea-f4cb116800ae" />

- ATS Analyzer
<img width="1899" height="920" alt="image" src="https://github.com/user-attachments/assets/63e149fe-9f5a-4749-80b4-63466bce4316" />

- Application Tracker

## Local Setup

### Clone Repository

git clone https://github.com/Aman-0705/ai-career-copilot.git

### Install Frontend

npm install

### Install Backend

cd backend
npm install

### Environment Variables

Backend .env

DATABASE_URL=
JWT_SECRET=
GROQ_API_KEY=

### Run Frontend

npm run dev

### Run Backend

cd backend
npm start

## Deployment

Frontend:
- Vercel

Backend:
- Render

Database:
- Neon PostgreSQL

## Future Enhancements

- AI Interview Preparation
- Redis Caching
- GitHub Actions CI/CD
- Cloudflare CDN
- Microservices Architecture
- Kubernetes Deployment

## Author

Aman Sharma
