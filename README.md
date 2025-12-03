# NutriGen AI - Personalized Nutrition Planning Platform

An AI-powered full-stack web application for generating and managing personalized diet plans.

## 🎯 Project Overview

NutriGen AI helps users create, store, and manage weekly diet plans with detailed recipes. Built as a demonstration of full-stack development skills with React, Node.js, Express, and PostgreSQL.

## 🛠️ Tech Stack

### Frontend
- React 18
- React Router
- CSS Modules
- Vite

### Backend
- Node.js
- Express.js
- PostgreSQL
- CORS

### Development Tools
- Postman (API testing)
- pgAdmin (Database management)

## 📁 Project Structure

```
Diet-Forms/
├── frontend/                  # React application
│   ├── src/
│   │   ├── assets/            # Static assets
│   │   ├── components/        # Reusable components
│   │   ├── pages/             # Page components
│   │   └── services/          # API service layer
│   └── package.json
├── backend/                   # Express API server
│   ├── config/                # Database configuration
│   ├── routes/                # API endpoints
│   ├── controllers/           # Business logic
│   ├── database/              # SQL schema
│   └── server.js              # Entry point
├── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- PostgreSQL (v14+)
- npm

### Installation

1. Clone the repository
```bash
git clone [https://github.com/yourusername/diet-forms.git](https://github.com/yourusername/diet-forms.git)
cd diet-forms
```

2. Setup Backend
```bash
# Install dependencies
cd backend
npm install
```

3. Configure Database
```bash
# Create PostgreSQL database
psql -U postgres
CREATE DATABASE diet_forms;
\c diet_forms

# Run schema
\i database/schema.sql
```

4. Create `.env` file in backend/
```env
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=diet_forms
DB_HOST=localhost
DB_PORT=5432
PORT=3000
```

5. Setup Frontend
```bash
# Install dependencies
cd ../frontend
npm install
```

### Running the Application

1. Terminal 1 - Backend
```bash
cd ../backend
npm run dev
```

2. Terminal 2 - Frontend
```bash
cd ../frontend
npm run dev
```
Access the application at http://localhost:5173

## Features

### Current
- ✅ React frontend with component-based architecture
- ✅ Express backend API server
- ✅ PostgreSQL database schema
- ✅ Responsive navigation bar
- ✅ Example diet plan display

### Planned
- ⬜ Complete CRUD API for diet plans
- ⬜ User authentication
- ⬜ AI-powered diet generation (OpenAI integration)
- ⬜ Recipe detail pages with instructions
- ⬜ Weekly meal planning calendar
- ⬜ PDF export functionality

## Development Phases

**Phase 1:** Environment Setup ✅  
**Phase 2:** Backend Foundation ✅  
**Phase 3:** Database Setup 🚧 (In Progress)  
**Phase 4:** API Development  
**Phase 5:** Frontend Integration  
**Phase 6:** AI Integration  
**Phase 7:** Deployment  

## API Endpoints (Planned)
```txt
GET    /api/diets           - Get all diet plans
GET    /api/diets/:id       - Get single diet plan
POST   /api/diets           - Create new diet plan
PUT    /api/diets/:id       - Update diet plan
DELETE /api/diets/:id       - Delete diet plan
```

## 🧪 Testing

API endpoints tested with Postman.

## 📝 Author

**Francesco Cavina**  
Built as part of master's program application portfolio

## 📄 License

MIT

---

