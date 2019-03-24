var fs = require("fs");
var globalconfig = require('./config');

var controllerset = [];
//这个方法可以直接读路径
var file = fs.readdirSync(globalconfig['filter_path']);
// console.log(file)

var filter = [];

for(var i = 0;i<file.length;i++){
     var temp = require(globalconfig.filter_path + '/'+file[i]);
    
     if(temp){
          filter.push(temp);
        }else{
           console.log("filterloader.js出错了")
        }
        
     }

     module.exports = filter;
    //  console.log(filter)
     

