import React from 'react';
import {Link} from 'react-router-dom';
import './IndexHeader.css'

const IndexHeader = (props) => {

    return (
        <div className="MemList-header">
            <h2 className="MemIndex-title">Memories</h2>
            <Link className='btn new-button' to='/memories/new'>New</Link>
        </div>
    );
};

export default IndexHeader;