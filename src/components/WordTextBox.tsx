import React from 'react';

export default function WordTextBox({
    word,
    type
}: {
    word: string;
    type: string;
}): React.ReactElement {
    return (
        <div className={`flex-center relative rounded-full px-3 py-2 bg-lvl-${type}-textbox`}>
            <div className={`font-patrick leading-none text-lvl-${type}-text`}>{word}</div>
            <div
                className={`flex-center absolute right-[-3] top-[-3] rounded-full p-[3px] bg-lvl-${type}-badge`}
            >
                <div className={`font-patrick text-[10px] leading-none text-lvl-${type}-text`}>
                    {10}
                </div>
            </div>
        </div>
    );
}
