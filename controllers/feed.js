const express = require('express');
var request = require('request');
var qs = require('qs')
var formidable = require('formidable');
var fs = require('fs');

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

const options = {
  url: 'https://pwa-cmol.creditmantri.in/api/v1/otprequest',
  headers: {
    'Content-Type': 'application/json','apiVersion' : 'v2'
  },
  json: {
    "phone_home":"7814191267","ip": "::ffff:127.0.0.1"
}
};
//  7018211919
// 7629751700
exports.getToken = (req, res, next) => {

request.post(options ,(err,response,tokan)=>{
  req.session.token =response.headers.authorization
  res.status(200).json({
    data:tokan,
    token:response.headers.authorization
  });
 })}

 const headers = {
   
    'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI2NzIyMTMsImV4cCI6MTU0OTUzNjg1MCwiY29udGV4dCI6eyJlbWFpbCI6InNhZGZhc0BhZGZhZHNmLmNvbSJ9fQ.D9e2IFQ-baQZVGoMABeXjifaGvm_BMd0Dfr_NtXevGM'
  };

 const options1 = {
  url: 'https://pwa-cmol.creditmantri.in/api/v1/dashboard-widget',
   headers:headers,
  json: {
   "ip": "::ffff:127.0.0.1"
}
};

exports.dashboardWidget = (req, res) => {
request.post(options1 ,(err,response)=>{
  res.status(200).json({
    data:response
  });
 })}



exports.dashboarCis = (req, res) => {
  const options = {
    url: 'https://pwa-cmol.creditmantri.in/api/v1/dashboard/cis',
    headers:{  'Authorization':'Bearer '+req.session.token},
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
    headers:{  'Authorization':'Bearer '+req.session.token},
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
    headers:{  'Authorization':'Bearer '+req.session.token},
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
    headers:{  'Authorization':'Bearer '+req.session.token},
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
    headers:{  'Authorization':'Bearer '+req.session.token},
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
    headers:{  'Authorization':'Bearer '+req.session.token},
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
   headers:{  'Authorization':'Bearer '+req.session.token},
   json: req.body
 };
request.post(options ,(err,response)=>{
  const detailsOpton  = {
    url: 'https://pwa-cmol.creditmantri.in/api/v1/subscribe/plan',
    headers:{  'Authorization':'Bearer '+req.session.token},
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
    headers:{  'Authorization':'Bearer '+req.session.token},
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
    headers:{  'Authorization':'Bearer '+req.session.token},
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
    url: 'https://cpwa-cmol.creditmantri.in/api/v1/diy/customer-request/uploadProof',
    headers:{  'Authorization':'Bearer '+req.session.token},
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
  const options = {
    url: 'http://pwa-cmol.creditmantri.in/api/v1/diy/customer-request/paymentConfirmation',
    headers:{  'Authorization':'Bearer '+req.session.token},
    json: req.body
  };
request.post(options ,(err,response)=>{
  res.status(200).json({
    data:response
  });
 })}


  exports.saveUploadedFile = (req, res) => {
 }
