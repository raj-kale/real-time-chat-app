# Stage 1: Build dependencies
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies (including devDependencies)
RUN npm install

# Copy the entire application code
COPY . .

# Build the application (if there’s any build step for backend)
# For your setup, we can skip this since it's a Node.js app.

# Stage 2: Run the application
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy only the production dependencies and code from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src ./src

# Expose the port
EXPOSE 5000

# Command to run the application
CMD ["npm", "start"]
