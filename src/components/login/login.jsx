import {Box, Card, CardActions, CardContent, Grid} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import Button from "@mui/material/Button";
import CustomTextField from "../text-field/text-field";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login() {
        console.log("submit")
    }

    return (
        <Box sx={{bgcolor: "background.default", height: "100%"}}>
            <Grid sx={{bgcolor: "background.default", height: "80%"}} container alignItems="center"
                  justifyContent="center" direction="column">
                <Card sx={{height: 500, bgcolor: "sarto.cardColor"}}>
                    <form onSubmit={login}>
                        <CardContent sx={{justifyContent: "space-between"}}>
                            <CustomTextField type="email" required={true} onChange={(e) => setEmail(e.target.value)}
                                             label="Login"/>
                            <br/>
                            <CustomTextField type="password" required={true}
                                             onChange={(e) => setPassword(e.target.value)} label="Senha"/>
                        </CardContent>
                        <CardActions>
                            <Button href="/dashboard" color="sarto"
                                    variant="contained"
                                    sx={{width: 300}}>Cadastrar-se</Button>
                            <Button type="submit" color="sarto" variant="contained" sx={{width: 300}}>Acessar</Button>
                        </CardActions>
                    </form>
                </Card>
            </Grid>
        </Box>
    );
}

export default Login;