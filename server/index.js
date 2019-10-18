require('dotenv').config({path:__dirname+'/../.env'});
const express = require('express');
const massive = require('massive');
const ctrl = require('./controller');
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
const app = express();
const PORT = SERVER_PORT

massive(CONNECTION_STRING).then(db =>{
    app.set('db', db);
    console.log(`...I'm in.`)
})



app.listen(PORT, console.log(`Server listening on port ${PORT}`))