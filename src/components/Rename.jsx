import { React, useState } from 'react';
import styles from '../styles/Rename.module.css';
function PopupForm(onSubmit, onClose) {
  const [rename, setReName] = useState('');

  const handleInputChange = (e) => {
    setReName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ rename });
  };
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <h2 className={styles.title}>Rename</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={rename}
            onChange={handleInputChange}
            className={styles.input}
          />
          <div className={styles.buttons}>
            <button className={styles.closeBtn} onClick={onClose}>
              Cancel
            </button>
            <button className={styles.submitBtn} type="submit">
              OK
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default PopupForm;
