import React from 'react';

export default function WordTextBox({
    word,
    type
}: {
    word: string;
    type: string;
}): React.ReactElement {
    return (
        <div className={`flex-center rounded-full px-2 py-1 bg-lvl-${type}-textbox`}>
            <div className={`font-patrick text-sm text-lvl-${type}]-text`}>{word}</div>
        </div>
    );
}
