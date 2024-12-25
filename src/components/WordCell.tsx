import { Card } from 'antd';
import React from 'react';

export default function WordCell({ word }: Readonly<{ word: string }>): React.ReactElement {
    return (
        <Card className="text-text-950 bg-accent-700 rounded-2xl border-black font-bold">
            {word}
        </Card>
    );
}
