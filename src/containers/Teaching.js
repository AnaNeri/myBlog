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
       <p> <b> 2022-2023 </b></p>
         <br/>
         <ul>
          <li> <a href="http://lmf.di.uminho.pt/tecnicas-algoritmicas-computabilidade-2223/" target="_blank" rel="noopener noreferrer">Técnicas Algorítmicas e Computabilidade 2022-23</a></li>
          <li>  Engenharia Física Aplicada 2022-2023 </li>
          <li> <a href="http://lmf.di.uminho.pt//quantum-computation-2223/" target="_blank" rel="noopener noreferrer"> Quantum Computing 2022-2023 </a>: Theoretical-Practical lectures</li>
         </ul>
       <br/>
       <p> <b> 2020-2021 </b></p>
         <br/>
         <ul>
          <li> <a href="http://arca.di.uminho.pt/quantum-computation-2021/" target="_blank" rel="noopener noreferrer"> Quantum Computing 2020-2021 </a>: Theoretical-Practical lectures</li>
          <li> <a href="http://arca.di.uminho.pt/ic-2021/" target="_blank" rel="noopener noreferrer">Interaction and Concurrence 2020-2021 </a>: Theoretical-Practical lectures of Quantum Systems module</li>
         </ul>
       <br/>
       <p><b> 2019-2020 </b></p>
       	<br/>
        <ul>
	       <li> <a href="http://arca.di.uminho.pt/ic-1920/" target="_blank" rel="noopener noreferrer"> Interaction and Concurrence 2019-2020 </a>: Theoretical-Practical lectures of Quantum Systems module</li>  
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