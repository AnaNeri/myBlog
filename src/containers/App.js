import React from 'react';
import Nav1 from '../components/Nav';
import Footer from '../components/Footer'
import AboutMe from './AboutMe';
import Publications from './Publications';
import Cv from './Cv';
import HomePage from './HomePage';
import TextEntry from './Blog/TextEntry';
import GatePost from './Blog/GatePost';
import MultipleChoiceEntry from './Blog/MultipleChoiceEntry';
import qubitH from '../posts/qubitHistory.json';
import qgate from '../posts/qgate.json';
import qcomputer from '../posts/qcomputer.json'
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

        <title>Neri</title>

        <Nav1 />


        <Router>
            <Switch>
              <Route path="/blog/qubitHistory">
                <TextEntry title={qubitH.title} text={qubitH.body} refs={qubitH.refs}/>
              </Route>
              <Route path="/blog/quantumGate">
              	<GatePost title={qgate.title} text={qgate.body} />
              </Route>
              <Route path="/blog/quantumComputer">
              	<MultipleChoiceEntry title={qcomputer.title} text={qcomputer.body} questions={qcomputer.questions} />
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
        
        <div className=".d-block .d-sm-none">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </div>

        <footer>
        <Footer />
        </footer>
    </div>
  );
}

export default App;
