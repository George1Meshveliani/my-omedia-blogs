import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import User from './pages/User';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/user'>Users</Link>
            </li>
          </ul>
        </header>
        <Switch>
            <Route exact path='/' />
            <Route exact path='/about' />
            <Route   path='/user/:id' component={User}/> 
          </Switch>

     </div>
   </Router>
  );
}

export default App;
