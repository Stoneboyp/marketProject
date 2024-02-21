# Example Sellers Management Application
  This is an example of a simple web application for managing seller data. The application allows adding new sellers, create cheks ,deleting existing ones, and viewing a list of all sellers.

## Installation
Clone the repository using the command:
```bash
git clone https://github.com/Stoneboyp/marketProject
```
Navigate to the project directory:
```bash
cd marketProject
```
## Install server dependencies using npm:
Navigate to the server directory:
```bash
cd server
```
```bash
npm install
```

## Install client dependencies using yarn:
Navigate to the client directory:
```bash
cd client
```
```bash
yarn install
```
## Navigate back to the project root directory:
```bash
cd ../
```
## Start the server with the command:
```bash
node index.js
```
## Start the client with the command:
```bash
cd client
yarn dev
```
The server will be available at http://localhost:3000.
## Usage
Adding a New Value
Click on the "Add" button.
Enter the value in the form.
Click on the "Add" button.
Deleting a value
Click the value in the list.
Click on the "Delete" button.
Simply open the application to see a list of all sellers.
Adding a new check
Click on the Seller and Product Type 
Go to the Checks Tab
Click on the "Add" button.

## Technologies
React.js - for building the user interface
Express.js - for creating the server and API
Axios - for making HTTP requests
uuid - for generating unique identifiers
fs - for working with the file system
