#!/bin/bash

# Stop any existing containers using port 3000
echo "Stopping any existing containers on port 3000..."
docker stop $(docker ps -q --filter publish=3000) 2>/dev/null || true

# Build the development image
echo "Building development image..."
docker build \
  --target deps \
  --build-arg NODE_ENV=development \
  -t hf50-web-dev \
  .

# Run the development container with a shell first to install dependencies
echo "Installing dependencies..."
docker run \
  -it \
  --rm \
  -v $(pwd):/app \
  -v /app/node_modules \
  -v /app/.next \
  hf50-web-dev \
  sh -c "pnpm install && pnpm add -D postcss postcss-preset-env autoprefixer"

# Run the development container
echo "Starting development container..."
docker run \
  -it \
  --rm \
  -p 3000:3000 \
  -e NODE_ENV=development \
  -e NEXT_TELEMETRY_DISABLED=1 \
  -v $(pwd):/app \
  -v /app/node_modules \
  -v /app/.next \
  hf50-web-dev \
  pnpm dev 