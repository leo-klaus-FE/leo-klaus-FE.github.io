import React from 'react';
import { Icon } from './Icon';

interface ActionButtonProps {
    text: string;
    buttonClass?: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ text, buttonClass }) => {
    return <button className={buttonClass ? buttonClass : ''}>
        <Icon type={text} />
        {text}
    </button>
}