const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();

 router.post('/getToken', feedController.getToken);
 router.post('/dashboard', feedController.dashboardWidget);
 router.post('/dashboarCis', feedController.dashboarCis);
 router.post('/addQuoteItems', feedController.addQuoteItems);
 router.post('/planDetails', feedController.planDetails);
 router.post('/initiatePay', feedController.initiatePay);
module.exports = router;