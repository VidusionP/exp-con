import React, { Component } from 'react';
import "./Yellow.scss";
import DemoButton from '../DemoButton/DemoButton';
import TryButton1 from '../TryButton1/TryButton1';
import Menu from '../../components/Hamburger/Hamburger';

// const circle = document.getElementById('test1');
// document.addEventListener('mousemove', positionCircle);

// function positionCircle(e){
//     circle.style.left = e.clientX + 'px';
//     circle.style.top = e.clientY + 'px';
// }

export default class Yellow extends Component {

    componentDidMount() {
        const circle = document.querySelector('.vidu');
        document.addEventListener('mousemove', vidu)

        function vidu(e) {
            circle.style.marginLeft = e.clientX + 'px';
            circle.style.marginTop = e.clientY + 'px';
        }
    }
    render() {
        return (
            <div className='yellow'>
                <span className='vidu'>REVEAL</span>
                
                <div className='yellow__header'>
                    <Menu/>
                    <TryButton1/>
                </div>
                <div className='yellow__main'>
                    <h2 className='yellow__main--title'>FRONT ROW SEATS</h2>
                    <div className='yellow__main--section'>Experience concerts up close and personal</div>
                    <DemoButton/>
                </div>
            </div>
        )
    }
}