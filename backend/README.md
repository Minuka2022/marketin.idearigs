# Portfolio Admin Backend

A Node.js backend with MySQL support for portfolio project management, providing full CRUD functionality and JWT authentication.

## Features

- User authentication with JWT
- Complete CRUD operations for projects
- Related entities management (tools, goals, gallery, outcome)
- TypeScript for type safety
- MySQL database integration
- Error handling middleware

## Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── db.ts
│   ├── controllers/
│   │   ├── auth.controller.ts
│   │   └── project.controller.ts
│   ├── middlewares/
│   │   ├── auth.middleware.ts
│   │   └── error.middleware.ts
│   ├── models/
│   │   ├── gallery.model.ts
│   │   ├── goal.model.ts
│   │   ├── outcome.model.ts
│   │   ├── project.model.ts
│   │   └── user.model.ts
│   ├── routes/
│   │   ├── auth.routes.ts
│   │   └── project.routes.ts
│   ├── utils/
│   │   └── apiError.ts
│   ├── app.ts
│   └── server.ts
├── .env.example
├── package.json
└── tsconfig.json
```

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file based on `.env.example` and configure your environment variables
4. Set up the MySQL database using the SQL schema provided
5. Run the development server:
   ```
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/auth/login` - Login with email and password
- `GET /api/auth/me` - Get current authenticated user

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get a single project with details
- `POST /api/projects` - Create a new project
- `PATCH /api/projects/:id` - Update an existing project
- `DELETE /api/projects/:id` - Delete a project

## Development

- Build the project: `npm run build`
- Run in development mode: `npm run dev`
- Start production server: `npm start`
