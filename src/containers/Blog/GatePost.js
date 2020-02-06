import React from 'react';
import GateActivity from '../../components/GateActivity';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function GatePost({title="Tmp title", text="Hi"}) {

  const [value, setValue] = React.useState("id");

  const handleChange = val => setValue(val);

  const [valueState, setValueState] = React.useState("|0>");

  const handleChangeState = valS => setValueState(valS);

  return (
    <div>
      <div>
        {title}
      </div>
          {text}
          <ButtonToolbar>
          	<ToggleButtonGroup type="radio" name="initState" value={valueState} defaultValue={"|0>"} onChange={handleChangeState}>
          		<ToggleButton value="|0>"> |0> </ToggleButton>
          		<ToggleButton value="|1>"> |1> </ToggleButton>
          		<ToggleButton value="|+>"> |+> </ToggleButton>
          	</ToggleButtonGroup>
          </ButtonToolbar>

          <br/>

          <ButtonToolbar>
          	<ToggleButtonGroup type="radio" name="gates" value={value} defaultValue={"id"} onChange={handleChange}>
          		<ToggleButton value="id"> ID </ToggleButton>
          		<ToggleButton value="x"> X </ToggleButton>
          		<ToggleButton value="z"> Z </ToggleButton>
          		<ToggleButton value="h"> H </ToggleButton>
          	</ToggleButtonGroup>
          </ButtonToolbar>
          
          <GateActivity gate={value} initState={valueState}/>
    </div>
  );
}

export default GatePost;
