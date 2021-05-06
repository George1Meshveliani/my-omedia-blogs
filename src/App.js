import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import User from './pages/User';
import Profile from './pages/Profile';

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
                <Link to='/profile'>Profile</Link>
            </li>
            <li>
                <Link to='/user'>Users</Link>
            </li>
          </ul>
        </header>
        <Switch>
            <Route exact path='/' />
            <Route exact path='/profile/:id' component={Profile} />
            <Route   path='/user/:id' component={User}/> 
          </Switch>

     </div>
   </Router>
  );
}

export default App;
