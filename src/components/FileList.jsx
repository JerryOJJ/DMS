import { React, useState } from 'react';
import { Client, Storage } from 'appwrite';
import data from '../data.json';
import { FaSearch } from 'react-icons/fa';
import styles from '../styles/FileList.module.css';

function Filelist() {
  const [type, setType] = useState(null);
  const [size, setSize] = useState(null);
  const [name, setName] = useState(null);
  const [key, setKey] = useState(null);

  const client = new Client();
  const storage = new Storage(client);

  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6878fa3b002c3376bb13');

  //RENDERING ONE FILE AT A TIME

  const result = storage.getFileView(
    '6878faea0025c2234e78',
    '687919b1001faf76f205'
  );

  (async () => {
    const get = await storage.getFile(
      '6878faea0025c2234e78',
      '687919b1001faf76f205'
    );

    setName(get.name);
    setType(get.mimeType);
    setSize(get.sizeOriginal);
  })();

  //FAULTY MAP FUNCTION TO RENDER ALL FILES AT ONCE

  // const result = data.map((value) => {
  //   storage.getFileView('6878faea0025c2234e78', value.fileId);
  // });

  // const id = data.map((value) => {
  //   setKey(value.id);
  // });

  // (() => {
  //   data.map((value) => {
  //     const run = async () => {
  //       const get = await storage.getFile('6878faea0025c2234e78', value.fileId);

  //       setName(get.name);
  //       setType(get.mimeType);
  //       setSize(get.sizeOriginal);
  //     };
  //     run();
  //   });
  // })();
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
        <tr>
          <th>Link</th>
          <th>Type</th>
          <th>Size</th>
        </tr>
        <tr>
          <td key={key}>
            <a className={styles.ancor} href={result}>
              {name}
            </a>
          </td>
          <td>{type}</td>
          <td>{Math.round(size / 1000)}KB</td>
        </tr>
      </table>
    </div>
  );
}

export default Filelist;
//https://soundcloud.com/jacqueswebsterxx/jb2-pressure?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing
