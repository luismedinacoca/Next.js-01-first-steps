# Use a small and efficient Node.js base image (Alpine = lightweight Linux)
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only the package files first (this allows Docker caching of dependencies)
COPY package.json package-lock.json* ./

# Install only production dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Build the application (useful for React, Next.js, TypeScript transpilation, etc.)
RUN npm run build

# The container will listen on this port
EXPOSE 3000

# Command executed when the container starts (start the app)
CMD ["npm", "start"]
