import React from 'react';
import {Link} from 'react-router-dom';

const MemoriesList = (props) => {

    return (
        <table>
            <tbody>
                {props.memories.map(memory =>
                    <div>
                    <tr key={memory._id}>
                        <td><Link to={'/memories/' + memory._id}>{memory.title}</Link></td>
                        <td>{memory.date}</td>
                        <td>{memory.location}</td>
                        <td>{memory.description}</td>
                    </tr>
                    <tr>
                        {memory.images.map(image => 
                            <td><img src={image} style={{width: 200}}/></td>
                        )}
                    </tr>
                    </div>
                )}
            </tbody>
        </table>
    );
};

export default MemoriesList;