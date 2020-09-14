import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function TeachingContent() {
  return (
    <div >
    <br/>
    <Container>
		<Row>
		<Col lg={10}>
			<Row>
			<Col md={11}>
       <h2>Teaching</h2>
       <br/>
       <p><b> 2019-2020 </b></p>
       	<br/>
        <ul>
	       <li> <a href="http://arca.di.uminho.pt/ic-1920/" target="_blank" rel="noopener noreferrer"> Interaction and Concurrence 2019-2020 </a>: TP Quantum Systems</li>  
    	  </ul>
      </Col>
    	</Row>
    	</Col>
    	</Row>
    	</Container>
    </div>
  );
}

function Teaching() {
  return (
    <div>
       <Container>
       <Row>
       <Col md={2}>
       </Col>
       <Col md={10}>
       	<TeachingContent />
       </Col>
       </Row>  
	   </Container>
    </div>
  );
}

export default Teaching;