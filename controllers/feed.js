const express = require('express');
var request = require('request');
var qs = require('qs')

const options = {
  url: 'https://pwa-cmol.creditmantri.in/api/v1/otprequest',
  headers: {
    'Content-Type': 'application/json','apiVersion' : 'v2'
  },
  json: {
    "phone_home":"9191919595","ip": "::ffff:127.0.0.1"
}
};

exports.getToken = (req, res, next) => {
request.post(options ,(err,response,tokan)=>{
  res.status(200).json({
    data:tokan,
    token:response.headers.authorization
  });
 })}

 const headers = {
   
    'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI2NzYyOTUsImV4cCI6MTU0OTAyNjY1NCwiY29udGV4dCI6eyJlbWFpbCI6InNvbnBhdWwyNUBnbWFpbC5jb20ifX0.j9Kp-S1i_QJlL6wEILQweyAN7vipxzmSVT9Xz9oKlYo'
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
    headers:headers,
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
    headers:headers,
    json: req.body
  };
request.post(options ,(err,response)=>{
  res.status(200).json({
    data:response
  });
 })}

 exports.planDetails = (req, res) => {
  const options = {
    url: 'https://pwa-cmol.creditmantri.in/api/v1/subscribe/plan',
    headers:headers,
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
    headers:headers,
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
    headers:headers,
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
    headers:headers,
   json: req.body
  //  json: {
  //   accountId: '1227',
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
   headers:headers,
   json: req.body
 };
 console.log(req.body.orderId)
request.post(options ,(err,response)=>{
  const detailsOpton  = {
    url: 'https://pwa-cmol.creditmantri.in/api/v1/subscribe/plan',
    headers:headers,
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
    url: 'http://cmol-api.dv/api/v1/diy/customer-request/offerAgree',
    headers:headers,
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
    url: 'http://cmol-api.dv/api/v1/diy/customer-request/changePlan',
    headers:headers,
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
    url: 'http://cmol-api.dv/api/v1/diy/customer-request/uploadProof',
    headers:headers,
    json:{
      "accountId":"101",
    "paymentType":"PART",
    "paymentMode":"paymentUrl",
    "type":"resolve",
    "oic":9999,
    "ip":"::ffff:127.0.0.1"
  }
  };
request.post(options ,(err,response)=>{
  res.status(200).json({
    data:response
  });
 })}