//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory //
app.use(express.static(__dirname + '/dist/FoodKart'));

// Start the app by listening on the default Heroku port //
app.listen(process.env.PORT || 8080);

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/FoodKart/index.html'));
});


const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);

