import React from 'react';
import { Badge } from './component/Badge';
import { UserRow } from './component/UserRow';
import * as userList from '../users.json';
const { users } = userList
let example = users[3]

export const App = () => {
    return <div>
        <UserRow {...example} />
    </div>
}