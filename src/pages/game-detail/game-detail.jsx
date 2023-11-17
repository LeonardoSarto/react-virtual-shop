import React, {useEffect} from "react";
import {Typography} from "@mui/material";

export default function GameDetail() {
    const [gameDetails, setGameDetails] = React.useState();

    async function getGames() {
        console.log(window.document.URL)
        fetch(`http://localhost:8080/games/${window.document.URL.substring(window.document.URL.lastIndexOf("/") + 1).replace("-", " ")}`).then(async response => {
            const json = await response.json();
            setGameDetails(json["object"])
        }).catch(error => console.log(error));
    }

    useEffect(() => {
        getGames();
    }, []);
    return (
        <>
            <div style={{display: "flex"}}>
                <img src={gameDetails?.image} alt="game"/>
                <Typography variant="h3" color="white" sx={{fontWeight: 'bold'}}>
                    {gameDetails?.name}
                </Typography>
            </div>
        </>
    );
}