import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./TryButton1.scss";


export default class TryButton1 extends Component {
    render() {
        return (
            <Link to={'/prices'}>
                <button className='try2'>TRY IT NOW</button>
            </Link>
        )
    }
}