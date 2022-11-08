import React, { useState } from 'react';

const handleChange = () => {
    console.log('blah')
}

export const Checkbox = ({ selected, id }) => {
    return <input type="radio" name={id} id={id} checked={selected} onClick={() => { }} />
}