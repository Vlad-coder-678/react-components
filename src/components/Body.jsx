import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import Home from './Home';
import About from './About';
import Details from './Details';
import NotFound from './NotFound';

const Body = () => (
  <Switch>
    <Route path="/" exact>
      <CSSTransition timeout={300} className="transition">
        <Home />
      </CSSTransition>
    </Route>
    <Route path="/about">
      <CSSTransition timeout={300} className="transition">
        <About />
      </CSSTransition>
    </Route>
    <Route
      path="/details/:cardIndex"
      render={() => (
        <CSSTransition timeout={300} className="transition">
          <Details />
        </CSSTransition>
      )}
    />
    <Route path="*">
      <CSSTransition timeout={300} className="transition">
        <NotFound />
      </CSSTransition>
    </Route>
  </Switch>
);

export default Body;
