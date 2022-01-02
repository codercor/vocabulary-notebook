import React, { useEffect, useState } from 'react'
import { Box, TextField, Grid, List, ListItem } from '@mui/material';
import WordCard from '../WordCard/';
import { useSelector } from 'react-redux';
import Snackbar from '../common/Snackbar'
export default function WordList() {
    const words = useSelector(state => state.words);
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const [search,setSearch] = useState('');
    return (
        <Box className="word-list-box" mt={5} width="100%">
            <Grid container spacing={2}>
                <Grid item md={4} xs={12}>
                    <TextField value={search} onChange={(e)=>setSearch(e.target.value)} fullWidth size="small" label="Search..." variant="filled" />
                </Grid>
                <Grid item md={12} xs={12}>
                    <List sx={{
                        width: '100%',
                        overflow: 'auto',
                        maxHeight: 500,
                        '& ul': { padding: 0 },
                    }}
                        subheader={<li />} >
                        <Snackbar open={isSnackbarOpen} message="İşlem başarılı !" onClose={() => { setIsSnackbarOpen(false) }} />
                        
                        {words.filter(item=>item.word.includes(search)).map((item) => (
                            <ListItem key={item.id} sx={{ width: '100% !important' }}>
                                <WordCard snackBarOpen={() => { 
                                    setIsSnackbarOpen(true);
                                    setTimeout(() => {
                                        setIsSnackbarOpen(false);  
                                    }, 1500);
                                    }} word={item.word} id={item.id} swipeRotation={item.swipeRotation} translation={item.translation} />
                            </ListItem>))
                        }
                    </List>
                </Grid>
            </Grid>
        </Box>
    )
}
