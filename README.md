# musician-server
An app i built to learn Angular JS, uses the MEAN stack. Lists musicians and lets you add / edit / delete them

Demonstrates a Server - Client architecture creates and consumes a restful API. 
This project is the server that serves up the API using Express JS from a MongoDB database

The client uses Angular and Bootstrap and consumes the API
For distributed 2 machine architecture

Installation:

Client: run npm start after installing dependencies with npm install, runs on port 8000
Server: install dependencies npm install, then first run mongod and then run node server.js, runs on port 3001

Load the data into the mongodb using localhost:3001/import
