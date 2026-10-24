# syntax=docker/dockerfile:1

# Stage 1: Build stage
FROM node:22-bookworm-slim AS builder

WORKDIR /app

# Install minimal build utilities
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    ca-certificates \
    coreutils \
    && rm -rf /var/lib/apt/lists/*

# Copy package manifests
COPY package.json package-lock.json ./

# Install exact locked dependencies
RUN npm ci

# Copy application source code and configurations
COPY tsconfig.json vite.config.ts next.config.ts drizzle.config.ts ./
COPY app ./app
COPY build ./build
COPY db ./db
COPY drizzle ./drizzle
COPY public ./public
COPY scripts ./scripts
COPY worker ./worker
COPY .openai ./.openai

# Ensure shell scripts have execute permissions
RUN chmod +x scripts/*.sh

# Build the production artifact
RUN npm run build

# Stage 2: Production runner stage
FROM node:22-bookworm-slim AS runner

WORKDIR /app

ENV NODE_ENV=production \
    PORT=3000 \
    HOST=0.0.0.0

# Install curl for container health check
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Copy built artifacts and dependencies from builder stage
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public
COPY --from=builder /app/app ./app
COPY --from=builder /app/build ./build
COPY --from=builder /app/db ./db
COPY --from=builder /app/scripts ./scripts
COPY --from=builder /app/worker ./worker
COPY --from=builder /app/.openai ./.openai
COPY --from=builder /app/vite.config.ts ./vite.config.ts
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/tsconfig.json ./tsconfig.json

# Prepare writable directories and assign ownership to non-root 'node' user
RUN mkdir -p /app/.wrangler /app/.sites-runtime && \
    chmod +x /app/scripts/*.sh && \
    chown -R node:node /app

# Switch to non-root user for principle of least privilege
USER node

EXPOSE 3000

# Container healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD curl -f http://127.0.0.1:3000/ || exit 1

# Start the built Vinext application
CMD ["npm", "run", "start"]
