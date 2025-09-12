import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Login.module.css';

function Login() {
  return (
    <div className={styles.all}>
      <div className={styles.card}>
        <h2 className={styles.title}>login</h2>
        <div className={styles.wrapper}>
          <div className={styles.inputdata}>
            <input className={styles.inputs} type="email" required />
            <label className={styles.labels}>Email</label>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.inputdata}>
            <input className={styles.inputs} type="password" required />
            <label className={styles.labels}>Password</label>
          </div>
        </div>
        <a className={styles.ancor} href="#">
          Forgot Password?
        </a>
        <br />
        <button className={styles.submit}>Login</button>
        <p>
          Don't have an account?{' '}
          <Link className={styles.paragraph} to="/signin">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
