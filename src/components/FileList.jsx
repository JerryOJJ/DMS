import { useState, useEffect } from 'react';
import { Client, Storage } from 'appwrite';
import { FaSearch } from 'react-icons/fa';
import styles from '../styles/FileList.module.css';

const client = new Client();
const storage = new Storage(client);
client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6878fa3b002c3376bb13');

function Filelist() {
  const [files, setFiles] = useState([
    {
      name: '',
      type: '',
      size: '',
    },
  ]);

  useEffect(() => {
    storage
      .listFiles('6878faea0025c2234e78')
      .then((data) => {
        const files = data.files.map((datum) => ({
          name: datum.name,
          type: datum.mimeType,
          size: datum.sizeOriginal,
        }));

        setFiles(files);
      })
      .catch((error) => {
        console.error('An error occurred', error);
      });
  }, []);

  return (
    <div className={styles.all}>
      <div className={styles.searchWrapper}>
        <div className={styles.searchContainer}>
          <FaSearch className={styles.icon} />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
      </div>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>File List</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>Link</th>
            <th>Type</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file) => (
            <tr key={file.name}>
              <td>{file.name}</td>
              <td>{file.type}</td>
              <td>{Math.round(file.size / 1000)}KB</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Filelist;
