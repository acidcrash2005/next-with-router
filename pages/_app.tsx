import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useRouter} from "next/router";
import {StaticRouter} from "react-router-dom/server";
import {BrowserRouter} from "react-router-dom";

function MyApp({ Component, pageProps, router }: AppProps) {
    const { query } = useRouter();

    console.log(pageProps,router);

    return typeof window === 'undefined' ? (
        <StaticRouter location={`/${query.page}`}>
            <Component {...pageProps} />
        </StaticRouter>
    ):<BrowserRouter>
        <Component {...pageProps} />
    </BrowserRouter>
}

export default MyApp
