import type { AppProps } from 'next/app'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { DarkMode } from '../context'
import { getLocalTheme } from '../helpers'
import { useGetLocalTheme } from '../hooks'
import { GlobalStyles } from '../styles/globals'
import { darkTheme, lightTheme } from '../styles/themes'

function MyApp({ Component, pageProps }: AppProps) {

    const { isDarkMode, toggleDarkMode } = useGetLocalTheme()

    return (
        <DarkMode.Provider
            value={{ isDarkMode, toggleDarkMode }}
        >
            <ThemeProvider
                theme={isDarkMode ? darkTheme : lightTheme}
            >
                <Component {...pageProps} />
                <GlobalStyles />
            </ThemeProvider>
        </DarkMode.Provider>
    )
}

export default MyApp
