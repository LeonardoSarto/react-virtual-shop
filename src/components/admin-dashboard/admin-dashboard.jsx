import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Header from "../header/header";
import CustomPagination from "../table-pagination/custom-pagination";

function AdminDashboard() {
    const [games, setGames] = React.useState([])
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

    return (
        <Box sx={{width: '100%'}}>
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {games.map((row, index) => {

                            return (
                                <TableRow
                                    hover
                                    key={row.id}
                                >
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.description}</TableCell>
                                    <TableCell>{row.cost}</TableCell>
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
