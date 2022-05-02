import styled from 'styled-components';


export const CustomNavbar = styled.nav`

    padding: 2rem ${props => props.theme.px};
    background: ${props => props.theme.element};

    display:flex;
    align-items:center;
    justify-content:space-between;

    box-shadow: 0 .1px .4rem rgba(0,0,0,0.15);

    section{
        display:flex;
        align-items:center;
        gap:10px;
        cursor: pointer;
    }

    h4{
        font-weight:600;
    }

`