<!-- @format -->

# RICK-AND-MORTY-APP

This project sets up a Node.js server to interact with the Rick and Morty API. It provides endpoints to fetch characters and episodes data from the Rick and Morty API.

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Available EndPoints](#available-endpoints)
5. [Running the Application](#running-the-application)


## Technologies Used

- _Express.js_: Backend server framework for handling HTTP requests and WebSocket connections.
- _React_: Frontend library for building the user interface and managing application state.
- _Node.js_: Runtime environment for executing JavaScript code on the server-side.
- _

  
## Prerequisites

- Node.js and npm (Node Package Manager) installed on your system.

## Installation

Clone the repository to your local machine

bash
git clone https://github.com/aparna0612/Rick-And-Morti-App.git

Navigate to the project directory

```bash 
cd rick-and-morty-app
```

Install the server dependencies

```bash
npm install
```

Install the client dependencies

```bash
cd client
npm install
```

## Available Endpoints

- /api/characters:  Fetches a list of characters from the Rick and Morty API.
- /api/characters/:id:  Fetches details of a specific character by ID.
- /api/episodes:  Fetches a list of episodes from the Rick and Morty API.



## Running the Application

Navigate to the project directory

```bash
cd rick-and-morty-app
```

Start the server

```bash
node server.js
```

This will start the server on port 5000 by default. You can access the endpoints at http://localhost:5000/api/characters and http://localhost:5000/api/episodes.

Start the Client

```bash
cd client
npm start
```

The application will run on http://localhost:3000 by default.
