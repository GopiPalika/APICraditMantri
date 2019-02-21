const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const feedRoutes = require('./routes/feed');
var fs = require('fs');
var multer  = require('multer')

var session = require('express-session');
const app = express();
app.use(cors());
app.options('*', cors());
  
const fileStorage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,'./uploads');
    },
    filename:(req,file,cb) =>{
       var filename =''
     //    fs.readdir('./uploads', (err, files) => {
      //       files.forEach(filein => {
    //            // console.log(file)
    //             console.log(file.originalname + '   org')
    //             console.log(filein + '   in')
                // if(filein === file.originalname){
                //     filename = file.originalname +'R.png'
                // } 
    //else if(filein == file.originalname +'R.png'){
    //                 filename = file.originalname +'R1.png'
    //             }
    //             else if(filein == file.originalname +'R1.png'){
    //                 filename = file.originalname +'R2.png'
    //             }else if(filein == file.originalname +'R2.png'){
    //                 filename = file.originalname +'R3.png'
    //             }else if(filein == file.originalname +'R3.png'){
    //                 filename = file.originalname +'R4.png'
    //             }else{
    //                 filename = file.originalname;
    //             }
    //          });
 //          });
 console.log( file.originalname)
        cb(null,  file.originalname)
    }
})
//app.use('/uploads', express.static(path.join(__dirname)))
app.use('/creditmantri/uploads', express.static(path.join(__dirname,'uploads')))
// app.use(
//     multer({ storage: fileStorage}).single('myFile')
//   );

// app.use(
//     session({
//       secret: 'my secret',
//       resave: false,
//       saveUninitialized: false,
//       store: store
//     })
//   );
//app.use(session({secret: 'ssshhhhh'}));
app.use(session({ secret: 'krunal', resave: false, saveUninitialized: false, }));

app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.use(function(req, res, next) {
    res.setHeader("Content-Type", "application/json");
   // res.setHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI2NzA5OTEsImV4cCI6MTU0Nzg4MzA3OSwiY29udGV4dCI6eyJlbWFpbCI6IjEyMDE3MTAxMTE5MDFTayJ9fQ.jC-iVvnNQoVJ2Rgc3Bm5y3MSaQxQwM7qwhpbsMnPuoo");
    next();
});

// app.post('/creditmantri/profile', upload.single('myFile'), function (req, res, next) {
//     console.log(req.file)
//   })

app.post('/creditmantri/profile', multer({ storage: fileStorage}).single('myFile'), function (req, res, next) {
   next()
    return new Promise(() => {
        return {dood:res};
      });
    
  })

// app.use('/creditmantri/getToken',function(req, res, next) {
//     next();
// });

app.use('/creditmantri', feedRoutes);

app.listen(8080);