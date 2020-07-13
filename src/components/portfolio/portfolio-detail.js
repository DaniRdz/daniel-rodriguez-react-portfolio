import React from 'react';

export default function (props) {
    return (
        <div>
            <h2>Portfolio Detail For {props.match.params.slug}</h2>
        </div>
    );
}