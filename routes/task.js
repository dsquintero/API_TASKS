const express = require('express');
const router = express.Router();

const taskService = require('../services/task');

/* GET ALL task */
router.get('/', async function (req, res, next) {
  try {
    const data = await taskService._getAll();

    res.status(200);
    res.json({ data: data });
  } catch (err) {
    res.status(400)
    res.json({ data: err });
  }
});

/* GET BY ID task */
router.get('/:id', async function (req, res, next) {
  const { params = {} } = req;
  const { id = {} } = params;

  try {
    res.json(await taskService._get(req.params.id));

    const data = taskService._get(id);
    if (data) {
      res.status(200);
      res.json({ data: data });
    } else {
      res.status(404);
      res.json({
        statusCode: 404,
        message: 'Document not found'
      });
    }

  } catch (err) {
    res.status(400)
    res.json({ data: err });
  }
});

/* POST task */
router.post('/', async function (req, res, next) {
  const { body = {} } = req;


  try {

    const task =
    {
      description: body.description,
      author: body.author,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    const data = await taskService._post(task);

    res.status(201);
    res.json({ data: data });

  } catch (err) {
    res.status(400)
    res.json({ data: err });
  }
});

/* PUT task */
router.put('/:id', async function (req, res, next) {
  const { body = {} } = req;
  const { params = {} } = req;
  const { id = {} } = params;

  try {

    Object.assign(body, { updatedAt: new Date() })
    const data = await taskService._put(id, body);
    if (data) {
      res.status(200);
      res.json({ data: data });
    } else {
      res.status(404);
      res.json({
        statusCode: 404,
        message: 'Document not found'
      });
    }

  } catch (err) {
    res.status(400)
    res.json({ data: err });
  }
});

/* DELETE task */
router.delete('/:id', async function (req, res, next) {
  const { params = {} } = req;
  const { id = {} } = params;

  try {

    const data = await taskService._delete(id);

    if (data) {
      res.status(200);
      res.json({ data: data });
    } else {
      res.status(404);
      res.json({
        statusCode: 404,
        message: 'Document not found'
      });
    }

  } catch (err) {
    res.status(400)
    res.json({ data: err });
  }
});

module.exports = router;