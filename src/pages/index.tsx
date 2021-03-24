import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

interface Props { }

const Home: React.FC<Props> = Props => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <div className={styles.svg}></div>
          Welcome to <a>Next.js!</a>
        </h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}

export default Home
