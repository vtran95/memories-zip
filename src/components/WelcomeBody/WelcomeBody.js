import React from 'react';
import './WelcomeBody.css';
import {Icon} from 'react-materialize';

const WelcomeBody = () => {
    return (
        <div className="WelcomeBody">
            <div className="WelcomeBody-steps">
                <h2>Step 1</h2>
                <div className="WelcomeBody-StepsInfo">
                    <Icon large>camera_alt</Icon>
                    <p className="WelcomeBody-text">Capture your memories</p>
                </div>
            </div>
            <div className="WelcomeBody-steps">
                <h2>Step 2</h2>
                <div className="WelcomeBody-StepsInfo">
                    <Icon large>create_new_folder</Icon>
                    <p className="WelcomeBody-text">Store them on memories.zip</p>
                </div>
            </div>
            <div className="WelcomeBody-steps">
                <h2>Step 3</h2>
                <div className="WelcomeBody-StepsInfo">
                    <Icon large>sentiment_very_satisfied</Icon>
                    <p className="WelcomeBody-text">Enjoy the nostalgia</p>
                </div>
            </div>
        </div>
    )
}

export default WelcomeBody;