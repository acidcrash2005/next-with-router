import React from 'react';
import {Route, Routes, Link} from "react-router-dom";
import NextLink from "next/link";
import {GetServerSidePropsContext} from "next";

const Index: React.FC = () => {
    return  (
        <div>
            Text static next
            <Routes>
                <Route path='/tasdasda' element={<h1>/tasdasda</h1>} />
                <Route path='/custom_link' element={<h1>/custom_link</h1>} />
                <Route path='/test' element={<h1>/test</h1>} />
                <Route path="*" element={<DynamicComponent />} />
            </Routes>

            <div>
                <Link to='/dynamic'>To DynamicComponent</Link>
            </div>

            <div><b>------</b></div>
            <NextLink href={'/'}>Home next link</NextLink>
        </div>
    );
};

const DynamicComponent: React.FC = () => {
    return <div><h1>DynamicComponent</h1></div>
}

// Need for pass to server props query from location
export const  getServerSideProps = async(context: GetServerSidePropsContext) => {
    return {
        props: {
            query: context.query
        },
    }
}

export default Index;
