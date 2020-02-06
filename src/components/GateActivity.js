import React from 'react';


function GateActivity({gate="id", initState="|0>"}) {
  const gates = [
    {id: 'id', in:'|0>', out: '|0>'},
    {id: 'id', in:'|1>', out: '|1>'},
    {id: 'id', in:'1/sqrt(2) ( |0> + |1> )', out: '1/sqrt(2) ( |0> + |1> )'},
    {id: 'x', in:'|0>', out: '|1>'},
    {id: 'x', in:'|1>', out: '|0>'},
    {id: 'x', in:'1/sqrt(2) ( |0> + |1> )', out: '1/sqrt(2) ( |0> + |1> )'},
    {id: 'z', in:'|0>', out: '|0>'},
    {id: 'z', in:'|1>', out: '-|1>'},
    {id: 'z', in:'1/sqrt(2) ( |0> + |1> )', out: '1/sqrt(2) ( |0> - |1> )'},
    {id: 'h', in:'|0>', out: '1/sqrt(2) ( |0> + |1> )'},
    {id: 'h', in:'|1>', out: '1/sqrt(2) ( |0> - |1> )'},
    {id: 'h', in:'1/sqrt(2) ( |0> + |1> )', out: '|0>'},
  ];
  
  
  const g = gates.find(c => c.id === gate) 

  return (
    <div>
    {gate}

    {initState}
    
      {g ? g.out : "Wrong input" }
    
    </div>
  );
}

export default GateActivity;
