import React, {Component} from 'react';
import './MemoryShow.css';
import memoriesAPI from '../../utils/memoriesAPI';

class MemoryShow extends Component {

    handleEdit = () => {
        memoriesAPI.edit(this.props.memory._id);
    }

    handleDelete = () => {
        memoriesAPI.delete(this.props.memory._id)
        .then(() => {
            this.props.history.push('/memories');
        })
    }

    render() {
        return (
            <div>
                <div className="MemoryShow-info">
                    <h2>{this.props.memory.title}</h2>
                    <div className="MemoryShow-buttons">
                        <button className="btn" onClick={this.handleEdit}>Edit</button>
                        <button className="btn" onClick={this.handleDelete}>Delete</button>
                    </div>
                </div>
                {this.props.memory.images.map(image =>
                    <img key={image} src={image} style={{width: 250}}/>                
                )}
            </div>
        );
    }
};

export default MemoryShow;