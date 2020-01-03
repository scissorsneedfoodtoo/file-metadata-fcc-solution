require('dotenv').config();
const express = require('express');

const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const app = express();

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', (req, res) => {
     res.sendFile(process.cwd() + '/views/index.html');
  });
    
// Using 'multer' middleware
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

const portNum = process.env.PORT || 3000;

app.listen(portNum, () => {
  console.log(`Listening on port ${portNum}`);
});

module.exports = app; // For testing
