import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from '../portfolio/portfolio-sidebar-list';

export default class PortfolioManager extends Component {
    constructor(){
        super();

        this.state = {
            data: []
        }
    }
    getPortfolioItems(){
        axios.get('https://rdzcore.devcamp.space/portfolio/portfolio_items',{withCredentials: true})
        .then(response =>{
            this.setState({
                data: [...response.data.portfolio_items]
            })
        })
        .catch(error => {
            console.log('error in getPortfolioItems', error);
        });
    }
    componentDidMount(){
        this.getPortfolioItems();
    }
    render() {
        return (
            <div className='portfolio-manager-wrapper'>
                <div className='left-column'>
                    <h1>Portfolio form...</h1>
                </div>
                <div className='right-column'>
                    <PortfolioSidebarList  data = {this.state.data}/>
                </div>
            </div>
        );
    }
}