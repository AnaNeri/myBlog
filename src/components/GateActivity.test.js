import React from 'react'; 
import GateActivity from './GateActivity'; 
import renderer from 'react-test-renderer'; 

test('Wrong input with invalid data', () => { 
	const component = renderer.create( 
		<GateActivity gate="notValid" initState="id" />, 
	); 

	let out = component.toJSON(); 
	expect(out.children[0]).toBe("Wrong input"); 
}); 

test('Id does not change the state', () => { 
	const ins = ['|0>', '|1>', '|+>']; 
	const item = ins[Math.floor(Math.random() * ins.length)]; 
	const component = renderer.create( 
		<GateActivity gate="id" initState={item} />, 
	); 
	let out = component.toJSON(); 
	expect(out.children[0]).toBe(item); 
});