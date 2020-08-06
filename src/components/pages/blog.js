import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BlogItem from '../blog/blog-item'

export default class Blog extends Component {
    constructor() {
        super();

        this.state = {
            blogsItems: [],
            curretPage: 0,
            totalCount: 0,
            isLoading: true
        }

        this.getBlogItems = this.getBlogItems.bind(this);
        this.onscroll = this.onscroll.bind(this);
        window.addEventListener('scroll', this.onscroll, false);
    }

    onscroll() {

        if (this.state.isLoading || this.state.blogsItems.length === this.state.totalCount) {
            return;
        }

        if (Math.round(window.innerHeight + document.documentElement.scrollTop) === document.documentElement.offsetHeight) {
            this.getBlogItems();
        }
    }

    getBlogItems() {
        this.setState({
            curretPage: this.state.curretPage + 1
        })
        axios.get(`https://rdzcore.devcamp.space/portfolio/portfolio_blogs?page=${this.state.curretPage}`, { withCredentials: true })
            .then(response => {
                console.log('getting', response.data);
                this.setState({
                    blogsItems: this.state.blogsItems.concat(response.data.portfolio_blogs),
                    totalCount: response.data.meta.total_records,
                    isLoading: false
                })
            })
            .catch(error => {
                console.log('getBlogItems error', error);
            });
    }

    componentDidMount() {
        this.getBlogItems();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onscroll, false);
    }

    render() {
        const blogRecords = this.state.blogsItems.map(blogItem => {
            return <BlogItem key={blogItem.id} blogItem={blogItem} />;
        })
        return (
            <div className='blog-container'>
                <div className='content-container'>
                    {blogRecords}
                </div>
                {this.state.isLoading ? (
                    <div className='content-loader'>
                        <FontAwesomeIcon icon='atom' spin />
                    </div>) : null}
            </div>
        );
    }
}