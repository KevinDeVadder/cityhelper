const express = require('express');

//set up express app
const app = express();


//start app
app.listen(process.env.port || 5000, function(){
	console.log('Running on port 5000')
})