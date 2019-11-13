var express = require('express');
var passport = require('passport');
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

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.send('successfully logged in!');
  console.log(req.user);
});

const requirePriorAuthentication = (req, res, next) => {
  if (req.user === undefined) {
    next(new Error('This endpoint requires authentication. Please log in.'));
  } else {
    // req.user IS defined, so we can proceed normally
    next();
  }
}

router.post('/', requirePriorAuthentication, (req, res) => {
  const link = {
    url: req.body.url,
  };
-
  sampleData.push(link);

  res.send(link);
})

module.exports = router;
