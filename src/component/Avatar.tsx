import React from 'react';

interface AvatarProps {
    imageURL: string;
}

export const Avatar: React.FC<AvatarProps> = ({ imageURL }) => {
    return <div>
        <img src={imageURL} alt="Profile picture" className="avatar" />
    </div>
}