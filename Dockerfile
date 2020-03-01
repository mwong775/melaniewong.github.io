# Use a lighter version of Node as a parent image
FROM mhart/alpine-node:8.11.4
# Set the working directory to /mwong775.github.io
WORKDIR /mwong775.github.io
# copy package.json into the container at /mwong775.github.io
COPY package*.json /mwong775.github.io/
# install dependencies
RUN npm install
# Copy the current directory contents into the container at /mwong775.github.io
COPY . /mwong775.github.io/
# Make port 3000 available to the world outside this container
EXPOSE 3000
# Run the app when the container launches
CMD ["npm", "start"]