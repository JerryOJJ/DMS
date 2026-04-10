import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/SignIn.module.css';

function SignIn() {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <div className={styles.leftcard}>
          <h1 className={styles.leftTitle}>Welcome!</h1>
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
            <button className={styles.submit}>
              <Link to="/fileuploader">Submit</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
