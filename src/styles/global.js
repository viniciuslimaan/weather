import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        overflow-x: hidden;
        font-family: 'Inter', sans-serif;
        // 400/500/600/700
        background: ${props => props.theme.colors.bg};
        -webkit-font-smoothing: antialiased !important;
    }

    ::selection {
        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.card};
    }

    p {
        font-weight: 400;
        font-size: .9rem;
        color: ${props => props.theme.colors.light};
    }

    h1 {
        font-weight: 600;
        font-size: 3.8rem;
        line-height: 100%;
        color: ${props => props.theme.colors.font};
    }

    h2 {
        font-weight: 700;
        font-size: 2.3rem;
        color: ${props => props.theme.colors.font};
    }

    h3 {
        font-weight: 700;
        font-size: 2rem;
        color: ${props => props.theme.colors.font};
    }

    h4 {
        font-weight: 700;
        font-size: 1.5rem;
        color: ${props => props.theme.colors.font};
    }
`

export default GlobalStyles