import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
}
button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border:3px solid #23d997;
    background: transparent;
    color:#fff;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background-color: #23d997;
        color:#fff;
    }
}
h2{
    font-weight: lighter;
    font-size: 4rem;
}
h3{
    color:#fff
}
h4{
    font-size: bold;
    color: #23d997;
}
a{
    font-size: 1.1rem;
}
span{
    font-weight: bold;
      color: #23d997;
}
p{
    padding: 3rem 0rem;
    color:#ccc;
    font-size:1.4rem;
}
`;

export default GlobalStyle;
