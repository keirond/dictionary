import React from 'react';

function WordLevelNode(): React.ReactElement {
    return (
        <div className="flex w-[300px] min-w-[300px] flex-col justify-center gap-7 rounded-[1rem] border border-black p-2">
            {/* Word Level Title */}
            <div className="flex h-[40px] items-center justify-center rounded-lg border border-black">
                <div className="font-patrick text-lg font-medium">Newly Learned</div>
            </div>
            {/* Word Container */}
            <div className="flex flex-wrap items-center justify-start gap-x-1 gap-y-2">
                {/* Words */}
                <div className="rounded-full border border-black bg-white px-[10px] py-[4px]">
                    <div className="font-patrick text-[12px]">common</div>
                </div>
                <div className="rounded-full border border-black bg-white px-[10px] py-[4px]">
                    <div className="font-patrick text-[12px]">investigate</div>
                </div>
                <div className="rounded-full border border-black bg-white px-[10px] py-[4px]">
                    <div className="font-patrick text-[12px]">testing</div>
                </div>
                <div className="rounded-full border border-black bg-white px-[10px] py-[4px]">
                    <div className="font-patrick text-[12px]">common</div>
                </div>
                <div className="rounded-full border border-black bg-white px-[10px] py-[4px]">
                    <div className="font-patrick text-[12px]">demonstrate</div>
                </div>
            </div>
        </div>
    );
}

export default function WordRetentionPage(): React.ReactElement {
    return (
        <div className="flex items-center justify-center gap-10 p-10">
            {/* Word Level Container */}
            <div className="custom-scrollbar flex flex-row items-center justify-center gap-4 overflow-x-auto rounded border border-gray-400 p-3">
                <WordLevelNode />
                <WordLevelNode />
                <WordLevelNode />
                <WordLevelNode />
                <WordLevelNode />
            </div>
        </div>
    );
}
