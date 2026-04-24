# External Integrations

**Analysis Date:** 2026-04-24

## Data Storage

**Databases:**
- MongoDB (Provider not explicitly specified, likely Atlas or local)
  - Connection: via environment variable (referenced in `model/user.model.js` context, though `config/db.js` is empty, usually configured there)
  - Client: Mongoose ORM v9.5.0

## Authentication & Identity

**Auth Provider:**
- Custom JWT-based authentication
  - SDK/Client: `jsonwebtoken` for signing/verifying tokens, `bcrypt` for password hashing
  - Implementation: Likely in `controller/auth.controller.js` (to be implemented/reviewed)
  - Token storage: Typically handled by client (localStorage or cookies)

## Monitoring & Observability

**Logs:**
- Winston - Local logging
  - Integration: Custom logger in `logger/` directory

## CI/CD & Deployment

**Hosting:**
- GitHub - Repository hosting

## Environment Configuration

**Development:**
- Required env vars: Likely `MONGO_URI`, `JWT_SECRET`, `PORT`
- Secrets location: `.env` file (gitignored)

---

*Integration audit: 2026-04-24*
*Update when adding/removing external services*
