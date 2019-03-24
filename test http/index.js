var http = require('http');
var url = require('url');
var fs = require('fs');
var golbal = require('./config.js')

var log = require('./log.js')

var loader = require('./loader.js')
// console.log(loader)

// var filterloader = require('./filterloader');

http.createServer(function(request,response){
    //读取文件名
    var pathName = url.parse(request.url).pathname;
    // console.log(pathName);
    var params = url.parse(request.url,true).query;
   log(pathName)
    // response.end();
    //判断是不是静态方法


//阻塞一下别的请求 不太管用
// for(var i = 0;i < filterloader.length;i++){
   
//     var flag = filterloader[i](request,response);
//     // console.log(flag)
//     if(!flag){
//     //    console.log('flag');
//        return;
//     }
// }
   


    var static = isStatic(pathName);
    if(static){
        try{
            var datafile = fs.readFileSync(golbal['page_path']+pathName);
            response.writeHead(200);
            response.write(datafile);
            response.end();
        }catch(e){
           
            response.writeHead(404);
            response.write("<html><body><h1>404 no found</h1></body></html>");
            response.end()
        }
        
    }else{
        // console.log("动态文件")
        // console.log(loader.get(pathName))
        if(loader.get(pathName)!=null){
            // console.log(loader.get(pathName))
            try{
                loader.get(pathName)(request,response)
            }catch(e){
                response.writeHead(500);
                response.write("<html><body><h1>500 no found</h1></body></html>");
                response.end()
            }
            
        }else{
            response.writeHead(404);
            response.write("<html><body><h1>404 no found</h1></body></html>");
            response.end()
        }
    }
}).listen(golbal['port'])



function isStatic(pathName){
    for(var i =0;i<golbal['static_file_type'].length;i++){
        if(pathName.indexOf(golbal['static_file_type'][i])==(pathName.length - golbal['static_file_type'][i].length)){
            // console.log(pathName)
            return true;
        }
        // console.log(golbal['static_file_type'][i]);
    };
    
    return false;
}