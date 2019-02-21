const express = require('express');
var request = require('request');
var qs = require('qs')
const PDFDocument = require('pdfkit');
var fs = require('fs');
const path = require('path');
var moment = require('moment');
const options = {
  url: 'https://pwa-cmol.creditmantri.in/api/v1/otprequest',
  headers: {
    'Content-Type': 'application/json','apiVersion' : 'v2'
  },
  json: {
    "phone_home":"7814191267","ip": "::ffff:127.0.0.1"
}
};
// 9486782259
//9234923499  
// 7814191267   full payment
//  7018211919   0  on subsAcc
// 7629751700    0  on subsAcc
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
   return {'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI2NzIyMTMsImV4cCI6MTU1MDgwOTEwOSwiY29udGV4dCI6eyJlbWFpbCI6InNhZGZhc0BhZGZhZHNmLmNvbSJ9fQ.7jzQp8NpjPg5JiNaEXuwE2-Pp_SbISE_r7GHT70Q-VQ'}
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
    json: req.body
  };
request.post(options ,(err,response)=>{
  res.status(200).json({
    data:response
  });
 })}

 exports.paymentConfirmation = (req, res) => {
  const options = {
    url: 'https://pwa-cmol.creditmantri.in/api/v1/diy/customer-request/paymentConfirmation',
    headers:headers(req),
    formData :{
      'accountId': req.body.accountId,
      'paymentPlanId': req.body.paymentPlanId,  // selectedPaymentPlan.id  || data.paymentPlansclosure.id
      'paymentMode': req.body.paymentMode,
      'paymentDate':moment(new Date()).format('DD-MM-YYYY'),// req.body.paymentDate
      'amountPaid': req.body.amountPaid,
      'paymentBank': req.body.paymentBank,
      'tranRefNo':req.body.tranRefNo,
      'proof': fs.createReadStream(path.join(__dirname, '../uploads/'+ req.body.proof)),
      'oic':'9999',
      'type': req.body.type,
      'paymentId': req.body.paymentId, // 105 // data.paymentDetails[key].proofOfPaymentSubmittedDate!= null &&  data.paymentDetails[key].isPaymentProofAvailable
      'ip':'::ffff:127.0.0.1'
    } 
  };

request.post(options ,(err,response)=>{
  console.log(err)
  console.log(response)
  res.status(200).json({
    data:response
  });
 }
)
}


 exports.getUploadedFiles = (req, res) => {
   console.log(req.body.key)
    fs.readdir(path.join(__dirname, '../uploads/'), function(err, items) {
      const imgList =[]
      for (var i=0; i<items.length; i++) {
        if( items[i].includes(req.body.key)){
          imgList.push(items[i])
        }
      }
      res.send(imgList)
  });
              }



 exports.profile = (req, res) => {
  return new Promise(() => {
    return {dood:res};
  });
}
