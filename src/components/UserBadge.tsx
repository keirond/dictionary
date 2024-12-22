import { Avatar } from 'antd';

export default function UserBadge({ displayName }: Readonly<{ displayName: string }>) {
    return (
        <div className="flex">
            <Avatar />
            <span>{displayName}</span>
        </div>
    );
}
