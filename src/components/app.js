import React, { Component } from 'react';
import moment from 'moment';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PortfolioContainer from './portfolio/portfolio-container';
import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import Contact from './pages/contact';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <NavigationContainer />
            <Switch>
              <Route exact path='/' component = {Home}/>
              <Route exact path='/about-me' component = {About}/>
              <Route exact path='/contact' component = {Contact}/>
              <Route exact path='/blog' component = {Blog}/>
            </Switch>
          </div>
        </BrowserRouter>
        <h1>Daniel Rodríguez Portfolio</h1>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        <PortfolioContainer />
      </div>
    );
  }
}
