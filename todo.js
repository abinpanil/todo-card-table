
const express = require("express")

let newlists = []
let tablelists = []
let cardlists = []
const app = express()
app.set('view engine', "ejs")
app.use(express.static(__dirname+"/public"))
app.use(express.urlencoded({extended:true}))
app.get("/",function(req,res){
    
    var today = new Date()
    
    var options = {
        weekday:'long',
        month:'long',
        day:'numeric'
    }
    var day = today.toLocaleDateString('en-US', options)
    res.render("list",{title:"ToDo",changeDay:day, addlists:newlists})
   
})
app.get('/table',function(req,res){

    res.render('table',{title:"Table",tablelists:tablelists})
})
app.get('/card',function(req,res){
    res.render('card',{title:"Card",cardlists:cardlists})
})
app.post("/",function(req,res){
    var newlist = req.body.new_list
    console.log(req.body)
    newlists.push(newlist)

    res.redirect("/")
})

app.post("/table",function(req,res){
    var tablelist = req.body
    tablelists.push(tablelist)

    for(i=0;i<tablelists.length;i++){
        console.log(tablelists[i].name)
    }
    console.log(tablelists.length);
    res.redirect("/table")
})
app.post("/card",function(req,res){
    var cardlist = req.body
    cardlists.push(cardlist)

    for(i=0;i<cardlists.length;i++){
        console.log(cardlists[i].img)
        console.log(cardlists[i].head)
        console.log(cardlists[i].disc)
    }
    console.log(cardlists.length);
    res.redirect("/card")
})


app.listen(4000, function(){
    console.log("Started")
})