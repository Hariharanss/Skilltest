var sql = require('mssql');

var db_config = {
    user: 'sa',
    password: 'orbitz',
    server: 'orbits-9',
    database: 'OnlineTesting'
};

function handleDisconnect() {

    sql.connect(db_config, function (err) {

        if(err) {                         
            console.log('error when connecting to db:', err);
            sql.close();
            setTimeout(handleDisconnect, 5 * 60 * 1000);
          }  

    });


  sql.on('error', function(err) {
    console.log('------------------db error------------------------', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
      handleDisconnect();                         
    } else {                                      
      throw err;                                  
    }
  });
}

handleDisconnect();

module.exports=sql;