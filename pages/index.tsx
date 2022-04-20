import React, {EventHandler, ForwardedRef, useRef} from "react";
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import {Link, Routes, Route, BrowserRouter, useNavigate} from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server'
import Head from 'next/head'
import Image from 'next/image'
import {createBrowserHistory} from 'history'

import styles from '../styles/Home.module.css'
import {GetServerSidePropsContext} from "next";


// Need to navigate from next page to react-router page
const SmartLink = React.forwardRef(function Link({ href, children }:any, ref) {
    const navigate = useNavigate();
    const {push} = useRouter();

    const handleClick = () => {
        push(href).then(() => {
            navigate(href, {replace:true});
        });
    }

    return <a style={{cursor:'pointer'}} onClick={handleClick} ref={ref as ForwardedRef<HTMLAnchorElement>}>
        {children}
    </a>
})

const App = () => {
    return <div className={styles.container}>
        <ul>
            <li>
                <NextLink href={'/custom_link'} passHref={true}>
                    <SmartLink>Custom LInk to custom_link</SmartLink>
                </NextLink>
            </li>
            <li>
                <NextLink href={'/tasdasda'} passHref={true}>
                    <SmartLink>Custom LInk to tasdasda</SmartLink>
                </NextLink>
            </li>
            <li>
                <NextLink href={'/test'} passHref={true}>
                    <SmartLink>Custom LInk to test</SmartLink>
                </NextLink>
            </li>
            <li>
                <NextLink href={'/'}>Home next link</NextLink>
            </li>
        </ul>
    </div>
}

const Home: NextPage = () => {
    return <App />
}


export default Home
