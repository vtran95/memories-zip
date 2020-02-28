import React, {Component} from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import './IndexPage.css';
import memoriesAPI from '../../../utils/memoriesAPI';
import MemoriesList from '../../../components/MemoriesList/MemoriesList';
import CreatePage from '../CreatePage/CreatePage';
import ShowMemoryPage from '../ShowMemoryPage/ShowMemoryPage';
import IndexHeader from '../../../components/IndexHeader/IndexHeader';

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
                <Switch>
                    <Route exact path='/memories' render={() => 
                        <div>
                            <IndexHeader />
                            <MemoriesList memories={this.state.memories} />
                        </div>
                    }/>
                    <Route exact path='/memories/new' render={(props) =>
                        <CreatePage
                            {...this.props}
                            memories={this.state.memories}
                        />
                    }/>
                    <Route path='/memories/:id' render={(props) => {
                        var memory = this.state.memories.find((mem) => {
                            return mem._id === props.match.params.id
                        });
                        return(
                            <ShowMemoryPage
                                {...this.props}
                                memory={memory}
                            />
                        )
                    }}/>
                </Switch>
            </div>
        )
    }
}

export default IndexPage;