import React, { useState } from "react";
import axios from "axios";
import { FaUpload } from "react-icons/fa";
import styles from "../styles/FileUploader.module.css";

function FileUploader() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("idle");
  const [uploadProgress, setUploadProgress] = useState(0);

  //     ~Accepts all files~
  //   function handleFileChange(e) {
  //     if (e.target.files) {
  //       setFile(e.target.files[0]);
  //     }
  //   }

  //   ~Accepts only pdf & docx files~
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (
      selectedFile &&
      (selectedFile.type === "application/pdf" ||
        selectedFile.name.endsWith(".docx"))
    ) {
      setFile(selectedFile);
    } else {
      alert("Only PDF or DOCX files are allowed");
    }
  };

  async function handleFileUpload() {
    if (!file) return;

    setStatus("uploading");
    setUploadProgress(0);
    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("https://httpbin.org/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (ProgressEvent) => {
          const progress = ProgressEvent.total
            ? Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total)
            : 0;
          setUploadProgress(progress);
        },
      });

      setStatus("success");
      setUploadProgress(100);
    } catch {
      setStatus("error");
      setUploadProgress(0);
    }
  }

  return (
    <div className={styles.all}>
      <div className={styles.card}>
        <h2 className={styles.title}>Upload File</h2>
        <div className={styles.inputbox}>
          <FaUpload className={styles.icon} />
          <br />
          <h3 className={styles.inputText}>Select files to upload</h3>
          <p className={styles.inputParagraph}>PDF and DOCX formats.</p>

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

          {file && status !== "uploading" && (
            <button className={styles.uploadButton} onClick={handleFileUpload}>
              Upload
            </button>
          )}
        </div>

        {status === "uploading" && (
          <div style={{ marginTop: "10px" }}>
            <div style={{ width: "100%", height: "10px" }}>
              <div
                style={{
                  width: `${uploadProgress}%`,
                  height: "10px",
                  backgroundColor: "blueviolet",
                  transition: 100,
                }}
              ></div>
            </div>
            <p>{uploadProgress}% uploaded</p>
          </div>
        )}

        {status === "success" && (
          <p style={{ color: "blueviolet" }}>File uploaded successfully!</p>
        )}

        {status === "error" && (
          <p style={{ color: "red" }}>File upload failed. Please try again.</p>
        )}
      </div>
    </div>
  );
}

export default FileUploader;
