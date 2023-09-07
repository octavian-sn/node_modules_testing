const express = require('express')
const fs = require('fs')
const app = express();
const port = 8080;

// *npm run dev* to start nodemon

app.get('/', (req, res)=>{
    res.send('Home Page')
})

app.get('/about', (req, res)=>{
    res.send('About Page')
})

app.get('/contact-me', (req, res)=>{
    res.send('Contact Page')
})

app.listen(port, ()=> console.log(`App listening on port: ${port}`))