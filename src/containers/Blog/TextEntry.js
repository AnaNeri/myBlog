import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';



function TextEntryContent({title="Tmp title", text=["Hi"], refs=[""]}) {
  const listtext = text.map((text) => <p>{text}</p>); 
  const listrefs = refs.map((refs) => <p>{refs}</p>);

  return (
  <div>
    <div>
    <Container>
    <Row>
		<Col lg={10}>
			<Row>
			<Col md={11}>
		    <br/>
		    <h2>
	      {title}
	      </h2>
		    <br/>
		    {listtext}
        <br/>
			</Col>
			</Row>
		</Col>
		</Row>
		</Container>
    </div>
    
    <div style={{fontSize:10}}>
    <Container>
    <Row>
    <Col lg={10}>
      <Row>
      <Col md={11}>
      {listrefs}
      <br/>
      </Col>
      </Row>
    </Col>
    </Row>
    </Container>
    </div>
  </div>
  );
}

function TextEntry({title="Tmp title", text=["Hi"], refs=[""]}) {
	return (
    <div>
       <Container>
       <Row>
       <Col md={2}>
       </Col>
       <Col md={10}>
       	<TextEntryContent title={title} text={text} refs={refs}/>
       </Col>
       </Row>  
	   </Container>
    </div>
  );
}

TextEntryContent.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

TextEntry.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default TextEntry;
