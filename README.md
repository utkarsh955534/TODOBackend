# 🚀 Backend Developer Assignment

## 📌 Features

* JWT Authentication (Register/Login)
* Role-Based Access Control
* CRUD APIs (Tasks)
* Protected Routes
* Input Validation & Error Handling
* Secure Backend (Helmet)

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* React.js

## ⚙️ Setup Instructions

### Backend

cd backend
npm install
npm start

### Frontend

cd frontend
npm install
npm start

## 🔐 API Endpoints

* POST /api/v1/auth/register
* POST /api/v1/auth/login
* GET /api/v1/tasks
* POST /api/v1/tasks
* DELETE /api/v1/tasks/:id

## 📊 Scalability Notes

* Modular architecture (controllers, routes, middleware)
* Can be extended to microservices
* Redis caching can improve performance
* Load balancing for high traffic
* Docker for deployment

## 📎 Additional

* Postman collection included
* Clean folder structure
* Secure JWT handling
