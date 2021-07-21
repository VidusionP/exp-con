import React, { Component } from 'react';
import "./Footer.scss";
import mail from '../../assests/mail.svg'

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer__email'>
                    <img className='footer__email--icon' src={mail}/> 
                    supprt@experienceconcerts.co
                </div>
                <div className='footer__text'>
                    <div className='footer__text--title'>EXP|CON</div>
                    <div className='footer__text--sub'>2019 All Rights Reserved | Speer Technologies Incorporated</div>
                </div>
            </div>
        )
    }
}