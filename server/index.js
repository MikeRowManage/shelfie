require("dotenv").config();
const { CONNECTION_STRING, SERVER_PORT } = process.env;
const ctrl = require("./controller");
const massive = require("massive");
const express = require("express");
const app = express();

app.use(express.json());

app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.addInventory)

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    console.log("|---DATABASE IS A GO!");
    app.listen(SERVER_PORT, () => {
      console.log(`|---SERVER IS A GO FOR PORT: ${SERVER_PORT}---|`);
    });
  })
  .catch(err => console.log(err));
