import * as React from 'react';
import {alpha, styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {themeOptions} from "../../index";
import TextIconButton from "../text-icon-button/text-icon-button";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CustomIconButtonDropdown from "../icon/custom-icon-button-dropdown";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import {
    CardGiftcard,
    Computer,
    Games,
    Grade,
    NewReleases,
    PhoneAndroid,
    SportsEsports,
} from "@mui/icons-material";
import {Grid} from "@mui/material";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import SavingsIcon from "@mui/icons-material/Savings";
import logo from "../../assets/images/logo.png";

function Header() {

    const Search = styled('div')(({theme}) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({theme}) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({theme}) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));

    const PcMenuItems = [
        <MenuItem disableRipple>
            <Games/>
            Todos os jogos
        </MenuItem>,
        <MenuItem disableRipple>
            <LocalOfferIcon/>
            Promoções
        </MenuItem>,
        <MenuItem disableRipple>
            <NewReleases/>
            Lançamentos
        </MenuItem>,
        <MenuItem disableRipple>
            <Grade/>
            Mais populares
        </MenuItem>,
        <MenuItem disableRipple>
            <i className="fa-solid fa-gift"></i>
            Free to play
        </MenuItem>,
    ];

    const PromotionMenuItems = [
        <MenuItem disableRipple>
            <MoneyOffIcon/>
            Todas as promoções
        </MenuItem>,
        <MenuItem disableRipple>
            <SavingsIcon/>
            Abaixo de R$20,00
        </MenuItem>
    ];

    const ConsoleMenuItems = [
        <MenuItem disableRipple>
            <i className="fa-brands fa-xbox"></i>
            Xbox
        </MenuItem>,
        <MenuItem disableRipple>
            <i className="fa-brands fa-playstation"></i>
            Playstation
        </MenuItem>
    ];

    const MobileMenuItems = [
        <MenuItem disableRipple>
            <CardGiftcard/>
            Gift cards
        </MenuItem>
    ];


    return (
        <AppBar position="sticky" style={{background: themeOptions.palette.background.paper}}>
            <Toolbar>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <a href="/" style={{display: "flex", textDecoration: "none", color: "white"}}>
                            <img src={logo} height={80} alt="logo"/>
                            <h1>Virtual shop</h1>
                        </a>
                    </Grid>
                    <Grid item display="flex">
                        <CustomIconButtonDropdown menuItems={PromotionMenuItems} startIcon={<LocalOfferIcon/>} text="Promoções"/>
                        <CustomIconButtonDropdown menuItems={PcMenuItems} startIcon={<Computer/>} text="PC"/>
                        <CustomIconButtonDropdown menuItems={ConsoleMenuItems} startIcon={<SportsEsports/>} text="Console"/>
                        <CustomIconButtonDropdown menuItems={MobileMenuItems} startIcon={<PhoneAndroid/>} text="Mobile"/>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon/>
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Buscar"
                            />
                        </Search>
                    </Grid>
                    <Grid item>
                        <TextIconButton href="/login" startIcon={<AccountCircle/>} text="Entrar">
                        </TextIconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent="0" color="error">
                                <ShoppingCartIcon/>
                            </Badge>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;