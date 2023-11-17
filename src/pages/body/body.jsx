import {Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import * as React from "react";
import {useEffect} from "react";
import CustomButton from "../../components/icon/custom-button";
import CustomPagination from "../../components/pagination/custom-pagination";

function Body() {
    const [games, setGames] = React.useState([])
    const [pageGames, setPageGames] = React.useState([])

    const handleChangePage = (event, newPage) => {
        getGames(newPage - 1);
    };

    useEffect(() => {
        getGames(0);
    }, [])

    async function getGames(page) {
        fetch(`http://localhost:8080/games?size=10&page=${page}`).then(async response => {
            const json = await response.json();
            console.log(json["object"])
            setGames(json["object"]["content"])
            setPageGames(json["object"])
        }).catch(error => console.log(error));
    }

    return (
        <div>
            <div style={{marginLeft: "425px", marginRight: "425px", marginTop: "50px"}}>
                <Grid container>
                    {games.map((row, index) => {
                        return <Grid key={index} title={row.name} item xs={2.4} mb={2}>
                            <a href={`/game/${row.name.replace(" ", "-").toLowerCase()}`} style={{textDecoration: "none"}}>
                                <Card sx={{maxWidth: 200, bgcolor: "#1F2938"}}>
                                    <CardMedia
                                        sx={{height: 91}}
                                        image={row.image}
                                    />
                                    <CardContent sx={{padding: "10px"}}>
                                        <Typography variant="h7" overflow="hidden" textOverflow="ellipsis" component="div" sx={{
                                            display: '-webkit-box',
                                            fontWeight: "bold",
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 1,
                                        }}>
                                            {row.name}
                                        </Typography>
                                        <i className="fa-brands fa-steam"></i>
                                        <i className="fa-brands fa-windows"></i>
                                    </CardContent>
                                    <CardActions>
                                        <CustomButton bgcolor="#FF6666" text="-85%"/>
                                        <CustomButton width="100%" text={"R$" + row.cost.toString().replace(".", ",") + 0}/>
                                    </CardActions>
                                </Card>
                            </a>
                        </Grid>
                    })}
                </Grid>
                <CustomPagination
                    count={pageGames.totalPages}
                    page={pageGames["pageable"]?.pageNumber != null ? pageGames["pageable"]?.pageNumber + 1 : 0}
                    onChange={handleChangePage}
                />
            </div>
        </div>
    );
}

export default Body;
