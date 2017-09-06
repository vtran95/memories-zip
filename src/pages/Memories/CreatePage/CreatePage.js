import React, {Component} from 'react';
import CreateForm from '../../../components/CreateForm/CreateForm';
import './CreatePage.css';

class CreatePage extends Component {

  render() {
    return (
      <div>
        <CreateForm
          {...this.props}
        />
      </div>
    );
  }
  
};

export default CreatePage;