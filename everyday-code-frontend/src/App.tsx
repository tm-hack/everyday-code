import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from './componets/Home'

import './App.css';

const App: React.FC = () => (
  <div className='container'>
    <Switch>
      <Route path="/" component={Home}/>
      <Redirect to="/" />
    </Switch>
  </div>
)


export default App;
