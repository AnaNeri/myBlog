import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function AboutMeContent() {
  return (
    <div >
    <br/>
    <Container>
		<Row>
		<Col lg={10}>
			<Row>
			<Col md={11}>
       <h2>About me</h2>
       	<br/>
	       <p> 
			   I am a PhD student at the 
			   <a href="https://mapi.map.edu.pt/" target="_blank" rel="noopener noreferrer"> MAPi </a>
			   doctoral program with a project on Quantum Computing. 
			   I've got selected for a 
			   <a href="https://quantumportugalinitiative.inl.int/" target="_blank" rel="noopener noreferrer"> Quantum Portugal Initiative FCT-INL scholarship</a>. 
			   I'm affiliated with 
			   <a href="https://inl.int/" target="_blank" rel="noopener noreferrer"> INL</a>, 
			   <a href="https://haslab.uminho.pt/" target="_blank" rel="noopener noreferrer"> HASLab </a>
			   <a href= "https://inesctec.pt/en" target="_blank" rel="noopener noreferrer"> INESC TEC</a>, and 
			   <a href="https://cidma.ua.pt/" target="_blank" rel="noopener noreferrer"> CIDMA</a>. 
			</p>

			<p>
				I teach at the University of Minho, and I'm a member of the 
				<a href="https://arca.di.uminho.pt/" target="_blank" rel="noopener noreferrer"> ARCA </a> 
				and 
				<a href="http://www.quantalab.org" target="_blank" rel="noopener noreferrer"> QuantaLab </a>
			</p>

	        <p>
				My current work focuses on the quantum computing field. 
			</p>
    	</Col>
    	</Row>
    	</Col>
    	</Row>
    	</Container>
    </div>
  );
}

function AboutMe() {
  return (
    <div>
       <Container>
       <Row>
       <Col md={2}>
       </Col>
       <Col md={10}>
       	<AboutMeContent />
       </Col>
       </Row>  
	   </Container>
    </div>
  );
}

export default AboutMe;