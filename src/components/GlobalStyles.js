import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: black;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  body {
  background: #070724;
  font-family: 'Antonio', 'Spartan', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#sky {
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

#shootingstars {
  margin: 0;
  padding: 0;
  width: 150vh;
  height: 100vw;
  position: fixed;
  overflow: hidden;
  transform: translatex(calc(50vw - 50%)) translatey(calc(50vh - 50%))
    rotate(120deg);
}

.wish {
  height: 2px;
  top: 300px;
  width: 100px;
  margin: 0;
  opacity: 0;
  padding: 0;
  background-color: white;
  position: absolute;
  background: linear-gradient(-45deg, white, rgba(0, 0, 255, 0));
  filter: drop-shadow(0 0 6px white);
  overflow: hidden;
}



.app-overlay {
  position: relative;
  z-index: 2; 
}

#sky,
#shootingstars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

   `

export default GlobalStyles;
