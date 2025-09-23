import { React, useState } from 'react';
import styles from '../styles/Rename.module.css';
function PopupForm({ formData, onClose, set }) {
  const [data, setData] = useState('');

  const handleInputChange = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = (e) => {
    formData(data);
  };
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <h2 className={styles.title}>Rename</h2>
        <form onSubmit={set}>
          <input
            type="text"
            placeholder="Enter Name"
            value={data}
            onChange={handleInputChange}
            className={styles.input}
          />
          <div className={styles.buttons}>
            <button className={styles.closeBtn} onClick={onClose}>
              Cancel
            </button>
            <button
              type="submit"
              className={styles.submitBtn}
              onClick={handleSubmit}
            >
              OK
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default PopupForm;
