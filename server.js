'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const portNum = process.env.PORT || 3000;

const multer = require('multer');

// Here on HyperDev the fs is read only.
// You have to upload the file to memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', (req, res) => {
     res.sendFile(process.cwd() + '/views/index.html');
  });
    
  // Using 'multer' middleware...
app.post('/api/fileanalyze', upload.single('upfile'), (req, res) => {
   res.json({
    'name' : req.file.originalname,
    'type' : req.file.mimetype,
    'size' : req.file.size
   });
});
    

// 404-NOT FOUND Middleware
app.use((req, res, next) => {
  res.status(404);
  res.type('txt').send('Not found');
});

app.listen(portNum, () => {
  console.log(`Listening on port ${portNum}`);
});

module.exports = app; // for testing
