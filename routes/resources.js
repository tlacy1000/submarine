var express = require('express');
var router = express.Router();
const {createResource, getAllResources, grabResourceById} = require('../models/resource');

/* GET resources listing. */
router.get('/', async (req, res, next) => {
  const resources = await getAllResources();
  res.send(resources);
});

router.get('/:id', async (req, res, next) => {
  const id = req.params.id; // get dynamic ID from the URL

  const resource = await grabResourceById(id);

  res.send(resource);
});

const requirePriorAuthentication = (req, res, next) => {
  if (req.user === undefined) {
    next(new Error('This endpoint requires authentication. Please log in.'));
  } else {
    // req.user IS defined, so we can proceed normally
    next();
  }
}

router.post('/', requirePriorAuthentication, async (req, res) => {
  const resource = await createResource(req.body.url);

  res.send(resource);
})

module.exports = router;
