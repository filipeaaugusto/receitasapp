const express = require('express')
const app = express();

app.get('/', (req, res) => {
    return res.json({
        mensagem:'Rota do tipo GET com endereço'
    })
})

app.listen(5000, ()=>  {
    console.log('servidor rodando na porta 5000');
})