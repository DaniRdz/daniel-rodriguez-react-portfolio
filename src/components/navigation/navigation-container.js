import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationContainer = (props) => {

    const dynamicLink = (route, linkText) => {
        return (
            <div className='nav-link-wrapper'>
                <NavLink to={`${route}`} activeClassName='nav-link-active'>
                    {`${linkText}`}
                </NavLink>
            </div>)

    }


    return (
        <div className='nav-wrapper'>
            <div className='left-side'>
                <div className='nav-link-wrapper'>
                    <NavLink exact to='/' activeClassName='nav-link-active'>
                        Home
                        </NavLink>
                </div>
                <div className='nav-link-wrapper'>
                    <NavLink to='/about-me' activeClassName='nav-link-active'>
                        About
                        </NavLink>
                </div>
                <div className='nav-link-wrapper'>
                    <NavLink to='/contact' activeClassName='nav-link-active'>
                        Contact
                        </NavLink>
                </div>
                <div className='nav-link-wrapper'>
                    <NavLink to='/blog' activeClassName='nav-link-active'>
                        Blog
                         </NavLink>
                </div>
                
                {props.loggedInStatus === 'LOGGED_IN' ?

                    (dynamicLink('/portfolio-manager', 'portfolio manager'))
                    : null
                }

                {props.loggedInStatus === 'LOGGED_IN' ?

                    (dynamicLink('/blog-manager', 'blog manager'))
                    : null
                }
            </div>
            <div className='right-side'>
                DANIEL RODRIGUEZ
                </div>
        </div>
    );

};

export default NavigationContainer;