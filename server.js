const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/first-angular-app'));
app.listen(process.env.PORT || 8080);
app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/first-angular-app/index.html'));
})

console.log('Console Listening to port 8080');