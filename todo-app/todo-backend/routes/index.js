const express = require('express');
const router = express.Router();
const { getAsync } = require('../redis');

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (_, res) => {
  const count = await getAsync('added_todos')
  if (count) {   
    res.send({ added_todos: count })
  } else {
    res.send({ added_todos: '0' })
  }
})

module.exports = router;
