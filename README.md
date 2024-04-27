<!-- @format -->

# RICK-AND-MORTY-APP

This project sets up a Node.js server to interact with the Rick and Morty API. It provides endpoints to fetch characters and episodes data from the Rick and Morty API.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Running the Application](#running-the-application)

## Features

- _User Registration_: New users can sign up to create an account with a unique username and password.
- _User Authentication_: Registered users can sign in with their credentials securely.
- _Real-Time Chat_: Users can send and receive messages in real-time with other users in the chat rooms.
- _Multiple Chat Rooms_: The application supports multiple chat rooms, and users can join any chat room they prefer.
- _Unread Messages_: Users receive a notification for unread messages, ensuring they don't miss any important conversations.

## Technologies Used

- _MongoDB_: Database for storing user information, chat rooms, and messages.

- _Express.js_: Backend server framework for handling HTTP requests and WebSocket connections.
- _React_: Frontend library for building the user interface and managing application state.
- _Node.js_: Runtime environment for executing JavaScript code on the server-side.
- _Socket.IO_: Library for enabling real-time communication through WebSockets.
- _bcrypt_: For securely hashing and salting user passwords.

- _JWT (JSON Web Tokens)_: For managing user authentication and sessions.

## Prerequisites

- Node.js and npm (Node Package Manager) installed on your system.

## Installation

Clone the repository to your local machine

bash
git clone https://github.com/aparna0612/Rick-And-Morti-App.git

Navigate to the project directory

bash
cd rick-and-morty-app

Install the server dependencies

bash
npm install

Install the client dependencies

bash
cd client
npm install

## Running the Application

Navigate to the project directory

bash
cd rick-and-morty-app

Start the server

bash
node server.js

This will start the server on port 5000 by default. You can access the endpoints at http://localhost:5000/api/characters and http://localhost:5000/api/episodes.

Start the Client

bash
cd client
npm start

The application will run on http://localhost:3000 by default.

## Screenshots

![Login_Page Screenshot](https://github.com/AnkitSingh-16/Chat-On/blob/main/Image/homeimg.png)
![Chat_Page Screenshot](https://github.com/AnkitSingh-16/Chat-On/blob/main/Image/chatimg.png)
![Profile_Screenshot](https://github.com/AnkitSingh-16/Chat-On/blob/main/Image/img1.png)
![Group Screenshot](https://github.com/AnkitSingh-16/Chat-On/blob/main/Image/img2.png)
