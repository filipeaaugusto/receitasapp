const express = require('express')
const mongoose = require('mongoose');
const app = express();

app.use(express.json())

// importar models
const users = require('./models/users.model')

mongoose.connect('mongodb://localhost:27017/Cookmaster', {
    //opções]

}).then(() => {
    console.log('Conectado ao banco de dados com sucesso')
}).catch((err) => {
    console.log(err)
})

app.get('/', (req, res) => {
    return res.status(200).json({
        mensagem:"Rota do tipo GET com endereço",
        data:"08/12/2021",
        author:"Filipe",
        location: "Senai - Imperatriz/MA"
    });
});

app.post('/novoUsuario', (req, res) => {
    const dados = req.body
    console.log (dados)
    return res.status(201).json({
       mensagem:'Usuário cadastrado com sucesso'
    });
});

app.listen(5000, ()=>  {
    console.log('servidor rodando na porta 5000');
});