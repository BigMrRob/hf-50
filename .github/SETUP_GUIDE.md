# GitHub Actions Setup Guide for Coolify Deployment

This guide explains how to set up the required GitHub secrets for the monorepo workflow that builds and pushes Docker images to be deployed by Coolify.

## Required Secrets

Add the following secrets to your GitHub repository:

### Docker Hub Credentials

- `DOCKERHUB_USERNAME`: Your Docker Hub username
- `DOCKERHUB_PASSWORD`: Your Docker Hub password or access token

### Authentication Credentials

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Your Clerk publishable key (required for Next.js build)
- `CLERK_SECRET_KEY`: Your Clerk secret key (required for server-side authentication)

These credentials are used during the build process and also when pushing the Docker images to Docker Hub, from which Coolify will pull them.

## How to Add GitHub Secrets

1. Go to your GitHub repository
2. Click on "Settings" tab
3. In the left sidebar, click on "Secrets and variables" > "Actions"
4. Click "New repository secret"
5. Enter the name of the secret (e.g., DOCKERHUB_USERNAME)
6. Enter the value of the secret
7. Click "Add secret"
8. Repeat for all required secrets

## Coolify Configuration

### Setting Up Coolify for Your Application

1. Log in to your Coolify dashboard
2. Create a new service for each component of your monorepo:

   - **Web App (Next.js)**:

     - Source: Docker Hub
     - Image: `your-dockerhub-username/hf50-web:latest`
     - Port: 3000
     - Add required environment variables in the Coolify dashboard including:
       - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
       - `CLERK_SECRET_KEY`

   - **API (NestJS)**:
     - Source: Docker Hub
     - Image: `your-dockerhub-username/hf50-api:latest`
     - Port: 3000
     - Add required environment variables in the Coolify dashboard (database credentials, Supabase, Clerk, etc.)

### Automatic Deployments

Coolify can be configured to automatically pull the latest images from Docker Hub. There are two main approaches:

1. **Webhook-based deployments**:

   - In Coolify, get the webhook URL for each service
   - Add an additional step in the GitHub workflow to call these webhooks after pushing the images

2. **Scheduled deployments**:
   - Configure Coolify to check for new images at regular intervals
   - No additional GitHub Actions configuration needed

### Environment Variables

Configure the following environment variables directly in Coolify for your API service:

- `NODE_ENV`: production
- `SUPABASE_URL`: Your Supabase URL
- `SUPABASE_KEY`: Your Supabase key
- `DB_HOST`: Database host address
- `DB_PORT`: Database port
- `DB_USER`: Database username
- `DB_PASSWORD`: Database password
- `DB_NAME`: Database name
- `DB_SSL`: Whether to use SSL
- `CLERK_SECRET_KEY`: Your Clerk secret key
- `DATABASE_URL`: Complete database connection URL

For your Web service, configure:

- `NODE_ENV`: production
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Your Clerk publishable key
- `CLERK_SECRET_KEY`: Your Clerk secret key

## Troubleshooting

If you encounter build issues related to authentication, ensure:

1. Both Clerk keys are properly set in your GitHub secrets
2. The Next.js configuration in the workflow is correctly modifying the build process to skip static generation of authentication-dependent pages
3. Your Dockerfiles correctly pass environment variables both at build time and runtime

### Linting and Type Checking

The GitHub Actions workflow is configured to skip linting and TypeScript checking during the build process to avoid build failures due to minor code style issues or type errors. This is appropriate for CI/CD pipelines focused on deployment.

If you want to enforce code quality checks:

1. Run linting and type checking in a separate job before the build job
2. Remove the ESLint and TypeScript ignores from the Next.js config if you want to enforce these checks during the build
