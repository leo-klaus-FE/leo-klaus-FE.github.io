import React from 'react';
import { Icon } from './Icon';

interface ActionButtonProps {
    text: string
}

export const ActionButton: React.FC<ActionButtonProps> = ({ text }) => {
    return <button>
        <Icon type={text} />
        {text}
    </button>
}