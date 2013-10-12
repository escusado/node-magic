var DATABASE_PATH = 'users.json';

var fs = require('fs'),
  
  //express
  express = require('express'),
  app     = express();

// var SkeloApp = {
//   database

//   exec : function(){
    
//     SkeloApp.initDatabase();

//     // var user = {
//     //   name : 'user name',
//     //   pass : '123456'
//     // };

//     // Write
//     // fs.writeFileSync( 'user.json', JSON.stringify( user ) );


//     // Read
//     // var user = {},
//     //     userJsonString = fs.readFileSync( 'user.json', 'utf-8' ),
//     //     userHash = JSON.parse( userJsonString );

//     // console.log('>', userJsonString, typeof userJsonString);
//     // console.log('>', userHash, typeof userHash);
//     // console.log('>', userHash.name);

//     // Express logic
//     // app.use(app.router);

//     // app.get('/', function(req, res){
//     //     res.send( fs.readFileSync('index.html', 'utf-8') );
//     // });



//     // app.get('/users/', function(req, res){

//     // });

//     // app.listen('3000');

//     // console.log('App ready on port 3000');

//   },

//   initDatabase : function(){
//       var dataBasePath = DATABASE_PATH;


//   }
// };


var 