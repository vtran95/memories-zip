import React, {Component} from 'react';
import './MemoryShow.css';
import memoriesAPI from '../../utils/memoriesAPI';
import {Link} from 'react-router-dom';

class MemoryShow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            memory: {images: []}
        }
    }

    handleEdit = () => {
        memoriesAPI.edit(this.props.match.params.id);
    }

    handleDelete = () => {
        memoriesAPI.delete(this.props.match.params.id)
        .then(() => {
            this.props.history.push('/memories');
        })
    }

    componentDidMount() {
        memoriesAPI.show(this.props.match.params.id)
        .then(memory => {
            this.setState({memory}, () => console.log(this.state.memory))
        })
    }

    render() {
        return (
            <div>
                <div className="MemoryShow-info">
                    <div className="MemoryShow-headline">
                        <h2>{this.state.memory.title}</h2>
                        <div className="MemoryShow-buttons">
                            {/* <Link className="btn" to={"/memories/"+ this.props.match.params.id +"/edit"}>Edit</Link> */}
                            <button className="btn" onClick={this.handleDelete}>Delete</button>
                        </div>
                    </div>
                    <h4>{this.state.memory.date} - {this.state.memory.location}</h4>
                    <h5>{this.state.memory.description}</h5>
                </div>
                {this.state.memory.images.map(image =>
                    <img key={image} src={image} style={{width: 250}}/>                
                )}
            </div>
        );
    }
};

export default MemoryShow;