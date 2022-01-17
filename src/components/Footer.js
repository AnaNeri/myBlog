import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {SocialIcon} from 'react-social-icons';


function FooterInfo(){
  return (

  	<div>
       <Container>
	       <Row>
			<Col lg={11}>
			<Row>
		       <Col md={4}>
		       <br/>
		       <h4> Address </h4>
		       University of Minho, Braga, Portugal
		       </Col>
		       <Col md={4}>
		       <br/>
		       <h4> Get in touch </h4>
		       <SocialIcon url="https://twitter.com/ana_neri_"/>
		        &ensp;
		       <SocialIcon url="https://www.linkedin.com/in/ana-neri-267989160/?locale=en_US"/>
		        &ensp;
		       <SocialIcon url="https://github.com/AnaNeri"/>
		       </Col>
		       <Col md={4}>
		       <br/>
		       <h4> Contact </h4>
			   ana.neri AT inl.int
		       <br/>
			   ana.i.neri AT inesctec.pt
		       </Col>
	       </Row>
	       </Col>
	       </Row>
       </Container> 
    </div>
  );	
}

function Footer() {
  return (
  	<div>
       <Container>
	       <Row>
	       	<Col md={1}>
	       	</Col>
		    <Col md={11}>
		       <FooterInfo />
		    </Col>
	       </Row>
       </Container> 
    </div>
  );
}

export default Footer;