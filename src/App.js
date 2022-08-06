import React from 'react';
import './App.css';
import Home from './Home';
import SearchPage from './SearchPage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
        <Switch>
          <Route  path="/search" component={SearchPage} />
          <Route path="/" component={Home} />
        </Switch>
        </Router>
    </div>
  );
}

export default App;
