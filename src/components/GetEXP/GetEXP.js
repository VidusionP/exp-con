import React, { Component } from 'react';
import "./GetEXP.scss";
import DemoButton from '../DemoButton/DemoButton';
import TryButton from '../TryButton/TryButton';
import Menu from '../../components/Hamburger/Hamburger';

export default class GetEXP extends Component {
    render() {
        return (
            <div className='exp'>
                <Menu/>
                <div className='exp__section'>
                    <div className='exp__section--text'>
                        <h2 className='exp__section--text__title'>GET EXP|CON NOW</h2>
                        <div>Purchase and download the app.</div>
                    </div>
                    <div className='exp__section--button'>
                        <TryButton/>
                    </div>
                </div>
            </div>
        )
    }
}