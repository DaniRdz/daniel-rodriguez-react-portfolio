import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import contactImage from '../../../static/assets/images/auth/login.jpg'

export default function () {
    return (
        <div className='content-page-wrapper'>
            <div className='left-column'
                style={{
                    background: 'url(' + contactImage + ') no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
            <div className='right-column'>
                <div className='contact-bullet-points'>
                    <div className='contact-bullet-point'>
                        <div className='icon'>
                            <FontAwesomeIcon icon='mobile' />
                        </div>
                        <div className='text'>
                            555-555-55-55
                        </div>
                    </div>

                    <div className='contact-bullet-point'>
                        <div className='icon'>
                            <FontAwesomeIcon icon='envelope' />
                        </div>
                        <div className='text'>
                            daniel@live.com
                        </div>
                    </div>

                    <div className='contact-bullet-point'>
                        <div className='icon'>
                            <FontAwesomeIcon icon='map-marker-alt' />
                        </div>
                        <div className='text'>
                            Guadalajara, Mex
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}