import React from 'react';
import type {DataSchema} from '../types'
import MatchList from '../MatchList'
import News from '../News'

interface Props{
    schema: DataSchema
}

const DynamicComponent: React.FC<Props> = ({schema}) => {

    if (schema.name === 'News'){
        return <News />
    }

    if (schema.name === 'MatchList'){
        return <MatchList />
    }

    return <div><h1>Dynamic Component</h1></div>
}

export default DynamicComponent;
