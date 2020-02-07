import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';


function MultipleChoiceEntryContent({title="Tmp title", text="Hi", questions=[]}) {
  const [value, setValue] = React.useState(null);  
  const handleSubmit = e => setValue(e.target.value);
  
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
            <Form>
             <Form.Group as={Row} role="form" value={value} >
              <Form.Label as="legend" column sm={2} >
                Questions
              </Form.Label>
              <Col sm={10}>
                {questions.map(e => (
                <div>
                <Form.Check
                  value={e.question}
                  type="radio"
                  label={e.question}
                  name="formHorizontalRadios"
                  id={e.question}
                  onChange={handleSubmit}
                />
                </div>
                ))}
              </Col>
             </Form.Group>

              </Form>
            {value && <p> {questions.find(q => q.question === value).answer}</p>}
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

MultipleChoiceEntry.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  questions: PropTypes.array,
};

MultipleChoiceEntryContent.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  questions: PropTypes.array,
};

export default MultipleChoiceEntry;
