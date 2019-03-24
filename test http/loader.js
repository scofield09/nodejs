var fs = require("fs");
var globalconfig = require('./config');

var controllerset = [];
//这个方法可以直接读路径
var file = fs.readdirSync(globalconfig['web_path']);
// console.log(file)

var pathMap = new Map();

for(var i = 0;i<file.length;i++){
     var temp = require(globalconfig.web_path + '/'+file[i]);
    //  console.log(temp)
     if(temp.path){
        for(var [key,value] of temp.path){
            if(pathMap.get(key)==null){
                pathMap.set(key,value);
            }else{
                throw new Error("url path异常" + key);
            }
            
        }
        controllerset.push(temp);
     }
     
}

module.exports = pathMap;
// console.log(pathMap)
