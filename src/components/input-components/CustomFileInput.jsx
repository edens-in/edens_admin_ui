import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import "./Styles.css"

import { TiDeleteOutline } from "react-icons/ti";





const CustomFileInput = ({ files, setFiles }) => {


    const onDrop = useCallback((accepted) => {
        setFiles((prev) => [...prev, ...accepted]);

        console.log(files);
    }, [])

    const removeFile = (fileName) => {
        setFiles((prev) => prev.filter((file) => file.name !== fileName));
    }

    const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, acceptedFiles, fileRejections } = useDropzone({
        onDrop,
        multiple: true,
        accept: { 'image/*': [] },
        maxFiles: 10
    })


    return (
        <div className="dropzone-container">
            <div className='dropzone-wrapper dropzone-container-items'>
                <div {...getRootProps()} className="dropzone">
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <p>Drop the files here ...</p>
                    ) : (
                        <p>Drag & drop files here, or click to select files</p>
                    )}
                </div>
            </div>

            <div className='droplist-wrapper dropzone-container-items'>
                {files.length > 0 ?
                    (
                        <ul className="drop-zone-file-list">
                            {files.map((file) => (
                                <li key={file.name} className="file-item">
                                    <button onClick={() => removeFile(file.name)}><TiDeleteOutline style={{fontSize: '20px'}}/></button>
                                    <div className='file-item-img'>
                                        <img src={URL.createObjectURL(file)} alt='files' draggable="false" />
                                        {/* {file.name} */}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) :
                    (
                        <div className='no-file'>No Files Selected</div>
                    )}
            </div>

        </div>
    );
}

export default CustomFileInput