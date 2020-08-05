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
        this.activateInfiniteScroll();
    }

    activateInfiniteScroll() {
        window.onscroll = () => {

            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                console.log('get more posts');
            }
        };
    }

    getBlogItems() {
        this.setState({
            curretPage: this.state.curretPage + 1
        })
        axios.get('https://rdzcore.devcamp.space/portfolio/portfolio_blogs', { withCredentials: true })
            .then(response => {
                this.setState({
                    blogsItems: response.data.portfolio_blogs,
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