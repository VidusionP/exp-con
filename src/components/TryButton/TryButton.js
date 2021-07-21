import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./TryButton.scss";


export default class TryButton extends Component {
    render() {
        return (
            <Link to={'/prices'}>
                <button className='try1'>TRY IT NOW</button>
            </Link>
        )
    }
}