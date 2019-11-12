var express = require('express');
var router = express.Router();

const sampleData = [
  {
    url: 'https://mushroomreferences.com',
  },
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(sampleData);
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id; // get dynamic ID from the URL

  res.send(sampleData[id]);
});

router.post('/', (req, res) => {
  const link = {
    url: req.body.url,
  };

  console.log('User has successfully created the following link:', link);

  sampleData.push(link);

  res.send(link);
})

module.exports = router;
