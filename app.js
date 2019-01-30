const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const feedRoutes = require('./routes/feed');

const app = express();
app.use(cors());
app.options('*', cors());

app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(function(req, res, next) {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI2NzA5OTEsImV4cCI6MTU0Nzg4MzA3OSwiY29udGV4dCI6eyJlbWFpbCI6IjEyMDE3MTAxMTE5MDFTayJ9fQ.jC-iVvnNQoVJ2Rgc3Bm5y3MSaQxQwM7qwhpbsMnPuoo");
    next();
});
app.use('/creditmantri/getToken',function(req, res, next) {
    console.log(res.Url)
    next();
});
app.use('/creditmantri', feedRoutes);

app.listen(8080);