import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pdf2018001 from '../docs/2018/Workshop_CompQuantica.pdf';
import Pdf2018003 from '../docs/2018/QuantaLab-TowardsQuantumProgramCalculation.pdf';
import Pdf2018004 from '../docs/2018/IBM_Q_Experience___class.pdf';
import Pdf2019001 from '../docs/2019/VnC-2019.pdf';
import Pdf2019002 from '../docs/2019/VC19.pdf';
import Pdf2019003 from '../docs/2019/Sessão.pdf';
import Accordion from 'react-bootstrap/Accordion';

function PublicationsContent() {
	return(
		<div>
		<br/>
		<Container>
		<Row>
		<Col lg={10}>
			<Row>
			<Col md={11}>
			<h2>Publications, Projects, and Talks</h2>

	       <br/>

		   <Accordion>
			<Accordion.Item eventKey="0">
				<Accordion.Header><h3>Master Dissertation</h3></Accordion.Header>
				<Accordion.Body>
	 	        <p>"<a href="http://hdl.handle.net/1822/67480" target="_blank" rel="noopener noreferrer">Towards Quantum Program Calculation"</a>, supervised by <a href="http://www4.di.uminho.pt/~jno/" target="_blank" rel="noopener noreferrer">J. N. Oliveira (Univ. Minho)</a> and <a href="https://www.cs.ox.ac.uk/people/rui.soaresbarbosa/" target="_blank" rel="noopener noreferrer"> R. S. Barbosa (Univ. Oxford) </a>, (October 2018) University of Minho. </p> 
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="1">
				<Accordion.Header><h3>Preprint</h3></Accordion.Header>
				<Accordion.Body>
				<p>"<a href="https://ieeexplore.ieee.org/document/9557827" target="_blank" rel="noopener noreferrer">Compiling quantamorphisms for the IBM Q Experience</a>", with R. S. Barbosa (INL) and J. N. Oliveira (Univ. Minho), (October 2020) </p>
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="2">
				<Accordion.Header><h3>Projects</h3></Accordion.Header>
				<Accordion.Body>
				<p><b> 2019 </b></p>
				<ul>
					<li> <a href="https://github.com/hkhetawat/QArithmetic" target="_blank" rel="noopener noreferrer">"QArithmetic"</a>, with Mohamed Hassan, Harsh Khetawat, Afonso Rodrigues and Tom Wong, <a href="https://medium.com/qiskit/recap-of-qiskit-camp-2019-4d95f07dd179" target="_blank" rel="noopener noreferrer">Qiskit Camp'2019 </a>;</li>
				</ul>
		   		</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="3">
				<Accordion.Header><h3>Talks</h3></Accordion.Header>
				<Accordion.Body>
				<p><b> 2021 </b></p>
				<ul>
					<li><a href="https://github.com/AnaNeri/Aveiro-20210721" target="_blank" rel="noopener noreferrer">"Tutorial: Hands-on quantum computing with Qiskit"</a>, with Luis S. Barbosa (UMinho), U. Aveiro;</li>
				</ul>
				<p><b> 2020</b></p>
				<ul>
					<li><a href="https://github.com/AnaNeri/20201218_talk" target="_blank" rel="noopener noreferrer">"Introduction to Quantum Computation"</a>, Online;</li>
				</ul>
				<p><b> 2019 </b></p>
				<ul>
					<li>"Sessão hands-on de experimentação no IBM Q. Desenvolvimento de programas quânticos em Qiskit", Módulos HPC e Computação Quântica de Computação Avançada, U.Minho (<a href = "https://github.com/AnaNeri/class_20191115" target="_blank" rel="noopener noreferrer">Notebook</a> e <a href={Pdf2019003} target="_blank" rel="noopener noreferrer">Slides</a>); </li>
					<li><a href="https://github.com/afonsofr/mission10000" target="_blank" rel="noopener noreferrer">"Hands-on Quantum Computing with Qiskit"</a>, with Afonso Rodrigues (U. Minho/CEiiA) and Bruno Murta (INL), <a href="https://nanogateway.eu/pt-pt/mission-quantum/#1565953369664-774bc44b-5189" target="_blank" rel="noopener noreferrer">mission 10 000 conference - Quantum Science and Technologies, INL </a>; </li>
					<li>Demo: “Quantum Computing with QISKIT”, with Afonso Rodrigues, <a href ="https://utaustinportugal.org/events/masterclass1/" target="_blank" rel="noopener noreferrer">Masterclass I: Quantum Computing – Principles, algorithms and applications, UT Austin Portugal </a>; </li>
					<li>"Computação Quântica", Verão no Campus'19, U.Minho (<a href={Pdf2019001} target="_blank" rel="noopener noreferrer">Apresentação</a> e <a href={Pdf2019002} target="_blank" rel="noopener noreferrer">Guia</a>); </li>
					<li><a href="https://github.com/afonsofr/qdays19" target="_blank" rel="noopener noreferrer">"Hands-on session: IBM Q Experience"</a>, with <a href="https://afonsofr.github.io/" target="_blank" rel="noopener noreferrer">Afonso Rodrigues (U. Minho) </a>, <a href="http://w3.math.uminho.pt/qdays2019/" target="_blank" rel="noopener noreferrer">Q Days 19 </a>, U. Minho; </li>
				</ul>
				<p><b> 2018 </b></p>
				<ul>
					<li><a href={Pdf2018004} target="_blank" rel="noopener noreferrer">"IBM Q Experience class notes"</a>, with Afonso Rodrigues (U. Minho), U. Aveiro; </li>
					<li><a href={Pdf2018003} target="_blank" rel="noopener noreferrer">"Towards Quantum Program Calculation"</a>, with J. N. Oliveira (U. Minho), IBM-QuantaLab School, INL; </li>
					<li><a href={Pdf2018001} target="_blank" rel="noopener noreferrer">"Computação Quântica"</a>, Verão no Campus'18, U. Minho; </li>
				</ul>	
		   		</Accordion.Body>
			</Accordion.Item>
			</Accordion>
			</Col>
			</Row>
		</Col>
		</Row>
		</Container>
		</div>
	)
}

function Publications() {
  return (
    <div>
       <Container>
       <Row>
       <Col md={2}>
       </Col>
       <Col md={10}>
       	<PublicationsContent />
       </Col>
       </Row>  
	   </Container>
    </div>
  );
}

export default Publications;