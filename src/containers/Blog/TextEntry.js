import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TextEntryContent({title="Tmp title", text="Hi"}) {
  return (
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
			          {text}
			</Col>
			</Row>
		</Col>
		</Row>
		</Container>
    </div>
  );
}

function TextEntry({title="Tmp title", text="Hi"}) {
	return (
    <div>
       <Container>
       <Row>
       <Col md={2}>
       </Col>
       <Col md={10}>
       	<TextEntryContent title={title} text={text} />
       </Col>
       </Row>  
	   </Container>
    </div>
  );
}

export default TextEntry;
