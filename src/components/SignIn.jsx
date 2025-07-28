import React from 'react';
import styles from '../styles/SignIn.module.css';
import {
  FaLaptop,
  FaNetworkWired,
  FaFileAlt,
  FaGlobe,
  FaShareSquare,
} from 'react-icons/fa';

function SignIn() {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <div className={styles.leftcard}>
          <h1 className={styles.leftTitle}>Welcome!</h1>
          <FaLaptop className={styles.icons} size={33} />
          <FaNetworkWired className={styles.icons} size={33} />
          <FaFileAlt className={styles.icons} size={33} />
          <FaGlobe className={styles.icons} size={33} />
          <FaShareSquare className={styles.icons} size={33} />
        </div>
        <div className={styles.rightcard}>
          <div className={styles.card}>
            <h2 className={styles.rightTitle}> Sign in</h2>
            <div className={styles.info}>
              <label className={styles.labels}>Email Address</label>
              <br />
              <input className={styles.inputs} type="email" required />
            </div>
            <div className={styles.info}>
              <label className={styles.labels}>Password</label>
              <br />
              <input className={styles.inputs} type="password" required />
            </div>
            <button className={styles.submit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
