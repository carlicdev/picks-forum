import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { PostProvider } from '../src/context';

import App from './App/App';

ReactDOM.render((
    <PostProvider>
      <Router>
        <App />
      </Router>
    </PostProvider>
     ), document.getElementById('root'));
