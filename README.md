# 🎓 LMS – Learning Management System (MERN Stack)

<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/2c3dced2-b21b-4530-924c-418cc4572eea" />
<img width="1919" height="1078" alt="image" src="https://github.com/user-attachments/assets/baf9f004-03c8-4c5b-9617-97e52c825d91" />

LMS (Learning Management System) is a full-stack web application that enables students to access courses, instructors to manage content, and administrators to monitor academic activities.  
The project is built using modern web technologies with a focus on scalability, security, and a user-friendly learning experience.

---

## 🚀 Features

- User authentication and authorization (JWT based)
- Role-based access (Student / Instructor / Admin)
- Course creation and management
- Student enrollment in courses
- Video and content-based learning modules
- Assignment upload and submission
- Progress tracking and performance monitoring
- Secure backend APIs
- Responsive UI for all devices
- Environment-based configuration for security

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- HTML5, CSS3, JavaScript
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Other Tools & Services
- JWT (Authentication)
- Multer (File uploads)
- Cloud Storage (for content & assignments)
- Git & GitHub

---

## 📂 Project Structure

<img width="5122" height="2672" alt="LMS Project Structure Diagram" src="https://github.com/user-attachments/assets/your-lms-structure-image-id" />

---

## 🔐 Environment Variables

For security reasons, `.env` files are not included in the repository.

Create a `.env` file inside the `server` folder and add the following:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Configuration
MONGO_URI=your_mongodb_connection_string

# JWT Authentication
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d

# File Upload / Cloud Storage
CLOUD_STORAGE_KEY=your_cloud_key
CLOUD_STORAGE_SECRET=your_cloud_secret

