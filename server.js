const express = require('express');
const app = express();

app.use(express.static( __dirname + '/public/dist/public'));
// app.set('views', path.join(__dirname, './client/views'));

// require('./server/config/mongoose.js');
// require('./server/config/routes.js')(app);

app.listen(9999, ()=>{
    console.log('Local host listening on port: 9999.')
});