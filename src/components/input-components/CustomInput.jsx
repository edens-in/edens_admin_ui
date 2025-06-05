import React from 'react'
import TextField from '@mui/material/TextField';

const CustomInput = ({ label, value, onChange }) => {
    return (
        <div>
            <TextField
                id="outlined-basic"
                label={label}
                variant="outlined"
                value={value}
                onChange={onChange}
                style={{ width: '100%'}}
                sx={{
                    '.MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'gray', // default border color
                        },
                        '&:hover fieldset': {
                            borderColor: 'black', // on hover
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'blue', // on focus
                            borderWidth: '2px',  // optional: make it thicker
                        },
                    },
                }}
            />
        </div>
    )
}

export default CustomInput; 