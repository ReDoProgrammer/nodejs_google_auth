const express  = require('express');
const app = express();

//gọi tới các route đã khai báo
const homeRoute = require('./routes/home-route');


app.set('view engine','ejs');//set view engine cho nodejs
app.set('views',"./views");//set thư mục view cho project
app.use(express.static("./public"));//set đường dẫn tới thư mục public gồm css,js,bootstrap...

app.use('/',homeRoute);

app.listen(5000,()=>{
	console.log("app is running on port 5000");
});
