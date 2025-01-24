import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Graduacao from "../../../../assets/images/graduacao.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.contrastText,
        height: "100vh",
        display: "flex",
        alignItems: "center"
    }))

    const StyledImg = styled("img")(() => ({
        width: "50%",
        borderRadius: "25%",
        border: `1px solid #000000`
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative">
                                <Box position="absolute" width={"100%"} top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box textAlign="center" position="relative">
                                    <StyledImg src={Graduacao} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary" variant="h1" textAlign="center" pb={2}>
                                Ildo Junior
                            </Typography>
                            <Typography color="secondary" variant="h2" textAlign="center">
                                I'm a Software Engineer
                            </Typography>
                            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <DownloadIcon />
                                        <Typography>
                                            Download CV
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center" >
                                    <StyledButton>
                                        <EmailIcon />
                                        <Typography>
                                            Contact me
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero
