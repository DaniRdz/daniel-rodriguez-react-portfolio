import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BlogItem from '../blog/blog-item';
import BlogModal from '../modals/blog-modal';

export default class Blog extends Component {
    constructor() {
        super();

        this.state = {
            blogsItems: [],
            curretPage: 0,
            totalCount: 0,
            isLoading: true,
            blogModalIsOpen: false
        }

        this.getBlogItems = this.getBlogItems.bind(this);
        this.onscroll = this.onscroll.bind(this);
        window.addEventListener('scroll', this.onscroll, false);
        this.handleNewBlogClick = this.handleNewBlogClick.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleSuccessfullNewSubmission = this.handleSuccessfullNewSubmission.bind(this);
    }

    handleSuccessfullNewSubmission(blog) {
        this.setState({
            blogModalIsOpen: false,
            blogsItems: [blog].concat(this.state.blogsItems)
        })
    }

    handleModalClose() {
        this.setState({
            blogModalIsOpen: false
        })
    }

    handleNewBlogClick() {
        this.setState({
            blogModalIsOpen: true
        })
    }

    onscroll() {

        if (this.state.isLoading || this.state.blogsItems.length === this.state.totalCount) {
            return;
        }

        if (window.innerHeight + document.documentElement.scrollTop + 1 > document.documentElement.offsetHeight) {
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
                <BlogModal
                    handleSuccessfullNewSubmission={this.handleSuccessfullNewSubmission}
                    handleModalClose={this.handleModalClose}
                    modalIsOpen={this.state.blogModalIsOpen}
                />

                {this.props.loggedInStatus === 'LOGGED_IN' ?
                    <div className='new-blog-link'>
                        <a onClick={this.handleNewBlogClick}>
                            <FontAwesomeIcon icon='pen-fancy' />
                        </a>
                    </div> : null}
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