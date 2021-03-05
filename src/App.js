import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Auth from './containers/Auth/Auth';
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <Route path='/auth'>
        <Auth/>
      </Route>
    </BrowserRouter>
  );
};

export default App;
