import React from 'react';
import { UserRow } from './component/UserRow';
import * as userList from '../users.json';
import { UserTable } from './component/UserTable';
import { ActionBar } from './component/ActionBar';
const { users } = userList
let example = users.slice(0, 3);

export const App = () => {
    return <div>
        <ActionBar />
        <UserTable userList={example} />
    </div>
}