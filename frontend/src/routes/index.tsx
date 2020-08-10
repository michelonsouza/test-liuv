import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Header, Footer } from '../components';
import { Cart, Category, Categories } from '../pages';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Categories} />
        <Route path="/category/:id" component={Category} />
        <Route path="/cart" component={Cart} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
