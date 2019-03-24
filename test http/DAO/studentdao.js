
var dbutil = require('./dbutil');
// console.log(dbutil)
//两方法只能运行一个
function queryAllStudent(success){
    var querysql = "select * from student;";
//新建一个连数据库任务
var connection = dbutil.connectionMysqul();
//貌似可有可无 下面这句话
    connection.connect();
    connection.query(querysql,function(err,result){
    if(err == null){
        // console.log(result);
        success(result);
    }else{
        console.log("queryAllStudent is error")
    }
    });
    connection.end();
}
// queryAllStudent();


function queryAllStudentByClass(classNum,age){
    querysql = "select * from student where student_class= ? and student_age = ?;"
    var arr = [classNum,age]
    connection.connect();
    connection.query(querysql,arr,function(err,result){
    if(err == null){
        console.log(result);
    }else{
        console.log("queryAllStudent is error")
    }
    });
    connection.end();
}
// queryAllStudentByClass(1,18);

function queryAllStudentByPsw(Num,success){
    querysql = "select * from student where student_num= ?;"
    var connection = dbutil.connectionMysqul();
    connection.connect();
    connection.query(querysql,Num,function(err,result){
    if(err == null){
        success(result);
    }else{
        console.log("queryAllStudent is error")
    }
    });
    connection.end();
}


module.exports = {
    'queryAllStudent':queryAllStudent,
    'queryAllStudentByPsw':queryAllStudentByPsw
}

