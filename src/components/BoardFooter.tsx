import { Footer } from 'antd/es/layout/layout';
import React from 'react';

export default function BoardFooter({
    children
}: Readonly<{ children?: React.ReactNode }>): React.ReactElement {
    return <Footer className="flex items-center justify-center bg-slate-700">{children}</Footer>;
}
