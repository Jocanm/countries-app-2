import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/globals'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={{}}>
            <Component {...pageProps} />
            <GlobalStyles />
        </ThemeProvider>
    )
}

export default MyApp
