import React from 'react';

interface AvatarProps {
    imageURL: string;
}

export const Avatar: React.FC<AvatarProps> = ({ imageURL }) => {
    return <img src={imageURL} alt="Profile picture" className="avatar" />
}