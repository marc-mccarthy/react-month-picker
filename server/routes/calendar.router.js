const express = require('express');
const router = express.Router();
const monthItems = require('../modules/calendar.data');

// DO NOT MODIFY THIS FILE

// GET Route
router.get('/',  (req, res) => {
    res.send(monthItems);
}); // END GET Route

module.exports = router;