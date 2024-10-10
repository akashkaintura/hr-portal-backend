# Use the official Node.js image
FROM node:18-alpine

# Create and set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the backend port
EXPOSE 3000

# Start the Nest.js application
CMD ["npm", "run", "start:prod"]
