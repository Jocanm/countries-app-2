import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { DarkMode, FilterProvider } from '../context'
import { useGetLocalTheme } from '../hooks'
import { GlobalStyles } from '../styles/globals'
import { darkTheme, globalTheme, lightTheme } from '../styles/themes'

function MyApp({ Component, pageProps }: AppProps) {

    const { theme, toggleTheme } = useGetLocalTheme()

    return (
        <FilterProvider>
            <DarkMode.Provider
                value={{ theme, toggleTheme }}
            >
                <ThemeProvider
                    theme={
                        theme === "dark"
                            ? { ...darkTheme, ...globalTheme }
                            : { ...lightTheme, ...globalTheme }
                    }
                >
                    <Component {...pageProps} />
                    <GlobalStyles />
                </ThemeProvider>
            </DarkMode.Provider>
        </FilterProvider>
    )
}

export default MyApp
