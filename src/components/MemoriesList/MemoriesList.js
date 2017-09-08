import React, {Component} from 'react';
import './MemoriesList.css';
import MemoryEntry from '../MemoryEntry/MemoryEntry';
import memoriesAPI from '../../utils/memoriesAPI';

class MemoriesList extends Component {
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
                {this.state.memories.map(memory =>
                    <MemoryEntry key={memory._id} memory={memory} />
                )}
            </div>
        );
    }
}

export default MemoriesList;