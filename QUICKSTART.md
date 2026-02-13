# Quick Start Guide

## Start Backend
```powershell
cd backend
php -S localhost:8080
```

## Start Frontend (in a new terminal)
```powershell
cd frontend
npm run dev
```

## Access
- Frontend: http://localhost:5173
- API: http://localhost:8080/api

## First Time Setup
1. Import database: `mysql -u root -p < backend/database/schema.sql`
2. Install frontend dependencies: `cd frontend && npm install`
