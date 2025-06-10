# Base image
FROM mcr.microsoft.com/playwright:v1.52.0-jammy

# Set working directory
WORKDIR /app

# Copy everything
COPY . .

# Install dependencies
RUN npm ci

# Expose app port
EXPOSE 3000

# Start app and run tests
CMD ["sh", "-c", "npm run start-app & sleep 5 && npx playwright test"]