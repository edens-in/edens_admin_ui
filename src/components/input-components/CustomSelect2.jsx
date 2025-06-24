import React from 'react'

const CustomSelect2 = ({options, value, onChange}) => {

    const handleChange = (e) => { 
        onChange(e.target.value); 
    }
    return (
        <div>
            <select onChange={(e) => handleChange(e)} value={value}>
                {/* <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option> */}
                {options.map((item, indx ) => ( 
                    <option value={item.value} key={`${indx}-item-${item.value}`}>{item.label}</option>
                ))}
            </select>
        </div>
    )
}

export default CustomSelect2