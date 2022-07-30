import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Sora', sans-serif;
    }

    body{
        font-size: 16px;
        background: ${({ theme }) => theme.palette.secondary.lighter};
        color:  ${({ theme }) => theme.palette.secondary.dark};
    }

    button{
        cursor: pointer;
    }


`;
