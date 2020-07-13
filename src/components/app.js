import React, { Component } from 'react';
import moment from 'moment';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import Contact from './pages/contact';
import PortfolioDetail from './portfolio/portfolio-detail';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <h1>Daniel Rodríguez Portfolio</h1>
            <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
            <NavigationContainer />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about-me' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/blog' component={Blog} />
              <Route path='/portfolio/:slug' component={PortfolioDetail} />

            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
