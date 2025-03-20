# Use Node.js official image
FROM node:18

# Set working directory
WORKDIR /app

# Copy frontend code
COPY . .

# Install dependencies
RUN npm install

# Build the React app (optional if using development mode)
RUN npm run build

# Expose frontend port
EXPOSE 3000

# Start the frontend
CMD ["npm", "start"]

