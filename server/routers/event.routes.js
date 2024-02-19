const router = require('express').Router();

const {createEvent} = require('../controllers/event/event.controller')

router.post('/create-event',createEvent)

module.exports = router