# 🚀 Project Management Tool

A full-stack **Project Management System** designed to help teams collaborate, organize tasks, and track project progress efficiently.  
This application provides a structured workflow similar to tools like **Trello or Asana**, allowing users to create projects, manage tasks, and communicate through comments.

---

## 📌 Features

- 🔐 **User Authentication**
  - Secure registration and login
  - Password encryption using bcrypt
  - JWT-based authentication

- 📁 **Project Management**
  - Create and manage multiple projects
  - Assign projects to users
  - Track project progress

- 📝 **Task Management**
  - Create tasks inside projects
  - Assign tasks to team members
  - Update task status

- 💬 **Task Collaboration**
  - Comment system for communication
  - Team members can discuss tasks

- 🌐 **RESTful API Architecture**
  - Clean backend architecture using Express.js
  - Structured API endpoints for scalability

---

## 🛠 Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose ODM

### Authentication
- JSON Web Tokens (JWT)
- bcryptjs

---

## 📂 Project Structure

backend  
│  
├── models  
│   ├── User.js  
│   ├── Project.js  
│   ├── Task.js  
│   └── Comment.js  
│  
├── routes  
│   ├── userRoutes.js  
│   ├── projectRoutes.js  
│   ├── taskRoutes.js  
│   └── commentRoutes.js  
│  
├── middleware  
│   └── authMiddleware.js  
│  
├── server.js  
├── package.json  
└── .env  

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

git clone https://github.com/YOUR_USERNAME/CodeAlpha_ProjectManagement.git

### 2️⃣ Navigate to backend

cd CodeAlpha_ProjectManagement/backend

### 3️⃣ Install dependencies

npm install

### 4️⃣ Configure Environment Variables

Create `.env` file

MONGO_URI=your_mongodb_connection_string  
PORT=5000  
JWT_SECRET=supersecret  

### 5️⃣ Run the server

npx nodemon server.js

Server will run at:

http://localhost:5000

---

## 🔗 API Endpoints

### User Authentication

POST /api/users/register → Register user  
POST /api/users/login → Login user  

### Project Management

POST /api/projects → Create new project  
GET /api/projects → Get all projects  

### Task Management

POST /api/tasks → Create task  
GET /api/tasks → Get tasks  

### Comments

POST /api/comments → Add comment  
GET /api/comments → Get comments  

---

## 🗄 Database Schema

### Users

name  
email  
password  

### Projects

name  
description  
createdBy  

### Tasks

title  
description  
project  
assignedTo  

### Comments

text  
task  
user  

---

## 📸 Demo Workflow

1️⃣ User Registration  
2️⃣ User Login  
3️⃣ Create Project  
4️⃣ Add Tasks to Project  
5️⃣ Assign Tasks  
6️⃣ Add Comments for Collaboration  

---

## 📈 Future Improvements

- Role-based access control  
- Real-time collaboration using WebSockets  
- Drag-and-drop task boards  
- Notifications system  
- UI improvements using React.js  

---

## 👩‍💻 Author

**Sadhvika Nallathigala**

Full Stack Developer | MERN Stack Enthusiast

GitHub:  
https://github.com/SadhvikaNallathigala

---

## 📜 License

This project is developed for educational and internship purposes.
