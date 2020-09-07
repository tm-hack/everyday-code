import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from './componets/Home'
import WeeklyLog from './componets/WeeklyLog';

import './App.css';

const App: React.FC = () => (
  <div className='container'>
    <Switch>
      <Route path="/weeklyLog" component={WeeklyLog} />
      <Route path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  </div>
)

export default App;
