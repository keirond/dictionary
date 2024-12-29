import BoardFooter from '@component/BoardFooter';
import BoardHeader from '@component/BoardHeader';
import UserBadge from '@component/UserBadge';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';

export default function BoardLayout({
    children
}: Readonly<{ children: React.ReactNode }>): React.ReactElement {
    return (
        <Layout className="bg-background h-screen">
            <BoardHeader>
                <UserBadge displayName="keirond" />
            </BoardHeader>
            <Content>{children}</Content>
            <BoardFooter>
                <div className="text-color">Keiron Dang</div>
            </BoardFooter>
        </Layout>
    );
}
