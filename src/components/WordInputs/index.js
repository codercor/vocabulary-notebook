import React, { useState } from 'react'
import { Box, TextField, Grid, Button } from '@mui/material';
import SwapHorizontalCircleOutlinedIcon from '@mui/icons-material/SwapHorizontalCircleOutlined';
import { styled } from '@mui/material/styles';
import './index.css'
export default function WordInputs() {
    const style = {
        rotate: {
            transform: 'rotate(180deg)'
        }
    }
    const [isRotateIcon, setIsRotateIcon] = useState(false)
    return (
        <Box mt={5} width="100%">
            <Grid container spacing={2}>
                <Grid item md={5} xs={12}>
                    <TextField fullWidth label="Türkçe" variant="outlined" />
                </Grid>
                <Grid justifyContent="center"
                    alignItems="center" item container md={2} xs={12}>
                    <CustomIcon className="c-icon" onClick={() => setIsRotateIcon(!isRotateIcon)
                    } style={isRotateIcon ? style.rotate : {}} fontSize="large" />
                </Grid>
                <Grid item md={5} xs={12}>
                    <TextField fullWidth label="English" variant="outlined" />
                </Grid>
                <Grid item md={3} xs={0} />
                <Grid item md={6} xs={12}>
                    <Button fullWidth variant="outlined" color="primary"> Add To NoteBook </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

const CustomIcon = styled(SwapHorizontalCircleOutlinedIcon)`
transition: transform 1s;
`
