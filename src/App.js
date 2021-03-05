import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Auth from './containers/Auth/Auth';
import Home from './containers/Home/Home';
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route path='/auth'>
            <Auth/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
    </BrowserRouter>
  );
};

export default App;
