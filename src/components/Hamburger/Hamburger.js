import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Hamburger.scss";
import menu from '../../assests/menu.svg';
import menu1 from '../../assests/menu1.svg';


export default class Menu extends Component {


    render() {
        return (
            <div className='menu'>
                <img className='menu__icon' src={(window.location.pathname==='/payments'?menu1:menu)}/>
                <Link style={{textDecoration: 'none'}}to={'/'}><span className={window.location.pathname==='/payments'?'menu__text1':'menu__text'}>EXP|CON</span></Link>
            </div>
        )
    }
}