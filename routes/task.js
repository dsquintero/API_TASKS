const express = require('express');
const router = express.Router();

const taskService = require('../services/task');

/* GET ALL task */
router.get('/', async function(req, res, next) {
  try {
    res.json(await taskService._getAll());
  } catch (err) {
    console.error(`Error al leer task`, err.message);
    res.status(400).json({'message':err.message});
  }
});

/* GET BY ID task */
router.get('/:id', async function(req, res, next) {
    try {
      res.json(await taskService._get(req.params.id));
    } catch (err) {
      console.error(`Error al leer task`, err.message);
      res.status(400).json({'message':err.message});
    }
  });

/* POST task */
router.post('/', async function(req, res, next) {
    try {      
      var entitie = {
        id:req.body.id,
        description:req.body.description,
        author:req.body.author,
        createdAt:new Date(),
        updatedAt:new Date()        
      };
      var taskId = await taskService._post(entitie);
      res.json(entitie);

    } catch (err) {
      console.error(`Error al crear task`, err.message);
      res.status(400).json({'message':err.message});
    }
  });

  /* PUT task */
  router.put('/:id', async function(req, res, next) {
    try {
      res.json(await taskService._put(req.params.id, req.body));
    } catch (err) {
      console.error(`Error al actulizar task`, err.message);
      res.status(400).json({'message':err.message});
    }
  });

  /* DELETE task */
  router.delete('/:id', async function(req, res, next) {
    try {
      res.json(await taskService._delete(req.params.id));
    } catch (err) {
      console.error(`Error al leer task`, err.message);
      res.status(400).json({'message':err.message});
    }
  });  

module.exports = router;