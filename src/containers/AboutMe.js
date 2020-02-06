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
	       <p> I am a PhD student at the <a href="https://mapi.map.edu.pt/" target="_blank" rel="noopener noreferrer">MAPi</a> doctoral program with a project on Quantum Computing in the Computer Science Department. 
	       Additionally, I am also associated with the <a href="https://haslab.uminho.pt/" target="_blank" rel="noopener noreferrer">HASLab </a>  

	       <a href= "https://inesctec.pt/en" target="_blank" rel="noopener noreferrer"> INESC TEC</a> as a External student. 
	       In the HASLab, I also have the pleasure of working with the <a href="https://arca.di.uminho.pt/" target="_blank" rel="noopener noreferrer">ARCA team</a>.</p>

	       <p>Furthermore, I am also affiliated with <a href="http://www.quantalab.org" target="_blank" rel="noopener noreferrer">QuantaLab</a>.</p>

	       <p>My current work focuses on the quantum computing field. </p>

	       <p>The goal of one of my recent projects was to apply quantum software (like <a href="https://qiskit.org/" target="_blank" rel="noopener noreferrer">QISKit</a>) to make a practical analysis of the impact of quantum computing in a particular problem given by <a href="https://www.bial.com/en/" target="_blank" rel="noopener noreferrer">Bial</a>.</p>
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