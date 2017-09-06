import React, {Component} from 'react';
import memoriesAPI from '../../utils/memoriesAPI';
import imgurAPI from '../../utils/imgurAPI';

class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      date: '',
      location: '',
      description: '',
      images: [],
      imageFiles: []
    };
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  }

  handleImageChange = (e) => {
      console.log('files: ', e.target.files);
      console.log('1st file: ', e.target.files[0]);
      var imageFiles = [...this.state.imageFiles, e.target.files[0]]
      console.log(imageFiles);
      this.setState({
        imageFiles
      })
      // var formData = new FormData();
      // formData.append('image', e.target.files[0]);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    imgurAPI.imgUpload(this.state.imageFiles)
    .then((images) => {
      console.log(images);
      this.setState({images}, function() {
        var {imageFiles, ...state} = this.state;
        console.log(state);
        memoriesAPI.create(state)
        .then(() => {
          this.props.history.push('/');
        })
      });
    })
  }

  isFormInvalid() {
    return !(this.state.title && this.state.date);
  }

  render() {
    return (
      <div>
        <header>Create Memory</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} encType="multipart/form-data">
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Title" value={this.state.title} onChange={(e) => this.handleChange('title', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Date" value={this.state.date} onChange={(e) => this.handleChange('date', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Location" value={this.state.location} onChange={(e) => this.handleChange('location', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Description" value={this.state.description} onChange={(e) => this.handleChange('description', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="file" className="form-control" onChange={(e) => this.handleImageChange(e)} multiple />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default" disabled={this.isFormInvalid()}>Create Memory</button>&nbsp;&nbsp;
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default CreateForm;
