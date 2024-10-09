const fs = require('fs');
const https = require('https');
const express = require('express');

const app = express();

app.get('/',(req,res) => {
		res.send('Hello, HTTPS! Iam from container security');
     });

const options = {
		key:fs.readFileSync('/etc/ssl/private/key.pem'),
		cert:fs.readFileSync('/etc/ssl/certs/cert.pem')
};

https.createServer(options,app).listen(443,()=>{
		console.log('Server running on https://localhost:443');
});


