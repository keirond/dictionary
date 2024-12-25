import React from 'react';

export default function WordLevel({
    title,
    children
}: Readonly<{ title: string; children: React.ReactNode }>): React.ReactElement {
    return (
        <div className="bg-primary-950 gap-8 rounded-2xl p-4">
            <h3 className="mb-4 text-lg font-semibold">{title}</h3>
            {children}
        </div>
    );
}
