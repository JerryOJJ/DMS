import React, { useState } from 'react';
import { Client, ID, Storage } from 'appwrite';
import { FaUpload } from 'react-icons/fa';
import styles from '../styles/FileUploader.module.css';

function FileUploader() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('idle');
  const [uploadProgress, setUploadProgress] = useState(0);

  function handleFileChange(e) {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }

  const handleFileUpload = async () => {
    if (!file) {
      alert('Please select a file first!');
      return;
    }

    //APPWRITE
    const client = new Client()
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('6878fa3b002c3376bb13');

    const storage = new Storage(client);

    setStatus('uploading');
    setUploadProgress(0);

    try {
      const promise = await (storage.createFile(
        '6878faea0025c2234e78',
        ID.unique(),
        file
      ),
      {
        onUploadProgress: (ProgressEvent) => {
          const progress = ProgressEvent.total
            ? Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total)
            : 0;
          setUploadProgress(progress);
        },
      });
      console.log(promise);

      setStatus('success');
      setUploadProgress(100);
    } catch (error) {
      console.log(error.message);

      setStatus('failed');
      setUploadProgress(0);
    }
  };

  return (
    <div className={styles.all}>
      <div className={styles.card}>
        <h2 className={styles.title}>Upload File</h2>
        <div className={styles.inputbox}>
          <FaUpload className={styles.icon} />
          <br />
          <h3 className={styles.inputText}>Select files to upload</h3>
          {/* <p className={styles.inputParagraph}>PDF and DOCX formats.</p> */}

          <input
            className={styles.input}
            type="file"
            onChange={handleFileChange}
          />
          {file && (
            <div>
              <p className={styles.fileP}>File name: {file.name}</p>
              <p className={styles.fileP}>File Type: {file.type}</p>
              <p className={styles.fileP}>
                File Size: {`${file.size / 1000}KB`}
              </p>
            </div>
          )}

          {file && status !== 'uploading' && (
            <button className={styles.uploadButton} onClick={handleFileUpload}>
              Upload
            </button>
          )}
        </div>

        {status === 'uploading' && (
          <div style={{ marginTop: '10px' }}>
            <div style={{ width: '100%', height: '10px' }}>
              <div
                style={{
                  width: `${uploadProgress}%`,
                  height: '10px',
                  backgroundColor: 'blueviolet',
                  transition: 100,
                }}
              ></div>
            </div>
            <p>{uploadProgress}% uploaded</p>
          </div>
        )}

        {status === 'success' && (
          <p style={{ color: 'blueviolet' }}>File uploaded successfully!</p>
        )}

        {status === 'error' && (
          <p style={{ color: 'red' }}>File upload failed. Please try again.</p>
        )}
      </div>
    </div>
  );
}

export default FileUploader;
