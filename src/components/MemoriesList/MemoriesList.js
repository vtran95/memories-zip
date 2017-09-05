import React from 'react';

const MemoriesList = (props) => {

    return (
        <table>
            <tbody>
                {props.memories.map(memory => 
                    <tr key={memory.title}>
                        <td>{memory.title}</td>
                        <td>{memory.date}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default MemoriesList;