import React, { useState } from 'react';
import ApiService from './apiservice';

function Upload() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);

  const uploadFile = async () => {
    try {
      const response = await ApiService.uploadFile(file);
      setUploadStatus(`Upload successful.`);
    } catch (error) {
      setUploadStatus('Upload failed. Please try again.');
      console.error(error);
    }
  };

  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginBottom: '20px', marginTop: '10px' }}>
      <h2>Upload File</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} style={{ marginRight: '10px' }} />
        <button onClick={uploadFile} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Upload
        </button>
      </div>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
}

export default Upload;