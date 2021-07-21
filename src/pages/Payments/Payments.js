import React, { Component } from 'react';
import "./Payments.scss";
import hero1 from '../../assests/hero1.png';
import Menu from '../../components/Hamburger/Hamburger';
import Footer from '../../components/Footer/Footer';


export default class Payments extends Component {
    render() {
        return (
            <div className='payments'>  
                <Menu/>
                <div className='payments__section'>
                    <h2 className='payments__section--title'>PAYMENT</h2>
                    <div className='payments__section--plan'>
                        <div className='payments__section--plan__text'>1. Select your plan</div>
                        <form className='payments__section--plan__sel'>
                            <input type='radio'/>
                            <label>BASIC</label>
                            <input type='radio'/>
                            <label>ADVANCED</label>
                            <input type='radio'/>
                            <label>PRO</label>

                        </form>
                    </div>
                    <div className='payments__section--bill'>
                        <div className='payments__section--bill__split'>
                            <h2 className='payments__section--plan__text'>2. Billing Information</h2>
                            <form className='payments__section--bill__inputs'>
                                <label className='payments__section--bill__inputs--text'>FULL NAME</label><br/>
                                <input className='payments__section--bill__inputs--field' type='text'/><br/>
                                <label className='payments__section--bill__inputs--text'>BILLING ADDRESS</label><br/>
                                <input  className='payments__section--bill__inputs--field'/><br/>
                                <div className='payments__section--bill__inputs--flex'>
                                    <div>
                                        <label className='payments__section--bill__inputs--text'>CITY</label><br/>
                                        <input  className='payments__section--bill__inputs--field'/>
                                    </div>
                                    <div>
                                        <label className='payments__section--bill__inputs--text'>POSTAL CODE</label><br/>
                                        <input  className='payments__section--bill__inputs--field'/>
                                    </div>
                                </div>
                                <label className='payments__section--bill__inputs--text'>COUNTRY</label><br/>
                                <select className='payments__section--bill__inputs--field'>
                                    <option>CANA</option>
                                    <option>USA</option>
                                    <option>ENGLAND</option>
                                </select>
                            </form>
                        </div>
                        <div className='payments__section--bill__split'>
                            <h2 className='payments__section--plan__text'>3. Credit Card Information</h2>
                            <form className='payments__section--bill__inputs'>
                                <label className='payments__section--bill__inputs--text'>CARDHOLDER'S NAME</label><br/>
                                <input  className='payments__section--bill__inputs--field'/><br/>
                                <label className='payments__section--bill__inputs--text'>CARD NUMBER</label><br/>
                                <input  className='payments__section--bill__inputs--field'/><br/>
                                <div className='payments__section--bill__inputs--flex'>
                                    <div>
                                        <label className='payments__section--bill__inputs--text'>EXPIRY MONTH</label><br/>
                                        <input  className='payments__section--bill__inputs--field'/>
                                    </div>
                                    <div>
                                        <label className='payments__section--bill__inputs--text'>EXPIRY YEAR</label><br/>
                                        <input className='payments__section--bill__inputs--field'/><br/>
                                    </div>

                                </div>
                                <label className='payments__section--bill__inputs--text'>CVV</label><br/>
                                <input className='payments__section--bill__inputs--field'/>
                            </form>
                        </div>
                    </div>
                    <div className='payments__section--bot'>
                        <div className='payments__section--bot__fine'>By coninuing, I acknowledge that I've read and aggree <br/>
                            to the Terms of Service & Privacy Policy.
                        </div>
                        <button className='payments__section--bot__button'>DOWNLOAD</button>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}