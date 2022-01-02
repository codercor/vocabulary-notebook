import { Stack, Typography, Button, TextField } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";
import Typist from 'react-typist';
import { Pending, AccessTime, HolidayVillage } from '@mui/icons-material'




const Home = () => {
    const CssTextField = withStyles({
        root: {
            '& .MuiInputBase-root': {
                color: 'white',
            },
            '& .MuiInput-underline:before': {
                borderBottomColor: 'white',
            }, 
            '& .MuiInput-underline:after': {
                borderBottomColor: 'white',
            }, 
            '& .MuiInput-underline:hover:before': {
                borderBottomColor: 'white',
            }, 
            '& .MuiInputLabel-root': {
                color: 'white',
            },
            '& .MuiInputLabel-outlined': {
                color: 'white',
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: 'white',
                },
                '&:hover fieldset': {
                    borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                    borderColor: 'white',
                },
            }
        },
    })(TextField);
    return (
        <Stack>
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

            <Stack
                sx={
                    {
                        background: "rgb(52,190,240)",
                        background: "linear-gradient(90deg, rgba(52,190,240,1) 0%, rgba(71,60,60,1) 100%)"
                    }
                }
                direction="row" maxHeight="60vh" minHeight="40vh" justifyContent="space-around" flexWrap="wrap" alignItems="center"  >
                <Box sx={
                    {
                        transition: "all 0.5s ease-in-out",
                        '&:hover': {
                            width: '500px !important'
                        }
                    }
                } backgroundColor="white" borderRadius="10px" boxShadow="10px 10px 10px black" height="200px" flexDirection="column" display="flex" alignItems="center" mt={1} justifyContent="center" width="450px" border="2px black solid">
                    <AccessTime style={{ fontSize: '50px' }} />
                    <Typography variant="h5" color="primary">
                        Login and save your vocabularies
                    </Typography>
                </Box>
                <Box sx={
                    {
                        transition: "all 0.5s ease-in-out",
                        '&:hover': {
                            width: '500px !important'
                        }
                    }
                } backgroundColor="white" borderRadius="10px" flexDirection="column" boxShadow="10px 10px 10px black" height="200px" display="flex" alignItems="center" mt={1} justifyContent="center" width="450px" border="2px black solid" >
                    <Pending style={{ fontSize: '50px' }} />
                    <Typography variant="h5" color="primary">
                        Add translations
                    </Typography>
                </Box>
                <Box sx={
                    {
                        transition: "all 0.5s ease-in-out",
                        '&:hover': {
                            width: '500px !important'
                        }
                    }
                } backgroundColor="white" borderRadius="10px" flexDirection="column" boxShadow="10px 10px 10px black" height="200px" display="flex" alignItems="center" mt={1} justifyContent="center" width="450px" border="2px black solid" >
                    <HolidayVillage style={{ fontSize: '50px' }} />
                    <Typography variant="h5" color="primary">
                        Repeat regularly
                    </Typography>
                </Box>
            </Stack>
            <Stack
                sx={
                    {
                        backgroundColor: "#544d42",
                        paddingBottom:"10px"
                    }
                }
                direction="column" height="30vh" justifyContent="flex-end" alignItems="center"  spacing={10}>
                <Box width="100%"  display="flex" justifyContent="center" alignItems="center" >
                    <Typography mr="20px" fontSize="30px" color="white"> Join the waiting list </Typography>

                    <CssTextField    variant="outlined" label="email adress" />

                </Box>
                <Box> 
                    <Button variant="contained" color="primary">
                        Join
                    </Button>
                </Box> 
                <Box display="flex" > 
                    <Typography variant="overline" color="white">
                        Copyright © 2020 - All rights reserved - Made by GKayser &amp; Codercor </Typography>
                </Box>
            </Stack>
        </Stack>
    )
}
export default Home;