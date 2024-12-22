import { BoardHeader } from '@component/BoardHeader';
import { Layout } from 'antd';
import { Content, Footer } from 'antd/es/layout/layout';
import React from 'react';

export default function BoardLayout({
    children
}: Readonly<{ children: React.ReactNode }>): React.ReactElement {
    return (
        <Layout>
            <BoardHeader />
            <Content>{children}</Content>
            <Footer>footer</Footer>
        </Layout>
    );
}
