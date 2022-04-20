import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {StaticRouter} from "react-router-dom/server";
import {BrowserRouter} from "react-router-dom";

function MyApp({ Component, pageProps }: AppProps) {
    return typeof window === 'undefined' ? (
        <StaticRouter location={`/${pageProps.query?.page}`}>
            <Component {...pageProps} />
        </StaticRouter>
    ):<BrowserRouter>
        <Component {...pageProps} />
    </BrowserRouter>
}

export default MyApp
