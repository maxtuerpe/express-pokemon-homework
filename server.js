const pokemons = require('./models/pokemon')
const express = require('express')
const app = express();

app.get('/', (req, res)=>{
    res.send('<a href="/pokemon">pokemon app</a>');
})
app.get('/pokemon', (req, res)=>{
    res.send(pokemons);
})

app.listen(3000, ()=>{
    console.log('pokemon app listening on port 3000')
})