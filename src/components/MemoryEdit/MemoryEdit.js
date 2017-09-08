import React, {Component} from 'react';
import './MemoryEdit.css';
import memoriesAPI from '../../utils/memoriesAPI';
import imgurAPI from '../../utils/imgurAPI';
import {Row, Input, Col, Preloader} from 'react-materialize';

class MemoryEdit extends Component {
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

    componentDidMount() {
        imgurAPI.getCID()
        .then(cidObj => {
            var cid = cidObj.cid
            this.setState({cid})
        })
    }

    render() {
        return (
            <h2>Edit</h2>
        );
    }
};

export default MemoryEdit;
