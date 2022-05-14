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
            res.status(404);
            res.json({
                statusCode:404,
                message: 'Document not found'
            } );
            // next({
            //     statusCode:404,
            //     message: 'Document not found'
            // })
        }

        
      
    } catch (err) {
      console.error(`Error al leer user`, err.message);
      res.status(400).json({'message':err});
    //next(err)
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
    const { body = {} } = req;
    const { params = {} } = req;
    const { id = {} } = params;
    try {
        Object.assign( body ,{ updatedAt:new Date() })
        const data = await userService._put(id,body);
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
    //   console.error(`Error al actulizar user`, err.message);
    //   res.status(400).json({'message':err.message});
        next(err);
    }
  });

  /* DELETE user */
  router.delete('/:id', async function(req, res, next) {
    const { params = {} } = req;
    const { id = {} } = params;

    try {
        const data = await userService._delete(id);
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
    next(err);
    }
  });  

module.exports = router;