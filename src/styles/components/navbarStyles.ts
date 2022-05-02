import styled from 'styled-components';
import { FlexBetween } from '../globals';


export const CustomNavbar = styled.nav`

    padding: 2rem ${props => props.theme.px};
    background: ${props => props.theme.element};
    box-shadow: 0 .1px .4rem rgba(0,0,0,0.15);

    ${FlexBetween}

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