var mysql = require('mysql');



function connectionMysqul(){
    var connection = mysql.createConnection({
        host:'127.0.0.1',
        port:'3306',
        user:'root',
        password:'hao13795296861',
        database:'school'
    });
    return connection;
}

module.exports.connectionMysqul = connectionMysqul;