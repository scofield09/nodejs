var fs = require('fs');
var golbal = {};
var conf = fs.readFileSync('server1.con');
var confArr = conf.toString().split("\r\n");
for(var i = 0;i<confArr.length;i++){
      golbal[confArr[i].split("=")[0]] = confArr[i].split("=")[1];
}

if(golbal.static_file_type){
      golbal.static_file_type = golbal.static_file_type.split("|");
}else{
      throw new Error("配置文件异常");
}
// console.log(golbal)
module.exports = golbal;