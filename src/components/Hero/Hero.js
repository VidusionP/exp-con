import React, { Component } from 'react';
import "./Hero.scss";
import TryButton from '../TryButton/TryButton';
import Menu from '../../components/Hamburger/Hamburger';

export default class Hero extends Component {
    render() {
        return (
            <div className='home1'>
                <Menu/>
                <div className="home1__hero">
                    <h2 className="home1__hero--title">INTERACTION CONCERT EXPERIENCE</h2>
                    <div className="home1__hero--sub">Experience your favourite artists like never before and from the comfort of your own home.</div>
                    <TryButton/>
                </div>
            </div>
        )
    }
}