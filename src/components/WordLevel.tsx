import React from 'react';

export default function WordLevel({
    title,
    children
}: Readonly<{ title: string; children: React.ReactNode }>): React.ReactElement {
    return (
        <div className="rounded bg-gray-800 p-4">
            <h3 className="mb-4 text-lg font-semibold">{title}</h3>
            {children}
        </div>
    );
}
