var PORT = '3000',
    DATABASE_PATH = 'todoData.json';


var fs = require('fs'),
  
  //express
  express = require('express'),
  app     = express(),
  colors  = require('colors');

var RestServerExample = function() {
  
  this.prototype = {

    init : function(){
      
      var databaseFile = this.initDatabase();

      this.initExpress();



      return this;
    },

    initDatabase : function(){
      //get json file data
      console.log('Starting database...'.green);
      var databaseFile,
          fileStats = fs.existsSync(DATABASE_PATH);

      if( fileStats ){
        console.log('  -Database Exists!'.green);
        databaseFile = JSON.parse( fs.readFileSync(DATABASE_PATH, 'utf-8') );
      }else{
        console.log('  -Database doesn\'t exists, creating it...'.yellow);
        fs.writeFileSync(DATABASE_PATH, '{}');
        databaseFile = {};
        console.log('  -Database created!'.green);
      }
      console.log('Setup database complete!\n'.green);

      return databaseFile;
    },

    initExpress : function(){
        console.log('Starting express server'.cyan);
        app.use( express.bodyParser() );
        app.use( app.router );
        app.use( '/assets', express.static(__dirname + '/assets') );

        this.initRoutes();


        app.listen(PORT);
        console.log('App ready on port: '.cyan+PORT+' !!!'.cyan);

    },

    initRoutes : function(){
      console.log('  -Initin routes'.cyan);
      
      //Home
      app.get('/',function(req, res){
        res.send(fs.readFileSync('index.html','utf-8'));
      });

      //Items
      app.get('/todoItems/all',function(req, res){
        console.log('Requested model todoItems all'.magenta);
        res.send( JSON.parse( fs.readFileSync(DATABASE_PATH,'utf-8') ) );
      });

      //Create new item
      app.post('/todoItems/new',function(req, res){
        var database = JSON.parse( fs.readFileSync(DATABASE_PATH,'utf-8') ),
            record, id;

        if( req.body.data ){
          database[Date.now()] = req.body.data;
        }
        //persist new record
        fs.writeFileSync( DATABASE_PATH, JSON.stringify( database )  );
        console.log('Saved new record'.magenta);

        res.send(  JSON.parse( fs.readFileSync(DATABASE_PATH,'utf-8') )  );
      });

      //TODO: IMPLEMENT DESTROY hint
      /*
        app.get('/todoItems/destroy/:id',function(req, res){
            console.log('destroy this idem: '+req.params.id);
        })
      */

      console.log('  -Routes inited!'.cyan);
    }
  };

  return this.prototype.init();
};

var restApp = new RestServerExample();