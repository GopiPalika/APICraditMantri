const express = require('express');
var request = require('request');
var qs = require('qs')

const options = {
  url: 'https://pwa-cmol.creditmantri.in/api/v1/otprequest',
  headers: {
    'Content-Type': 'application/json','apiVersion' : 'v2'
  },
  json: {
    "phone_home":"7777777778","ip": "::ffff:127.0.0.1"
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
    'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI2NzA5OTEsImV4cCI6MTU0ODIyODEyMSwiY29udGV4dCI6eyJlbWFpbCI6InNvbnBhdWwyNUBnbWFpbC5jb20ifX0.Hx7zvnhDO6VZYRn7KKgyoD69v-i8H203kfYAUiGgHJs'
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
