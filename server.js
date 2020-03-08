const express = require('express');

const dotenv = require('dotenv');  //just to allow us to create global variables. Its a small dependency to make life easier 
const colors = require ('colors');  // just gives us different colors in the console 
const morgan = require('morgan');  // for monitoring within our console 

dotenv.config({ path: './config/config.env'}); //dotenv needs to know where our configuration file is that will store all our environment variables 

const app = express();

app.get('/',(req,res) => res.send('Hello world'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`${process.env.MYNAME}'s Server running in ${process.env.NODE_ENV} mode on ${process.env.PORT}.`.yellow.bold)); 
// the .yellow.bold are added after console.log but BEFORE closing bracket and are functions of the colors module. Now we can color code our specific logs so we can keep track of whats what
