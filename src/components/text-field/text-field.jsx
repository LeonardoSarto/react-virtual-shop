import * as React from "react";
import {alpha, styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const StyledTextField = styled('div')(({theme}) => ({
    marginBottom: "1em",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    width: "100%",
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 0, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    },
}));

function CustomTextField(props) {
    return (
        <>
            <StyledTextField
                onChange={props.onChange}
            >
                <StyledInputBase
                    defaultValue={props.value}
                    type={props.type}
                    required={props.required}
                    placeholder={props.label}
                />
            </StyledTextField>
        </>
    );
}

export default CustomTextField;