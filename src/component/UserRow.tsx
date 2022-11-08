import React, { useState } from 'react';
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
    let [checked, setChecked] = useState(selected);
    return <form className={`userRow ${checked ? 'select' : ''}`}>
        <div onClick={() => setChecked(!checked)}>
            <Checkbox selected={checked} id={id} />
        </div>
        <Avatar avatar={avatar} />
        <User name={name} email={email} />
        <Badge colorScheme={RoleColorMap[role]} role={normaliseRole(role)} />
    </form>
}