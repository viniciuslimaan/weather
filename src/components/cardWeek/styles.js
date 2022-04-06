import styled from 'styled-components'

export const CardBg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 175px;
    border-radius: 10px;
    padding: 25px 15px;
    background: ${props => props.theme.colors.card};
    /* box-shadow: 0px 0px 25px -3px rgba(0,0,0,0.1); */
    margin-right: 15px;

    img {
        width: 65%;
        user-select: none;
    }

    span { color: ${props => props.theme.colors.light}; }

    h4 { margin-top: 10px; }

    .minAndMax {
        margin-top: 20px;
        font-size: 1rem;
        font-weight: 600;
        color: ${props => props.theme.colors.font};
    }
`