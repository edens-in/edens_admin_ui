import React from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { styled } from '@mui/joy/styles';
import Textarea from '@mui/joy/Textarea';


const StyledTextarea = styled(TextareaAutosize)({
    resize: 'none',
    border: 'none', // remove the native textarea border
    minWidth: 0, // remove the native textarea width
    outline: 0, // remove the native textarea outline
    padding: 0, // remove the native textarea padding
    paddingBlockStart: '1em',
    paddingInlineEnd: `var(--Textarea-paddingInline)`,
    flex: 'auto',
    alignSelf: 'stretch',
    color: 'inherit',
    backgroundColor: 'transparent',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontStyle: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
    '&::placeholder': {
        opacity: 0,
        transition: '0.1s ease-out',
    },
    '&:focus::placeholder': {
        opacity: 1,
    },
    // specific to TextareaAutosize, cannot use '&:focus ~ label'
    '&:focus + textarea + label, &:not(:placeholder-shown) + textarea + label': {
        top: '0.5rem',
        fontSize: '0.75rem',
    },
    '&:focus + textarea + label': {
        color: 'var(--Textarea-focusedHighlight)',
    },
});

const StyledLabel = styled('label')(({ theme }) => ({
    position: 'absolute',
    lineHeight: 1,
    top: 'calc((var(--Textarea-minHeight) - 1em) / 2)',
    // color: theme.vars.palette.text.tertiary,
    color: 'gray',
    fontWeight: theme.vars.fontWeight.md,
    transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
}));


  const InnerTextarea = React.forwardRef(function InnerTextarea(props, ref) {
        const id = React.useId();
        return (
            <React.Fragment>
                <StyledTextarea maxRows={10} {...props} ref={ref} id={id} />
                <StyledLabel htmlFor={id}>{props.label}</StyledLabel>
            </React.Fragment>
        );
    });


const CustomTextArea = ({ label, placeholder, value, onChange }) => {


   



   
  
    return (
        <Textarea
            slots={{ textarea: InnerTextarea }}
            slotProps={{ textarea: { placeholder: `${placeholder}`, label } }}
            value={value}
            onChange={onChange}
            sx={{ borderRadius: '6px' }}
            style={{ height: "100%" }}
        />
    )
}

export default CustomTextArea