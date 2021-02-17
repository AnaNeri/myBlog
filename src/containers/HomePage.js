import React from 'react';
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function HomePageContent() {
    
  return (
    <div >
       <Header />
       <br/>
        <Container>
        <Row>
        <Col lg={10}>
            <Row>
            <Col md={11}>
            <p>Hello! Welcome to a proud ravenclaw's blogs, feel free to check my latest ramblings.</p>

        <br/>
{/*
        <ul>
            <li><Link to ="/blog/qubitHistory"> What's a qubit? For people who like history </Link></li>
            <li><Link to ="/blog/quantumGate"> What's a quantum gate? </Link></li>
            <li><Link to ="/blog/quantumcomputer"> What's a quantum computer? </Link></li>
        </ul>
*/}
        </Col>
        </Row>
        </Col>
        </Row>
        </Container>
    </div>
  );
}

function HomePage() {
  return (
    <div>
    <br/>
       <Container>
       <Row>
       <Col md={2}>
       </Col>
       <Col md={10}>
        <HomePageContent />
       </Col>
       </Row>
       </Container>
    </div>
  );
}

export default HomePage;
