import React, {Component} from 'react';
import {
    Switch,
    Route,
    Link
} from 'react-router-dom';
import './IndexPage.css';
import memoriesAPI from '../../../utils/memoriesAPI';
import MemoriesList from '../../../components/MemoriesList/MemoriesList';
import CreatePage from '../CreatePage/CreatePage';

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
                <Link to='/memories/new'>New</Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <Link to='/'>Back</Link>
                <Switch>
                    <Route exact path='/memories' render={() => 
                        <MemoriesList memories={this.state.memories} />
                    }/>
                    <Route exact path='/memories/new' render={() =>
                        <CreatePage
                            {...this.props}
                            memories={this.state.memories} 
                        />
                    }/>
                </Switch>
            </div>
        )
    }
}

export default IndexPage;