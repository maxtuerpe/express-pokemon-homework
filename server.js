const Pokemons = require('./models/pokemon')
const express = require('express')
const app = express();




app.use(express.static('./public'))

app.get('/', (req, res)=>{
    res.send('<a href="/pokemon">pokemon app</a>');
})
app.get('/pokemon', (req, res)=>{
    res.render('index.ejs', {Pokemons});
})
app.get('/pokemon/:id', (req, res)=>{
    res.render('show.ejs', {pokemon: Pokemons[req.params.id], id: req.params.id});
})


app.listen(3000, ()=>{
    console.log('pokemon app listening on port 3000')
})