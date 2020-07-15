import React, { Component } from 'react';
import axios from 'axios';

import PortfolioItem from './portfolio-item';


export default class PortfolioContainer extends Component {
    constructor() {
        super();
        this.state = {
            pageTitle: 'Welcome to my portfolio',
            data: [
                { title: 'Some Enterprise', category: 'eCommerce', slug: 'Some-Enterprise' },
                { title: 'Other Enterprise', category: 'Enterprise', slug: 'Other-Enterprise' },
                { title: 'Some Project', category: 'Security', slug: 'some-project' }
            ]
        };
        this.handleFilter = this.handleFilter.bind(this);
        this.getPortfolioItems = this.getPortfolioItems.bind(this);

    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        });
    }
    getPortfolioItems() {
        axios.get('https://rdzcore.devcamp.space/portfolio/portfolio_items')
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }
    portfolioItems() {

        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={'google.com'} slug={item.slug} />
        })
    }
    render() {
        this.getPortfolioItems();
        
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
                <button onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                <button onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>
                <button onClick={() => this.handleFilter('Security')}>Security</button>
                {this.portfolioItems()}
            </div>
        );

    }
}