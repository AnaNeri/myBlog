import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import key from '../key.json';


function HomePageContent() {
  const useFetch = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function fetchData() {
        const url = "https://api.openweathermap.org/data/2.5/weather?id=8010448&appid=" + key.value;
        const response= await fetch(url);
        const data = await response.json();
        const item =  data.weather[0].description;
        setData(item.toString().toLowerCase());
      }
      fetchData()
    }, []);
    return data;
  };

  const data = useFetch();
  
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
            { data && <p>Since it's {data} outside, why not learn something new? :) </p> }

        <br/>

        <ul>
            <li><Link to ="/blog/qubit"> What's a qubit?  </Link></li>
            <li><Link to ="/blog/quantumGate"> What's a quantum gate? </Link></li>
            <li><Link to ="/blog/quantumcomputer"> What's a quantum computer? </Link></li>
        </ul>
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
