import React from 'react';
import { RoleColors, RoleColorMap } from '../types';
import { normaliseRole } from '../util';
import { Avatar } from './Avatar';
import { Badge } from './Badge';
import { Checkbox } from './Checkbox';
import { User } from './User';

export interface UserRowProps {
    id: number,
    name: string;
    email: string;
    avatar: string;
    role: RoleColors;
    selected: boolean;
}

export const UserRow: React.FC<UserRowProps> = ({ id, name, email, avatar, role, selected }) => {
    return <form className="userRow">
        <Checkbox selected={selected} id={id} />
        <Avatar avatar={avatar} />
        <User name={name} email={email} />
        <Badge colorScheme={RoleColorMap[role]} role={normaliseRole(role)} />
    </form>
}