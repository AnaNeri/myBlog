import React from 'react';
import { Helmet } from 'react-helmet';
import Nav1 from '../components/Nav';
import Footer from '../components/Footer'
import AboutMe from './AboutMe';
import Publications from './Publications';
import Cv from './Cv';
import HomePage from './HomePage';
import TextEntry from './Blog/TextEntry';
import GatePost from './Blog/GatePost';
import qubit from '../posts/qubit.json';
import qgate from '../posts/qgate.json';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'; // must import this AND npm install
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";


function App() {
  return (
    <div>
      <Helmet>
        <title>Neri</title>
        <meta name="description" content="Neri" />
      </Helmet>
        <Nav1 />


        <Router>
            <Switch>
              <Route path="/blog/qubit">
                <TextEntry title={qubit.title} text={qubit.body} />
              </Route>
              <Route path="/blog/quantumGate">
              	<GatePost title={qgate.title} text={qgate.body} />
              </Route>
              <Route path="/about">
                <AboutMe />
              </Route>
              <Route path="/publications">
                <Publications />
              </Route>
             <Route path="/cv">
                <Cv />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
        </Router>
        <Footer />
    </div>
  );
}

export default App;
