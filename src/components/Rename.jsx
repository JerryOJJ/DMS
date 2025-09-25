import { React, useState } from "react";
import styles from "../styles/Rename.module.css";

function PopupForm({ onClose, onSubmit }) {
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data); // pass new name directly
  };

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <h2 className={styles.title}>Rename</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={data}
            onChange={(e) => setData(e.target.value)}
            className={styles.input}
          />
          <div className={styles.buttons}>
            <button type="button" className={styles.closeBtn} onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className={styles.submitBtn}>
              OK
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopupForm;
