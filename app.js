const express = require("express");
const hbs  = require('express-handlebars');
const app = express();
const path = require('path');
app.engine('handlebars', hbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
const port = process.env.PORT || 3000;
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.render('home');
})
app.get("/quote",function(req,res){
    var quotes = [
        {quote:"The main purpose of our life is to be happy,tolerance is the first step to genuine happiness.",author:"Dalai Lama"},
        {quote:"Time is always moving on, Nothing can stop it. The question is whether we use our time properly or not. We can’t do anything about the past, but what happens in the future depends on what we do now.",author:"me"},
        {quote:"failure is an oppurtunity to try again",author:"Rahul"},
        {quote:"Positive mind is peace.",author:"Rahul"},
        {quote:"Greatness “lies not in being strong but in the right using of strength, he or she is the greatest whose strength carries up the most hearts by the attraction of his own”",author:"Rahul"},
        {quote:"When given a chance between being right and being kind. Choose kind.",author:"Rahul"},
        {quote:"Yes you have to leave alone but you got to live together.",author:"Rahul"},
        {quote:"If you can’t help at least don’t hurt them as you can’t pay  what you hurt them.",author:"Rahul"},
        {quote:"Life goes by time which never waits and we never know what happen next so always be altruistic, kind, thoughtful and gentle towards others.",author:"Rahul"},
        {quote:"Yes you have to leave alone but you got to live together.",author:"Rahul"},
        {quote:"Yes you have to leave alone but you got to live together.",author:"Rahul"},
        {quote:"Yes you have to leave alone but you got to live together.",author:"Rahul"}
    ];
    var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    var design = Math.floor(Math.random()*4)
    res.render("about",{quotes:randomQuote,design:design})

})
// app.use((req,res)=>{
//     res.type("text/plain");
//     res.status(404);
//     res.send("page not found");
// })

app.listen(port,()=>{
    console.log("listening at 8082")
});