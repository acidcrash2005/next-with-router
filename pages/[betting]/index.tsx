import React from 'react';
import {Route, Routes, Link, useLocation} from "react-router-dom";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {useRouter} from "next/router";
import DynamicComponent from "../../components/DynamicComponent";
import type {DataSchema} from '../../types'

const Index: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
    const {pathname: reactRouterPath} = useLocation();
    const {query} = useRouter();

    console.log({reactRouterPath, ...query});

    return  (
        <div>
            <p>Text static next</p>

            <ul>
                <li>
                    <Link to={'/tasdasda'}>tasdasda</Link>
                </li>

                <li><Link to={'/custom_link'}>custom_link</Link></li>
                <li><Link to={'/test'}>test</Link></li>

            </ul>

            <Routes>
                <Route path='/tasdasda' element={<div><h1>/tasdasda</h1></div>} />
                <Route path='/custom_link' element={<div><h1>/custom_link</h1></div>} />
                <Route path='/test' element={<div><h1>/test</h1></div>} />
                <Route path="*" element={<DynamicComponent schema={props.schema} />} />
            </Routes>

            <div>
                <Link to='/dynamic'>To DynamicComponent</Link>
            </div>
        </div>
    );
};

const getSchemaFromBackend = () => new Promise<DataSchema>((resolve) => {
    setTimeout(() => {
        resolve({
            name: 'MatchList',
            data: {
                name: 'Gena',
                age: 18,
            }
        })
    })
})

export const getServerSideProps: GetServerSideProps<{schema:DataSchema}> = async (context) => {
    const schema = await getSchemaFromBackend();

    return {
        props: {
            query: context.query, // Need for pass to server props query from location
            schema
        },
    }
}

export default Index;
