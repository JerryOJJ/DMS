import { useState, useEffect } from 'react';
import { Client, Storage } from 'appwrite';
import PopupForm from './Rename';
import { FaSearch } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faFileWord } from '@fortawesome/free-solid-svg-icons';
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
      id: '',
      fileId: '',
    },
  ]);
  const [showPopup, setShowPopup] = useState(false);
  const [newName, setNewName] = useState('');

  function handleNewName(data) {
    setNewName(data);
  }

  const updateName = (fileId) => {
    storage.updateFile('6878faea0025c2234e78', fileId, newName);
    setShowPopup(false);
    // window.location.reload();

    console.log(fileId);
  };
  console.log(files);

  useEffect(() => {
    storage
      .listFiles('6878faea0025c2234e78')
      .then((data) => {
        // console.log(data);

        const files = data.files.map((datum) => ({
          name: datum.name,
          type: datum.mimeType,
          size: datum.sizeOriginal,
          id: storage.getFileView('6878faea0025c2234e78', datum.$id),
          fileId: datum.$id,
        }));

        setFiles(files);
      })
      .catch((error) => {
        console.error('An error occurred', error);
      });
  }, []);

  //TEXT-TO-SPEECH

  // const speak = () => {
  //   if ('speechSynthesis' in window) {
  //     const utterance = new SpeechSynthesisUtterance('Hello Text-to-speech');
  //     speechSynthesis.speak(utterance);
  //   } else {
  //     console.warn('Text-to-Speech not supported in this browser.');
  //   }
  // } ;

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
            <th>Name</th>
            <th>Type</th>
            <th>Size</th>
            {/* <th>Link</th>
            <th>Edit</th>*/}
            {/* <th>voice</th> */}
          </tr>
        </thead>
        <tbody>
          {files.map((file) => (
            <tr key={file.fileId}>
              <td>{file.name}</td>
              <td>{file.type}</td>
              <td>{Math.round(file.size / 1000)}KB</td>
              <td>
                <div className={styles.menuContainer}>
                  <div className={styles.menu}></div>
                </div>
              </td>
              <td>
                <a href={file.id}>
                  <button className={styles.button}>
                    <FontAwesomeIcon icon={faFileWord} />
                    View File
                  </button>
                </a>
              </td>
              <td>
                <button
                  className={styles.button}
                  onClick={() => {
                    console.log(file.fileId);
                    setShowPopup(true);
                  }}
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                  Rename
                </button>
                {showPopup && (
                  <PopupForm
                    onClose={() => setShowPopup(false)}
                    formData={handleNewName}
                    set={() => {
                      updateName(file.fileId);
                      //console.log(file.fileId);
                    }}
                  />
                )}
              </td>
              {/* <td>{speak()}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Filelist;
