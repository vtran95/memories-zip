import React, {Component} from 'react';
import memoriesAPI from '../../utils/memoriesAPI';

class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      date: '',
      location: '',
      description: '',
      images: ''
    };
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  }

  handleImageChange = (e) => {
      console.log(e.target.value);
      var formData = new FormData();
      formData.append('image', e.target.files[0]);
      fetch('https://api.imgur.com/3/image', {
          method: 'POST',
          body: formData,
          headers: new Headers({
              'Authorization': 'Client-ID fa87f6b4881ff83'
          })
      }).then(res => res.json())
      .then(data => console.log(data))
      .catch((err) => console.log(err))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    memoriesAPI.create(this.state)
      .then(() => {
        this.props.history.push('/');
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
              <input type="file" className="form-control" placeholder="Image" onChange={(e) => this.handleImageChange(e)} />
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
