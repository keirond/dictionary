import React from 'react';

export default function WordLevelBox({
    type,
    title,
    children
}: {
    type: string;
    title: string;
    children: React.ReactNode;
}): React.ReactElement {
    return (
        <div
            className={`flex w-80 min-w-80 flex-col justify-center gap-4 rounded-[1rem] bg-lvl-${type}-box p-2`}
        >
            <div
                className={`flex h-10 items-center justify-center rounded-lg bg-lvl-${type}-textbox`}
            >
                <div className={`font-patrick text-lg font-medium text-lvl-${type}-text`}>
                    {title}
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-start gap-x-1 gap-y-2">
                {children}
            </div>
        </div>
    );
}
