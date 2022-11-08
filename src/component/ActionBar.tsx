import React from 'react';
import { ActionButton } from './ActionButton';

export const ActionBar = () => {
    return <div className='actionBar'>
        <span>2 users selected</span>
        <div className="actionButtons">
            <ActionButton text={"Edit"} />
            <ActionButton text={"Delete"} />
        </div>
    </div>
}