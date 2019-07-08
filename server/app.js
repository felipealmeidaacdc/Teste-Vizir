const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

//routers
const cost_controller = require('./controllers/cost_controller');
const plan_controller = require('./controllers/plan_controller');

//Criando/Invocando a Api/Server Web do Express
const app = express();

//Configuração de parse do JSON
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());

//Configurando a conexão com banco de dados
mongoose.connect(
    //'mongodb://localhost:27017/Vizir_Software',
    'mongodb://teste:root102030@ds249017.mlab.com:49017/vizir_software', 
    {useNewUrlParser: true});

//Criando/Invocando a Api/Server Web do Express
app.use('/costs', cost_controller);
app.use('/plans', plan_controller);

app.listen(3000, () => {
    console.log('executado com Sucesso...')
}
)

module.exports = app;