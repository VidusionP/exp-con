import React, { Component } from 'react';
import "./HomePage.scss";
import hero1 from '../../assests/hero1.png';
import Menu from '../../components/Hamburger/Hamburger';
import Hero from '../../components/Hero/Hero';
import Red from '../../components/Red/Red';
import Yellow from '../../components/Yellow/Yellow';
import Perks from '../../components/Perks/Perks';
import Reviews from '../../components/Reviews/Reviews';
import GetEXP from '../../components/GetEXP/GetEXP';
import Footer from '../../components/Footer/Footer';

export default class Home extends Component {


    render() {
        return (
            <div className='home'>  
                <Hero/>
                <Red/>
                <Yellow/>
                <Perks/>
                <Reviews/>
                <GetEXP/>
                <Footer/>
            </div>
        )
    }
}