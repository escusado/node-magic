/*var express = require('express'),
  	app = express()*/

var fs = require('fs');




var magic = {
	start:function(){
	
		var juegos = {};

		juegos.fecha = Date.now();
		juegos.data = ['Mario Bross','Street Fither','Contra','Halo','Call of Duty'];
		//JSON.stringify(juegos)

		var fileData = JSON.stringify(juegos);
		//console.log( typeof juegos );

		fs.writeFileSync('tem.txt', "data");




		console.log('iniciar aplicacion');		
	}
};

magic.start();