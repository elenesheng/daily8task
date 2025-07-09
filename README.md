# Fullstack Monorepo

A modern fullstack monorepo setup with Nest.js backend and Next.js frontend, using Prisma with SQLite for the database. This project demonstrates a **pure monorepo approach without external tools** like Nx or Turborepo - each subproject manages its own dependencies independently.

## 🏗️ Architecture

This is a **monorepo** where:

- Each subproject has its own `package.json` and `node_modules`
- No external monorepo management tools (Nx, Turborepo, Lerna)
- Independent dependency management per project
- Docker for seamless development and deployment

## 📁 Project Structure

```
daily8Task/
├── backend/                    # Nest.js + Prisma + SQLite
│   ├── src/
│   │   ├── app.controller.ts
│   │   ├── app.module.ts
│   │   ├── main.ts
│   │   ├── prisma.service.ts
│   │   └── auth/              # Authentication module
│   ├── prisma/
│   │   ├── schema.prisma      # Database schema
│   │   └── migrations/        # Database migrations
│   ├── package.json           # Backend dependencies
│   └── Dockerfile
├── frontend/                   # Next.js + TypeScript
│   ├── src/
│   │   ├── app/               # App Router pages
│   │   ├── components/        # React components
│   │   ├── utils/             # Utility functions
│   │   ├── hooks/             # Custom React hooks
│   │   └── translations/      # i18n translations
│   ├── package.json           # Frontend dependencies
│   └── Dockerfile
├── docker-compose.yml         # Multi-service orchestration
├── .gitignore                 # Comprehensive ignore patterns
└── README.md
```

## 🚀 Technology Stack

### Backend (Nest.js)

- **Framework**: Nest.js with TypeScript
- **Database**: Prisma ORM with SQLite
- **Port**: 3001
- **Features**:
  - RESTful API endpoints
  - Authentication system
  - Database migrations
  - Type-safe database operations

### Frontend (Next.js)

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Port**: 3000
- **Features**:
  - Server-side rendering (SSR)
  - Internationalization (i18n) - custom solution

### Database

- **ORM**: Prisma
- **Database**: SQLite (file-based)
- **Features**:
  - Type-safe queries
  - Automatic migrations
  - Database schema management

## 🐳 Quick Start with Docker

### Prerequisites

- Docker
- Docker Compose

### 1. Clone and Run

```bash
# Clone the repository
git clone <repository-url>
cd daily8Task

# Start all services
docker-compose up --build
```

### 2. Access Applications

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **Database**: SQLite file in Docker volume

### 3. Stop Services

```bash
docker-compose down
```

## 💻 Local Development

### Backend Development

```bash
cd backend

# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Start development server
npm run start:dev
```

### Frontend Development

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🧪 Testing the Auth Endpoints

You can test the backend registration and login endpoints using `curl` or Postman.

### 1. Register a User

**cURL Example:**

```bash
curl -X POST http://localhost:3001/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "password": "password123", "name": "Test User"}'
```

**Expected Response:**

```json
{ "id": 1, "email": "test@example.com", "name": "Test User" }
```

### 2. Login with the User

**cURL Example:**

```bash
curl -X POST http://localhost:3001/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "password": "password123"}'
```

**Expected Response:**

```json
{ "id": 1, "email": "test@example.com", "name": "Test User" }
```

### 3. Using Postman or Insomnia

- Set the request type to `POST`.
- Set the URL to `http://localhost:3001/auth/register` or `http://localhost:3001/auth/login`.
- Set the body to `raw` and `JSON`.
- Use the same JSON as above for registration and login.
