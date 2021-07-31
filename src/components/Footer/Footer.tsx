import React from 'react';

const GITHUB_LINK = "https://github.com/vaelentine/weather-app"  
const LINKED_IN_LINK = "https://www.linkedin.com/in/magdalene-geise-17555b7/"

function Footer() {
  return (
    <footer className="Footer">
      <span>Created by 
        <a href={LINKED_IN_LINK}>Maggie Geise</a>
        under an MIT open source licence.
        <a href={GITHUB_LINK}>code on Github</a>
      </span>
    </footer>
  );
}

export default Footer;
