import * as React from 'react';
import Button from '@mui/material/Button';
import {styled} from "@mui/material/styles";


function CustomButton(props) {

    const StyledButton = styled(Button)(() => ({
        width: props.width,
        height: "35px",
        color: 'inherit',
        background: props.bgcolor ?? "#263241",
        '&:hover': {
            background: "#EE2233"
        },
    }));

    return (
        <StyledButton
            variant={props.variant ?? "text"}
            disableElevation
        >
            {props.text}
        </StyledButton>
    );
}

export default CustomButton
