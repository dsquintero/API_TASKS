const express = require('express');
const router = express.Router();

const userService = require('../services/user');

/* GET ALL user */
router.get('/', async function(req, res, next) {
  try {

    const data = await userService._getAll();
      
    res.status(200);
    res.json({ data: data} );
    
  } catch (err) {
    // console.error(`Error al leer user`, err.message);
    // res.status(400).json({'message':err.message});
    next(err)
  }
});

/* GET BY ID user */
router.get('/:id', async function(req, res, next) {
    const { params = {} } = req;
    const { id = {} } = params;

    try {
        const data = await userService._get(id);
        if(data){
            res.status(200);
            res.json({ data: data} );
        }else{
            next({
                statusCode:404,
                message: 'Document not found'
            })
        }

        
      
    } catch (err) {
    //   console.error(`Error al leer user`, err.message);
    //   res.status(400).json({'message':err.message});
    next(err)
    }
  });

/* POST user */
router.post('/', async function(req, res, next) {
    const { body = {} } = req;
    try {      
      const user = 
      {
        firstname:body.firstname,
        lastname:body.lastname,
        email: body.email,
        status: true,
        createdAt:new Date(),
        updatedAt:new Date()        
      }

      const data = await userService._post(user);

      res.status(201);
      res.json({ data: data} );

    } catch (err) {
    //   console.error(`Error al crear user`, err.message);
    //   res.status(400).json({'message':err.message});
        next(err);
    }
  });

  /* PUT user */
  router.put('/:id', async function(req, res, next) {
    try {
      res.json(await userService._put(req.params.id, req.body));
    } catch (err) {
      console.error(`Error al actulizar user`, err.message);
      res.status(400).json({'message':err.message});
    }
  });

  /* DELETE user */
  router.delete('/:id', async function(req, res, next) {
    try {
      res.json(await userService._delete(req.params.id));
    } catch (err) {
      console.error(`Error al leer user`, err.message);
      res.status(400).json({'message':err.message});
    }
  });  

module.exports = router;