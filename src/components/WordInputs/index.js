import React, { useState } from 'react'
import { Box, TextField, Grid, Button } from '@mui/material';
import SwapHorizontalCircleOutlinedIcon from '@mui/icons-material/SwapHorizontalCircleOutlined';
import { styled } from '@mui/material/styles';
import './index.css'
import { useDispatch } from 'react-redux';
import { addWord } from '../../app/Slices/WordsSlice'
export default function WordInputs() {
    const style = {
        rotate: {
            transform: 'rotate(180deg)'
        }
    }
    const dispatch = useDispatch();
    const [isRotateIcon, setIsRotateIcon] = useState(false);
    const [word, setWord] = useState('');
    const [translation, setTranslation] = useState('');
    const generateRandomId = () => {
        return Math.floor(Math.random() * 1000000);
    }
    const capitalize = function() {
        let word = this.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    String.prototype.capitalize = capitalize;
    const addToList = () => {
        dispatch(addWord({
            id: generateRandomId(),
            word: word.capitalize(),
            translation: translation.capitalize()
        }))
        setWord('');
        setTranslation('');
    }
    return (
        <Box mt={5} width="100%">
            <Grid container spacing={2}>
                <Grid item md={5} xs={12}>
                    {isRotateIcon ?
                        <TextField fullWidth label="Türkçe" variant="outlined" value={translation} onChange={(e) => { setTranslation(e.target.value); }} /> :
                        <TextField fullWidth label="English" variant="outlined" value={word} onChange={(e) => { setWord(e.target.value); }} />}
                </Grid>
                <Grid justifyContent="center"
                    alignItems="center" item container md={2} xs={12}>
                    <CustomIcon className="c-icon" onClick={() => setIsRotateIcon(!isRotateIcon)
                    } style={isRotateIcon ? style.rotate : {}} fontSize="large" />
                </Grid>
                <Grid item md={5} xs={12}>
                    {!isRotateIcon ?
                        <TextField fullWidth label="Türkçe" variant="outlined" value={translation} onChange={(e) => { setTranslation(e.target.value); }} /> :
                        <TextField fullWidth label="English" variant="outlined" value={word} onChange={(e) => { setWord(e.target.value); }} />}
                </Grid>
                <Grid item md={3} xs={0} />
                <Grid item md={6} xs={12}>
                    <Button onClick={() => { addToList() }} fullWidth variant="outlined" color="primary"> Add To NoteBook </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

const CustomIcon = styled(SwapHorizontalCircleOutlinedIcon)`
transition: transform 1s;
`
