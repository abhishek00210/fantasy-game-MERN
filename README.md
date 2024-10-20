

## Overview

This project is a full-stack web application that allows users to select players and create soccer teams. The frontend is built using React, while the backend is developed with Node.js and Express.js. MongoDB is utilized to store player and team data.

## 1. Frontend Development

### Framework
React was chosen for its component-based architecture, which promotes reusability and maintainability of the code.

### Folder Structure
A structured folder organization was established, separating components, services, and styles to enhance the clarity of the codebase.

- `src/components`: Contains React components for the user interface.
- `src/services`: Manages API calls to the backend.
- `src/styles`: Contains CSS files for styling.

### Player Selection Form
A form was created to allow users to select players from a list and create a team. The selection is limited to a maximum of 11 players to align with soccer team regulations.

### Data Display
Players are displayed with their attributes, making it easy for users to make informed selections.

## 2. Backend Development

### Server Setup
Node.js and Express.js were used to create a RESTful API.

### MongoDB Integration
A MongoDB database was set up to store player and team information. Mongoose was used for object data modeling (ODM) to interact with the MongoDB database.

### API Endpoints
- `GET /players`: Retrieves all available players.
- `POST /teams`: Creates a new team based on selected players.
- `GET /teams/:id`: Retrieves a specific team by its ID.

## 3. Connecting Frontend and Backend

### API Calls
Axios was utilized in the frontend to make API calls to the backend, enabling the retrieval of player data and the creation of teams.

### State Management
React's `useState` and `useEffect` hooks were employed to manage the application state and handle asynchronous data fetching.

## Challenges Faced

1. **CORS Issues**: Initially, CORS (Cross-Origin Resource Sharing) issues arose when attempting to make API calls from the React frontend to the Node.js backend. This was resolved by configuring CORS in the Express server.

2. **Data Validation**: Ensuring that player data was correctly formatted and validated before insertion into the MongoDB database was a challenge. This required implementing proper error handling and validation logic.

3. **Managing State**: Managing the state of selected players within the React application proved challenging, particularly when enforcing the 11-player limit. Implementing logic to handle player selection and deselection while providing user feedback was necessary.

4. **Deployment**: Setting up the deployment environment for both the frontend and backend added complexity. Configuring the server for production and ensuring that the database was properly secured and accessible were crucial steps.


