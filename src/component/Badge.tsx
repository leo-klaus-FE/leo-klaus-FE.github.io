import React from 'react';
import { RoleColors, Roles } from '../types';

interface BadgeProps {
    colorScheme: RoleColors;
    role: Roles;
}

export const Badge: React.FC<BadgeProps> = ({ colorScheme, role }) => {

    return <div className={`badge ${colorScheme}`}>
        {role}
    </div>
};