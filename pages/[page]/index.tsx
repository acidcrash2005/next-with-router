import React from 'react';
import {Route, Routes, Link} from "react-router-dom";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import Nav from "../../navigate";
import DynamicComponent from "../../components/DynamicComponent";
import type {DataSchema} from '../../types'

const Index: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
    return  (
        <div>
            <p>Text static next</p>
            <Routes>
                <Route path='/tasdasda' element={<div><Nav /><h1>/tasdasda</h1></div>} />
                <Route path='/custom_link' element={<div><Nav /><h1>/custom_link</h1></div>} />
                <Route path='/test' element={<div><Nav /><h1>/test</h1></div>} />
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
