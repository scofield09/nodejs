var student = require('../service/studentservice.js');
// console.log(student)


var url = require('url');
var path = new Map();


function getdata(request,response){
    console.log("我来自web logincontroll.js");
    student.queryAllStudentByPsw(function(result){
        var arr = [];
        for(var i = 0;i < result.length;i++){
            // console.log(result)
            arr.push(result[i].student_name);
        };
        response.write(arr.toString());
        response.end();
    })
};


function getdatapwd(request,response){
    var params = url.parse(request.url,true).query;
    // console.log(params)
    request.on("data",function(data){
        // console.log(data.toString())
        var student_num = data.toString().split('&')[0].split('=')[1];
        var pwd = data.toString().split('&')[1].split('=')[1];
        student.queryAllStudentByPsw(student_num,function(result){
            if(result!=null){
                var res ='';
                if(pwd == result[0].pwd){
                    res = 'ok';
                    response.writeHead(200,{"Set-Cookie":'id='+result[0].id})
                }else{
                    res = 'no'
                };
                response.write(res);
               response.end();
            }
           
            
        })
    })

}

path.set('/getdatapwd',getdatapwd);
path.set('/getdata',getdata);
// console.log(path)
module.exports.path = path;