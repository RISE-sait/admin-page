# Use the official Node.js image as the base image
FROM node:20-alpine3.21 as build

# Set the working directory
WORKDIR /app

ARG GOOGLE_AUTH_CLIENTID
ARG GOOGLE_AUTH_CLIENTSECRET

# Set environment variables from build arguments
ENV GOOGLE_AUTH_CLIENTID=${GOOGLE_AUTH_CLIENTID}
ENV GOOGLE_AUTH_CLIENTSECRET=${GOOGLE_AUTH_CLIENTSECRET}

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

FROM node:20-alpine3.21 as production

# Set the working directory
WORKDIR /app

COPY --from=build /app/package*.json ./
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/node_modules ./node_modules

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]