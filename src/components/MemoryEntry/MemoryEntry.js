import React from 'react';
import {Link} from 'react-router-dom';
import './MemoryEntry.css';
import {Row, Col} from 'react-materialize';

const MemoryEntry = (props) => {
    
    function displayImages() {
        var images = []
        var numImgs = props.memory.images.length < 3 ? props.memory.images.length : 3
        for (var i = 0; i < numImgs; i++) {
            images.push(
                <Col s={4} key={props.memory._id + i}>
                    <img src={props.memory.images[i]}
                         alt="memory"
                         style={{height: 250, maxWidth: 350}}
                    />
                </Col>
            )
        }
        return images;
    }

    return (
        <div className="MemoryEntry">
            <div className="MemoryEntry-header">
                <div>
                    <h3><Link to={'/memories/' + props.memory._id}>{props.memory.title} - {props.memory.date}</Link></h3>
                    <hr/>
                </div>
                <h5>{props.memory.location}</h5>
            </div>
            <Row>
                {displayImages()}
            </Row>
        </div>
    )
}

export default MemoryEntry;