const express = require('express')
const fs = require('fs')
const app = express();
const port = 8080;

// *npm run dev* to start nodemon

app.get('/', (req, res)=>{
    fs.readFile('./index.html', (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    })
})

app.listen(port, ()=> console.log(`App listening on port: ${port}`))