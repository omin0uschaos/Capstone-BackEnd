# Voyatika OS Backend README.md

Welcome to the backend repository of Voyatika OS, the operating system for the fictional starship Orka. This README provides a comprehensive guide on setting up, understanding, and interacting with the backend services that power the Voyatika OS.

## Overview

The backend of Voyatika OS is designed to manage user data, ship resources, missions, inventory, and destinations. It is built with the MERN stack (MongoDB, Express, React, Node.js), offering robust APIs for various functionalities, including user authentication, data seeding, and resource management.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB set up for your database needs
- A code editor of your choice

### Installation

1. Clone the repository to your local machine.
2. Navigate to the cloned directory and run `npm install` to install the required dependencies.
3. Create a `.env` file in the root directory of your project. This file should include:
   - `JWT_SECRET`: A secret key for JSON Web Token signing
   - `BASE_URL`: The base URL for your backend (used for constructing URLs for resources such as user portraits and destination images)
4. Ensure MongoDB is running on your machine or connect to your MongoDB Atlas cluster by configuring the connection string in your application.
5. Start the server by running `npm start`. This command launches the Express server and connects to your MongoDB database.

## API Endpoints

The backend provides a variety of endpoints organized into categories. Here's an overview:

### User Management

- **Login**: `POST /login` - Authenticates a user.
- **Add User**: `POST /user/add` - Adds a new user to the database.
- **Get User**: `GET /user/:userId` - Retrieves user information by ID.
- **Update User**: `PATCH /user/update/:userId` - Updates user information.
- **Delete User**: `DELETE /user/delete/:userId` - Deletes a user from the database.
- **User Portrait**: `GET /portrait/:username` - Retrieves the URL for a user's portrait.

### Task Management

- **Add Task**: `POST /user/task/add/:userId` - Adds a task to a user's task list.
- **Update Task**: `PATCH /user/task/update/:userId/:taskId` - Updates a specific task.
- **Delete Task**: `DELETE /user/task/delete/:userId/:taskId` - Removes a task from the list.

### Data Seeding

- **Seed Database**: `GET /seed` - Seeds the database with initial data for users, military, departments, ranks, ship resources, missions, inventory, and destinations.

### Resource Management

- **Get All Resources**: `GET /` - Retrieves all ship resources.
- **Resource Photo**: `GET /photo/:id` - Retrieves the URL for a resource photo.

### Missions, Inventory, and Destinations

Similar endpoints are provided for managing missions, inventory, and destinations, including seeding data and retrieving images.

## Middleware

The backend utilizes middleware for authentication (`checkToken` and `checkAdminToken`) to protect endpoints and ensure that only authorized users can perform certain operations.