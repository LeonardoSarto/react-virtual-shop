import * as React from 'react';
import Button from '@mui/material/Button';
import {styled} from "@mui/material/styles";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import TextField from "../text-field/text-field";
import CustomTextField from "../text-field/text-field";


function CustomDialog(props) {

    const StyledDialog = styled(Dialog)(() => ({
    }));

    return (
        <StyledDialog fullWidth open={props.open}>
            <DialogTitle>{props.title}</DialogTitle>
            <DialogContent>
                <CustomTextField
                    value={props.name}
                    autoFocus
                    label="Name"
                    type="text"
                />
                <CustomTextField
                    value={props.description}
                    label="Description"
                    type="text"
                />
                <CustomTextField
                    value={props.cost}
                    label="Cost"
                    type="text"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.close}>Cancel</Button>
                <Button onClick={props.save}>Save</Button>
            </DialogActions>
        </StyledDialog>
    );
}

export default CustomDialog
