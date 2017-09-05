import React, {Component} from 'react';
import './IndexPage.css';
import memoriesAPI from '../../../utils/memoriesAPI';
import MemoriesList from '../../../components/MemoriesList/MemoriesList';

class IndexPage extends Component {
    constructor() {
        super();
        this.state = {
            memories: []
        }
    }

    componentDidMount() {
        memoriesAPI.index().then(memories => 
            this.setState({memories})
        );
    }

    render() {
        return (
            <div>
                <h2>Memories</h2>
                <a href='/'>Back</a>
                <MemoriesList memories={this.state.memories} />
            </div>
        )
    }
}

export default IndexPage;