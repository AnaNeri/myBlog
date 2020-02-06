require('hotswap');
 const express = require('express');
 const app = express();
 app.use(express.json());

module.change_code =1;

const gates = [
    {id: 'x', res: '|1>'},
    {id: 'h', res: '1/sqrt(2) ( |0> + |1> )'},
];

// http://localhost:7000/

app.get('/:id', (req,res) => {
	res.header("Access-Control-Allow-Origin", '*');
    const var_gate = gates.find(c => c.id == req.params.id);
    if(!var_gate)
       res.send({res: 'gate not found'});
    else {
       res.send({res: var_gate.res});
    }
});

app.post('/', (req,res) => {
    res.send('course');
});

// iniciar o serviço
app.listen(7000, (req, res) => {
    console.log('Listen on port 7000...');
});