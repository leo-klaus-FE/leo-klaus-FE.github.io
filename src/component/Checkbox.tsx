import React, { useState } from 'react';

const handleChange = () => {
    console.log('blah')
}

export const Checkbox = ({ selected, id }) => {
    let [checked, setChecked] = useState(selected);
    console.log(checked);
    return <input type="radio" name={id} id={id} checked={checked} onClick={() => setChecked(!checked)} />
}