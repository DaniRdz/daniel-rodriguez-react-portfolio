import React, { Component } from 'react';

import PortfolioItem from './portfolio-item';


export default class PortfolioContainer extends Component {
    constructor() {
        super();
        this.state = {
            pageTitle: 'Welcome to my portfolio',
            data: [
                { title: 'Some Enterprise', category: 'eCommerce', slug:'Some-Enterprise' },
                { title: 'Other Enterprise', category: 'Enterprise', slug: 'Other-Enterprise' },
                { title: 'Some Project', category: 'Security', slug: 'some-project' }
            ]
        };
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        });
    }

    portfolioItems() {

        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={'google.com'} slug ={item.slug} />
        })
    }
    render() {
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