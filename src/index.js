import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from "./pages/login/login";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AdminDashboard from "./pages/admin-dashboard/admin-dashboard";
import GameDetail from "./pages/game-detail/game-detail";
import Header from "./pages/header/header";
import Footer from "./pages/footer/footer";
import Body from "./pages/body/body";

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
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Body/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/dashboard" element={<AdminDashboard/>}></Route>
                <Route path="/game/*" element={<GameDetail/>}></Route>
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
);

reportWebVitals();
