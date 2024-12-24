import WordCell from '@component/WordCell';
import WordLevel from '@component/WordLevel';
import { Card, Layout } from 'antd';
import React from 'react';

export default function WordRetentionPage(): React.ReactElement {
    const categories = [
        {
            title: 'Newly Learned',
            words: ['enforce', 'obviously', 'tend', 'general affairs', 'punctuality']
        },
        { title: 'Recognized', words: ['opportunity'] },
        { title: 'Partially Retained', words: [] },
        { title: 'Fully Retained', words: [] },
        { title: 'Mastered', words: [] }
    ];
    return (
        <Layout className="flex items-center justify-center bg-gray-900">
            <div className="grid w-10/12 grid-flow-col gap-4 p-8">
                {categories.map((category) => (
                    <WordLevel key={category.title} title={category.title}>
                        <div className="space-y-2">
                            {category.words.map((word, index) => (
                                <WordCell key={index} word={word} />
                            ))}
                            <Card className="border-dashed border-gray-600 bg-gray-700 text-white">
                                + New Page
                            </Card>
                        </div>
                    </WordLevel>
                ))}
            </div>
        </Layout>
    );
}
