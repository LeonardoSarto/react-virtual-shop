import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from "./components/login/login";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import AdminDashboard from "./components/admin-dashboard/admin-dashboard";
import GameDetail from "./components/game-detail/game-detail";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Body from "./components/body/body";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const themeOptions = createTheme({
    palette: {
        background: {
            paper: '#151D27',
            default: '#151D27',
        },
        text: {
            primary: '#f6f6f6',
            secondary: "#f6f6f6"
        },
        sarto: {
            footer: "#010611",
            cardColor: "#263241",
            main: '#0B7AA2',
            light: '#CC3333',
            dark: '#141C26',
            contrastText: '#f6f6f6',
        }
    },
});

root.render(
    <ThemeProvider theme={themeOptions}>
        <Header/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Body/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/dashboard" element={<AdminDashboard/>}></Route>
                <Route path="/game/*" element={<GameDetail/>}></Route>
            </Routes>
        </BrowserRouter>
        <Footer/>

    </ThemeProvider>
);

reportWebVitals();
