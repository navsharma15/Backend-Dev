# Coding Conventions

**Analysis Date:** 2026-04-24

## Naming Patterns

**Files:**
- `*.controller.js` for controllers
- `*.model.js` for models
- `*.routes.js` (presumed) for routes
- camelCase for file names (e.g., `user.controller.js`)

**Functions:**
- camelCase for all functions (e.g., `getAllUser`)
- Exported functions use `export let name = async(req,res)=>{...}` pattern (observed in `user.controller.js`)

**Variables:**
- camelCase for variables
- PascalCase for models (e.g., `userModel`)

## Code Style

**Formatting:**
- 4 space indentation (observed in `user.controller.js`)
- Single or double quotes for strings (double observed in `user.controller.js`)
- Semicolons used but not strictly (observed inconsistencies)

**Linting:**
- No explicit linting config detected yet

## Import Organization

**Order:**
1. External packages (e.g., `http-status-pro-js`, `mongoose`)
2. Internal models/modules

## Error Handling

**Patterns:**
- Try/catch blocks in controller functions.
- Logging errors to console: `console.log(err)`.
- Returning JSON responses with status codes from `http-status-pro-js`.

## Logging

**Framework:**
- Winston (configured in `logger/`)
- Console logging used in some controllers

## Comments

**When to Comment:**
- Minimal commenting observed in existing code.

## Function Design

**Async:**
- Heavy use of `async/await` for database operations.

## Module Design

**Exports:**
- Named exports for controller functions.
- Default exports for models.

---

*Convention analysis: 2026-04-24*
*Update when patterns change*
