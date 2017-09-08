import React, {Component} from 'react';
import './MemoryShow.css';
import memoriesAPI from '../../utils/memoriesAPI';
import imgurAPI from '../../utils/imgurAPI';
import {Link} from 'react-router-dom';
import AddFile from '../AddFile/AddFile';

class MemoryShow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            memory: {images: []},
            imageFiles: [],
            inputVisible: false
        }
    }

    toggleButton = () => {
        this.setState({inputVisible: !this.state.inputVisible})
    }

    handleImageChange = (e) => {
        console.log('files: ', e.target.files);
        var p = e.target.files;
        var imageFiles = [...this.state.imageFiles]
        if (p) {
            for (var key in p) {
                if (p.hasOwnProperty(key)) {
                    console.log(key + " -> " + p[key]);
                    imageFiles.push(p[key]);
                }
            }
        }
        console.log(imageFiles);
        this.setState({
            imageFiles
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.imageFiles.length) return;
        imgurAPI.getCID()
        .then(cidObj => {
            var cid = cidObj.cid
            return cid
        })
        .then(cid => imgurAPI.imgUpload(this.state.imageFiles, cid))
        .then((images) => {
            memoriesAPI.addImage(this.state.memory._id, images)
            .then(() => {
                this.props.history.push('/memories');
            })
        });
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
                            <button className="btn red" onClick={this.handleDelete}>Delete</button>
                        </div>
                    </div>
                    <h4>{this.state.memory.date} - {this.state.memory.location}</h4>
                    <h5>{this.state.memory.description}</h5>
                    <div className="MemoryShow-AddFile">
                        <button className="btn MemoryShow-AddBtn" onClick={this.toggleButton}>Add Image</button>
                        {
                            this.state.inputVisible
                                ? <AddFile 
                                        handleImageChange={this.handleImageChange} 
                                        handleSubmit={this.handleSubmit}
                                    />
                                : null
                        }
                    </div>
                </div>
                <div className="MemoryShow-images">
                    {this.state.memory.images.map(image =>
                        <img key={image} src={image} style={{width: 400, height: 300}} className="MemoryShow-img" />                
                    )}
                </div>
            </div>
        );
    }
};

export default MemoryShow;