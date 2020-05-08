import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './about';
import Contact from './contact';
import home from './home';


const Main = () => (
  <Switch>
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/home" component={home} />

  </Switch>
)

export default Main;
