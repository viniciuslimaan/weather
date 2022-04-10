import styled from 'styled-components'

export const Header = styled.div`
    width: 100%;
    height: 300px;
    background: ${props => props.theme.colors.primary};
`

export const Container = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: -200px auto;

    @media (max-width: 767px) { width: 90%; }
    @media (min-width: 768px) and (max-width: 1024px) { width: 85%; }
    @media (min-width: 1025px) { width: 65%; }
`

export const Search = styled.div`
    max-width: 100%;
    margin-bottom: 25px;
    border-radius: 25px;
    box-shadow: 0px 0px 25px -5px rgba(0,0,0,.2);

    input, button {
        font-size: 1.2rem;
        padding: 15px 30px;
        border: none;
        color: ${props => props.theme.colors.font};
    }

    input {
        width: calc(100% - 150px);
        border-radius: 25px 0 0 25px;
        background: ${props => props.theme.colors.card};
    }

    button {
        width: 150px;
        cursor: pointer;
        border-radius: 0 25px 25px 0;

        :hover {
            transition: .5s ease;
            filter: brightness(.9);
        }
    }
`

export const CardToday = styled.div`
    position: relative;
    width: 100%;
    padding: 40px 50px;
    border-radius: 35px;
    margin-bottom: 3rem;
    background: ${props => props.theme.colors.card};
    box-shadow: 0px 0px 25px -5px rgba(0,0,0,0.1);
    overflow: hidden;

    img {
        position: absolute;
        width: 40%;
        right: -2%;
        top: -20%;
        user-select: none;

        @media (max-width: 767px) {
            position: relative;
            margin: 20px 0 -20px 0;
            width: 100%;
        }
        @media (min-width: 768px) and (max-width: 1024px) {
            right: -3%;
            top: -15%;
        }
    }

    .mid { margin: 2.3rem 0 8px 0; }

    .bottom {
        display: flex;

        p { padding-bottom: 3px; }
        div { margin: 8px 25px -10px 0; }
    }
`

export const Cards = styled.div`
    .teste { padding: 15px 0; }
`

export const Footer = styled.div`
    text-align: center;
    padding: 7rem 0 3rem 0;

    p {
        font-size: 1rem;
        color: ${props => props.theme.colors.font};
    }

    a {
        color: ${props => props.theme.colors.primary};
        font-weight: 500;
        text-decoration: none;
    }
`