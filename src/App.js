import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';
import Home from './pages/HomePage/HomePage';
import Prices from './pages/Pricing/Prices';
import Payments from './pages/Payments/Payments';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/prices' component={Prices}/>
          <Route path='/payments' component={Payments}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
