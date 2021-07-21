import React, { Component } from 'react';
import "./Prices.scss";
import { Link } from 'react-router-dom';
import Menu from '../../components/Hamburger/Hamburger';
import Footer from '../../components/Footer/Footer';

export default class Prices extends Component {
    render() {
        return (
            <div className='prices'>  
                <div className='prices__main'>
                    <Menu />
                    <div className='prices__main--section'>
                        <div className='prices__main--section__header'>
                            <h2  className='prices__main--section__header--title'>PRICING</h2>
                            <div>Test out our app today! Choose from three subscription</div>
                            <div>Based payment models.</div>
                        </div>
                        <div className='prices__main--section__subs'>
                            <div className='prices__main--section__subs--bas'>
                                <div className='prices__main--section__subs--bas__info'>
                                    <div className='prices__main--section__subs--bas__info--title'>BASIC</div>
                                    <div className='prices__main--section__subs--bas__info--dash'>__________________</div>
                                    <div className='prices__main--section__subs--bas__info--len'>MONTHLY</div>
                                    <div>$9</div>
                                </div>
                                <div className='prices__main--section__subs--bas__feat'>
                                    <div>Very good</div>
                                    <div>Amazing</div>
                                    <div>Perfect Job</div>
                                    <div>Love this</div>
                                    <div>It's so good</div>
                                    <div>Features</div>
                                </div>
                                <Link to={'/payments'}><button className='prices__main--section__subs--bas__button'>SELECT</button></Link>
                            </div>
                            <div className='prices__main--section__subs--adv'>
                                <div className='prices__main--section__subs--adv__info'>
                                    <div className='prices__main--section__subs--bas__info--title'>ADVANCED</div>
                                    <div className='prices__main--section__subs--bas__info--dash'>__________________</div>
                                    <div className='prices__main--section__subs--bas__info--len'>YEARLY</div>
                                    <div>$99</div>
                                </div>
                                <div className='prices__main--section__subs--bas__feat'>
                                    <div>Very very good</div>
                                    <div>Even Amazing</div>
                                    <div>Perfect Job</div>
                                    <div>Love this more</div>
                                    <div>It's so so good</div>
                                    <div>More Features</div>
                                </div>
                                <Link to={'/payments'}><button className='prices__main--section__subs--adv__button'>SELECT</button></Link>
                            </div>
                            <div className='prices__main--section__subs--pro'>
                                <div className='prices__main--section__subs--pro__info'>
                                    <div className='prices__main--section__subs--bas__info--title'>PRO</div>
                                    <div className='prices__main--section__subs--bas__info--dash'>__________________</div>
                                    <div className='prices__main--section__subs--bas__info--len'>YEARLY</div>
                                    <div>$120</div>
                                </div>
                                <div className='prices__main--section__subs--bas__feat'>
                                    <div>Very very good</div>
                                    <div>Even more</div>
                                    <div>Perfect Job</div>
                                    <div>Love this</div>
                                    <div>It's so good</div>
                                    <div>Features</div>
                                </div>
                                <Link to={'/payments'}><button className='prices__main--section__subs--pro__button'>SELECT</button></Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='prices__perks'>
                    <Menu />
                    <div className='prices__perks--section'>
                        <h2 className='prices__perks--section__title'>PERKS</h2>
                        <div className='prices__perks--section__box'>
                            <div className='prices__perks--section__box--info'>
                                <div>_____</div>
                                <div>
                                    <div>Subscription</div>
                                    <div>Payment</div>
                                    <div>Model</div>
                                </div>
                                <div className='prices__perks--section__box--info__text'>No commitment,<br/> cancel anytime. Never <br/>worry about forgetting<br/> a payment again!</div>
                            </div>
                            <div className='prices__perks--section__box--info'>
                                <div>_____</div>
                                <div>
                                    <div>No Fee</div>
                                    <div>Cancellation</div>
                                    <div>Policy</div>
                                </div>
                                <div className='prices__perks--section__box--info__text'>No commitment,<br/> cancel anytime. Never <br/>worry about forgetting<br/> a payment again!</div>
                            </div>
                            <div className='prices__perks--section__box--info'>
                                <div>_____</div>
                                <div>
                                    <div>Subscription</div>
                                    <div>Payment</div>
                                    <div>Model</div>
                                </div>
                                <div className='prices__perks--section__box--info__text'>No commitment,<br/> cancel anytime. Never <br/>worry about forgetting<br/> a payment again!</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}