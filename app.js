var express = require("express")
var app = express()
var port = 3000

app.use(express.static('public'))
app.set('views',__dirname+'/view')
app.set('view engine','ejs')

app.listen(port,()=>console.log(`Server started listening : ${port}`))

app.get('/',(req,res)=>res.render('index'));