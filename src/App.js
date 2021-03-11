import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Auth from './containers/Auth/Auth';
import Home from './containers/Home/Home';
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <Home/>
          </Route>
          <Route path='/auth'>
            <Auth/>
          </Route>
          <Redirect to='/'/>
        </Switch>
    </BrowserRouter>
  );
};

export default App;
