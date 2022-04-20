import React from "react";
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { Link, Routes, Route, BrowserRouter, useLocation } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server'
import Head from 'next/head'
import Image from 'next/image'
import {createBrowserHistory} from 'history'

import styles from '../styles/Home.module.css'



const SmartLink:React.FC<{to:string,children:string}> = ({to, children}) => {
    const { replace } = useRouter();
    const { pathname } = useLocation();

    const clickHandler = () => {
        replace(pathname);
    }

    return <Link to={to} >{children}</Link>
}

const App = () => {
    const { query } = useRouter();
    const { pathname:router } = useLocation();

    return <div className={styles.container}>

        {/*<Routes>*/}
        {/*    <Route path={'/'} element={null} />*/}
        {/*    <Route path={'/test'} element={<Test />} />*/}
        {/*</Routes>*/}

        <NextLink href={'/custom_link'}>Next link</NextLink>
        {' '}|{' '}
        <NextLink href={'/'}>Home next link</NextLink>
    </div>
}

const Static = () => {
    const { pathname } = useRouter();

    return <StaticRouter location={pathname}>
        <App />
    </StaticRouter>
}

const Home: NextPage = () => {
    return <App />
}

export default Home
