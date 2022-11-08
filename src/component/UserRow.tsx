import React from 'react';
import { RoleColors, RoleColorMap } from '../types';
import { normaliseRole } from '../util';
import { Avatar } from './Avatar';
import { Badge } from './Badge';
import { Checkbox } from './Checkbox';
import { User } from './User';

interface UserRowProps {
    id: number,
    name: string;
    email: string;
    avatar: string;
    role: RoleColors;
}

export const UserRow: React.FC<UserRowProps> = ({ id, name, email, avatar, role }) => {
    return <div className="userRow">
        <Checkbox/>
        <Avatar imageURL={avatar} />
        <User userName={name} email={email} />
        <Badge colorScheme={RoleColorMap[role]} role={normaliseRole(role)} />
    </div>
}