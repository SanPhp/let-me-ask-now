import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

/* alegreya-sans-100 - latin */
@font-face {
  font-family: 'Alegreya Sans';
  font-style: normal;
  font-display: swap;
  font-weight: 100;
  src: local(''),
       url('/fonts/alegreya-sans-v14-latin-100.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
}
/* alegreya-sans-regular - latin */
@font-face {
  font-family: 'Alegreya Sans';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: local(''),
       url('/fonts/alegreya-sans-v14-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
}
/* alegreya-sans-500 - latin */
@font-face {
  font-family: 'Alegreya Sans';
  font-style: normal;
  font-display: swap;
  font-weight: 500;
  src: local(''),
       url('/fonts/alegreya-sans-v14-latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
}


/* poppins-regular - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: local(''),
       url('/fonts/poppins-v15-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
}
/* poppins-700 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-display: swap;
  font-weight: 700;
  src: local(''),
       url('/fonts/poppins-v15-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
}



* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* ::-webkit-scrollbar {
        width: 0px;
    } */
}

:root {
    --bg: #E7E7E7;
    --text-color: #3f3b3b;
    --gray: #232125;
    --gray-200: #37353C;
    --gray-500: #1B1A1E;
    --white: #ffffff;
    --orange: #EBA417;

    //TAGS BUTTOM
    --blue: #00439C;
    --green: #117D11;
    --red: #FF0000;
    --yellow: #AC790F;
    --black: #000000;
}

@media (max-width: 1080px) {
    html {
        font-size: 93.75%;
    }
}
@media (max-width: 720px) {
    html {
        font-size: 87.5%;
    }
}

body, input textarea, select {
    font: 400 1rem 'Alegreya Sans', sans-serif;

}

h1, h2 ,h3, h4, h5, h6 {
    font-size: 1rem;
}

.container {
    width: 100%;
}

body {
    background-color: var(--bg);
    color: var(--white);
    -webkit-font-smoothing: antialiased;
}

button {
    cursor: pointer;
}

a {
    color: inherit;
    text-decoration: none;
}




`