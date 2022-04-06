import React from "react"
import ReactDOM from "react-dom"
import Home from "./view/Home"

import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'
import theme from './styles/themes/theme'


ReactDOM.render(
	<React.StrictMode>
         <ThemeProvider theme={theme}>
            <GlobalStyles />
		    <Home />
        </ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
)