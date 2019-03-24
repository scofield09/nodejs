var url = require('url');

function loginFilter(request,response){
    var pathName = url.parse(request.url).pathname;
    // console.log(pathName)
    if(pathName=='/index.html'||pathName=='/getdatapwd'||pathName=='/index.js'){
        return true;
    }else{
        return false;
    }
    
}
module.exports = loginFilter;