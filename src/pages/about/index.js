import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import axios from 'axios';
const inter = Inter({ subsets: ['latin'] })

function getLanguagesClick () {
      axios.post('/api/getLanguages')
      .then((response) => {
        console.log(response)
  })
  .catch((e) => { console.log(e)}
  )}

export default function About() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>PAGE 2 EH OUAIS</h1>
        <button onClick={e => getLanguagesClick()} >Get Languages</button>
        <Link href="/">go to page 1</Link>
      </main>
    </>
  )
}
