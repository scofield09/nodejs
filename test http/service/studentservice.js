var student = require('../DAO/studentdao.js');
// console.log(student)

function queryAllStudent(success){
     student.queryAllStudent(success);
}

function queryAllStudentByPsw(Num,success){
    student.queryAllStudentByPsw(Num,success);
}
 module.exports = {
     "queryAllStudent":queryAllStudent,
     "queryAllStudentByPsw":queryAllStudentByPsw,
 }