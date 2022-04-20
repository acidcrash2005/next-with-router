import React, {ForwardedRef} from 'react';
import NextLink from "next/link";
import {useNavigate} from "react-router-dom";
import {useRouter} from "next/router";

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

const Nav: React.FC = () => {
    return (
        <ul>
            <li>
                <NextLink href={'/custom_link'}>Native Link</NextLink>
            </li>
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
    );
};

export default Nav;
