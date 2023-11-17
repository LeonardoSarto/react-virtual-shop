import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CustomPagination from "../../components/pagination/custom-pagination";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import CustomDialog from "../../components/dialog/custom-dialog";

function AdminDashboard() {
    const [games, setGames] = React.useState([])
    const [openDialog, setOpenDialog] = React.useState(false)
    const [pageGames, setPageGames] = React.useState([])

    async function getGames(page) {
        fetch(`http://localhost:8080/games?size=10&page=${page}`).then(async response => {
            const json = await response.json();
            setGames(json["object"]["content"])
            setPageGames(json["object"])
        }).catch(error => console.log(error));
    }

    React.useEffect(() => {
        getGames(0)
    }, []);

    const handleChangePage = (event, newPage) => {
        getGames(newPage - 1);
    };

    const handleClickOpen = (event) => {
        console.log(`Event: ${event}`)
        setOpenDialog(true);
    };

    const handleClickClose = () => {
        setOpenDialog(false);
    };

    const updateGame = async ()=>  {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "id": 1,
            "name": "Teste 1",
            "description": "Produto genérico"
        });
        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        await fetch("http://localhost:8080/games", requestOptions);
        await getGames(pageGames["pageable"]?.pageNumber);
        handleClickClose();
    }


    return (
        <Box sx={{width: '100%'}}>
            <Button variant="text">Cadastrar</Button>
            <TableContainer component={Paper}>
                <Table
                    sx={{minWidth: 650}}
                    aria-label="simple table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Cost</TableCell>
                            <TableCell>Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {games.map((row, index) => {

                            return (
                                <TableRow
                                    key={row.id}
                                >
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.description}</TableCell>
                                    <TableCell>{row.cost}</TableCell>
                                    <TableCell>
                                        <IconButton onClick={handleClickOpen} aria-label="edit">
                                            <EditIcon sx={{color: "white"}}/>
                                        </IconButton>
                                        <CustomDialog save={updateGame} name={row.name} description={row.description} cost={row.cost}
                                                      title="Change game information" close={handleClickClose}
                                                      open={openDialog}></CustomDialog>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                        {games.length < 1 && (
                            <TableRow>
                                <TableCell colSpan={6}/>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <CustomPagination
                    count={pageGames.totalPages}
                    page={pageGames["pageable"]?.pageNumber != null ? pageGames["pageable"]?.pageNumber + 1 : 0}
                    onChange={handleChangePage}
                />
            </TableContainer>
        </Box>
    );
}

export default AdminDashboard;
