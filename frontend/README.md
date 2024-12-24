# Currency Conversion App

## Project Structure
This project is divided into two main parts: **Backend** (Node.js and MongoDB) and **Frontend** (React.js)

### Project Structure
currency-conversion-app/ ├── backend/ │ ├── server.js │ ├── models/ │ │ ├── Currency.js │ │ └── Log.js │ ├── routes/ │ │ └── convert.js │ ├── controllers/ │ │ └── convertController.js │ ├── config/ │ │ └── db.js │ ├── package.json │ └── .env ├── frontend/ │ ├── public/ │ ├── src/ │ │ ├── components/ │ │ │ └── CurrencyConverter.js │ │ ├── App.js │ │ ├── index.js │ ├── package.json │ └── .env


## Setup and Run the Project

### Backend Setup
1. **Navigate to the Backend folder**:
   ```bash
   cd backend
   npm install
Create a .env file in the backend folder and add the following:

MONGO_URI=mongodb://localhost:27017/currencyDB
Start the Backend server:

npm start
Frontend Setup
Navigate to the Frontend folder:

cd frontend
npm install
Create a .env file in the frontend folder and add the following:

REACT_APP_API_URL=http://localhost:3000/api
Start the Frontend project:

npm start
Run Both Backend and Frontend Together
Install concurrently in the root folder of the project:

npm install concurrently --save-dev
Edit the package.json file in the root folder to add the following scripts:

{
  "name": "currency-conversion-app",
  "version": "1.0.0",
  "scripts": {
    "start": "concurrently \"npm run server\" \"npm run client\"",
    "server": "cd backend && npm start",
    "client": "cd frontend && npm start"
  },
  "devDependencies": {
    "concurrently": "^7.0.0"
  }
}
Run both Backend and Frontend together:

npm start
Testing
Open your browser and go to http://localhost:3000
Enter the currency conversion details and click the "Convert" button
Check the results and verify the logs in the server console for more details
Sample Test Data
From Currency: AFN
To Currency: AED
Amount: 1
Conversion Example
If you enter from=AFN, to=AED, and amount=1
The exchange rate from the API is 1 AFN = 0.05245 AED
The result will be 0.05245 AED
Explanation of Functionality
Backend:

The Node.js server uses Express to create the API
Connects to MongoDB to log currency conversion activities
Uses Axios to call the external exchange rate API and calculate the currency conversion
Frontend:

Uses React.js to create the UI for entering conversion details and displayin