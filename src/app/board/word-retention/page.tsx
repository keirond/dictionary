import WordLevelBox from '@component/WordLevelBox';
import WordTextBox from '@component/WordTextBox';
import React from 'react';

export default function WordRetentionPage(): React.ReactElement {
    const titles = [
        'Newly Learned',
        'Recognized',
        'Partially Retained',
        'Fully Retained',
        'Mastered'
    ];
    const words = ['vast', 'common', 'investigate', 'demonstrate', 'beautiful'];
    return (
        <div className="flex items-center justify-center gap-10 p-10">
            {/* Word Level Container */}
            <div className="scrollbar flex flex-row items-center justify-start gap-4 overflow-x-auto rounded p-3">
                {titles.map((title, level) => (
                    <WordLevelBox
                        key={level}
                        type={(level + 1).toString()}
                        title={title}
                        wordNo={words.length}
                    >
                        {words.map((word, index) => (
                            <WordTextBox key={index} type={(level + 1).toString()} word={word} />
                        ))}
                    </WordLevelBox>
                ))}
            </div>
        </div>
    );
}
