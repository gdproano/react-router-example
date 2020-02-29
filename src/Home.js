import React from 'react';
import styles from './home.module.scss';

function Home() {
  return (<div className="container">
    <div className={styles.second}>
    <h1 className={styles.message}>Welcome to this application</h1>
    </div>
  </div>);
}

export default Home;
