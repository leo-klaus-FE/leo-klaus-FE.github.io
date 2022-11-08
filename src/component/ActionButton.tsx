import React from 'react';
import { Icon } from './Icon';

interface ActionButtonProps {
    text: string;
    buttonClass?: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ text, buttonClass }) => {
    return <button className={buttonClass ? buttonClass : 'defaultButton'}>
        <Icon type={text} />
        <span>{text}</span>
    </button>
}