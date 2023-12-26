const express=require('express')
const path=require('path')

const app=express();

app.use(express.urlencoded({extended:true}))

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static('dark'));
app.use(express.static('assets'));
app.use(express.static('demo'));
app.use(express.static('work'));
app.use(express.static('help-docs'));
app.use(express.static('light'));
app.use(express.static('views'));


app.get('/',function(req,res){
    res.render('dark')
})

app.listen(500)