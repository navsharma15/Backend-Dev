# Technology Stack

**Analysis Date:** 2026-04-24

## Languages

**Primary:**
- JavaScript (ES Modules) - All application code

## Runtime

**Environment:**
- Node.js (Version not explicitly specified in package.json, assuming LTS)
- Package Manager: npm
- Lockfile: `package-lock.json` present

## Frameworks

**Core:**
- Express 5.2.1 - Web server framework

**Testing:**
- None detected in `package.json`

**Build/Dev:**
- nodemon 3.1.14 - Development server with auto-reload

## Key Dependencies

**Critical:**
- mongoose 9.5.0 - MongoDB object modeling
- jsonwebtoken 9.0.3 - JWT for authentication
- bcrypt 6.0.0 - Password hashing
- joi 18.1.2 - Schema validation

**Infrastructure:**
- winston 3.19.0 - Logging
- dotenv 17.4.2 - Environment variable management
- http-status-pro-js 1.1.0 - HTTP status code management
- cors 2.8.6 - Cross-Origin Resource Sharing

## Configuration

**Environment:**
- `.env` file - Configuration for environment variables (DB URI, etc.)

**Build:**
- `package.json` - Scripts and dependencies

## Platform Requirements

**Development:**
- Any platform with Node.js and npm

**Production:**
- Node.js environment (e.g., Render, Vercel, VPS)

---

*Stack analysis: 2026-04-24*
*Update after major dependency changes*
