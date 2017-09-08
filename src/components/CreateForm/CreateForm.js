import React, {Component} from 'react';
import './CreateForm.css';
import memoriesAPI from '../../utils/memoriesAPI';
import imgurAPI from '../../utils/imgurAPI';
import {Row, Input} from 'react-materialize';

class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            date: '',
            location: '',
            description: '',
            images: [],
            imageFiles: [],
            cid: ''
        }
    }

    handleChange = (field, e) => {
        this.setState({
            [field]: e.target.value
        }, () => {console.log(this.state)});
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
        console.log(this.state);
        imgurAPI.imgUpload(this.state.imageFiles, this.state.cid)
        .then((images) => {
            console.log(images);
            var {imageFiles, cid, ...state} = this.state;
            memoriesAPI.create(Object.assign({}, state, {images}))
            .then(() => {
                this.props.history.push('/memories');
            })
        });
    }

    isFormInvalid() {
        return !(this.state.title && this.state.date);
    }

    componentDidMount() {
        imgurAPI.getCID()
        .then(cidObj => {
            var cid = cidObj.cid
            this.setState({cid})
        })
    }

    render() {
        return (
            <div className="CreateForm">
                <Row>
                    <div className="col s7 offset-s3">
                        <h2>Create Memory</h2>
                        <form className="CreateForm" onSubmit={this.handleSubmit} encType="multipart/form-data">
                            <Row>
                                <Input s={12} label="Title - required" value={this.state.title} onChange={(e) => this.handleChange('title', e)} />
                            </Row>
                            <Row>
                                <Input s={12} label="Date - required" value={this.state.date} onChange={(e) => this.handleChange('date', e)} type="date" />
                            </Row>
                            <Row>
                                <Input s={12} label="Location" value={this.state.location} onChange={(e) => this.handleChange('location', e)} />
                            </Row>
                            <Row>
                                <Input s={12} label="Description" value={this.state.description} onChange={(e) => this.handleChange('description', e)} />
                            </Row>
                            <Row>
                                {/* <input type="file" className="form-control" onChange={(e) => this.handleImageChange(e)} multiple /> */}
                                <div className="file-field input-field">
                                    <div className="btn">
                                        <span>File</span>
                                        <input type="file" onChange={(e) => this.handleImageChange(e)} multiple />
                                    </div>
                                    <div className="file-path-wrapper">
                                        <input className="file-path validate" type="text" />
                                    </div>
                                </div>
                            </Row>
                            <Row>
                                <button className="btn btn-default" disabled={this.isFormInvalid()}>Create Memory</button>&nbsp;&nbsp;
                            </Row>
                        </form>
                    </div>
                </Row>
            </div>
        );
    }
};

export default CreateForm;
