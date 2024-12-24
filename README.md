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
   ```
Create a .env file in the backend folder and add the following:

```bash
MONGO_URI=mongodb://localhost:27017/currencyDB
```
Start the Backend server:
```bash
cd backend
node server.js
```
Frontend Setup
Navigate to the Frontend folder:
```bash
cd frontend
npm install
```
Create a .env file in the frontend folder and add the following:
```bash
REACT_APP_API_URL=http://localhost:3000/api
Start the Frontend project:
```
```bash
npm start
```

***Testing
# Currency Conversion App

## Steps to Use
1. Open your browser and go to [http://localhost:3000](http://localhost:3000).
2. Enter the currency conversion details and click the **"Convert"** button.
3. Check the results and verify the logs in the server console for more details.

## Sample Test Data
- **From Currency**: AFN  
- **To Currency**: AED  
- **Amount**: 1  

## Conversion Example
If you enter the following:
- **From**: AFN  
- **To**: AED  
- **Amount**: 1  

The API provides the exchange rate:  
`1 AFN = 0.05245 AED`  

The result will be:  
`0.05245 AED`

## Explanation of Functionality
### Backend:
- Description of backend functionalities.


The Node.js server uses Express to create the API
Connects to MongoDB to log currency conversion activities
Uses Axios to call the external exchange rate API and calculate the currency conversion
Frontend:

Uses React.js to create the UI for entering conversion details and displayin