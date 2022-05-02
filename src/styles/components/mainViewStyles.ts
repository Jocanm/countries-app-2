import styled from 'styled-components';

export const IndexWrapper = styled.div`

    display: flex;
    flex-direction: column;
    gap:40px;
    padding: 0 ${props => props.theme.px};

`

export const CountriesListStyles = styled.ul`

    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

    @media (max-width: ${props => props.theme.breakPoints["3xl"]}) {
        grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    }

    gap:40px;

`

export const CountryItemStyles = styled.li`

    display:flex;
    flex-direction:column;
    justify-content:space-between;
    border-radius:5px;

    background-color: ${props => props.theme.element};
    -webkit-box-shadow: 7px 5px 24px -10px rgba(0,0,0,0.50);
    -moz-box-shadow: 7px 5px 24px -10px rgba(0,0,0,0.50);
    box-shadow: 7px 5px 24px -10px rgba(0,0,0,0.50);

    img{
        border-radius:5px 5px 0 0;
        object-fit:cover;
    }


`

export const CountryInfoStyles = styled.div`

    padding:40px 30px;
    display:flex;
    flex-direction:column;
    gap:20px;

    >div{
        display:flex;
        flex-direction:column;
        gap:12px;
    }

    p{
        font-weight:600;
    }

    span{
        font-weight:400;
    }

`