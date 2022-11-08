import React from 'react';

interface UserProps {
    name: string;
    email: string;
}

export const User: React.FC<UserProps> = ({ name, email }) => {
    return <div className="user">
        <span>{name}</span>
        <span className="email">{email}</span>
    </div>
}