import React, { Component } from 'react';
import "./Reviews.scss";
import DemoButton from '../DemoButton/DemoButton';
import TryButton1 from '../TryButton1/TryButton1';
import speak1 from '../../assests/SmallSpeaker1-03.png';
import speak2 from '../../assests/SmallSpeaker2-03.png';
import Menu from '../../components/Hamburger/Hamburger';


export default class Reviews extends Component {
    render() {
        return (
            <div className='review'>
                <div className='review__header'>
                    <Menu/>
                    <TryButton1/>
                </div>
                <div className='review__main'>
                    <div className='review__main--speaker'>
                        <img className='review__main--speaker__image1' src={speak1}/>
                        <img className='review__main--speaker__image2' src={speak2}/>
                    </div>
                    <div className='review__main--text'>
                        <h2 className='review__main--text__title'>REVIEWS</h2>
                        <div className='review__main--text__article'>
                            <div className='review__main--text__article--test'>
                                <div>Stars</div>
                                <div className='review__main--text__article--test__art'>ARTIST</div>
                                <div className='review__main--text__article--test__para'>"Love it, it's the Best. I can't live without it!"</div>
                            </div>
                            <div className='review__main--text__article--test'>
                                <div>Stars</div>
                                <div className='review__main--text__article--test__art'>PRODCUER</div>
                                <div className='review__main--text__article--test__para'>"Love it, it's the Best. I can't live without it!"</div>
                            </div>
                            <div className='review__main--text__article--test'>
                                <div>Stars</div>
                                <div className='review__main--text__article--test__art'>MUSIC FAN</div>
                                <div className='review__main--text__article--test__para'>"Love it, it's the Best. I can't live without it!"</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}