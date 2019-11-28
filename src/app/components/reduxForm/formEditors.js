import React from "react";

export const Input = ({ input, label, type }) => {
    return <input class="form-control" {...input} placeholder={label} type={type} />;
};

export const Select = ({ input, label, list, handleChange }) => {
    let selectValues = input.value && typeof input.value === 'object' ? input.value.id : input.value;
    console.log(selectValues)
    return (
        <select class="form-control no-corner" value={selectValues} placeholder={label} onChange={handleChange}>
            {list.map(item => (
                <option key={item.id} value={item.id}>
                    {item.label}
                </option>
            ))}
        </select>
    );
};
