import React, { Component } from 'react';
import axios from 'axios';

export default class PortfolioDetail extends Component {
    constructor(props) {
        super(props);

        this.getItem = this.getItem.bind(this);
    }

    componentDidMount(){
        this.getItem();
    }

    getItem(){
        axios.get(`https://rdzcore.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`, {withCredentials: true})
        .then(response =>{
            console.log('response', response);
        })
        .catch(error =>{
            console.log('getItem error', error);
        })
    }
    
    render() {
        return (
            <div>
                <h2>Portfolio Detail For {this.props.match.params.slug}</h2>
            </div>
        );
    }
}