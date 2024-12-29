import { Header } from 'antd/es/layout/layout';
import React from 'react';

export default function BoardHeader({
    children
}: Readonly<{ children?: React.ReactNode }>): React.ReactElement {
    return (
        <Header className="flex h-16 items-center justify-center bg-slate-700">{children}</Header>
    );
}
