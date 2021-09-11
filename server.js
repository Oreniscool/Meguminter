const express = require('express');
const server = express();

server.all('/', (req, res)=>{
    res.send('Meguminter is alive!')
})
function keepAlive(){
    server.listen(3000, ()=>{console.log("Meguminter\'s server is on!")});
}
module.exports = keepAlive;
