import React, { Component } from 'react';
import "./Perks.scss";
import DemoButton from '../DemoButton/DemoButton';
import TryButton from '../TryButton/TryButton';
import Menu from '../../components/Hamburger/Hamburger';


export default class Perks extends Component {
    render() {
        return (
            <div className='perks'>
                <div className='perks__header'>
                    <Menu/>
                    <div><TryButton/></div>
                </div>
                <div className='perks__main'>
                    <h2 className='perks__main--title'>PERKS</h2>
                    <div className='perks__main--article'>
                        <div className='perks__main--article__sectionR'>
                            <div className='perks__main--article__sectionR--nor1'>_____</div>
                            <div>
                                <div>Subscription</div>
                                <div>Payment</div>
                                <div>Model</div>
                            </div>
                            <div className='perks__main--article__sectionR--nor'>No commitment, cancel anytime. Neber worry about forgetting a payment again!</div>
                        </div>
                        <div className='perks__main--article__sectionB'>
                            <div className='perks__main--article__sectionR--nor1'>_____</div>
                            <div>
                                <div>No Fee</div>
                                <div>Cancellation</div>
                                <div>Policy</div>
                            </div>
                            <div className='perks__main--article__sectionR--nor'>No commitment, cancel anytime. Neber worry about forgetting a payment again!</div>
                        </div>
                        <div className='perks__main--article__sectionY'>
                            <div className='perks__main--article__sectionR--nor1'>_____</div>
                            <div>
                                <div>Subscription</div>
                                <div>Payment</div>
                                <div>Model</div>
                            </div>
                            <div className='perks__main--article__sectionR--nor'>No commitment, cancel anytime. Neber worry about forgetting a payment again!</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}