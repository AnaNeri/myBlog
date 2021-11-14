import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table'
import Accordion from 'react-bootstrap/Accordion';

function CvContent() {
  return (
    <div >
    <br/>
       <Container>
       <Row>
		<Col lg={10}>
			<Row>
			<Col md={11}>
       	<h2>CV</h2>
       	<br/>
        
		<Accordion>
		<Accordion.Item eventKey="0">
			<Accordion.Header><h3>Experience</h3></Accordion.Header>
			<Accordion.Body>
			<p><b>INESC Technology and Science - Associate Laboratory</b></p>
			<ul>
				<li> External Student (Oct 2019 - Present)</li>
				<li> Research Assistant (Oct 2017 - Oct 2019)</li>
			</ul>
			</Accordion.Body>
		</Accordion.Item>
		<Accordion.Item eventKey="1">
			<Accordion.Header><h3>Education</h3></Accordion.Header>
			<Accordion.Body>
			<p><b>PhD Degree</b></p>
			<ul>
				<li>MAPi - Computer Science</li>
				<li>University of Minho, Porto, and Aveiro</li>
			</ul>
			<p><b>Master Degree</b></p>
			<ul>
				<li>Integrated Master's in Physical Engineering - Information Physics </li>
				<li>University of Minho</li>
				<li>2016-2018</li>
			</ul>
			<p><b>BSc Degree</b></p>
			<ul>
				<li>Degree in Physical Sciences</li>
				<li>University of Minho</li>
				<li>2013-2017</li>
			</ul>
			</Accordion.Body>
		</Accordion.Item>
		<Accordion.Item eventKey="2">
			<Accordion.Header><h3>Accomplishments</h3></Accordion.Header>
			<Accordion.Body>
			<p><b>Quantum Portugal Initiative Grant</b></p>
			<ul>
				<li>FCT - INL</li>
				<li>Fev 2021 - Present</li>
			</ul>
			<p><b>Research Grant</b></p>
			<ul>
				<li>University of Minho</li>
				<li>Jun 2020 -Jan 2021</li>
			</ul>
			<p><b>Research Grant - Master</b></p>
			<ul>
				<li>University of Minho</li>
				<li>Aug 2019 - Oct 2019</li>
			</ul>
			<p><b>Research Grant - Master</b></p>
			<ul>
				<li>University of Minho</li>
				<li>Dec 2018 - Jul 2019</li>
			</ul>
			<p><b>Research Grant - Licensee</b></p>
			<ul>
				<li>INESC TEC</li>
				<li>Nov 2017 - Jan 2018</li>
			</ul>
			</Accordion.Body>
		</Accordion.Item>
		<Accordion.Item eventKey="3">
			<Accordion.Header><h3>Skills</h3></Accordion.Header>
			<Accordion.Body>
			<ul>
				<li>Proficient with Quantum Programming Laguanges:
				<ul>
					<li>Quipper</li>
					<li>Qiskit</li>
					{/*<li>IBM-Q Composer</li>*/}  
				</ul>
				</li>
				<li>Proficient with Programming Languages:
				<ul>
					<li>Haskell</li>
					<li>Python</li>
					{/*<li>Matlab</li>*/}
				</ul>
				</li>
				{/*<li>
				Skilled with:
				<ul>
					<li>Latex</li>
					<li>Word</li>
					<li>Excel</li>
					<li>PowerPoint</li>
				</ul>
				</li>*/}
			</ul>
			</Accordion.Body>
		</Accordion.Item>
		<Accordion.Item eventKey="4">
			<Accordion.Header><h3>Languages</h3></Accordion.Header>
			<Accordion.Body>
			<p><b>Native Language:</b> Portuguese</p>
	       	<Table striped bordered responsive hover size="sm">
	       	<thead>
       		<tr>
	       		<th rowSpan="2">Other Languages</th>
	       		<th colSpan="2">Understanding</th>
	       		<th colSpan="2">Speacking</th>
	       		<th>Writing</th>
       		</tr>	
       		<tr>
       			<td>Listening</td>
       			<td>Reading</td>
       			<td>Spoken interaction</td>
       			<td>Spoken Production</td>
       			<td></td>
       		</tr>
			</thead>
			<tbody>
				<tr>
					<td>English</td>
					<td>C1</td>
					<td>C1</td>
					<td>C1</td>
					<td>C1</td>
					<td>C1</td>
				</tr>
				<tr>
					<td>German</td>
					<td>A2</td>
					<td>A2</td>
					<td>A2</td>
					<td>A2</td>
					<td>A2</td>
				</tr>
			</tbody>
			</Table>
			</Accordion.Body>
		</Accordion.Item>
		</Accordion>

       	
       	
       </Col>
       </Row>
       </Col>
       </Row>
       </Container>
    </div>
  );
}

function Cv() {
  return (
    <div>
       <Container>
       <Row>
       <Col md={2}>
       </Col>
       <Col md={10}>
       	<CvContent />
       </Col>
       </Row>  
	   </Container>
    </div>
  );
}

export default Cv;