# Stock Portfolio Management System

## What This Is

A fintech application for managing stock investments digitally. It allows users to track their portfolios, analyze profit/loss, and maintain a transaction history of their buy/sell operations.

## Core Value

Enable users to make informed investment decisions through transparent and accurate portfolio tracking and performance analysis.

## Requirements

### Validated

<!-- Inferred from existing codebase -->

- ✓ Basic User Model (name, email, password) — existing
- ✓ Layered Express architecture (Controllers, Models, Routes) — existing
- ✓ MongoDB integration with Mongoose — existing

### Active

<!-- Building toward these -->

- [ ] **User Authentication System**
    - Signup, Login, Logout
    - Secure password storage (bcrypt)
    - Session management (JWT)
- [ ] **User Profile Management**
    - View/Edit details
    - Change password
- [ ] **Stock Portfolio Operations**
    - Add/Buy stock (name, quantity, buy price)
    - Sell stock
    - Update stock quantity
    - Delete stock from portfolio
- [ ] **Portfolio Dashboard**
    - Total investment value calculation
    - Current portfolio value (manual/API)
    - Profit / Loss calculation (Total & Individual)
- [ ] **Transaction History**
    - Record all buy/sell operations with date, price, quantity
- [ ] **Search & Filter**
    - Search stocks by name
    - Filter by profit/loss status

### Out of Scope

- [ ] **Live Stock Price API** — Initially manual entry to simplify MVP, can be added later.
- [ ] **Advanced Graphs** — Post-MVP feature.
- [ ] **Price Alerts** — Post-MVP feature.

## Context

Starting from a brownfield Node.js/Express backend with a minimal user model. The system needs to be expanded into a full fintech application with multi-user support and portfolio tracking logic.

## Constraints

- **Tech Stack**: Node.js, Express, MongoDB (Mongoose) — Required by existing codebase.
- **Security**: Must use secure hashing (bcrypt) and token-based auth (JWT).
- **Validation**: Must use Joi for input validation as per existing patterns.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Use JWT for Auth | Stateless scaling and common pattern in Node.js APIs | — Pending |
| Manual Price Entry | Simplify initial development before API integration | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-24 after initialization*
