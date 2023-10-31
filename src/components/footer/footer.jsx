import {Divider, Grid, Paper, Typography} from "@mui/material";
import TextIconButton from "../text-icon-button/text-icon-button";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YoutubeIcon from '@mui/icons-material/YouTube';

function Footer() {

    return (
        <>
            <Paper sx={{bgcolor: "sarto.footer"}}>
                <Grid container alignItems="center" direction="column">
                    <Grid container justifyContent="space-between">
                        <Grid item>
                            <TextIconButton text={'Suporte'}></TextIconButton>
                            <TextIconButton text={'Blog'}></TextIconButton>
                            <TextIconButton text={'Sobre'}></TextIconButton>
                            <TextIconButton text={'Carreiras'}></TextIconButton>
                        </Grid>
                        <Grid item>
                            <TextIconButton text={'Suporte'}></TextIconButton>
                            <TextIconButton text={'Blog'}></TextIconButton>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Divider sx={{width: '100%'}} />
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <Typography variant="h6" color="white" sx={{fontWeight: 'bold'}}>
                                Acompanhe-nos
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <TextIconButton startIcon={<FacebookIcon style={{color: "#5B79A8"}}/>} text={"Facebook"}></TextIconButton>
                        </Grid>
                        <Grid item>
                            <TextIconButton startIcon={<InstagramIcon style={{color: "#D63372"}}/>} text={"Instagram"}></TextIconButton>
                        </Grid>
                        <Grid item>
                            <TextIconButton
                                startIcon={<YoutubeIcon style={{color: "#EE2B3B"}}/>}
                                text={"Youtube"}></TextIconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
}

export default Footer;