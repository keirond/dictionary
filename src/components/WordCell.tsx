import { Card } from 'antd';
import React from 'react';

export default function WordCell({ word }: Readonly<{ word: string }>): React.ReactElement {
    return <Card className="rounded-2xl bg-gray-700 font-bold text-white">{word}</Card>;
}
