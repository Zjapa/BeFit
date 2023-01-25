import { createGlobalStyle } from 'styled-components';
import montserratBlack from '../assets/fonts/Montserrat-Black.ttf';
import montserratBold from '../assets/fonts/Montserrat-Bold.ttf';
import montserratRegular from '../assets/fonts/Montserrat-Regular.ttf';
import oswaldRegular from '../assets/fonts/Oswald-Regular.ttf';
import oswaldBold from '../assets/fonts/Oswald-Bold.ttf';

const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body{
        font-family: Oswald-Regular;
        /* background-color: #101D1B; */
    }

    h1{
        font-size: 2.5rem;
        letter-spacing: 2px;
    }

    h2{
        font-size: 2rem;
        letter-spacing: 2px;
    }
    h3{
        font-size: 1.5rem;
        letter-spacing: 2px;

    }   
    
    h4{
        font-size: 1rem;
        letter-spacing: 2px;
    }

   

    @font-face {
        font-family: 'Montserrat-Black' ;
        src: url(${montserratBlack}) format(truetype);
        font-weight: 900;
    }
    @font-face {
        font-family: 'Montserrat-Bold' ;
        src: url(${montserratBold}) format(truetype);
        font-weight: 700;
    }
    @font-face {
        font-family: 'Montserrat-Regular' ;
        src: url(${montserratRegular}) format(truetype);
    }
    @font-face {
        font-family: 'Oswald-Regular' ;
        src: url(${oswaldRegular}) format(truetype);
    }
    @font-face {
        font-family: 'Oswald-Bold' ;
        src: url(${oswaldBold}) format(truetype);
    }

`;

export default GlobalStyle;
