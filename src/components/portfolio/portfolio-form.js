import React, { Component } from 'react';

export default class PortfolioForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            url: "",
            category: "",
            position: "",
            thumb_image: "",
            banner_image: "",
            logo: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        console.log('hanleChange', event);
    }
    render() {
        return (
            <div>
                <h1>Portfolio Form</h1>
                <form>
                    <div>
                        <input
                            type='text'
                            name='name'
                            placeholder='Portfolio Item Name'
                            value={this.state.name}
                            onChange={this.handleChange}
                        />

                        <input
                            type='text'
                            name='url'
                            placeholder='URL'
                            value={this.state.url}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <input
                            type='text'
                            name='position'
                            placeholder='Position'
                            value={this.state.position}
                            onChange={this.handleChange}
                        />

                        <input
                            type='text'
                            name='category'
                            placeholder='Category'
                            value={this.state.category}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <input
                            type='text'
                            name='description'
                            placeholder='Description'
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <h2>images goes here</h2>
                    </div>

                    <div>
                        <button type='submit'>Save</button>
                    </div>
                </form>
            </div>
        );
    }
}