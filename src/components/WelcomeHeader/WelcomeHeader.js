import React from 'react';
import './WelcomeHeader.css';
import bg from '../../images/cover.jpg';

const WelcomeHeader = () => {
    return (
        <header style={{backgroundImage: "url("+bg+")"}} className="masthead">
            <div className="row WelcomeHeader">
                <div className="WelcomeHeader-div col">
                    <h1 className="Welcome-title">Live for moments</h1>
                    <h1 className="Welcome-title">you can't put into</h1>
                    <h1 className="Welcome-title-words">WORDS</h1>
                </div>
            </div>
        </header>
    )
}

export default WelcomeHeader;