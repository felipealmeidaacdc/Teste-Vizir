var express = require('express');
var router = express.Router();
var Cost = require('../models/cost');


//endpoint cadastro cost
router.post('/', function(req, res) {
   let c = new Cost({ source_code: req.body.source_code,
                      target_code: req.body.target_code,
                      value: req.body.value });
   c.save((err, cost) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(cost);
   })
})
//endpoint listar cost
router.get('/', function(req, res) {
    Cost.find().exec((err, costs) => {
         if (err)
             res.status(500).send(err);
         else
             res.status(200).send(costs);
    })
})





module.exports = router;