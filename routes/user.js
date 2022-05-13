const express = require('express');
const router = express.Router();

const userService = require('../services/user');

/* GET ALL user */
router.get('/', async function(req, res, next) {
  try {
    res.json(await userService._getAll());
  } catch (err) {
    console.error(`Error al leer user`, err.message);
    res.status(400).json({'message':err.message});
  }
});

/* GET BY ID user */
router.get('/:id', async function(req, res, next) {
    try {
      res.json(await userService._get(req.params.id));
    } catch (err) {
      console.error(`Error al leer user`, err.message);
      res.status(400).json({'message':err.message});
    }
  });

/* POST user */
router.post('/', async function(req, res, next) {
    try {      
      var entitie = {
        id:req.body.id,
        description:req.body.description,
        author:req.body.author,
        createdAt:new Date(),
        updatedAt:new Date()        
      };
      var userId = await userService._post(entitie);
      res.json(entitie);

    } catch (err) {
      console.error(`Error al crear user`, err.message);
      res.status(400).json({'message':err.message});
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