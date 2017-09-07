import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import memoriesAPI from '../../utils/memoriesAPI';

class MemoryShow extends Component {

    handleDelete = () => {
        memoriesAPI.delete(this.props.memory._id);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <button className="btn" onClick={this.handleDelete}>Delete</button>
                <h2>{this.props.memory.title}</h2>
                {this.props.memory.images.map(image =>
                    <img key={image} src={image} style={{width: 250}}/>                
                )}
            </div>
        );
    }
};

export default MemoryShow;