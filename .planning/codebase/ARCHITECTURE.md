# Architecture

**Analysis Date:** 2026-04-24

## Pattern Overview

**Overall:** Layered Node.js API (Express)

**Key Characteristics:**
- Separation of concerns: Controllers, Models, Routes, Middleware
- Stateless request handling (JWT for session state)
- MongoDB as persistent data store
- Centralized logging and error handling

## Layers

**Route Layer:**
- Purpose: Map URL paths to controller functions
- Contains: Express router definitions
- Location: `routes/*.js`
- Depends on: Controller layer
- Used by: Application entry point (`index.js`)

**Controller Layer:**
- Purpose: Handle request logic, input validation, and orchestrate services
- Contains: Request/Response handling logic
- Location: `controller/*.js`
- Depends on: Model layer, Utility libraries
- Used by: Route layer

**Model Layer:**
- Purpose: Define data schemas and interface with the database
- Contains: Mongoose schemas and models
- Location: `model/*.js`
- Depends on: Mongoose
- Used by: Controller layer

**Middleware Layer:**
- Purpose: Handle cross-cutting concerns (auth, validation, logging)
- Contains: Express middleware functions
- Location: `middleware/*.js`
- Depends on: Utility libraries (JWT, etc.)
- Used by: Route layer

## Data Flow

**Typical API Request:**

1. **Request Received:** Entry point (`index.js`) receives HTTP request.
2. **Routing:** Request matched to a route in `routes/`.
3. **Middleware:** Middleware (e.g., auth) in `middleware/` processes the request.
4. **Controller:** Controller in `controller/` executes business logic.
5. **Database Operation:** Controller interacts with Mongoose model in `model/`.
6. **Response:** Controller sends JSON response back to the client.

**State Management:**
- Stateless: No session data stored on server; state is carried in JWT.
- Persistent state stored in MongoDB.

## Key Abstractions

**Mongoose Model:**
- Purpose: Interface for MongoDB collections
- Examples: `model/user.model.js`
- Pattern: Active Record / Data Mapper (Mongoose implementation)

**Controller Function:**
- Purpose: Logic unit for a specific endpoint
- Examples: `controller/user.controller.js` -> `getAllUser`

## Entry Points

**Main Entry:**
- Location: `index.js` (currently empty, but designated as main)
- Triggers: Start of the Node.js process
- Responsibilities: Initialize Express, connect to DB, register routes

## Error Handling

**Strategy:** Centralized error response using `http-status-pro-js`.

**Patterns:**
- Try/catch blocks in controllers.
- Logging errors using Winston.

## Cross-Cutting Concerns

**Logging:**
- Approach: Winston logger in `logger/` directory.

**Validation:**
- Approach: Joi schemas (imported in models and likely used in middleware/controllers).

**Authentication:**
- Approach: JWT authentication middleware.

---

*Architecture analysis: 2026-04-24*
*Update when major patterns change*
