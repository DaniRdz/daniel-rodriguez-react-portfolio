import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import BlogItem from '../blog.js/blog-item'

export default class Blog extends Component {
    constructor() {
        super();

        this.state = {
            blogsItems: []
        }

        this.getBlogItems = this.getBlogItems.bind(this);
    }

    getBlogItems() {
        axios.get('https://rdzcore.devcamp.space/portfolio/portfolio_blogs', { withCredentials: true })
            .then(response => {
                this.setState({
                    blogsItems: response.data.portfolio_blogs
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
            <div>
                {blogRecords}
            </div>
        );
    }
}