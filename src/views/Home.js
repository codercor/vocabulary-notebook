import { Stack, Typography,Button } from "@mui/material";
import Typist from 'react-typist';
const Home = () => {
    return (
        <div>
            <Stack style={
                {
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/map.jpeg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }
            } direction="column" width="100%" height="30vh" justifyContent="center" alignItems="flex-start">
                <div style={{
                    backdropFilter: 'blur(10px)',
                }}>
                    <Typography style={{ paddingLeft: '30px', backdropFilter: 'blur(50px) !important' }} color="white" variant="h4" width="auto" >
                        <Typist >
                            Do you want to learn a lot of word in a short time?
                            <Typist.Backspace count={51} />
                            You are at the right place.
                            <Typist.Delay ms={500} />
                            <Button color="success" variant="contained"> Register And Learn ! </Button>
                        </Typist>
                    </Typography>

                </div>

            </Stack>

            <Stack direction="column" height="30vh" justifyContent="center" alignItems="center" spacing={2}>
                <h1>Home</h1>
            </Stack>
            <Stack direction="column" height="40vh" justifyContent="center" alignItems="center" spacing={2}>
                <h1>Home</h1>
            </Stack>
        </div>
    )
}
export default Home;