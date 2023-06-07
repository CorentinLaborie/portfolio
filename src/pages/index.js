import Head from 'next/head'
import Image from 'next/image';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Corentin Laborie</title>
        <meta name="description" content="Corentin Laborie personnal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
      <div className={`${styles.titre}`}>
        <h1 >Corentin Laborie</h1>
        <h2>Fullstack developper</h2>
      </div>
      <div className={`${styles.home_Row}`}>
        <img
          className={`${styles.home_first}`}
          src="/coco_home.png"
          alt="Picture of the author"
        />
        <Paper
          elevation={4}
          sx={{
            backgroundColor : "#BFBFBF80",
            maxWidth : 375,
            padding : 0.8,
            borderRadius : 1
          }}
          className={`${styles.home_second}`}
        >
          <h1>Lorem Ipsum</h1>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
        </Paper>
      </div>
      <Stack direction="row" spacing={8}>
        <Image
          alt="Remy Sharp"
          src="/linkedin.png"
          width={40}
          height={40}
          onClick={(e) => {
            window.open("https://www.linkedin.com/in/laborie-corentin/", "_blank")
          }}
        />
        <Avatar src={"/github_"+props.theme+".png"} 
          onClick={(e) => {
            window.open("https://github.com/CorentinLaborie", "_blank")
          }}
          />
      </Stack>
      </main>
    </>
  )
}
