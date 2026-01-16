# CommerceGrid – Backend

## 1. Project Overview

CommerceGrid-Backend is a **RESTful backend API** built using **Node.js, Express.js, and MongoDB**.  
It serves as the core data and business logic layer for the CommerceGrid Admin Control Dashboard and E-Commerce Grid.

The backend is responsible for:
- User authentication and authorization
- Role-based access control
- Data storage and retrieval
- Business logic enforcement
- Secure communication with the frontend

The system is designed to support **internal business administration**, not public consumer access.

---

## 2. Application Idea Overview

CommerceGrid is an **internal commerce management system** that enables companies to manage their operations through a centralized dashboard.

From a backend perspective, the system:
- Manages users, products, inventory, orders, customers, and feedback
- Enforces strict role-based permissions
- Ensures data consistency between frontend and database
- Provides scalable and maintainable REST APIs

The backend follows **clean architecture principles**, separating concerns into models, routes, controllers, and middleware.

---

## 3. User Roles Identification

The backend supports two primary user roles, enforced using JWT and middleware authorization.

### 3.1 Company Owner
- Does **not register**
- Logs in using **pre-created credentials**
- Has **full access** to all system resources and data

### 3.2 Employee
- Must **register and log in**
- Has **restricted access**
- Can browse and manage products based on authorization rules

---

## 4. System Requirements

### 4.1 Functional System Requirements

The backend system must:
- Authenticate users based on their role (Owner or Employee)
- Authorize access using role-based middleware
- Store and manage data for:
  - Users
  - Products
  - Inventory
  - Orders
  - Customers
  - Feedback
- Support full CRUD operations on all entities
- Provide advanced filtering and searching through API endpoints
- Maintain cart-related data for employees
- Ensure consistency between frontend, backend, and database
- Communicate using RESTful APIs over HTTP

---

### 4.2 Non-Functional System Requirements

**Security**
- Secure authentication using JSON Web Tokens (JWT)
- Passwords hashed using bcrypt
- Sensitive data never stored in plain text

**Performance**
- Efficient database queries
- Fast API response times
- Support multiple concurrent users

**Scalability**
- Modular codebase to support future feature expansion
- Database-agnostic design using Mongoose ODM

**Reliability**
- Graceful error handling
- Meaningful HTTP status codes and error messages

**Maintainability**
- Clean, readable, and well-structured code
- Separation of concerns (models, controllers, routes, middleware)
- Well-documented API behavior

---

## 5. Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt
- dotenv
- cors
- Custom authentication and authorization middleware

---

## 6. Project Structure
```
CommerceGrid-Backend/
│── models/ # Mongoose schemas
│── controllers/ # Business logic
│── routes/ # API endpoints
│── middleware/ # Auth, role checks, error handling
│── seed/ # Database seed scripts
│── uploads/ # Static assets (images)
│── app.js # Application entry point
│── .env # Environment variables
```
## 7. 🚀 Getting Started

This section provides a **complete step-by-step guide** to setting up and running the CommerceGrid Backend locally.  
It is intended for **developers, instructors, and evaluators** cloning the project from GitHub.

---

### 7.1 Prerequisites

The following software **must be installed**:

- Node.js (version 18 or later)
- npm
- Git
- MongoDB (local installation or MongoDB Atlas)

Verification commands:
```bash
node -v
npm -v
git --version
