# syntax=docker/dockerfile:1

# ---------------------------
# 1) Base Image
# ---------------------------
FROM node:20-bookworm-slim AS base
WORKDIR /app

# Install dependencies only when needed
FROM base AS deps
# Install pnpm globally (matching workflow version)
RUN npm install -g pnpm@10.2.1

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apt-get update && apt-get install -y --no-install-recommends \
    openssl \
    && rm -rf /var/lib/apt/lists/*

# Install dependencies based on the preferred package manager
COPY package.json ./
RUN pnpm install --no-frozen-lockfile
RUN pnpm add -D tailwindcss@3.3.0 postcss@8.4.31 autoprefixer@10.4.14

# ---------------------------
# 2) Builder Stage
# ---------------------------
FROM base AS builder
RUN npm install -g pnpm@10.2.1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment variables for build optimization
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Build Next.js based on the preferred package manager
RUN pnpm build

# Remove development dependencies
RUN rm -rf node_modules
RUN pnpm install --prod --no-frozen-lockfile

# ---------------------------
# 3) Production Stage
# ---------------------------
FROM base AS runner

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs && \
    chown -R nextjs:nodejs /app

# Copy only necessary files
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user
USER nextjs

# Set runtime configurations
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Expose the port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]