import React from 'react';

export const Checkbox = ({ selected, id }) => {
    return <input type="radio" name={id} id={id} checked={selected} onClick={() => { }} />
}