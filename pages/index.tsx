import React from "react";
import type { NextPage } from 'next'
import Nav from '../navigate';

import styles from '../styles/Home.module.css'


const App = () => {
    return <div className={styles.container}>
       <Nav />
    </div>
}

const Home: NextPage = () => {
    return <App />
}


export default Home
