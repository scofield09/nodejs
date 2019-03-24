var golbal = require('./config.js');
var fs = require('fs');
var filename = golbal.log_path+golbal.log_name;
// console.log(filename)

function log(data){
    fs.writeFile(filename,data+'\r\n',{flag:"a"},function(){

    })
}

module.exports = log