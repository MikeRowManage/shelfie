module.exports = {
  getInventory: async (req, res) => {
    const dbInstance = req.app.get("db");

    await dbInstance
      .get_inventory()
      .then(products => res.status(200).send(products))
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  addInventory: async (req, res) => {
    const {newImg, newName, newPrice} = req.body
    const dbInstance = req.app.get("db")

    await dbInstance
    .create_product(newImg, newName, newPrice)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(404).send(err))
  },

  deleteProduct: async (req, res) => {
    const dbInstance = req.app.get("db")
    const {id} = req.params
  
    await dbInstance
      .delete_product(id)
      .then(product => {
        res.sendStatus(200)
        }).catch(err => {console.log(err)
      res.status(500).send('Something went wrong')})

  }
  }
