import { Spin } from 'antd';
import React from 'react';

export default function App(): React.ReactElement {
    return (
        <div className="flex h-screen items-center justify-center">
            <Spin size="large" />
        </div>
    );
}
