const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();

 router.post('/getToken', feedController.getToken);
 router.post('/dashboard', feedController.dashboardWidget);
 router.post('/dashboarCis', feedController.dashboarCis);
 router.post('/addQuoteItems', feedController.addQuoteItems);
 router.post('/planDetails', feedController.planDetails);
 router.post('/initiatePay', feedController.initiatePay);
 router.post('/creditAssessment', feedController.creditAssessment);
 router.post('/paymentCapture', feedController.paymentCapture);
 router.post('/postSubs', feedController.postSubs);
 router.post('/withDiscount', feedController.withDiscount);
 router.post('/changePaymentPlan', feedController.changePaymentPlan);
 router.post('/uploadProof', feedController.uploadProof);
module.exports = router;