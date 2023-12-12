require('dotenv').config();


const express = require('express');
const configViewEngine = require('./config/viewEnginer');
const webRoutes = require('./routes/web');

const app = express();
const port = process.env["PORT"] || 8080;
const hostName = process.env["HOST_NAME"] || "localhost";


//CONFIG VIEW ENGINE
configViewEngine(app);


app.use('/web', webRoutes);


app.listen(port, hostName, () => {
    console.log(`Example app listening on port ${port}`);
});