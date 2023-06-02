import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// UI
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';

function LanguageFetchGotErrors (languagesRes){
  let properties = Object.getOwnPropertyNames(languagesRes.languages);
  if (properties.includes("error")){
    return true;
  } else {
    return false;
  }
}

function LanguageSelector () {

  const [languageDatas, setLanguageDatas] = useState(null);
  const [languageSelected, setLanguageSelected] = useState(null);
  const [theme, setTheme] = useState("");
  const [isLoading, setLoading] = useState(false);
  const { asPath,query } = useRouter();

  // Menu Logic
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };



  const {lang} = query;

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
    setLoading(true);
    const browserTheme = getBrowserTheme();
    console.log("theme",browserTheme)
    fetch('/api/getLanguages')
      .then((res) => res.json())
      .then((data) => {
        if (languageSelected !== null ? true : false){
          if (LanguageFetchGotErrors(data)){
            // Default English
            console.log("Error, Default language is EN")
            setLanguageSelected("EN");
            setLoading(false)
          } else {
            // Data fetched first time = English
            console.log("lel");
            setLanguageDatas(data.languages);
            setLanguageSelected(data.languages[0].url_name);
            setLoading(false);
          }
        } else {
          console.log("lel");
          // Current Data
          setLanguageDatas(data.languages);
          setLanguageSelected(languageSelected);
          setLoading(false)
        }
      })
  }, []);


  return (
    <div className="languageSelector_container">
			<Button
        className='languageSelector_space'
        id="basic-button"
        aria-controls={openMenu ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? 'true' : undefined}
        onClick={handleMenuClick}
      >
        {theme !== "light" ? <Avatar alt="light_lang" src="/static/images/Lang_white.png" /> : <Avatar alt="dark_lang" src="/Lang_dark.png" />}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>
		</div>
	);
};



export default LanguageSelector