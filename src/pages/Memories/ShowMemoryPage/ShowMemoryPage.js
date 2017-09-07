import React from 'react';
import MemoryShow from '../../../components/MemoryShow/MemoryShow';

const ShowMemoryPage = (props) => {

    return (
      <div>
        <MemoryShow
          {...props}
        />
      </div>
    );
  
};

export default ShowMemoryPage;