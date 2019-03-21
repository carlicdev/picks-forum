import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ThreadList from './components/Forum/ThreadList';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/forums/threads" component={ThreadList} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
