import React from 'react';
import './WelcomeBody.css';
import {Icon} from 'react-materialize';
import step1 from '../../images/step1.jpg';
import step2 from '../../images/step2.jpg';
import step3 from '../../images/step3.jpg';

const WelcomeBody = () => {
    return (
        <div className="WelcomeBody">
            <div className="WelcomeBody-steps">
                <h2>Step 1</h2>
                <div className="WelcomeBody-stepsInfo">
                    <div className="WelcomeBody-textdiv">
                        <Icon large>camera_alt</Icon>
                        <p className="WelcomeBody-text">Capture your <br/> memories</p>
                    </div>
                    <img className='WelcomeBody-img' src={step1} />
                </div>
            </div>
            <div className="WelcomeBody-steps">
                <h2>Step 2</h2>
                <div className="WelcomeBody-stepsInfo">
                    <div className="WelcomeBody-textdiv">
                        <Icon large>create_new_folder</Icon>
                        <p className="WelcomeBody-text">Store them on <br/> memories.zip</p>
                    </div>
                    <img className='WelcomeBody-img' src={step2} />
                </div>
            </div>
            <div className="WelcomeBody-steps">
                <h2>Step 3</h2>
                <div className="WelcomeBody-stepsInfo">
                    <div className="WelcomeBody-textdiv">
                        <Icon large>sentiment_very_satisfied</Icon>
                        <p className="WelcomeBody-text">Enjoy!</p>
                    </div>
                    <img className='WelcomeBody-img' src={step3} />
                </div>
            </div>
        </div>
    )
}

export default WelcomeBody;