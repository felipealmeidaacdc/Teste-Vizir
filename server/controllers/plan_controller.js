var express = require('express');
var router = express.Router();
var Plan = require('../models/plan');

router.post('/', (req, res) => {
    let p = new Plan({
        name: req.body.name,
        minutes: req.body.minutes
    });
    p.save((err, plan) => {
        if(err)
            res.status(500).send(err);
        else    
            res.status(200).send(plan);
    })
})

router.post('/calcula' , (req, res) => {
    const value  = req.body.cost.value;
    const min  = req.body.min;
    Plan.find((err, data) => {
      let arrayRes = []
      data.map(plan => {
        const minutesPlan = plan.minutes;
        
        const withoutFaleMais = min * value;
        
        const totalMinutesPlan = min - minutesPlan;
        const withFaleMais = totalMinutesPlan <= 0 ? 0 : ((totalMinutesPlan * value) * 1.1)

        const objRes = {
          namePlan: plan.name,
          valuewithPlan: withFaleMais.toFixed(1),
          valuewithoutPlan: withoutFaleMais.toFixed(2)
        }
        
        arrayRes.push(objRes)
       
      });
      return res.status(200).send(arrayRes);
    })
});


router.get('/', (req, res) => {
    Plan.find().exec((err, plans) => {
        if(err)
            res.status(500).send(err);
        else    
            res.status(200).send(plans);        
    })
})

module.exports = router;
