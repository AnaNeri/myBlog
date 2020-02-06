import React from 'react';
import GateActivity from '../../components/GateActivity';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function GatePost({title="Tmp title", text="Hi"}) {

  const [value, setValue] = React.useState(["id"]);

  const handleChange = val => setValue(val);

  return (
    <div>
      <div>
        {title}
      </div>
          {text}


          <ButtonToolbar>
          	<ToggleButtonGroup type="radio" name="gates" value={value} defaultValue={"id"} onChange={handleChange}>
          		<ToggleButton value={"id"}> ID </ToggleButton>
          		<ToggleButton value={"x"}> X </ToggleButton>
          		<ToggleButton value={"z"}> Z </ToggleButton>
          		<ToggleButton value={"h"}> H </ToggleButton>
          	</ToggleButtonGroup>
          </ButtonToolbar>
          {value}
          <GateActivity gate={value} />
    </div>
  );
}

export default GatePost;
