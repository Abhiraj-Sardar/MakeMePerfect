import React from 'react'
import App from './App'

export const Theme = () => {
    return (
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    )
}
