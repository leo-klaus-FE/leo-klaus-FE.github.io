import React from 'react';

interface AvatarProps {
    avatar: string;
}

export const Avatar: React.FC<AvatarProps> = ({ avatar }) => {
    return <img src={avatar} alt="Profile picture" className="avatar" />
}