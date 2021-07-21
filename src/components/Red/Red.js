import React, { Component } from 'react';
import "./Red.scss";
import DemoButton from '../DemoButton/DemoButton';
import TryButton1 from '../TryButton1/TryButton1';
import speak1 from '../../assests/medium17.png'
import speak2 from '../../assests/medium27.png'
import Menu from '../../components/Hamburger/Hamburger';


export default class Red extends Component {
    
    
    render() {
        return (
            <div className='red'>
                <div className='yellow__header'>
                    <Menu/>
                    <TryButton1/>
                </div>
                <div className='red__main'>
                    <div className='red__main--section'>
                        <h2 className='red__main--title'>SUPERIOR SOUND</h2>
                        <div className='red__main--text'>Experience live versions of your favourite songs.</div>
                        <DemoButton/>
                    </div>
                    <div className='red__main--speaker'>
                        <img className='red__main--speaker__image1' src={speak1}/>
                        <img className='red__main--speaker__image2' src={speak2}/>
                    </div>
                </div>
            </div>
        )
    }
}