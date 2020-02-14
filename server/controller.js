module.exports = {
  getInventory: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .get_inventory()
      .then(products => res.status(200).send(products))
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  addInventory: (req, res) => {
    const {name, price, img} = req.body

    const dbInstance = req.app.get("db")

    dbInstance
    .add_inventory(name, price, img)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err))
  }
  }
