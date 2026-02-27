# Taskflow

A full-stack Kanban board application for managing tasks across customizable boards and columns. Built as a portfolio project to demonstrate proficiency in modern web development technologies.

![Status](https://img.shields.io/badge/status-in%20development-yellow)

## Features

- **Multiple Boards** - Create separate boards for different projects or areas of life
- **Customizable Columns** - Add, rename, and delete columns to match your workflow
- **Drag-and-Drop Tasks** - Move tasks between columns with intuitive drag-and-drop
- **Real-Time Updates** - Changes sync instantly across browser tabs
- **Clean UI** - Minimal, focused interface for distraction-free task management

## Tech Stack

### Backend
- **Runtime:** Node.js
- **Language:** TypeScript
- **Framework:** Express.js
- **Database:** PostgreSQL
- **ORM:** Drizzle ORM
- **Real-Time:** Socket.io

### Frontend
- **Library:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** CSS

## Prerequisites

Before running this project locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v22.x or higher recommended)
- [PostgreSQL](https://www.postgresql.org/download/) (v16 or higher)
- [Git](https://git-scm.com/)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/taskflow.git
cd taskflow
```

### 2. Set Up the Database

Start PostgreSQL and create a new database:

```bash
# Linux
sudo service postgresql start
sudo -u postgres psql

# In the psql shell
CREATE DATABASE taskflow;
\q
```

### 3. Set Up the Backend

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:

```env
DATABASE_URL=postgres://postgres:YOUR_PASSWORD@localhost:5432/taskflow
PORT=3000
```

Replace `YOUR_PASSWORD` with your PostgreSQL password.

Run database migrations:

```bash
npm run generate
npm run migrate
```

Start the development server:

```bash
npm run dev
```

The backend will be running at `http://localhost:3000`.

### 4. Set Up the Frontend

Open a new terminal window:

```bash
cd client
npm install
npm run dev
```

The frontend will be running at `http://localhost:5173`.

### 5. Verify the Setup

Visit `http://localhost:5173` in your browser. You should see the Taskflow application with a "Server status: ok" message confirming the frontend and backend are connected.

## Available Scripts

### Backend (`/server`)

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run start` | Start production server |
| `npm run generate` | Generate migrations from schema changes |
| `npm run migrate` | Apply pending migrations |
| `npm run studio` | Open Drizzle Studio (database GUI) |

### Frontend (`/client`)

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Health check - returns server status |

*More endpoints will be documented as they are implemented.*

## Roadmap

- [x] Project setup and configuration
- [ ] Database schema (boards, columns, tasks)
- [ ] CRUD API for boards
- [ ] CRUD API for columns
- [ ] CRUD API for tasks
- [ ] Frontend board management
- [ ] Drag-and-drop functionality
- [ ] Real-time updates with WebSockets
- [ ] User authentication
- [ ] Multi-user board sharing

## Acknowledgments

- Inspired by Trello, Jira, and other Kanban tools
