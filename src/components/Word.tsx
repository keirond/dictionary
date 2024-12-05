import React from 'react';

import { Card } from 'antd';

interface WordProps {
    content: string;
}

const Word: React.FC<WordProps> = ({ content }) => {
    return (
        <Card style={{ width: 300 }}>
            <p>{content}</p>
        </Card>
    );
};

export default Word;
