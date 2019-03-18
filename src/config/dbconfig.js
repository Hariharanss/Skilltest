var sql = require('mssql');

var config = {
    user: 'sa',
    password: 'orbitz',
    server: 'orbits-9', 
    database: 'OnlineTesting'
};

sql.connect(config, function (err) {

    if (err) console.log(err);

});

module.exports=sql;