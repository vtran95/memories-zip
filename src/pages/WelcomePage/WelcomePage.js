import React from 'react';
import './WelcomePage.css'
import WelcomeHeader from '../../components/WelcomeHeader/WelcomeHeader';
import WelcomeBody from '../../components/WelcomeBody/WelcomeBody';

const WelcomePage = (props) => {
    return (
        <div className="WelcomePage">
            <WelcomeHeader />
            <WelcomeBody />
        </div>
    )
}

export default WelcomePage;