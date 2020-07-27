import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from '../portfolio/portfolio-sidebar-list';
import PortfolioForm from '../portfolio/portfolio-form';

export default class PortfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            portfolioItems: []
        }
        this.handleSuccesfullFormSubmission = this.handleSuccesfullFormSubmission.bind(this);
        this.handleFormSbmissionError = this.handleFormSbmissionError.bind(this);
    }
    handleSuccesfullFormSubmission(portfolioItem) {
        //TODO
        //Update portfolioItems state
        //and add portfolioItem to the list

    }
    handleFormSbmissionError(error) {
        console.log('handleFormSbmissionError error', error);
    }
    getPortfolioItems() {
        axios.get('https://rdzcore.devcamp.space/portfolio/portfolio_items', { withCredentials: true })
            .then(response => {
                this.setState({
                    portfolioItems: [...response.data.portfolio_items]
                })
            })
            .catch(error => {
                console.log('error in getPortfolioItems', error);
            });
    }
    componentDidMount() {
        this.getPortfolioItems();
    }
    render() {
        return (
            <div className='portfolio-manager-wrapper'>
                <div className='left-column'>
                    <PortfolioForm
                        handleSuccesfullFormSubmission={this.handleSuccesfullFormSubmission}
                        handleFormSbmissionError={this.handleFormSbmissionError}
                    />
                </div>
                <div className='right-column'>
                    <PortfolioSidebarList data={this.state.portfolioItems} />
                </div>
            </div>
        );
    }
}