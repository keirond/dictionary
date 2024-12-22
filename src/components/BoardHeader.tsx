import { UserOutlined } from '@ant-design/icons';
import { Avatar, Badge } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React from 'react';

export function BoardHeader(): React.ReactElement {
    return (
        <Header className="flex">
            <Badge count={1}>
                <Avatar shape="circle" size={'large'} icon={<UserOutlined />} />
            </Badge>
        </Header>
    );
}
