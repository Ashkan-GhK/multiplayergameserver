//IMPORT EXPRESS FRAMEWORK
const express = require('express');


// INITILISED EXPRESS APP
const app = express();

//SERVER CONFIG
const PORT = 8080;

//SIMPLE ROUTE WAS CREATED FOR THE APP
app.get('/', (req, res) => {
	res.send('This is my server');
});

// THE SERVER LISTENS TO OUR REQUESTS 
app.listen(PORT, () => {
	console.log(`Server is live at: http://localhost:${PORT}`);
});