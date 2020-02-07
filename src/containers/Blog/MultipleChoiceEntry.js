import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 

function MultipleChoiceEntryContent({title="Tmp title", text="Hi", questions=[]}) {
  const [value, setValue] = React.useState(null);  
  const handleSubmit = e =>  {
    e.preventDefault();    
    console.log("LMAO");
    console.log(e.currentTarget);
  };
  
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
              <Form onSubmite={handleSubmit}>
             <Form.Group as={Row} role="form" value={value} >
              <Form.Label as="legend" column sm={2} >
                Questions
              </Form.Label>
              <Col sm={10}>
                {questions.map(e => (
                <div>
                {e.questions}
                <Form.Check
                  value={e.question}
                  type="radio"
                  label={e.question}
                  name="formHorizontalRadios"
                  id={e.question}
                />
                </div>
                ))}
              </Col>
             </Form.Group>

              <Button type="submit">Submit</Button>
              </Form>
            
			</Col>
			</Row>
		</Col>
		</Row>
		</Container>
    </div>
  );
}

function MultipleChoiceEntry({title="Tmp title", text="Hi", questions=[]}) {
	return (
    <div>
       <Container>
       <Row>
       <Col md={2}>
       </Col>
       <Col md={10}>
       	<MultipleChoiceEntryContent title={title} text={text} questions={questions}/>
       </Col>
       </Row>  
	   </Container>
    </div>
  );
}

export default MultipleChoiceEntry;
