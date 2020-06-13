# Docker image which is used as a foundation to create
# a custom Docker Image with this Dockerfile
# Use a lighter version of Node as a parent image
FROM node:13.12.0-alpine
# Set the working directory within the
# virtualized Docker environment
WORKDIR /usr/src/app
# Copies package.json and package-lock.json
# into the container
COPY package*.json ./
# Installs dependencies
RUN npm install
# Copies the current directory contents into Docker environment
COPY . .
# Make port 3000 available to the world outside this container
EXPOSE 3000
# Run the app when the container launches
CMD ["npm", "start"]