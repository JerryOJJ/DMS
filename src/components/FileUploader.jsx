import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Client, ID, Storage } from "appwrite";
import { FaUpload } from "react-icons/fa";
import styles from "../styles/FileUploader.module.css";

function FileUploader() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("idle");
  const [uploadProgress, setUploadProgress] = useState(0);

  function handleFileChange(e) {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }

  const handleFileUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    //APPWRITE
    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("6878fa3b002c3376bb13");

    const storage = new Storage(client);

    setStatus("uploading");
    setUploadProgress(0);

    try {
      const promise = await (storage.createFile(
        "6878faea0025c2234e78",
        ID.unique(),
        file,
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

      setStatus("success");
      setUploadProgress(100);
    } catch (error) {
      console.log(error.message);

      setStatus("failed");
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
          {/* <p PDF and DOCX formats.</p> */}

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
          <div style={{ marginTop: "20px", padding: "0 10px", width: "100%" }}>
            <div
              style={{
                width: "100%",
                height: "8px",
                backgroundColor: "#e0e0e0",
                borderRadius: "4px",
                overflow: "hidden",
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  width: `${uploadProgress}%`,
                  height: "100%",
                  backgroundColor: "blueviolet",
                  transition: "width 0.3s ease",
                }}
              ></div>
            </div>
            <p
              style={{
                marginTop: "8px",
                marginBottom: "0",
                fontSize: "clamp(12px, 3vw, 14px)",
                color: "#666",
                textAlign: "center",
              }}
            >
              {uploadProgress}% uploaded
            </p>
          </div>
        )}

        {status === "success" && (
          <p
            style={{
              color: "blueviolet",
              fontSize: "clamp(14px, 3vw, 16px)",
              marginTop: "20px",
              fontWeight: "500",
            }}
          >
            File uploaded successfully!
          </p>
        )}

        <p>
          <Link className={styles.inputParagraph} to="/filelist">
            View Files--
          </Link>
        </p>

        {status === "error" && (
          <p
            style={{
              color: "red",
              fontSize: "clamp(14px, 3vw, 16px)",
              marginTop: "20px",
              fontWeight: "500",
            }}
          >
            File upload failed. Please try again.
          </p>
        )}
      </div>
    </div>
  );
}

export default FileUploader;
