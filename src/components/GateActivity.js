import React from 'react';


function GateActivity({initState="|0>", gate="id"}) {
  const gates = [
    {id: 'id', res: '|0>'},
    {id: 'x', res: '|1>'},
    {id: 'z', res: '|0>'},
    {id: 'h', res: '1/sqrt(2) ( |0> + |1> )'},
  ];
  
  const g = gates.find(c => c.id === gate);
  
  return (
    <div>
      {g ? g.res : "Wrong input" }
    </div>
  );
}

export default GateActivity;
