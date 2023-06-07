import '@/styles/globals.css'
import "@/styles/transition.css"

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// UI
import {Dropdown, Divider} from 'antd';
import Avatar from '@mui/material/Avatar';
// Transition
import Transition from '../components/Transition/Transition';
// Spotify
export default function App({ Component, pageProps }) {
  // Themes and Lang
  const [languageSelected, setLanguageSelected] = useState(null);
  const [theme, setTheme] = useState("");
  const [boldPage, setBoldPage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const {asPath} = useRouter();


  function getBrowserTheme(){
    let response;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      response = "dark"
      setTheme("dark");
    } else {
      response = "light"
      setTheme("light");
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      setTheme(event.matches ? "dark" : "light");
    });
    return response
  }

  useEffect(() => {
    setBoldPage(asPath)
    setLoading(true);
    getBrowserTheme();
    if (languageSelected === null){
      setLanguageSelected("EN");
    }
  });

  return (    
  <>
    {/* LEFT MENU */}
    <div className="Navbar_container">
      <Dropdown
        menu={{
          items : [
            {
              key: '1',
              label: (
                <Link href="/">
                  <div className={boldPage === "/" ? "Navbar_Link bold" : "Navbar_Link"}>Home</div>
                </Link>
              ),
            },
            {
              key: '2',
              label: (
                <Link href="/about">
                  <div className={boldPage === "/about" ? "Navbar_Link bold" : "Navbar_Link"}>About</div>
                </Link>
              ),
            },
            {
              key: '3',
              label: (
                <Link href="/projects">
                  <div className={boldPage === "/projects" ? "Navbar_Link bold" : "Navbar_Link"}>Projects</div>
                </Link>
              ),
            },
            ,
            {
              key: '4',
              label: (
                <Link href="/links">
                  <div className={boldPage === "/links" ? "Navbar_Link bold" : "Navbar_Link"}>Links</div>
                </Link>
              ),
            },
            
          ]
        }}
        placement="bottom"
        dropdownRender={(menu) => (
          <div className='Navbar_MenuContainer'>
            {theme === "light" ? <Divider style={{backgroundColor : "#000000", margin : "auto", marginTop : "2px"}} /> : <Divider style={{backgroundColor : "#ffffff", margin : "auto", marginTop : "2px"}} /> }
            {menu}
          </div>
        )}
      >
        <Avatar alt="Menu" src={'compass_'+theme+".png"} />
      </Dropdown>
		</div>
    {/* RIGHT MENU */}
    <div className="languageSelector_container">
      <Dropdown
        menu={{
          items : [
            {
              key: '1',
              label: (
                <Avatar alt={"English flag"} src={"EN_flag.png"} onClick={() => {
                  setLanguageSelected("EN")
                }} />
              ),
            },
            {
              key: '2',
              label: (
                <Avatar alt={"French flag"} src={"FR_flag.png"} onClick={() => {
                  setLanguageSelected("FR")
                }} />
              ),
            }
          ],
        }}
        placement="bottom"
        dropdownRender={(menu) => (
          <div className='languageSelector_MenuContainer'>
            {theme === "light" ? <Divider style={{backgroundColor : "#000000", margin : "auto", marginTop : "2px"}} /> : <Divider style={{backgroundColor : "#ffffff", margin : "auto", marginTop : "2px"}} /> }
            {menu}
          </div>
        )}
      >
        <Avatar alt="Remy Sharp" src={languageSelected+"_flag.png"} />
      </Dropdown>
		</div>
    <Transition {...pageProps}>
      <Component {...pageProps} lang={languageSelected} theme={theme}/>
    </Transition>
    </>
  )
}
