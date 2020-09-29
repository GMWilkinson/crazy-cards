import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Landing from './pages/Landing';
import Application from './pages/Application';
import Show from './pages/Show';
import CardShow from './pages/CardShow';
import OrderPlaced from './pages/OrderPlaced';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} component={Landing}/>
        <Route path={'/application'} component={Application}/>
        <Route path={'/show-results'} component={Show}/>
        <Route path={'/show-card'} component={CardShow}/>
        <Route path={'/order-placed'} component={OrderPlaced}/>
      </Switch>
    </Router>
  );
}

export default App;
