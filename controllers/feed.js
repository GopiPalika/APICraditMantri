const express = require('express');
var request = require('request');
var qs = require('qs')

const options = {
  url: 'https://pwa-cmol.creditmantri.in/api/v1/otprequest',
  headers: {
    'Content-Type': 'application/json','apiVersion' : 'v2'
  },
  json: {
    "phone_home":"7018211919","ip": "::ffff:127.0.0.1"
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
   
    'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI2NzMzMjMsImV4cCI6MTU0ODgzOTUxNSwiY29udGV4dCI6eyJlbWFpbCI6Imphbmkua3VtYXIwMkB5YWhvby5pbiJ9fQ.LsqGQk9NagNGuAwrVVHOYsupVGYoOZnI3tJcsrLPouQ'
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
    headers:{
      'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI2NzMzMjMsImV4cCI6MTU0ODgzOTUxNSwiY29udGV4dCI6eyJlbWFpbCI6Imphbmkua3VtYXIwMkB5YWhvby5pbiJ9fQ.LsqGQk9NagNGuAwrVVHOYsupVGYoOZnI3tJcsrLPouQ'               
    },
    json:{
      "accountId": "156",
      "accountType": "resolve",
      "oic": 9999,
      "ip": "::ffff:127.0.0.1"
  }
  };
request.post(options ,(err,response)=>{
  res.status(200).json({
    data:response
  });
 })}


//  exports.paymentCapture = (req, res) => {
//    console.log(req.body)
//   const options = {
//     url: 'https://pwa-cmol.creditmantri.in/api/v1/subscribe/plan',
//     headers:headers,
//     json: {
//       "type": "paymentDetails",
//       "orderId": '83485',
//       "oic": 9999,
//       "ip": "::ffff:127.0.0.1"
//   }
//   };
// request.post(options ,(err,response)=>{
//   res.status(200).json({
//     data:response
//   });
//  })}

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
//  res.status(200).json({
//    data:response
//  });
})}

