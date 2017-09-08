import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import MemoryShow from '../../../components/MemoryShow/MemoryShow';
import MemoryEdit from '../../../components/MemoryEdit/MemoryEdit';

const ShowMemoryPage = (props) => {
    return (
        <div>
            <Switch>
                <Route exact path="/memories/:id" render={(props) =>
                    <MemoryShow
                        {...props}
                    />
                }/>
                <Route exact path="/memories/:id/edit" render={(props) => 
                    <MemoryEdit
                        {...props}
                    />
                }/>
            </Switch>
        </div>
    );
  
};

export default ShowMemoryPage;