import React from 'react';
import { Card } from 'antd';

export default function WordCell({ word }: { word: string }): React.ReactElement {
    return <div>{word}</div>;
}
