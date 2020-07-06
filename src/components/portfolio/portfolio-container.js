import React, { Component } from 'react';

import PortfolioItem from './portfolio-item';
import portfolioItem from './portfolio-item';


export default class PortfolioContainer extends Component {
    constructor(){
        super();
        console.log('Portfolio container is reandered');
    }
    portfolioItems(){
        const data = ['some Item', 'Other Item', 'someelse'];

        return data.map(item =>{
        return <PortfolioItem title = {item} url = {'google.com'} />
        })
    }
    render(){
        return(
            <div>
                <h2>Portfolio items goes here...</h2>
                {this.portfolioItems()}
            </div>
        );

    }
}