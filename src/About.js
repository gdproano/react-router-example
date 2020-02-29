import React from 'react';
import styles from './home.module.scss';

function Home() {
  return (<div className="container">
    <div className={styles.second}>
    <h1 className={styles.message}>This is an example project</h1>
    </div>
  </div>);
}

export default Home;
