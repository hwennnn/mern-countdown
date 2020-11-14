const router = require('express').Router();
const moment = require('moment-timezone');
let Item = require('../models/item');

router.route('/').get((req, res) => {
    Item.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const due = req.body.due;
    const added_timestamp = moment().tz("Asia/Singapore");

    const newItem = new Item({ title, due, added_timestamp });

    newItem.save()
        .then(() => res.json('Item added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;