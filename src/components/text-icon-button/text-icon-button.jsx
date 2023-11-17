import Button from '@mui/material/Button';
import {styled} from "@mui/material/styles";


function TextIconButton(props) {
    const StyledButton = styled(Button)(({theme}) => ({
        fontWeight: 'bold',
        color: '#fff!important',
        '&:hover': {
            borderBottom: props.borderBottom
        },
    }));

    return (
        <>
            <StyledButton href={props.href} variant="text" startIcon={props.startIcon}>{props.text}</StyledButton>
        </>
    );
}

export default TextIconButton;