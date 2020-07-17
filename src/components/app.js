import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import Contact from './pages/contact';
import PortfolioDetail from './portfolio/portfolio-detail';
import NoMatch from './pages/no-match';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <div>
            <NavigationContainer />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about-me' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/blog' component={Blog} />
              <Route exact path='/portfolio/:slug' component={PortfolioDetail} />
              <Route component={NoMatch} />


            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
