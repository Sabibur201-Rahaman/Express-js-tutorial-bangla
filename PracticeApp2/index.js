var express=require('express');
var multer=require('multer')
var app=express();

// app.get('/',function(res,res){
//     res.send('this is simple  get request ')
// })

// app.get('/',function(req,res){
//     let firstName=req.query.firstName;
//     let lastName=req.query.lastName;

//     res.end(firstName +" "+lastName)
// })

app.get('/',function(req,res){
    let firstName=req.header('firstName');
    let lastName=req.header('lastName');

    res.end(firstName +" "+lastName)
})
// var storage=multer.diskStorage({
//     destination:function (req,file,callBack) {
//         callBack(null,'./uploads');
//     },
//     filename:function (req,file,callBack) {
//         callBack(null,file.originalname)
//     }
// });

// var upload=multer({storage:storage}).single('myfile')
// app.post('/',function (req,res) {
//     upload(req,res,function (error) {
//             if(error){
//                 res.send("File Upload Fail")
//             }
//             else{
//                 res.send("File Upload Success")
//             }
//     });
// });


app.listen(8000,function () {
    console.log("Server Run Success")
})
