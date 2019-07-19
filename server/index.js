//Open index.js and require your packages and the controller file.
const express = require ('express');
const massive = require ('massive');
require("dotenv").config();
const controller = require('./controller');

const app = express();

app.use(express.json()); //gives us access to req.body

massive(process.env.CONNECTION_STRING).then(dbinstance => {app.set('db',dbinstance);
console.log("database connected :)");
}).catch(e => console.log(e));   

app.post('/api/products', controller.create);
app.get('/api/products', controller.getAll);
app.get('/api/products/:id', controller.getOne);
app.put('/api/products/:id', controller.update);
app.delete('/api/products/:id', controller.delete);


app.listen(process.env.SERVER_PORT,()=>console.log("listening on port " + process.env.SERVER_PORT))//runs server