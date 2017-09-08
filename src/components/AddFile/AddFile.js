import React from 'react';
import './AddFile.css';

const AddFile = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit} encType="multipart/form-data" >
                <div className="AddFile-inputs">
                    <div className="file-field input-field AddFile-file">
                        <div className="btn">
                            <span>File</span>
                            <input type="file" onChange={(e) => props.handleImageChange(e)} multiple />
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text" />
                        </div>
                    </div>
                    <button className="btn AddFile-save">Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddFile;