import React from 'react';
//import Image from 'react-bootstrap/Image'
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import eu from '../images/eu.jpg';

function MeMyselfAndI(){
	return(
		<div>
			<Container>
				<Row>
					<Col lg={10}>
					<Row>
					<Col md={3}>
					<br/>
			       	<Figure>
				       <FigureImage 
				       width={171}
				       src={eu}
				       roundedCircle/>
				    </Figure>
					</Col>
					<Col md={5}>
					<br/>
		       		<p> </p>
		       		<h1>Ana Neri</h1>
		       		<br/>
					</Col>
					</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

function Header() {
  return (
  	<div>
  		<Container>
	       <Row>
	       	<Col md={2}>
	       	</Col>
		    <Col md={10}>
		       <MeMyselfAndI />
		    </Col>
	       </Row>
       </Container> 
    </div>
  );
}

export default Header;