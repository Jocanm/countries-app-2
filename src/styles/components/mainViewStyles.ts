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

    @media (max-width: ${props => props.theme.breakPoints.md}) {
        grid-template-columns: 1fr;
    }

    gap:40px;

`

export const CountryItemStyles = styled.li`

    /* display:flex; */
    flex-direction:column;
    justify-content:space-between;
    border-radius:5px;

    background-color: ${props => props.theme.element};
    -webkit-box-shadow: 7px 5px 10px -10px rgba(0,0,0,0.50);
    -moz-box-shadow: 7px 5px 10px -10px rgba(0,0,0,0.50);
    box-shadow: 7px 5px 10px -10px rgba(0,0,0,0.50);
    transition: transform 0.3s ease;

    img{
        border-radius:5px 5px 0 0;
        object-fit:cover;
    }

    h2{
        cursor: pointer;
        display:inline;
        background-image:
            linear-gradient(
                transparent 0%,
                transparent 90%,
                #fff 90%,
                #fff 100%
            );
        background-repeat: no-repeat;
        background-size: 0% 100%;
        background-position-x: right;

        transition: background-size 500ms;

        :hover{
            background-size: 100% 100%;
            background-position-x: left;
        }
    }

    :hover{
        transform: translateY(-5px);
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