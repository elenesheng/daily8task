# Fullstack Monorepo

A modern fullstack monorepo setup with Nest.js backend and Next.js frontend, using Prisma with SQLite for the database. This project demonstrates a **pure monorepo approach without external tools** like Nx or Turborepo - each subproject manages its own dependencies independently.

## 🏗️ Architecture

This is a **true monorepo** where:

- Each subproject has its own `package.json` and `node_modules`
- No external monorepo management tools (Nx, Turborepo, Lerna)
- Independent dependency management per project
- Docker-based orchestration for seamless development and deployment

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
  - Internationalization (i18n)
  - Responsive design
  - Client-side navigation

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

## 🗄️ Database Management

### Prisma Commands

```bash
cd backend

# Generate Prisma client (after schema changes)
npx prisma generate

# Create and apply migrations
npx prisma migrate dev

# Open Prisma Studio (database GUI)
npx prisma studio

# Reset database (development only)
npx prisma migrate reset

# View migration status
npx prisma migrate status
```

### Database Schema

The current schema includes a `User` model:

```prisma
model User {
  id       Int    @id @default(autoincrement())
  email    String @unique
  password String
  name     String
}
```

## 🌐 API Endpoints

### Authentication

- `POST /auth/register` - User registration
- `POST /auth/login` - User login

### Health Check

- `GET /` - Backend health check

## 🔧 Docker Configuration

### Services

**Backend Container:**

- Base: Node.js 18 Alpine
- Port: 3001
- Features: Prisma client generation, production build
- Database: SQLite with persistent volume

**Frontend Container:**

- Base: Node.js 18 Alpine
- Port: 3000
- Features: Next.js build, production optimization
- Dependencies: Backend service

### Volumes

- `sqlite_data`: Persistent database storage
- `./backend/prisma:/app/prisma`: Prisma schema sync

## 🌍 Internationalization (i18n)

The frontend supports multiple languages:

### Supported Languages

- English (en)
- Romanian (ro)

### File Structure

```
frontend/src/translations/
├── en/translations.json
└── ro/translations.json
```

### Usage

- **Server-side**: Use `server-i18n.ts` for pages
- **Client-side**: Use `i118n.ts` for components

## 🏗️ Monorepo Benefits

### Independent Dependencies

Each subproject manages its own dependencies:

```json
// backend/package.json
{
  "dependencies": {
    "@nestjs/common": "^10.0.0",
    "@prisma/client": "^5.0.0"
  }
}

// frontend/package.json
{
  "dependencies": {
    "next": "14.0.0",
    "react": "^18"
  }
}
```

### No External Tools

- No Nx, Turborepo, or Lerna
- Simple and lightweight
- Easy to understand and maintain
- No additional learning curve

### Docker Orchestration

- Single command to run entire stack
- Consistent environment across development and production
- Isolated services with clear boundaries

## 🧪 Development Workflow

### 1. Backend Changes

```bash
cd backend
npm run start:dev  # Hot reload enabled
```

### 2. Frontend Changes

```bash
cd frontend
npm run dev  # Hot reload enabled
```

### 3. Database Changes

```bash
cd backend
npx prisma migrate dev --name add_new_field
```

### 4. Docker Development

```bash
# Rebuild and restart specific service
docker-compose up --build backend

# View logs
docker-compose logs -f backend
```

## 📦 Production Deployment

### Docker Production

```bash
# Build production images
docker-compose -f docker-compose.yml up --build

# Environment variables
NODE_ENV=production
```

### Environment Configuration

- Backend: Configure database connection
- Frontend: Configure API endpoints
- Docker: Set production environment variables

## 🔍 Troubleshooting

### Common Issues

**Database Connection:**

```bash
cd backend
npx prisma generate
npx prisma migrate dev
```

**Docker Issues:**

```bash
# Clean Docker cache
docker system prune -a

# Rebuild containers
docker-compose up --build --force-recreate
```

**Port Conflicts:**

- Backend: Change port in `docker-compose.yml`
- Frontend: Change port in `docker-compose.yml`

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

## 🌐 API Endpoints

### Authentication

- `POST /auth/register` - User registration
- `POST /auth/login` - User login

### Health Check

- `GET /` - Backend health check

## 🚀 Next Steps

1. **Authentication**: Implement JWT tokens
2. **API Development**: Add CRUD operations
3. **UI Components**: Build reusable components
4. **Testing**: Add unit and integration tests
5. **CI/CD**: Set up automated deployment
6. **Monitoring**: Add logging and metrics

## 📚 Learning Resources

- [Nest.js Documentation](https://nestjs.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Docker Documentation](https://docs.docker.com/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ using Nest.js, Next.js, Prisma, and Docker**
