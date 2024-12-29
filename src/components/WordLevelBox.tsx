import React from 'react';

export default function WordLevelBox({
    type,
    title,
    wordNo,
    children
}: {
    type: string;
    title: string;
    wordNo: number;
    children: React.ReactNode;
}): React.ReactElement {
    return (
        <div
            className={`flex w-80 min-w-80 flex-col justify-center gap-5 rounded-2xl bg-lvl-${type}-box p-3`}
        >
            <div className={`flex-center relative rounded-lg bg-lvl-${type}-textbox p-3`}>
                <div
                    className={`font-patrick text-xl font-medium leading-none text-lvl-${type}-text`}
                >
                    {title}
                </div>
                <div
                    className={`flex-center absolute right-1 top-1 h-6 w-6 rounded-md bg-lvl-${type}-badge`}
                >
                    <div className={`font-patrick leading-none text-lvl-${type}-text`}>
                        {wordNo}
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-x-1 gap-y-2">{children}</div>
        </div>
    );
}
