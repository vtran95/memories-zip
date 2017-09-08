import React from 'react';
import './WelcomeHeader.css';

const WelcomeHeader = () => {
    return (
        <header style={{backgroundImage: "url('http://www.ayk-i.com/wp-content/uploads/2015/10/KYRFNLK23V.jpg')"}} className="masthead">
            <div className="row WelcomeHeader">
                <div className="WelcomeHeader-div col offset-s3">
                    <h1 className="Welcome-title">Live for moments</h1>
                    <h1 className="Welcome-title">you can't put into words</h1>
                </div>
            </div>
        </header>
    )
}

export default WelcomeHeader;