require('dotenv').config();

let express = require('express');
let app = express();






console.log("Hello World")


app.use("/public", express.static(__dirname + "/public"));


function startExpress(req, res) {
  //res.send("Hello Express");
  res.sendFile(__dirname + '/views/index.html');
}


app.get('/', startExpress);
app.get('/json', (req, res) => {
	let message = "Hello json";
	if(process.env.MESSAGE_STYLE==="uppercase"){
		message = message.toUpperCase();
	}
	res.json({"message": message});
});



























 module.exports = app;
