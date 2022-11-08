import React from 'react';
import { UserRow, UserRowProps } from './UserRow';

interface UserTableProps {
    userList: UserRowProps[]
}

export const UserTable: React.FC<UserTableProps> = ({ userList }) => {
    return <div className="userTable">
        {userList.map((user: UserRowProps) => {
            return <UserRow {...user} key={user.id} />
        })}
    </div>
};