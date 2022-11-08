import React from 'react';

interface UserProps {
    userName: string;
    email: string;
}

export const User: React.FC<UserProps> = ({ userName, email }) => {
    return <div className="user">
        <span>{userName}</span>
        <span className="email">{email}</span>
    </div>
}