import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Post from './pages/Post';
import Profile from './pages/Profile';
import Blogs from './pages/Blogs';


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
                <Link to='/profile'> </Link>
                <Link to='/post'> </Link>
          </ul>
        </header>
        <Switch>
            <Route exact path='/' component={Blogs} />
            <Route exact path='/profile/:id' component={Profile} />
            <Route   path='/post/:id' component={Post}/> 
          </Switch>

     </div>
   </Router>
  );
}

export default App;
