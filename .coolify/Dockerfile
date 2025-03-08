FROM node:20-slim

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@10.2.1

# Copy package files
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml turbo.json ./
COPY apps/web/package.json ./apps/web/
COPY packages ./packages/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Set memory limit for Node.js (adjust based on your VPS memory)
ENV NODE_OPTIONS="--max-old-space-size=2048"

# Build the application
RUN pnpm build

# Set production environment
ENV NODE_ENV=production

# Expose the port
EXPOSE 3000

# Start the application (adjust as needed)
CMD ["node", "apps/web/.next/standalone/server.js"] 