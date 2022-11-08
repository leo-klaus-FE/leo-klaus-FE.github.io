import React from 'react';
import { RoleColors, RoleColorMap } from '../types';
import { normaliseRole } from '../util';
import { Avatar } from './Avatar';
import { Badge } from './Badge';

interface UserRowProps {
    id: number,
    name: string;
    email: string;
    avatar: string;
    role: RoleColors;
}

export const UserRow: React.FC<UserRowProps> = ({ id, name, email, avatar, role }) => {
    return <div>
        <Avatar imageURL={avatar} />
        {/* <Badge colorScheme={RoleColorMap[role]} role={normaliseRole(role)} /> */}
    </div>
}