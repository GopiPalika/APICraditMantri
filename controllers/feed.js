const express = require('express');
var request = require('request');
var qs = require('qs')
var formidable = require('formidable');
var fs = require('fs');
var FormData = require('form-data');

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var multiparty = require('multiparty');
// var http = require('http');
// var util = require('util');
const options = {
  url: 'https://pwa-cmol.creditmantri.in/api/v1/otprequest',
  headers: {
    'Content-Type': 'application/json','apiVersion' : 'v2'
  },
  json: {
    "phone_home":"9486782259","ip": "::ffff:127.0.0.1"
}
};
// 9486782259
//9234923499  
// 7814191267
//  7018211919
// 7629751700
exports.getToken = (req, res, next) => {

request.post(options ,(err,response,tokan)=>{
 // req.session.token =response.headers.authorization



  if(response.headers.authorization){
    req.session.token = response.headers.authorization
  }

  res.status(200).json({
    data:tokan,
    token:response.headers.authorization
  }); 
 })}

 const headers=(req) => {
   return {'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI2ODE5MDYsImV4cCI6MTU1MDEzMjM1OCwiY29udGV4dCI6eyJlbWFpbCI6Imthc2lyYWphLmdAY3JlZGl0bWFudHJpLmNvbSJ9fQ.D_tALm9N5chfR_Dc784wD8c-AmiQqH80EtBLnK7FoDU'}
  // return {'Authorization':'Bearer '+ req.session.token}  
};



exports.dashboardWidget = (req, res) => {
  const options1 = {
    url: 'https://pwa-cmol.creditmantri.in/api/v1/dashboard-widget',
    headers:headers(req),
    json: {
     "ip": "::ffff:127.0.0.1"
  }
  };
request.post(options1 ,(err,response)=>{
  res.status(200).json({
    data:response
  });
 })}



exports.dashboarCis = (req, res) => {
 
  const options = {
    url: 'https://pwa-cmol.creditmantri.in/api/v1/dashboard/cis',
    headers:headers(req),
    json: {
     "ip": "::ffff:127.0.0.1"
  }
  };
request.post(options ,(err,response)=>{
  res.status(200).json({
    data:response
  });
 })}

 exports.addQuoteItems = (req, res) => {
  const options = {
    url: 'https://pwa-cmol.creditmantri.in/api/v1/subscribe/plan',
    headers:headers(req),
    json: req.body
    // json:{
    //   '15440167': 'dispute',
    //    '15440168': 'dispute'
    // }
  };
request.post(options ,(err,response)=>{
  res.status(200).json({
    data:response
  });
 })}

 exports.planDetails = (req, res) => {
  const options = {
    url: 'https://pwa-cmol.creditmantri.in/api/v1/subscribe/plan',
    headers:headers(req),
    json: req.body
  };
request.post(options ,(err,response)=>{
  res.status(200).json({
    data:response
  });
 })}

 exports.initiatePay = (req, res) => {
  const options = {
    url: 'https://pwa-cmol.creditmantri.in/api/v1/subscribe/plan',
    headers:headers(req),
    json:{
      "type": "initiatePay",
      "service": "cis",
      "oic": 9999,
      "ip": "::ffff:127.0.0.1"
  }
  };
request.post(options ,(err,response)=>{
  res.status(200).json({
    data:response
  });
 })}

 exports.creditAssessment = (req, res) => {
  const options = {
    url: ' https://pwa-cmol.creditmantri.in/api/v1/credit-assessment',
    headers:headers(req),
    json:{
      "ip": "::ffff:127.0.0.1"
  }
  };
request.post(options ,(err,response)=>{
  res.status(200).json({
    data:response
  });
 })}




 exports.postSubs = (req, res) => {
  const options = {
    url: 'https://pwa-cmol.creditmantri.in/api/v1/diy/account-details',
    headers:headers(req),
   json: req.body
  //  json: {
  //   accountId: '1232',
  //   accountType: "resolve",
  //   oic: 9999,
  //   ip: '::ffff:127.0.0.1',
  // }
  };
request.post(options ,(err,response)=>{
  res.status(200).json({
    data:response
  });
 })}

exports.paymentCapture = (req, res) => {
 const options = {
   url: 'https://pwa-cmol.creditmantri.in/api/v1/subscribe/plan',
   headers:headers(req),
   json: req.body
 };
request.post(options ,(err,response)=>{
  const detailsOpton  = {
    url: 'https://pwa-cmol.creditmantri.in/api/v1/subscribe/plan',
    headers:headers(req),
    json: { 
      'type': "paymentDetails",
      'orderId': req.body.orderId,
      "ip": "::ffff:127.0.0.1"
    }
  };
  request.post(detailsOpton,(err,response)=>{
     res.status(200).json({
   data:response
 });
  });
})}

  exports.withDiscount = (req, res) => {
  const options = {
    url: 'https://pwa-cmol.creditmantri.in/api/v1/diy/customer-request/offerAgree',
    headers:headers(req),
    json: req.body
    // json:{"accountId":"1188",
    // "paymentPlanId":"820",
    // "isDiscountPlan":"1",
    // "paymentType":"FULL",
    // "type":"resolve",
    // "oic":9999,
    // "installment":"0",
    // "ip":"::ffff:127.0.0.1"}
  };
request.post(options ,(err,response)=>{
  res.status(200).json({
    data:response
  });
 })}

 exports.changePaymentPlan = (req, res) => {
  const options = {
    url: 'https://pwa-cmol.creditmantri.in/api/v1/diy/customer-request/changePlan',
    headers:headers(req),
    json: req.body
    //json:{"accountId":"101","paymentPlanId":"32","type":"resolve","oic":9999,"ip":"::ffff:127.0.0.1"}
  };
request.post(options ,(err,response)=>{
  res.status(200).json({
    data:response
  });
 })}

 exports.uploadProof = (req, res) => {
  
  const options = {
    url: 'https://pwa-cmol.creditmantri.in/api/v1/diy/customer-request/uploadProof',
    headers:headers(),
    json: req.body,
    //  json:{
    // "accountId": "1200",
    // "ip": "::ffff:127.0.0.1",
    // "oic": 9999,
    // "paymentType": "PART",
    // "type": "resolve"
    // }
  };
request.post(options ,(err,response)=>{
  res.status(200).json({
    data:response
  });
 })}

 exports.paymentConfirmation = (req, res) => {
//  console.log(req.body)
  var bodyFormData = new FormData();
  bodyFormData.append('accountId', req.body.accountId);
  bodyFormData.append('paymentPlanId', req.body.paymentPlanId);  // selectedPaymentPlan.id  || data.paymentPlansclosure.id
  bodyFormData.append('paymentMode', req.body.paymentMode);
  bodyFormData.append('paymentDate', req.body.paymentDate);
  bodyFormData.append('amountPaid', req.body.amountPaid);
  bodyFormData.append('paymentBank', req.body.paymentBank);
  bodyFormData.append('tranRefNo', req.body.tranRefNo);
  bodyFormData.append('proof', fs.createReadStream('../uploads/'+ req.body.proof));
  bodyFormData.append('oic', '9999');
  bodyFormData.append('type', req.body.type);
  bodyFormData.append('paymentId', req.body.paymentId); // 105 // data.paymentDetails[key].proofOfPaymentSubmittedDate!= null &&  data.paymentDetails[key].isPaymentProofAvailable
  bodyFormData.append('ip', '::ffff:127.0.0.1');
  const options = {
    url: 'https://pwa-cmol.creditmantri.in/api/v1/diy/customer-request/paymentConfirmation',
    headers:headers(req),
    form: bodyFormData
  };

request.post(options ,(err,response)=>{
  res.status(200).json({
    data:response
  });
 }
)
}


  exports.saveUploadedFile = (req, res) => {
 }

 exports.profile = (req, res) => {
  return new Promise(() => {
    return {dood:res};
  });
}



exports.getFiles = req => {
  return new Promise((resolve, reject) => {
      var form = new multiparty.Form();

      form.parse(req, (err, fields, files) => {
        if (!err)
            resolve([fields ? fields : [], files ? files : []]);
          else
            reject(err);
      });
  });
};