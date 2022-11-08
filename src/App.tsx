import React from 'react';
import * as userList from '../users.json';
import { UserTable } from './component/UserTable';
import { ActionBar } from './component/ActionBar';
import { ActionButton } from './component/ActionButton';
const { users } = userList
let example = users.slice(0, 3);

export const App = () => {
    return <div>
        <div className='header'>
            <h1>Account users</h1>
            <input type="text" className="searchInput" placeholder="Search" />
            <ActionButton text={"Connect users"} buttonClass={"search"} />
        </div>
        <div className="app">
            <ActionBar />
            <UserTable userList={example} />
        </div>
    </div>
}