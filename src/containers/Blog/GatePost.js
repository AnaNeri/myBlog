import React from 'react';
import GateActivity from '../../components/GateActivity';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function GatePostContent({title="Tmp title", text="Hi"}) {

  const [value, setValue] = React.useState("id");

  const handleChange = val => setValue(val);

  const [valueState, setValueState] = React.useState("|0>");

  const handleChangeState = valS => setValueState(valS);

  return (
    <div>
    <br/>
    <Container>
		<Row>
		<Col lg={10}>
			<Row>
			<Col md={11}>
			<br/>
      <h2>{title}</h2>
      <br/>
          
          {text}

        <br/>
        <p> </p>
          
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
          	</Col>
          	</Row>
          </Col>
          </Row>
    </Container>
    </div>
  );
}

function GatePost({title="Tmp title", text="Hi"}) {
	return (
    <div>
       <Container>
       <Row>
       <Col md={2}>
       </Col>
       <Col md={10}>
       	<GatePostContent title={title} text={text} />
       </Col>
       </Row>  
	   </Container>
    </div>
  );
}

export default GatePost;
