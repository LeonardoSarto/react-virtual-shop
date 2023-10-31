import Button from '@mui/material/Button';
import {withStyles} from "@mui/styles";


function TextIconButton(props) {

    const StyledButton = withStyles({
        root: {
            fontWeight: 'bold',
            color: '#fff!important',
            '&:hover': {
                borderBottom: props.borderBottom
            },
        }
    })(Button);

    return (
        <>
            <StyledButton href={props.href} variant="text" startIcon={props.startIcon}>{props.text}</StyledButton>
        </>
    );
}

export default TextIconButton;