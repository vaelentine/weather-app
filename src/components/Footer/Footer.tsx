import React from 'react';
import './Footer.css'

const GITHUB_LINK = "https://github.com/vaelentine/weather-app"  
const LINKED_IN_LINK = "https://www.linkedin.com/in/magdalene-geise-17555b7/"

function Footer() {
  return (
    <div className="footerContainer">
      <footer className="Footer">
        <span><a href={LINKED_IN_LINK}>Maggie Geise</a>, 2021.  
        <a href={GITHUB_LINK}> Code on Github</a></span>
      </footer>
    </div>
  );
}

export default Footer;
