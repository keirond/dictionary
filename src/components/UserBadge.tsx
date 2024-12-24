import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

export default function UserBadge({ displayName }: Readonly<{ displayName: string }>) {
    return (
        <div className="flex items-center gap-4">
            <Avatar shape="circle" size={'large'} icon={<UserOutlined />} />
            <span className="text-lg text-white">{displayName}</span>
        </div>
    );
}
