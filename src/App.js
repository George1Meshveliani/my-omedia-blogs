import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import User from './pages/Post';
import Profile from './pages/Profile';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <ul>
            <li>
                <Link to='/'>Posts</Link>
            </li>
            <li>
                <Link to='/profile'>Profile</Link>
            </li>
            <li>
                <Link to='/post'>User post</Link>
            </li>
          </ul>
        </header>
        <Switch>
            <Route exact path='/' />
            <Route exact path='/profile/:id' component={Profile} />
            <Route   path='/post/:id' component={User}/> 
          </Switch>

     </div>
   </Router>
  );
}

export default App;
