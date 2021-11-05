const express = require('express');
const cors = require('cors');

const login = require('./routes/login');
const dashboard = require('./routes/dashboard');
const classes = require('./routes/classes');
const disciplinas = require('./routes/disciplinas');

const app = express();

app.use(cors())
app.use(express.json());

app.use('/login', login);
app.use('/', dashboard);
app.use('/classes', classes);
app.use('/disciplinas', disciplinas);

const port = 3000;

app.listen(port , ()=>{
    console.log('Ativo')
})