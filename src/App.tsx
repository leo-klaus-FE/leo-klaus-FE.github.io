import React from 'react';
import * as userList from '../users.json';
import { UserTable } from './component/UserTable';
import { ActionBar } from './component/ActionBar';
import { ActionButton } from './component/ActionButton';
import { Search } from './component/SearchBar';
const { users } = userList
let example = users.slice(0, 3);

export const App = () => {
    return <div className="wrapper">
        <div className='header'>
            <h1>Account users</h1>
            <div className="searchContainer">
                <Search />
                <ActionButton text={"Connect users"} buttonClass={"search"} />
            </div>
        </div>
        <div className="app">
            <ActionBar />
            <UserTable userList={example} />
        </div>
    </div>
}