import { Container, Grid, styled, Typography, Box } from '@mui/material'
import Avatar from "../../../../assets/images/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download'
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from '../../../../components/StyledButton/StyledButton';
import { AnimatedBackground } from '../../../../components/AnimatedBackground/AnimatedBackground';

const Hero = () => {

    const StyledHero = styled("div")(({theme})=>({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
    }))

    const StyledImg = styled("img")(({ theme })=>({
        width: "80%",
        borderRadius: "50%",
        border: `2px solid ${theme.palette.primary.contrastText}`,
    }))

  return (
    <>
    <StyledHero>
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid size={{xs:12,md:5}}>
                    <Box position="relative">
                        <Box position="absolute" width={"150%"} height={"100%"} top={-100} right={0}>
                            <AnimatedBackground />
                        </Box>
                        <Box position={"relative"} textAlign={"center"} top={15}>
                            <StyledImg src={Avatar} />
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{xs:12,md:7}}>
                <Typography color='primary.contrastText'   variant='h1' textAlign='center' pb={2}>Caio Salles</Typography>
                <Typography color='primary.contrastText' variant='h2' textAlign='center'>Desenvolvedor Web</Typography>
                <Grid container spacing={2} display={'flex'} justifyContent={'center'}  marginTop={2} pt={3}>
                <Grid size={{xs:12,md:4}} display={'flex'} justifyContent={'center'} item>
                    <StyledButton>
                    <DownloadIcon/>
                        <Typography>
                        Baixar CV
                        </Typography>
                    </StyledButton>
                </Grid>
                <Grid size={{xs:12,md:4}} display={'flex'} justifyContent={'center'} item>
                    <StyledButton>
                    <EmailIcon/>
                        <Typography>
                        Contate-me
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
