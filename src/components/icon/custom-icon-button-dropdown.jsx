import * as React from 'react';
import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {KeyboardArrowUp} from "@mui/icons-material";

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({theme}) => ({
    '& .MuiPaper-root': {
        background: "#fff",
        color: "#575757",
        borderRadius: 6,
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px',
        },
        '& .MuiMenuItem-root': {
            '&:hover': {
                color: "#3E5C76",
                background: "rgba(87,87,87,0.2)",
                '& .MuiSvgIcon-root': {
                    color: "#3E5C76",
                },
            },
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: "#575757",
                marginRight: theme.spacing(1.5),
            },
            i: {
                fontSize: 18,
                color: "#575757",
                marginRight: theme.spacing(1.5),
            },
        },
    },
}));


function CustomIconButtonDropdown(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="text"
                disableElevation
                onClick={handleClick}
                startIcon={props.startIcon}
                endIcon={open ? <KeyboardArrowUp/> : <KeyboardArrowDownIcon/>}
                style={{color: "#fff"}}
            >
                {props.text}
            </Button>
            <StyledMenu
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {props.menuItems.map((value, index) => {
                    return <div key={index}>
                        {value}
                    </div>
                })}
            </StyledMenu>
        </div>
    );
}

export default CustomIconButtonDropdown
