import React from 'react';
import './App.scss';
import Navigation from './components/navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Music from './components/Music';
import TheBand from './components/TheBand';
import Events from './components/Events';
import Acoustic from './components/Acoustic';

function App() {
  return (
    <Router>
      <div>
        <div className="App">

          <Navigation />

          <Route exact path="/" component={ Home } />
          <Route exact path="/music" component={ Music } />
          <Route exact path="/the_band" component={ TheBand } />
          <Route exact path="/acoustic" component={ Acoustic } />
          <Route exact path="/events" component={ Events } />
        </div>
      </div>
    </Router>
  );
}

export default App;
