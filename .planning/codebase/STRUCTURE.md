# Codebase Structure

**Analysis Date:** 2026-04-24

## Directory Layout

```
Backend-Dev/
├── config/             # Configuration files (DB connection, etc.)
├── controller/         # Request handlers and business logic
├── logger/             # Winston logger configuration
├── middleware/         # Express middleware (auth, validation)
├── model/              # Mongoose schemas and models
├── node_modules/       # External dependencies
├── routes/             # API route definitions
├── .env                # Environment variables (local)
├── index.js            # Main entry point
├── package.json        # Project manifest
└── package-lock.json   # Dependency lockfile
```

## Directory Purposes

**config/**
- Purpose: Infrastructure and environment configuration
- Contains: `db.js` (database connection logic)

**controller/**
- Purpose: Application logic and request processing
- Contains: `user.controller.js`, `auth.controller.js`

**logger/**
- Purpose: Centralized logging setup
- Contains: Winston logger configuration

**middleware/**
- Purpose: Reusable request processing logic
- Contains: Authentication, validation, and error handling middleware

**model/**
- Purpose: Data definitions and persistence interface
- Contains: `user.model.js` (Mongoose schema)

**routes/**
- Purpose: API endpoint definitions
- Contains: Express router files

## Key File Locations

**Entry Points:**
- `index.js`: Main application entry point

**Configuration:**
- `package.json`: Project metadata and dependencies
- `.env`: Environment variable configuration

**Core Logic:**
- `controller/`: Business logic implementation
- `model/`: Data structure definitions
- `routes/`: API endpoint mapping

## Naming Conventions

**Files:**
- `*.controller.js`: Controller files
- `*.model.js`: Model files
- `*.js`: Standard JavaScript files (kebab-case or camelCase observed)

**Directories:**
- Singular names: `config`, `controller`, `logger`, `middleware`, `model`, `routes`

## Where to Add New Code

**New Feature (e.g., Portfolio):**
- Controller: `controller/portfolio.controller.js`
- Model: `model/portfolio.model.js`
- Routes: `routes/portfolio.routes.js`

**New Middleware:**
- Implementation: `middleware/[name].js`

**Utilities:**
- Shared helpers: Create a `utils/` directory

---

*Structure analysis: 2026-04-24*
*Update when directory structure changes*
