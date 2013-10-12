var fs = require('fs'),
  
  //express
  express = require('express'),
  app     = express();

var SkeloApp = {
  exec : function(){
    console.log('app started');

    // var user = {
    //   name : 'user name',
    //   pass : '123456'
    // };

    // Write
    // fs.writeFileSync( 'user.json', JSON.stringify( user ) );


    // Read
    // var user = {},
    //     userJsonString = fs.readFileSync( 'user.json', 'utf-8' ),
    //     userHash = JSON.parse( userJsonString );

    // console.log('>', userJsonString, typeof userJsonString);
    // console.log('>', userHash, typeof userHash);
    // console.log('>', userHash.name);

    // Express logic
    app.use(app.router);

    app.get('/', function(req, res){
        res.send( fs.readFileSync('index.html', 'utf-8') );
    });

    app.get('/suma/a/:a/b/:b', function(req, res){
      var suma = parseInt(req.params.a,10) + parseInt(req.params.b,10);
      console.log('suma: ', suma);
      res.send(':'+suma);
    });

    app.listen('3000');

    console.log('App ready on port 3000');

  }
};

SkeloApp.exec();