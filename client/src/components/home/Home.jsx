import { Grid, Typography, Box } from '@mui/material';
import Banner from '../banner/Banner';
import Categories from './Categories';
import Posts from './post/Posts';
import { styled } from '@mui/system';

const Footer = styled(Box)`
    background-color: #333;
    padding: 20px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
`;

const CopyrightText = styled(Typography)`
    color: #FB641B;
`;

const Home = () => {
    return (
        <>
            <Banner />
            <Grid container>
                <Grid item lg={2} xs={12} sm={2}>
                    <Categories />
                </Grid>
                <Grid container item xs={12} sm={10} lg={10}>
                    <Posts />
                </Grid>
            </Grid>
            <Footer>
                <Typography variant="h4">
                    <CopyrightText>
                        &copy; The Voice Canvas
                    </CopyrightText>
                </Typography>
            </Footer>
        </>
    )
}

export default Home;
