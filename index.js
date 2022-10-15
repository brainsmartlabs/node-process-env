require('dotenv').config();
const express = require('express');

const server = express();

let portNumber = process.env.PORT;
if (!portNumber)
    portNumber = '5000';


server.listen(portNumber, () => {
    console.log(`Server Started at Port Number: ${portNumber}`);
});