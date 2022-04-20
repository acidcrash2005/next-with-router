import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import {useRouter} from "next/router";

interface Props {
}

const Test = () => {
    return <h1>Test</h1>
}

const Index: React.FC<Props> = ({}) => {
    const { query } = useRouter();

    const { pathname } = useLocation();

    // console.log({pathname, ...query});

    return  <div>
        test text
        <Routes>
            <Route path={'/'} element={null} />
            <Route path={'/tasdasda'} element={<h1>tasdasda</h1>} />
            <Route path={'/test'} element={<Test />} />
        </Routes>
    </div>;
};

export default Index;
