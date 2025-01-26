# Real-Time Chat App

A real-time chat application built with a modern tech stack and containerized using Docker for easy deployment.

## Features
- Real-time messaging
- Backend API with MongoDB integration
- Scalable multi-container setup using Docker Compose

## Live Demo
You can check out the live demo of the application at:  
[Real-Time Chat App](https://real-time-chat-app-k0kb.onrender.com)

## Prerequisites
- [Docker](https://www.docker.com/) installed on your system

## Getting Started

Follow these steps to set up and run the application locally:

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/real-time-chat-app.git
```

### 2. Navigate to the Project Directory
```bash
cd real-time-chat-app
```

### 3. Start the Application
Run the following command to start the application:
```bash
docker compose up --build
```

This will:
- Build and start the frontend, backend, and MongoDB services
- Expose the frontend on `http://localhost:80`
- Expose the backend on `http://localhost:5001`

## Environment Variables
Ensure the required environment variables are defined in the `backend/.env` file. Below is an example:

```plaintext
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/chat_db?retryWrites=true&w=majority
PORT=5001
JWT_SECRET=your-secret-key
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
NODE_ENV=development
```

## Stopping the Application
To stop all services, use:
```bash
docker compose down
```

## Additional Notes
- Make sure to replace placeholder values in the environment variables with your actual credentials
- Ensure Docker is running before executing Docker Compose commands
