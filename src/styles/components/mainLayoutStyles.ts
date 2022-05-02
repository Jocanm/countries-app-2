import styled from "styled-components";

export const ContentWrapperStyles = styled.main`

    width:100%;
    height:100vh;

`

export const MainWrapper = styled.main`

    padding: ${props => props.theme.px} 0;
    @media (max-width: ${props => props.theme.breakPoints.sm}) {
        padding: 30px 0;
    }

`