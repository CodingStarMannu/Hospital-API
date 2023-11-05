const express = require('express');
const app = express();
const port = 8000;


app.listen(port,(error)=>{

    if(error){
        console.log(`Error in creating server and the error is: ${error}`);
    }
    console.log(`Server is up and running on the port: ${port}`);
})