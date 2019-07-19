module.exports = {
  
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { name, price, url } = req.body;
    
        dbInstance.addProduct([name, price, url])
          .then(() => res.sendStatus(200))
          .catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong." });
            console.log(err)
          });
      },
  
    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;
    
        dbInstance.getProduct(id)
          .then(product => res.status(200).send(product))
          .catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong." });
            console.log(err)
          });
      },
      
    getAll: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.getProducts()
        .then( products => res.status(200).send( products ) )
        .catch( err => {
          res.status(500).send({errorMessage: "Oops! Something went wrong."});
          console.log(err)
        } );
    },

    update: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req;
        
        //console.log(query);
        dbInstance.updateProduct([params.id, query.desc])
          .then(() => res.sendStatus(200))
          .catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong." });
            console.log(err)
          });
      },

    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;
    
        dbInstance.deleteProduct(id)
          .then(() => res.sendStatus(200))
          .catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong." });
            console.log(err)
          });
      }

  };



