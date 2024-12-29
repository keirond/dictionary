import React from 'react';

function WordNode({ word, typeInd }: { word: string; typeInd: number }): React.ReactElement {
    return (
        <div className={`flex-center rounded-full px-2 py-1 bg-lvl-${typeInd.toString()}-textbox`}>
            <div className={`font-patrick text-sm text-lvl-${typeInd.toString()}]-text`}>
                {word}
            </div>
        </div>
    );
}

function WordLevelNode({ typeInd }: { typeInd: number }): React.ReactElement {
    return (
        <div
            className={`flex w-80 min-w-80 flex-col justify-center gap-4 rounded-[1rem] bg-lvl-${typeInd.toString()}-box p-2`}
        >
            {/* Word Level Title */}
            <div
                className={`flex h-10 items-center justify-center rounded-lg bg-lvl-${typeInd.toString()}-textbox`}
            >
                <div
                    className={`font-patrick text-lg font-medium text-lvl-${typeInd.toString()}]-text`}
                >
                    Newly Learned
                </div>
            </div>
            {/* Word Container */}
            <div className="flex flex-wrap items-center justify-start gap-x-1 gap-y-2">
                {/* Words */}
                <WordNode word="vast" typeInd={typeInd} />
                <WordNode word="common" typeInd={typeInd} />
                <WordNode word="investigate" typeInd={typeInd} />
                <WordNode word="base" typeInd={typeInd} />
                <WordNode word="demonstrate" typeInd={typeInd} />
                <WordNode word="beautiful" typeInd={typeInd} />
            </div>
        </div>
    );
}

export default function WordRetentionPage(): React.ReactElement {
    return (
        <div className="flex items-center justify-center gap-10 p-10">
            {/* Word Level Container */}
            <div className="scrollbar flex flex-row items-center justify-start gap-4 overflow-x-auto rounded p-3">
                {Array.from({ length: 5 }, (_, i) => (
                    <WordLevelNode key={i} typeInd={i + 1} />
                ))}
            </div>
        </div>
    );
}
